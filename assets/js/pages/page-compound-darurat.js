let compoundChartInstance = null;

function calcCompound() {
    const modalAwal = parseFloat(document.getElementById('cmp-awal').value) || 0;
    const setoran = parseFloat(document.getElementById('cmp-bulanan').value) || 0;
    const tahun = parseFloat(document.getElementById('cmp-tahun').value) || 0;
    const returnTahunan = parseFloat(document.getElementById('cmp-return').value) || 0;

    const bulan = tahun * 12;
    const rateBulan = returnTahunan / 100 / 12;

    let futureValue = modalAwal * Math.pow(1 + rateBulan, bulan);
    let futureSetoran = setoran * ((Math.pow(1 + rateBulan, bulan) - 1) / rateBulan);

    if (rateBulan === 0) {
        futureValue = modalAwal;
        futureSetoran = setoran * bulan;
    }

    const totalAkhir = futureValue + futureSetoran;
    const totalSetor = modalAwal + (setoran * bulan);
    const totalBunga = totalAkhir - totalSetor;

    document.getElementById('res-cmp-pokok').innerText = "Rp " + Math.round(totalSetor).toLocaleString('id-ID');
    document.getElementById('res-cmp-bunga').innerText = "Rp " + Math.round(totalBunga).toLocaleString('id-ID');
    document.getElementById('res-cmp-total').innerText = "Rp " + Math.round(totalAkhir).toLocaleString('id-ID');

    let labels = [];
    let dataPokok = [];
    let dataBunga = [];
    
    let currentPokok = modalAwal;
    
    for(let i=0; i<=tahun; i++) {
        labels.push('Thn ' + i);
        if(i === 0) {
            dataPokok.push(currentPokok);
            dataBunga.push(0);
        } else {
            currentPokok += (setoran * 12);
            let fvThn = modalAwal * Math.pow(1 + rateBulan, i * 12);
            let fsThn = setoran * ((Math.pow(1 + rateBulan, i * 12) - 1) / rateBulan);
            if(rateBulan === 0) {
                fvThn = modalAwal;
                fsThn = setoran * i * 12;
            }
            let currentTotal = fvThn + fsThn;
            
            dataPokok.push(currentPokok);
            dataBunga.push(currentTotal - currentPokok);
        }
    }
    
    renderCompoundChart(labels, dataPokok, dataBunga);
}

function renderCompoundChart(labels, pokokData, bungaData) {
    const canvasEl = document.getElementById('compoundChartCanvas');
    if (!canvasEl || typeof Chart === 'undefined') return;
    const ctx = canvasEl.getContext('2d');
    const abbrev = typeof formatAbbreviated === 'function'
        ? formatAbbreviated
        : (n) => Math.round(Number(n) || 0).toLocaleString('id-ID');

    if (compoundChartInstance) {
        compoundChartInstance.destroy();
    }

    const isDark = document.body.classList.contains('dark-mode-override');

    compoundChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Modal Pokok',
                    data: pokokData,
                    backgroundColor: '#3b82f6', // blue-500
                    stacked: true,
                },
                {
                    label: 'Keuntungan Bunga',
                    data: bungaData,
                    backgroundColor: '#10b981', // emerald-500
                    stacked: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: 'bottom', 
                    labels: { 
                        boxWidth: 12, 
                        font: { size: 10 }, 
                        color: isDark ? '#94a3b8' : '#64748b' 
                    } 
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': Rp ' + Math.round(context.raw).toLocaleString('id-ID');
                        }
                    }
                }
            },
            scales: {
                x: { 
                    stacked: true, 
                    ticks: { 
                        font: { size: 9 }, 
                        color: isDark ? '#94a3b8' : '#64748b' 
                    }, 
                    grid: { display: false } 
                },
                y: { 
                    stacked: true, 
                    ticks: { 
                        font: { size: 9 }, 
                        color: isDark ? '#94a3b8' : '#64748b',
                        callback: function(value) { return 'Rp ' + abbrev(value); } 
                    }, 
                    grid: { 
                        color: isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.5)' 
                    } 
                }
            }
        }
    });
}

function shareWhatsAppCompound() {
    const modalAwal = document.getElementById('cmp-awal').value;
    const setoran = document.getElementById('cmp-bulanan').value;
    const tahun = document.getElementById('cmp-tahun').value;
    const totalAkhir = document.getElementById('res-cmp-total').innerText;
    const msg = `*SIMULASI COMPOUNDING INTEREST*\n\nModal Awal: Rp ${Number(modalAwal).toLocaleString('id-ID')}\nSetoran Rutin: Rp ${Number(setoran).toLocaleString('id-ID')}/bln\nDurasi: ${tahun} Tahun\n\n🎯 *Nilai Akhir: ${totalAkhir}*\n\n_Ewoks Academy Pro_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}

function calcDarurat() {
    const expense = parseFloat(document.getElementById('dar-expense').value) || 0;
    const multiplier = parseFloat(document.getElementById('dar-status').value) || 6;
    const current = parseFloat(document.getElementById('dar-current').value) || 0;

    const target = expense * multiplier;
    let kurang = target - current;
    let pct = (current / target) * 100;

    if (pct > 100) pct = 100;
    if (kurang < 0) kurang = 0;

    document.getElementById('res-dar-target').innerText = "Rp " + Math.round(target).toLocaleString('id-ID');
    document.getElementById('res-dar-kurang').innerText = "Rp " + Math.round(kurang).toLocaleString('id-ID');
    document.getElementById('res-dar-pct').innerText = Math.round(pct) + "%";
    document.getElementById('res-dar-bar').style.width = pct + "%";
}

function shareWhatsAppDarurat() {
    const target = document.getElementById('res-dar-target').innerText;
    const pct = document.getElementById('res-dar-pct').innerText;
    const msg = `*TARGET DANA DARURAT*\n\nTarget Dana Darurat saya adalah *${target}*.\nProgress saat ini: ${pct}\n\n_Dihitung via Ewoks Academy Pro_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}
