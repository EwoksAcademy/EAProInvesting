// --- KALKULATOR BANDAR ---
function checkBrokerHeatmap(e) {
    const val = e.target.value.toUpperCase();
    const badge = document.getElementById('broker-heatmap-badge');
    if(val.length >= 2) {
        const kode = val.substring(0,2);
        badge.innerHTML = getBrokerBadge(kode);
    } else {
        badge.innerHTML = '';
    }
}

function getTickSize(price) {
    const p = Number(price) || 0;
    if (p <= 200) return 1;
    if (p <= 500) return 2;
    if (p <= 2000) return 5;
    if (p <= 5000) return 10;
    return 25;
}

function handleBuyAvgChange(e) {
    const buyAvg = parseFloat(e.target.value);
    document.getElementById('tickSize').value = buyAvg ? `${getTickSize(buyAvg)} poin` : '';
    updateJumlahPapan();
}

function updateJumlahPapan() {
    const buyAvg = parseFloat(document.getElementById('buyAvg').value) || 0;
    const offerTertinggi = parseFloat(document.getElementById('offerTertinggi').value) || 0;
    const bidTerendah = parseFloat(document.getElementById('bidTerendah').value) || 0;
    if (buyAvg && offerTertinggi && bidTerendah && offerTertinggi > bidTerendah) {
        const tick = getTickSize(buyAvg);
        const jumlahPapan = ((offerTertinggi - bidTerendah) / tick) + 1;
        document.getElementById('jumlahPapan').value = formatNumber(jumlahPapan);
    } else {
        document.getElementById('jumlahPapan').value = '';
    }
}

function formatNumber(num) {
    if (isNaN(num) || num === null) return '0';
    return Number(Math.round(num * 100) / 100).toLocaleString('id-ID');
}

       function handleCalculate() {
    const tanggal = document.getElementById('tanggal').value;
    const emiten = document.getElementById('emiten').value.toUpperCase().trim();
    const broker = document.getElementById('broker').value.toUpperCase().trim();
    const buyLot = Number(document.getElementById('buyLot').value) || 0;
    const buyAvg = Number(document.getElementById('buyAvg').value) || 0;
    const bidTerendah = Number(document.getElementById('bidTerendah').value) || 0;
    const offerTertinggi = Number(document.getElementById('offerTertinggi').value) || 0;
    const totalBid = Number(document.getElementById('totalBid').value) || 0;
    const totalOffer = Number(document.getElementById('totalOffer').value) || 0;

    if (!tanggal || !emiten || !broker || !buyLot || !buyAvg || !bidTerendah || !offerTertinggi) {
        showToast('Semua field bertanda * wajib diisi', 'error');
        return;
    }
    if(buyLot <= 0 || buyAvg <= 0) {
        showToast('Data Lot dan Harga tidak valid!', 'error');
        return;
    }

    const tick = getTickSize(buyAvg);
    const jumlahPapan = ((offerTertinggi - bidTerendah) / tick) + 1;
    const rataPerPapan = (totalBid + totalOffer) / jumlahPapan;
    const papanCountHigh = rataPerPapan > 0 ? (buyLot / rataPerPapan) : 0;
    const papanCountLow = papanCountHigh / 2;
    const fivePercent = buyAvg * 0.05;

    const targetHigh = buyAvg + fivePercent + (papanCountHigh * tick);
    const targetLow = buyAvg + percentLow + (papanCountLow * tick); 
    const percentLow = ((targetLow - buyAvg) / buyAvg) * 100;
    const percentHigh = ((targetHigh - buyAvg) / buyAvg) * 100;

    const result = {
        timestamp: Date.now(),
        tanggal,
        dateDisplay: new Date(tanggal).toLocaleDateString('id-ID', {day:'2-digit', month:'short', year:'numeric'}),
        emiten, broker, buyLot, buyAvg, bidTerendah, offerTertinggi, totalBid, totalOffer,
        targetHigh, targetLow, percentLow, percentHigh
    };

    history.unshift(result);
    localStorage.setItem('calc_history', JSON.stringify(history));
    showToast("Perhitungan Bandar selesai", "success");
    renderHistory();
}

function handleReset() {
    ['tanggal', 'emiten', 'broker', 'buyLot', 'buyAvg', 'bidTerendah', 'offerTertinggi', 'jumlahPapan', 'totalBid', 'totalOffer', 'tickSize'].forEach(id => {
        document.getElementById(id).value = id === 'tanggal' ? new Date().toISOString().split('T')[0] : '';
    });
    document.getElementById('broker-heatmap-badge').innerHTML = '';
    showToast('Formulir direset', 'warning');
}

function renderHistory() {
    const container = document.getElementById('historySection');
    if (!container) return;
    if (history.length === 0) { container.classList.add('hidden'); return; }
    container.classList.remove('hidden');

    container.innerHTML = `<div class="flex justify-between items-center mb-4">
        <h3 class="font-black text-slate-900 uppercase">Hasil Perhitungan</h3>
        <div class="flex gap-2">
            <button onclick="exportHistoryCSV()" class="text-[10px] bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-bold hover:bg-blue-100 transition-colors"><i class="fas fa-download mr-1"></i> EXPORT CSV</button>
            <button onclick="clearHistory()" class="text-[10px] bg-red-50 text-red-600 px-3 py-1 rounded-lg font-bold hover:bg-red-100 transition-colors">CLEAR ALL</button>
        </div>
    </div>` + history.map(res => `
        <div class="border border-slate-100 rounded-2xl p-5 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <span class="text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">${res.emiten}</span>
                    <p class="text-[10px] text-slate-400 font-bold mt-1">${res.dateDisplay} • Broker ${res.broker} ${getBrokerBadge(res.broker)}</p>
                </div>
                <div class="flex gap-2">
                     <button onclick="shareWhatsAppBandar(${res.timestamp})" class="w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-lg shadow-sm hover:bg-emerald-600 transition-colors"><i class="fab fa-whatsapp"></i></button>
                     <button onclick="copyRes(${res.timestamp})" class="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg shadow-sm text-slate-400 hover:text-blue-600 transition-colors"><i class="fas fa-copy"></i></button>
                     <button onclick="deleteItem(${res.timestamp})" class="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg shadow-sm text-red-400 hover:text-red-600 transition-colors"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p class="text-[9px] font-black text-slate-400 uppercase mb-1">Target Low</p>
                    <p class="text-lg font-black text-emerald-600">Rp ${formatNumber(res.targetLow)}</p>
                    <p class="text-[10px] font-bold text-emerald-500">+${(res.percentLow || 0).toFixed(2)}%</p>
                </div>
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <p class="text-[9px] font-black text-slate-400 uppercase mb-1">Target High</p>
                    <p class="text-lg font-black text-blue-600">Rp ${formatNumber(res.targetHigh)}</p>
                    <p class="text-[10px] font-bold text-blue-500">+${(res.percentHigh || 0).toFixed(2)}%</p>
                </div>
            </div>
        </div>
    `).join('');
}

function shareWhatsAppBandar(ts) {
    const r = history.find(h => h.timestamp === ts);
    if (!r) return;
    const text = `*TARGET REALISTIS SAHAM ${r.emiten}*\n` +
                 `Broker: ${r.broker}\n` +
                 `Buy Avg: Rp ${formatNumber(r.buyAvg)}\n\n` +
                 `🟢 *Target Low:* Rp ${formatNumber(r.targetLow)} (+${(r.percentLow || 0).toFixed(2)}%)\n` +
                 `🔵 *Target High:* Rp ${formatNumber(r.targetHigh)} (+${(r.percentHigh || 0).toFixed(2)}%)\n\n` +
                 `_Analyzed with Ewoks Academy Suite_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

function deleteItem(ts) {
    history = history.filter(h => h.timestamp !== ts);
    localStorage.setItem('calc_history', JSON.stringify(history));
    showToast('Riwayat Kalkulator dihapus', 'success');
    renderHistory();
}

function clearHistory() {
    if(confirm('Hapus semua riwayat?')) {
        history = [];
        localStorage.removeItem('calc_history');
        showToast('Semua riwayat telah dibersihkan', 'success');
        renderHistory();
    }
}

function exportHistoryCSV() {
    if (history.length === 0) {
        showToast("Tidak ada riwayat untuk diekspor.", "error");
        return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Tanggal,Emiten,Broker,Buy Lot,Buy Avg,Bid Terendah,Offer Tertinggi,Total Bid,Total Offer,Target Low,Target High\n";
    
    history.forEach(row => {
        const rowData = [
            row.tanggal, row.emiten, row.broker, row.buyLot, row.buyAvg, 
            row.bidTerendah, row.offerTertinggi, row.totalBid, row.totalOffer, 
            row.targetLow, row.targetHigh
        ].join(",");
        csvContent += rowData + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "riwayat_bandar_ewoks.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Export riwayat bandar berhasil", "success");
}

function copyRes(ts) {
    const r = history.find(h => h.timestamp === ts);
    const text = `TARGET REALISTIS SAHAM ${r.emiten}\nTarget Low: Rp ${formatNumber(r.targetLow)} (+${(r.percentLow || 0).toFixed(2)}%)\nTarget High: Rp ${formatNumber(r.targetHigh)} (+${(r.percentHigh || 0).toFixed(2)}%)\n\nEwoks Academy Suite`;
    navigator.clipboard.writeText(text).then(() => showToast('Data disalin ke clipboard!', 'success'));
}
