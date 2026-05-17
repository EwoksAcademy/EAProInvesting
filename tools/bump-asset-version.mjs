/**
 * Naikkan EWOKS_ASSET_V (cache bust) setelah sync funda-idx.
 * Usage: node tools/bump-asset-version.mjs [YYYYMMDDm]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ver =
    process.argv[2] ||
    `${new Date().toISOString().slice(0, 10).replace(/-/g, '')}m`;

const corePath = path.join(root, 'assets/js/ewoks-core.js');
let core = fs.readFileSync(corePath, 'utf8');
const m = core.match(/window\.EWOKS_ASSET_V = '([^']+)';/);
if (!m) throw new Error('EWOKS_ASSET_V tidak ditemukan di ewoks-core.js');
const old = m[1];
core = core.replace(`window.EWOKS_ASSET_V = '${old}';`, `window.EWOKS_ASSET_V = '${ver}';`);
fs.writeFileSync(corePath, core);

const kongloPath = path.join(root, 'konglo.html');
let konglo = fs.readFileSync(kongloPath, 'utf8');
const km = konglo.match(/ewoks-core\.js\?v=([^"']+)/);
if (km) {
    const kOld = km[1];
    konglo = konglo.split(`?v=${kOld}`).join(`?v=${ver}`);
}
fs.writeFileSync(kongloPath, konglo);

console.log(`EWOKS_ASSET_V: ${old} -> ${ver}`);
