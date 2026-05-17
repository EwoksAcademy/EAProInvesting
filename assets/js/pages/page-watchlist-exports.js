// --- FUNGSI EXPORT MARKET SCREENER KE WA & EXCEL ---
function exportScreenerWA() {
    if(watchlist.length === 0) {
        showToast("Tambahkan saham dari Screener ke 'Pantau Saham Pribadi' (Watchlist) terlebih dahulu untuk diekspor!", "warning");
        return;
    }
    let msg = "*HASIL SCREENING PASAR HARI INI*\n\n";
    watchlist.forEach(w => {
        msg += `• *${w.ticker}* - Target Beli: Rp ${Number(w.price).toLocaleString('id-ID')}\n  Catatan: ${w.note || '-'}\n`;
        if(w.foreign) msg += `  Foreign: ${w.foreign}\n`;
        msg += "\n";
    });
    msg += "_Data ditarik dari Watchlist Ewoks Academy Suite_";
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}

function exportScreenerCSV() {
    if(watchlist.length === 0) {
        showToast("Tambahkan saham dari Screener ke 'Pantau Saham Pribadi' (Watchlist) terlebih dahulu untuk diekspor!", "warning");
        return;
    }
    let csv = "Kode Emiten,Target Beli,Catatan,Foreign Flow\n";
    watchlist.forEach(w => {
        csv += `${w.ticker},${w.price},"${w.note || '-'}","${w.foreign || '-'}"\n`;
    });
    const encoded = encodeURI("data:text/csv;charset=utf-8," + csv);
    const link = document.createElement("a");
    link.setAttribute("href", encoded);
    link.setAttribute("download", `Screener_Watchlist_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Hasil Export CSV Berhasil Diunduh!", "success");
}
