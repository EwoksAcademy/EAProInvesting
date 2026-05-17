/**
 * Bangun assets/data/funda-idx.json dari Yahoo Finance (.JK).
 * Kolom 2020–2025: laporan tahunan. Kolom Q1 2026: kuartal terbaru (Mar 2026).
 * Dividend yield: historis per tahun + TTM.
 * Jalankan: node tools/build-funda-idx.mjs --force
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'assets/js/pages/page-konglo-data-funda.js');
const outPath = path.join(root, 'assets/data/funda-idx.json');

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
const IDX_Q1 = 6;

const ANNUAL_TYPES = [
    'annualTotalRevenue',
    'annualNetInterestIncome',
    'annualInterestIncome',
    'annualNetIncome',
    'annualCostOfRevenue',
    'annualTotalAssets',
    'annualStockholdersEquity',
    'annualInterestExpense',
    'annualTaxProvision',
    'annualFreeCashFlow',
    'annualOperatingCashFlow',
    'annualCapitalExpenditure'
];

const QUARTERLY_TYPES = [
    'quarterlyTotalRevenue',
    'quarterlyNetInterestIncome',
    'quarterlyInterestIncome',
    'quarterlyNetIncome',
    'quarterlyCostOfRevenue',
    'quarterlyTotalAssets',
    'quarterlyStockholdersEquity',
    'quarterlyInterestExpense',
    'quarterlyTaxProvision',
    'quarterlyFreeCashFlow',
    'quarterlyOperatingCashFlow',
    'quarterlyCapitalExpenditure'
];

const MIN_TRIL = 0.05;
const MAX_NPM = 85;
const MAX_ROE = 80;
const MAX_ROA = 35;

const ALL_TYPES = [...ANNUAL_TYPES, ...QUARTERLY_TYPES].join(',');

const src = fs.readFileSync(srcPath, 'utf8');
const tickers = [...new Set([...src.matchAll(/ticker:\s*"([A-Z0-9]+)"/g)].map((m) => m[1]))].sort();

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

let usdIdrRate = null;

async function getUsdIdrRate() {
    if (usdIdrRate) return usdIdrRate;
    try {
        const res = await fetch('https://query2.finance.yahoo.com/v8/finance/chart/USDIDR=X?interval=1d&range=5d', {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        const json = await res.json();
        const p = json?.chart?.result?.[0]?.meta?.regularMarketPrice;
        usdIdrRate = Number.isFinite(p) && p > 0 ? p : 16000;
    } catch (_) {
        usdIdrRate = 16000;
    }
    return usdIdrRate;
}

function parseFmtToTriliun(fmt, currencyCode, fxUsdIdr) {
    if (!fmt) return null;
    const s = String(fmt).replace(/,/g, '').trim();
    const m = s.match(/^(-?[\d.]+)\s*([KMBT])?$/i);
    if (!m) return null;
    let n = parseFloat(m[1]);
    if (!Number.isFinite(n)) return null;
    const unit = (m[2] || '').toUpperCase();
    const mult = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 }[unit] || 1;
    let idr = n * mult;
    if (String(currencyCode).toUpperCase() === 'USD') idr *= fxUsdIdr;
    return +(idr / 1e12).toFixed(1);
}

function toTriliunFromRow(row, fxUsdIdr) {
    if (!row?.reportedValue) return null;
    const cc = row.currencyCode || 'IDR';
    const fromFmt = parseFmtToTriliun(row.reportedValue.fmt, cc, fxUsdIdr);
    if (fromFmt != null) return fromFmt;
    const raw = row.reportedValue.raw;
    if (raw == null || !Number.isFinite(Number(raw))) return null;
    const n = Number(raw);
    if (String(cc).toUpperCase() === 'USD') return +((n * fxUsdIdr) / 1e12).toFixed(1);
    return +(n / 1e12).toFixed(1);
}

function yearFromAsOf(asOf) {
    return parseInt(String(asOf).slice(0, 4), 10);
}

function seriesByYear(rows, fxUsdIdr) {
    const map = {};
    for (const row of rows || []) {
        const y = yearFromAsOf(row.asOfDate);
        if (!YEARS.includes(y) || y === 2026) continue;
        map[y] = toTriliunFromRow(row, fxUsdIdr);
    }
    return YEARS.map((y) => (y === 2026 ? null : map[y] ?? null));
}

/** Q1 2026: periode berakhir Maret 2026, atau kuartal pertama tahun 2026. */
function pickQ12026(rows, fxUsdIdr) {
    if (!rows?.length) return null;
    const sorted = [...rows].sort((a, b) => String(b.asOfDate).localeCompare(String(a.asOfDate)));
    let row = sorted.find((r) => String(r.asOfDate).startsWith('2026-03'));
    if (!row) row = sorted.find((r) => String(r.asOfDate).startsWith('2026-06'));
    if (!row) row = sorted.find((r) => yearFromAsOf(r.asOfDate) === 2026);
    if (!row) return null;
    return toTriliunFromRow(row, fxUsdIdr);
}

function mergeQ1(seriesAnnual, q1Value) {
    const out = [...seriesAnnual];
    if (q1Value != null && !Number.isNaN(q1Value)) out[IDX_Q1] = q1Value;
    else out[IDX_Q1] = 0;
    return out;
}

function fillForward(arr) {
    let last = 0;
    return arr.map((v, i) => {
        if (i === IDX_Q1) return v ?? 0;
        if (v != null && !Number.isNaN(v)) {
            last = v;
            return v;
        }
        return last;
    });
}

/** Referensi historis 2020–2021 (Yahoo IDX sering tidak punya tahunan lengkap). */
function loadFundaRealDB() {
    try {
        const text = fs.readFileSync(srcPath, 'utf8');
        const start = text.indexOf('const fundaRealDB = ');
        if (start < 0) return {};
        const brace = text.indexOf('{', start);
        let depth = 0;
        let end = brace;
        for (let i = brace; i < text.length; i++) {
            if (text[i] === '{') depth++;
            if (text[i] === '}') {
                depth--;
                if (depth === 0) {
                    end = i + 1;
                    break;
                }
            }
        }
        return Function(`"use strict"; return (${text.slice(brace, end)});`)();
    } catch (_) {
        return {};
    }
}

function legacyNum(v) {
    if (v == null) return null;
    const n = parseFloat(String(v).replace(/[()]/g, ''));
    return Number.isFinite(n) ? Math.abs(n) : null;
}

/** Isi slot kosong dari referensi (indeks 0–5); Q1 tetap dari Yahoo. */
function mergeLegacySeries(yahooArr, legacyArr, q1FromYahoo) {
    const out = [...yahooArr];
    if (!legacyArr?.length) return out;
    for (let i = 0; i < 6; i++) {
        const y = out[i];
        const missing = y == null || y === 0 || Number.isNaN(y);
        if (!missing) continue;
        const leg = legacyNum(legacyArr[i]);
        if (leg != null && leg >= MIN_TRIL) out[i] = leg;
    }
    if (q1FromYahoo != null && !Number.isNaN(q1FromYahoo)) out[IDX_Q1] = q1FromYahoo;
    return out;
}

function pctRatio(numer, denom, maxAbs) {
    if (denom < MIN_TRIL || Math.abs(numer) < 1e-6) return null;
    const p = (numer / denom) * 100;
    if (!Number.isFinite(p) || Math.abs(p) > maxAbs) return null;
    return +p.toFixed(1);
}

/** NPM, margin bunga/kotor, ROE, ROA per kolom (ROE/ROA Q1 = annualized). */
function computeDerivedMetrics(row, isBank) {
    const npm = [];
    const grossMargin = [];
    const roe = [];
    const roa = [];

    for (let i = 0; i < 7; i++) {
        const rev = row.rev[i] || 0;
        const net = row.net[i] || 0;
        const asset = row.asset[i] || 0;
        const eq = row.eq[i] || 0;
        const intExp = Math.abs(row.interest[i] || 0);
        const hasFlow = rev >= MIN_TRIL || net >= MIN_TRIL;
        const hasBs = asset >= MIN_TRIL && eq >= MIN_TRIL;

        if (!hasFlow && !hasBs) {
            npm.push(null);
            grossMargin.push(null);
            roe.push(null);
            roa.push(null);
            continue;
        }

        npm.push(pctRatio(net, rev, MAX_NPM));

        if (isBank) {
            grossMargin.push(rev >= MIN_TRIL ? pctRatio(rev - intExp, rev, MAX_NPM) : null);
        } else {
            const cogs = Math.abs(row.cogs[i] || 0);
            grossMargin.push(rev >= MIN_TRIL ? pctRatio(rev - cogs, rev, MAX_NPM) : null);
        }

        const annualize = i === IDX_Q1 ? 4 : 1;
        roe.push(hasBs && net >= MIN_TRIL ? pctRatio(net * annualize, eq, MAX_ROE) : null);
        roa.push(hasBs && net >= MIN_TRIL ? pctRatio(net * annualize, asset, MAX_ROA) : null);
    }

    return { npm, grossMargin, roe, roa };
}

function altmanZ(asset, eq, rev, net, isBank) {
    if (isBank || !asset || !eq || asset <= 0) return 3.5;
    const ta = asset;
    const tl = Math.max(ta - eq, ta * 0.01);
    const wc = ta * 0.1;
    const re = net / ta;
    const ebit = net * 1.15;
    const z = 1.2 * (wc / ta) + 1.4 * re + 3.3 * (ebit / ta) + 0.6 * (eq / tl) + 1.0 * (rev / ta);
    return +Math.min(6, Math.max(0.5, z)).toFixed(2);
}

function computeMos(z) {
    return +(8 + z * 3).toFixed(1);
}

async function fetchYahooTimeseries(ticker) {
    const sym = `${ticker}.JK`;
    const period1 = Math.floor(new Date('2019-01-01').getTime() / 1000);
    const period2 = Math.floor(Date.now() / 1000) + 86400 * 400;
    const url =
        `https://query2.finance.yahoo.com/ws/fundamentals-timeseries/v1/finance/timeseries/${sym}` +
        `?symbol=${encodeURIComponent(sym)}&type=${ALL_TYPES}&period1=${period1}&period2=${period2}`;
    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            Accept: 'application/json'
        }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const results = json?.timeseries?.result;
    if (!results?.length) throw new Error('no timeseries');
    const byType = {};
    for (const block of results) {
        const type = block?.meta?.type?.[0];
        if (type) byType[type] = block[type] || [];
    }
    return byType;
}

function closePriceNearYearEnd(timestamps, closes, year) {
    let bestPrice = null;
    let bestTs = 0;
    for (let i = 0; i < timestamps.length; i++) {
        const ts = timestamps[i];
        if (!ts) continue;
        const y = new Date(ts * 1000).getFullYear();
        if (y !== year) continue;
        const c = closes[i];
        if (c != null && Number.isFinite(c) && ts >= bestTs) {
            bestTs = ts;
            bestPrice = c;
        }
    }
    return bestPrice;
}


async function fetchDividendYieldSeries(ticker) {
    const sym = `${ticker}.JK`;
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=5y&events=div`;
    const yields = YEARS.map(() => 0);
    try {
        const res = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        if (!res.ok) return yields;
        const json = await res.json();
        const result = json?.chart?.result?.[0];
        if (!result) return yields;

        const dividends = result.events?.dividends || {};
        const timestamps = result.timestamp || [];
        const closes = result.indicators?.quote?.[0]?.close || [];
        const nowPrice = result.meta?.regularMarketPrice;

        const divByYear = {};
        for (const [ts, div] of Object.entries(dividends)) {
            const y = new Date(Number(ts) * 1000).getFullYear();
            if (!YEARS.includes(y)) continue;
            divByYear[y] = (divByYear[y] || 0) + (div.amount || 0);
        }

        for (let i = 0; i < YEARS.length; i++) {
            const y = YEARS[i];
            const divSum = divByYear[y] || 0;
            let price = closePriceNearYearEnd(timestamps, closes, y);
            if (y === 2026 && nowPrice > 0) price = nowPrice;
            if (divSum > 0 && price > 0) {
                yields[i] = +((divSum / price) * 100).toFixed(1);
            }
        }

        const ttmDiv = Object.entries(dividends)
            .filter(([ts]) => Number(ts) * 1000 >= Date.now() - 365 * 86400 * 1000)
            .reduce((s, [, d]) => s + (d.amount || 0), 0);
        if (ttmDiv > 0 && nowPrice > 0) {
            yields[IDX_Q1] = +((ttmDiv / nowPrice) * 100).toFixed(1);
            if (!yields[5]) yields[5] = yields[IDX_Q1];
        }
    } catch (_) {}
    return yields;
}

function normalize(ticker, byType, isBank, fxUsdIdr, divYield, legacy) {
    const revInterestA = seriesByYear(byType.annualNetInterestIncome, fxUsdIdr);
    const revTotalA = seriesByYear(byType.annualTotalRevenue, fxUsdIdr);
    let rev = isBank
        ? revInterestA.map((v, i) => (v != null ? v : revTotalA[i]))
        : revTotalA;

    const revQ = isBank
        ? pickQ12026(byType.quarterlyNetInterestIncome, fxUsdIdr) ??
          pickQ12026(byType.quarterlyTotalRevenue, fxUsdIdr)
        : pickQ12026(byType.quarterlyTotalRevenue, fxUsdIdr);

    const netA = seriesByYear(byType.annualNetIncome, fxUsdIdr);
    const netQ = pickQ12026(byType.quarterlyNetIncome, fxUsdIdr);

    const cogsA = isBank
        ? YEARS.map((y) => (y === 2026 ? null : 0))
        : seriesByYear(byType.annualCostOfRevenue, fxUsdIdr).map((v) => (v != null ? -Math.abs(v) : null));
    const cogsQ = isBank ? 0 : pickQ12026(byType.quarterlyCostOfRevenue, fxUsdIdr);

    const assetA = seriesByYear(byType.annualTotalAssets, fxUsdIdr);
    const assetQ = pickQ12026(byType.quarterlyTotalAssets, fxUsdIdr);

    const eqA = seriesByYear(byType.annualStockholdersEquity, fxUsdIdr);
    const eqQ = pickQ12026(byType.quarterlyStockholdersEquity, fxUsdIdr);

    const interestA = seriesByYear(byType.annualInterestExpense, fxUsdIdr);
    const interestQ = pickQ12026(byType.quarterlyInterestExpense, fxUsdIdr);

    const taxA = seriesByYear(byType.annualTaxProvision, fxUsdIdr);
    const taxQ = pickQ12026(byType.quarterlyTaxProvision, fxUsdIdr);

    const fcfA = seriesByYear(byType.annualFreeCashFlow, fxUsdIdr);
    const ocfA = seriesByYear(byType.annualOperatingCashFlow, fxUsdIdr);
    const capexA = seriesByYear(byType.annualCapitalExpenditure, fxUsdIdr);
    const fcfAnnual = fcfA.map((v, i) => {
        if (i === IDX_Q1) return null;
        if (v != null) return v;
        if (ocfA[i] != null) return +(ocfA[i] + (capexA[i] || 0)).toFixed(1);
        return null;
    });

    let fcfQ = pickQ12026(byType.quarterlyFreeCashFlow, fxUsdIdr);
    const ocfQ = pickQ12026(byType.quarterlyOperatingCashFlow, fxUsdIdr);
    if (fcfQ == null && ocfQ != null) {
        const capQ = pickQ12026(byType.quarterlyCapitalExpenditure, fxUsdIdr);
        fcfQ = +(ocfQ + (capQ || 0)).toFixed(1);
    }

    let out = {
        rev: fillForward(mergeQ1(rev, revQ)),
        cogs: fillForward(mergeQ1(cogsA, cogsQ != null ? -Math.abs(cogsQ) : isBank ? 0 : null)),
        net: fillForward(mergeQ1(netA, netQ)),
        asset: fillForward(mergeQ1(assetA, assetQ)),
        eq: fillForward(mergeQ1(eqA, eqQ)),
        interest: fillForward(mergeQ1(interestA, interestQ)),
        tax: fillForward(mergeQ1(taxA, taxQ)),
        fcf: fillForward(mergeQ1(fcfAnnual, fcfQ)),
        ocf: fillForward(mergeQ1(ocfA, ocfQ)),
        divYield: divYield || YEARS.map(() => 0),
        source: 'yahoo',
        sourceLabel: 'Yahoo Finance (tahunan + Q1 2026)',
        updated: new Date().toISOString().slice(0, 10)
    };

    if (legacy) {
        out.rev = mergeLegacySeries(out.rev, legacy.rev, revQ);
        out.net = mergeLegacySeries(out.net, legacy.net, netQ);
        out.asset = mergeLegacySeries(out.asset, legacy.asset, assetQ);
        out.eq = mergeLegacySeries(out.eq, legacy.eq, eqQ);
        out.interest = mergeLegacySeries(out.interest, legacy.interest, interestQ);
        out.tax = mergeLegacySeries(out.tax, legacy.tax, taxQ);
        out.fcf = mergeLegacySeries(out.fcf, legacy.fcf, fcfQ);
        if (legacy.ocf) out.ocf = mergeLegacySeries(out.ocf, legacy.ocf, ocfQ);
        for (let i = 0; i < 7; i++) {
            const dy = parseFloat(legacy.divYield?.[i]);
            if (i < 6 && (!out.divYield[i] || out.divYield[i] === 0) && dy > 0) out.divYield[i] = dy;
        }
        out.sourceLabel = 'Yahoo Finance + referensi historis (2020–2026)';
    }

    const derived = computeDerivedMetrics(out, isBank);
    out.npm = derived.npm;
    out.grossMargin = derived.grossMargin;
    out.roe = derived.roe;
    out.roa = derived.roa;

    const zIdx = out.net[5] > 0 ? 5 : out.net[IDX_Q1] > 0 ? IDX_Q1 : 5;
    out.zscore = altmanZ(out.asset[zIdx], out.eq[zIdx], out.rev[zIdx], out.net[zIdx], isBank);
    out.mos = computeMos(out.zscore);

    const hasData = out.net.some((v) => v > 0) || out.rev.some((v) => v > 0);
    if (!hasData) throw new Error('empty financials');
    return out;
}

function sectorForTicker(ticker, srcText) {
    const m = srcText.match(new RegExp(`ticker:\\s*"${ticker}"[^}]+sector:\\s*"([^"]+)"`));
    return m ? m[1] : '';
}

async function main() {
    const force = process.argv.includes('--force');
    let existing = {};
    try {
        const old = JSON.parse(fs.readFileSync(outPath, 'utf8'));
        existing = old.tickers || old;
    } catch (_) {}

    const legacyDb = loadFundaRealDB();

    const out = {
        meta: {
            source: 'Yahoo Finance — tahunan + Q1 2026 + metrik turunan',
            unit: 'triliun IDR (kolom Q1 2026 = kuartal; ROE/ROA Q1 annualized)',
            built: new Date().toISOString()
        },
        tickers: { ...existing }
    };

    const fxUsdIdr = await getUsdIdrRate();
    console.log(`USD/IDR: ${fxUsdIdr.toFixed(0)}`);

    let ok = 0;
    let skip = 0;
    let fail = 0;

    for (const ticker of tickers) {
        if (
            !force &&
            out.tickers[ticker]?.source === 'yahoo' &&
            out.tickers[ticker]?.rev?.[IDX_Q1] > 0 &&
            Array.isArray(out.tickers[ticker]?.npm)
        ) {
            skip++;
            continue;
        }
        const sector = sectorForTicker(ticker, src);
        const isBank = sector.includes('Perbankan');
        try {
            const byType = await fetchYahooTimeseries(ticker);
            const divYield = await fetchDividendYieldSeries(ticker);
            out.tickers[ticker] = normalize(ticker, byType, isBank, fxUsdIdr, divYield, legacyDb[ticker]);
            ok++;
            const q1 = out.tickers[ticker].rev[IDX_Q1];
            const dy = out.tickers[ticker].divYield[IDX_Q1];
            process.stdout.write(`OK ${ticker} Q1rev=${q1} div=${dy}%\n`);
        } catch (e) {
            fail++;
            process.stdout.write(`SKIP ${ticker}: ${e.message}\n`);
        }
        await sleep(320);
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
    console.log(`Done. new=${ok} skip=${skip} fail=${fail} total=${Object.keys(out.tickers).length} -> ${outPath}`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
