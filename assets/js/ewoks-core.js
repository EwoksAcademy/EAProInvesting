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
    if (url) window.location.href = url;
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
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB';
    const clockEl = document.getElementById('clockText');
    if (clockEl) clockEl.innerText = timeString;

    const clockContainer = document.getElementById('liveClock');
    if (clockContainer && clockContainer.classList.contains('hidden')) {
        clockContainer.classList.remove('hidden');
    }
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
    if (typeof calcCompound === 'function' && document.getElementById('compoundChartCanvas')) calcCompound();
    if (typeof calcDarurat === 'function' && document.getElementById('dar-expense')) calcDarurat();

    const page = EwoksSiteContext.page;
    if (page === 'konglo' && typeof renderChart === 'function') {
        setTimeout(renderChart, 100);
    }
    if (page === 'fixed-income') {
        setTimeout(() => { if (typeof renderYieldChart === 'function') renderYieldChart(); }, 100);
        setTimeout(() => { if (typeof renderYieldCurve === 'function') renderYieldCurve(); }, 100);
    }
    if (page === 'pensiun') setTimeout(() => { if (typeof calcCompound === 'function') calcCompound(); }, 100);
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

    setInterval(updateClock, 1000);
    setInterval(fetchRealIHSG, 5000);
});

