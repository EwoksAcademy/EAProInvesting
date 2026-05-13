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
