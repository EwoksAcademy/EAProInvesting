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

// --- FUNDAMENTAL PRO: metrik turunan dari laporan keuangan ---
const FUNDA_YEAR_LABELS = ['2020', '2021', '2022', '2023', '2024', '2025', 'Q1 2026'];
const FUNDA_EMPTY = '(-)';
const FUNDA_MIN_TRILIUN = 0.05;
const FUNDA_MIN_MILIAR = 0.001;
const FUNDA_MAX_NPM = 85;
const FUNDA_MAX_ROE = 80;
const FUNDA_MAX_ROA = 35;

function fundaNum(v) {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
}

/** Nilai disimpan dalam triliun Rp; tampilkan triliun atau miliar. */
function formatFundaAmount(triliunVal) {
    const n = fundaNum(triliunVal);
    const abs = Math.abs(n);
    if (abs < FUNDA_MIN_MILIAR) return FUNDA_EMPTY;
    const sign = n < 0 ? '-' : '';
    if (abs >= 1) return `${sign}${abs.toFixed(1)} triliun`;
    return `${sign}${(abs * 1000).toFixed(1)} miliar`;
}

function formatFundaAmountExpense(triliunVal) {
    const n = fundaNum(triliunVal);
    if (Math.abs(n) < FUNDA_MIN_MILIAR) return FUNDA_EMPTY;
    const formatted = formatFundaAmount(Math.abs(n));
    return formatted === FUNDA_EMPTY ? FUNDA_EMPTY : `-${formatted}`;
}

function fmtFundaCell(v, i, opts = {}) {
    const n = fundaNum(v);
    if (i === 6 && Math.abs(n) < FUNDA_MIN_MILIAR) return FUNDA_EMPTY;
    if (Math.abs(n) < FUNDA_MIN_MILIAR) return FUNDA_EMPTY;
    return opts.expense ? formatFundaAmountExpense(v) : formatFundaAmount(v);
}

function fmtFundaGross(d, i, isBank) {
    const rev = fundaNum(d.rev[i]);
    if (rev < FUNDA_MIN_MILIAR) return FUNDA_EMPTY;
    const gross = isBank ? rev : rev - Math.abs(fundaNum(d.cogs[i]));
    return formatFundaAmount(gross);
}

function fundaYearHasData(d, i) {
    const rev = fundaNum(d.rev[i]);
    const net = fundaNum(d.net[i]);
    const eq = fundaNum(d.eq[i]);
    return rev >= FUNDA_MIN_TRILIUN || (net >= FUNDA_MIN_TRILIUN && eq >= FUNDA_MIN_TRILIUN);
}

function fundaLatestIdx(d, keys = ['net']) {
    for (let i = 6; i >= 0; i--) {
        if (i === 6 && !fundaYearHasData(d, i)) continue;
        if (keys.some((k) => fundaNum(d[k]?.[i]) >= FUNDA_MIN_TRILIUN)) return i;
    }
    for (let i = 5; i >= 0; i--) {
        if (fundaYearHasData(d, i)) return i;
    }
    return 5;
}

function fundaPct(numer, denom, maxAbs = 150) {
    if (denom < FUNDA_MIN_TRILIUN || Math.abs(numer) < 1e-6) return null;
    const p = (numer / denom) * 100;
    if (!Number.isFinite(p) || Math.abs(p) > maxAbs) return null;
    return +p.toFixed(1);
}

function fundaGrossProfit(d, i, isBank) {
    const rev = parseFloat(d.rev[i]) || 0;
    if (isBank) return rev;
    return rev - Math.abs(parseFloat(d.cogs[i]) || 0);
}

function getKongloSectorMultiples(sector) {
    const s = String(sector || '');
    if (s.includes('Perbankan')) return { per: 14, pbv: 2.2, label: 'Perbankan' };
    if (s.includes('Pertambangan')) return { per: 8, pbv: 1.2, label: 'Pertambangan' };
    if (s.includes('Properti')) return { per: 10, pbv: 0.95, label: 'Properti' };
    if (s.includes('Teknologi') || s.includes('E-Commerce')) return { per: 22, pbv: 2.8, label: 'Teknologi' };
    if (s.includes('Energi')) return { per: 9, pbv: 1.1, label: 'Energi' };
    if (s.includes('Konsumsi') || s.includes('FMCG') || s.includes('Ritel')) return { per: 16, pbv: 2.0, label: 'Konsumsi' };
    return { per: 12, pbv: 1.5, label: 'Industri' };
}

function computeKongloDerivedMetrics(d, sector) {
    const isBank = String(sector).includes('Perbankan');
    const npm = [];
    const roe = [];
    const roa = [];
    const grossMargin = [];
    const leverage = [];

    for (let i = 0; i < 7; i++) {
        if (!fundaYearHasData(d, i)) {
            npm.push(null);
            grossMargin.push(null);
            roe.push(null);
            roa.push(null);
            leverage.push(FUNDA_EMPTY);
            continue;
        }

        const rev = fundaNum(d.rev[i]);
        const net = fundaNum(d.net[i]);
        const asset = fundaNum(d.asset[i]);
        const eq = fundaNum(d.eq[i]);
        const gross = fundaGrossProfit(d, i, isBank);

        npm.push(fundaPct(net, rev, FUNDA_MAX_NPM));
        grossMargin.push(fundaPct(gross, rev, FUNDA_MAX_NPM));
        roe.push(fundaPct(net, eq, FUNDA_MAX_ROE));
        roa.push(fundaPct(net, asset, FUNDA_MAX_ROA));

        if (isBank) {
            const em = fundaPct(asset, eq, 50);
            leverage.push(em != null ? `${(asset / eq).toFixed(2)}x` : FUNDA_EMPTY);
        } else {
            const liab = Math.max(0, asset - eq);
            leverage.push(eq >= FUNDA_MIN_TRILIUN ? `${(liab / eq).toFixed(2)}x` : FUNDA_EMPTY);
        }
    }

    const li = fundaLatestIdx(d, ['net', 'eq', 'rev']);
    const fcfVals = d.fcf.map((v) => parseFloat(v)).filter((v) => Number.isFinite(v) && v !== 0);
    const avgFcf = fcfVals.length
        ? +(fcfVals.reduce((a, b) => a + b, 0) / fcfVals.length).toFixed(1)
        : 0;

    const mult = getKongloSectorMultiples(sector);
    const netLi = fundaNum(d.net[li]);
    const eqLi = fundaNum(d.eq[li]);
    const assetLi = fundaNum(d.asset[li]);
    const revLi = fundaNum(d.rev[li]);

    const sotpCore = netLi * mult.per;
    const sotpBook = eqLi * mult.pbv;
    const surplusAssets = Math.max(0, assetLi - eqLi);
    const sotpInvest = surplusAssets * 0.15;
    const totalSotp = sotpCore * 0.55 + sotpBook * 0.35 + sotpInvest * 0.1;

    const intrinsic = totalSotp;
    let mosCalc = null;
    if (eqLi >= FUNDA_MIN_TRILIUN && intrinsic > eqLi) {
        mosCalc = +Math.min(50, Math.max(0, ((intrinsic - eqLi) / intrinsic) * 100)).toFixed(1);
    } else if (eqLi >= FUNDA_MIN_TRILIUN && intrinsic > 0) {
        mosCalc = 0;
    }

    let zscore = 3.5;
    if (!isBank && assetLi >= FUNDA_MIN_TRILIUN && eqLi >= FUNDA_MIN_TRILIUN) {
        const tl = Math.max(assetLi - eqLi, assetLi * 0.01);
        const wc = assetLi * 0.1;
        const re = netLi / assetLi;
        const ebit = netLi * 1.15;
        zscore = 1.2 * (wc / assetLi) + 1.4 * re + 3.3 * (ebit / assetLi) + 0.6 * (eqLi / tl) + 1.0 * (revLi / assetLi);
        zscore = +Math.min(6, Math.max(0.5, zscore)).toFixed(2);
    }

    return {
        isBank,
        latestIdx: li,
        latestYear: FUNDA_YEAR_LABELS[li],
        npm,
        roe,
        roa,
        grossMargin,
        leverage,
        avgFcf,
        mult,
        sotp: {
            segments: [
                {
                    name: `Bisnis Inti (${sector})`,
                    method: 'PER × Laba Bersih',
                    multiple: `${mult.per}× (${mult.label})`,
                    detail: `${formatFundaAmount(netLi)} × ${mult.per}`,
                    value: sotpCore
                },
                {
                    name: 'Nilai Buku Ekuitas (Fair PBV)',
                    method: 'PBV × Total Ekuitas',
                    multiple: `${mult.pbv}×`,
                    detail: `${formatFundaAmount(eqLi)} × ${mult.pbv}`,
                    value: sotpBook
                },
                {
                    name: 'Aset Surplus / Non-Operasi',
                    method: 'Diskon 15% (Aset−Ekuitas)',
                    multiple: FUNDA_EMPTY,
                    detail: `${formatFundaAmount(surplusAssets)} × 0.15`,
                    value: sotpInvest
                }
            ],
            total: totalSotp
        },
        mosCalc,
        zscore,
        latestNpm: npm[li],
        latestRoe: roe[li]
    };
}

function fundaMetricCells(values, opts = {}) {
    const { suffix = '', pct = false, highlightLast = true } = opts;
    return values
        .map((val, i) => {
            const hi = highlightLast && i === 6;
            if (val == null || val === '' || (typeof val === 'number' && !Number.isFinite(val))) {
                return `<td class="${hi ? 'text-blue-300' : 'text-slate-500'}">${FUNDA_EMPTY}</td>`;
            }
            const text = pct ? `${val}%` : `${val}${suffix}`;
            return `<td class="${hi ? 'text-blue-300 font-bold' : ''}">${text}</td>`;
        })
        .join('');
}

// --- FUNDAMENTAL PRO VIEW ---
function showFunda(ticker, company, sector) {
    document.getElementById('konglo-detail-view').classList.add('hide');
    document.getElementById('konglo-funda-view').classList.remove('hide');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('funda-ticker').innerText = ticker;
    document.getElementById('funda-company').innerText = company;

    const badge = document.getElementById('funda-source-badge');
    const updatedEl = document.getElementById('funda-updated-at');
    const loadingEl = document.getElementById('funda-loading');
    if (badge) {
        badge.className = 'text-[10px] font-bold px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40';
        badge.innerText = 'Memuat data…';
    }
    if (updatedEl) updatedEl.innerText = FUNDA_EMPTY;
    if (loadingEl) loadingEl.classList.remove('hidden');

    resolveKongloFunda(ticker, sector)
        .then(({ data: d, sourceLabel, source }) => {
            if (loadingEl) loadingEl.classList.add('hidden');
            if (badge) {
                const cls = source === 'finnhub' || source === 'yahoo' || source === 'bundle'
                    ? 'text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : source === 'estimate'
                        ? 'text-[10px] font-bold px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'text-[10px] font-bold px-2 py-1 rounded-full bg-slate-600 text-slate-200 border border-slate-500';
                badge.className = cls;
                badge.innerText = sourceLabel || source;
            }
            if (updatedEl) updatedEl.innerText = d.updated || 'Hari ini';
            renderFundaView(d, ticker, company, sector);
        })
        .catch(() => {
            if (loadingEl) loadingEl.classList.add('hidden');
            const d = generateFunda(ticker, sector);
            renderFundaView(d, ticker, company, sector);
            if (typeof showToast === 'function') showToast('Gagal memuat data live. Menampilkan estimasi.', 'warning');
        });
}

function renderFundaView(d, ticker, company, sector) {
    const isBank = sector.includes("Perbankan");
    const m = computeKongloDerivedMetrics(d, sector);
    const mos = m.mosCalc != null ? m.mosCalc : FUNDA_EMPTY;
    const zscore = m.zscore != null ? m.zscore : d.zscore;
    const li = m.latestIdx;

    const lBody = document.getElementById('funda-lapkeu-body');
    lBody.innerHTML = `
        <tr>
            <td class="font-bold text-slate-300">Pendapatan Bersih / Bunga</td>
            ${d.rev.map((v, i) => `<td class="${i === 6 ? 'text-blue-300' : ''}">${fmtFundaCell(v, i)}</td>`).join('')}
        </tr>
        <tr>
            <td class="font-bold text-slate-300">Beban Pokok</td>
            ${d.cogs.map((v, i) => `<td class="${i === 6 ? 'text-blue-300' : ''}">${fmtFundaCell(v, i, { expense: true })}</td>`).join('')}
        </tr>
        <tr class="bg-slate-800/50">
            <td class="font-bold text-blue-400">Laba Kotor</td>
            ${d.rev.map((v, i) => `<td class="text-blue-400 font-bold">${fmtFundaGross(d, i, isBank)}</td>`).join('')}
        </tr>
        <tr>
            <td class="font-bold text-rose-400">Beban Bunga (Hutang)</td>
            ${d.interest.map((v, i) => `<td class="text-rose-400 ${i === 6 ? 'text-rose-300' : ''}">${fmtFundaCell(v, i, { expense: true })}</td>`).join('')}
        </tr>
        <tr>
            <td class="font-bold text-rose-400">Beban Pajak</td>
            ${d.tax.map((v, i) => `<td class="text-rose-400 ${i === 6 ? 'text-rose-300' : ''}">${fmtFundaCell(v, i, { expense: true })}</td>`).join('')}
        </tr>
        <tr class="bg-slate-800/50 border-t border-slate-600">
            <td class="font-bold text-emerald-400">Laba Bersih (Entitas Induk)</td>
            ${d.net.map((v, i) => `<td class="text-emerald-400 font-bold">${fmtFundaCell(v, i)}</td>`).join('')}
        </tr>
        <tr>
            <td class="font-bold text-slate-300">Total Aset</td>
            ${d.asset.map((v, i) => `<td class="${i === 6 ? 'text-blue-300' : ''}">${fmtFundaCell(v, i)}</td>`).join('')}
        </tr>
        <tr>
            <td class="font-bold text-slate-300">Total Ekuitas</td>
            ${d.eq.map((v, i) => `<td class="${i === 6 ? 'text-blue-300' : ''}">${fmtFundaCell(v, i)}</td>`).join('')}
        </tr>
    `;

    const sBody = document.getElementById('funda-sotp-body');
    const sotpRows = m.sotp.segments
        .map(
            (seg) => `
        <tr>
            <td class="text-slate-300">${seg.name}</td>
            <td>${seg.method}<br><span class="text-[10px] text-slate-500">${seg.detail}</span></td>
            <td>${seg.multiple}</td>
            <td class="font-bold text-emerald-400">${formatFundaAmount(seg.value)}</td>
        </tr>`
        )
        .join('');
    sBody.innerHTML = `
        ${sotpRows}
        <tr class="bg-slate-800/80 font-bold border-t-2 border-slate-600">
            <td colspan="3" class="text-right text-blue-400">Total SOTP<br><span class="text-[10px] font-normal text-slate-400">Bobot 55% operasi + 35% buku + 10% surplus · tahun ${m.latestYear}</span></td>
            <td class="text-blue-400 text-lg">${formatFundaAmount(m.sotp.total)}</td>
        </tr>
        <tr class="border-t border-slate-700">
            <td colspan="4" class="text-[10px] text-slate-500 pt-2">Referensi LK: Laba ${formatFundaAmount(d.net[li])} · Ekuitas ${formatFundaAmount(d.eq[li])} · Aset ${formatFundaAmount(d.asset[li])}</td>
        </tr>
    `;

    const dash = document.getElementById('funda-valuation-dashboard');
    let zStatus = zscore >= 3 ? "Aman (Green Zone)" : (zscore >= 1.8 ? "Waspada (Grey Zone)" : "Bahaya (Red Zone)");
    let zColor = zscore >= 3 ? "text-emerald-400" : (zscore >= 1.8 ? "text-amber-400" : "text-rose-400");
    const npmLatest = m.latestNpm != null ? `${m.latestNpm}%` : FUNDA_EMPTY;
    const roeLatest = m.latestRoe != null ? `${m.latestRoe}%` : FUNDA_EMPTY;
    const divLatest = parseFloat(d.divYield[li]) > 0 ? `${d.divYield[li]}%` : FUNDA_EMPTY;

    dash.innerHTML = `
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-emerald-500 transition-colors">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-shield-alt text-emerald-500"></i> Margin of Safety</p>
            <p class="text-2xl md:text-3xl font-black text-emerald-400 my-1">${mos}${mos === FUNDA_EMPTY ? '' : '%'}</p>
            <p class="text-[10px] text-slate-500">Dari SOTP vs nilai buku ekuitas</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-blue-500 transition-colors">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-heartbeat text-blue-500"></i> Altman Z-Score</p>
            <p class="text-2xl md:text-3xl font-black ${zColor} my-1">${zscore}</p>
            <p class="text-[10px] text-slate-500">${zStatus}</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-indigo-500 transition-colors">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-chart-line text-indigo-500"></i> NPM (${m.latestYear})</p>
            <p class="text-2xl md:text-3xl font-black text-blue-400 my-1">${npmLatest}</p>
            <p class="text-[10px] text-slate-500">Laba bersih ÷ pendapatan</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg hover:border-purple-500 transition-colors">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1"><i class="fas fa-percentage text-purple-500"></i> ROE (${m.latestYear})</p>
            <p class="text-2xl md:text-3xl font-black text-purple-400 my-1">${roeLatest}</p>
            <p class="text-[10px] text-slate-500">Laba bersih ÷ ekuitas · Div ${divLatest}</p>
        </div>
    `;

    const levLabel = m.isBank ? 'Equity Multiplier (Aset/Ekuitas)' : 'DER (Hutang/Ekuitas)';
    const mBody = document.getElementById('funda-metrics-body');
    mBody.innerHTML = `
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">Net Profit Margin (NPM)</td>
            ${fundaMetricCells(m.npm, { pct: true })}
        </tr>
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">${m.isBank ? 'Margin Pendapatan Bunga' : 'Laba Kotor Margin'}</td>
            ${fundaMetricCells(m.grossMargin, { pct: true })}
        </tr>
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">ROE (%)</td>
            ${fundaMetricCells(m.roe, { pct: true })}
        </tr>
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">ROA (%)</td>
            ${fundaMetricCells(m.roa, { pct: true })}
        </tr>
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">${levLabel}</td>
            ${fundaMetricCells(m.leverage, { highlightLast: true })}
        </tr>
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">Free Cash Flow</td>
            ${d.fcf.map((v, i) => `<td class="${i === 6 ? 'text-blue-300 font-bold' : 'text-emerald-400'}">${fmtFundaCell(v, i)}</td>`).join('')}
        </tr>
        <tr class="hover:bg-slate-800/30">
            <td class="text-left font-bold text-slate-300">Dividend Yield (%)</td>
            ${d.divYield.map((v, i) => {
                const n = parseFloat(v);
                const empty = !Number.isFinite(n) || n === 0;
                return `<td class="${i === 6 ? 'text-blue-300 font-bold' : 'text-purple-400'}">${empty ? FUNDA_EMPTY : `${v}%`}</td>`;
            }).join('')}
        </tr>
    `;

    const npmBody = document.getElementById('funda-npm-body');
    if (npmBody) {
        npmBody.innerHTML = `
            <tr class="hover:bg-slate-800/30">
                <td class="text-left font-bold text-slate-300">Pendapatan</td>
                ${d.rev.map((v, i) => `<td class="${i === 6 ? 'text-blue-300' : ''}">${fmtFundaCell(v, i)}</td>`).join('')}
            </tr>
            <tr class="hover:bg-slate-800/30">
                <td class="text-left font-bold text-emerald-400">Laba Bersih</td>
                ${d.net.map((v, i) => `<td class="${i === 6 ? 'text-blue-300' : 'text-emerald-400'}">${fmtFundaCell(v, i)}</td>`).join('')}
            </tr>
            <tr class="bg-slate-800/50 border-t border-slate-600">
                <td class="text-left font-bold text-blue-400">NPM (%)</td>
                ${fundaMetricCells(m.npm, { pct: true })}
            </tr>
        `;
    }

    const npmChartData = m.npm.map((v) => (v != null ? v : null));
    renderFundaCharts(d.fcf, d.divYield, npmChartData, ticker);
}

function saveKongloFinnhubToken() {
    const input = document.getElementById('konglo-finnhub-token');
    if (!input) return;
    const token = String(input.value || '').trim();
    if (!token) {
        if (typeof showToast === 'function') showToast('Token Finnhub kosong.', 'warning');
        return;
    }
    try {
        localStorage.setItem('ewoks_finnhub_token', token);
        window.EWOKS_FINNHUB_TOKEN = token;
        if (typeof clearFundaCaches === 'function') clearFundaCaches();
    } catch (_) {}
    if (typeof showToast === 'function') showToast('Token Finnhub disimpan. Buka ulang laporan keuangan emiten untuk sinkron data.', 'success');
}

function initKongloFinnhubTokenField() {
    const input = document.getElementById('konglo-finnhub-token');
    if (!input) return;
    let token = '';
    try {
        if (window.EWOKS_FINNHUB_TOKEN) token = String(window.EWOKS_FINNHUB_TOKEN).trim();
        if (!token) token = localStorage.getItem('ewoks_finnhub_token') || '';
    } catch (_) {}
    if (token) input.placeholder = 'Token tersimpan (••••••)';
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
    const labels = ['2020', '2021', '2022', '2023', '2024', '2025', 'Q1 2026'];
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
            datasets: [{ label: `NPM ${ticker} (%)`, data: npmData, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.2)', fill: true, tension: 0.3, borderWidth: 2, spanGaps: true }]
        },
        options: { ...commonOptions, plugins: { legend: { display: false } } }
    });

    if (fundaCharts.fcf) fundaCharts.fcf.destroy();
    const ctxFcf = document.getElementById('fundaFcfChart').getContext('2d');
    fundaCharts.fcf = new Chart(ctxFcf, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{ label: 'FCF (triliun / miliar Rp)', data: fcfData, backgroundColor: '#10b981', borderRadius: 4 }]
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
