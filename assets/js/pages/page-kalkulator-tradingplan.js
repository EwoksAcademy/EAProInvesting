// --- UPGRADE: TRADING PLAN & KALKULATOR LAINNYA ---
function runSimpleCalc() {
    const p = parseFloat(document.getElementById('calc-price').value) || 0;
    const l = parseFloat(document.getElementById('calc-lot').value) || 0;
    const tpP = parseFloat(document.getElementById('calc-tp').value) || 0;
    const slP = parseFloat(document.getElementById('calc-sl').value) || 0;
    const tpPrice = p + (p * (tpP / 100));
    const slPrice = p - (p * (slP / 100));
    const gain = (tpPrice - p) * l * 100;
    const loss = (p - slPrice) * l * 100;
    document.getElementById('res-tp-price').innerText = `@${Math.round(tpPrice).toLocaleString('id-ID')}`;
    document.getElementById('res-sl-price').innerText = `@${Math.round(slPrice).toLocaleString('id-ID')}`;
    document.getElementById('res-gain').innerText = Math.round(gain).toLocaleString('id-ID');
    document.getElementById('res-risk').innerText = Math.round(loss).toLocaleString('id-ID');
}

function calculateAvg(type) {
    const oldPrice = parseFloat(document.getElementById('calc-price').value) || 0;
    const oldLot = parseFloat(document.getElementById('calc-lot').value) || 0;
    const newPrice = parseFloat(document.getElementById(`avg-${type}-price`).value) || 0;
    const newLot = parseFloat(document.getElementById(`avg-${type}-lot`).value) || 0;
    
    if(oldPrice > 0 && oldLot > 0 && newPrice > 0 && newLot > 0) {
        const totalCost = (oldPrice * oldLot * 100) + (newPrice * newLot * 100);
        const totalLot = oldLot + newLot;
        const newAvg = totalCost / (totalLot * 100);
        
        document.getElementById('avg-result-box').classList.remove('hidden');
        document.getElementById('avg-type-label').innerText = type === 'up' ? 'AVG BARU (UP):' : 'AVG BARU (DOWN):';
        document.getElementById('res-avg-combined').innerText = `Rp ${Math.round(newAvg).toLocaleString('id-ID')}`;
        document.getElementById('res-avg-total-lot').innerText = `${totalLot} Lot`;
        
        const box = document.getElementById('avg-result-box');
        box.style.borderColor = type === 'up' ? '#10b981' : '#2563eb';
    } else {
        showToast("Mohon isi Harga Beli & Lot di menu Trading Plan serta input baru (tidak boleh minus/nol)!", "error");
    }
}

function calculateSizing() {
    const modal = parseFloat(document.getElementById('ps-modal').value) || 0;
    const riskPct = parseFloat(document.getElementById('ps-risk').value) || 0;
    const entry = parseFloat(document.getElementById('ps-entry').value) || 0;
    const sl = parseFloat(document.getElementById('ps-sl').value) || 0;

    if(modal > 0 && entry > 0 && sl > 0 && entry > sl && riskPct > 0) {
        const maxLossRp = modal * (riskPct / 100);
        const lossPerShare = entry - sl;
        const maxShares = maxLossRp / lossPerShare;
        const maxLot = Math.floor(maxShares / 100);
        
        document.getElementById('ps-result').classList.remove('hidden');
        document.getElementById('res-ps-lot').innerText = maxLot.toLocaleString('id-ID') + " Lot";
        document.getElementById('res-ps-loss').innerText = "Rp " + Math.round(maxLossRp).toLocaleString('id-ID');
    } else {
        showToast("Data Sizing tidak valid. Pastikan Modal > 0 dan Entry Price lebih besar dari SL.", "warning");
    }
}

