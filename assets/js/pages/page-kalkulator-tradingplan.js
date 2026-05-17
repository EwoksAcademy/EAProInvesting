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

function buildTradingPlanShareText() {
    runSimpleCalc();
    const emiten = (document.getElementById('calc-name')?.value || '-').trim().toUpperCase() || '-';
    const price = parseFloat(document.getElementById('calc-price')?.value) || 0;
    const lot = parseFloat(document.getElementById('calc-lot')?.value) || 0;
    const tpPct = document.getElementById('calc-tp')?.value || '0';
    const slPct = document.getElementById('calc-sl')?.value || '0';
    const gain = document.getElementById('res-gain')?.innerText || '0';
    const risk = document.getElementById('res-risk')?.innerText || '0';
    const tpPrice = document.getElementById('res-tp-price')?.innerText || '@0';
    const slPrice = document.getElementById('res-sl-price')?.innerText || '@0';

    return {
        wa: `*TRADING PLAN — ${emiten}*\n\nHarga Beli: Rp ${price.toLocaleString('id-ID')}\nLot: ${lot}\nTake Profit: ${tpPct}% (${tpPrice})\nStop Loss: ${slPct}% (${slPrice})\n\n✅ *Estimasi Profit: Rp ${gain}*\n⚠️ *Risiko Maksimal: Rp ${risk}*\n\n_Dihitung via Ewoks Academy Pro_`,
        plain: `TRADING PLAN — ${emiten}\nHarga Beli: Rp ${price.toLocaleString('id-ID')}\nLot: ${lot}\nTake Profit: ${tpPct}% (${tpPrice})\nStop Loss: ${slPct}% (${slPrice})\nEstimasi Profit: Rp ${gain}\nRisiko Maksimal: Rp ${risk}\n\nEwoks Academy Pro`
    };
}

function shareWhatsAppCalc() {
    const { wa } = buildTradingPlanShareText();
    window.open(`https://wa.me/?text=${encodeURIComponent(wa)}`, '_blank', 'noopener,noreferrer');
}

function copyToClipboardCalc() {
    const { plain } = buildTradingPlanShareText();
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(plain)
            .then(() => showToast('Data trading plan disalin ke clipboard!', 'success'))
            .catch(() => fallbackCopyTradingPlan(plain));
    } else {
        fallbackCopyTradingPlan(plain);
    }
}

function fallbackCopyTradingPlan(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast('Data trading plan disalin ke clipboard!', 'success');
    } catch (_) {
        showToast('Gagal menyalin. Salin manual dari pesan share.', 'error');
    }
    document.body.removeChild(ta);
}

