// --- EDUKASI SUB-TAB FUNCTION ---
function switchEduTab(tabId) {
    document.querySelectorAll('.edu-tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.edu-tab-btn').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white');
        el.classList.add('bg-slate-100', 'text-slate-600');
    });
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById('btn-' + tabId).classList.remove('bg-slate-100', 'text-slate-600');
    document.getElementById('btn-' + tabId).classList.add('bg-blue-600', 'text-white');

    if(tabId === 'edu-fundamental') {
        setTimeout(() => {
            renderSimIncomeChart();
            updateSimStocksList();
        }, 50);
    }
}

function switchLapkeuTab(tabId) {
    const tabs = ['f-tab-lr', 'f-tab-nr', 'f-tab-ak'];
    const btns = ['f-btn-lr', 'f-btn-nr', 'f-btn-ak'];

    tabs.forEach(id => {
        document.getElementById(id).classList.add('hidden');
        document.getElementById(id).classList.remove('block');
    });
    btns.forEach(id => {
        const btn = document.getElementById(id);
        btn.classList.remove('f-tab-active');
        btn.classList.add('f-tab-inactive');
    });
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId).classList.add('block');
    
    const btnId = 'f-btn-' + tabId.split('-')[2];
    const activeBtn = document.getElementById(btnId);
    if(activeBtn) {
        activeBtn.classList.remove('f-tab-inactive');
        activeBtn.classList.add('f-tab-active');
    }
}

let simIncomeChartInstance = null;
function renderSimIncomeChart() {
    const ctxEl = document.getElementById('incomeChart');
    if(!ctxEl) return;
    const ctx = ctxEl.getContext('2d');
    if(simIncomeChartInstance) simIncomeChartInstance.destroy();

    simIncomeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tahun 1', 'Tahun 2', 'Tahun 3'],
            datasets: [
                {
                    label: 'Pendapatan Kotor',
                    data: [1000, 1200, 1500],
                    backgroundColor: '#93c5fd', // blue-300
                    borderRadius: 4
                },
                {
                    label: 'Laba Bersih',
                    data: [150, 180, 250],
                    backgroundColor: '#2563eb', // blue-600
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(226, 232, 240, 0.5)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

const simDB = {
    bank: {
        "BBCA": { name: "Bank BCA", per: 24.5, pbv: 4.8, roe: 22.1, der: 0.1, npm: 40.5, desc: "Valuasi premium (mahal) namun ROE sangat tinggi dan efisien." },
        "BBRI": { name: "Bank BRI", per: 13.2, pbv: 2.3, roe: 18.5, der: 0.15, npm: 32.1, desc: "Valuasi lebih murah dari BCA, jangkauan luas (mikro), ROE solid." },
        "BMRI": { name: "Bank Mandiri", per: 11.5, pbv: 2.1, roe: 19.2, der: 0.12, npm: 35.0, desc: "Valuasi atraktif (Paling murah di Big 4), ROE tinggi, fokus korporasi." }
    },
    consumer: {
        "INDF": { name: "Indofood", per: 6.5, pbv: 1.0, roe: 15.2, der: 0.7, npm: 8.5, desc: "Valuasi sangat murah, market leader, namun pertumbuhan laba moderat." },
        "ICBP": { name: "Indofood CBP", per: 15.0, pbv: 2.8, roe: 19.5, der: 0.6, npm: 12.0, desc: "Anak usaha INDF yang margin dan pertumbuhannya lebih tinggi, valuasi wajar." },
        "MYOR": { name: "Mayora", per: 18.5, pbv: 3.5, roe: 21.0, der: 0.4, npm: 10.2, desc: "Valuasi agak premium namun ekspor kuat dan ROE sangat istimewa." }
    }
};

let simCompChartInstance = null;

function updateSimStocksList() {
    const sectorEl = document.getElementById('sim-sectorSelect');
    if(!sectorEl) return;
    const sector = sectorEl.value;
    const selectA = document.getElementById('sim-stockA');
    const selectB = document.getElementById('sim-stockB');
    
    selectA.innerHTML = '';
    selectB.innerHTML = '';
    
    const stocks = Object.keys(simDB[sector]);
    
    stocks.forEach((ticker) => {
        const optA = document.createElement('option');
        optA.value = ticker;
        optA.text = ticker;
        selectA.add(optA);

        const optB = document.createElement('option');
        optB.value = ticker;
        optB.text = ticker;
        selectB.add(optB);
    });

    selectA.selectedIndex = 0;
    selectB.selectedIndex = stocks.length > 1 ? 1 : 0;

    updateSimComparison();
}

function updateSimComparison() {
    const sector = document.getElementById('sim-sectorSelect').value;
    const tickerA = document.getElementById('sim-stockA').value;
    const tickerB = document.getElementById('sim-stockB').value;

    const dataA = simDB[sector][tickerA];
    const dataB = simDB[sector][tickerB];

    updateSimChart(tickerA, dataA, tickerB, dataB);
    updateSimAnalysisText(tickerA, dataA, tickerB, dataB);
}

function updateSimChart(tickerA, dataA, tickerB, dataB) {
    const ctxEl = document.getElementById('comparisonChart');
    if(!ctxEl) return;
    const ctx = ctxEl.getContext('2d');
    const chartData = {
        labels: ['PER (x)', 'PBV (x)', 'ROE (%)', 'NPM (%)'],
        datasets: [
            {
                label: tickerA,
                data: [dataA.per, dataA.pbv, dataA.roe, dataA.npm],
                backgroundColor: '#3b82f6', 
                borderRadius: 4
            },
            {
                label: tickerB,
                data: [dataB.per, dataB.pbv, dataB.roe, dataB.npm],
                backgroundColor: '#10b981', 
                borderRadius: 4
            }
        ]
    };

    if (simCompChartInstance) {
        simCompChartInstance.data = chartData;
        simCompChartInstance.update();
    } else {
        simCompChartInstance = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { 
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                if (context.dataIndex === 0 || context.dataIndex === 1) {
                                    label += context.raw + 'x';
                                } else {
                                    label += context.raw + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(226, 232, 240, 0.5)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
}

function updateSimAnalysisText(tickerA, dataA, tickerB, dataB) {
    const container = document.getElementById('sim-analysisResult');
    if(!container) return;
    container.innerHTML = '';

    if (tickerA === tickerB) {
        container.innerHTML = `<p class="text-slate-500 italic font-medium">Silakan pilih dua saham yang berbeda untuk melihat perbandingan rasio komparatif secara akurat.</p>`;
        return;
    }

    let valuasiWin = dataA.per < dataB.per ? tickerA : tickerB;
    let kualitasWin = dataA.roe > dataB.roe ? tickerA : tickerB;
    let html = `
        <div class="flex flex-col gap-3">
            <div class="border-l-4 border-blue-500 pl-3 bg-white p-2.5 rounded-r-lg shadow-sm">
                <span class="font-black text-blue-700">${tickerA}</span>: <span class="text-xs md:text-sm text-slate-700">${dataA.desc}</span>
            </div>
            <div class="border-l-4 border-emerald-500 pl-3 bg-white p-2.5 rounded-r-lg shadow-sm">
                <span class="font-black text-emerald-700">${tickerB}</span>: <span class="text-xs md:text-sm text-slate-700">${dataB.desc}</span>
            </div>
            
            <div class="mt-4 pt-4 border-t border-slate-200">
                <h4 class="font-bold text-slate-900 mb-2 uppercase tracking-wider text-xs md:text-sm">Verdict (Penilaian Singkat):</h4>
                <ul class="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                    <li class="bg-white p-2 rounded-lg border border-slate-100">🎯 <strong>Valuasi Lebih Murah:</strong> Saham <strong class="text-blue-600">${valuasiWin}</strong> (Berdasarkan PER lebih rendah, balik modal lebih cepat).</li>
                    <li class="bg-white p-2 rounded-lg border border-slate-100">⭐ <strong>Kualitas Profitabilitas:</strong> Saham <strong class="text-emerald-600">${kualitasWin}</strong> (Berdasarkan ROE lebih tinggi, manajemen lebih jago memutar modal).</li>
                    <li class="mt-3 text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-100 leading-relaxed font-bold">
                        <strong>Ingat:</strong> Saham bagus yang dibeli di harga kemahalan bisa jadi investasi yang buruk. Saham biasa saja di harga sangat murah bisa jadi investasi menguntungkan (Value Investing).
                    </li>
                </ul>
            </div>
        </div>
    `;
    container.innerHTML = html;
}
