/**
 * Sumber laporan keuangan Peta Konglomerat (GitHub Pages, tanpa backend):
 * 1. Cache localStorage
 * 2. assets/data/funda-idx.json (bundle repo)
 * 3. Finnhub API (token gratis — sama seperti kalender korporasi)
 * 4. fundaRealDB lokal
 * 5. generateFunda (estimasi, hanya jika semua gagal)
 */

const FUNDA_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const FUNDA_YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

let fundaIdxBundle = null;
let fundaIdxBundlePromise = null;

function fundaCacheKey(ticker) {
    return `ewoks_funda_v2_${String(ticker).toUpperCase()}`;
}

function readFundaCache(ticker) {
    try {
        const raw = localStorage.getItem(fundaCacheKey(ticker));
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed?.data || !parsed?.ts) return null;
        if (Date.now() - parsed.ts > FUNDA_CACHE_TTL_MS) return null;
        return parsed.data;
    } catch (_) {
        return null;
    }
}

function writeFundaCache(ticker, data) {
    try {
        localStorage.setItem(fundaCacheKey(ticker), JSON.stringify({ ts: Date.now(), data }));
    } catch (_) {}
}

async function loadFundaIdxBundle() {
    if (fundaIdxBundle) return fundaIdxBundle;
    if (fundaIdxBundlePromise) return fundaIdxBundlePromise;
    fundaIdxBundlePromise = (async () => {
        try {
            const base = typeof EwoksSiteContext !== 'undefined' ? EwoksSiteContext.basePath : '/';
            const v = window.EWOKS_ASSET_V || '1';
            const res = await fetch(`${base}assets/data/funda-idx.json?v=${v}`);
            if (!res.ok) throw new Error('bundle missing');
            const json = await res.json();
            fundaIdxBundle = json.tickers || json;
            return fundaIdxBundle;
        } catch (_) {
            fundaIdxBundle = {};
            return fundaIdxBundle;
        }
    })();
    return fundaIdxBundlePromise;
}

/** Konversi nilai Finnhub/IDX ke triliun Rupiah (sesuai tabel UI). */
function toTriliunIdr(value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n === 0) return 0;
    const abs = Math.abs(n);
    if (abs >= 1e12) return +(n / 1e12).toFixed(1);
    if (abs >= 1e3) return +(n / 1e6).toFixed(1);
    return +n.toFixed(1);
}

function seriesFromFinnhubRows(icRows, bsRows, cfRows, isBank) {
    const byYear = (rows, pick) => {
        const map = {};
        for (const row of rows || []) {
            const period = row.period || row.year;
            if (!period) continue;
            const y = parseInt(String(period).slice(0, 4), 10);
            if (!FUNDA_YEARS.includes(y)) continue;
            map[y] = pick(row);
        }
        return FUNDA_YEARS.map((y) => map[y]);
    };

    const revRaw = byYear(icRows, (r) => r.revenue ?? r.netInterestIncome ?? r.totalRevenue ?? r.interestIncome);
    const netRaw = byYear(icRows, (r) => r.netIncome ?? r.netIncomeCommonStockholders);
    const cogsRaw = byYear(icRows, (r) => {
        if (isBank) return 0;
        const c = r.costOfGoodsSold ?? r.costOfRevenue;
        return c != null ? -Math.abs(toTriliunIdr(c)) : 0;
    });
    const assetRaw = byYear(bsRows, (r) => r.totalAssets ?? r.assets);
    const eqRaw = byYear(bsRows, (r) => r.totalEquity ?? r.totalStockholdersEquity ?? r.equity);
    const interestRaw = byYear(icRows, (r) => r.interestExpense ?? 0);
    const taxRaw = byYear(icRows, (r) => r.incomeTaxExpense ?? r.provisionForIncomeTaxes ?? 0);
    const fcfRaw = byYear(cfRows, (r) => {
        const ocf = r.netCashProvidedByOperatingActivities ?? r.operatingCashFlow;
        const capex = r.capitalExpenditure ?? r.investmentsInPropertyPlantAndEquipment;
        if (ocf == null) return null;
        return toTriliunIdr(Number(ocf) + Number(capex || 0));
    });

    const rev = revRaw.map((v) => (v != null ? toTriliunIdr(v) : null));
    const net = netRaw.map((v) => (v != null ? toTriliunIdr(v) : null));
    const asset = assetRaw.map((v) => (v != null ? toTriliunIdr(v) : null));
    const eq = eqRaw.map((v) => (v != null ? toTriliunIdr(v) : null));

    const fillForward = (arr, fallback = 0) => {
        let last = fallback;
        return arr.map((v) => {
            if (v != null && Number.isFinite(v) && v !== 0) {
                last = v;
                return v;
            }
            return last;
        });
    };

    return {
        rev: fillForward(rev),
        cogs: fillForward(cogsRaw.map((v) => (v == null ? 0 : v))),
        net: fillForward(net),
        asset: fillForward(asset),
        eq: fillForward(eq),
        interest: fillForward(interestRaw.map((v) => (v != null ? toTriliunIdr(v) : 0))),
        tax: fillForward(taxRaw.map((v) => (v != null ? toTriliunIdr(v) : 0))),
        fcf: fillForward(fcfRaw.map((v) => (v != null ? v : 0))),
        divYield: FUNDA_YEARS.map(() => 0)
    };
}

function computeMosZ(d, isBank) {
    const asset = parseFloat(d.asset[5]) || 0;
    const eq = parseFloat(d.eq[5]) || 1;
    const net = parseFloat(d.net[5]) || 0;
    const rev = parseFloat(d.rev[5]) || 1;
    let z = 3.5;
    if (!isBank && asset > 0) {
        const tl = Math.max(asset - eq, asset * 0.01);
        z = 1.2 * 0.1 + 1.4 * (net / asset) + 3.3 * (net * 1.15 / asset) + 0.6 * (eq / tl) + 1.0 * (rev / asset);
        z = Math.min(6, Math.max(0.5, z));
    }
    d.zscore = +z.toFixed(2);
    d.mos = +(8 + (d.zscore * 3)).toFixed(1);
}

async function fetchFinnhubFinancials(ticker, token) {
    const sym = `${String(ticker).toUpperCase()}.JK`;
    const headers = { Accept: 'application/json' };
    const q = (statement) =>
        `https://finnhub.io/api/v1/stock/financials?symbol=${encodeURIComponent(sym)}&statement=${statement}&freq=annual&token=${encodeURIComponent(token)}`;

    const [icRes, bsRes, cfRes, metricRes] = await Promise.all([
        fetch(q('ic'), { headers }),
        fetch(q('bs'), { headers }),
        fetch(q('cf'), { headers }),
        fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${encodeURIComponent(sym)}&metric=all&token=${encodeURIComponent(token)}`, { headers })
    ]);

    if (!icRes.ok) throw new Error(`Finnhub ${icRes.status}`);

    const icJson = await icRes.json();
    const bsJson = bsRes.ok ? await bsRes.json() : { financials: [] };
    const cfJson = cfRes.ok ? await cfRes.json() : { financials: [] };
    const metricJson = metricRes.ok ? await metricRes.json() : null;

    const icRows = icJson.financials || [];
    const bsRows = bsJson.financials || [];
    const cfRows = cfJson.financials || [];
    if (!icRows.length) throw new Error('Finnhub: tidak ada laporan keuangan');

    return { icRows, bsRows, cfRows, metricJson };
}

async function fetchFundaFromFinnhub(ticker, sector, token) {
    const isBank = String(sector).includes('Perbankan');
    const { icRows, bsRows, cfRows, metricJson } = await fetchFinnhubFinancials(ticker, token);
    const series = seriesFromFinnhubRows(icRows, bsRows, cfRows, isBank);

    const dy = metricJson?.metric?.dividendYieldIndicatedAnnual;
    if (dy != null && Number.isFinite(Number(dy))) {
        const pct = Number(dy) > 1 ? Number(dy) : Number(dy) * 100;
        series.divYield = FUNDA_YEARS.map(() => +pct.toFixed(1));
    }

    const out = { ...series, source: 'finnhub', sourceLabel: 'Finnhub (data emiten IDX)', updated: new Date().toISOString().slice(0, 10) };
    computeMosZ(out, isBank);
    return out;
}

function cloneFundaEntry(entry, source, sourceLabel) {
    const copy = JSON.parse(JSON.stringify(entry));
    copy.source = source;
    copy.sourceLabel = sourceLabel || source;
    copy.updated = copy.updated || new Date().toISOString().slice(0, 10);
    return copy;
}

/**
 * Ambil data laporan keuangan terbaik yang tersedia untuk ticker.
 * @returns {Promise<{data: object, source: string, sourceLabel: string}>}
 */
async function resolveKongloFunda(ticker, sector) {
    const t = String(ticker).toUpperCase();

    const cached = readFundaCache(t);
    if (cached?.rev?.length) {
        return { data: cached, source: cached.source || 'cache', sourceLabel: cached.sourceLabel || 'Cache lokal' };
    }

    const bundle = await loadFundaIdxBundle();
    if (bundle[t] && bundle[t].rev) {
        const data = cloneFundaEntry(bundle[t], bundle[t].source || 'bundle', bundle[t].sourceLabel || 'Database Ewoks (referensi pasar)');
        writeFundaCache(t, data);
        return { data, source: data.source, sourceLabel: data.sourceLabel };
    }

    if (typeof fundaRealDB !== 'undefined' && fundaRealDB[t]) {
        const data = cloneFundaEntry(fundaRealDB[t], 'curated', 'Data kurasi (laporan keuangan publik)');
        writeFundaCache(t, data);
        return { data, source: 'curated', sourceLabel: data.sourceLabel };
    }

    const token = typeof getEwoksFinnhubToken === 'function' ? getEwoksFinnhubToken() : '';
    if (token) {
        try {
            const data = await fetchFundaFromFinnhub(t, sector, token);
            writeFundaCache(t, data);
            return { data, source: 'finnhub', sourceLabel: data.sourceLabel };
        } catch (err) {
            console.warn('Finnhub funda', t, err);
        }
    }

    const data = generateFunda(t, sector);
    data.source = 'estimate';
    data.sourceLabel = 'Estimasi internal (isi token Finnhub untuk data live)';
    return { data, source: 'estimate', sourceLabel: data.sourceLabel };
}
