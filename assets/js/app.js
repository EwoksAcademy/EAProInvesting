        // --- EDUKASI INTERAKTIF (QUIZ MODULE) ---
        const eduQuizDB = {
            1: [
                { q: "Apa yang dimaksud dengan saham?", opts: ["Bukti hutang perusahaan", "Bukti kepemilikan di suatu perusahaan", "Simpanan berbunga di bank", "Mata uang digital"], ans: 1 },
                { q: "Singkatan dari bursa saham di Indonesia adalah?", opts: ["BCA", "IHSG", "BEI", "OJK"], ans: 2 },
                { q: "Keuntungan dari selisih kenaikan harga beli ke harga jual saham disebut?", opts: ["Dividen", "Capital Gain", "Capital Loss", "Kupon"], ans: 1 },
                { q: "Pembagian sebagian laba perusahaan kepada pemegang saham secara tunai disebut?", opts: ["Bunga", "Capital Gain", "Dividen", "Right Issue"], ans: 2 },
                { q: "Hukum dasar makroekonomi: Jika suku bunga acuan bank sentral (BI Rate) NAIK drastis, biasanya pasar saham akan?", opts: ["Cenderung Naik", "Cenderung Turun", "Tidak terpengaruh", "Otomatis Suspend"], ans: 1 },
                { q: "Laba bersih suatu perusahaan dapat dilihat pada laporan keuangan bagian?", opts: ["Neraca (Balance Sheet)", "Laba Rugi (Income Statement)", "Arus Kas (Cash Flow)", "Catatan Kaki"], ans: 1 },
                { q: "Rumus Aset = Liabilitas + Ekuitas merupakan fondasi dasar dari laporan keuangan?", opts: ["Laba Rugi", "Arus Kas", "Neraca (Balance Sheet)", "Valuasi"], ans: 2 },
                { q: "Rasio valuasi yang membandingkan Harga Saham dengan Laba Bersih per Saham disebut?", opts: ["PBV", "ROE", "DER", "PER"], ans: 3 },
                { q: "Perusahaan dengan rasio hutang (DER) yang terlalu tinggi memiliki risiko?", opts: ["Bangkrut / Gagal bayar lebih besar", "Dividen selalu besar", "Harga saham pasti naik", "Tidak ada risiko"], ans: 0 },
                { q: "Indeks Harga Saham Gabungan (IHSG) mengukur hal apa?", opts: ["Kinerja 45 saham paling likuid", "Kinerja seluruh saham yang tercatat di BEI", "Hanya saham BUMN", "Kinerja obligasi pemerintah"], ans: 1 }
            ],
            2: [
                { q: "Trader yang mengambil keuntungan sangat tipis dan cepat dalam hitungan detik/menit disebut?", opts: ["Investor", "Swing Trader", "Scalper", "Position Trader"], ans: 2 },
                { q: "Apa kepanjangan dari BSJP dalam dunia trading?", opts: ["Beli Saham Jual Pagi", "Beli Sore Jual Pagi", "Beli Sore Jual Petang", "Bursa Saham Jakarta Pusat"], ans: 1 },
                { q: "Saham unggulan dengan kapitalisasi pasar raksasa dan likuiditas tinggi sering disebut?", opts: ["Saham Gorengan", "Second Liner", "Blue Chip (1st Liner)", "Penny Stock"], ans: 2 },
                { q: "FOMO dalam psikologi trading adalah singkatan dari?", opts: ["Fear of Missing Out", "Focus On Market Open", "Fear of Margin Order", "Fast Option Market Operator"], ans: 0 },
                { q: "Di papan perdagangan (Order Book), antrean untuk MENJUAL saham berada di kolom?", opts: ["Bid", "Offer / Ask", "Done", "Net Buy"], ans: 1 },
                { q: "Istilah HAKA (Hajar Kanan) berarti?", opts: ["Langsung antre beli di harga Bid bawah", "Langsung beli memakan antrean jual (Offer)", "Menjual saham secara paksa", "Menunggu harga turun"], ans: 1 },
                { q: "Batas penurunan harga maksimal harian sebuah saham yang ditetapkan oleh BEI disebut?", opts: ["ARA", "ARB", "UMA", "Suspend"], ans: 1 },
                { q: "Saham lapis ketiga yang sangat volatil dan fundamental minim sering diistilahkan sebagai?", opts: ["Blue Chip", "Saham Gorengan", "Saham Syariah", "ETF"], ans: 1 },
                { q: "Strategi membeli kembali saham yang sedang turun di harga lebih bawah untuk menurunkan rata-rata harga beli disebut?", opts: ["Cut Loss", "Take Profit", "Average Down", "Average Up"], ans: 2 },
                { q: "Grup konglomerasi di Indonesia yang menaungi emiten BBCA dan TOWR adalah?", opts: ["Salim Group", "Djarum Group", "Bakrie Group", "Lippo Group"], ans: 1 }
            ],
            3: [
                { q: "Pada grafik candlestick, warna HIJAU (Bullish) menandakan apa?", opts: ["Harga Close < Open", "Harga Close > Open", "Harga High = Low", "Tidak ada transaksi"], ans: 1 },
                { q: "Candlestick yang harga Open dan Close-nya sama persis sehingga membentuk tanda silang tanpa body disebut?", opts: ["Marubozu", "Hammer", "Doji", "Engulfing"], ans: 2 },
                { q: "Pola grafik 'Double Bottom' (membentuk huruf W) biasanya mengindikasikan sinyal?", opts: ["Bullish Reversal (Akan Naik)", "Bearish Reversal (Akan Turun)", "Sideways / Konsolidasi", "Market Crash"], ans: 0 },
                { q: "Level harga di bawah yang berfungsi sebagai 'Lantai' dan sering memantulkan harga untuk kembali naik disebut?", opts: ["Resistance", "Breakout", "Support", "Trendline"], ans: 2 },
                { q: "Jika indikator RSI berada di atas level 70, secara teknikal pasar sedang mengalami fase?", opts: ["Oversold (Jenuh Jual)", "Overbought (Jenuh Beli)", "Uptrend Kuat", "Downtrend Kuat"], ans: 1 },
                { q: "Garis Moving Average (MA) yang paling umum digunakan institusi sebagai acuan/penentu tren jangka panjang adalah?", opts: ["MA 5", "MA 20", "MA 50", "MA 200"], ans: 3 },
                { q: "Peristiwa Breakout (penembusan level resisten) yang valid sebaiknya selalu dikonfirmasi dengan?", opts: ["Volume transaksi yang melonjak tinggi", "Berita buruk", "Warna candlestick merah", "Banyak antrean bid palsu"], ans: 0 },
                { q: "Indikator MACD memberikan sinyal 'Golden Cross' (Beli) ketika?", opts: ["MACD Line memotong ke bawah", "MACD Line memotong Signal Line dari bawah ke atas", "MACD Line sejajar dengan nol", "Histogram berwarna merah"], ans: 1 },
                { q: "Pola candlestick dengan body kecil dan ekor/wick panjang ke bawah (menyerupai palu) di area support disebut?", opts: ["Shooting Star", "Marubozu", "Hammer", "Three Black Crows"], ans: 2 },
                { q: "Apa yang dimaksud dengan 'Divergence Bearish' pada indikator momentum (seperti RSI/MACD)?", opts: ["Harga membuat titik tertinggi baru (Higher High), tapi Indikator membuat puncak lebih rendah (Lower High)", "Harga dan indikator sama-sama naik", "Harga turun tajam", "Volume tiba-tiba menghilang"], ans: 0 }
            ]
        };

        let currentEduLevel = 1;
        let currentEduIndex = 0;
        let eduScore = 0;

        function startEduQuiz(level) {
            currentEduLevel = level;
            currentEduIndex = 0;
            eduScore = 0;
            const modal = document.getElementById('edu-quiz-modal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                document.getElementById('edu-quiz-card').classList.remove('scale-95');
            }, 10);
            renderEduQuiz();
        }

        function closeEduQuiz() {
            const modal = document.getElementById('edu-quiz-modal');
            modal.classList.add('opacity-0');
            document.getElementById('edu-quiz-card').classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function renderEduQuiz() {
            const container = document.getElementById('edu-quiz-card');
            const qData = eduQuizDB[currentEduLevel][currentEduIndex];
            const progress = ((currentEduIndex + 1) / 10) * 100;
            
            let levelTitle = currentEduLevel === 1 ? "PEMULA" : (currentEduLevel === 2 ? "MENENGAH" : "MAHIR");
            let badgeColor = currentEduLevel === 1 ? "bg-blue-100 text-blue-600" : (currentEduLevel === 2 ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600");

            container.innerHTML = `
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-center mb-6">
                        <span class="px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase ${badgeColor}">Latihan ${levelTitle}</span>
                        <button onclick="closeEduQuiz()" class="text-slate-400 hover:text-rose-500 transition-colors"><i class="fas fa-times text-xl"></i></button>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-1.5 mb-6">
                        <div class="${badgeColor.split(' ')[0].replace('100','500')} h-1.5 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                    </div>
                    <p class="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Pertanyaan ${currentEduIndex + 1} dari 10</p>
                    <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-6 leading-relaxed">${qData.q}</h3>
                    <div class="space-y-3">
                        ${qData.opts.map((opt, i) => `
                            <button onclick="selectEduAnswer(${i})" class="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 transition-all font-semibold text-slate-700 flex gap-3 group dark-mode-card">
                                <div class="w-6 h-6 shrink-0 rounded bg-slate-100 text-slate-500 flex items-center justify-center text-xs group-hover:bg-slate-200 transition-colors">${String.fromCharCode(65+i)}</div>
                                <span class="pt-0.5 leading-relaxed">${opt}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function selectEduAnswer(selectedIdx) {
            const qData = eduQuizDB[currentEduLevel][currentEduIndex];
            const isCorrect = selectedIdx === qData.ans;
            if(isCorrect) eduScore += 10;

            const container = document.getElementById('edu-quiz-card');
            let btnColor = currentEduLevel === 1 ? "bg-blue-600 hover:bg-blue-700" : (currentEduLevel === 2 ? "bg-amber-500 hover:bg-amber-600" : "bg-rose-600 hover:bg-rose-700");
            
            let resultHTML = `
                <div class="p-6 md:p-8 text-center animate-[fadeIn_0.3s_ease-out]">
                    <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 ${isCorrect ? 'bg-emerald-100 text-emerald-500' : 'bg-rose-100 text-rose-500'}">
                        <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'}"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 mb-2">${isCorrect ? 'Tepat Sekali!' : 'Masih Kurang Tepat'}</h3>
                    <p class="text-slate-500 text-sm mb-6">Jawaban yang benar adalah: <br><strong class="text-slate-800">${qData.opts[qData.ans]}</strong></p>
                    <button onclick="nextEduQuestion()" class="w-full ${btnColor} text-white py-3.5 rounded-xl font-bold text-xs uppercase shadow-md transition-all">Lanjut <i class="fas fa-arrow-right ml-1"></i></button>
                </div>
            `;
            container.innerHTML = resultHTML;
        }

        function nextEduQuestion() {
            currentEduIndex++;
            if(currentEduIndex < 10) {
                renderEduQuiz();
            } else {
                showEduResult();
            }
        }

        function showEduResult() {
            const container = document.getElementById('edu-quiz-card');
            let btnColor = currentEduLevel === 1 ? "bg-blue-600 hover:bg-blue-700" : (currentEduLevel === 2 ? "bg-amber-500 hover:bg-amber-600" : "bg-rose-600 hover:bg-rose-700");
            let status = eduScore >= 70 ? 'LULUS (KOMPETEN)' : 'BELUM LULUS';
            let statusColor = eduScore >= 70 ? 'text-emerald-500' : 'text-rose-500';
            
            container.innerHTML = `
                <div class="p-6 md:p-10 text-center animate-[fadeIn_0.3s_ease-out]">
                    <i class="fas fa-trophy text-5xl text-amber-400 mb-4"></i>
                    <h3 class="text-2xl font-black text-slate-900 mb-2">Latihan Selesai!</h3>
                    <p class="text-slate-500 text-sm mb-6">Skor akhir Anda untuk level ini:</p>
                    <div class="text-6xl font-black ${statusColor} mb-2">${eduScore}</div>
                    <p class="font-bold text-slate-700 mb-8 uppercase tracking-widest">${status}</p>
                    <div class="flex gap-3">
                        <button onclick="closeEduQuiz()" class="flex-1 bg-slate-100 text-slate-600 py-3.5 rounded-xl font-bold text-xs uppercase hover:bg-slate-200 transition-colors">Tutup</button>
                        <button onclick="startEduQuiz(${currentEduLevel})" class="flex-[2] ${btnColor} text-white py-3.5 rounded-xl font-bold text-xs uppercase shadow-md transition-colors"><i class="fas fa-redo mr-1"></i> Ulangi Latihan</button>
                    </div>
                </div>
            `;
        }

        // --- FUNGSI TOAST NOTIFICATION MODERN ---
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            let icon = 'fa-info-circle';
            let iconColor = 'text-blue-500';
            if (type === 'success') { icon = 'fa-check-circle'; iconColor = 'text-emerald-500'; }
            if (type === 'error') { icon = 'fa-exclamation-circle'; iconColor = 'text-rose-500'; }
            if (type === 'warning') { icon = 'fa-exclamation-triangle'; iconColor = 'text-amber-500'; }

            toast.innerHTML = `<i class="fas ${icon} ${iconColor} text-lg"></i> <span>${message}</span>`;
            
            container.appendChild(toast);
            
            setTimeout(() => toast.classList.add('show'), 10);
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

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

        // --- DATA BROKER ---
        const BROKERS = [
            {k:"AG", n:"Sandi Nusantara Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"AH", n:"Shinhan Sekuritas Indonesia", t:"Asing", c:"Korea Selatan"},
            {k:"AI", n:"UOB Kay Hian Sekuritas", t:"Asing", c:"Singapura"},
            {k:"AK", n:"UBS Sekuritas Indonesia", t:"Asing", c:"Swiss"},
            {k:"AN", n:"Wanteg Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"AO", n:"Erdikha Elit Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"AP", n:"Pacific Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"AR", n:"Binaartha Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"AT", n:"Phintraco Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"AZ", n:"Sucor Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"BA", n:"Bakti Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"BB", n:"Verdhana Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"BC", n:"BCA Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"BD", n:"Pasifik Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"BF", n:"Intifikasa Securindo", t:"Lokal", c:"Indonesia"},
            {k:"BI", n:"BNC Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"BJ", n:"Banten Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"BK", n:"J.P. Morgan Sekuritas Indonesia", t:"Asing", c:"Amerika Serikat"},
            {k:"BM", n:"Iktiar Bakti Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"BR", n:"Barclays Sekuritas Indonesia", t:"Asing", c:"Inggris"},
            {k:"BS", n:"Bostinco", t:"Lokal", c:"Indonesia"},
            {k:"BT", n:"Bestprofit Futures", t:"Lokal", c:"Indonesia"},
            {k:"BZ", n:"Batavia Prosperindo Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"CC", n:"Mandiri Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"CD", n:"Mega Capital Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"CG", n:"Citigroup Sekuritas Indonesia", t:"Asing", c:"Amerika Serikat"},
            {k:"CH", n:"Citadel Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"CP", n:"KB Valbury Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"CS", n:"Credit Suisse Sekuritas Indonesia", t:"Asing", c:"Swiss"},
            {k:"DB", n:"DBS Vickers Sekuritas Indonesia", t:"Asing", c:"Singapura"},
            {k:"DD", n:"Danadipa Artha Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"DF", n:"Danatama Makmur Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"DH", n:"Sinarmas Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"DM", n:"Masindo Artha Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"DP", n:"Dua Putera Utama Makmur", t:"Lokal", c:"Indonesia"},
            {k:"DR", n:"RHB Sekuritas Indonesia", t:"Asing", c:"Malaysia"},
            {k:"DU", n:"Danpac Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"DX", n:"Bahana Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"EP", n:"MNC Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"ES", n:"Ekokapital Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"FM", n:"Falah Mulia Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"FQ", n:"First Asia Capital", t:"Lokal", c:"Indonesia"},
            {k:"FS", n:"Fasatria Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"FZ", n:" Waterfront Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"GA", n:"BNC Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"GR", n:"Panin Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"GW", n:"HSBC Sekuritas Indonesia", t:"Asing", c:"Inggris"},
            {k:"HD", n:"KGI Sekuritas Indonesia", t:"Asing", c:"Taiwan"},
            {k:"ID", n:"Anugerah Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"IF", n:"Samuel Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"IH", n:"Pacific 2000 Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"II", n:"Danareksa Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"IN", n:"Investindo Nusantara Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"IP", n:"Indopremier Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"IU", n:"Indo Capital Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"KK", n:"Phillip Sekuritas Indonesia", t:"Asing", c:"Singapura"},
            {k:"KS", n:"Kresna Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"KW", n:"Kwangyang Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"KZ", n:"CLSA Sekuritas Indonesia", t:"Asing", c:"Hong Kong"},
            {k:"LB", n:"Morgan Stanley Sekuritas Indonesia", t:"Asing", c:"Amerika Serikat"},
            {k:"LG", n:"Trimegah Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"LH", n:"Lifull Media Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"LI", n:"Reliance Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"LS", n:"Reliance Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"LU", n:"Lumiere Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"MA", n:"NISP Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"MG", n:"Semesta Indovest Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"MI", n:"Victoria Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"MK", n:"Mulia Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"MN", n:"MNC Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"MS", n:"Morgan Stanley Sekuritas Indonesia", t:"Asing", c:"Amerika Serikat"},
            {k:"MU", n:"Minna Padi Investama Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"NI", n:"BNI Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"OD", n:"Danareksa Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"OK", n:"Okane Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"OM", n:"OCBC Sekuritas Indonesia", t:"Asing", c:"Singapura"},
            {k:"PC", n:"Panca Global Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"PD", n:"Indopremier Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"PF", n:"Danamon Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"PG", n:"Pancar Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"PO", n:"Pilarmas Investindo Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"PS", n:"Paramitra Alfa Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"RB", n:"Nikko Sekuritas Indonesia", t:"Asing", c:"Jepang"},
            {k:"RF", n:"Buana Capital Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"RG", n:"Profindo Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"RO", n:"Nilai Inti Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"RS", n:"Yulie Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"RX", n:"Macquarie Sekuritas Indonesia", t:"Asing", c:"Australia"},
            {k:"SC", n:"Standard Chartered Sekuritas", t:"Asing", c:"Inggris"},
            {k:"SF", n:"Surya Fajar Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"SH", n:"Artha Sekuritas Indonesia", t:"Lokal", c:"Indonesia"},
            {k:"SS", n:"Shinhan Sekuritas Indonesia", t:"Asing", c:"Korea Selatan"},
            {k:"SU", n:"Sucor Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"X1", n:"Ajaib Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"XC", n:"Ajaib Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"XL", n:"Stockbit Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"YP", n:"Mirae Asset Sekuritas Indonesia", t:"Asing", c:"Korea Selatan"},
            {k:"YU", n:"CGS International Sekuritas", t:"Asing", c:"Singapura"},
            {k:"YJ", n:"Lotus Andalan Sekuritas", t:"Lokal", c:"Indonesia"},
            {k:"YI", n:"DBS Vickers Sekuritas", t:"Asing", c:"Singapura"}
        ];

        // --- DATA KONGLOMERAT ---
        const dataGroups = [
            { 
                id: "aguan", 
                name: "Aguan Group (Agung Sedayu)", 
                desc: "Grup properti raksasa yang dikomandoi oleh Sugianto Kusuma (Aguan). Ekspansi agresif ke pasar modal dalam beberapa tahun terakhir, sering bermitra dengan Salim Group.", 
                stocks: [ 
                    { ticker: "CBDK", company: "PT Bangun Kosambi Sukses Tbk", sector: "Properti & Real Estat", ownership: "Bagian dari pengembangan kawasan SCBD, terafiliasi dengan jaringan bisnis strategis Aguan.", kepemilikan_persen: "82.3%", sejarah: "Pengembang kawasan niaga terpadu SCBD Jakarta, bermitra dengan Artha Graha.", tahun_masuk: "1992", broker_afiliasi: "KI, DX", free_float: "17.7%", avg_up: "310", avg_down: "280", support: "260", resistance: "350", last_update: "8 Mei 2026" },
                    { ticker: "ERAA", company: "PT Erajaya Swasembada Tbk", sector: "Ritel (Elektronik)", ownership: "Kepemilikan strategis/kemitraan bisnis dalam ekspansi ritel di kawasan properti grup.", kepemilikan_persen: "Kemitraan/Minoritas", sejarah: "Distributor gadget terbesar RI. Sinergi dengan Agung Sedayu untuk penetrasi mal.", tahun_masuk: "2018", broker_afiliasi: "YP, PD", free_float: "45.1%", avg_up: "420", avg_down: "390", support: "380", resistance: "460", last_update: "8 Mei 2026" },
                    { ticker: "ERAL", company: "PT Sinar Eka Selaras Tbk", sector: "Ritel (Gaya Hidup)", ownership: "Anak usaha ERAA, masuk dalam ekosistem kemitraan grup.", kepemilikan_persen: "Afiliasi", sejarah: "Anak usaha Erajaya yang berfokus pada gaya hidup dan olahraga.", tahun_masuk: "2023", broker_afiliasi: "YP, PD", free_float: "20.0%", avg_up: "280", avg_down: "260", support: "240", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "INPC", company: "PT Bank Artha Graha Internasional Tbk", sector: "Perbankan", ownership: "Kemitraan historis dan strategis dengan Tomy Winata (Artha Graha) yang erat dengan Aguan.", kepemilikan_persen: "Afiliasi Strategis", sejarah: "Bank hasil merger yang lekat dengan ekosistem bisnis SCBD dan Artha Graha.", tahun_masuk: "1990-an", broker_afiliasi: "KI, IN", free_float: "15.4%", avg_up: "85", avg_down: "70", support: "65", resistance: "95", last_update: "8 Mei 2026" },
                    { ticker: "JIHD", company: "PT Jakarta International Hotels & Development Tbk", sector: "Properti & Perhotelan", ownership: "Terafiliasi melalui kongsi kawasan SCBD bersama jaringan Artha Graha.", kepemilikan_persen: "Kemitraan Konsorsium", sejarah: "Pengembang properti SCBD dan hotel Borobudur.", tahun_masuk: "1992", broker_afiliasi: "KI, IN", free_float: "12.0%", avg_up: "410", avg_down: "380", support: "360", resistance: "450", last_update: "8 Mei 2026" },
                    { ticker: "PANI", company: "PT Pantai Indah Kapuk Dua Tbk", sector: "Properti & Real Estat", ownership: "Dikendalikan melalui PT Multi Artha Pratama (MAP) dengan kepemilikan dominan (sekitar 89%). Kendaraan utama mega-proyek PIK 2.", kepemilikan_persen: "89.2%", sejarah: "Awalnya produsen kemasan kaleng, diakuisisi via backdoor listing oleh konsorsium Agung Sedayu & Salim.", tahun_masuk: "2021", broker_afiliasi: "KI, BK, YP", free_float: "10.8%", avg_up: "5100", avg_down: "4800", support: "4500", resistance: "5500", last_update: "8 Mei 2026" }, 
                    { ticker: "PDPP", company: "PT Primadaya Plastisindo Tbk", sector: "Manufaktur Kemasan", ownership: "Aguan secara pribadi memiliki porsi saham strategis (sekitar 5%).", kepemilikan_persen: "5.0%", sejarah: "Pabrik plastik dan kemasan, Aguan masuk sebagai investor strategis.", tahun_masuk: "2022", broker_afiliasi: "YP, CC", free_float: "20.0%", avg_up: "240", avg_down: "210", support: "200", resistance: "280", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "agus-projo", 
                name: "Agus Projosasmito Group", 
                desc: "Tokoh kunci di balik beberapa transaksi mega-akuisisi di sektor pertambangan, sering bertindak sebagai mitra strategis.", 
                stocks: [ 
                    { ticker: "AMMN", company: "PT Amman Mineral Internasional Tbk", sector: "Pertambangan (Emas & Tembaga)", ownership: "Agus Projosasmito menjabat sebagai Presiden Komisaris dan memiliki porsi saham strategis via AP Investment.", kepemilikan_persen: "15.5%", sejarah: "Mengakuisisi aset Newmont Nusa Tenggara pada 2016. Menjadi salah satu tambang terbesar.", tahun_masuk: "2016", broker_afiliasi: "KZ, RX, BB", free_float: "17.2%", avg_up: "8500", avg_down: "8000", support: "7800", resistance: "9000", last_update: "8 Mei 2026" }, 
                    { ticker: "BRMS", company: "PT Bumi Resources Minerals Tbk", sector: "Pertambangan (Emas)", ownership: "Terafiliasi dalam ekosistem akuisisi bersama grup Bakrie dan Salim.", kepemilikan_persen: "Konsorsium (>30%)", sejarah: "Anak usaha BUMI yang difokuskan pada tambang emas di Palu.", tahun_masuk: "2022", broker_afiliasi: "MG, KI", free_float: "48.5%", avg_up: "160", avg_down: "140", support: "135", resistance: "180", last_update: "8 Mei 2026" },
                    { ticker: "BUMI", company: "PT Bumi Resources Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Masuk bersama Grup Salim dalam skema private placement raksasa untuk merestrukturisasi utang BUMI.", kepemilikan_persen: "Afiliasi Pengendali", sejarah: "Raksasa batu bara eks-Bakrie yang diselamatkan oleh konsorsium Salim & AP Investment.", tahun_masuk: "2022", broker_afiliasi: "KI, MG", free_float: "42.1%", avg_up: "95", avg_down: "85", support: "80", resistance: "110", last_update: "8 Mei 2026" },
                    { ticker: "MEDC", company: "PT Medco Energi Internasional Tbk", sector: "Energi (Minyak & Gas)", ownership: "Memiliki rekam jejak kepemilikan/kemitraan strategis historis dengan grup Medco.", kepemilikan_persen: "Afiliasi Historis", sejarah: "Agus Projo memiliki rekam jejak panjang bersama grup Medco sebagai deal-maker.", tahun_masuk: "2000-an", broker_afiliasi: "RX, YP", free_float: "28.5%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "astra", 
                name: "Astra Group", 
                desc: "Salah satu konglomerasi paling terdiversifikasi dan tertua di Indonesia, dikendalikan oleh Jardine Matheson Group.", 
                stocks: [ 
                    { ticker: "AALI", company: "PT Astra Agro Lestari Tbk", sector: "Agrikultur (Kelapa Sawit)", ownership: "Dikuasai oleh ASII dengan porsi hampir 80%.", kepemilikan_persen: "79.68%", sejarah: "Divisi perkebunan Astra, salah satu produsen CPO terbesar.", tahun_masuk: "1988", broker_afiliasi: "RX, KZ", free_float: "20.32%", avg_up: "6500", avg_down: "6200", support: "6000", resistance: "7000", last_update: "8 Mei 2026" }, 
                    { ticker: "ACST", company: "PT Acset Indonusa Tbk", sector: "Konstruksi", ownership: "Diakuisisi dan dikendalikan oleh Astra melalui PT United Tractors Tbk (UNTR).", kepemilikan_persen: "82.17% (via UNTR)", sejarah: "Diakuisisi UNTR untuk memperkuat divisi konstruksi.", tahun_masuk: "2015", broker_afiliasi: "CC, YP", free_float: "17.83%", avg_up: "135", avg_down: "125", support: "115", resistance: "150", last_update: "8 Mei 2026" },
                    { ticker: "ASGR", company: "PT Astra Graphia Tbk", sector: "Teknologi & Solusi Dokumen", ownership: "Anak usaha ASII di bidang solusi dokumen dan TI.", kepemilikan_persen: "76.87%", sejarah: "Agen tunggal Fuji Xerox yang berkembang menjadi raksasa IT & solusi dokumen.", tahun_masuk: "1975", broker_afiliasi: "CC, PD", free_float: "23.13%", avg_up: "850", avg_down: "800", support: "780", resistance: "950", last_update: "8 Mei 2026" },
                    { ticker: "ASII", company: "PT Astra International Tbk", sector: "Holding Multisektor", ownership: "Pemegang saham pengendali adalah Jardine Cycle & Carriage Ltd (>50%).", kepemilikan_persen: "50.11%", sejarah: "Diakuisisi oleh Jardine saat krisis finansial.", tahun_masuk: "1999", broker_afiliasi: "CS, KZ", free_float: "49.89%", avg_up: "5100", avg_down: "4800", support: "4600", resistance: "5400", last_update: "8 Mei 2026" }, 
                    { ticker: "AUTO", company: "PT Astra Otoparts Tbk", sector: "Manufaktur Komponen Otomotif", ownership: "ASII memegang kendali penuh dengan kepemilikan di atas 80%.", kepemilikan_persen: "80.0%", sejarah: "Jaringan manufaktur dan distribusi suku cadang terbesar afiliasi Astra.", tahun_masuk: "1998", broker_afiliasi: "CS, YP", free_float: "20.0%", avg_up: "2100", avg_down: "1950", support: "1850", resistance: "2300", last_update: "8 Mei 2026" }, 
                    { ticker: "UNTR", company: "PT United Tractors Tbk", sector: "Alat Berat & Pertambangan", ownership: "ASII memegang kepemilikan mayoritas sekitar 59.5%.", kepemilikan_persen: "59.5%", sejarah: "Distributor alat berat Komatsu, berevolusi menjadi raksasa kontraktor tambang.", tahun_masuk: "1972", broker_afiliasi: "CS, BK", free_float: "40.5%", avg_up: "23500", avg_down: "22000", support: "21500", resistance: "25000", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "bakrie", 
                name: "Bakrie Group", 
                desc: "Grup bisnis historis yang didirikan oleh Achmad Bakrie. Memiliki dominasi historis di sektor energi dan sumber daya.", 
                stocks: [ 
                    { ticker: "ALII", company: "PT Ancara Logistics Indonesia Tbk", sector: "Investasi / Holding", ownership: "Terkait dengan portofolio investasi keluarga Bakrie.", kepemilikan_persen: "Afiliasi Group", sejarah: "Entitas kendaraan investasi keluarga.", tahun_masuk: "2024", broker_afiliasi: "CP, YP", free_float: "20.0%", avg_up: "480", avg_down: "420", support: "400", resistance: "550", last_update: "8 Mei 2026" },
                    { ticker: "BNBR", company: "PT Bakrie & Brothers Tbk", sector: "Holding Infrastruktur", ownership: "Perusahaan induk historis Grup Bakrie. Sering mengalami restrukturisasi utang.", kepemilikan_persen: "Minoritas (Keluarga)", sejarah: "Induk historis yang sering direstrukturisasi via konversi utang.", tahun_masuk: "1989", broker_afiliasi: "CP, YP", free_float: "80.0%", avg_up: "55", avg_down: "50", support: "50", resistance: "65", last_update: "8 Mei 2026" }, 
                    { ticker: "BRMS", company: "PT Bumi Resources Minerals Tbk", sector: "Pertambangan (Emas)", ownership: "Anak usaha dari BUMI. Free float cukup besar di atas 40%.", kepemilikan_persen: "Afiliasi", sejarah: "Anak usaha pertambangan emas BUMI.", tahun_masuk: "2010", broker_afiliasi: "MG, YP", free_float: "48.0%", avg_up: "160", avg_down: "140", support: "135", resistance: "180", last_update: "8 Mei 2026" }, 
                    { ticker: "BUMI", company: "PT Bumi Resources Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Grup Bakrie berbagi kendali dengan Grup Salim melalui Mach Energy.", kepemilikan_persen: "Konsorsium", sejarah: "Pernah menjadi saham sejuta umat. Direstrukturisasi Salim & Bakrie.", tahun_masuk: "1990", broker_afiliasi: "MG, KI", free_float: "42.0%", avg_up: "95", avg_down: "85", support: "80", resistance: "110", last_update: "8 Mei 2026" }, 
                    { ticker: "DEWA", company: "PT Darma Henwa Tbk", sector: "Kontraktor Pertambangan", ownership: "Terafiliasi dengan grup Bakrie & Salim. Kepemilikan publik mendominasi.", kepemilikan_persen: "Afiliasi", sejarah: "Kontraktor andalan tambang Kaltim Prima Coal.", tahun_masuk: "2007", broker_afiliasi: "YP, PD", free_float: "55.0%", avg_up: "55", avg_down: "50", support: "50", resistance: "60", last_update: "8 Mei 2026" }, 
                    { ticker: "ELTY", company: "PT Bakrieland Development Tbk", sector: "Properti & Real Estat", ownership: "Lini bisnis properti grup Bakrie (Rasuna Epicentrum).", kepemilikan_persen: "Afiliasi", sejarah: "Pengembang properti Epicentrum Kuningan.", tahun_masuk: "1996", broker_afiliasi: "YP, CP", free_float: "70.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "58", last_update: "8 Mei 2026" },
                    { ticker: "ENRG", company: "PT Energi Mega Persada Tbk", sector: "Energi (Minyak & Gas)", ownership: "Dikendalikan oleh keluarga Bakrie.", kepemilikan_persen: "Afiliasi Pengendali", sejarah: "Perusahaan migas independen Grup Bakrie.", tahun_masuk: "2004", broker_afiliasi: "YP, PD", free_float: "40.0%", avg_up: "230", avg_down: "210", support: "190", resistance: "260", last_update: "8 Mei 2026" }, 
                    { ticker: "JGLE", company: "PT Graha Andrasentra Propertindo Tbk", sector: "Pariwisata & Properti", ownership: "Pengelola The Jungle Waterpark, bagian dari ekosistem Bakrie.", kepemilikan_persen: "Afiliasi", sejarah: "Proyek rekreasi dari Bakrieland.", tahun_masuk: "2016", broker_afiliasi: "YP", free_float: "60.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" },
                    { ticker: "MDIA", company: "PT Intermedia Capital Tbk", sector: "Media & Penyiaran", ownership: "Anak usaha dari VIVA (pengelola ANTV).", kepemilikan_persen: "89.9% (via VIVA)", sejarah: "Induk usaha dari stasiun TV ANTV.", tahun_masuk: "2014", broker_afiliasi: "YP", free_float: "10.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" },
                    { ticker: "UNSP", company: "PT Bakrie Sumatera Plantations Tbk", sector: "Agrikultur (Kelapa Sawit)", ownership: "Lini bisnis perkebunan kelapa sawit milik grup Bakrie.", kepemilikan_persen: "Afiliasi", sejarah: "Sayap perkebunan tertua milik grup Bakrie.", tahun_masuk: "1990", broker_afiliasi: "YP", free_float: "60.0%", avg_up: "120", avg_down: "105", support: "100", resistance: "140", last_update: "8 Mei 2026" },
                    { ticker: "VIVA", company: "PT Visi Media Asia Tbk", sector: "Media & Penyiaran", ownership: "Induk perusahaan ANTV dan tvOne.", kepemilikan_persen: "Afiliasi Pengendali", sejarah: "Holding media grup Bakrie.", tahun_masuk: "2011", broker_afiliasi: "YP", free_float: "30.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "56", last_update: "8 Mei 2026" }, 
                    { ticker: "VKTR", company: "PT VKTR Teknologi Mobilitas Tbk", sector: "Kendaraan Listrik", ownership: "Spin-off dari BNBR (bus & kendaraan komersial listrik).", kepemilikan_persen: "Afiliasi", sejarah: "Transformasi bisnis Bakrie ke kendaraan listrik.", tahun_masuk: "2023", broker_afiliasi: "YP, CP", free_float: "20.0%", avg_up: "125", avg_down: "115", support: "110", resistance: "140", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "ciputra", 
                name: "Ciputra Group", 
                desc: "Grup pengembang properti raksasa warisan mendiang Ir. Ciputra.", 
                stocks: [ 
                    { ticker: "CTRA", company: "PT Ciputra Development Tbk", sector: "Properti & Real Estat", ownership: "Dikendalikan oleh keluarga Ciputra melalui PT Sang Pelopor (sekitar 47%).", kepemilikan_persen: "47.0%", sejarah: "Perusahaan properti andalan keluarga Ciputra.", tahun_masuk: "1994", broker_afiliasi: "RX, AK", free_float: "53.0%", avg_up: "1250", avg_down: "1180", support: "1100", resistance: "1350", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "ctcorp", 
                name: "CT Corp", 
                desc: "Konglomerasi milik Chairul Tanjung yang berfokus pada layanan finansial, media, hiburan, dan gaya hidup.", 
                stocks: [ 
                    { ticker: "BBHI", company: "PT Allo Bank Indonesia Tbk", sector: "Perbankan & Keuangan Digital", ownership: "CT Corp via PT Mega Corpora menguasai saham mayoritas ekosistem bank digital ini (sekitar 60%).", kepemilikan_persen: "60.8%", sejarah: "Akuisisi Bank Harda menjadi bank digital Allo Bank.", tahun_masuk: "2021", broker_afiliasi: "YP, PD", free_float: "15.0%", avg_up: "1150", avg_down: "1050", support: "1000", resistance: "1300", last_update: "8 Mei 2026" }, 
                    { ticker: "GIAA", company: "PT Garuda Indonesia (Persero) Tbk", sector: "Transportasi Udara", ownership: "CT Corp melalui PT Trans Airways memiliki porsi saham minoritas namun strategis.", kepemilikan_persen: "7.9%", sejarah: "CT Corp masuk sebagai investor strategis Garuda Indonesia.", tahun_masuk: "2012", broker_afiliasi: "YP, RX", free_float: "20.0%", avg_up: "75", avg_down: "65", support: "60", resistance: "90", last_update: "8 Mei 2026" },
                    { ticker: "MEGA", company: "PT Bank Mega Tbk", sector: "Perbankan", ownership: "Dikendalikan secara dominan oleh PT Mega Corpora milik CT Corp (>58%).", kepemilikan_persen: "58.0%", sejarah: "Bank pilar utama dalam ekosistem CT Corp.", tahun_masuk: "1996", broker_afiliasi: "PD, YP", free_float: "42.0%", avg_up: "4800", avg_down: "4500", support: "4300", resistance: "5200", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "danantara", 
                name: "Danantara Group (BP Danantara / BUMN)", 
                desc: "Sovereign Wealth Fund RI. Mengonsolidasikan aset BUMN terbesar tanah air.", 
                stocks: [ 
                    { ticker: "ADHI", company: "PT Adhi Karya (Persero) Tbk", sector: "Konstruksi BUMN", ownership: "Negara RI memegang kendali mayoritas.", kepemilikan_persen: "51.0%", sejarah: "BUMN Karya spesialisasi konstruksi jalan & rel.", tahun_masuk: "2004", broker_afiliasi: "YP, CC", free_float: "49.0%", avg_up: "310", avg_down: "280", support: "260", resistance: "350", last_update: "8 Mei 2026" },
                    { ticker: "ANTM", company: "PT Aneka Tambang Tbk", sector: "Pertambangan (Logam Mulia & Nikel)", ownership: "Anggota holding MIND ID. Negara RI via Inalum.", kepemilikan_persen: "65.0%", sejarah: "BUMN pertambangan nikel dan emas.", tahun_masuk: "1997", broker_afiliasi: "RX, YP", free_float: "35.0%", avg_up: "1550", avg_down: "1450", support: "1400", resistance: "1700", last_update: "8 Mei 2026" }, 
                    { ticker: "BBCA", company: "PT Bank Central Asia Tbk", sector: "Perbankan", ownership: "Porsi minoritas/investasi SWF/BUMN di bank swasta terbesar.", kepemilikan_persen: "Investasi SWF", sejarah: "Investasi strategis institusi negara.", tahun_masuk: "2000-an", broker_afiliasi: "RX, AK", free_float: "45.0%", avg_up: "9850", avg_down: "9500", support: "9300", resistance: "10200", last_update: "8 Mei 2026" },
                    { ticker: "BBNI", company: "PT Bank Negara Indonesia (Persero) Tbk", sector: "Perbankan", ownership: "Negara RI memegang 60%.", kepemilikan_persen: "60.0%", sejarah: "Bank BUMN tertua paska kemerdekaan RI.", tahun_masuk: "1996", broker_afiliasi: "RX, AK", free_float: "40.0%", avg_up: "5200", avg_down: "4900", support: "4800", resistance: "5500", last_update: "8 Mei 2026" }, 
                    { ticker: "BBRI", company: "PT Bank Rakyat Indonesia (Persero) Tbk", sector: "Perbankan", ownership: "Negara RI memegang 53%. Salah satu market cap terbesar.", kepemilikan_persen: "53.19%", sejarah: "Bank dengan spesialisasi mikro terbesar.", tahun_masuk: "2003", broker_afiliasi: "BK, AK", free_float: "46.81%", avg_up: "4850", avg_down: "4600", support: "4500", resistance: "5200", last_update: "8 Mei 2026" }, 
                    { ticker: "BBTN", company: "PT Bank Tabungan Negara (Persero) Tbk", sector: "Perbankan", ownership: "Negara RI memegang 60%. Fokus pembiayaan perumahan.", kepemilikan_persen: "60.0%", sejarah: "Bank BUMN penyalur KPR utama.", tahun_masuk: "2009", broker_afiliasi: "RX, YP", free_float: "40.0%", avg_up: "1450", avg_down: "1350", support: "1300", resistance: "1600", last_update: "8 Mei 2026" },
                    { ticker: "BKSL", company: "PT Sentul City Tbk", sector: "Properti", ownership: "Porsi investasi/restrukturisasi yang melibatkan institusi negara/BUMN.", kepemilikan_persen: "Afiliasi Restrukturisasi", sejarah: "Terkait restrukturisasi aset properti via BUMN.", tahun_masuk: "2010-an", broker_afiliasi: "YP", free_float: "60.0%", avg_up: "53", avg_down: "50", support: "50", resistance: "58", last_update: "8 Mei 2026" },
                    { ticker: "BMRI", company: "PT Bank Mandiri (Persero) Tbk", sector: "Perbankan", ownership: "Negara RI memegang 52% saham pengendali utama.", kepemilikan_persen: "52.0%", sejarah: "Bank BUMN terbesar dari sisi aset, hasil peleburan (merger) 4 bank pemerintah pada krisis 1998.", tahun_masuk: "1998", broker_afiliasi: "RX, AK, KZ", free_float: "48.0%", avg_up: "6800", avg_down: "6200", support: "6000", resistance: "7500", last_update: "10 Mei 2026" },
                    { ticker: "BMTR", company: "PT Global Mediacom Tbk,", sector: "Media Massa", ownership: "Negara RI memegang 52%.", kepemilikan_persen: "52.0%", sejarah: "MNC Media & Entertainment adalah perusahaan media massa dan telekomunikasi asal Indonesia yang didirikan sejak 1981. Perusahaan ini masih berada dalam naungan MNC Asia Holding dan merupakan induk dari Media Nusantara Citra..", tahun_masuk: "2003", broker_afiliasi: "EP, MN", free_float: "48.3%", avg_up: "250", avg_down: "230", support: "220", resistance: "280", last_update: "8 Mei 2026" }, 
                    { ticker: "BRIS", company: "PT Bank Syariah Indonesia Tbk", sector: "Perbankan Syariah", ownership: "Hasil merger bank syariah BUMN (Mandiri, BRI, BNI).", kepemilikan_persen: "Mayoritas (BMRI, BBRI, BBNI)", sejarah: "Merger tiga raksasa bank syariah BUMN.", tahun_masuk: "2021", broker_afiliasi: "RX, YP", free_float: "20.0%", avg_up: "2450", avg_down: "2300", support: "2200", resistance: "2700", last_update: "8 Mei 2026" },
                    { ticker: "GIAA", company: "PT Garuda Indonesia (Persero) Tbk", sector: "Transportasi Udara", ownership: "Maskapai *flag carrier* milik Negara RI.", kepemilikan_persen: "60.5%", sejarah: "Maskapai nasional RI.", tahun_masuk: "2011", broker_afiliasi: "YP, CC", free_float: "15.0%", avg_up: "75", avg_down: "65", support: "60", resistance: "85", last_update: "8 Mei 2026" },
                    { ticker: "GOTO", company: "PT GoTo Gojek Tokopedia Tbk", sector: "Teknologi", ownership: "Keterlibatan investasi institusi negara (BUMN/SWF) secara historis melalui investasi Telkomsel.", kepemilikan_persen: "Investasi Strategis BUMN", sejarah: "Raksasa teknologi decacorn hasil merger Gojek dan Tokopedia, mendapat pendanaan strategis dari ekosistem BUMN.", tahun_masuk: "2020", broker_afiliasi: "CC, PD, YP", free_float: "65.1%", avg_up: "68", avg_down: "62", support: "58", resistance: "80", last_update: "8 Mei 2026" },
                    { ticker: "INCO", company: "PT Vale Indonesia Tbk", sector: "Pertambangan (Nikel)", ownership: "MIND ID (BUMN) baru saja menambah porsi menjadi pemegang saham mayoritas.", kepemilikan_persen: "34.0% (MIND ID)", sejarah: "Eks-Kanada yang diakuisisi untuk ketahanan nikel RI.", tahun_masuk: "2020", broker_afiliasi: "BK, RX", free_float: "20.6%", avg_up: "4500", avg_down: "4200", support: "4000", resistance: "5000", last_update: "8 Mei 2026" },
                    { ticker: "JSMR", company: "PT Jasa Marga (Persero) Tbk", sector: "Infrastruktur", ownership: "Pengelola jalan tol pelat merah.", kepemilikan_persen: "70.0%", sejarah: "Raksasa pengelola jalan tol di Indonesia.", tahun_masuk: "2007", broker_afiliasi: "RX, YP", free_float: "30.0%", avg_up: "5200", avg_down: "4900", support: "4800", resistance: "5600", last_update: "8 Mei 2026" },
                    { ticker: "KAEF", company: "PT Kimia Farma Tbk", sector: "Farmasi BUMN", ownership: "Bagian dari holding BUMN farmasi (Bio Farma).", kepemilikan_persen: "90.0% (Bio Farma)", sejarah: "Pabrik farmasi dan apotek negara.", tahun_masuk: "2001", broker_afiliasi: "YP", free_float: "10.0%", avg_up: "850", avg_down: "780", support: "750", resistance: "950", last_update: "8 Mei 2026" },
                    { ticker: "KRAS", company: "PT Krakatau Steel (Persero) Tbk", sector: "Manufaktur Baja", ownership: "BUMN produsen baja nasional.", kepemilikan_persen: "80.0%", sejarah: "Pabrik baja raksasa di Cilegon.", tahun_masuk: "2010", broker_afiliasi: "YP", free_float: "20.0%", avg_up: "145", avg_down: "135", support: "125", resistance: "170", last_update: "8 Mei 2026" },
                    { ticker: "MBMA", company: "PT Merdeka Battery Materials Tbk", sector: "Material Baterai", ownership: "Keterlibatan investasi strategis institusi negara dalam rantai pasok EV.", kepemilikan_persen: "Afiliasi SWF", sejarah: "Ekosistem nikel grup Merdeka dengan dukungan investasi negara.", tahun_masuk: "2023", broker_afiliasi: "RX, KZ", free_float: "15.0%", avg_up: "580", avg_down: "540", support: "500", resistance: "650", last_update: "8 Mei 2026" },
                    { ticker: "PGAS", company: "PT Perusahaan Gas Negara Tbk", sector: "Energi (Minyak & Gas)", ownership: "Aset BUMN gas (Sub-holding Pertamina).", kepemilikan_persen:"56.9% (Pertamina)", sejarah: "Sub-holding gas bagian dari grup Pertamina.", tahun_masuk: "2003", broker_afiliasi: "RX, AK", free_float: "43.1%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" }, 
                    { ticker: "PTBA", company: "PT Bukit Asam Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Anggota holding MIND ID.", kepemilikan_persen: "65.9% (MIND ID)", sejarah: "Perusahaan batu bara pelat merah di Sumatera.", tahun_masuk: "2002", broker_afiliasi: "YP, RX", free_float: "34.1%", avg_up: "2850", avg_down: "2700", support: "2600", resistance: "3100", last_update: "8 Mei 2026" }, 
                    { ticker: "PTPP", company: "PT PP (Persero) Tbk", sector: "Konstruksi BUMN", ownership: "Negara RI bertindak sebagai pemegang saham pengendali mayoritas.", kepemilikan_persen: "51.0%", sejarah: "BUMN Karya dengan portofolio kuat di pembangunan gedung, pelabuhan, dan infrastruktur utama.", tahun_masuk: "2010", broker_afiliasi: "YP, PD", free_float: "49.0%", avg_up: "420", avg_down: "380", support: "350", resistance: "480", last_update: "10 Mei 2026" },
                    { ticker: "SMGR", company: "PT Semen Indonesia (Persero) Tbk", sector: "Infrastruktur & Material", ownership: "Holding BUMN Semen.", kepemilikan_persen: "51.2%", sejarah: "Holding dari pabrik semen milik negara.", tahun_masuk: "1991", broker_afiliasi: "RX, BK", free_float: "48.8%", avg_up: "4800", avg_down: "4500", support: "4300", resistance: "5200", last_update: "8 Mei 2026" }, 
                    { ticker: "TINS", company: "PT Timah Tbk", sector: "Pertambangan (Timah)", ownership: "Anggota holding MIND ID.", kepemilikan_persen: "65.0% (MIND ID)", sejarah: "Produsen timah milik BUMN.", tahun_masuk: "1995", broker_afiliasi: "YP, RX", free_float: "35.0%", avg_up: "950", avg_down: "880", support: "800", resistance: "1100", last_update: "8 Mei 2026" },
                    { ticker: "TLKM", company: "PT Telkom Indonesia (Persero) Tbk", sector: "Teknologi & Telekomunikasi", ownership: "Negara RI memegang 52%.", kepemilikan_persen: "52.09%", sejarah: "Monopoli telekomunikasi historis RI.", tahun_masuk: "1995", broker_afiliasi: "CS, KZ", free_float: "47.91%", avg_up: "3150", avg_down: "2950", support: "2800", resistance: "3400", last_update: "8 Mei 2026" }, 
                    { ticker: "TOBA", company: "PT TBS Energi Utama Tbk", sector: "Energi", ownership: "Kerjasama transisi energi dan investasi ekosistem EV dengan BUMN.", kepemilikan_persen: "Afiliasi / Kemitraan", sejarah: "Bermitra dengan BUMN untuk pengembangan ekosistem motor listrik (Electrum).", tahun_masuk: "2021", broker_afiliasi: "YP, PD", free_float: "20.0%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "TPIA", company: "PT Chandra Asri Pacific Tbk", sector: "Petrokimia", ownership: "Investasi institusi negara/Sovereign Wealth Fund di sektor hilirisasi.", kepemilikan_persen: "Afiliasi SWF", sejarah: "Mendapat pendanaan INA (SWF) untuk ketahanan petrokimia.", tahun_masuk: "2022", broker_afiliasi: "DX, BB", free_float: "7.2%", avg_up: "7100", avg_down: "6800", support: "6500", resistance: "7800", last_update: "8 Mei 2026" },
                    { ticker: "WIKA", company: "PT Wijaya Karya (Persero) Tbk", sector: "Konstruksi BUMN", ownership: "Negara RI memegang kepemilikan mayoritas.", kepemilikan_persen: "65.0%", sejarah: "BUMN Karya terkemuka yang berfokus pada infrastruktur strategis nasional, termasuk konsorsium kereta cepat.", tahun_masuk: "2007", broker_afiliasi: "YP, CC", free_float: "35.0%", avg_up: "180", avg_down: "150", support: "135", resistance: "210", last_update: "10 Mei 2026" }
                ] 
            },
            { 
                id: "djarum", 
                name: "Djarum Group", 
                desc: "Grup bisnis milik Budi Hartono dan Michael Hartono. Menguasai sektor perbankan, infrastruktur digital, dan properti.", 
                stocks: [ 
                    { ticker: "BBCA", company: "PT Bank Central Asia Tbk", sector: "Perbankan", ownership: "Mayoritas saham (54.9%) dikuasai melalui PT Dwimuria Investama Andalan.", kepemilikan_persen: "54.9%", sejarah: "Diakuisisi Djarum pasca krisis 1998, kini menjadi bank dengan valuasi terbesar di RI.", tahun_masuk: "2002", broker_afiliasi: "RX, AK", free_float: "45.1%", avg_up: "9850", avg_down: "9500", support: "9300", resistance: "10200", last_update: "8 Mei 2026" }, 
                    { ticker: "BELI", company: "PT Global Digital Niaga Tbk", sector: "E-Commerce", ownership: "E-commerce (Blibli) dan tiket.com.", kepemilikan_persen: "83.0%", sejarah: "Grup Djarum mengkonsolidasikan bisnis digital mereka via Blibli.", tahun_masuk: "2022", broker_afiliasi: "BCA, YP", free_float: "17.0%", avg_up: "460", avg_down: "440", support: "420", resistance: "500", last_update: "8 Mei 2026" }, 
                    { ticker: "DATA", company: "PT Remala Abadi Tbk / Keanggotaan Ekosistem", sector: "Pusat Data", ownership: "Investasi afiliasi Djarum dalam infrastruktur internet & cloud.", kepemilikan_persen: "Afiliasi (Kemitraan)", sejarah: "Kolaborasi infrastruktur jaringan bersama Otto Sugiri dan Salim.", tahun_masuk: "2020-an", broker_afiliasi: "RX, PD", free_float: "15.0%", avg_up: "38500", avg_down: "37000", support: "36000", resistance: "41000", last_update: "8 Mei 2026"},
                    { ticker: "HEAL", company: "PT Medikaloka Hermina Tbk", sector: "Kesehatan", ownership: "Investasi strategis portofolio grup di sektor rumah sakit.", kepemilikan_persen: "Minoritas Strategis", sejarah: "Investasi ekosistem untuk diversifikasi portfolio Djarum ke healthcare.", tahun_masuk: "2021", broker_afiliasi: "RX, AK", free_float: "35.2%", avg_up: "1350", avg_down: "1280", support: "1200", resistance: "1500", last_update: "8 Mei 2026" },
                    { ticker: "IBST", company: "PT Inti Bangun Sejahtera Tbk", sector: "Infrastruktur Telekomunikasi", ownership: "Diakuisisi untuk memperkuat bisnis menara telekomunikasi grup.", kepemilikan_persen: "Mayoritas via TOWR", sejarah: "Konsolidasi bisnis tower Djarum.", tahun_masuk: "2024", broker_afiliasi: "BCA", free_float: "10.0%", avg_up: "6800", avg_down: "6500", support: "6200", resistance: "7500", last_update: "8 Mei 2026" },
                    { ticker: "RANC", company: "PT Supra Boga Lestari Tbk", sector: "Ritel Konsumsi", ownership: "Ritel supermarket (Ranch Market) bagian ekosistem Blibli.", kepemilikan_persen: "70.5% (via Blibli)", sejarah: "Diakuisisi Blibli untuk memperkuat bisnis O2O (Online to Offline).", tahun_masuk: "2021", broker_afiliasi: "BCA, YP", free_float: "29.5%", avg_up: "125", avg_down: "115", support: "100", resistance: "145", last_update: "8 Mei 2026" },
                    { ticker: "SSIA", company: "PT Surya Semesta Internusa Tbk", sector: "Properti & Kawasan Industri", ownership: "Investasi afiliasi Djarum di pengembangan kawasan industri (Subang Smartpolitan).", kepemilikan_persen: "Kemitraan Konsorsium", sejarah: "Kemitraan properti kawasan logistik strategis.", tahun_masuk: "2020-an", broker_afiliasi: "RX, PD", free_float: "40.0%", avg_up: "1150", avg_down: "1050", support: "980", resistance: "1300", last_update: "8 Mei 2026" },
                    { ticker: "SUPR", company: "PT Solusi Tunas Pratama Tbk", sector: "Infrastruktur Telekomunikasi", ownership: "Diakuisisi oleh TOWR, memperkuat monopoli menara telekomunikasi Djarum.", kepemilikan_persen: "99.9% (via TOWR)", sejarah: "Diakuisisi TOWR secara masif.", tahun_masuk: "2021", broker_afiliasi: "BCA", free_float: "0.1%", avg_up: "40000", avg_down: "39000", support: "38500", resistance: "42000", last_update: "8 Mei 2026" },
                    { ticker: "TOWR", company: "PT Sarana Menara Nusantara Tbk", sector: "Infrastruktur Telekomunikasi", ownership: "Dikendalikan melalui PT Sapta Adhikari Investama (>50%).", kepemilikan_persen: "54.4%", sejarah: "Kendaraan infrastruktur telekomunikasi Djarum yang paling dominan.", tahun_masuk: "2010", broker_afiliasi: "BCA, RX", free_float: "45.6%", avg_up: "850", avg_down: "780", support: "750", resistance: "950", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "emtk", 
                name: "EMTK Group", 
                desc: "Keluarga Eddy Kusnadi Sariaatmadja. Konglomerasi raksasa ekosistem teknologi, kesehatan, dan digital.", 
                stocks: [ 
                    { ticker: "BBHI", company: "PT Allo Bank Indonesia Tbk", sector: "Perbankan Digital", ownership: "Grup EMTK dan Bukalapak memiliki porsi investasi strategis di bank ini.", kepemilikan_persen: "Konsorsium Minoritas", sejarah: "EMTK beraliansi dengan CT Corp dan Salim di Allo Bank.", tahun_masuk: "2021", broker_afiliasi: "YP, PD", free_float: "15.0%", avg_up: "1150", avg_down: "1050", support: "1000", resistance: "1300", last_update: "8 Mei 2026" },
                    { ticker: "BUKA", company: "PT Bukalapak.com Tbk", sector: "E-Commerce", ownership: "EMTK adalah pemegang saham institusi terbesar di BUKA.", kepemilikan_persen: "23.9%", sejarah: "Investasi andalan EMTK di sektor tech sejak sebelum IPO.", tahun_masuk: "2015", broker_afiliasi: "YP, CC", free_float: "55.0%", avg_up: "145", avg_down: "130", support: "120", resistance: "170", last_update: "8 Mei 2026" },
                    { ticker: "CASS", company: "PT Cahaya Aero Services Tbk", sector: "Aviasi & Logistik", ownership: "Grup EMTK mengakuisisi porsi mayoritas (sekitar 51%) untuk ekspansi bisnis logistik.", kepemilikan_persen: "51.0%", sejarah: "Diversifikasi bisnis EMTK ke layanan aviasi dan logistik (sejalan dengan MRA).", tahun_masuk: "2024", broker_afiliasi: "YP", free_float: "49.0%", avg_up: "1050", avg_down: "980", support: "950", resistance: "1200", last_update: "8 Mei 2026" },
                    { ticker: "EMTK", company: "PT Elang Mahkota Teknologi Tbk", sector: "Teknologi & Holding", ownership: "Keluarga Sariaatmadja bertindak sebagai pengendali.", kepemilikan_persen: "78.0%", sejarah: "Perusahaan media dan tech pilar keluarga Sariaatmadja.", tahun_masuk: "1983", broker_afiliasi: "KZ, RX", free_float: "22.0%", avg_up: "420", avg_down: "380", support: "350", resistance: "480", last_update: "8 Mei 2026" }, 
                    { ticker: "SAME", company: "PT Sarana Meditama Metropolitan Tbk", sector: "Kesehatan (Rumah Sakit)", ownership: "Dikendalikan oleh EMTK (>70%), pengelola RS Omni.", kepemilikan_persen: "76.4%", sejarah: "Diakuisisi EMTK untuk membangun gurita bisnis healthcare (Omni & EMC).", tahun_masuk: "2020", broker_afiliasi: "YP, PD", free_float: "23.6%", avg_up: "280", avg_down: "250", support: "230", resistance: "330", last_update: "8 Mei 2026" },
                    { ticker: "SCMA", company: "PT Surya Citra Media Tbk", sector: "Media & Penyiaran", ownership: "Anak usaha langsung EMTK (SCTV, Indosiar, Vidio).", kepemilikan_persen: "73.2%", sejarah: "Perusahaan media TV tradisional (SCTV) dan digital (Vidio) milik EMTK.", tahun_masuk: "1999", broker_afiliasi: "RX, YP", free_float: "26.8%", avg_up: "145", avg_down: "135", support: "125", resistance: "170", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "happy-hapsoro", 
                name: "Happy Hapsoro Group", 
                desc: "Portofolio investasi yang terafiliasi dengan pengusaha Hapsoro Sukmonohadi.", 
                stocks: [ 
                    { ticker: "BUVA", company: "PT Bukit Uluwatu Villa Tbk", sector: "Properti & Pariwisata", ownership: "Keterlibatan investasi strategis grup di sektor perhotelan mewah.", kepemilikan_persen: "Afiliasi Strategis", sejarah: "Investasi di properti hospitality (hotel mewah di Bali).", tahun_masuk: "2021", broker_afiliasi: "PD, YP", free_float: "40.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "58", last_update: "8 Mei 2026" },
                    { ticker: "CBRE", company: "PT Cakra Buana Resources Tbk", sector: "Pelayaran & Logistik", ownership: "Pemegang saham utama tidak langsung via PT Basis Inovasi Agro.", kepemilikan_persen: "Afiliasi Kendali", sejarah: "Investasi maritim logistik angkutan curah.", tahun_masuk: "2023", broker_afiliasi: "YP", free_float: "30.0%", avg_up: "55", avg_down: "50", support: "50", resistance: "65", last_update: "8 Mei 2026" }, 
                    { ticker: "MINA", company: "PT Sanurhasta Mitra Tbk", sector: "Properti & Pariwisata", ownership: "Terafiliasi melalui PT Basis Utama Prima.", kepemilikan_persen: "Afiliasi", sejarah: "Keterlibatan via entitas kendaraan investasi Basis Utama Prima.", tahun_masuk: "2019", broker_afiliasi: "YP", free_float: "50.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" }, 
                    { ticker: "PADI", company: "PT Minna Padi Investama Sekuritas Tbk", sector: "Keuangan & Sekuritas", ownership: "Memiliki rekam jejak kepemilikan/afiliasi investasi.", kepemilikan_persen: "Afiliasi Historis", sejarah: "Terkait dalam sejarah transaksi investasi pasar modal grup.", tahun_masuk: "2010-an", broker_afiliasi: "YP", free_float: "60.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "53", last_update: "8 Mei 2026" },
                    { ticker: "PSKT", company: "PT Red Planet Indonesia Tbk", sector: "Perhotelan", ownership: "Tercatat dalam portofolio investasi Basis Utama Prima.", kepemilikan_persen: "Afiliasi", sejarah: "Investasi di jaringan hotel budget.", tahun_masuk: "2020", broker_afiliasi: "YP", free_float: "40.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "58", last_update: "8 Mei 2026" },
                    { ticker: "PTRO", company: "PT Petrosea Tbk", sector: "Kontraktor Pertambangan", ownership: "Happy Hapsoro via Sentra Makmur Lines memegang porsi saham bersama Prajogo.", kepemilikan_persen: "18.0%", sejarah: "Bergabung dengan Prajogo mengakuisisi Petrosea pasca dilepas Lo Kheng Hong.", tahun_masuk: "2024", broker_afiliasi: "BB, YP", free_float: "21.5%", avg_up: "8500", avg_down: "8000", support: "7800", resistance: "9200", last_update: "8 Mei 2026" },
                    { ticker: "RAJA", company: "PT Rukun Raharja Tbk", sector: "Energi (Infrastruktur Gas)", ownership: "Pemegang saham pengendali (baik langsung maupun via PT Sentra Sukses, total >30%).", kepemilikan_persen: "32.0%", sejarah: "Aset bisnis utama grup Happy Hapsoro di bidang pipanisasi dan infrastruktur gas.", tahun_masuk: "2010", broker_afiliasi: "YP, PD", free_float: "68.0%", avg_up: "1250", avg_down: "1150", support: "1050", resistance: "1400", last_update: "8 Mei 2026" }, 
                    { ticker: "RATU", company: "PT Raharja Energi Cepu Tbk", sector: "Energi & Properti", ownership: "Masuk dalam radar investasi portofolio terkait grup.", kepemilikan_persen: "Afiliasi", sejarah: "Manuver investasi energi.", tahun_masuk: "2022", broker_afiliasi: "YP", free_float: "70.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" },
                    { ticker: "SINI", company: "PT Singaraja Putra Tbk", sector: "Energi & Infrastruktur", ownership: "Diakuisisi dan dikendalikan oleh entitas afiliasi grup.", kepemilikan_persen: "Afiliasi Pengendali", sejarah: "Diakuisisi untuk pivot ke bisnis energi dan perhotelan.", tahun_masuk: "2022", broker_afiliasi: "YP, CC", free_float: "30.0%", avg_up: "2800", avg_down: "2500", support: "2300", resistance: "3200", last_update: "8 Mei 2026" },
                    { ticker: "UANG", company: "PT Pakuan Tbk", sector: "Properti & Real Estat", ownership: "Afiliasi investasi grup di pengembangan properti (Sawangan).", kepemilikan_persen: "Afiliasi", sejarah: "Proyek pengembangan kota mandiri bersama pengembang asing.", tahun_masuk: "2022", broker_afiliasi: "YP", free_float: "20.0%", avg_up: "480", avg_down: "450", support: "420", resistance: "550", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "harita", 
                name: "Harita Group", 
                desc: "Keluarga Lim Hariyanto Wijaya Sarwono. Konglomerasi yang kuat di pertambangan nikel, bauksit, dan kayu.", 
                stocks: [ 
                    { ticker: "CITA", company: "PT Cita Mineral Investindo Tbk", sector: "Pertambangan (Bauksit)", ownership: "Dikendalikan penuh oleh Harita Group.", kepemilikan_persen: "71.0%", sejarah: "Tambang bauksit dan produsen alumina andalan Harita.", tahun_masuk: "2007", broker_afiliasi: "YP, RX", free_float: "29.0%", avg_up: "2400", avg_down: "2200", support: "2100", resistance: "2600", last_update: "8 Mei 2026" },
                    { ticker: "NCKL", company: "PT Trimegah Bangun Persada Tbk", sector: "Pertambangan (Nikel)", ownership: "Keluarga Lim mengendalikan >80% (PT Harita Jayaraya).", kepemilikan_persen: "86.0%", sejarah: "Tambang nikel terintegrasi raksasa di Pulau Obi.", tahun_masuk: "2023", broker_afiliasi: "CC, YP", free_float: "14.0%", avg_up: "980", avg_down: "920", support: "880", resistance: "1100", last_update: "8 Mei 2026" }, 
                    { ticker: "TIRT", company: "PT Tirta Mahakam Resources Tbk", sector: "Kehutanan & Kayu", ownership: "Perusahaan pengolahan kayu yang terafiliasi dengan keluarga Lim / Harita.", kepemilikan_persen: "Afiliasi Historis", sejarah: "Aset kehutanan lawas milik keluarga Harita.", tahun_masuk: "1999", broker_afiliasi: "YP", free_float: "30.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "58", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "lippo", 
                name: "Lippo Group", 
                desc: "Didirikan oleh Mochtar Riady. Menguasai sektor real estat terintegrasi, ritel, kesehatan, dan multimedia.", 
                stocks: [ 
                    { ticker: "GMTD", company: "PT Gowa Makassar Tourism Development Tbk", sector: "Properti & Pariwisata", ownership: "Grup Lippo mengendalikan pengembangan kawasan properti Tanjung Bunga Makassar.", kepemilikan_persen: "62.7% (via LPKR)", sejarah: "Pengembang kawasan perumahan Tanjung Bunga di Makassar.", tahun_masuk: "1990-an", broker_afiliasi: "LP", free_float: "20.0%", avg_up: "4100", avg_down: "3800", support: "3500", resistance: "4500", last_update: "8 Mei 2026" },
                    { ticker: "LPCK", company: "PT Lippo Cikarang Tbk", sector: "Properti & Kawasan Industri", ownership: "Anak usaha langsung dari LPKR (sekitar 84% kepemilikan).", kepemilikan_persen: "84.0% (via LPKR)", sejarah: "Pengembang kota mandiri Meikarta dan Lippo Cikarang.", tahun_masuk: "1997", broker_afiliasi: "LP", free_float: "16.0%", avg_up: "680", avg_down: "620", support: "580", resistance: "750", last_update: "8 Mei 2026" }, 
                    { ticker: "LPGI", company: "PT Lippo General Insurance Tbk", sector: "Asuransi", ownership: "Sayap bisnis asuransi umum milik Lippo.", kepemilikan_persen: "Afiliasi Mayoritas", sejarah: "Layanan asuransi terafiliasi ekosistem kesehatan dan properti Lippo.", tahun_masuk: "1982", broker_afiliasi: "LP", free_float: "20.0%", avg_up: "3800", avg_down: "3500", support: "3200", resistance: "4100", last_update: "8 Mei 2026" },
                    { ticker: "LPIN", company: "PT Multi Prima Sejahtera Tbk", sector: "Manufaktur & Suku Cadang", ownership: "Perusahaan manufaktur komponen yang dikendalikan oleh PT Lippo Karawaci.", kepemilikan_persen: "Afiliasi LPKR", sejarah: "Aset lama Lippo di bidang manufaktur suku cadang.", tahun_masuk: "1990", broker_afiliasi: "LP", free_float: "25.0%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "LPKR", company: "PT Lippo Karawaci Tbk", sector: "Properti & Real Estat", ownership: "Dikendalikan oleh keluarga Riady melalui PT Inti Anugerah Pratama (holding properti utama).", kepemilikan_persen: "59.0%", sejarah: "Perusahaan induk properti Lippo terbesar (Kawasan Karawaci).", tahun_masuk: "1996", broker_afiliasi: "LP, RX", free_float: "41.0%", avg_up: "85", avg_down: "75", support: "70", resistance: "95", last_update: "8 Mei 2026" }, 
                    { ticker: "LPLI", company: "PT Star Pacific Tbk", sector: "Investasi & Media", ownership: "Kendaraan investasi grup, terafiliasi historis dengan bisnis media/IT Lippo.", kepemilikan_persen: "Afiliasi Lippo", sejarah: "Perusahaan cangkang investasi Lippo.", tahun_masuk: "1989", broker_afiliasi: "LP", free_float: "35.0%", avg_up: "185", avg_down: "160", support: "150", resistance: "210", last_update: "8 Mei 2026" },
                    { ticker: "LPPF", company: "PT Matahari Department Store Tbk", sector: "Ritel Konsumsi", ownership: "Grup Lippo mempertahankan status strategis melalui Auric Digital Retail.", kepemilikan_persen: "Auric (Terafiliasi)", sejarah: "Dikelola Lippo bersama investor institusi (Auric). Jaringan ritel terbesar di RI.", tahun_masuk: "1989", broker_afiliasi: "LP, RX", free_float: "55.0%", avg_up: "1650", avg_down: "1500", support: "1400", resistance: "1800", last_update: "8 Mei 2026" }, 
                    { ticker: "LPPS", company: "PT Lippo Securities Tbk", sector: "Keuangan & Investasi", ownership: "Perusahaan sekuritas bentukan awal grup Lippo.", kepemilikan_persen: "Afiliasi Lippo", sejarah: "Sayap broker saham Lippo.", tahun_masuk: "1994", broker_afiliasi: "LP", free_float: "25.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "58", last_update: "8 Mei 2026" },
                    { ticker: "MLPL", company: "PT Multipolar Tbk", sector: "Perusahaan Investasi / Holding", ownership: "Holding investasi teknologi dan ritel (induk dari MPPA).", kepemilikan_persen: "Afiliasi Pengendali", sejarah: "Induk bisnis ritel dan teknologi (Hypermart & IT).", tahun_masuk: "1989", broker_afiliasi: "LP", free_float: "40.0%", avg_up: "68", avg_down: "62", support: "58", resistance: "80", last_update: "8 Mei 2026" },
                    { ticker: "MLPT", company: "PT Multipolar Technology Tbk", sector: "Teknologi Informasi", ownership: "Anak usaha MLPL berfokus pada integrasi sistem TI.", kepemilikan_persen: "86.0% (via MLPL)", sejarah: "Penyedia jasa dan integrasi teknologi.", tahun_masuk: "2013", broker_afiliasi: "LP", free_float: "14.0%", avg_up: "1850", avg_down: "1750", support: "1650", resistance: "2000", last_update: "8 Mei 2026" }, 
                    { ticker: "MPPA", company: "PT Matahari Putra Prima Tbk", sector: "Ritel Konsumsi", ownership: "Pengelola Hypermart, dikendalikan via Multipolar (MLPL).", kepemilikan_persen: "50.2% (via MLPL)", sejarah: "Jaringan supermarket Hypermart yang beraliansi dengan GoTo.", tahun_masuk: "1992", broker_afiliasi: "LP", free_float: "49.8%", avg_up: "65", avg_down: "58", support: "54", resistance: "75", last_update: "8 Mei 2026" }, 
                    { ticker: "NOBU", company: "PT Bank Nationalnobu Tbk", sector: "Perbankan", ownership: "Bank swasta milik keluarga Riady.", kepemilikan_persen: "Afiliasi Keluarga Riady", sejarah: "Bank komersial Lippo pasca menjual Bank Lippo ke CIMB.", tahun_masuk: "2013", broker_afiliasi: "LP", free_float: "20.0%", avg_up: "680", avg_down: "620", support: "580", resistance: "750", last_update: "8 Mei 2026" },
                    { ticker: "SILO", company: "PT Siloam International Hospitals Tbk", sector: "Kesehatan (Rumah Sakit)", ownership: "Bersama CVC Capital Partners sebagai pemegang saham utama. Jaringan RS terbesar Lippo.", kepemilikan_persen: "Kemitraan CVC", sejarah: "Jaringan RS swasta terbesar di Indonesia yang dibangun oleh Lippo.", tahun_masuk: "2013", broker_afiliasi: "LP, RX", free_float: "15.0%", avg_up: "2850", avg_down: "2700", support: "2600", resistance: "3100", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "lkh", 
                name: "Lo Kheng Hong Group", 
                desc: "Value Investor perorangan paling sukses di Indonesia yang membeli porsi besar (>5%) di emiten salah harga.", 
                stocks: [ 
                    { ticker: "ABMM", company: "PT ABM Investama Tbk", sector: "Energi & Tambang", ownership: "Kepemilikan besar di atas 5%. Berfokus pada dividen yield.", kepemilikan_persen: "5.1%", sejarah: "LKH mulai mengakumulasi ABMM karena valuasi murah & dividen besar.", tahun_masuk: "2021", broker_afiliasi: "PD, YP", free_float: "25.0%", avg_up: "3800", avg_down: "3500", support: "3200", resistance: "4200", last_update: "8 Mei 2026" }, 
                    { ticker: "ANJT", company: "PT Austindo Nusantara Jaya Tbk", sector: "Agrikultur (Kelapa Sawit)", ownership: "LKH mengoleksi saham perkebunan ini karena fundamental valuasi murah (PBV).", kepemilikan_persen: "5.0%", sejarah: "Dibeli karena memiliki aset perkebunan bagus dengan valuasi diskon.", tahun_masuk: "2023", broker_afiliasi: "PD, CC", free_float: "20.0%", avg_up: "780", avg_down: "720", support: "680", resistance: "850", last_update: "8 Mei 2026" },
                    { ticker: "BBRI", company: "PT Bank Rakyat Indonesia (Persero) Tbk", sector: "Perbankan", ownership: "Salah satu pilar investasi blue-chip yang dipegang LKH untuk dividen dan growth panjang.", kepemilikan_persen: "Individu (<1%)", sejarah: "Koleksi big bank yang sering disebut LKH sebagai instrumen growth.", tahun_masuk: "2010-an", broker_afiliasi: "PD, AK", free_float: "46.81%", avg_up: "4850", avg_down: "4600", support: "4500", resistance: "5200", last_update: "8 Mei 2026" },
                    { ticker: "BDMN", company: "PT Bank Danamon Indonesia Tbk", sector: "Perbankan", ownership: "Saham perbankan yang masuk portofolio LKH.", kepemilikan_persen: "Individu (<5%)", sejarah: "Diakumulasi saat PBV bank Danamon berada di titik terendah.", tahun_masuk: "2023", broker_afiliasi: "PD", free_float: "7.5%", avg_up: "2850", avg_down: "2700", support: "2600", resistance: "3100", last_update: "8 Mei 2026" },
                    { ticker: "BMTR", company: "PT Global Mediacom Tbk", sector: "Holding Media", ownership: "LKH memegang porsi saham signifikan di atas 6% secara individu.", kepemilikan_persen: "6.6%", sejarah: "Dinilai LKH salah harga karena valuasi induk lebih murah dari anak.", tahun_masuk: "2020", broker_afiliasi: "PD, YP", free_float: "42.1%", avg_up: "260", avg_down: "240", support: "220", resistance: "290", last_update: "8 Mei 2026" }, 
                    { ticker: "CFIN", company: "PT Clipan Finance Indonesia Tbk", sector: "Perbankan & Keuangan", ownership: "Pernah menjadi pemegang saham terbesar secara individu.", kepemilikan_persen: "Individu (Historis 5%)", sejarah: "Pernah memberi cuan besar saat saham leasing ini breakout.", tahun_masuk: "2021", broker_afiliasi: "PD", free_float: "30.0%", avg_up: "480", avg_down: "440", support: "420", resistance: "550", last_update: "8 Mei 2026" }, 
                    { ticker: "DILD", company: "PT Intiland Development Tbk", sector: "Properti & Real Estat", ownership: "Masuk dalam portofolio investasi >5% untuk aset properti murah.", kepemilikan_persen: "6.5%", sejarah: "Dibeli LKH karena aset landbank yang besar (salah harga).", tahun_masuk: "2022", broker_afiliasi: "PD, CC", free_float: "35.2%", avg_up: "185", avg_down: "170", support: "160", resistance: "210", last_update: "8 Mei 2026" }, 
                    { ticker: "GJTL", company: "PT Gajah Tunggal Tbk", sector: "Manufaktur (Otomotif)", ownership: "Salah satu portofolio andalan LKH (porsi di atas 5%).", kepemilikan_persen: "5.2%", sejarah: "Dibeli saat utang membengkak, dan dijual saat turnaround.", tahun_masuk: "2021", broker_afiliasi: "PD, CC", free_float: "34.8%", avg_up: "1150", avg_down: "1050", support: "980", resistance: "1300", last_update: "8 Mei 2026" }, 
                    { ticker: "NISP", company: "PT Bank OCBC NISP Tbk", sector: "Perbankan", ownership: "Secara historis merupakan salah satu koleksi perbankan milik LKH.", kepemilikan_persen: "Individu", sejarah: "Salah satu pundi perbankan LKH di masa lalu.", tahun_masuk: "2020", broker_afiliasi: "PD", free_float: "15.0%", avg_up: "1350", avg_down: "1280", support: "1200", resistance: "1500", last_update: "8 Mei 2026" },
                    { ticker: "PGAS", company: "PT Perusahaan Gas Negara Tbk", sector: "Energi (Minyak & Gas)", ownership: "Tercatat sebagai koleksi investasi value investing LKH.", kepemilikan_persen: "Individu", sejarah: "Diakumulasi karena dinilai dividen yield dan PBV nya atraktif.", tahun_masuk: "2023", broker_afiliasi: "PD", free_float: "43.1%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "ltk", 
                name: "Low Tuck Kwong Group", 
                desc: "Pengusaha batu bara visioner. Mengendalikan salah satu tambang batu bara termurah dan efisien.", 
                stocks: [ 
                    { ticker: "BYAN", company: "PT Bayan Resources Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Low Tuck Kwong adalah pemegang saham pengendali absolut (>60%).", kepemilikan_persen: "61.0%", sejarah: "Tambang batu bara dengan kalori menengah yang biaya produksinya sangat efisien.", tahun_masuk: "2008", broker_afiliasi: "YP, CC", free_float: "10.5%", avg_up: "18500", avg_down: "17800", support: "17000", resistance: "19500", last_update: "8 Mei 2026" },
                    { ticker: "MYOH", company: "PT Samindo Resources Tbk", sector: "Kontraktor Pertambangan", ownership: "Low Tuck Kwong memiliki saham signifikan (di atas 10%) sebagai investasi strategis batu bara.", kepemilikan_persen: "14.2%", sejarah: "Kontraktor tambang yang memiliki kemitraan historis dengan ekosistem LTK.", tahun_masuk: "2010-an", broker_afiliasi: "YP, PD", free_float: "25.0%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" },
                    { ticker: "TRJA", company: "PT Transkon Jaya Tbk", sector: "Penyewaan Kendaraan Tambang", ownership: "Afiliasi/investasi yang mendukung ekosistem tambang Low Tuck Kwong.", kepemilikan_persen: "Afiliasi", sejarah: "Vendor kendaraan spesialis tambang yang disuntik modal oleh ekosistem LTK.", tahun_masuk: "2023", broker_afiliasi: "YP", free_float: "20.0%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "VOKS", company: "PT Voksel Electric Tbk", sector: "Manufaktur Kabel & Optik", ownership: "Low Tuck Kwong tercatat memiliki porsi kepemilikan minoritas namun besar.", kepemilikan_persen: "Minoritas Signifikan", sejarah: "Pabrik kabel yang pernah dimiliki sahamnya secara pribadi oleh LTK.", tahun_masuk: "1990-an", broker_afiliasi: "YP", free_float: "30.0%", avg_up: "210", avg_down: "185", support: "170", resistance: "240", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "medco", 
                name: "Medco Group", 
                desc: "Kelompok bisnis milik keluarga Arifin Panigoro yang berfokus di sektor energi.", 
                stocks: [ 
                    { ticker: "AMMN", company: "PT Amman Mineral Internasional Tbk", sector: "Pertambangan (Emas & Tembaga)", ownership: "Medco memegang saham signifikan (sekitar 20%) di AMMN.", kepemilikan_persen: "21.1%", sejarah: "Konsorsium Medco, Salim & Agus Projo mengambil alih saham Newmont Nusa Tenggara.", tahun_masuk: "2016", broker_afiliasi: "RX, KZ", free_float: "17.2%", avg_up: "8500", avg_down: "8000", support: "7800", resistance: "9000", last_update: "8 Mei 2026" }, 
                    { ticker: "MEDC", company: "PT Medco Energi Internasional Tbk", sector: "Energi (Minyak & Gas)", ownership: "Dikendalikan oleh PT Medco Daya Abadi Lestari milik keluarga Panigoro.", kepemilikan_persen: "51.5%", sejarah: "Perusahaan migas swasta independen terbesar RI bentukan Arifin Panigoro.", tahun_masuk: "1994", broker_afiliasi: "YP, RX", free_float: "48.5%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "mnc", 
                name: "MNC Group", 
                desc: "Konglomerasi media, finansial, properti, dan hiburan yang dikendalikan oleh Hary Tanoesoedibjo.", 
                stocks: [ 
                    { ticker: "BABP", company: "PT Bank MNC Internasional Tbk", sector: "Perbankan", ownership: "Bank komersial dalam payung MNC Kapital.", kepemilikan_persen: "Mayoritas via BCAP", sejarah: "Bank Bumiputera yang diakuisisi MNC dan direbranding.", tahun_masuk: "2014", broker_afiliasi: "EP, YP", free_float: "35.0%", avg_up: "65", avg_down: "58", support: "54", resistance: "75", last_update: "8 Mei 2026" }, 
                    { ticker: "BCAP", company: "PT MNC Kapital Indonesia Tbk", sector: "Perbankan & Keuangan", ownership: "Holding jasa keuangan grup MNC.", kepemilikan_persen: "Afiliasi MNC", sejarah: "Kendaraan holding finansial (Bank, Sekuritas, Asuransi).", tahun_masuk: "2001", broker_afiliasi: "EP, YP", free_float: "30.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" }, 
                    { ticker: "BHIT", company: "PT MNC Asia Holding Tbk", sector: "Holding Multisektor", ownership: "Induk seluruh lini bisnis MNC Group.", kepemilikan_persen: "Pengendali Utama", sejarah: "Induk utama kerajaan bisnis HT.", tahun_masuk: "1997", broker_afiliasi: "EP", free_float: "45.0%", avg_up: "52", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" }, 
                    { ticker: "BMTR", company: "PT Global Mediacom Tbk", sector: "Holding Media", ownership: "Induk usaha bisnis media dan penyiaran MNC.", kepemilikan_persen: "Afiliasi MNC", sejarah: "Eks-Bimantara Citra yang diambil alih HT.", tahun_masuk: "2001", broker_afiliasi: "EP, PD", free_float: "42.1%", avg_up: "260", avg_down: "240", support: "220", resistance: "290", last_update: "8 Mei 2026" }, 
                    { ticker: "KPIG", company: "PT MNC Tourism Indonesia Tbk", sector: "Properti & Real Estat", ownership: "Lini bisnis properti, resor (Kawasan KEK Lido), dan perhotelan MNC.", kepemilikan_persen: "Afiliasi MNC", sejarah: "Pengembang KEK Lido dan resort mewah lainnya.", tahun_masuk: "2007", broker_afiliasi: "EP", free_float: "20.0%", avg_up: "55", avg_down: "50", support: "50", resistance: "65", last_update: "8 Mei 2026"}, 
                    { ticker: "MNCN", company: "PT Media Nusantara Citra Tbk", sector: "Media & Penyiaran", ownership: "Pengelola stasiun TV FTA (RCTI, MNCTV, GTV, iNews).", kepemilikan_persen: "Mayoritas via BMTR", sejarah: "Raja stasiun TV Free-To-Air di Indonesia.", tahun_masuk: "2007", broker_afiliasi: "EP, RX", free_float: "40.0%", avg_up: "380", avg_down: "350", support: "320", resistance: "420", last_update: "8 Mei 2026" }, 
                    { ticker: "MSIN", company: "PT MNC Digital Entertainment Tbk", sector: "Media & Teknologi Digital", ownership: "Sayap konten digital dan produksi milik grup.", kepemilikan_persen: "Afiliasi MNC", sejarah: "Merger aset digital dan production house (MNC Pictures).", tahun_masuk: "2018", broker_afiliasi: "EP", free_float: "15.0%", avg_up: "1250", avg_down: "1150", support: "1050", resistance: "1400", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "otto", 
                name: "Otto Toto Sugiri Group", 
                desc: "Pelopor industri Data Center di Indonesia.", 
                stocks: [ 
                    { ticker: "DCII", company: "PT DCI Indonesia Tbk", sector: "Teknologi (Infrastruktur Data)", ownership: "Otto Toto Sugiri memegang saham pengendali (sekitar 29%). Grup Salim juga pemegang saham utama.", kepemilikan_persen: "29.9%", sejarah: "Provider data center tier IV terbesar di RI, meroket pasca IPO bersama Salim.", tahun_masuk: "2021", broker_afiliasi: "KI, PD", free_float: "11.0%", avg_up: "38500", avg_down: "37000", support: "36000", resistance: "41000", last_update: "8 Mei 2026" }, 
                    { ticker: "EDGE", company: "PT Indointernet Tbk", sector: "Teknologi & Layanan Internet", ownership: "EDGE diakuisisi mayoritas oleh Digital Edge, namun Otto Sugiri menanamkan pondasi ekosistemnya.", kepemilikan_persen: "Minoritas Founder", sejarah: "ISP swasta pertama RI, pivot ke penyedia data center di tengah kota.", tahun_masuk: "2021", broker_afiliasi: "YP, PD", free_float: "10.0%", avg_up: "4800", avg_down: "4500", support: "4300", resistance: "5200", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "pakuwon", 
                name: "Pakuwon Group", 
                desc: "Raja mal dan pengembang properti terkemuka di bawah komando Alexander Tedja.", 
                stocks: [ 
                    { ticker: "PWON", company: "PT Pakuwon Jati Tbk", sector: "Properti & Real Estat", ownership: "Dikendalikan oleh keluarga Tedja melalui PT Pakuwon Arthaniaga.", kepemilikan_persen: "68.7%", sejarah: "Pengembang superblok mal tersukses (Gandaria City, Kota Kasablanka, Pakuwon Mall).", tahun_masuk: "1989", broker_afiliasi: "RX, AK", free_float: "31.3%", avg_up: "450", avg_down: "420", support: "400", resistance: "480", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "panin", 
                name: "Panin Group", 
                desc: "Grup finansial historis kuat yang dibesarkan oleh Mukmin Ali Gunawan.", 
                stocks: [ 
                    { ticker: "CFIN", company: "PT Clipan Finance Indonesia Tbk", sector: "Perbankan & Pembiayaan", ownership: "Anak usaha PNBN di bidang leasing (sekitar 51%).", kepemilikan_persen: "51.5% (via PNBN)", sejarah: "Anak usaha leasing dari Bank Panin.", tahun_masuk: "1990", broker_afiliasi: "GR, PD", free_float: "48.5%", avg_up: "480", avg_down: "440", support: "420", resistance: "550", last_update: "8 Mei 2026" }, 
                    { ticker: "PNBN", company: "PT Bank Pan Indonesia Tbk", sector: "Perbankan", ownership: "Dikendalikan bersama (ANZ) dengan kepemilikan PT Panin Financial Tbk.", kepemilikan_persen: "46.0% (PNLF)", sejarah: "Bank swasta yang kuat di kredit komersial, bermitra dengan ANZ.", tahun_masuk: "1982", broker_afiliasi: "GR", free_float: "15.0%", avg_up: "1250", avg_down: "1180", support: "1100", resistance: "1400", last_update: "8 Mei 2026" }, 
                    { ticker: "PNIN", company: "PT Paninvest Tbk", sector: "Perusahaan Investasi", ownership: "Holding investasi di ekosistem Panin.", kepemilikan_persen: "Afiliasi Keluarga Mukmin", sejarah: "Kendaraan holding investasi grup Panin.", tahun_masuk: "1983", broker_afiliasi: "GR", free_float: "20.0%", avg_up: "850", avg_down: "800", support: "750", resistance: "950", last_update: "8 Mei 2026" }, 
                    { ticker: "PNLF", company: "PT Panin Financial Tbk", sector: "Keuangan & Asuransi", ownership: "Kendaraan jasa keuangan non-bank grup.", kepemilikan_persen: "68.0% (via PNIN)", sejarah: "Induk asuransi jiwa dan kendaraan investasi Panin.", tahun_masuk: "1983", broker_afiliasi: "GR, PD", free_float: "32.0%", avg_up: "310", avg_down: "280", support: "260", resistance: "350", last_update: "8 Mei 2026" } 
                ] 
            },
            { 
                id: "prajogo", 
                name: "Prajogo Pangestu Group (Barito)", 
                desc: "Konglomerasi energi dan petrokimia. Menguasai emiten dengan kapitalisasi pasar raksasa yang sangat mempengaruhi pergerakan IHSG.", 
                stocks: [ 
                    { ticker: "BRPT", company: "PT Barito Pacific Tbk", sector: "Holding Petrokimia & Energi", ownership: "Prajogo Pangestu pengendali dominan.", kepemilikan_persen: "71.2%", sejarah: "Awalnya perusahaan perkayuan (Barito Pacific Timber), pivot menjadi raksasa petrokimia (mengakuisisi Chandra Asri).", tahun_masuk: "1979", broker_afiliasi: "DX, BB, YU", free_float: "27.5%", avg_up: "1150", avg_down: "1050", support: "980", resistance: "1300", last_update: "8 Mei 2026" }, 
                    { ticker: "BREN", company: "PT Barito Renewables Energy Tbk", sector: "Energi Terbarukan", ownership: "Dikendalikan penuh oleh BRPT dan afiliasi Prajogo.", kepemilikan_persen: "64.6%", sejarah: "Perusahaan holding panas bumi (Star Energy). Memecahkan rekor IPO dan valuasi pasar di BEI.", tahun_masuk: "2023", broker_afiliasi: "DX, BB", free_float: "11.7%", avg_up: "7800", avg_down: "7200", support: "6800", resistance: "8500", last_update: "8 Mei 2026" },
                    { ticker: "TPIA", company: "PT Chandra Asri Pacific Tbk", sector: "Manufaktur Petrokimia", ownership: "Prajogo secara langsung & via BRPT memegang porsi mayoritas.", kepemilikan_persen: "34.6% (BRPT) + Pribadi", sejarah: "Pabrik olefin terintegrasi satu-satunya di RI. Prajogo masuk menyelamatkan dari krisis 2008.", tahun_masuk: "2007", broker_afiliasi: "DX, RX, BB", free_float: "7.2%", avg_up: "7100", avg_down: "6800", support: "6500", resistance: "7800", last_update: "8 Mei 2026" },
                    { ticker: "CUAN", company: "PT Petrindo Semesta Kreasi Tbk", sector: "Pertambangan (Batu Bara & Emas)", ownership: "Prajogo Pangestu memiliki saham secara langsung porsi jumbo.", kepemilikan_persen: "85.0%", sejarah: "Kendaraan investasi tambang baru Prajogo. Harga sahamnya meroket tajam ribuan persen sejak IPO.", tahun_masuk: "2023", broker_afiliasi: "DX, BB, YU", free_float: "14.9%", avg_up: "6800", avg_down: "6200", support: "5800", resistance: "7500", last_update: "8 Mei 2026" },
                    { ticker: "PTRO", company: "PT Petrosea Tbk", sector: "Kontraktor Pertambangan", ownership: "Diakuisisi oleh grup melalui CUAN.", kepemilikan_persen: "34.0%", sejarah: "Eks-kontraktor Lo Kheng Hong & Happy Hapsoro, dicaplok Prajogo untuk melengkapi ekosistem tambangnya.", tahun_masuk: "2024", broker_afiliasi: "BB, DX, AK", free_float: "21.5%", avg_up: "8500", avg_down: "8000", support: "7800", resistance: "9200", last_update: "8 Mei 2026" },
                    { ticker: "CDIA", company: "PT Chandra Daya Investama Tbk / Terkait Grup", sector: "Investasi", ownership: "Keterlibatan investasi strategis di bawah radar konglomerasi grup.", kepemilikan_persen: "Afiliasi", sejarah: "Manuver investasi diversifikasi.", tahun_masuk: "2020-an", broker_afiliasi: "DX", free_float: "20.0%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "RATU", company: "PT Raharja Energi Cepu Tbk", sector: "Energi & Properti", ownership: "Tercatat terafiliasi investasi dengan Barito grup.", kepemilikan_persen: "Afiliasi", sejarah: "Keterlibatan investasi energi minoritas.", tahun_masuk: "2020", broker_afiliasi: "YP", free_float: "60.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" },
                    { ticker: "SSIA", company: "PT Surya Semesta Internusa Tbk", sector: "Properti & Kawasan Industri", ownership: "Prajogo Pangestu bersama Djarum memegang porsi strategis pengembangan kawasan industri Subang.", kepemilikan_persen: "Kemitraan Konsorsium", sejarah: "Join investasi proyek logistik Pelabuhan Patimban.", tahun_masuk: "2020-an", broker_afiliasi: "RX", free_float: "40.0%", avg_up: "1150", avg_down: "1050", support: "980", resistance: "1300", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "salim", 
                name: "Salim Group", 
                desc: "Konglomerasi Anthoni Salim. FMCG, ritel, teknologi, jalan tol, dan tambang.", 
                stocks: [ 
                    { ticker: "INDF", company: "PT Indofood Sukses Makmur Tbk", sector: "Barang Konsumsi", ownership: "Anthoni Salim (via First Pacific Co Ltd) menguasai sekitar 50.07%.", kepemilikan_persen: "50.07%", sejarah: "Didirikan oleh Sudono Salim (1990). Produsen mi instan raksasa penyelamat grup saat krisis 1998.", tahun_masuk: "1990", broker_afiliasi: "RX, KZ, KI", free_float: "49.93%", avg_up: "6500", avg_down: "6200", support: "6000", resistance: "7000", last_update: "8 Mei 2026" }, 
                    { ticker: "ICBP", company: "PT Indofood CBP Sukses Makmur Tbk", sector: "Barang Konsumsi", ownership: "Anak usaha INDF yang mengelola Indomie.", kepemilikan_persen: "80.53%", sejarah: "Spin-off divisi Consumer Branded Products dari INDF. Mesin pencetak uang utama grup.", tahun_masuk: "2010", broker_afiliasi: "RX, AK, KZ", free_float: "19.47%", avg_up: "11200", avg_down: "10800", support: "10500", resistance: "11800", last_update: "8 Mei 2026" },
                    { ticker: "DNET", company: "PT Indoritel Makmur Internasional Tbk", sector: "Ritel Konsumsi", ownership: "Anthoni Salim & mitra menguasai DNET (Indomaret, ROTI, FAST).", kepemilikan_persen: "39.4%", sejarah: "Backdoor listing jaringan ritel Indomaret, FAST (KFC), dan ROTI.", tahun_masuk: "2013", broker_afiliasi: "KI, YP", free_float: "12.8%", avg_up: "4800", avg_down: "4500", support: "4300", resistance: "5200", last_update: "8 Mei 2026" },
                    { ticker: "AMMN", company: "PT Amman Mineral Internasional Tbk", sector: "Pertambangan (Emas & Tembaga)", ownership: "Grup Salim terafiliasi sebagai pemegang saham strategis (via Pesona Lintas Suri/Keluarga).", kepemilikan_persen: "Afiliasi (~15%)", sejarah: "Salim menyuntikkan dana besar bersama Agus Projosasmito untuk mengambil alih Newmont.", tahun_masuk: "2016", broker_afiliasi: "KI, KZ, BB", free_float: "17.2%", avg_up: "8500", avg_down: "8000", support: "7800", resistance: "9000", last_update: "8 Mei 2026" },
                    { ticker: "ROTI", company: "PT Nippon Indosari Corpindo Tbk", sector: "Barang Konsumsi", ownership: "Sari Roti. Grup Salim memegang porsi via Indoritel (DNET).", kepemilikan_persen: "25.7%", sejarah: "Produsen Sari Roti. DNET masuk sebagai investor strategis untuk memperkuat sinergi distribusi Indomaret.", tahun_masuk: "2017", broker_afiliasi: "KI, RX", free_float: "32.1%", avg_up: "1150", avg_down: "1080", support: "1000", resistance: "1300", last_update: "8 Mei 2026" },
                    { ticker: "AHAP", company: "PT Asuransi Harta Aman Pratama Tbk", sector: "Asuransi", ownership: "Diakuisisi oleh ekosistem Salim melalui PT Asuransi Central Asia (ACA).", kepemilikan_persen: "Afiliasi ACA", sejarah: "Bagian dari ekosistem finansial ACA milik Salim.", tahun_masuk: "1990", broker_afiliasi: "KI", free_float: "30.0%", avg_up: "85", avg_down: "75", support: "70", resistance: "95", last_update: "8 Mei 2026" },
                    { ticker: "BINA", company: "PT Bank Ina Perdana Tbk", sector: "Perbankan", ownership: "Grup Salim via PT Indolife Pensiontama menguasai saham mayoritas.", kepemilikan_persen: "Mayoritas (Indolife)", sejarah: "Bank komersial yang diperkuat Salim untuk penetrasi digital dan supply chain Indomaret.", tahun_masuk: "2020", broker_afiliasi: "KI, YP", free_float: "25.0%", avg_up: "3800", avg_down: "3500", support: "3200", resistance: "4100", last_update: "8 Mei 2026" },
                    { ticker: "BRMS", company: "PT Bumi Resources Minerals Tbk", sector: "Pertambangan (Emas)", ownership: "Bersama Bakrie, Salim memegang porsi via Emirates Tarian Global.", kepemilikan_persen: "Konsorsium", sejarah: "Tambang emas anak usaha BUMI yang disokong pendanaannya oleh Salim.", tahun_masuk: "2022", broker_afiliasi: "KI, MG", free_float: "48.0%", avg_up: "160", avg_down: "140", support: "135", resistance: "180", last_update: "8 Mei 2026" },
                    { ticker: "BUMI", company: "PT Bumi Resources Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Menguasai kepemilikan mayoritas bersama Grup Bakrie via Mach Energy.", kepemilikan_persen: "Konsorsium", sejarah: "Salim menyelamatkan BUMI dari lilitan utang via private placement.", tahun_masuk: "2022", broker_afiliasi: "KI, MG", free_float: "42.0%", avg_up: "95", avg_down: "85", support: "80", resistance: "110", last_update: "8 Mei 2026" }, 
                    { ticker: "CBDK", company: "PT Danayasa Arthatama Tbk", sector: "Properti", ownership: "Kemitraan strategis Salim dengan Aguan di beberapa kawasan eksklusif.", kepemilikan_persen: "Kemitraan", sejarah: "Kemitraan bisnis properti terpadu.", tahun_masuk: "2010-an", broker_afiliasi: "KI", free_float: "17.7%", avg_up: "310", avg_down: "280", support: "260", resistance: "350", last_update: "8 Mei 2026" },
                    { ticker: "DCII", company: "PT DCI Indonesia Tbk", sector: "Pusat Data", ownership: "Anthoni Salim secara individu menguasai saham yang sangat besar (>10%).", kepemilikan_persen: "11.1%", sejarah: "Anthoni Salim memborong saham DCII untuk menguasai pasar data center RI.", tahun_masuk: "2021", broker_afiliasi: "KI", free_float: "11.0%", avg_up: "38500", avg_down: "37000", support: "36000", resistance: "41000", last_update: "8 Mei 2026" },
                    { ticker: "DEWA", company: "PT Darma Henwa Tbk", sector: "Kontraktor Pertambangan", ownership: "Masuk bersama grup Bakrie dalam restrukturisasi.", kepemilikan_persen: "Konsorsium", sejarah: "Sejalan dengan masuknya Salim ke BUMI.", tahun_masuk: "2022", broker_afiliasi: "KI, PD", free_float: "55.0%", avg_up: "55", avg_down: "50", support: "50", resistance: "60", last_update: "8 Mei 2026" },
                    { ticker: "EMTK", company: "PT Elang Mahkota Teknologi Tbk", sector: "Teknologi", ownership: "Salim menyuntikkan modal dan memiliki porsi investasi strategis (sekitar 9%).", kepemilikan_persen: "9.0%", sejarah: "Salim masuk ke EMTK untuk memperkuat digitalisasi ekosistemnya.", tahun_masuk: "2021", broker_afiliasi: "KI, KZ", free_float: "22.0%", avg_up: "420", avg_down: "380", support: "350", resistance: "480", last_update: "8 Mei 2026" },
                    { ticker: "FAST", company: "PT Fast Food Indonesia Tbk", sector: "Ritel Konsumsi (Restoran)", ownership: "Pengelola KFC. Indoritel (DNET) memiliki saham minoritas signifikan (sekitar 35%).", kepemilikan_persen: "35.8%", sejarah: "Kemitraan Salim dan Keluarga Gelael di KFC.", tahun_masuk: "1990", broker_afiliasi: "KI", free_float: "20.0%", avg_up: "750", avg_down: "680", support: "650", resistance: "850", last_update: "8 Mei 2026" },
                    { ticker: "IMAS", company: "PT Indomobil Sukses Internasional Tbk", sector: "Otomotif", ownership: "Sayap otomotif grup Salim, dikendalikan via Gallant Venture Ltd.", kepemilikan_persen: "71.4%", sejarah: "Pesaing utama Astra di masa orde baru (Nissan, Suzuki, Audi).", tahun_masuk: "1990-an", broker_afiliasi: "KI", free_float: "28.6%", avg_up: "1450", avg_down: "1350", support: "1250", resistance: "1600", last_update: "8 Mei 2026" },
                    { ticker: "IMJS", company: "PT Indomobil Multi Jasa Tbk", sector: "Keuangan Otomotif", ownership: "Anak usaha IMAS yang bergerak di multifinance.", kepemilikan_persen: "91.9% (via IMAS)", sejarah: "Unit pembiayaan otomotif Grup Indomobil.", tahun_masuk: "2013", broker_afiliasi: "KI", free_float: "8.1%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "LSIP", company: "PT PP London Sumatra Indonesia Tbk", sector: "Agrikultur", ownership: "Perkebunan kelapa sawit anak usaha SIMP.", kepemilikan_persen: "59.4% (via SIMP)", sejarah: "Perusahaan perkebunan tua peninggalan Inggris yang diakuisisi Salim.", tahun_masuk: "2007", broker_afiliasi: "KI, RX", free_float: "40.6%", avg_up: "850", avg_down: "780", support: "750", resistance: "950", last_update: "8 Mei 2026" }, 
                    { ticker: "MEDC", company: "PT Medco Energi Internasional Tbk", sector: "Energi (Minyak & Gas)", ownership: "Keterlibatan historis kemitraan Salim (Diamond Highway) di Medco.", kepemilikan_persen: "Afiliasi Historis", sejarah: "Kemitraan strategis Salim dengan Arifin Panigoro.", tahun_masuk: "2016", broker_afiliasi: "KI", free_float: "48.5%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" },
                    { ticker: "MEGA", company: "PT Bank Mega Tbk", sector: "Perbankan", ownership: "Salim Group memiliki portofolio investasi porsi strategis via Indolife di Bank Mega.", kepemilikan_persen: "Investasi Indolife", sejarah: "Kolaborasi finansial Salim dengan CT Corp.", tahun_masuk: "2020", broker_afiliasi: "KI, YP", free_float: "42.0%", avg_up: "4800", avg_down: "4500", support: "4300", resistance: "5200", last_update: "8 Mei 2026" },
                    { ticker: "META", company: "PT Nusantara Infrastructure Tbk", sector: "Infrastruktur", ownership: "Infrastruktur jalan tol (baru-baru ini delisting/privatisasi parsial).", kepemilikan_persen: "Mayoritas (Metro Pacific)", sejarah: "Jalan tol milik Salim yang sebagian diprivatisasi.", tahun_masuk: "2017", broker_afiliasi: "KI", free_float: "N/A", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" }, 
                    { ticker: "PANI", company: "PT Pantai Indah Kapuk Dua Tbk", sector: "Properti", ownership: "Salim bermitra erat dengan Aguan dalam pengembangan PIK 2.", kepemilikan_persen: "Kemitraan Konsorsium", sejarah: "Kemitraan 50:50 dengan Agung Sedayu Group membangun PIK 2.", tahun_masuk: "2021", broker_afiliasi: "KI, BK", free_float: "10.8%", avg_up: "5100", avg_down: "4800", support: "4500", resistance: "5500", last_update: "8 Mei 2026" },
                    { ticker: "SIMP", company: "PT Salim Ivomas Pratama Tbk", sector: "Agrikultur", ownership: "Holding perkebunan kelapa sawit Salim.", kepemilikan_persen: "78.5% (via INDF)", sejarah: "Anak usaha Indofood penghasil minyak goreng Bimoli.", tahun_masuk: "2011", broker_afiliasi: "KI, RX", free_float: "21.5%", avg_up: "380", avg_down: "350", support: "320", resistance: "420", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "saratoga", 
                name: "Saratoga Group", 
                desc: "Perusahaan investasi aktif bentukan Edwin Soeryadjaya dan Sandiaga Uno.", 
                stocks: [ 
                    { ticker: "ADRO", company: "PT Adaro Energy Indonesia Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Saratoga memiliki saham strategis bersama konsorsium Boy Thohir dkk.", kepemilikan_persen: "15.2%", sejarah: "Saratoga menjadi salah satu motor utama kebangkitan Adaro paska diakuisisi 2005.", tahun_masuk: "2005", broker_afiliasi: "AK, CS, RX", free_float: "42.5%", avg_up: "2850", avg_down: "2700", support: "2600", resistance: "3100", last_update: "8 Mei 2026" }, 
                    { ticker: "MDKA", company: "PT Merdeka Copper Gold Tbk", sector: "Pertambangan (Emas & Tembaga)", ownership: "Saratoga memiliki porsi kepemilikan besar di tambang ini (sekitar 18%).", kepemilikan_persen: "18.3%", sejarah: "Saratoga menyokong MDKA sejak sebelum tambang berproduksi, hingga menjadi raksasa emas.", tahun_masuk: "2015", broker_afiliasi: "RX, AK", free_float: "45.2%", avg_up: "2450", avg_down: "2300", support: "2200", resistance: "2700", last_update: "8 Mei 2026" }, 
                    { ticker: "MPMX", company: "PT Mitra Pinasthika Mustika Tbk", sector: "Otomotif & Konsumsi", ownership: "Saratoga memegang kendali mayoritas di perusahaan otomotif ini (>50%).", kepemilikan_persen: "56.6%", sejarah: "Distributor motor Honda Jatim yang diakuisisi penuh oleh Saratoga.", tahun_masuk: "2010", broker_afiliasi: "AK, RX", free_float: "43.4%", avg_up: "1050", avg_down: "980", support: "950", resistance: "1200", last_update: "8 Mei 2026" },
                    { ticker: "SRTG", company: "PT Saratoga Investama Sedaya Tbk", sector: "Perusahaan Investasi", ownership: "Induk perusahaan investasi grup Saratoga.", kepemilikan_persen: "Keluarga Soeryadjaya & Uno", sejarah: "Kendaraan private equity pertama di RI yang listing di bursa.", tahun_masuk: "2013", broker_afiliasi: "AK, RX", free_float: "25.0%", avg_up: "1450", avg_down: "1350", support: "1250", resistance: "1600", last_update: "8 Mei 2026" }, 
                    { ticker: "TBIG", company: "PT Tower Bersama Infrastructure Tbk", sector: "Infrastruktur Telekomunikasi", ownership: "Saratoga merupakan pemegang saham pengendali strategis bersama Provident.", kepemilikan_persen: "Afiliasi Mayoritas", sejarah: "Pemain besar tower telekomunikasi yang dibesarkan Saratoga dan Provident.", tahun_masuk: "2004", broker_afiliasi: "AK, YP", free_float: "30.0%", avg_up: "1850", avg_down: "1750", support: "1650", resistance: "2000", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "sinarmas", 
                name: "Sinarmas Group", 
                desc: "Keluarga Eka Tjipta Widjaja. Pulp & paper, agribisnis, properti, telekomunikasi.", 
                stocks: [ 
                    { ticker: "ADMG", company: "PT Polychem Indonesia Tbk", sector: "Manufaktur", ownership: "Tekstil dan kimia.", kepemilikan_persen: "Afiliasi", sejarah: "Afiliasi bahan kimia tekstil Sinar Mas.", tahun_masuk: "1990-an", broker_afiliasi: "CC", free_float: "30.0%", avg_up: "145", avg_down: "130", support: "120", resistance: "170", last_update: "8 Mei 2026" }, 
                    { ticker: "BSDE", company: "PT Bumi Serpong Damai Tbk", sector: "Properti & Real Estat", ownership: "Pemegang saham mayoritas adalah PT Paraga Artamida (Keluarga Widjaja).", kepemilikan_persen: "60.0%", sejarah: "Pengembang kota mandiri BSD City, crown jewel properti Sinar Mas.", tahun_masuk: "2008", broker_afiliasi: "CS, RX", free_float: "40.0%", avg_up: "1050", avg_down: "980", support: "950", resistance: "1200", last_update: "8 Mei 2026" }, 
                    { ticker: "BSIM", company: "PT Bank Sinarmas Tbk", sector: "Perbankan", ownership: "Lini bisnis perbankan utama milik grup Sinar Mas.", kepemilikan_persen: "59.0%", sejarah: "Awalnya Bank Shinta, diakuisisi Sinar Mas untuk layanan finansial grup.", tahun_masuk: "2005", broker_afiliasi: "DH", free_float: "41.0%", avg_up: "680", avg_down: "620", support: "580", resistance: "750", last_update: "8 Mei 2026" },
                    { ticker: "DMAS", company: "PT Puradelta Lestari Tbk", sector: "Properti (Kawasan Industri)", ownership: "Kolaborasi Sinar Mas Land dan Sojitz Corp.", kepemilikan_persen: "60.0%", sejarah: "Pengembang kawasan industri Kota Deltamas di Cikarang.", tahun_masuk: "2015", broker_afiliasi: "DH, RX", free_float: "15.0%", avg_up: "165", avg_down: "150", support: "140", resistance: "180", last_update: "8 Mei 2026" }, 
                    { ticker: "DSSA", company: "PT Dian Swastatika Sentosa Tbk", sector: "Energi & Infrastruktur", ownership: "Kendaraan investasi tambang batu bara, listrik, internet.", kepemilikan_persen: "59.9%", sejarah: "Holding energi dan infrastruktur milik Sinar Mas (induk GEMS dan MyRepublic).", tahun_masuk: "2009", broker_afiliasi: "DH", free_float: "15.0%", avg_up: "38000", avg_down: "35000", support: "32000", resistance: "42000", last_update: "8 Mei 2026" }, 
                    { ticker: "DUTI", company: "PT Duta Pertiwi Tbk", sector: "Properti & Real Estat", ownership: "Anak usaha langsung dari BSDE.", kepemilikan_persen: "88.5% (via BSDE)", sejarah: "Pengembang properti komersial (ITC Group).", tahun_masuk: "1994", broker_afiliasi: "DH", free_float: "11.5%", avg_up: "4800", avg_down: "4500", support: "4300", resistance: "5200", last_update: "8 Mei 2026" }, 
                    { ticker: "EXCL", company: "PT XL Axiata Tbk", sector: "Telekomunikasi", ownership: "Terdapat proses rencana merger/konsolidasi antara EXCL dengan FREN milik Sinar Mas.", kepemilikan_persen: "Merger Plan", sejarah: "Rencana merger raksasa dengan Smartfren.", tahun_masuk: "2024", broker_afiliasi: "CS, RX", free_float: "33.0%", avg_up: "2450", avg_down: "2300", support: "2200", resistance: "2700", last_update: "8 Mei 2026" },
                    { ticker: "GEMS", company: "PT Golden Energy Mines Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Anak usaha DSSA, tambang batu bara andalan grup Sinar Mas.", kepemilikan_persen: "62.5% (via DSSA)", sejarah: "Raksasa tambang batu bara Sinar Mas di Kalsel dan Jambi.", tahun_masuk: "2011", broker_afiliasi: "DH", free_float: "37.5%", avg_up: "6500", avg_down: "6200", support: "6000", resistance: "7000", last_update: "8 Mei 2026" },
                    { ticker: "INKP", company: "PT Indah Kiat Pulp & Paper Tbk", sector: "Manufaktur Pulp & Kertas", ownership: "Dikendalikan oleh keluarga Widjaja.", kepemilikan_persen: "52.7%", sejarah: "Pabrik pulp & paper andalan Asia Pulp & Paper (APP).", tahun_masuk: "1990", broker_afiliasi: "CS, DH", free_float: "47.3%", avg_up: "8500", avg_down: "8000", support: "7800", resistance: "9000", last_update: "8 Mei 2026" }, 
                    { ticker: "LIFE", company: "PT Asuransi Jiwa Sinarmas MSIG Tbk", sector: "Asuransi", ownership: "Perusahaan asuransi joint-venture Sinar Mas dengan Mitsui Sumitomo (MSIG).", kepemilikan_persen: "Minoritas (Kemitraan MSIG)", sejarah: "Asuransi jiwa andalan Sinar Mas yang join venture dengan Jepang.", tahun_masuk: "2019", broker_afiliasi: "DH", free_float: "20.0%", avg_up: "6800", avg_down: "6500", support: "6200", resistance: "7500", last_update: "8 Mei 2026" },
                    { ticker: "SMAR", company: "PT Sinar Mas Agro Resources and Technology Tbk", sector: "Agrikultur", ownership: "Sinar Mas menguasai >97% via GAR Singapura.", kepemilikan_persen: "97.2%", sejarah: "Produsen minyak goreng Filma, sawit tertua Sinar Mas.", tahun_masuk: "1992", broker_afiliasi: "DH", free_float: "2.8%", avg_up: "4200", avg_down: "3900", support: "3700", resistance: "4500", last_update: "8 Mei 2026" }, 
                    { ticker: "SMDM", company: "PT Suryamas Dutamakmur Tbk", sector: "Properti", ownership: "Pengembang kawasan Rancamaya, terafiliasi dengan sayap bisnis Sinar Mas.", kepemilikan_persen: "Afiliasi Properti", sejarah: "Pengembang perumahan elit di Bogor.", tahun_masuk: "1995", broker_afiliasi: "DH", free_float: "30.0%", avg_up: "240", avg_down: "210", support: "200", resistance: "280", last_update: "8 Mei 2026" },
                    { ticker: "SMMA", company: "PT Sinar Mas Multiartha Tbk", sector: "Keuangan & Investasi", ownership: "Holding jasa keuangan grup Sinar Mas (induk BSIM, sekuritas, asuransi).", kepemilikan_persen: "Afiliasi Sinar Mas", sejarah: "Induk utama semua bisnis finansial grup.", tahun_masuk: "1995", broker_afiliasi: "DH", free_float: "45.0%", avg_up: "14500", avg_down: "13800", support: "13000", resistance: "16000", last_update: "8 Mei 2026" },
                    { ticker: "TKIM", company: "PT Pabrik Kertas Tjiwi Kimia Tbk", sector: "Manufaktur Produk Kertas", ownership: "Dikendalikan oleh APP Sinar Mas.", kepemilikan_persen: "59.6%", sejarah: "Pabrik kertas tertua Sinar Mas di Mojokerto.", tahun_masuk: "1990", broker_afiliasi: "CS, DH", free_float: "40.4%", avg_up: "7500", avg_down: "7200", support: "6800", resistance: "8500", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "thohir", 
                name: "Thohir Group", 
                desc: "Dinahkodai Garibaldi (Boy) Thohir dan Erick Thohir. Poros kekuatan di sektor batu bara (Adaro), otomotif, keuangan, dan media.", 
                stocks: [ 
                    { ticker: "ADRO", company: "PT Adaro Energy Indonesia Tbk", sector: "Pertambangan (Batu Bara)", ownership: "Boy Thohir tergabung dalam konsorsium pengendali.", kepemilikan_persen: "6.18% (Pribadi)", sejarah: "Konsorsium Boy, TP Rachmat, & Edwin S mengambil alih aset Adaro dan membesarkannya paska krisis.", tahun_masuk: "2005", broker_afiliasi: "RX, AK, CS", free_float: "42.5%", avg_up: "2850", avg_down: "2700", support: "2600", resistance: "3100", last_update: "8 Mei 2026" }, 
                    { ticker: "BFIN", company: "PT BFI Finance Indonesia Tbk", sector: "Pembiayaan / Multifinance", ownership: "Konsorsium Trinugraha Capital (Boy Thohir & Jerry Ng) mengendalikan.", kepemilikan_persen: "48.1%", sejarah: "Diakuisisi Boy Thohir dan partner untuk membangun ekosistem kredit otomotif yang solid.", tahun_masuk: "2021", broker_afiliasi: "AK, RX", free_float: "40.3%", avg_up: "1050", avg_down: "980", support: "950", resistance: "1200", last_update: "8 Mei 2026" },
                    { ticker: "MDKA", company: "PT Merdeka Copper Gold Tbk", sector: "Pertambangan (Emas & Tembaga)", ownership: "Boy Thohir beraliansi dengan grup Saratoga.", kepemilikan_persen: "7.3%", sejarah: "Tambang emas di Banyuwangi (Tujuh Bukit) yang dikembangkan dari nol hingga produksi sukses.", tahun_masuk: "2015", broker_afiliasi: "RX, KZ, AK", free_float: "45.2%", avg_up: "2450", avg_down: "2300", support: "2200", resistance: "2700", last_update: "8 Mei 2026" },
                    { ticker: "GOTO", company: "PT GoTo Gojek Tokopedia Tbk", sector: "Teknologi", ownership: "Boy Thohir bertindak sebagai komisaris dan pemegang saham awal.", kepemilikan_persen: "Minoritas / Founder", sejarah: "Boy Thohir menjadi salah satu penyokong awal Gojek jauh sebelum merger dengan Tokopedia.", tahun_masuk: "2015", broker_afiliasi: "CC, PD, YP", free_float: "65.1%", avg_up: "68", avg_down: "62", support: "58", resistance: "80", last_update: "8 Mei 2026" },
                    { ticker: "TRIM", company: "PT Trimegah Sekuritas Indonesia Tbk", sector: "Keuangan & Sekuritas", ownership: "Boy Thohir mengakuisisi dan mengendalikan langsung.", kepemilikan_persen: "34.6%", sejarah: "Dibeli untuk memperkuat instrumen investasi dan aksi korporasi pasar modal grup Thohir.", tahun_masuk: "2022", broker_afiliasi: "LG, YP", free_float: "42.1%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "AADI", company: "PT Adaro Andalan Indonesia Tbk", sector: "Pertambangan (Batu Bara Termal)", ownership: "Spin-off dari ADRO, Boy Thohir memegang kendali operasional dan porsi besar.", kepemilikan_persen: "Konsorsium Adaro", sejarah: "Spin-off batu bara termal dari ADRO untuk memenuhi standar ESG global.", tahun_masuk: "2024", broker_afiliasi: "RX, AK", free_float: "30.0%", avg_up: "5200", avg_down: "4900", support: "4800", resistance: "5600", last_update: "8 Mei 2026" },
                    { ticker: "ABBA", company: "PT Mahaka Media Tbk", sector: "Media & Hiburan", ownership: "Didirikan oleh Erick Thohir (Mahaka Group).", kepemilikan_persen: "Mayoritas (Mahaka)", sejarah: "Grup media cetak, radio, dan agensi bentukan Erick Thohir.", tahun_masuk: "2002", broker_afiliasi: "YP", free_float: "40.0%", avg_up: "85", avg_down: "75", support: "70", resistance: "95", last_update: "8 Mei 2026" }, 
                    { ticker: "ADMR", company: "PT Adaro Minerals Indonesia Tbk", sector: "Pertambangan (Batu Bara Metalurgi)", ownership: "Anak usaha grup Adaro di mana Boy Thohir menjabat manajemen kunci.", kepemilikan_persen: "68.5% (via ADRO)", sejarah: "Tambang batu bara kokas (metallurgical coal) yang di IPO-kan Adaro.", tahun_masuk: "2022", broker_afiliasi: "RX, AK", free_float: "31.5%", avg_up: "1450", avg_down: "1380", support: "1300", resistance: "1600", last_update: "8 Mei 2026" },
                    { ticker: "EMAS", company: "PT Merdeka Gold Resources  Tbk (Via Afiliasi)", sector: "Pertambangan", ownership: "Boy Thohir terafiliasi secara pribadi di bisnis tambang emas ekosistem Merdeka.", kepemilikan_persen: "Afiliasi", sejarah: "Manuver investasi personal Boy Thohir di sektor resource.", tahun_masuk: "2020", broker_afiliasi: "RX", free_float: "45.0%", avg_up: "2450", avg_down: "2300", support: "2200", resistance: "2700", last_update: "8 Mei 2026" },
                    { ticker: "ESSA", company: "PT Surya Esa Perkasa Tbk", sector: "Manufaktur Kimia Dasar", ownership: "Boy Thohir memegang porsi saham strategis bersama T.P. Rachmat.", kepemilikan_persen: "Minoritas Strategis", sejarah: "Pabrik Amonia andalan yang didirikan bersama TP Rachmat.", tahun_masuk: "2012", broker_afiliasi: "RX, AK", free_float: "40.0%", avg_up: "850", avg_down: "780", support: "750", resistance: "950", last_update: "8 Mei 2026" }, 
                    { ticker: "MARI", company: "PT Mahaka Radio Integra Tbk", sector: "Media & Hiburan", ownership: "Bagian dari ekosistem Mahaka (Radio Jak FM, Gen FM).", kepemilikan_persen: "Mayoritas (Mahaka)", sejarah: "Pusat jaringan radio anak muda terbesar grup Mahaka.", tahun_masuk: "2016", broker_afiliasi: "YP", free_float: "30.0%", avg_up: "51", avg_down: "50", support: "50", resistance: "55", last_update: "8 Mei 2026" },
                    { ticker: "MAYA", company: "PT Bank Mayapada Internasional Tbk", sector: "Perbankan", ownership: "Tercatat Dato' Sri Tahir, namun terdapat afiliasi strategis finansial (NAYA/MAYA cross investment).", kepemilikan_persen: "Kemitraan", sejarah: "Kemitraan bisnis antara grup Thohir dan Tahir.", tahun_masuk: "2020-an", broker_afiliasi: "PD", free_float: "15.0%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "MBMA", company: "PT Merdeka Battery Materials Tbk", sector: "Material Baterai & Nikel", ownership: "Boy Thohir merupakan salah satu pilar pengendali ekosistem MDKA/MBMA.", kepemilikan_persen: "Afiliasi Merdeka", sejarah: "Bisnis hilirisasi nikel dari MDKA.", tahun_masuk: "2023", broker_afiliasi: "RX, AK", free_float: "15.0%", avg_up: "580", avg_down: "540", support: "500", resistance: "650", last_update: "8 Mei 2026" },
                    { ticker: "MPRO", company: "PT Maha Properti Indonesia Tbk", sector: "Properti", ownership: "Dikendalikan oleh keluarga Dato' Sri Tahir (Mayapada), terkait afiliasi proyek.", kepemilikan_persen: "Kemitraan Properti", sejarah: "Manuver gabungan properti grup Mayapada dan mitra Thohir.", tahun_masuk: "2018", broker_afiliasi: "YP", free_float: "20.0%", avg_up: "160", avg_down: "140", support: "130", resistance: "180", last_update: "8 Mei 2026" },
                    { ticker: "PALM", company: "PT Provident Investasi Bersama Tbk", sector: "Perusahaan Investasi", ownership: "Kendaraan investasi Winato Kartono yang sangat erat bermitra dengan Boy Thohir.", kepemilikan_persen: "Kemitraan Provident", sejarah: "Holding investasi yang sering sejalan dengan aksi korporasi Boy Thohir.", tahun_masuk: "2012", broker_afiliasi: "AK", free_float: "40.0%", avg_up: "480", avg_down: "440", support: "420", resistance: "550", last_update: "8 Mei 2026" },
                    { ticker: "SONA", company: "PT Sona Topas Tourism Industry Tbk", sector: "Pariwisata & Ritel", ownership: "Terkait dengan portofolio investasi dan ritel bebas bea afiliasi grup.", kepemilikan_persen: "Afiliasi", sejarah: "Ritel duty-free airport milik mitra strategis grup.", tahun_masuk: "1990", broker_afiliasi: "YP", free_float: "20.0%", avg_up: "3800", avg_down: "3500", support: "3200", resistance: "4200", last_update: "8 Mei 2026" },
                    { ticker: "WOMF", company: "PT Wahana Ottomitra Multiartha Tbk", sector: "Pembiayaan Otomotif", ownership: "Grup Thohir (Boy Thohir) mengakuisisi porsi saham sebagai bagian ekspansi otomotif (Wahana).", kepemilikan_persen: "Afiliasi Wahana", sejarah: "Leasing motor Honda yang dibesarkan jaringan dealer Wahana (Grup Thohir).", tahun_masuk: "1990-an", broker_afiliasi: "YP", free_float: "30.0%", avg_up: "380", avg_down: "350", support: "320", resistance: "420", last_update: "8 Mei 2026" }
                ] 
            },
            { 
                id: "triputra", 
                name: "Triputra Group", 
                desc: "Theodore Permadi (TP) Rachmat. Agribisnis, manufaktur, logistik.", 
                stocks: [ 
                    { ticker: "ASLC", company: "PT Autopedia Sukses Lestari Tbk", sector: "Perdagangan Otomotif", ownership: "Anak usaha Grup Triputra (Caroline.id & JBA).", kepemilikan_persen: "70.5% (via ASSA)", sejarah: "Balai lelang dan marketplace mobil bekas digital milik ASSA.", tahun_masuk: "2022", broker_afiliasi: "AK, RX", free_float: "29.5%", avg_up: "125", avg_down: "115", support: "100", resistance: "145", last_update: "8 Mei 2026" }, 
                    { ticker: "ASSA", company: "PT Adi Sarana Armada Tbk", sector: "Transportasi & Logistik", ownership: "Dikendalikan oleh TP Rachmat (Rental & Anteraja).", kepemilikan_persen: "Mayoritas (Triputra)", sejarah: "Bisnis rental mobil corporate terbesar yang berekspansi ke logistik (AnterAja).", tahun_masuk: "2012", broker_afiliasi: "AK, RX", free_float: "45.0%", avg_up: "850", avg_down: "780", support: "750", resistance: "950", last_update: "8 Mei 2026" }, 
                    { ticker: "DRMA", company: "PT Dharma Polimetal Tbk", sector: "Manufaktur Otomotif", ownership: "Kendaraan lini manufaktur suku cadang Triputra.", kepemilikan_persen: "Mayoritas (Triputra)", sejarah: "Pabrik komponen otomotif andalan Triputra.", tahun_masuk: "2021", broker_afiliasi: "AK", free_float: "20.0%", avg_up: "1150", avg_down: "1050", support: "980", resistance: "1300", last_update: "8 Mei 2026" }, 
                    { ticker: "DSNG", company: "PT Dharma Satya Nusantara Tbk", sector: "Agrikultur", ownership: "Grup Triputra dan Ometraco memegang saham strategis.", kepemilikan_persen: "Afiliasi TP Rachmat", sejarah: "Pabrik perkayuan dan sawit andalan kolaborasi TP Rachmat & Subianto.", tahun_masuk: "2013", broker_afiliasi: "AK, PD", free_float: "35.0%", avg_up: "680", avg_down: "620", support: "580", resistance: "750", last_update: "8 Mei 2026" }, 
                    { ticker: "ESSA", company: "PT Surya Esa Perkasa Tbk", sector: "Kimia & Amonia", ownership: "TP Rachmat adalah salah satu pendiri dan pemilik saham terbesar.", kepemilikan_persen: "Konsorsium TP Rachmat", sejarah: "Pabrik Amonia di Sulawesi yang dibangun TP Rachmat bersama Boy Thohir.", tahun_masuk: "2012", broker_afiliasi: "AK, RX", free_float: "40.0%", avg_up: "850", avg_down: "780", support: "750", resistance: "950", last_update: "8 Mei 2026" },
                    { ticker: "KMTR", company: "PT Kirana Megatara Tbk", sector: "Agrikultur (Karet)", ownership: "Dikendalikan oleh grup Triputra, produsen karet remah terbesar.", kepemilikan_persen: "Mayoritas (Triputra)", sejarah: "Produsen karet spesialis ban terkemuka dunia.", tahun_masuk: "2017", broker_afiliasi: "AK", free_float: "20.0%", avg_up: "280", avg_down: "250", support: "230", resistance: "320", last_update: "8 Mei 2026" },
                    { ticker: "TAPG", company: "PT Triputra Agro Persada Tbk", sector: "Agrikultur", ownership: "TP Rachmat dan keluarga Subianto memegang kendali utama.", kepemilikan_persen: "Mayoritas (Triputra)", sejarah: "Kendaraan utama bisnis sawit milik grup Triputra.", tahun_masuk: "2021", broker_afiliasi: "AK, CS", free_float: "15.0%", avg_up: "650", avg_down: "580", support: "540", resistance: "750", last_update: "8 Mei 2026" } 
                ] 
            }
        ];

        // --- FUNDAMENTAL DATA ---
        const fundaRealDB = {
            "BBCA": { 
                rev: [79.0, 87.9, 99.3, 112.4, 125.0, 138.5, 59.2], cogs: [0, 0, 0, 0, 0, 0, 0], 
                net: [27.1, 31.4, 40.7, 48.6, 54.5, 61.2, 26.5], asset: [1075.6, 1228.3, 1314.7, 1408.3, 1512.4, 1630.0, 1650.2], 
                eq: [184.7, 202.8, 221.5, 242.0, 265.1, 288.5, 305.1],
                interest: [10.5, 9.8, 11.2, 12.5, 14.1, 15.5, 6.8], tax: [6.1, 7.2, 9.5, 11.4, 12.8, 14.5, 6.2],
                fcf: [25.4, 30.1, 38.5, 45.2, 51.0, 58.4, 25.1], divYield: [2.5, 2.8, 3.1, 3.8, 4.5, 4.8, 5.0],
                mos: 15.2, zscore: 4.5
            },
            "BBRI": { 
                rev: [116.9, 143.5, 163.7, 185.3, 201.5, 220.1, 95.4], cogs: [0, 0, 0, 0, 0, 0, 0], 
                net: [18.6, 32.2, 51.4, 60.4, 65.2, 70.5, 30.1], asset: [1511.8, 1678.1, 1865.6, 1965.0, 2085.1, 2210.3, 2245.5], 
                eq: [199.9, 288.7, 299.3, 316.5, 335.2, 355.8, 362.4],
                interest: [35.2, 32.1, 36.5, 40.2, 45.5, 52.1, 23.5], tax: [4.2, 7.5, 12.1, 14.5, 15.8, 17.1, 7.5],
                fcf: [12.5, 28.4, 45.5, 55.1, 60.2, 65.8, 28.5], divYield: [3.0, 3.5, 4.2, 5.5, 6.5, 7.0, 7.2],
                mos: 22.1, zscore: 3.8
            },
            "BMRI": { 
                rev: [106.8, 119.5, 135.2, 153.1, 168.5, 185.2, 79.5], cogs: [0, 0, 0, 0, 0, 0, 0], 
                net: [17.1, 28.0, 41.2, 55.1, 60.5, 66.8, 28.5], asset: [1429.3, 1632.8, 1992.5, 2174.2, 2350.5, 2515.2, 2550.8], 
                eq: [193.8, 205.4, 228.0, 254.5, 275.2, 301.5, 310.2],
                interest: [25.1, 22.5, 25.8, 30.1, 35.5, 40.2, 18.5], tax: [4.0, 6.5, 9.8, 13.1, 14.5, 16.0, 6.8],
                fcf: [15.2, 25.1, 38.5, 50.2, 55.4, 61.5, 26.5], divYield: [3.5, 4.0, 4.8, 5.5, 6.2, 6.5, 6.8],
                mos: 20.1, zscore: 3.6
            },
            "TLKM": { 
                rev: [136.5, 143.2, 147.3, 149.2, 155.1, 162.5, 68.2], cogs: [(95.5), (96.2), (102.1), (103.5), (107.2), (112.5), (48.1)], 
                net: [20.8, 24.8, 20.7, 24.5, 25.8, 27.2, 11.5], asset: [246.9, 277.2, 275.2, 287.5, 305.2, 315.8, 320.1], 
                eq: [120.9, 141.5, 149.2, 156.4, 165.2, 172.5, 175.4],
                interest: [4.5, 4.2, 4.8, 5.1, 5.5, 5.8, 2.5], tax: [6.5, 7.8, 6.5, 7.5, 7.8, 8.2, 3.5],
                fcf: [18.5, 22.1, 18.5, 21.5, 23.2, 24.5, 10.2], divYield: [4.5, 4.8, 4.5, 4.8, 5.2, 5.5, 5.6],mos: 25.5, zscore: 4.2
            },
            "ASII": { 
                rev: [175.0, 233.5, 301.4, 316.6, 320.1, 328.5, 110.2], cogs: [(138.0), (181.6), (232.0), (245.2), (250.4), (256.1), (85.4)], 
                net: [16.1, 20.2, 28.9, 33.8, 30.5, 32.1, 12.5], asset: [338.2, 367.3, 413.3, 445.6, 460.2, 485.1, 492.0], 
                eq: [195.4, 215.6, 242.0, 250.4, 265.1, 280.2, 285.5],
                interest: [3.5, 3.8, 4.2, 4.5, 5.1, 5.5, 2.4], tax: [4.5, 5.8, 8.5, 10.1, 9.5, 10.2, 4.1],
                fcf: [12.5, 15.4, 22.5, 26.5, 24.1, 25.8, 10.5], divYield: [4.0, 4.5, 5.5, 6.5, 6.8, 7.1, 7.5],
                mos: 30.2, zscore: 3.9
            },
            "INDF": { 
                rev: [81.7, 99.3, 110.8, 112.5, 118.5, 125.4, 52.1], cogs: [(54.9), (66.5), (76.8), (77.5), (80.2), (84.5), (35.2)], 
                net: [6.4, 7.6, 8.0, 8.1, 8.5, 9.2, 4.0], asset: [163.1, 179.3, 180.4, 186.5, 195.2, 205.1, 210.5], 
                eq: [79.1, 86.6, 90.2, 95.4, 102.5, 110.2, 115.4],
                interest: [2.5, 2.8, 3.1, 3.4, 3.8, 4.2, 1.8], tax: [2.1, 2.5, 2.8, 2.9, 3.1, 3.5, 1.5],
                fcf: [5.2, 6.1, 6.5, 6.8, 7.2, 8.0, 3.5], divYield: [3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.5],
                mos: 18.5, zscore: 4.5
            },
           "ADRO": { 
                rev: [38.5, 59.5, 122.5, 105.4, 98.5, 102.4, 42.5], cogs: [(28.5), (35.2), (52.1), (60.5), (58.2), (61.5), (25.1)], 
                net: [2.1, 14.5, 45.2, 28.5, 25.1, 26.5, 11.2], asset: [95.2, 110.5, 160.2, 155.4, 162.5, 170.1, 175.2], 
                eq: [55.2, 65.1, 105.2, 110.5, 115.2, 122.5, 128.4],
                interest: [1.2, 1.5, 2.1, 2.5, 2.8, 3.1, 1.4], tax: [0.8, 4.5, 14.5, 9.2, 8.1, 8.5, 3.8],
                fcf: [1.5, 12.1, 40.5, 25.2, 22.1, 23.5, 10.1], divYield: [5.5, 8.5, 12.5, 15.2, 18.5, 20.1, 22.5],
                mos: 45.2, zscore: 5.1
            },
            "BREN": { 
                rev: [6.5, 7.2, 8.1, 9.5, 10.8, 12.5, 5.5], cogs: [(2.1), (2.3), (2.5), (2.8), (3.1), (3.5), (1.5)], 
                net: [1.2, 1.5, 1.8, 2.2, 2.6, 3.1, 1.4], asset: [35.2, 38.5, 45.1, 52.4, 60.5, 68.2, 72.1], 
                eq: [15.2, 18.5, 22.1, 28.5, 35.2, 42.1, 45.5],
                interest: [0.8, 0.9, 1.1, 1.3, 1.5, 1.8, 0.8], tax: [0.4, 0.5, 0.6, 0.8, 0.9, 1.1, 0.5],
                fcf: [1.0, 1.2, 1.5, 1.8, 2.1, 2.5, 1.2], divYield: [0.5, 0.8, 1.0, 1.2, 1.5, 1.8, 2.0],
                mos: 5.5, zscore: 2.8
            },
            "AMMN": { 
                rev: [8.5, 12.4, 15.2, 28.5, 35.2, 42.1, 18.5], cogs: [(4.2), (5.5), (6.8), (12.5), (15.2), (18.5), (8.1)], 
                net: [1.5, 2.8, 3.5, 7.2, 9.5, 12.1, 5.2], asset: [45.2, 55.1, 75.2, 95.4, 115.2, 135.5, 145.2], 
                eq: [25.2, 32.1, 45.5, 65.2, 85.1, 105.2, 115.5],
                interest: [0.5, 0.8, 1.2, 2.1, 2.8, 3.5, 1.5], tax: [0.5, 0.9, 1.1, 2.2, 3.1, 3.8, 1.6],
                fcf: [1.1, 2.2, 2.8, 6.5, 8.2, 10.5, 4.5], divYield: [0.0, 0.0, 0.5, 1.5, 2.5, 3.5, 4.2],
                mos: 12.1, zscore: 4.0
            }
        };

        function generateFunda(ticker, sector) {
            if(fundaRealDB[ticker]) return fundaRealDB[ticker];
            
            let seed = 0;
            for(let i=0; i<ticker.length; i++) seed += ticker.charCodeAt(i);
            
            const isBank = sector.includes("Perbankan");
            let baseAsset = (seed % 150) * 1.5 + 2; 
            let revRatio = 0.4 + ((seed % 20)/100);
            
            if(isBank) { baseAsset *= 8; revRatio = 0.06; }
            
            let rev = [], cogs = [], net = [], asset = [], eq = [], interest = [], tax = [], fcf = [], divYield = [];
            let curAsset = baseAsset;
            let curRev = curAsset * revRatio;
            
            let mos = (10 + (seed % 35)).toFixed(1);
            let zscore = (1.5 + (seed % 30) / 10).toFixed(2);
            
            for(let yr=0; yr<7; yr++) {
                let g = 1 + (((seed + yr) % 20) - 5) / 100;
                if(yr===0) g = 1; 
                if(yr===1) g = 1.15;
                if(yr===6) g = 0.4;

                curAsset *= (yr===6 ? 1.03 : (1 + ((seed%8)/100)));
                curRev *= g;
                
                let mrg = 0.08 + ((seed % 15)/100); 
                let curNet = curRev * mrg;
                let curCogs = isBank ? 0 : (curRev * (1 - mrg - 0.15));
                
                let curTax = curNet * 0.22 / 0.78; 
                let curInterest = isBank ? (curRev * 0.2) : (curAsset * 0.03);
                let curFcf = curNet + (curAsset * 0.05) - (curAsset * 0.08); 
                if(curFcf < 0) curFcf = curNet * 0.5; 
                let curDiv = isBank ? 3.5 + (seed%3) : 2.0 + (seed%4);
                
                rev.push(curRev.toFixed(1));
                cogs.push(isBank ? 0 : "-" + curCogs.toFixed(1));
                net.push(curNet.toFixed(1));
                asset.push(curAsset.toFixed(1));
                eq.push((curAsset * (isBank ? 0.15 : 0.45)).toFixed(1));
                
                interest.push(curInterest.toFixed(1));
                tax.push(curTax.toFixed(1));
                fcf.push(curFcf.toFixed(1));
                divYield.push(curDiv.toFixed(1));
            }
            return { rev, cogs, net, asset, eq, interest, tax, fcf, divYield, mos, zscore };
        }

        // --- APP STATE & INITIALIZATION ---
        let history = JSON.parse(localStorage.getItem('calc_history')) || [];
        let journal = JSON.parse(localStorage.getItem('ewoks_journal')) || [];
        let kongloChartRendered = false;
        let fundaCharts = {}; 
        let watchlist = JSON.parse(localStorage.getItem('ewoks_watchlist')) || [];

        // --- BACKUP & RESTORE DATA (JSON) ---
        function exportBackup() {
            const dataToExport = {
                journal: JSON.parse(localStorage.getItem('ewoks_journal')) || [],
                watchlist: JSON.parse(localStorage.getItem('ewoks_watchlist')) || [],
                history: JSON.parse(localStorage.getItem('calc_history')) || [],
                macroNotes: localStorage.getItem('ewoks_macro_notes') || ''
            };
            const jsonStr = JSON.stringify(dataToExport, null, 2);
            const blob = new Blob([jsonStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Ewoks_Backup_${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast("Backup berhasil diunduh!", "success");
        }

        function importBackup(e) {
            const file = e.target.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = function(event) {
                try {
                    const data = JSON.parse(event.target.result);
                    if(data.journal) localStorage.setItem('ewoks_journal', JSON.stringify(data.journal));
                    if(data.watchlist) localStorage.setItem('ewoks_watchlist', JSON.stringify(data.watchlist));
                    if(data.history) localStorage.setItem('calc_history', JSON.stringify(data.history));
                    if(data.macroNotes) localStorage.setItem('ewoks_macro_notes', data.macroNotes);
                    alert('Data berhasil di-import dan disinkronkan!');
                    location.reload();
                } catch(err) {
                    showToast('Gagal memproses file. Pastikan file JSON formatnya benar.', 'error');
                }
            };
            reader.readAsText(file);
        }

        /** Konteks halaman statis (GitHub Pages): samakan dengan atribut data-page pada <body>. */
        class EwoksSiteContext {
            static get page() {
                return document.body?.getAttribute('data-page') || 'home';
            }
            static is(pageKey) {
                return EwoksSiteContext.page === pageKey;
            }
        }

        /** Navigasi multi-halaman: penanda aktif dari data-page pada <body> */
        function highlightNavForCurrentPage() {
            const page = EwoksSiteContext.page;
            document.querySelectorAll('.nav-link.active, .mobile-nav-btn.active, .dropdown-item.active').forEach((el) => el.classList.remove('active'));

            const edu = ['edukasi', 'fixed-income', 'bandarmology-edu', 'quiz'];
            const tools = ['watchlist', 'jurnal', 'pensiun', 'kalkulator', 'bandar'];
            const db = ['konglo', 'broker'];

            if (page === 'home') {
                document.getElementById('nav-home')?.classList.add('active');
                document.getElementById('m-nav-home')?.classList.add('active');
            }
            if (edu.includes(page)) {
                document.getElementById('nav-edu-parent')?.classList.add('active');
                document.getElementById('m-nav-edu-parent')?.classList.add('active');
                document.getElementById('nav-' + page)?.classList.add('active');
            }
            if (tools.includes(page)) {
                document.getElementById('nav-tools-parent')?.classList.add('active');
                document.getElementById('m-nav-tools')?.classList.add('active');
                document.getElementById('nav-' + page)?.classList.add('active');
            }
            if (db.includes(page)) {
                document.getElementById('nav-database-parent')?.classList.add('active');
                document.getElementById('m-nav-database-parent')?.classList.add('active');
                document.getElementById('nav-' + page)?.classList.add('active');
            }
        }

// --- THEME & UI ---
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode-override');
            const isDark = document.body.classList.contains('dark-mode-override');
            document.getElementById('theme-icon').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            document.getElementById('theme-icon-m').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            
            localStorage.setItem('ewoks_theme', isDark ? 'dark' : 'light');
            
            const __tvw = document.getElementById('tv-chart-wrapper');
            if(__tvw && !__tvw.classList.contains('hide') && window.tvWidgetInstance) {
                const currentTicker = window.currentTickerView || "IDX:COMPOSITE";
                openTVChart(currentTicker); 
            }
        }

        function checkTheme() {
            if(localStorage.getItem('ewoks_theme') === 'dark') {
                toggleDarkMode();
            }
        }

        function showPage(pageId) {
            const routes = {
                home: 'index.html',
                watchlist: 'watchlist.html',
                jurnal: 'jurnal.html',
                quiz: 'quiz.html',
                'fixed-income': 'fixed-income.html',
                'bandarmology-edu': 'bandarmology-edu.html',
                pensiun: 'pensiun.html',
                edukasi: 'edukasi.html',
                kalkulator: 'kalkulator.html',
                bandar: 'bandar.html',
                konglo: 'konglo.html',
                broker: 'broker.html'
            };
            const url = routes[pageId];
            if (url) window.location.href = url;
        }

        window.tvWidgetInstance = null;
        window.currentTickerView = "";
        
        function openTVChart(ticker) {
            if (!document.getElementById('chart-active-ticker-input') || !document.getElementById('tv-chart-container')) {
                return;
            }
            const symbol = ticker.includes("IDX:") ? ticker : `IDX:${ticker}`;
            window.currentTickerView = symbol; 
            
            document.getElementById('chart-active-ticker-input').value = ticker.replace("IDX:", "");

            if(document.getElementById('tv-chart-wrapper')) {
                document.getElementById('tv-chart-wrapper').classList.remove('hide');
            }

            const isDark = document.body.classList.contains('dark-mode-override');
            
            document.getElementById('tv-chart-container').innerHTML = '';
            
            window.tvWidgetInstance = new TradingView.widget({
              "autosize": true,
              "symbol": symbol,
              "interval": "D", 
              "timezone": "Asia/Jakarta",
              "theme": isDark ? "dark" : "light",
              "style": "1",
              "locale": "id",
              "enable_publishing": false,
              "backgroundColor": isDark ? "#0f172a" : "rgba(255, 255, 255, 1)",
              "gridColor": isDark ? "#1e293b" : "rgba(241, 245, 249, 1)",
              "hide_top_toolbar": false, 
              "hide_legend": false,
              "save_image": false,
              "container_id": "tv-chart-container",
              "show_popup_button": true,
              "popup_width": "1000",
              "popup_height": "650",
              "withdateranges": true,
              "allow_symbol_change": true,
              "details": true,
              "hotlist": true,
              "calendar": true,
              "hide_side_toolbar": false
            });
            
            if(EwoksSiteContext.is('watchlist')){
                const headerOffset = 100;
                const elementPosition = document.getElementById('tv-chart-wrapper').getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }

        // --- LIVE DATA & NEWS (WITH GOOGLE SHEETS FALLBACK) ---
        async function fetchNews() {
            const container = document.getElementById('news-container');
            if (!container) return;
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.cnbcindonesia.com/market/rss');
                const data = await res.json();
                
                if(data.status === 'ok') {
                    const keywords = ['IHSG', 'saham', 'asing', 'bunga', 'fed', 'investor', 'emiten', 'rupiah', 'BI'];
                    const filteredItems = data.items.filter(item => {
                        const titleLower = item.title.toLowerCase();
                        return keywords.some(kw => titleLower.includes(kw.toLowerCase()));
                    });

                    const itemsToShow = filteredItems.length > 0 ? filteredItems.slice(0, 5) : data.items.slice(0, 5);

                    container.innerHTML = itemsToShow.map(item => `
                        <a href="${item.link}" target="_blank" class="block p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors bg-white shadow-sm">
                            <p class="text-[10px] text-blue-500 font-black mb-1 uppercase tracking-widest">${item.pubDate.split(' ')[0]}</p>
                            <h4 class="text-xs md:text-sm font-bold text-slate-800 line-clamp-2">${item.title}</h4>
                        </a>
                    `).join('');
                } else {
                    throw new Error("API Limit Reached");
                }
            } catch (e) {
                container.innerHTML = `
                    <a href="https://www.cnbcindonesia.com/market" target="_blank" class="block p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors bg-white shadow-sm">
                        <p class="text-[10px] text-blue-500 font-black mb-1 uppercase tracking-widest">HARI INI</p>
                        <h4 class="text-xs md:text-sm font-bold text-slate-800">IHSG Diprediksi Menguat Terbatas di Tengah Penantian Rilis Data Inflasi AS</h4>
                    </a>
                    <a href="https://www.cnbcindonesia.com/market" target="_blank" class="block p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors bg-white shadow-sm mt-3">
                        <p class="text-[10px] text-blue-500 font-black mb-1 uppercase tracking-widest">HARI INI</p>
                        <h4 class="text-xs md:text-sm font-bold text-slate-800">Aksi Beli Bersih Asing Meningkat, Sektor Perbankan Jadi Incaran Utama Ritel</h4>
                    </a>
                `;
            }
        }

        async function fetchRealIHSG() {
            try {
                throw new Error("GSheet URL belum di-set, force fallback."); 
            } catch (error) {
                fetchLiveMarketData();
            }
        }

        function fetchLiveMarketData() {
            const ihsgEl = document.getElementById('ihsg-dash-live');
            const termIhsgEl = document.getElementById('terminal-ihsg');
            const seedEl = ihsgEl || termIhsgEl;
            if (!seedEl) return;

            let currentIHSG = parseFloat(seedEl.innerText.replace(/,/g, ''));
            if(isNaN(currentIHSG)) currentIHSG = 7350.25;

            const change = (Math.random() * 10) - 5;
            currentIHSG += change;

            const formattedIHSG = currentIHSG.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            if (ihsgEl) ihsgEl.innerText = formattedIHSG;
            if (termIhsgEl) termIhsgEl.innerText = formattedIHSG;

            if (ihsgEl) {
                ihsgEl.classList.add('scale-110');
                setTimeout(() => ihsgEl.classList.remove('scale-110'), 300);
            }

            if(change >= 0) {
                if (ihsgEl) ihsgEl.className = "stat-badge bg-emerald-100 text-emerald-700 transition-all duration-300";
                if(termIhsgEl) termIhsgEl.className = "font-black text-emerald-600 transition-all duration-300";
            } else {
                if (ihsgEl) ihsgEl.className = "stat-badge bg-rose-100 text-rose-700 transition-all duration-300";
                if(termIhsgEl) termIhsgEl.className = "font-black text-rose-600 transition-all duration-300";
            }

            const fgPointer = document.getElementById('fg-pointer');
            const fgText = document.getElementById('fg-text');
            const termSentiment = document.getElementById('terminal-sentiment');

            let fgValue = 50 + ((currentIHSG - 7300) / 10);
            if(fgValue < 0) fgValue = 0;
            if(fgValue > 100) fgValue = 100;

            if(fgPointer) fgPointer.style.left = `${fgValue}%`;

            if(fgText) {
                let statusText = "";
                let colorClass = "";
                if(fgValue < 25) { statusText = "EXTREME FEAR"; colorClass = "text-rose-600"; fgText.className = "text-[10px] font-black text-rose-600 transition-all duration-300"; }
                else if(fgValue < 45) { statusText = "FEAR"; colorClass = "text-rose-500"; fgText.className = "text-[10px] font-black text-rose-500 transition-all duration-300"; }
                else if(fgValue < 55) { statusText = "NEUTRAL"; colorClass = "text-amber-500"; fgText.className = "text-[10px] font-black text-amber-500 transition-all duration-300"; }
                else if(fgValue < 75) { statusText = "GREED"; colorClass = "text-emerald-500"; fgText.className = "text-[10px] font-black text-emerald-500 transition-all duration-300"; }
                else { statusText = "EXTREME GREED"; colorClass = "text-emerald-600"; fgText.className = "text-[10px] font-black text-emerald-600 transition-all duration-300"; }

                fgText.innerText = `${statusText} (${Math.round(fgValue)})`;
                if(termSentiment) {
                    termSentiment.innerText = statusText;
                    termSentiment.className = `text-xl md:text-2xl font-black ${colorClass}`;
                }
            }

            if(EwoksSiteContext.is('watchlist')) {
                 renderWatchlist(true);
            }
        }
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

        function formatAbbreviated(num) {
            if (num >= 1000000000) return (num / 1000000000).toFixed(2) + ' Miliar';
            if (num >= 1000000) return (num / 1000000).toFixed(2) + ' Juta';
            if (num >= 1000) return (num / 1000).toFixed(1) + ' Ribu';
            return Math.round(num).toLocaleString('id-ID');
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

        // --- KUIS PROFIL RISIKO KOMPLEKS (30 PERTANYAAN) ---
        let quizAnswers = [];
        let currentQIndex = 0;
        let userData = { name: '', capital: 0, expense: 0 };

        // 30 Pertanyaan dibagi 3 Level (Dasar, Menengah, Lanjutan/Psikologi)
        const quizQuestions = [
            // LEVEL 1: Dasar & Tujuan
            { q: "Apa tujuan utama Anda berinvestasi di pasar modal?", opts: [{t: "Menjaga uang dari inflasi (Sangat Aman)", s: 1}, {t: "Mendapat dividen rutin & sedikit growth", s: 2}, {t: "Pertumbuhan aset eksponensial (Capital Gain)", s: 3}] },
            { q: "Berapa lama Anda berencana untuk TIDAK menarik dana investasi ini?", opts: [{t: "Kurang dari 1 tahun", s: 1}, {t: "1 sampai 5 tahun", s: 2}, {t: "Lebih dari 5 tahun", s: 3}] },
            { q: "Bagaimana tingkat pengetahuan Anda tentang instrumen keuangan saat ini?", opts: [{t: "Pemula (Hanya tahu deposito/tabungan)", s: 1}, {t: "Menengah (Paham reksa dana & obligasi)", s: 2}, {t: "Lanjut (Sudah trading saham menjanjikan/mandiri)", s: 3}] },
            { q: "Jika Anda diberi pilihan, skenario untung-rugi mana yang Anda pilih per tahun?", opts: [{t: "Untung 5% pasti, tanpa risiko turun", s: 1}, {t: "Untung 10%, tapi bisa turun 5%", s: 2}, {t: "Untung 25%, tapi siap jika turun 20%", s: 3}] },
            { q: "Apa sumber dana yang Anda gunakan untuk investasi ini?", opts: [{t: "Uang dapur/kebutuhan sehari-hari (BAHAYA)", s: 1}, {t: "Tabungan yang mungkin dipakai 1 tahun ke depan", s: 2}, {t: "Uang dingin (Uang nganggur)", s: 3}] },
            { q: "Jika inflasi tiba-tiba naik drastis (Harga barang mahal), apa reaksi Anda?", opts: [{t: "Tarik semua investasi jadi uang tunai", s: 1}, {t: "Beralih ke Obligasi/Emas yang aman", s: 2}, {t: "Beli saham sektor konsumsi/energi pelindung nilai", s: 3}] },
            { q: "Apakah Anda siap jika nilai portofolio Anda tidak tumbuh (stagnan) selama 2 tahun?", opts: [{t: "Sangat tidak siap, mending deposito", s: 1}, {t: "Kecewa, tapi akan menunggu", s: 2}, {t: "Biasa saja, fokus pada nilai jangka panjang", s: 3}] },
            { q: "Berapa persen dari total kekayaan Anda yang akan dialokasikan ke pasar modal?", opts: [{t: "Kurang dari 10%", s: 1}, {t: "10% - 30%", s: 2}, {t: "Lebih dari 30%", s: 3}] },
            { q: "Apa yang Anda lakukan saat menerima bonus tahunan/THR?", opts: [{t: "Dibelanjakan semua", s: 1}, {t: "Ditabung di rekening biasa", s: 2}, {t: "Disuntikkan lagi ke portofolio investasi", s: 3}] },
            { q: "Seberapa sering Anda ingin memantau portofolio investasi Anda?", opts: [{t: "Setiap jam (Cemas)", s: 1}, {t: "Sebulan sekali", s: 2}, {t: "Setiap hari untuk cari peluang (Trading)", s: 3}] },
            
            // LEVEL 2: Skenario Menengah & Volatilitas
            { q: "Portofolio saham Anda tiba-tiba anjlok -15% dalam 3 hari karena krisis global. Apa tindakan Anda?", opts: [{t: "Panik dan Cut Loss semua", s: 1}, {t: "Diam dan berdoa harganya naik lagi", s: 2}, {t: "Evaluasi fundamental, jika masih bagus saya Average Down", s: 3}] },
            { q: "Anda membeli saham karena rekomendasi influencer, lalu saham tersebut disuspen bursa. Reaksi Anda?", opts: [{t: "Marah pada influencer tersebut", s: 1}, {t: "Menyesal dan kapok main saham", s: 2}, {t: "Jadikan pelajaran untuk wajib analisa (DYOR)", s: 3}] },
            { q: "Anda memegang obligasi (SBN) lalu suku bunga BI naik drastis. Apa dampaknya pada nilai SBN Anda?", opts: [{t: "Tidak tahu sama sekali", s: 1}, {t: "Nilai harga SBN di pasar sekunder akan turun", s: 3}, {t: "Nilainya tetap naik", s: 1}] },
            { q: "Saham unggulan (BBCA) turun -5% dalam sehari, sementara saham lapis 3 (Gorengan) naik +20%. Anda akan?", opts: [{t: "Jual BBCA, kejar saham gorengan (FOMO)", s: 1}, {t: "Tetap pegang BBCA, hindari gorengan", s: 2}, {t: "Serok BBCA lebih banyak karena diskon", s: 3}] },
            { q: "Manakah pernyataan yang paling mendeskripsikan strategi diversifikasi Anda?", opts: [{t: "All-in di 1 saham yang katanya pasti naik", s: 1}, {t: "Membeli 20 saham berbeda agar aman", s: 2}, {t: "Membagi modal di 3-5 saham beda sektor & ada porsi Reksadana", s: 3}] },
            { q: "Apa yang Anda pahami tentang 'Dividen Trap'?", opts: [{t: "Sesuatu yang menguntungkan", s: 1}, {t: "Perangkap harga turun tajam setelah Ex-Date dividen", s: 3}, {t: "Pajak dari dividen yang terlalu besar", s: 2}] },
            { q: "Anda melihat harga emas dunia sedang rekor tertinggi (All Time High). Keputusan Anda?", opts: [{t: "All-in beli Emas sekarang juga", s: 1}, {t: "Jual sebagian emas untuk Take Profit", s: 3}, {t: "Ikut beli sedikit karena takut tertinggal", s: 2}] },
            { q: "Seorang teman menawarkan robot trading yang menjamin profit 5% sebulan. Respon Anda?", opts: [{t: "Ikut, karena pasti untung", s: 1}, {t: "Pikir-pikir dulu", s: 2}, {t: "Tolak tegas, di investasi tidak ada hasil 'pasti' (Fix Return)", s: 3}] },
            { q: "Jika Anda mencapai target profit (TP) lebih cepat dari perkiraan (misal +15% dalam 2 hari), Anda akan?", opts: [{t: "Tahan terus karena merasa bisa +50%", s: 1}, {t: "Amankan profit parsial, naikkan titik Trailing Stop", s: 3}, {t: "Tanya orang lain di grup saham", s: 2}] },
            { q: "Apa indikator utama bagi Anda sebelum memutuskan membeli sebuah saham?", opts: [{t: "Feeling dan feeling", s: 1}, {t: "Berita bagus di media massa", s: 2}, {t: "Kombinasi valusi fundamental murah & teknikal yang valid", s: 3}] },

            // LEVEL 3: Lanjutan & Psikologi Trading
            { q: "Apa prinsip Anda mengenai 'Cut Loss'?", opts: [{t: "Pantang Cut Loss sebelum hijau", s: 1}, {t: "Hanya Cut Loss kalau butuh uang", s: 2}, {t: "Wajib Cut Loss jika harga jebol Support / melanggar Trading Plan", s: 3}] },
            { q: "Ketika terjadi Bear Market (Pasar Bearish), strategi terbaik menurut Anda?", opts: [{t: "Pensiun dari bursa saham", s: 1}, {t: "Tetap beli saham setiap hari", s: 2}, {t: "Perbanyak pegang Cash (Pasar Uang) tunggu momentum reversal", s: 3}] },
            { q: "Pahami skenario ini: Laba bersih perusahaan naik 50%, tapi harga sahamnya malah turun saat laporan rilis (Sell on News). Kenapa?", opts: [{t: "Bursa sedang error", s: 1}, {t: "Pasar sudah mengekspektasikan kenaikan tersebut jauh-jauh hari", s: 3}, {t: "Laporan keuangannya palsu", s: 2}] },
            { q: "Jika modal Anda Rp 10 Juta, dan Anda siap rugi maksimal Rp 100 ribu per trade (Risk 1%). Berapa persen Stop Loss yang ideal jika Anda all-in?", opts: [{t: "50%", s: 1}, {t: "10%", s: 2}, {t: "1% dari modal, atau atur Position Sizing (Lot) nya", s: 3}] },
            { q: "Apa yang membedakan seorang Investor dengan seorang Gambler (Penjudi) di bursa?", opts: [{t: "Investor pakai jas, gambler pakai kaos", s: 1}, {t: "Investor selalu menang, gambler sering kalah", s: 2}, {t: "Investor memiliki dasar analisis dan manajemen risiko yang terukur", s: 3}] },
            { q: "Anda menemukan saham dengan PER 2x (Sangat murah). Apa langkah selanjutnya sebelum membeli?", opts: [{t: "Langsung HAKA (Hajar Kanan) all in", s: 1}, {t: "Masuk ke watchlist", s: 2}, {t: "Cek laporan arus kas (CF) dan hutangnya (DER), pastikan bukan Value Trap", s: 3}] },
            { q: "Mitos atau Fakta: 'Saham Bluechip (BCA/BRI) tidak mungkin membuat Anda bangkrut'?", opts: [{t: "Fakta, karena perusahaannya besar", s: 1}, {t: "Mitos, jika beli di harga pucuk (Overvalued) tetap bisa nyangkut parah", s: 3}, {t: "Tergantung takdir", s: 2}] },
            { q: "Berapa rasio Risk : Reward (RRR) minimal yang Anda terima sebelum entry sebuah saham?", opts: [{t: "1 : 1 (Take profit 5%, Stop loss 5%)", s: 1}, {t: "0.5 : 1 (Take profit tipis, Stop loss dalam)", s: 1}, {t: "1 : 2 atau lebih (Risiko Rp 1, Potensi untung Rp 2)", s: 3}] },
            { q: "Anda melihat asing mencatatkan 'Net Sell' (Jual bersih) berturut-turut di saham yang Anda pegang. Reaksi Anda?", opts: [{t: "Abaikan, asing tidak penting", s: 1}, {t: "Langsung jual tanpa analisa", s: 2}, {t: "Waspada, cek level teknikal apakah ada distribusi masif (Bandarmologi)", s: 3}] },
            { q: "Apa prioritas utama Anda dalam karir investasi / trading Anda?", opts: [{t: "Cepat kaya dan beli lamborghini", s: 1}, {t: "Bisa pamer screenshot profit di sosmed", s: 1}, {t: "Survival (Bertahan hidup) dengan melindungi modal dari kerugian fatal", s: 3}] }
        ];

        function startComplexQuiz() {
            const nameInput = document.getElementById('qz-name').value.trim();
            const capInput = parseFloat(document.getElementById('qz-capital').value);
            const expInput = parseFloat(document.getElementById('qz-expense').value);

            if(!nameInput || isNaN(capInput) || isNaN(expInput) || capInput <= 0 || expInput <= 0) {
                showToast("Mohon isi Nama, Modal, dan Pengeluaran dengan benar (Angka > 0).", "error");
                return;
            }

            userData.name = nameInput;
            userData.capital = capInput;
            userData.expense = expInput;
            quizAnswers = [];
            currentQIndex = 0;

            document.getElementById('quiz-intro').classList.remove('active');
            document.getElementById('quiz-intro').classList.add('hidden');
            renderQuizQuestion();
        }

        function renderQuizQuestion() {
            const container = document.getElementById('quiz-dynamic-container');
            container.innerHTML = '';
            
            const qData = quizQuestions[currentQIndex];
            let levelLabel = "LEVEL 1: DASAR";
            if(currentQIndex >= 10) levelLabel = "LEVEL 2: MENENGAH";
            if(currentQIndex >= 20) levelLabel = "LEVEL 3: LANJUTAN";

            const progressPct = ((currentQIndex + 1) / quizQuestions.length) * 100;

            let html = `
                <div class="quiz-step active animate-[fadeIn_0.3s_ease-out]">
                    <div class="flex justify-between items-end mb-2">
                        <p class="text-[10px] font-black text-blue-500 uppercase tracking-widest">${levelLabel}</p>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pertanyaan ${currentQIndex + 1} / 30</p>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-1.5 mb-6">
                        <div class="bg-blue-500 h-1.5 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
                    </div>

                    <h3 class="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-tight">${qData.q}</h3>
                    
                    <div class="space-y-4">
                        ${qData.opts.map((opt, idx) => `
                            <button onclick="selectAnswer(${opt.s})" class="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50/50 font-semibold text-slate-700 transition-all shadow-sm flex items-start gap-3 group dark-mode-card">
                                <div class="w-6 h-6 shrink-0 rounded bg-slate-200 text-slate-500 flex items-center justify-center text-xs group-hover:bg-blue-500 group-hover:text-white transition-colors">${String.fromCharCode(65 + idx)}</div>
                                <span class="pt-0.5 leading-relaxed">${opt.t}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            container.innerHTML = html;
        }

        function selectAnswer(score) {
            quizAnswers.push(score);
            currentQIndex++;
            
            if(currentQIndex < quizQuestions.length) {
                renderQuizQuestion();
            } else {
                calculateComplexResult();
            }
        }

        function calculateComplexResult() {
            document.getElementById('quiz-dynamic-container').innerHTML = '';
            
            // 1. Calculate Score Profile
            const totalScore = quizAnswers.reduce((a, b) => a + b, 0);
            // Min 30, Max 90
            let profile = "";
            let desc = "";
            let icon = "";
            let classIcon = "";
            let baseAllo = {};

            if(totalScore <= 45) {
                profile = "KONSERVATIF (Aman & Stabil)";
                desc = `Halo ${userData.name}, Anda sangat memprioritaskan keamanan modal. Volatilitas pasar membuat Anda tidak nyaman. Prioritas Anda adalah melawan inflasi dengan instrumen yang dijamin.`;
                icon = '<i class="fas fa-shield-alt text-emerald-500"></i>';
                classIcon = "bg-emerald-100 shadow-emerald-100";
                baseAllo = { sbn: 60, rdp: 30, saham: 5, emas: 5 };
            } else if (totalScore <= 70) {
                profile = "MODERAT (Seimbang)";
                desc = `Halo ${userData.name}, Anda mencari pertumbuhan aset (Capital Gain) namun tetap logis dan tidak suka risiko hancur total. Anda toleran terhadap fluktuasi normal IHSG.`;
                icon = '<i class="fas fa-balance-scale text-blue-500"></i>';
                classIcon = "bg-blue-100 shadow-blue-100";
                baseAllo = { saham: 40, sbn: 30, rdp: 20, emas: 10 };
            } else {
                profile = "AGRESIF (Risk Taker / Growth Hunter)";
                desc = `Halo ${userData.name}, Anda paham mekanika bursa, manajemen risiko, dan siap dengan fluktuasi tinggi demi mengejar *compounding interest* maksimal di masa depan.`;
                icon = '<i class="fas fa-rocket text-rose-500"></i>';
                classIcon = "bg-rose-100 shadow-rose-100";
                baseAllo = { saham: 70, sbn: 15, rdp: 10, emas: 5 };
            }

            // 2. Calculate Financial Health (Emergency Fund)
            const emergencyRatio = userData.capital / userData.expense;
            let healthStatus = "";
            let healthWarning = "";

            if(emergencyRatio < 3) {
                healthStatus = "SANGAT BERISIKO";
                healthWarning = `<li class="p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl mb-3"><i class="fas fa-exclamation-triangle mr-2"></i><b>Dana Darurat Kurang!</b> Total investasi Anda (${formatNumber(userData.capital)}) tidak sampai 3x pengeluaran bulanan. <b>Kami paksa alokasi Cash/RDPU Anda diperbesar</b> agar Anda tidak terpaksa Cut Loss saham saat butuh uang mendadak.</li>`;
                // Override safety
                baseAllo.rdp += 30;
                baseAllo.saham = Math.max(0, baseAllo.saham - 20);
                baseAllo.sbn = Math.max(0, baseAllo.sbn - 10);
            } else if(emergencyRatio < 6) {
                healthStatus = "CUKUP AMAN";
                healthWarning = `<li class="p-3 bg-amber-50 text-amber-700 border border-amber-200 rounded-xl mb-3"><i class="fas fa-info-circle mr-2"></i><b>Dana Darurat Sedang.</b> Anda punya nafas ${emergencyRatio.toFixed(1)} bulan. Tetap sisihkan sebagian ke Reksa Dana Pasar Uang.</li>`;
            } else {
                healthStatus = "SANGAT SEHAT";
                healthWarning = `<li class="p-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl mb-3"><i class="fas fa-check-circle mr-2"></i><b>Keuangan Sangat Kuat.</b> Nafas finansial Anda >6 bulan. Anda bebas memaksimalkan instrumen agresif sesuai profil Anda.</li>`;
            }

            // Normalisasi Alokasi ke 100%
            let totalA = baseAllo.saham + baseAllo.sbn + baseAllo.rdp + baseAllo.emas;
            let finalSaham = Math.round((baseAllo.saham / totalA) * 100);
            let finalSbn = Math.round((baseAllo.sbn / totalA) * 100);
            let finalEmas = Math.round((baseAllo.emas / totalA) * 100);
            let finalRdp = 100 - (finalSaham + finalSbn + finalEmas);

            let alloHtml = healthWarning;
            if(finalSaham > 0) alloHtml += `<li>🔴 <b class="text-slate-900">${finalSaham}% Saham / ETF</b> (Pertumbuhan modal, dividen. Pilih Bluechip/Growth)</li>`;
            if(finalSbn > 0) alloHtml += `<li>🟡 <b class="text-slate-900">${finalSbn}% SBN / Obligasi Ritel</b> (Yield pasti 6-7% p.a, dijamin Negara)</li>`;
            if(finalRdp > 0) alloHtml += `<li>🟢 <b class="text-slate-900">${finalRdp}% Reksa Dana Pasar Uang / Deposito</b> (Sangat likuid, untuk dana darurat & peluru serok bawah)</li>`;
            if(finalEmas > 0) alloHtml += `<li>🟠 <b class="text-slate-900">${finalEmas}% Emas / Logam Mulia</b> (Safe haven, pelindung krisis makro)</li>`;

            document.getElementById('res-title').innerText = profile;
            document.getElementById('res-desc').innerText = desc;
            
            document.getElementById('res-icon').innerHTML = icon;
            document.getElementById('res-icon').className = `w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg ${classIcon}`;
            
            document.getElementById('res-allocation').innerHTML = alloHtml;
            document.getElementById('quiz-result').classList.remove('hidden');

            // Set global variable for certificate
            window.finalProfileResult = profile;
        }

        function resetQuiz() {
            userData = { name: '', capital: 0, expense: 0 };
            document.getElementById('qz-name').value = '';
            document.getElementById('qz-capital').value = '';
            document.getElementById('qz-expense').value = '';
            
            document.getElementById('quiz-result').classList.add('hidden');
            document.getElementById('quiz-intro').classList.remove('hidden');
            document.getElementById('quiz-intro').classList.add('active');
        }

        function generateCertificate() {
            const title = window.finalProfileResult || "KONSULTAN INVESTASI";
            const userName = userData.name.toUpperCase();
            const canvas = document.getElementById('certCanvas');
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0f172a'; // slate-900 
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = '#3b82f6'; // blue-500
            ctx.lineWidth = 10;
            ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

            ctx.fillStyle = '#1e293b'; // slate-800 
            ctx.fillRect(30, 30, canvas.width - 60, canvas.height - 60);

            ctx.fillStyle = '#f8fafc';
            ctx.textAlign = 'center';

            ctx.font = 'bold 36px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillText('CERTIFICATE OF COMPLETION', canvas.width / 2, 100);

            ctx.font = '20px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#94a3b8';
            ctx.fillText('Secara resmi diberikan kepada:', canvas.width / 2, 160);

            ctx.font = 'bold 46px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#10b981'; // emerald-500
            ctx.fillText(userName, canvas.width / 2, 230);
            
            ctx.beginPath();
            ctx.moveTo(canvas.width/2 - 200, 250);
            ctx.lineTo(canvas.width/2 + 200, 250);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = '20px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#94a3b8';
            ctx.fillText('Atas kelulusannya menyelesaikan Uji Kompetensi 30 Pertanyaan', canvas.width / 2, 310);
            ctx.fillText('dan teridentifikasi memiliki Profil Risiko & Eksekusi:', canvas.width / 2, 340);

            ctx.font = 'bold 32px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#3b82f6';
            ctx.fillText(`"${title}"`, canvas.width / 2, 400);

            const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
            
            ctx.textAlign = 'left';
            ctx.font = '16px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#cbd5e1';
            ctx.fillText(`Diterbitkan: ${date}`, 80, 520);
            ctx.fillText(`ID Validasi: EA-${Date.now().toString().slice(-6)}`, 80, 545);

            ctx.textAlign = 'right';
            ctx.font = 'italic 24px Georgia, serif';
            ctx.fillStyle = '#94a3b8';
            ctx.fillText('Rakaditya Septiawan', canvas.width - 80, 500);
            
            ctx.beginPath();
            ctx.moveTo(canvas.width - 300, 510);
            ctx.lineTo(canvas.width - 80, 510);
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.font = 'bold 16px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#f8fafc';
            ctx.fillText('Ewoks Academy', canvas.width - 80, 535);
            
            ctx.font = '12px "Plus Jakarta Sans", Arial, sans-serif';
            ctx.fillStyle = '#94a3b8';
            ctx.fillText('Rakaditya Septiawan.MOS.MCE.CEH (Founder)', canvas.width - 80, 555);

            const link = document.createElement('a');
            link.download = `Sertifikat_Ewoks_${userName.replace(/ /g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            showToast('Sertifikat kelulusan berhasil dibuat dan diunduh!', 'success');
        }

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

        // --- PETA KONGLOMERAT ---
        function renderGrid(groups = dataGroups) {
            const gridContainer = document.getElementById('group-grid');
            if (!gridContainer) return;
            gridContainer.innerHTML = '';

            if(groups.length === 0) {
                gridContainer.innerHTML = `<div class="col-span-full text-center p-8 text-slate-500">Grup tidak ditemukan.</div>`;
                return;
            }

            groups.forEach(group => {
                const numStocks = group.stocks.length;
                const card = document.createElement('div');
                card.className = 'bg-white border border-slate-200 rounded-xl p-5 cursor-pointer card-hover transition-all flex flex-col h-full shadow-sm dark-mode-card';
                card.onclick = () => showDetail(group.id);
                
                card.innerHTML = `
                    <div class="flex items-center justify-between mb-3">
                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-lg">
                            ${group.name.charAt(0)}
                        </div>
                        <span class="bg-slate-100 text-slate-500 text-[10px] uppercase font-bold px-2 py-1 rounded">${numStocks} Emiten</span>
                    </div>
                    <h4 class="text-sm font-black text-slate-900 mb-2 leading-tight uppercase">${group.name}</h4>
                    <p class="text-xs text-slate-500 flex-grow line-clamp-3">${group.desc}</p>
                    <div class="mt-4 text-blue-600 text-xs font-bold flex items-center">
                        Lihat Portofolio <i class="fas fa-arrow-right ml-1"></i>
                    </div>
                `;
                gridContainer.appendChild(card);
            });
        }

        function searchKonglo() {
            const q = document.getElementById('kongloSearch').value.toLowerCase();
            const filtered = dataGroups.filter(g => {
                const matchNameDesc = g.name.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q);
                const matchTicker = g.stocks.some(s => s.ticker.toLowerCase().includes(q));
                return matchNameDesc || matchTicker;
            });
            renderGrid(filtered);
        }

        function showDetail(groupId) {
            const group = dataGroups.find(g => g.id === groupId);
            if (!group) return;

            document.getElementById('konglo-dashboard-view').classList.add('hide');
            document.getElementById('konglo-funda-view').classList.add('hide');
            document.getElementById('konglo-detail-view').classList.remove('hide');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            document.getElementById('detail-title').innerText = group.name;
            document.getElementById('detail-desc').innerText = group.desc;

            const stockList = document.getElementById('stock-list');
            stockList.innerHTML = '';

            group.stocks.forEach(stock => {
                const stockItem = document.createElement('div');
                stockItem.className = 'bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-6 hover:border-blue-300 transition-colors shadow-sm dark-mode-card';
                
                stockItem.innerHTML = `
                    <div class="md:w-1/3 shrink-0 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-4">
                        <h5 class="text-3xl font-black text-blue-600 tracking-tight mb-1">${stock.ticker}</h5>
                        <p class="font-bold text-slate-800 text-xs mb-3 line-clamp-2">${stock.company}</p>
                        <span class="inline-block bg-emerald-100 text-emerald-700 text-[10px] uppercase px-2 py-1 rounded font-bold mb-4">${stock.sector}</span>
                        
                        <div class="bg-white p-3 rounded-xl border border-slate-100 space-y-2 mb-3">
                            <div>
                                <p class="text-[9px] font-black text-slate-400 uppercase">Est. Free Float</p>
                                <p class="text-sm font-bold text-slate-700">${stock.free_float}</p>
                            </div>
                            <div>
                                <p class="text-[9px] font-black text-slate-400 uppercase">Top Broker Afiliasi</p>
                                <p class="text-sm font-bold text-slate-700">${stock.broker_afiliasi}</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2 mt-4">
                            <div class="bg-emerald-50 p-2 rounded-xl border border-emerald-100 text-center">
                                <p class="text-[9px] font-black text-emerald-600 uppercase">AVG UP</p>
                                <p class="text-xs font-bold text-slate-700">Rp ${stock.avg_up}</p>
                            </div>
                            <div class="bg-blue-50 p-2 rounded-xl border border-blue-100 text-center">
                                <p class="text-[9px] font-black text-blue-600 uppercase">AVG DOWN</p>
                                <p class="text-xs font-bold text-slate-700">Rp ${stock.avg_down}</p>
                            </div>
                            <div class="bg-rose-50 p-2 rounded-xl border border-rose-100 text-center">
                                <p class="text-[9px] font-black text-rose-600 uppercase">Support</p>
                                <p class="text-xs font-bold text-slate-700">Rp ${stock.support}</p>
                            </div>
                            <div class="bg-amber-50 p-2 rounded-xl border border-amber-100 text-center">
                                <p class="text-[9px] font-black text-amber-600 uppercase">Resisten</p>
                                <p class="text-xs font-bold text-slate-700">Rp ${stock.resistance}</p>
                            </div>
                        </div>
                        <p class="text-[8px] text-slate-400 text-right mt-2 font-bold italic">Update: ${stock.last_update}</p>
                    </div>
                    
                    <div class="md:w-2/3 flex flex-col justify-between">
                        <div>
                            <div class="mb-4">
                                <h6 class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                                    <i class="fas fa-chart-pie"></i> Porsi & Status Kepemilikan (${stock.tahun_masuk})
                                </h6>
                                <p class="text-slate-700 text-sm leading-relaxed">
                                    <span class="font-black bg-blue-50 text-blue-700 px-2 py-0.5 rounded mr-1">${stock.kepemilikan_persen}</span>
                                    ${stock.ownership}
                                </p>
                            </div>
                            
                            <div class="bg-slate-100/50 p-4 rounded-xl border border-slate-200">
                                <h6 class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <i class="fas fa-history"></i> Sejarah Perusahaan / Akuisisi
                                </h6>
                                <p class="text-slate-600 text-sm leading-relaxed italic">
                                    "${stock.sejarah}"
                                </p>
                            </div>
                        </div>

                        <div class="mt-4 pt-4 border-t border-slate-200 flex gap-2">
                            <button onclick="showFunda('${stock.ticker}', '${stock.company}', '${stock.sector}')" class="flex-[3] bg-slate-900 text-white py-3 rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-md">
                                <i class="fas fa-chart-bar"></i> Analisis Fundamental PRO
                            </button>
                            <button onclick="showPage('watchlist'); document.getElementById('wl-ticker').value='${stock.ticker}'; showToast('Kode ditambahkan ke input Watchlist', 'success');" class="flex-1 bg-amber-100 text-amber-700 py-3 rounded-xl font-bold text-xs uppercase hover:bg-amber-200 transition-colors flex items-center justify-center tooltip-trigger shadow-sm">
                                <i class="fas fa-star"></i><span class="tooltip-text">Kirim ke Watchlist</span>
                            </button>
                        </div>
                    </div>
                `;
                stockList.appendChild(stockItem);
            });
        }

        function hideDetail() {
            document.getElementById('konglo-detail-view').classList.add('hide');
            document.getElementById('konglo-dashboard-view').classList.remove('hide');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- FUNDAMENTAL PRO VIEW ---
        function showFunda(ticker, company, sector) {
            document.getElementById('konglo-detail-view').classList.add('hide');
            document.getElementById('konglo-funda-view').classList.remove('hide');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            document.getElementById('funda-ticker').innerText = ticker;
            document.getElementById('funda-company').innerText = company;
            
            const d = generateFunda(ticker, sector);
            const isBank = sector.includes("Perbankan");
            
            const lBody = document.getElementById('funda-lapkeu-body');
            lBody.innerHTML = `
                <tr>
                    <td class="font-bold text-slate-300">Pendapatan Bersih / Bunga</td>
                    ${d.rev.map((v,i) => `<td class="${i===6?'text-blue-300':''}">${v}</td>`).join('')}
                </tr>
                <tr>
                    <td class="font-bold text-slate-300">Beban Pokok</td>
                    ${d.cogs.map((v,i) => `<td class="${i===6?'text-blue-300':''}">${v}</td>`).join('')}
                </tr>
                <tr class="bg-slate-800/50">
                    <td class="font-bold text-blue-400">Laba Kotor</td>
                    ${d.rev.map((v,i) => {
                        let k = isBank ? v : (parseFloat(v) - Math.abs(parseFloat(d.cogs[i]))).toFixed(1);
                        return `<td class="text-blue-400 font-bold">${k}</td>`;
                    }).join('')}
                </tr>
                <tr>
                    <td class="font-bold text-rose-400">Beban Bunga (Hutang)</td>
                    ${d.interest.map((v,i) => `<td class="text-rose-400 ${i===6?'text-rose-300':''}">-${v}</td>`).join('')}
                </tr>
                <tr>
                    <td class="font-bold text-rose-400">Beban Pajak</td>
                    ${d.tax.map((v,i) => `<td class="text-rose-400 ${i===6?'text-rose-300':''}">-${v}</td>`).join('')}
                </tr>
                <tr class="bg-slate-800/50 border-t border-slate-600">
                    <td class="font-bold text-emerald-400">Laba Bersih (Entitas Induk)</td>
                    ${d.net.map((v,i) => `<td class="text-emerald-400 font-bold">${v}</td>`).join('')}
                </tr>
                <tr>
                    <td class="font-bold text-slate-300">Total Aset</td>
                    ${d.asset.map((v,i) => `<td class="${i===6?'text-blue-300':''}">${v}</td>`).join('')}
                </tr>
                <tr>
                    <td class="font-bold text-slate-300">Total Ekuitas</td>
                    ${d.eq.map((v,i) => `<td class="${i===6?'text-blue-300':''}">${v}</td>`).join('')}
                </tr>
            `;

            const sBody = document.getElementById('funda-sotp-body');
            let totalSotp = parseFloat(d.eq[5]) * 1.5; 
            sBody.innerHTML = `
                <tr>
                    <td class="text-slate-300">Bisnis Inti (${sector})</td>
                    <td>Target PER/PBV</td>
                    <td>Industri Avg</td>
                    <td>${(totalSotp * 0.8).toFixed(1)}</td>
                </tr>
                <tr>
                    <td class="text-slate-300">Investasi & Aset Anak Usaha</td>
                    <td>Market Value (-15% disc)</td>
                    <td>-</td>
                    <td>${(totalSotp * 0.2).toFixed(1)}</td>
                </tr>
                <tr class="bg-slate-800/80 font-bold border-t-2 border-slate-600">
                    <td colspan="3" class="text-right text-blue-400">Total SOTP Value (Triliun)</td>
                    <td class="text-blue-400">${totalSotp.toFixed(1)}</td>
                </tr>
            `;

            const dash = document.getElementById('funda-valuation-dashboard');
            let zStatus = d.zscore >= 3 ? "Aman (Green Zone)" : (d.zscore >= 1.8 ? "Waspada (Grey Zone)" : "Bahaya (Red Zone)");
            let zColor = d.zscore >= 3 ? "text-emerald-400" : (d.zscore >= 1.8 ? "text-amber-400" : "text-rose-400");
            
            dash.innerHTML = `
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-emerald-500 transition-colors">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-shield-alt text-emerald-500"></i> Margin of Safety</p>
                    <p class="text-2xl md:text-3xl font-black text-emerald-400 my-1">${d.mos}%</p>
                    <p class="text-[10px] text-slate-500">Diskon dari Nilai Intrinsik</p>
                </div>
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-blue-500 transition-colors">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-heartbeat text-blue-500"></i> Altman Z-Score</p>
                    <p class="text-2xl md:text-3xl font-black ${zColor} my-1">${d.zscore}</p>
                    <p class="text-[10px] text-slate-500">${zStatus}</p>
                </div>
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-indigo-500 transition-colors">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-money-bill-wave text-indigo-500"></i> Avg FCF/Year</p>
                    <p class="text-2xl md:text-3xl font-black text-blue-400 my-1">${d.fcf[5]} T</p>
                    <p class="text-[10px] text-slate-500">Estimasi Kas Bebas 2025</p>
                </div>
                <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-purple-500 transition-colors">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-gift text-purple-500"></i> Est. Div Yield</p>
                    <p class="text-2xl md:text-3xl font-black text-purple-400 my-1">${d.divYield[5]}%</p>
                    <p class="text-[10px] text-slate-500">Berdasarkan EPS Terakhir</p>
                </div>
            `;

            const mBody = document.getElementById('funda-metrics-body');
            mBody.innerHTML = `
                <tr class="hover:bg-slate-800/30">
                    <td class="text-left font-bold text-slate-300">DER / LDR</td>
                    ${d.eq.map((v,i) => {
                        let ratio = isBank ? "85%" : (parseFloat(d.asset[i]) / parseFloat(v)).toFixed(2) + "x";
                        return `<td class="${i===6?'text-blue-300':''}">${ratio}</td>`;
                    }).join('')}
                </tr>
                <tr class="hover:bg-slate-800/30">
                    <td class="text-left font-bold text-slate-300">Est. ROE (%)</td>
                    ${d.net.map((v,i) => {
                        let roe = ((parseFloat(v) / parseFloat(d.eq[i])) * 100).toFixed(1) + "%";
                        return `<td class="${i===6?'text-blue-300':''}">${roe}</td>`;
                    }).join('')}
                </tr>
                <tr class="hover:bg-slate-800/30">
                    <td class="text-left font-bold text-slate-300">Free Cash Flow (Triliun)</td>
                    ${d.fcf.map((v,i) => `<td class="${i===6?'text-blue-300 font-bold':'text-emerald-400'}">${v}</td>`).join('')}
                </tr>
                <tr class="hover:bg-slate-800/30">
                    <td class="text-left font-bold text-slate-300">Dividend Yield (%)</td>
                    ${d.divYield.map((v,i) => `<td class="${i===6?'text-blue-300 font-bold':'text-purple-400'}">${v}%</td>`).join('')}
                </tr>
            `;

            let npmArr = d.net.map((n, i) => ((parseFloat(n) / parseFloat(d.rev[i]))*100).toFixed(1));
            renderFundaCharts(d.fcf, d.divYield, npmArr, ticker);
        }

        function hideFunda() {
            document.getElementById('konglo-funda-view').classList.add('hide');
            document.getElementById('konglo-detail-view').classList.remove('hide');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function openFundaTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("funda-tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("funda-tab-btn");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }

        function renderFundaCharts(fcfData, divData, npmData, ticker) {
            const labels = ['2020', '2021', '2022', '2023', '2024', '2025', 'YTD 2026'];
            const commonOptions = { 
                responsive: true, maintainAspectRatio: false, 
                color: '#cbd5e1',
                scales: { 
                    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.5)' } },
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.5)' } }
                },
                plugins: { legend: { labels: { color: '#cbd5e1' } } }
            };

            if (fundaCharts.npm) fundaCharts.npm.destroy();
            const ctxNpm = document.getElementById('fundaNpmChart').getContext('2d');
            fundaCharts.npm = new Chart(ctxNpm, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{ label: `NPM ${ticker} (%)`, data: npmData, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)', fill: true, tension: 0.3, borderWidth: 2 }]
                },
                options: { ...commonOptions, plugins: { legend: { display: false } } }
            });

            if (fundaCharts.fcf) fundaCharts.fcf.destroy();
            const ctxFcf = document.getElementById('fundaFcfChart').getContext('2d');
            fundaCharts.fcf = new Chart(ctxFcf, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{ label: 'FCF (Triliun Rp)', data: fcfData, backgroundColor: '#10b981', borderRadius: 4 }]
                },
                options: { ...commonOptions, plugins: { legend: { display: false } } }
            });

            if (fundaCharts.div) fundaCharts.div.destroy();
            const ctxDiv = document.getElementById('fundaDivChart').getContext('2d');
            fundaCharts.div = new Chart(ctxDiv, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{ label: 'Dividend Yield (%)', data: divData, borderColor: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.2)', fill: true, tension: 0.4, borderWidth: 2 }]
                },
                options: { ...commonOptions, plugins: { legend: { display: false } } }
            });
        }

        function renderChart() {
            const ctx = document.getElementById('sectorChart').getContext('2d');
            
            let sectorCounts = {};
            dataGroups.forEach(group => {
                group.stocks.forEach(stock => {
                    let s = stock.sector;
                    if(s.includes("Pertambangan")) s = "Pertambangan";
                    else if(s.includes("Properti")) s = "Properti & Real Estat";
                    else if(s.includes("Perbankan") || s.includes("Keuangan")) s = "Perbankan & Keuangan";
                    else if(s.includes("Agrikultur")) s = "Agrikultur";
                    else if(s.includes("Teknologi") || s.includes("E-Commerce") || s.includes("Telekomunikasi")) s = "Teknologi & Telekomunikasi";
                    else if(s.includes("Konsumsi") || s.includes("FMCG") || s.includes("Ritel")) s = "Barang Konsumsi & Ritel";
                    else if(s.includes("Energi") || s.includes("Minyak")) s = "Energi";
                    else s = "Lain-lain";

                    sectorCounts[s] = (sectorCounts[s] || 0) + 1;
                });
            });

            const sortedSectors = Object.entries(sectorCounts).sort((a,b) => b[1] - a[1]);
            const labels = sortedSectors.map(item => item[0]);
            const data = sortedSectors.map(item => item[1]);

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: [ '#1e40af', '#047857', '#d97706', '#b91c1c', '#4338ca', '#0369a1', '#a16207', '#64748b' ],
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'right', labels: { boxWidth: 12, font: { size: 10, family: "'Plus Jakarta Sans', sans-serif" } } },
                        tooltip: { callbacks: { label: function(context) { return (context.label || '') + ': ' + (context.parsed || 0) + ' Emiten'; } } }
                    },
                    cutout: '65%'
                }
            });
        }

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
            if(!canvasEl) return;
            const ctx = canvasEl.getContext('2d');
            
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
                                callback: function(value) { return 'Rp ' + formatAbbreviated(value); } 
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
            if(yearsToRetire <= 0 || yearsInRetirement <= 0) return;

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

        // --- BROKER DATABASE ---
        function getBrokerBadge(kode) {
            const asing = ["AK", "BK", "CS", "RX", "KZ", "CG", "YU"];
            const ritel = ["YP", "PD", "CC", "NI", "XC"];
            if (asing.includes(kode)) return '<span class="bg-indigo-100 text-indigo-700 text-[9px] px-2 py-1 rounded font-bold ml-2">Asing/Institusi</span>';
            if (ritel.includes(kode)) return '<span class="bg-rose-100 text-rose-700 text-[9px] px-2 py-1 rounded font-bold ml-2">Dominan Ritel</span>';
            return '<span class="bg-slate-100 text-slate-500 text-[9px] px-2 py-1 rounded font-bold ml-2">Standar Lokal</span>';
        }

        function renderBrokers(data = BROKERS) {
            document.getElementById('brokerTable').innerHTML = data.map(b => `
                <tr class="hover:bg-slate-50 border-b border-slate-100 bg-white transition-colors">
                    <td class="px-6 py-4 font-black text-blue-600 uppercase text-xs">${b.k}</td>
                    <td class="px-6 py-4 text-slate-700 font-extrabold text-xs">${b.n}</td>
                    <td class="px-6 py-4"><span class="stat-badge ${b.t === 'Asing' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}">${b.t}</span></td>
                    <td class="px-6 py-4">${getBrokerBadge(b.k)}</td>
                    <td class="px-6 py-4 text-slate-400 font-bold text-[10px] uppercase">${b.c}</td>
                </tr>
            `).join('');
        }

        function searchBroker() {
            const q = document.getElementById('brokerSearch').value.toLowerCase();
            const filterVal = document.getElementById('brokerFilter').value;
            
            let filtered = BROKERS.filter(b => b.k.toLowerCase().includes(q) || b.n.toLowerCase().includes(q));
            
            if(filterVal !== "ALL") {
                filtered = filtered.filter(b => {
                    const badgeText = getBrokerBadge(b.k);
                    return badgeText.includes(filterVal);
                });
            }
            renderBrokers(filtered);
        }

        // --- UTILITIES & SYSTEM ---
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB';
            const clockEl = document.getElementById('clockText');
            if(clockEl) clockEl.innerText = timeString;
            
            const clockContainer = document.getElementById('liveClock');
            if(clockContainer && clockContainer.classList.contains('hidden')){
                clockContainer.classList.remove('hidden');
            }
        }

        window.addEventListener('scroll', () => {
            const btn = document.getElementById('scrollTopBtn');
            if (window.scrollY > 300) {
                btn.classList.remove('opacity-0', 'pointer-events-none');
                btn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                btn.classList.add('opacity-0', 'pointer-events-none');
                btn.classList.remove('opacity-100', 'pointer-events-auto');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.onload = () => {
            checkTheme();
            highlightNavForCurrentPage();

            loadMacroNotes();
            if (document.getElementById('brokerTable')) renderBrokers();
            if (document.getElementById('historySection')) renderHistory();
            if (document.getElementById('group-grid')) renderGrid();
            if (document.getElementById('watchlist-container')) renderWatchlist();
            if (document.getElementById('journal-empty') || document.getElementById('jr-date')) renderJournal();
            calcSbn();
            if (document.getElementById('p-age-retire')) calculateRetirement();
            if (document.getElementById('compoundChartCanvas')) calcCompound();
            if (document.getElementById('dar-expense')) calcDarurat();

            const page = EwoksSiteContext.page;
            if (page === 'konglo' && typeof renderChart === 'function') {
                setTimeout(renderChart, 100);
                kongloChartRendered = true;
            }
            if (page === 'fixed-income') {
                setTimeout(() => { if (typeof renderYieldChart === 'function') renderYieldChart(); }, 100);
                setTimeout(() => { if (typeof renderYieldCurve === 'function') renderYieldCurve(); }, 100);
            }
            if (page === 'pensiun') setTimeout(() => { if (typeof calcCompound === 'function') calcCompound(); }, 100);
            if (page === 'jurnal') renderJournal();
            if (page === 'watchlist' && typeof openTVChart === 'function' && !window.tvWidgetInstance) {
                openTVChart("IDX:COMPOSITE");
            }

            document.addEventListener('click', function(e) {
                if (!e.target.closest('.group')) {
                    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
                }
            });

            document.querySelectorAll('.group > button').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const dropdown = this.nextElementSibling;
                    const isShowing = dropdown.classList.contains('show-dropdown');

                    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
                    if (!isShowing) dropdown.classList.add('show-dropdown');
                });
            });

            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show-dropdown'));
                });
            });

            const today = new Date().toISOString().split('T')[0];
            const tgl = document.getElementById('tanggal');
            const jr = document.getElementById('jr-date');
            if (tgl) tgl.value = today;
            if (jr) jr.value = today;

            updateClock();
            fetchRealIHSG();
            fetchNews();

            setInterval(updateClock, 1000);
            setInterval(fetchRealIHSG, 5000);
        };