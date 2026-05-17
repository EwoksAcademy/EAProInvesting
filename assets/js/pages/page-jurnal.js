// --- JURNAL TRADING & LOG BOOK ---
function calcRRR() {
    const buy = parseFloat(document.getElementById('jr-buy').value) || 0;
    const tp = parseFloat(document.getElementById('jr-tp').value) || 0;
    const sl = parseFloat(document.getElementById('jr-sl').value) || 0;
    const indicator = document.getElementById('rr-indicator');

    if(buy > 0 && tp > 0 && sl > 0 && tp > buy && buy > sl) {
        const risk = buy - sl;
        const reward = tp - buy;
        const ratio = reward / risk;
        
        let text = `RRR 1 : ${ratio.toFixed(1)}`;
        if(ratio >= 3) {
            indicator.innerHTML = `<span class="text-emerald-500"><i class="fas fa-check-circle"></i> ${text} (Sangat Bagus)</span>`;
        } else if(ratio >= 2) {
            indicator.innerHTML = `<span class="text-blue-500"><i class="fas fa-check"></i> ${text} (Ideal)</span>`;
        } else {
            indicator.innerHTML = `<span class="text-rose-500"><i class="fas fa-exclamation-triangle"></i> ${text} (Kurang Ideal / Berisiko)</span>`;
        }
    } else {
        indicator.innerHTML = '';
    }
}

function addJournal() {
    const date = document.getElementById('jr-date').value;
    const ticker = document.getElementById('jr-ticker').value.toUpperCase().trim();
    const lot = parseFloat(document.getElementById('jr-lot').value);
    const buy = parseFloat(document.getElementById('jr-buy').value);
    const sell = parseFloat(document.getElementById('jr-sell').value);
    const fee = parseFloat(document.getElementById('jr-fee').value) || 0.4;
    const reason = document.getElementById('jr-reason').value;
    const emotion = document.getElementById('jr-emotion').value;
    const screenshot = document.getElementById('jr-screenshot').value.trim();

    if(!date || !ticker || !lot || !buy || !sell) {
        showToast("Semua kolom input bertanda wajib harus diisi!", "error");
        return;
    }
    if(buy <= 0 || sell <= 0 || lot <= 0) {
        showToast("Kesalahan Validasi: Harga dan Lot tidak boleh bernilai negatif atau nol!", "error");
        return;
    }

    const grossValueBuy = buy * lot * 100;
    const grossValueSell = sell * lot * 100;
    const totalFee = (grossValueBuy + grossValueSell) * (fee / 100);
    const grossPnL = grossValueSell - grossValueBuy;
    const netPnL = grossPnL - totalFee;
    const isWin = netPnL > 0;

    journal.unshift({
        id: Date.now(),
        date, ticker, lot, buy, sell, fee, reason, emotion, screenshot, netPnL, isWin
    });

    localStorage.setItem('ewoks_journal', JSON.stringify(journal));
    
    document.getElementById('jr-ticker').value = '';
    document.getElementById('jr-lot').value = '';
    document.getElementById('jr-buy').value = '';
    document.getElementById('jr-sell').value = '';
    document.getElementById('jr-tp').value = '';
    document.getElementById('jr-sl').value = '';
    document.getElementById('jr-screenshot').value = '';
    document.getElementById('rr-indicator').innerHTML = '';
    
    showToast("Catatan Trade berhasil disimpan ke Jurnal!", "success");
    renderJournal();
}

function renderJurnalCharts(journalData) {
    if(!journalData || journalData.length === 0) return;

    const sorted = [...journalData].sort((a,b) => new Date(a.date) - new Date(b.date));
    let equity = [];
    let labels = [];
    let currentEq = 0;
    let wins = 0;
    let losses = 0;

    sorted.forEach((j) => {
        currentEq += j.netPnL;
        equity.push(currentEq);
        labels.push(`${j.ticker} (${j.date.split('-').slice(1).join('/')})`);
        if(j.isWin) wins++; else losses++;
    });

    const ctxEq = document.getElementById('equityChart');
    if(ctxEq) {
        if(window.equityChartInstance) window.equityChartInstance.destroy();
        window.equityChartInstance = new Chart(ctxEq.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Kumulatif PnL Bersih (Rp)',
                    data: equity,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { 
                    x: { display: false },
                    y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: 'rgba(226, 232, 240, 0.5)' } }
                }
            }
        });
    }

    const ctxWl = document.getElementById('winLossChart');
    if(ctxWl) {
        if(window.winLossChartInstance) window.winLossChartInstance.destroy();
        window.winLossChartInstance = new Chart(ctxWl.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Win', 'Loss'],
                datasets: [{
                    data: [wins, losses],
                    backgroundColor: ['#10b981', '#ef4444'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } } },
                cutout: '70%'
            }
        });
    }
}

function renderJournal(searchQuery = '') {
    const tbody = document.getElementById('journal-tbody');
    const emptyState = document.getElementById('journal-empty');
    
    let filteredJournal = journal;
    if(searchQuery) {
        const q = searchQuery.toLowerCase();
        filteredJournal = journal.filter(j => j.ticker.toLowerCase().includes(q));
    }
    
    if(filteredJournal.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hide');
        document.getElementById('jr-total-trade').innerText = '0';
        document.getElementById('jr-win-rate').innerText = '0%';
        document.getElementById('jr-total-win').innerText = '0';
        document.getElementById('jr-total-loss').innerText = '0';
        document.getElementById('jr-total-modal').innerText = '0';
        
        if(window.equityChartInstance) window.equityChartInstance.destroy();
        if(window.winLossChartInstance) window.winLossChartInstance.destroy();
        return;
    }
    
    emptyState.classList.add('hide');
    let wins = 0, totalWinRp = 0, totalLossRp = 0, totalModal = 0;

    tbody.innerHTML = filteredJournal.map(j => {
        if(j.isWin) { wins++; totalWinRp += j.netPnL; }
        else { totalLossRp += Math.abs(j.netPnL); }

        totalModal += (j.buy * j.lot * 100);

        const pnlColor = j.isWin ? 'text-emerald-500' : 'text-rose-500';
        const pnlSign = j.isWin ? '+' : '';
        const screenHTML = j.screenshot ? `<a href="${j.screenshot}" target="_blank" class="text-blue-500 hover:text-blue-700 ml-1 tooltip-trigger"><i class="fas fa-image"></i><span class="tooltip-text">Lihat Chart Entry</span></a>` : '';

        return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/50 bg-white transition-colors">
            <td class="p-4">
                <span class="font-black text-blue-600 text-sm flex items-center">${j.ticker} ${screenHTML}</span>
                <span class="text-[9px] text-slate-400 font-bold">${j.date}</span>
            </td>
            <td class="p-4">
                <p class="text-xs font-bold text-slate-700">B: <span class="text-slate-500">${j.buy}</span> | S: <span class="text-slate-500">${j.sell}</span></p>
                <p class="text-[10px] text-slate-400 font-bold uppercase mt-0.5">${j.lot} Lot</p>
            </td>
            <td class="p-4">
                <span class="bg-purple-50 text-purple-600 border border-purple-100 px-2 py-0.5 rounded text-[9px] font-black uppercase inline-block mb-1">${j.reason}</span><br>
                <span class="text-[10px] text-slate-500 italic"><i class="fas fa-brain text-slate-300 mr-1"></i>${j.emotion}</span>
            </td>
            <td class="p-4 text-right font-black ${pnlColor}">
                ${pnlSign}Rp ${Math.round(j.netPnL).toLocaleString('id-ID')}
            </td>
            <td class="p-4 text-center flex flex-col gap-1 items-center justify-center">
                <button onclick="shareWhatsAppJournal(${j.id})" class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors tooltip-trigger" title="Share WA"><i class="fab fa-whatsapp"></i></button>
                <button onclick="deleteJournal(${j.id})" class="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors tooltip-trigger" title="Hapus"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
        `;
    }).join('');

    document.getElementById('jr-total-trade').innerText = filteredJournal.length;
    document.getElementById('jr-win-rate').innerText = Math.round((wins / filteredJournal.length) * 100) + '%';
    document.getElementById('jr-total-win').innerText = formatAbbreviated(totalWinRp);
    document.getElementById('jr-total-loss').innerText = formatAbbreviated(totalLossRp);
    document.getElementById('jr-total-modal').innerText = formatAbbreviated(totalModal);

    renderJurnalCharts(filteredJournal);
}

function saveMacroNotes() {
    const notes = document.getElementById('macro-notes').value;
    localStorage.setItem('ewoks_macro_notes', notes);
    showToast('Catatan Sentimen Makro berhasil disimpan!', 'success');
}

function loadMacroNotes() {
    const notes = localStorage.getItem('ewoks_macro_notes');
    const el = document.getElementById('macro-notes');
    if (notes && el) el.value = notes;
}

function shareWhatsAppJournal(id) {
    const j = journal.find(x => x.id === id);
    if (!j) return;
    const status = j.isWin ? "✅ PROFIT" : "❌ LOSS";
    const msg = `*JURNAL TRADING: ${j.ticker}*\nStatus: ${status}\n\nHarga Beli: Rp ${j.buy}\nHarga Jual: Rp ${j.sell}\nLot: ${j.lot} Lot\nNet PnL: Rp ${Math.round(j.netPnL).toLocaleString('id-ID')}\n\nSetup: ${j.reason}\nPsikologi: ${j.emotion}\n\n_Ewoks Academy Suite_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}

function deleteJournal(id) {
    journal = journal.filter(j => j.id !== id);
    localStorage.setItem('ewoks_journal', JSON.stringify(journal));
    renderJournal(document.getElementById('jr-search').value);
    showToast('Data trade berhasil dihapus', 'success');
}

function clearJournal() {
    if(confirm('Yakin ingin menghapus SELURUH histori jurnal trading?')) {
        journal = [];
        localStorage.removeItem('ewoks_journal');
        document.getElementById('jr-search').value = '';
        renderJournal();
        showToast('Jurnal telah dibersihkan sepenuhnya', 'success');
    }
}

function exportJournalCSV() {
    if(journal.length === 0) { showToast('Jurnal masih kosong!', 'error'); return; }
    let csv = "Tanggal,Emiten,Lot,Buy,Sell,Fee(%),Alasan Entry,Psikologi/Emosi,Link Gambar,Net PnL,Status\n";
    journal.forEach(j => {
        const status = j.isWin ? 'WIN' : 'LOSS';
        csv += `${j.date},${j.ticker},${j.lot},${j.buy},${j.sell},${j.fee},"${j.reason}","${j.emotion}","${j.screenshot || '-'}",${j.netPnL},${status}\n`;
    });
    const encoded = encodeURI("data:text/csv;charset=utf-8," + csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", "Jurnal_Trading_Ewoks.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('File CSV berhasil diunduh', 'success');
}
