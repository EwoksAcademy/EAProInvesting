// --- WATCHLIST ---
function addWatchlist() {
    const ticker = document.getElementById('wl-ticker').value.toUpperCase().trim();
    const price = document.getElementById('wl-price').value;
    const note = document.getElementById('wl-note').value;
    const foreign = document.getElementById('wl-foreign').value; 
    
    if(!ticker || !price || parseFloat(price) <= 0) {
        showToast("Kode Emiten dan Harga Target wajib diisi dengan valid!", "error");
        return;
    }
    
    watchlist.push({ id: Date.now(), ticker, price, note, foreign });
    localStorage.setItem('ewoks_watchlist', JSON.stringify(watchlist));
    
    document.getElementById('wl-ticker').value = '';
    document.getElementById('wl-price').value = '';
    document.getElementById('wl-note').value = '';
    document.getElementById('wl-foreign').value = '';
    
    showToast(`${ticker} berhasil ditambahkan ke Watchlist!`, "success");
    renderWatchlist();
}

function clearWatchlist() {
    if(confirm("Yakin ingin menghapus seluruh data Watchlist Anda?")) {
        watchlist = [];
        localStorage.removeItem('ewoks_watchlist');
        renderWatchlist();
        showToast("Watchlist berhasil dibersihkan", "success");
    }
}

function renderWatchlist(isTick = false) {
    const container = document.getElementById('watchlist-container');
    if(watchlist.length === 0) {
        if(!isTick) container.innerHTML = `<div class="col-span-full p-8 text-center text-slate-500 border border-dashed border-slate-300 rounded-2xl font-bold bg-white">Watchlist masih kosong. Mulai tambahkan pantauan emiten Anda!</div>`;
        return;
    }

    if(isTick) {
        watchlist.forEach(w => {
            const target = parseFloat(w.price);
            if(!w.currentPrice) w.currentPrice = target * 0.95; 
            const change = (Math.random() * target * 0.02) - (target * 0.005); 
            w.currentPrice += change;
        });
    } else {
         watchlist.forEach(w => {
            if(!w.currentPrice) w.currentPrice = parseFloat(w.price) * 0.95; 
        });
    }

    container.innerHTML = watchlist.map(w => {
        const target = parseFloat(w.price);
        const current = w.currentPrice;
        const isHit = current >= target;
        
        return `
        <div class="bg-white border ${isHit ? 'border-emerald-400 shadow-emerald-100' : 'border-slate-200'} rounded-2xl p-5 shadow-sm relative group hover:border-amber-400 transition-colors flex flex-col h-full dark-mode-card">
            <button onclick="deleteWatchlist(${w.id})" class="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors z-10"><i class="fas fa-times"></i></button>
            ${isHit ? `<div class="absolute -top-3 -right-2 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg z-10 animate-bounce">🎯 TARGET HIT!</div>` : ''}
            
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 ${isHit ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'} rounded-xl flex items-center justify-center font-black cursor-pointer hover:opacity-80" onclick="openTVChart('${w.ticker}')" title="Buka Chart Live">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div>
                    <h4 class="font-black text-slate-900 text-lg leading-none">${w.ticker}</h4>
                    <p class="text-[10px] text-slate-400 font-bold uppercase mt-1">Target Beli: <span class="text-emerald-600">Rp ${Number(w.price).toLocaleString('id-ID')}</span></p>
                    <p class="text-[10px] font-bold mt-0.5 ${isHit ? 'text-emerald-500' : 'text-slate-500'}">Live: Rp ${Math.round(current).toLocaleString('id-ID')}</p>
                </div>
            </div>
            
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex-grow">
                <p class="text-xs text-slate-600 italic">"${w.note || 'Tidak ada catatan'}"</p>
            </div>

            ${w.foreign ? `
            <div class="bg-indigo-50 p-2 rounded-xl border border-indigo-100 flex items-center gap-2 mt-2">
                <i class="fas fa-globe text-indigo-500 text-[10px]"></i>
                <span class="text-[10px] font-black text-indigo-700 uppercase">Foreign: ${w.foreign}</span>
            </div>` : ''}

            <div class="grid grid-cols-2 gap-2 mt-4">
                <button onclick="openTVChart('${w.ticker}')" class="w-full text-[10px] font-black text-slate-600 bg-slate-100 py-3 rounded-xl hover:bg-slate-200 transition-colors uppercase"><i class="fas fa-chart-pie mr-1"></i> Chart</button>
                <button onclick="showPage('kalkulator'); document.getElementById('calc-name').value='${w.ticker}'; document.getElementById('calc-price').value='${w.price}'; runSimpleCalc();" class="w-full text-[10px] font-black text-blue-600 bg-blue-50 py-3 rounded-xl hover:bg-blue-100 transition-colors uppercase">Trading Plan</button>
            </div>
        </div>
    `}).join('');
}

function deleteWatchlist(id) {
    watchlist = watchlist.filter(w => w.id !== id);
    localStorage.setItem('ewoks_watchlist', JSON.stringify(watchlist));
    renderWatchlist();
    showToast("Item dihapus dari Watchlist", "success");
}
