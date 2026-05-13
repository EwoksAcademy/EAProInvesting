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

    if (filterVal !== 'ALL') {
        filtered = filtered.filter(b => {
            const badgeText = getBrokerBadge(b.k);
            return badgeText.includes(filterVal);
        });
    }
    renderBrokers(filtered);
}
