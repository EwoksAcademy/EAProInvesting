/**
 * One-time splitter: reads index.html (monolith), writes assets + multi-page HTML.
 * Run locally: node tools/split-ewoks-site.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'index.html');

const PAGES = [
  { key: 'home', file: 'index.html', title: 'Ewoks Academy Pro — Beranda' },
  { key: 'watchlist', file: 'watchlist.html', title: 'Terminal & Watchlist' },
  { key: 'jurnal', file: 'jurnal.html', title: 'Jurnal Trading' },
  { key: 'quiz', file: 'quiz.html', title: 'Kuis Profil Risiko' },
  { key: 'fixed-income', file: 'fixed-income.html', title: 'Fixed Income (SBN)' },
  { key: 'bandarmology-edu', file: 'bandarmology-edu.html', title: 'Cheat Sheet Bandar' },
  { key: 'pensiun', file: 'pensiun.html', title: 'Pensiun & Kalkulator' },
  { key: 'edukasi', file: 'edukasi.html', title: 'Makro & Edukasi Saham' },
  { key: 'kalkulator', file: 'kalkulator.html', title: 'Trading Plan & Kalkulator' },
  { key: 'bandar', file: 'bandar.html', title: 'Kalkulator Bandar' },
  { key: 'konglo', file: 'konglo.html', title: 'Peta Konglomerat' },
  { key: 'broker', file: 'broker.html', title: 'Broker Database' },
];

/** 1-based line ranges from monolith index.html (inclusive) */
const SECTION_LINES = {
  home: [512, 708],
  watchlist: [710, 920],
  jurnal: [921, 1093],
  quiz: [1094, 1156],
  'fixed-income': [1157, 1239],
  'bandarmology-edu': [1240, 1588],
  pensiun: [1589, 1763],
  edukasi: [1764, 5281],
  kalkulator: [5283, 5420],
  bandar: [5421, 5492],
  konglo: [5493, 5656],
  broker: [5657, 5699],
};

function cleanSectionOpening(html) {
  return html.replace(/<section\s+id="page-([^"]+)"\s+class="([^"]*)"\s*>/m, (_, id, cls) => {
    const ncls = cls
      .split(/\s+/)
      .filter((c) => c && c !== 'page' && c !== 'active')
      .join(' ');
    return `<section id="page-${id}" class="${ncls}">`;
  });
}

function patchAppJs(raw) {
  let js = raw;

  const newShowPage = `function showPage(pageId) {
            const routes = {
                home: 'index.html',
                watchlist: 'watchlist.html',
                jurnal: 'jurnal.html',
                quiz: 'quiz.html',
                'fixed-income': 'fixed-income.html',
                'bandarmology-edu': 'bandarmology-edu.html',
                pensiun: 'pensiun.html',
                edukasi: 'edukasi.html',
                kalkulator: 'kalkulator.html',
                bandar: 'bandar.html',
                konglo: 'konglo.html',
                broker: 'broker.html'
            };
            const url = routes[pageId];
            if (url) window.location.href = url;
        }`;

  js = js.replace(/function showPage\(pageId\) \{[\s\S]*?window\.scrollTo\(\{top: 0, behavior: 'smooth'\}\);\s*\}/m, newShowPage);

  js = js.replace(
    /if\(!document\.getElementById\('tv-chart-wrapper'\)\.classList\.contains\('hide'\)/,
    "const __tvw = document.getElementById('tv-chart-wrapper');\n            if(__tvw && !__tvw.classList.contains('hide')"
  );

  js = js.replace(
    /function loadMacroNotes\(\) \{\s*const notes = localStorage\.getItem\('ewoks_macro_notes'\);\s*if\(notes\) document\.getElementById\('macro-notes'\)\.value = notes;\s*\}/,
    `function loadMacroNotes() {
            const notes = localStorage.getItem('ewoks_macro_notes');
            const el = document.getElementById('macro-notes');
            if (notes && el) el.value = notes;
        }`
  );

  const newFetchNews = `async function fetchNews() {
            const container = document.getElementById('news-container');
            if (!container) return;
            try {`;
  js = js.replace(/async function fetchNews\(\) \{\s*const container = document\.getElementById\('news-container'\);\s*try \{/, newFetchNews);

  const newFetchLive = `function fetchLiveMarketData() {
            const ihsgEl = document.getElementById('ihsg-dash-live');
            const termIhsgEl = document.getElementById('terminal-ihsg');
            const seedEl = ihsgEl || termIhsgEl;
            if (!seedEl) return;

            let currentIHSG = parseFloat(seedEl.innerText.replace(/,/g, ''));
            if(isNaN(currentIHSG)) currentIHSG = 7350.25;

            const change = (Math.random() * 10) - 5;
            currentIHSG += change;

            const formattedIHSG = currentIHSG.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            if (ihsgEl) ihsgEl.innerText = formattedIHSG;
            if (termIhsgEl) termIhsgEl.innerText = formattedIHSG;

            if (ihsgEl) {
                ihsgEl.classList.add('scale-110');
                setTimeout(() => ihsgEl.classList.remove('scale-110'), 300);
            }

            if(change >= 0) {
                if (ihsgEl) ihsgEl.className = "stat-badge bg-emerald-100 text-emerald-700 transition-all duration-300";
                if(termIhsgEl) termIhsgEl.className = "font-black text-emerald-600 transition-all duration-300";
            } else {
                if (ihsgEl) ihsgEl.className = "stat-badge bg-rose-100 text-rose-700 transition-all duration-300";
                if(termIhsgEl) termIhsgEl.className = "font-black text-rose-600 transition-all duration-300";
            }

            const fgPointer = document.getElementById('fg-pointer');
            const fgText = document.getElementById('fg-text');
            const termSentiment = document.getElementById('terminal-sentiment');

            let fgValue = 50 + ((currentIHSG - 7300) / 10);
            if(fgValue < 0) fgValue = 0;
            if(fgValue > 100) fgValue = 100;

            if(fgPointer) fgPointer.style.left = \`\${fgValue}%\`;

            if(fgText) {
                let statusText = "";
                let colorClass = "";
                if(fgValue < 25) { statusText = "EXTREME FEAR"; colorClass = "text-rose-600"; fgText.className = "text-[10px] font-black text-rose-600 transition-all duration-300"; }
                else if(fgValue < 45) { statusText = "FEAR"; colorClass = "text-rose-500"; fgText.className = "text-[10px] font-black text-rose-500 transition-all duration-300"; }
                else if(fgValue < 55) { statusText = "NEUTRAL"; colorClass = "text-amber-500"; fgText.className = "text-[10px] font-black text-amber-500 transition-all duration-300"; }
                else if(fgValue < 75) { statusText = "GREED"; colorClass = "text-emerald-500"; fgText.className = "text-[10px] font-black text-emerald-500 transition-all duration-300"; }
                else { statusText = "EXTREME GREED"; colorClass = "text-emerald-600"; fgText.className = "text-[10px] font-black text-emerald-600 transition-all duration-300"; }

                fgText.innerText = \`\${statusText} (\${Math.round(fgValue)})\`;
                if(termSentiment) {
                    termSentiment.innerText = statusText;
                    termSentiment.className = \`text-xl md:text-2xl font-black \${colorClass}\`;
                }
            }

            if(EwoksSiteContext.is('watchlist')) {
                 renderWatchlist(true);
            }
        }`;

  js = js.replace(
    /function fetchLiveMarketData\(\) \{[\s\S]*?\n        \}\s*\n\s*(\/\/ --- WATCHLIST ---)/m,
    newFetchLive + '\n        $1'
  );

  js = js.replace(
    /if\(document\.getElementById\('page-watchlist'\)\.classList\.contains\('active'\)\)/g,
    "if(EwoksSiteContext.is('watchlist'))"
  );

  js = js.replace(
    /function calcSbn\(\) \{[\s\S]*?document\.getElementById\('sbn-res-month'\)\.innerText = `Rp \$\{Math\.round\(netMonthly\)\.toLocaleString\('id-ID'\)\}`;\s*\}/,
    `function calcSbn() {
            const sbnModal = document.getElementById('sbn-modal');
            if (!sbnModal) return;
            const resEl = document.getElementById('sbn-res-month');
            if (!resEl) return;
            const modal = parseFloat(sbnModal.value) || 0;
            const yieldDash = document.getElementById('sbn-yield-dash');
            const yieldSBN = yieldDash
                ? (parseFloat(yieldDash.innerText.replace(/,/g, '')) / 100 || 0.065)
                : 0.065;
            const grossYearly = modal * yieldSBN;
            const netYearly = grossYearly * 0.9;
            const netMonthly = netYearly / 12;
            resEl.innerText = \`Rp \${Math.round(netMonthly).toLocaleString('id-ID')}\`;
        }`
  );

  const highlightFn = `
        /** Konteks halaman statis (GitHub Pages): samakan dengan atribut data-page pada <body>. */
        class EwoksSiteContext {
            static get page() {
                return document.body?.getAttribute('data-page') || 'home';
            }
            static is(pageKey) {
                return EwoksSiteContext.page === pageKey;
            }
        }

        /** Navigasi multi-halaman: penanda aktif dari data-page pada <body> */
        function highlightNavForCurrentPage() {
            const page = EwoksSiteContext.page;
            document.querySelectorAll('.nav-link.active, .mobile-nav-btn.active, .dropdown-item.active').forEach((el) => el.classList.remove('active'));

            const edu = ['edukasi', 'fixed-income', 'bandarmology-edu', 'quiz'];
            const tools = ['watchlist', 'jurnal', 'pensiun', 'kalkulator', 'bandar'];
            const db = ['konglo', 'broker'];

            if (page === 'home') {
                document.getElementById('nav-home')?.classList.add('active');
                document.getElementById('m-nav-home')?.classList.add('active');
            }
            if (edu.includes(page)) {
                document.getElementById('nav-edu-parent')?.classList.add('active');
                document.getElementById('m-nav-edu-parent')?.classList.add('active');
                document.getElementById('nav-' + page)?.classList.add('active');
            }
            if (tools.includes(page)) {
                document.getElementById('nav-tools-parent')?.classList.add('active');
                document.getElementById('m-nav-tools')?.classList.add('active');
                document.getElementById('nav-' + page)?.classList.add('active');
            }
            if (db.includes(page)) {
                document.getElementById('nav-database-parent')?.classList.add('active');
                document.getElementById('m-nav-database-parent')?.classList.add('active');
                document.getElementById('nav-' + page)?.classList.add('active');
            }
        }

`;

  js = js.replace(/(\/\/ --- THEME & UI ---)/, highlightFn + '\n        $1');

  js = js.replace(
    /function openTVChart\(ticker\) \{\s*const symbol = ticker\.includes/,
    `function openTVChart(ticker) {
            if (!document.getElementById('chart-active-ticker-input') || !document.getElementById('tv-chart-container')) {
                return;
            }
            const symbol = ticker.includes`
  );

  const newOnload = `window.onload = () => {
            checkTheme();
            highlightNavForCurrentPage();

            loadMacroNotes();
            if (document.getElementById('brokerTable')) renderBrokers();
            if (document.getElementById('historySection')) renderHistory();
            if (document.getElementById('group-grid')) renderGrid();
            if (document.getElementById('watchlist-container')) renderWatchlist();
            if (document.getElementById('journal-empty') || document.getElementById('jr-date')) renderJournal();
            calcSbn();
            if (document.getElementById('p-age-retire')) calculateRetirement();
            if (document.getElementById('compoundChartCanvas')) calcCompound();
            if (document.getElementById('dar-expense')) calcDarurat();

            const page = EwoksSiteContext.page;
            if (page === 'konglo' && typeof renderChart === 'function') {
                setTimeout(renderChart, 100);
                kongloChartRendered = true;
            }
            if (page === 'fixed-income') {
                setTimeout(() => { if (typeof renderYieldChart === 'function') renderYieldChart(); }, 100);
                setTimeout(() => { if (typeof renderYieldCurve === 'function') renderYieldCurve(); }, 100);
            }
            if (page === 'pensiun') setTimeout(() => { if (typeof calcCompound === 'function') calcCompound(); }, 100);
            if (page === 'jurnal') renderJournal();
            if (page === 'watchlist' && typeof openTVChart === 'function' && !window.tvWidgetInstance) {
                openTVChart("IDX:COMPOSITE");
            }

            document.addEventListener('click', function(e) {
                if (!e.target.closest('.group')) {
                    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
                }
            });

            document.querySelectorAll('.group > button').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const dropdown = this.nextElementSibling;
                    const isShowing = dropdown.classList.contains('show-dropdown');

                    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
                    if (!isShowing) dropdown.classList.add('show-dropdown');
                });
            });

            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
                });
            });

            const today = new Date().toISOString().split('T')[0];
            const tgl = document.getElementById('tanggal');
            const jr = document.getElementById('jr-date');
            if (tgl) tgl.value = today;
            if (jr) jr.value = today;

            updateClock();
            fetchRealIHSG();
            fetchNews();

            setInterval(updateClock, 1000);
            setInterval(fetchRealIHSG, 5000);
        };`;

  js = js.replace(/window\.onload = \(\) => \{[\s\S]*?\};/m, newOnload);

  js = js.replace(
    /function renderHistory\(\) \{\s*const container = document\.getElementById\('historySection'\);/,
    `function renderHistory() {
            const container = document.getElementById('historySection');
            if (!container) return;`
  );

  return js;
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error('Missing', SRC);
    process.exit(1);
  }
  const backupPath = path.join(ROOT, 'index.monolith.backup.html');
  let text;
  if (fs.existsSync(backupPath)) {
    text = fs.readFileSync(backupPath, 'utf8');
    console.log('Source: index.monolith.backup.html');
  } else {
    text = fs.readFileSync(SRC, 'utf8');
    if (text.includes('assets/js/ewoks-core.js')) {
      console.error('index.html looks already split. Put monolith at index.monolith.backup.html and retry.');
      process.exit(1);
    }
    fs.writeFileSync(backupPath, text, 'utf8');
    console.log('Created backup:', backupPath);
  }
  const lines = text.split(/\r?\n/);

  const styleMatch = text.match(/<style>\r?\n([\s\S]*?)\r?\n\s*<\/style>/);
  if (!styleMatch) throw new Error('No <style> block found');
  const css = styleMatch[1];

  const scriptMatch = text.match(/<script>\r?\n([\s\S]*?)\r?\n\s*<\/script>\s*\r?\n<\/body>/);
  if (!scriptMatch) throw new Error('No trailing <script> block found');
  const jsRaw = scriptMatch[1];
  const jsOut = patchAppJs(jsRaw);

  const assetsCss = path.join(ROOT, 'assets', 'css');
  const assetsJs = path.join(ROOT, 'assets', 'js');
  fs.mkdirSync(assetsCss, { recursive: true });
  fs.mkdirSync(assetsJs, { recursive: true });
  fs.writeFileSync(path.join(assetsCss, 'app.css'), css, 'utf8');
  // JS: situs memakai assets/js/ewoks-core.js + assets/js/pages/ (bukan satu app.js).
  const legacyExtracted = path.join(assetsJs, '_extracted-from-monolith.script.txt');
  fs.writeFileSync(legacyExtracted, jsOut, 'utf8');

  const headMeta = lines.slice(0, 3).join('\n') + '\n' + lines.slice(3, 9).join('\n');
  const headScripts = lines.slice(10, 14).join('\n');

  const shellInner = lines.slice(360, 509).join('\n');
  const suffix = lines.slice(5700, 5776).join('\n');
  const mainOpen = lines[509];

  for (const p of PAGES) {
    const [a, b] = SECTION_LINES[p.key];
    const sectionLines = lines.slice(a - 1, b);
    let sectionHtml = sectionLines.join('\n');
    sectionHtml = cleanSectionOpening(sectionHtml);

    const bodyOpen = `<body class="min-h-screen relative flex flex-col" data-page="${p.key}">`;

    const outHtml = `${headMeta}
    <title>${p.title}</title>
${headScripts}
    <link rel="stylesheet" href="assets/css/app.css">
</head>
${bodyOpen}

${shellInner}

${mainOpen}

${sectionHtml}

${suffix}

    <script src="assets/js/ewoks-core.js"></script>
    <!-- Per halaman: tambahkan assets/js/pages/page-*.js sesuai kebutuhan (lihat repo). -->
</body>
</html>
`;

    const outPath = path.join(ROOT, p.file);
    fs.writeFileSync(outPath, outHtml, 'utf8');
    console.log('Wrote', p.file);
  }

  console.log('Done. assets/css/app.css + assets/js/ewoks-core.js (+ page scripts per HTML)');
}

main();
