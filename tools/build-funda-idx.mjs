/**
 * Bangun assets/data/funda-idx.json dari Yahoo Finance (BBCA.JK).
 * Jalankan sekali di komputer dev: node tools/build-funda-idx.mjs
 * Hasil JSON di-commit ke repo — GitHub Pages tidak perlu install apa pun.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'assets/js/pages/page-konglo-data-funda.js');
const outPath = path.join(root, 'assets/data/funda-idx.json');

const src = fs.readFileSync(srcPath, 'utf8');
const tickers = [...new Set([...src.matchAll(/ticker:\s*"([A-Z0-9]+)"/g)].map((m) => m[1]))].sort();

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];
const YTD_YEAR = 2026;

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

function toTriliun(v) {
    if (v == null || Number.isNaN(v)) return null;
    return +(v / 1e12).toFixed(1);
}

function pickByYear(rows, yearKeys) {
    const map = {};
    for (const row of rows || []) {
        const end = row.endDate?.raw ?? row.endDate;
        if (!end) continue;
        const y = new Date(end * 1000).getFullYear();
        map[y] = row;
    }
    return yearKeys.map((y) => map[y] || null);
}

function altmanZ(asset, eq, rev, net, isBank) {
    if (isBank || !asset || !eq || asset <= 0) return 3.5;
    const ta = asset;
    const tl = Math.max(ta - eq, ta * 0.01);
    const wc = ta * 0.1;
    const re = net / ta;
    const ebit = net * 1.15;
    const z = 1.2 * (wc / ta) + 1.4 * (re) + 3.3 * (ebit / ta) + 0.6 * (eq / tl) + 1.0 * (rev / ta);
    return +Math.min(6, Math.max(0.5, z)).toFixed(2);
}

async function fetchYahoo(ticker) {
    const sym = `${ticker}.JK`;
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${sym}?modules=incomeStatementHistory,balanceSheetHistory,cashflowStatementHistory,summaryDetail`;
    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            Accept: 'application/json'
        }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const r = json?.quoteSummary?.result?.[0];
    if (!r) throw new Error('no result');
    return r;
}

function normalize(ticker, yahoo, isBank) {
    const ic = yahoo.incomeStatementHistory?.incomeStatementHistory || [];
    const bs = yahoo.balanceSheetHistory?.balanceSheetStatements || [];
    const cf = yahoo.cashflowStatementHistory?.cashflowStatements || [];
    const detail = yahoo.summaryDetail || {};

    const yearKeys = [...YEARS, YTD_YEAR];
    const icRows = pickByYear(ic, yearKeys);
    const bsRows = pickByYear(bs, yearKeys);
    const cfRows = pickByYear(cf, yearKeys);

    const rev = icRows.map((r) => toTriliun(r?.totalRevenue?.raw ?? r?.netInterestIncome?.raw));
    const net = icRows.map((r) => toTriliun(r?.netIncome?.raw));
    const cogs = icRows.map((r) => {
        if (isBank) return 0;
        const c = r?.costOfRevenue?.raw;
        return c != null ? -Math.abs(toTriliun(c)) : 0;
    });
    const asset = bsRows.map((r) => toTriliun(r?.totalAssets?.raw));
    const eq = bsRows.map((r) => toTriliun(r?.totalStockholderEquity?.raw ?? r?.totalEquity?.raw));
    const interest = icRows.map((r) => toTriliun(r?.interestExpense?.raw) || 0);
    const tax = icRows.map((r) => toTriliun(r?.taxProvision?.raw) || 0);
    const fcf = cfRows.map((r) => {
        const ocf = r?.totalCashFromOperatingActivities?.raw;
        const capex = r?.capitalExpenditures?.raw;
        if (ocf == null) return null;
        return toTriliun(ocf + (capex || 0));
    });

    const divYield = yearKeys.map(() => {
        const dy = detail.dividendYield?.raw ?? detail.trailingAnnualDividendYield?.raw;
        return dy != null ? +(dy * 100).toFixed(1) : 0;
    });

    const fill = (arr) => {
        let last = 0;
        return arr.map((v) => {
            if (v != null && !Number.isNaN(v)) {
                last = v;
                return v;
            }
            return last;
        });
    };

    const out = {
        rev: fill(rev),
        cogs: fill(cogs),
        net: fill(net),
        asset: fill(asset),
        eq: fill(eq),
        interest: fill(interest),
        tax: fill(tax),
        fcf: fill(fcf),
        divYield: fill(divYield),
        mos: 15,
        zscore: altmanZ(asset[5], eq[5], rev[5], net[5], isBank),
        source: 'yahoo',
        updated: new Date().toISOString().slice(0, 10)
    };

    if (!out.rev[5] && !out.net[5]) throw new Error('empty financials');
    return out;
}

function sectorForTicker(ticker, src) {
    const m = src.match(new RegExp(`ticker:\\s*"${ticker}"[^}]+sector:\\s*"([^"]+)"`));
    return m ? m[1] : '';
}

async function main() {
    const existing = {};
    try {
        const old = JSON.parse(fs.readFileSync(outPath, 'utf8'));
        Object.assign(existing, old.tickers || old);
    } catch (_) {}

    const out = { meta: { source: 'Yahoo Finance (.JK)', built: new Date().toISOString(), unit: 'triliun IDR' }, tickers: { ...existing } };

    let ok = 0;
    let fail = 0;
    for (const ticker of tickers) {
        if (out.tickers[ticker]?.source === 'yahoo' && out.tickers[ticker]?.updated) {
            ok++;
            continue;
        }
        const sector = sectorForTicker(ticker, src);
        const isBank = sector.includes('Perbankan');
        try {
            const yahoo = await fetchYahoo(ticker);
            out.tickers[ticker] = normalize(ticker, yahoo, isBank);
            ok++;
            process.stdout.write(`OK ${ticker}\n`);
        } catch (e) {
            fail++;
            process.stdout.write(`SKIP ${ticker}: ${e.message}\n`);
        }
        await sleep(350);
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
    console.log(`Done. OK=${ok} fail=${fail} -> ${outPath}`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
