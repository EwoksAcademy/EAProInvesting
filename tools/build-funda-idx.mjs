/**
 * Bangun assets/data/funda-idx.json dari Yahoo Finance fundamentals-timeseries (.JK).
 * Jalankan di komputer dev: node tools/build-funda-idx.mjs
 * Hasil JSON di-commit — GitHub Pages tidak perlu install apa pun.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'assets/js/pages/page-konglo-data-funda.js');
const outPath = path.join(root, 'assets/data/funda-idx.json');

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
const YAHOO_TYPES = [
    'annualTotalRevenue',
    'annualNetInterestIncome',
    'annualNetIncome',
    'annualCostOfRevenue',
    'annualTotalAssets',
    'annualStockholdersEquity',
    'annualInterestExpense',
    'annualTaxProvision',
    'annualFreeCashFlow',
    'annualOperatingCashFlow',
    'annualCapitalExpenditure'
].join(',');

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

function toTriliun(raw, currencyCode, fxUsdIdr) {
    if (raw == null || !Number.isFinite(Number(raw))) return null;
    const n = Number(raw);
    if (String(currencyCode).toUpperCase() === 'USD') {
        return +((n * fxUsdIdr) / 1e12).toFixed(1);
    }
    const abs = Math.abs(n);
    if (abs >= 1e12) return +(n / 1e12).toFixed(1);
    if (abs >= 1e6) return +(n / 1e9).toFixed(1);
    return +n.toFixed(1);
}

function yearFromAsOf(asOf) {
    return parseInt(String(asOf).slice(0, 4), 10);
}

function seriesByYear(rows, fxUsdIdr) {
    const currency = rows?.[0]?.currencyCode || 'IDR';
    const map = {};
    for (const row of rows || []) {
        const y = yearFromAsOf(row.asOfDate);
        if (!YEARS.includes(y)) continue;
        const cc = row.currencyCode || currency;
        map[y] = toTriliun(row.reportedValue?.raw, cc, fxUsdIdr);
    }
    return YEARS.map((y) => map[y] ?? null);
}

function fillForward(arr) {
    let last = 0;
    return arr.map((v) => {
        if (v != null && !Number.isNaN(v)) {
            last = v;
            return v;
        }
        return last;
    });
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
        `?symbol=${encodeURIComponent(sym)}&type=${YAHOO_TYPES}&period1=${period1}&period2=${period2}`;
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

function normalize(ticker, byType, isBank, fxUsdIdr) {
    const revInterest = seriesByYear(byType.annualNetInterestIncome, fxUsdIdr);
    const revTotal = seriesByYear(byType.annualTotalRevenue, fxUsdIdr);
    const rev = isBank
        ? revInterest.map((v, i) => (v != null ? v : revTotal[i]))
        : revTotal;

    const net = seriesByYear(byType.annualNetIncome, fxUsdIdr);
    const cogs = isBank
        ? YEARS.map(() => 0)
        : seriesByYear(byType.annualCostOfRevenue, fxUsdIdr).map((v) => (v != null ? -Math.abs(v) : null));
    const asset = seriesByYear(byType.annualTotalAssets, fxUsdIdr);
    const eq = seriesByYear(byType.annualStockholdersEquity, fxUsdIdr);
    const interest = seriesByYear(byType.annualInterestExpense, fxUsdIdr);
    const tax = seriesByYear(byType.annualTaxProvision, fxUsdIdr);

    const fcfDirect = seriesByYear(byType.annualFreeCashFlow, fxUsdIdr);
    const ocf = seriesByYear(byType.annualOperatingCashFlow, fxUsdIdr);
    const capex = seriesByYear(byType.annualCapitalExpenditure, fxUsdIdr);
    const fcf = fcfDirect.map((v, i) => {
        if (v != null) return v;
        if (ocf[i] != null) return +(ocf[i] + (capex[i] || 0)).toFixed(1);
        return null;
    });

    const out = {
        rev: fillForward(rev),
        cogs: fillForward(cogs),
        net: fillForward(net),
        asset: fillForward(asset),
        eq: fillForward(eq),
        interest: fillForward(interest.map((v) => v ?? 0)),
        tax: fillForward(tax.map((v) => v ?? 0)),
        fcf: fillForward(fcf.map((v) => v ?? 0)),
        divYield: YEARS.map(() => 0),
        source: 'yahoo',
        sourceLabel: 'Yahoo Finance (data pasar .JK)',
        updated: new Date().toISOString().slice(0, 10)
    };

    out.zscore = altmanZ(out.asset[5], out.eq[5], out.rev[5], out.net[5], isBank);
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

    const out = {
        meta: {
            source: 'Yahoo Finance fundamentals-timeseries (.JK)',
            unit: 'triliun IDR',
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
        if (!force && out.tickers[ticker]?.source === 'yahoo' && out.tickers[ticker]?.rev?.[5]) {
            skip++;
            continue;
        }
        const sector = sectorForTicker(ticker, src);
        const isBank = sector.includes('Perbankan');
        try {
            const byType = await fetchYahooTimeseries(ticker);
            out.tickers[ticker] = normalize(ticker, byType, isBank, fxUsdIdr);
            ok++;
            process.stdout.write(`OK ${ticker}\n`);
        } catch (e) {
            fail++;
            process.stdout.write(`SKIP ${ticker}: ${e.message}\n`);
        }
        await sleep(280);
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
    console.log(`Done. new=${ok} skip=${skip} fail=${fail} total=${Object.keys(out.tickers).length} -> ${outPath}`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
