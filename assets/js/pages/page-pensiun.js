// --- DANA PENSIUN ---
function calculateRetirement() {
    const exp = parseFloat(document.getElementById('p-expense').value) || 0;
    const savings = parseFloat(document.getElementById('p-savings').value) || 0;
    const ageNow = parseFloat(document.getElementById('p-age-now').value) || 0;
    const ageRetire = parseFloat(document.getElementById('p-age-retire').value) || 0;
    const ageMax = parseFloat(document.getElementById('p-age-max').value) || 0;
    const inflation = (parseFloat(document.getElementById('p-inflation').value) || 0) / 100;
    const returns = (parseFloat(document.getElementById('p-return').value) || 0) / 100;

    const yearsToRetire = ageRetire - ageNow;
    const yearsInRetirement = ageMax - ageRetire;
    if (yearsToRetire <= 0 || yearsInRetirement <= 0) return;

    const futureMonthlyExp = exp * Math.pow((1 + inflation), yearsToRetire);
    const monthlyReturn = returns / 12;
    const totalMonths = yearsInRetirement * 12;
    const totalFund = futureMonthlyExp * ((1 - Math.pow(1 + monthlyReturn, -totalMonths)) / monthlyReturn);

    const futureSavings = savings * Math.pow((1 + returns), yearsToRetire);
    const gap = totalFund - futureSavings;
    const workMonths = yearsToRetire * 12;
    const monthlyInvest = gap > 0 ? (gap * monthlyReturn) / (Math.pow(1 + monthlyReturn, workMonths) - 1) : 0;

    document.getElementById('res-total-fund').innerText = Math.round(totalFund).toLocaleString('id-ID');
    document.getElementById('res-monthly-future').innerText = `Masa Depan: Rp ${Math.round(futureMonthlyExp).toLocaleString('id-ID')}/bln`;
    document.getElementById('res-monthly-invest').innerText = Math.round(monthlyInvest).toLocaleString('id-ID');
}

function shareWhatsAppPensiun() {
    const total = document.getElementById('res-total-fund').innerText;
    const invest = document.getElementById('res-monthly-invest').innerText;
    const ageRetire = document.getElementById('p-age-retire').value;
    const msg = `*EWOKS RETIREMENT PLAN*\n\nTarget Pensiun: Umur ${ageRetire}\nDana Wajib: Rp ${total}\nInvestasi/Bulan: Rp ${invest}\n\n_Ewoks Academy Suite_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}
