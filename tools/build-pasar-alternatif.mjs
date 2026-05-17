/**
 * Bangun assets/data/pasar-alternatif.json — return 10 tahun + per tahun.
 * ETF global: Yahoo Finance. Obligasi & RD: seed + benchmark.
 * Jalankan: node tools/build-pasar-alternatif.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outPath = path.join(root, 'assets/data/pasar-alternatif.json');

const YEARS_BACK = 10;

const ETF_LIST = [
    { symbol: 'QQQ', name: 'Invesco QQQ Trust', market: 'AS', focus: 'Saham AS — Teknologi' },
    { symbol: 'SMH', name: 'VanEck Semiconductor ETF', market: 'AS', focus: 'Semikonduktor Global' },
    { symbol: 'SPY', name: 'SPDR S&P 500 ETF', market: 'AS', focus: 'Saham AS — Large Cap' },
    { symbol: 'VTI', name: 'Vanguard Total Stock Market', market: 'AS', focus: 'Saham AS — Total Market' },
    { symbol: 'SCHD', name: 'Schwab US Dividend Equity', market: 'AS', focus: 'Dividen AS' },
    { symbol: 'VNQ', name: 'Vanguard Real Estate ETF', market: 'AS', focus: 'Properti / REIT AS' },
    { symbol: 'GLD', name: 'SPDR Gold Shares', market: 'Komoditas', focus: 'Emas' },
    { symbol: 'VT', name: 'Vanguard Total World Stock', market: 'Global', focus: 'Saham Dunia' },
    { symbol: 'EEM', name: 'iShares MSCI Emerging Markets', market: 'Emerging', focus: 'Saham Pasar Emerging' },
    { symbol: 'VWO', name: 'Vanguard FTSE Emerging Markets', market: 'Emerging', focus: 'Saham Emerging (FTSE)' },
    { symbol: 'EIDO', name: 'iShares MSCI Indonesia ETF', market: 'Indonesia', focus: 'Saham Indonesia (NYSE)' },
    { symbol: 'IXC', name: 'iShares Global Energy', market: 'Sektor', focus: 'Energi Global' },
    { symbol: 'AGG', name: 'iShares Core US Aggregate Bond', market: 'AS', focus: 'Obligasi AS — Aggregat' },
    { symbol: 'TLT', name: 'iShares 20+ Year Treasury Bond', market: 'AS', focus: 'Obligasi AS — Treasuries Panjang' },
    { symbol: 'LQD', name: 'iShares Investment Grade Corporate', market: 'AS', focus: 'Obligasi Korporat IG AS' },
    { symbol: 'HYG', name: 'iShares High Yield Corporate', market: 'AS', focus: 'Obligasi High Yield AS' }
];

/** Obligasi & RD: seed (update manual / OJK factsheet). ETF di-merge dari Yahoo. */
const SEED = {
    obligasi: [
        {
            id: 'sbn-10y',
            name: 'Surat Utang Negara (SBN) — tenor panjang',
            type: 'Obligasi Negara',
            currency: 'IDR',
            focus: 'Pendapatan tetap, risiko kredit negara rendah',
            cagr10y: 7.2,
            yieldNow: 6.65,
            yearly: [
                { year: 2016, return: 12.5 },
                { year: 2017, return: 5.8 },
                { year: 2018, return: 4.2 },
                { year: 2019, return: 8.1 },
                { year: 2020, return: 9.5 },
                { year: 2021, return: 2.1 },
                { year: 2022, return: -8.5 },
                { year: 2023, return: 6.8 },
                { year: 2024, return: 5.2 },
                { year: 2025, return: 7.0 }
            ],
            note: 'Estimasi total return (kupon + perubahan harga) obligasi pemerintah ID; yield 10Y referensi BI.'
        },
        {
            id: 'ori-ritel',
            name: 'Obligasi Ritel Indonesia (ORI)',
            type: 'Obligasi Negara Ritel',
            currency: 'IDR',
            focus: 'Investor ritel, kupon tetap',
            cagr10y: 6.8,
            yieldNow: 6.35,
            yearly: [
                { year: 2016, return: 8.0 },
                { year: 2017, return: 6.5 },
                { year: 2018, return: 5.5 },
                { year: 2019, return: 7.2 },
                { year: 2020, return: 8.8 },
                { year: 2021, return: 3.5 },
                { year: 2022, return: -5.0 },
                { year: 2023, return: 6.0 },
                { year: 2024, return: 5.8 },
                { year: 2025, return: 6.5 }
            ],
            note: 'Rata-rata historis seri ORI; per seri berbeda.'
        },
        {
            id: 'fr-bi',
            name: 'Obligasi Negara (FR) — sekunder BI',
            type: 'Obligasi Negara',
            currency: 'IDR',
            focus: 'Likuiditas pasar sekunder',
            cagr10y: 7.0,
            yieldNow: 6.55,
            yearly: [
                { year: 2016, return: 11.0 },
                { year: 2017, return: 6.0 },
                { year: 2018, return: 4.5 },
                { year: 2019, return: 7.8 },
                { year: 2020, return: 9.0 },
                { year: 2021, return: 1.8 },
                { year: 2022, return: -9.2 },
                { year: 2023, return: 7.2 },
                { year: 2024, return: 5.0 },
                { year: 2025, return: 6.8 }
            ],
            note: 'Estimasi dari pergerakan yield SBN & kupon.'
        },
        {
            id: 'corp-id-ig',
            name: 'Obligasi Korporasi IG (Indonesia)',
            type: 'Obligasi Korporasi',
            currency: 'IDR',
            focus: 'Perusahaan investment grade',
            cagr10y: 8.5,
            yieldNow: 7.2,
            yearly: [
                { year: 2016, return: 10.5 },
                { year: 2017, return: 7.0 },
                { year: 2018, return: 5.0 },
                { year: 2019, return: 8.5 },
                { year: 2020, return: 7.5 },
                { year: 2021, return: 4.0 },
                { year: 2022, return: -4.5 },
                { year: 2023, return: 8.0 },
                { year: 2024, return: 6.5 },
                { year: 2025, return: 7.8 }
            ],
            note: 'Spread di atas SBN; risiko kredit emiten.'
        },
        {
            id: 'usd-treasury',
            name: 'US Treasury 7–10Y (proxy ETF)',
            type: 'Obligasi Negara AS',
            currency: 'USD',
            focus: 'Safe haven USD',
            cagr10y: null,
            yieldNow: 4.35,
            yahooSymbol: 'IEF',
            note: 'CAGR diisi otomatis dari Yahoo jika tersedia.'
        }
    ],
    reksadana: [
        {
            id: 'rd-saham-top',
            name: 'RD Saham (Top Quartile ID)',
            manager: 'Rata-rata reksa saham terbaik',
            type: 'Saham',
            currency: 'IDR',
            focus: 'Ekuitas Indonesia aktif',
            cagr10y: 11.8,
            yearly: [
                { year: 2016, return: 18.2 },
                { year: 2017, return: 12.5 },
                { year: 2018, return: -8.5 },
                { year: 2019, return: 6.2 },
                { year: 2020, return: -5.1 },
                { year: 2021, return: 22.4 },
                { year: 2022, return: 4.8 },
                { year: 2023, return: 8.5 },
                { year: 2024, return: 3.2 },
                { year: 2025, return: 12.0 }
            ],
            note: 'Ilustrasi quartile atas kategori RD Saham (OJK); bukan satu produk.'
        },
        {
            id: 'mi-utama',
            name: 'Mandiri Investa Utama',
            manager: 'Mandiri Manajemen Investasi',
            type: 'Saham',
            currency: 'IDR',
            focus: 'Large cap Indonesia',
            cagr10y: 12.4,
            yearly: [
                { year: 2016, return: 20.1 },
                { year: 2017, return: 14.0 },
                { year: 2018, return: -10.2 },
                { year: 2019, return: 5.5 },
                { year: 2020, return: -6.8 },
                { year: 2021, return: 24.0 },
                { year: 2022, return: 6.2 },
                { year: 2023, return: 9.1 },
                { year: 2024, return: 2.8 },
                { year: 2025, return: 11.5 }
            ],
            note: 'Estimasi dari NAV historis / factsheet (periksa prospektus terbaru).'
        },
        {
            id: 'schroder-istimewa',
            name: 'Schroder Dana Istimewa',
            manager: 'Schroder Investment Management',
            type: 'Saham',
            currency: 'IDR',
            focus: 'Quality growth Indonesia',
            cagr10y: 13.1,
            yearly: [
                { year: 2016, return: 22.0 },
                { year: 2017, return: 15.5 },
                { year: 2018, return: -7.0 },
                { year: 2019, return: 8.0 },
                { year: 2020, return: -4.0 },
                { year: 2021, return: 26.5 },
                { year: 2022, return: 5.5 },
                { year: 2023, return: 10.2 },
                { year: 2024, return: 4.0 },
                { year: 2025, return: 13.0 }
            ],
            note: 'Estimasi kinerja historis; kinerja masa lalu tidak menjamin masa depan.'
        },
        {
            id: 'trimegah-saham',
            name: 'Trimegah Asset Management — Saham',
            manager: 'Trimegah Asset Management',
            type: 'Saham',
            currency: 'IDR',
            focus: 'Saham terpilih IDX',
            cagr10y: 11.2,
            yearly: [
                { year: 2016, return: 17.0 },
                { year: 2017, return: 11.0 },
                { year: 2018, return: -9.5 },
                { year: 2019, return: 4.0 },
                { year: 2020, return: -7.5 },
                { year: 2021, return: 21.0 },
                { year: 2022, return: 3.5 },
                { year: 2023, return: 7.8 },
                { year: 2024, return: 2.0 },
                { year: 2025, return: 10.5 }
            ],
            note: 'Estimasi; bandingkan NAV resmi di KSEI/OJK.'
        },
        {
            id: 'rd-campuran',
            name: 'RD Campuran (Top Quartile ID)',
            manager: 'Rata-rata reksa campuran terbaik',
            type: 'Campuran',
            currency: 'IDR',
            focus: 'Saham + obligasi',
            cagr10y: 9.5,
            yearly: [
                { year: 2016, return: 14.0 },
                { year: 2017, return: 10.0 },
                { year: 2018, return: -4.0 },
                { year: 2019, return: 6.5 },
                { year: 2020, return: 0.5 },
                { year: 2021, return: 16.0 },
                { year: 2022, return: 2.0 },
                { year: 2023, return: 7.0 },
                { year: 2024, return: 4.5 },
                { year: 2025, return: 8.5 }
            ],
            note: 'Ilustrasi kategori RD Campuran.'
        },
        {
            id: 'rd-pendapatan-tetap',
            name: 'RD Pendapatan Tetap (Top Quartile ID)',
            manager: 'Rata-rata reksa pendapatan tetap',
            type: 'Pendapatan Tetap',
            currency: 'IDR',
            focus: 'Obligasi & SBN',
            cagr10y: 7.8,
            yearly: [
                { year: 2016, return: 10.0 },
                { year: 2017, return: 6.5 },
                { year: 2018, return: 4.0 },
                { year: 2019, return: 7.5 },
                { year: 2020, return: 8.0 },
                { year: 2021, return: 3.0 },
                { year: 2022, return: -3.5 },
                { year: 2023, return: 6.5 },
                { year: 2024, return: 5.5 },
                { year: 2025, return: 6.8 }
            ],
            note: 'Ilustrasi kategori RD Pendapatan Tetap.'
        },
        {
            id: 'sucor-mm',
            name: 'Sucorinvest Money Market Fund',
            manager: 'Sucorinvest Asset Management',
            type: 'Pasar Uang',
            currency: 'IDR',
            focus: 'Instrumen pasar uang',
            cagr10y: 5.9,
            yearly: [
                { year: 2016, return: 6.8 },
                { year: 2017, return: 6.2 },
                { year: 2018, return: 6.5 },
                { year: 2019, return: 6.8 },
                { year: 2020, return: 5.5 },
                { year: 2021, return: 4.2 },
                { year: 2022, return: 5.8 },
                { year: 2023, return: 6.5 },
                { year: 2024, return: 6.2 },
                { year: 2025, return: 5.5 }
            ],
            note: 'Stabil; return lebih rendah, volatilitas rendah.'
        },
        {
            id: 'bahana-lancar',
            name: 'Bahana Dana Lancar',
            manager: 'Bahana TCW Investment Management',
            type: 'Pasar Uang',
            currency: 'IDR',
            focus: 'Likuiditas tinggi',
            cagr10y: 5.7,
            yearly: [
                { year: 2016, return: 6.5 },
                { year: 2017, return: 6.0 },
                { year: 2018, return: 6.3 },
                { year: 2019, return: 6.6 },
                { year: 2020, return: 5.4 },
                { year: 2021, return: 4.0 },
                { year: 2022, return: 5.6 },
                { year: 2023, return: 6.3 },
                { year: 2024, return: 6.0 },
                { year: 2025, return: 5.3 }
            ],
            note: 'Cocok untuk dana darurat jangka pendek.'
        }
    ]
};

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

async function fetchEtfMetrics(symbol) {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1mo&range=10y`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const result = json?.chart?.result?.[0];
    const closes = result?.indicators?.quote?.[0]?.close?.filter((c) => c != null) || [];
    const ts = result?.timestamp || [];
    if (closes.length < 12) throw new Error('insufficient data');

    const start = closes[0];
    const end = closes[closes.length - 1];
    const cagr10y = +((Math.pow(end / start, 1 / YEARS_BACK) - 1) * 100).toFixed(1);

    const byYear = {};
    for (let i = 0; i < ts.length; i++) {
        if (closes[i] == null) continue;
        const y = new Date(ts[i] * 1000).getFullYear();
        if (!byYear[y]) byYear[y] = { first: closes[i], last: closes[i] };
        byYear[y].last = closes[i];
    }
    const sortedYears = Object.keys(byYear)
        .map(Number)
        .sort((a, b) => a - b);
    const yearly = [];
    let prev = null;
    for (const y of sortedYears) {
        const last = byYear[y].last;
        if (prev != null) yearly.push({ year: y, return: +(((last / prev) - 1) * 100).toFixed(1) });
        prev = last;
    }
    const last10 = yearly.slice(-YEARS_BACK);

    return { cagr10y, yearly: last10, yieldNow: null };
}

async function main() {
    const etf = [];
    for (const item of ETF_LIST) {
        try {
            const m = await fetchEtfMetrics(item.symbol);
            etf.push({
                id: item.symbol.toLowerCase(),
                symbol: item.symbol,
                name: item.name,
                market: item.market,
                focus: item.focus,
                currency: 'USD',
                cagr10y: m.cagr10y,
                yearly: m.yearly,
                source: 'yahoo'
            });
            process.stdout.write(`OK ETF ${item.symbol} CAGR=${m.cagr10y}%\n`);
        } catch (e) {
            process.stdout.write(`SKIP ETF ${item.symbol}: ${e.message}\n`);
        }
        await sleep(280);
    }
    etf.sort((a, b) => (b.cagr10y || 0) - (a.cagr10y || 0));

    const obligasi = [...SEED.obligasi];
    for (const row of obligasi) {
        if (row.yahooSymbol && row.cagr10y == null) {
            try {
                const m = await fetchEtfMetrics(row.yahooSymbol);
                row.cagr10y = m.cagr10y;
                row.yearly = m.yearly;
                row.source = 'yahoo';
            } catch (_) {}
            await sleep(280);
        }
        row.source = row.source || 'referensi';
    }
    obligasi.sort((a, b) => (b.cagr10y || 0) - (a.cagr10y || 0));

    const reksadana = [...SEED.reksadana].map((r) => ({ ...r, source: 'referensi' }));
    reksadana.sort((a, b) => (b.cagr10y || 0) - (a.cagr10y || 0));

    const out = {
        meta: {
            built: new Date().toISOString().slice(0, 10),
            period: `~${YEARS_BACK} tahun`,
            disclaimer:
                'Kinerja masa lalu tidak menjamin hasil masa depan. ETF dari Yahoo Finance (USD). Obligasi & reksadana Indonesia berbasis estimasi/referensi — periksa prospektus resmi.',
            benchmark: { label: 'IHSG (ilustrasi)', cagr10y: 5.5 }
        },
        obligasi,
        reksadana,
        etf
    };

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
    console.log(`Done -> ${outPath} (obligasi=${obligasi.length}, rd=${reksadana.length}, etf=${etf.length})`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
