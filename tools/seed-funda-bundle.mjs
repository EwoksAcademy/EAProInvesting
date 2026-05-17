import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = fs.readFileSync(path.join(root, 'assets/js/pages/page-konglo-data-funda.js'), 'utf8');
const start = src.indexOf('const fundaRealDB = ');
const end = src.indexOf('\n};\n\nfunction generateFunda');
if (start < 0 || end < 0) throw new Error('fundaRealDB not found');
const objCode = src.slice(start + 'const fundaRealDB = '.length, end + 2);
const fundaRealDB = eval(`(${objCode})`);

const tickers = {};
for (const [k, v] of Object.entries(fundaRealDB)) {
    tickers[k] = {
        ...v,
        source: 'curated',
        sourceLabel: 'Data kurasi (laporan keuangan publik IDX/emiten)',
        updated: '2026-05-17'
    };
}

const out = {
    meta: {
        source: 'Ewoks curated + Finnhub live',
        unit: 'triliun IDR',
        built: new Date().toISOString()
    },
    tickers
};

const outPath = path.join(root, 'assets/data/funda-idx.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`Wrote ${Object.keys(tickers).length} tickers -> ${outPath}`);
