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
