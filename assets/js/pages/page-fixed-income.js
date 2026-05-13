// --- FIXED INCOME & SBN ---
let yieldChartRendered = false;
function renderYieldChart() {
    if(yieldChartRendered) return;
    const canvas = document.getElementById('yieldChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Profil Instrumen',
                data: [
                    {x: 0.5, y: 5.0, r: 12, label: 'Deposito'},
                    {x: 1.0, y: 6.5, r: 15, label: 'SBN Ritel'},
                    {x: 5.0, y: 8.5, r: 12, label: 'RD Campuran'},
                    {x: 12.0, y: 12.0, r: 20, label: 'IHSG/ETF (Pasar Saham)'},
                    {x: 20.0, y: 25.0, r: 15, label: 'Saham (Trading Aktif)'}
                ],
                backgroundColor: ['#64748b', '#10b981', '#f59e0b', '#3b82f6', '#ef4444']
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            color: '#cbd5e1',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(ctx) { return ctx.raw.label + ': Yield ~' + ctx.raw.y + '%, Risiko ' + ctx.raw.x + '%'; }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Risiko / Drawdown Maksimal (%)', color: '#94a3b8'}, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.5)' } },
                y: { title: { display: true, text: 'Est. Return Tahunan (%)', color: '#94a3b8'}, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.5)' } }
            }
        }
    });
    yieldChartRendered = true;
}

let yieldCurveRendered = false;
function renderYieldCurve() {
    if(yieldCurveRendered) return;
    const canvas = document.getElementById('yieldCurveChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1Y', '3Y', '5Y', '10Y', '15Y', '20Y'],
            datasets: [{
                label: 'SBN Yield Curve (IDR)',
                data: [6.15, 6.35, 6.50, 6.65, 6.80, 6.95], 
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            color: '#cbd5e1',
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: function(ctx) { return 'Yield: ' + ctx.raw + '%'; } } }
            },
            scales: {
                x: { title: { display: true, text: 'Tenor (Tahun)', color: '#94a3b8'}, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.5)' } },
                y: { title: { display: true, text: 'Yield (%)', color: '#94a3b8'}, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.5)' } }
            }
        }
    });
    yieldCurveRendered = true;
}

function calcSbn() {
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
    resEl.innerText = `Rp ${Math.round(netMonthly).toLocaleString('id-ID')}`;
}
