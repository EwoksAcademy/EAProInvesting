/** Versi aset — naikkan setelah deploy agar GitHub Pages tidak pakai cache JS/CSS lama. */
window.EWOKS_ASSET_V = '20260517b';

// --- FUNGSI TOAST NOTIFICATION MODERN ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-info-circle';
    let iconColor = 'text-blue-500';
    if (type === 'success') { icon = 'fa-check-circle'; iconColor = 'text-emerald-500'; }
    if (type === 'error') { icon = 'fa-exclamation-circle'; iconColor = 'text-rose-500'; }
    if (type === 'warning') { icon = 'fa-exclamation-triangle'; iconColor = 'text-amber-500'; }

    toast.innerHTML = `<i class="fas ${icon} ${iconColor} text-lg"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
// --- APP STATE & INITIALIZATION ---
let history = JSON.parse(localStorage.getItem('calc_history')) || [];
let journal = JSON.parse(localStorage.getItem('ewoks_journal')) || [];
let watchlist = JSON.parse(localStorage.getItem('ewoks_watchlist')) || [];
// --- BACKUP & RESTORE DATA (JSON) ---
function exportBackup() {
    const dataToExport = {
        journal: JSON.parse(localStorage.getItem('ewoks_journal')) || [],
        watchlist: JSON.parse(localStorage.getItem('ewoks_watchlist')) || [],
        history: JSON.parse(localStorage.getItem('calc_history')) || [],
        macroNotes: localStorage.getItem('ewoks_macro_notes') || ''
    };
    const jsonStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ewoks_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup berhasil diunduh!", "success");
}

function importBackup(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            if(data.journal) localStorage.setItem('ewoks_journal', JSON.stringify(data.journal));
            if(data.watchlist) localStorage.setItem('ewoks_watchlist', JSON.stringify(data.watchlist));
            if(data.history) localStorage.setItem('calc_history', JSON.stringify(data.history));
            if(data.macroNotes) localStorage.setItem('ewoks_macro_notes', data.macroNotes);
            alert('Data berhasil di-import dan disinkronkan!');
            location.reload();
        } catch(err) {
            showToast('Gagal memproses file. Pastikan file JSON formatnya benar.', 'error');
        }
    };
    reader.readAsText(file);
}

/** Konteks halaman statis (GitHub Pages): samakan dengan atribut data-page pada <body>. */
class EwoksSiteContext {
    static get page() {
        return document.body?.getAttribute('data-page') || 'home';
    }
    static is(pageKey) {
        return EwoksSiteContext.page === pageKey;
    }
    /** Base path GitHub Pages project site, mis. /EAProInvesting/ */
    static get basePath() {
        const path = window.location.pathname || '/';
        const parts = path.split('/').filter(Boolean);
        if (parts.length >= 2 && !parts[0].endsWith('.html')) {
            return '/' + parts[0] + '/';
        }
        if (path.includes('.html')) {
            return path.replace(/[^/]+$/, '');
        }
        return path.endsWith('/') ? path : path + '/';
    }
}

/** Tunggu Chart.js dari CDN (sering telat di GitHub Pages vs buka file lokal). */
function whenChartReady(callback, attempt = 0) {
    if (typeof Chart !== 'undefined') {
        callback();
        return;
    }
    if (attempt >= 50) return;
    setTimeout(() => whenChartReady(callback, attempt + 1), 120);
}

function initCompoundIfPresent() {
    if (typeof calcCompound !== 'function' || !document.getElementById('compoundChartCanvas')) return;
    whenChartReady(() => calcCompound());
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

// --- THEME & UI ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode-override');
    const isDark = document.body.classList.contains('dark-mode-override');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconM = document.getElementById('theme-icon-m');
    if (themeIcon) themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    if (themeIconM) themeIconM.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    
    localStorage.setItem('ewoks_theme', isDark ? 'dark' : 'light');
    
    const __tvw = document.getElementById('tv-chart-wrapper');
    if(__tvw && !__tvw.classList.contains('hide') && window.tvWidgetInstance) {
        const currentTicker = window.currentTickerView || "IDX:COMPOSITE";
        openTVChart(currentTicker); 
    }
}

function checkTheme() {
    if(localStorage.getItem('ewoks_theme') === 'dark') {
        toggleDarkMode();
    }
}

function showPage(pageId) {
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
    if (url) window.location.href = EwoksSiteContext.basePath + url;
}

window.tvWidgetInstance = null;
window.currentTickerView = "";

function openTVChart(ticker) {
            if (!document.getElementById('chart-active-ticker-input') || !document.getElementById('tv-chart-container')) {
                return;
            }
            if (typeof TradingView === 'undefined' || typeof TradingView.widget !== 'function') {
                return;
            }
    const symbol = ticker.includes("IDX:") ? ticker : `IDX:${ticker}`;
    window.currentTickerView = symbol; 
    
    document.getElementById('chart-active-ticker-input').value = ticker.replace("IDX:", "");

    if(document.getElementById('tv-chart-wrapper')) {
        document.getElementById('tv-chart-wrapper').classList.remove('hide');
    }

    const isDark = document.body.classList.contains('dark-mode-override');
    
    document.getElementById('tv-chart-container').innerHTML = '';
    
    window.tvWidgetInstance = new TradingView.widget({
      "autosize": true,
      "symbol": symbol,
      "interval": "D", 
      "timezone": "Asia/Jakarta",
      "theme": isDark ? "dark" : "light",
      "style": "1",
      "locale": "id",
      "enable_publishing": false,
      "backgroundColor": isDark ? "#0f172a" : "rgba(255, 255, 255, 1)",
      "gridColor": isDark ? "#1e293b" : "rgba(241, 245, 249, 1)",
      "hide_top_toolbar": false, 
      "hide_legend": false,
      "save_image": false,
      "container_id": "tv-chart-container",
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "withdateranges": true,
      "allow_symbol_change": true,
      "details": true,
      "hotlist": true,
      "calendar": true,
      "hide_side_toolbar": false
    });
    
    if(EwoksSiteContext.is('watchlist')){
        const headerOffset = 100;
        const elementPosition = document.getElementById('tv-chart-wrapper').getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

// --- LIVE DATA & NEWS (WITH GOOGLE SHEETS FALLBACK) ---
/** Tanggal kalendar (YYYY-MM-DD) di zona Asia/Jakarta — dipakai filter & cache-bust harian. */
function getJakartaDateKey(date = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);
}

const CORPORATE_CALENDAR_FALLBACK = [
    { ticker: 'BBCA', action: 'Dividen Final', kind: 'dividen', date: '2026-05-12', dateLabel: 'Cum Date' },
    { ticker: 'ADRO', action: 'Dividen Interim', kind: 'dividen', date: '2026-05-15', dateLabel: 'Cum Date' },
    { ticker: 'TLKM', action: 'RUPS Tahunan', kind: 'rups', date: '2026-05-20', dateLabel: 'Jadwal' },
    { ticker: 'BMRI', action: 'Dividen Interim', kind: 'dividen', date: '2026-05-28', dateLabel: 'Cum Date' },
    { ticker: 'ASII', action: 'RUPS Tahunan', kind: 'rups', date: '2026-06-12', dateLabel: 'Jadwal' },
    { ticker: 'UNVR', action: 'Dividen Final', kind: 'dividen', date: '2026-06-18', dateLabel: 'Cum Date' },
];

/** Emiten IDX (tanpa .JK) untuk tarik dividen via Finnhub jika token di-set — daftar bisa Anda sesuaikan. */
const CORP_CAL_FINNHUB_TICKERS = [
    'BBCA', 'BBRI', 'BMRI', 'BRIS', 'TLKM', 'ASII', 'UNVR', 'ADRO', 'ANTM', 'GOTO',
];

function addCalendarDaysToYmd(ymd, addDays) {
    const p = String(ymd).split('-').map(Number);
    if (p.length !== 3 || p.some((n) => !Number.isFinite(n))) return ymd;
    const [y, m, d] = p;
    const dt = new Date(y, m - 1, d + addDays);
    const y2 = dt.getFullYear();
    const m2 = String(dt.getMonth() + 1).padStart(2, '0');
    const d2 = String(dt.getDate()).padStart(2, '0');
    return `${y2}-${m2}-${d2}`;
}

/** Token Finnhub gratis: https://finnhub.io/register — set `window.EWOKS_FINNHUB_TOKEN` (script sebelum ewoks-core) atau localStorage `ewoks_finnhub_token`. */
function getEwoksFinnhubToken() {
    try {
        if (typeof window !== 'undefined' && window.EWOKS_FINNHUB_TOKEN) {
            const t = String(window.EWOKS_FINNHUB_TOKEN).trim();
            if (t) return t;
        }
    } catch (_) {}
    try {
        const t = localStorage.getItem('ewoks_finnhub_token');
        if (t && String(t).trim()) return String(t).trim();
    } catch (_) {}
    return '';
}

function dedupeCorpEventsPreserveFirst(events) {
    const seen = new Set();
    return events.filter((e) => {
        if (!e || !e.ticker || !e.date) return false;
        const k = `${String(e.ticker).toUpperCase()}|${e.date}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    });
}

/** Dividen ex-date dari Finnhub (CORS *). Hanya dividen; RUPS dll. tetap dari JSON. */
async function fetchFinnhubIdxDividendEvents(token) {
    if (!token) return [];
    const from = getJakartaDateKey();
    const to = addCalendarDaysToYmd(from, 150);
    const tasks = CORP_CAL_FINNHUB_TICKERS.map(async (sym) => {
        try {
            const symjk = `${sym}.JK`;
            const u = `https://finnhub.io/api/v1/stock/dividend?symbol=${encodeURIComponent(symjk)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&token=${encodeURIComponent(token)}`;
            const res = await fetch(u);
            if (!res.ok) return [];
            const rows = await res.json();
            if (!Array.isArray(rows)) return [];
            return rows
                .filter((r) => r && r.date)
                .map((r) => {
                    const dateStr = String(r.date).slice(0, 10);
                    let action = 'Dividen';
                    if (r.amount != null && Number.isFinite(Number(r.amount))) {
                        const cur = r.currency ? String(r.currency) : 'IDR';
                        const amt = Number(r.amount).toLocaleString('id-ID', { maximumFractionDigits: 4 });
                        action = `Dividen ${cur} ${amt}`;
                    }
                    return {
                        ticker: sym,
                        action,
                        kind: 'dividen',
                        date: dateStr,
                        dateLabel: 'Ex-Date',
                    };
                });
        } catch (_) {
            return [];
        }
    });
    return (await Promise.all(tasks)).flat();
}

function formatCorporateCalendarIdDate(ymd) {
    const p = String(ymd).split('-').map(Number);
    if (p.length !== 3 || p.some((n) => !Number.isFinite(n))) return ymd;
    const [y, m, d] = p;
    return new Date(y, m - 1, d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function corporateCalendarBadgeClass(kind) {
    if (kind === 'rups') return 'bg-blue-100 text-blue-700';
    if (kind === 'dividen') return 'bg-emerald-100 text-emerald-700';
    return 'bg-slate-100 text-slate-700';
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function normalizeCorporateCalendarPayload(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.events)) return data.events;
    return [];
}

function renderCorporateCalendar(events) {
    const container = document.getElementById('corporate-calendar-container');
    if (!container) return;

    const today = getJakartaDateKey();
    const upcoming = events
        .filter((e) => e && e.date && e.ticker && String(e.date) >= today)
        .sort((a, b) => String(a.date).localeCompare(String(b.date)))
        .slice(0, 3);

    if (upcoming.length === 0) {
        container.innerHTML = `
            <div class="bg-white p-4 rounded-xl border border-slate-100 text-center">
                <p class="text-xs text-slate-600 leading-relaxed">Belum ada jadwal mendatang di daftar. Lihat kalender resmi IDX lewat tautan di bawah.</p>
            </div>`;
        return;
    }

    container.innerHTML = upcoming
        .map((e) => {
            const isToday = e.date === today;
            const border = isToday ? 'border-amber-300 ring-1 ring-amber-200/60' : 'border-slate-100';
            const todayTag = isToday
                ? '<span class="text-[8px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-black uppercase ml-1">Hari ini</span>'
                : '';
            const badge = corporateCalendarBadgeClass(e.kind);
            const tk = escapeHtml(e.ticker);
            const ac = escapeHtml(e.action);
            const dl = escapeHtml(e.dateLabel || 'Jadwal');
            return `
            <div class="flex justify-between items-center bg-white p-4 rounded-xl border ${border} shadow-sm hover:border-amber-300 transition-colors">
                <div>
                    <span class="font-black text-slate-800 text-lg block leading-none mb-1">${tk}${todayTag}</span>
                    <span class="text-[9px] ${badge} px-2 py-0.5 rounded font-bold uppercase tracking-widest">${ac}</span>
                </div>
                <div class="text-right">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">${dl}</p>
                    <p class="text-sm font-black text-slate-700">${formatCorporateCalendarIdDate(e.date)}</p>
                </div>
            </div>`;
        })
        .join('');
}

let __ewoksCorpCalFetchedForJakartaDate = null;

async function fetchAndRenderCorporateCalendar() {
    const container = document.getElementById('corporate-calendar-container');
    if (!container) return;

    const jakartaToday = getJakartaDateKey();
    const url = new URL(`assets/data/corporate-calendar.json?v=${encodeURIComponent(jakartaToday)}`, document.baseURI || window.location.href).href;

    let list = [...CORPORATE_CALENDAR_FALLBACK];
    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            const parsed = normalizeCorporateCalendarPayload(data);
            if (parsed.length) list = [...parsed];
        }
    } catch (_) {
        /* pakai fallback */
    }

    const finnhubToken = getEwoksFinnhubToken();
    if (finnhubToken) {
        try {
            const apiEvents = await fetchFinnhubIdxDividendEvents(finnhubToken);
            list = dedupeCorpEventsPreserveFirst([...list, ...apiEvents]);
        } catch (_) {
            /* tetap pakai list JSON/fallback */
        }
    }

    __ewoksCorpCalFetchedForJakartaDate = jakartaToday;
    renderCorporateCalendar(list);
}

function refreshCorporateCalendarIfJakartaDateChanged() {
    const key = getJakartaDateKey();
    if (key !== __ewoksCorpCalFetchedForJakartaDate) {
        fetchAndRenderCorporateCalendar();
    }
}

async function fetchNews() {
    const container = document.getElementById('news-container');
    if (!container) return;
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.cnbcindonesia.com/market/rss');
        const data = await res.json();
        
        if(data.status === 'ok') {
            const keywords = ['IHSG', 'saham', 'asing', 'bunga', 'fed', 'investor', 'emiten', 'rupiah', 'BI'];
            const filteredItems = data.items.filter(item => {
                const titleLower = item.title.toLowerCase();
                return keywords.some(kw => titleLower.includes(kw.toLowerCase()));
            });

            const itemsToShow = filteredItems.length > 0 ? filteredItems.slice(0, 5) : data.items.slice(0, 5);

            container.innerHTML = itemsToShow.map(item => `
                <a href="${item.link}" target="_blank" class="block p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors bg-white shadow-sm">
                    <p class="text-[10px] text-blue-500 font-black mb-1 uppercase tracking-widest">${item.pubDate.split(' ')[0]}</p>
                    <h4 class="text-xs md:text-sm font-bold text-slate-800 line-clamp-2">${item.title}</h4>
                </a>
            `).join('');
        } else {
            throw new Error("API Limit Reached");
        }
    } catch (e) {
        container.innerHTML = `
            <a href="https://www.cnbcindonesia.com/market" target="_blank" class="block p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors bg-white shadow-sm">
                <p class="text-[10px] text-blue-500 font-black mb-1 uppercase tracking-widest">HARI INI</p>
                <h4 class="text-xs md:text-sm font-bold text-slate-800">IHSG Diprediksi Menguat Terbatas di Tengah Penantian Rilis Data Inflasi AS</h4>
            </a>
            <a href="https://www.cnbcindonesia.com/market" target="_blank" class="block p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors bg-white shadow-sm mt-3">
                <p class="text-[10px] text-blue-500 font-black mb-1 uppercase tracking-widest">HARI INI</p>
                <h4 class="text-xs md:text-sm font-bold text-slate-800">Aksi Beli Bersih Asing Meningkat, Sektor Perbankan Jadi Incaran Utama Ritel</h4>
            </a>
        `;
    }
}

async function fetchRealIHSG() {
    try {
        throw new Error("GSheet URL belum di-set, force fallback."); 
    } catch (error) {
        fetchLiveMarketData();
    }
}

function fetchLiveMarketData() {
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

    if(fgPointer) fgPointer.style.left = `${fgValue}%`;

    if(fgText) {
        let statusText = "";
        let colorClass = "";
        if(fgValue < 25) { statusText = "EXTREME FEAR"; colorClass = "text-rose-600"; fgText.className = "text-[10px] font-black text-rose-600 transition-all duration-300"; }
        else if(fgValue < 45) { statusText = "FEAR"; colorClass = "text-rose-500"; fgText.className = "text-[10px] font-black text-rose-500 transition-all duration-300"; }
        else if(fgValue < 55) { statusText = "NEUTRAL"; colorClass = "text-amber-500"; fgText.className = "text-[10px] font-black text-amber-500 transition-all duration-300"; }
        else if(fgValue < 75) { statusText = "GREED"; colorClass = "text-emerald-500"; fgText.className = "text-[10px] font-black text-emerald-500 transition-all duration-300"; }
        else { statusText = "EXTREME GREED"; colorClass = "text-emerald-600"; fgText.className = "text-[10px] font-black text-emerald-600 transition-all duration-300"; }

        fgText.innerText = `${statusText} (${Math.round(fgValue)})`;
        if(termSentiment) {
            termSentiment.innerText = statusText;
            termSentiment.className = `text-xl md:text-2xl font-black ${colorClass}`;
        }
    }

    if (EwoksSiteContext.is('watchlist') && typeof renderWatchlist === 'function') {
        renderWatchlist(true);
    }
}

function getBrokerBadge(kode) {
    const asing = ['AK', 'BK', 'CS', 'RX', 'KZ', 'CG', 'YU'];
    const ritel = ['YP', 'PD', 'CC', 'NI', 'XC'];
    if (asing.includes(kode)) return '<span class="bg-indigo-100 text-indigo-700 text-[9px] px-2 py-1 rounded font-bold ml-2">Asing/Institusi</span>';
    if (ritel.includes(kode)) return '<span class="bg-rose-100 text-rose-700 text-[9px] px-2 py-1 rounded font-bold ml-2">Dominan Ritel</span>';
    return '<span class="bg-slate-100 text-slate-500 text-[9px] px-2 py-1 rounded font-bold ml-2">Standar Lokal</span>';
}



// --- UTILITIES & SYSTEM ---
function formatAbbreviated(num) {
    const n = Number(num) || 0;
    if (n >= 1000000000) return (n / 1000000000).toFixed(2) + ' Miliar';
    if (n >= 1000000) return (n / 1000000).toFixed(2) + ' Juta';
    if (n >= 1000) return (n / 1000).toFixed(1) + ' Ribu';
    return Math.round(n).toLocaleString('id-ID');
}

function updateClock() {
    const now = new Date();
    let timeString = '--:--:-- WIB';
    try {
        timeString = now.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta'
        }) + ' WIB';
    } catch (_) {
        const pad = (v) => String(v).padStart(2, '0');
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const wib = new Date(utc + 7 * 3600000);
        timeString = `${pad(wib.getHours())}:${pad(wib.getMinutes())}:${pad(wib.getSeconds())} WIB`;
    }
    const clockEl = document.getElementById('clockText');
    if (clockEl) clockEl.innerText = timeString;
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    if (window.scrollY > 300) {
        btn.classList.remove('opacity-0', 'pointer-events-none');
        btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
        btn.classList.add('opacity-0', 'pointer-events-none');
        btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('load', () => {
    checkTheme();
    highlightNavForCurrentPage();

    if (typeof loadMacroNotes === 'function') loadMacroNotes();
    if (typeof renderBrokers === 'function' && document.getElementById('brokerTable')) renderBrokers();
    if (typeof renderHistory === 'function' && document.getElementById('historySection')) renderHistory();
    if (typeof renderGrid === 'function' && document.getElementById('group-grid')) renderGrid();
    if (typeof renderWatchlist === 'function' && document.getElementById('watchlist-container')) renderWatchlist();
    if (typeof renderJournal === 'function' && (document.getElementById('journal-empty') || document.getElementById('jr-date'))) renderJournal();
    if (typeof calcSbn === 'function') calcSbn();
    if (typeof calculateRetirement === 'function' && document.getElementById('p-age-retire')) calculateRetirement();
    initCompoundIfPresent();
    if (typeof calcDarurat === 'function' && document.getElementById('dar-expense')) calcDarurat();

    const page = EwoksSiteContext.page;
    if (page === 'konglo' && typeof renderChart === 'function') {
        setTimeout(renderChart, 100);
    }
    if (page === 'fixed-income') {
        setTimeout(() => { if (typeof renderYieldChart === 'function') renderYieldChart(); }, 100);
        setTimeout(() => { if (typeof renderYieldCurve === 'function') renderYieldCurve(); }, 100);
    }
    if (page === 'pensiun') setTimeout(initCompoundIfPresent, 100);
    if (page === 'kalkulator' && typeof runSimpleCalc === 'function' && document.getElementById('calc-price')) runSimpleCalc();
    if (page === 'jurnal' && typeof renderJournal === 'function') renderJournal();
    if (page === 'watchlist' && typeof openTVChart === 'function' && !window.tvWidgetInstance) {
        openTVChart('IDX:COMPOSITE');
    }

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.group')) {
            document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
        }
    });

    document.querySelectorAll('.group > button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = this.nextElementSibling;
            if (!dropdown) return;
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

    if (document.getElementById('corporate-calendar-container')) {
        fetchAndRenderCorporateCalendar();
        setInterval(refreshCorporateCalendarIfJakartaDateChanged, 60 * 1000);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') fetchAndRenderCorporateCalendar();
        });
    }

    setInterval(updateClock, 1000);
    setInterval(fetchRealIHSG, 5000);
});

