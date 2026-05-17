/** Database: Obligasi, Reksa Dana, ETF Global — return ~10 tahun */
let pasarAltData = null;
let pasarAltChart = null;
let pasarAltTab = 'etf';
let pasarAltSelectedId = null;

async function loadPasarAlternatifData() {
    if (pasarAltData) return pasarAltData;
    const v = window.EWOKS_ASSET_V || '1';
    const base = typeof EwoksSiteContext !== 'undefined' ? EwoksSiteContext.basePath : '/';
    const res = await fetch(`${base}assets/data/pasar-alternatif.json?v=${v}`);
    if (!res.ok) throw new Error('Data tidak ditemukan');
    pasarAltData = await res.json();
    return pasarAltData;
}

function fmtReturnPct(n) {
    if (n == null || !Number.isFinite(n)) return '<span class="text-slate-400">(-)</span>';
    const cls = n >= 0 ? 'text-emerald-600' : 'text-rose-600';
    const sign = n > 0 ? '+' : '';
    return `<span class="${cls} font-bold">${sign}${n}%</span>`;
}

function fmtCagrBadge(cagr) {
    if (cagr == null || !Number.isFinite(cagr)) return '<span class="text-slate-400 text-xs">(-)</span>';
    let bg = 'bg-slate-100 text-slate-700';
    if (cagr >= 12) bg = 'bg-emerald-100 text-emerald-800';
    else if (cagr >= 6) bg = 'bg-blue-100 text-blue-800';
    else if (cagr >= 0) bg = 'bg-amber-100 text-amber-800';
    else bg = 'bg-rose-100 text-rose-800';
    return `<span class="px-2 py-1 rounded-lg text-xs font-black ${bg}">${cagr}% CAGR</span>`;
}

function yearlyBarsHtml(yearly) {
    if (!yearly?.length) return '<span class="text-[10px] text-slate-400">—</span>';
    const max = Math.max(...yearly.map((y) => Math.abs(y.return)), 1);
    return `<div class="flex items-end gap-px h-8 min-w-[100px]">${yearly
        .map((y) => {
            const h = Math.max(4, (Math.abs(y.return) / max) * 28);
            const color = y.return >= 0 ? 'bg-emerald-500' : 'bg-rose-500';
            return `<div class="flex-1 flex flex-col items-center justify-end group/bar" title="${y.year}: ${y.return}%"><div class="${color} w-full rounded-t opacity-80 group-hover/bar:opacity-100" style="height:${h}px"></div><span class="text-[7px] text-slate-400 mt-0.5 hidden md:block">${String(y.year).slice(-2)}</span></div>`;
        })
        .join('')}</div>`.replace(/motion\.div/g, 'div');
}

function getPasarList(tab) {
    if (!pasarAltData) return [];
    if (tab === 'etf') return pasarAltData.etf || [];
    if (tab === 'obligasi') return pasarAltData.obligasi || [];
    return pasarAltData.reksadana || [];
}

function rowCellsEtf(row, rank) {
    return `
        <td class="px-4 py-3 font-black text-slate-800">${rank}</td>
        <td class="px-4 py-3"><span class="font-mono font-bold text-blue-600">${row.symbol || '—'}</span></td>
        <td class="px-4 py-3 font-bold text-slate-800">${row.name}</td>
        <td class="px-4 py-3 text-xs text-slate-600">${row.market || '—'}</td>
        <td class="px-4 py-3 text-xs text-slate-500 max-w-[200px]">${row.focus || '—'}</td>
        <td class="px-4 py-3">${fmtCagrBadge(row.cagr10y)}</td>
        <td class="px-4 py-3 hidden lg:table-cell">${yearlyBarsHtml(row.yearly)}</td>
    `;
}

function rowCellsObligasi(row, rank) {
    const yld = row.yieldNow != null ? `<span class="text-xs font-bold text-emerald-700">${row.yieldNow}%</span>` : '—';
    return `
        <td class="px-4 py-3 font-black text-slate-800">${rank}</td>
        <td class="px-4 py-3 font-bold text-slate-800">${row.name}</td>
        <td class="px-4 py-3 text-xs"><span class="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold">${row.type || '—'}</span></td>
        <td class="px-4 py-3 text-xs text-slate-500">${row.focus || '—'}</td>
        <td class="px-4 py-3">${yld}</td>
        <td class="px-4 py-3">${fmtCagrBadge(row.cagr10y)}</td>
        <td class="px-4 py-3 hidden lg:table-cell">${yearlyBarsHtml(row.yearly)}</td>
    `;
}

function rowCellsRd(row, rank) {
    return `
        <td class="px-4 py-3 font-black text-slate-800">${rank}</td>
        <td class="px-4 py-3 font-bold text-slate-800">${row.name}</td>
        <td class="px-4 py-3 text-xs text-slate-600">${row.manager || '—'}</td>
        <td class="px-4 py-3 text-xs"><span class="bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold">${row.type || '—'}</span></td>
        <td class="px-4 py-3">${fmtCagrBadge(row.cagr10y)}</td>
        <td class="px-4 py-3 hidden lg:table-cell">${yearlyBarsHtml(row.yearly)}</td>
    `;
}

function tableHeadHtml(tab) {
    if (tab === 'etf') {
        return `<tr>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">#</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Ticker</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Nama ETF</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Pasar</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Fokus</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">CAGR 10 th</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase hidden lg:table-cell">Return / tahun</th>
        </tr>`;
    }
    if (tab === 'obligasi') {
        return `<tr>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">#</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Instrumen</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Tipe</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Fokus</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Yield</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">CAGR 10 th</th>
            <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase hidden lg:table-cell">Return / tahun</th>
        </tr>`;
    }
    return `<tr>
        <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">#</th>
        <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Reksa Dana</th>
        <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Manajer</th>
        <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">Tipe</th>
        <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase">CAGR 10 th</th>
        <th class="text-left px-4 py-3 text-[10px] font-black text-slate-500 uppercase hidden lg:table-cell">Return / tahun</th>
    </tr>`;
}

function renderPasarTable() {
    const q = (document.getElementById('pasarSearch')?.value || '').toLowerCase();
    const list = getPasarList(pasarAltTab).filter((row) => {
        const hay = [row.name, row.symbol, row.manager, row.type, row.focus, row.market]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        return !q || hay.includes(q);
    });

    const thead = document.getElementById('pasarTableHead');
    const tbody = document.getElementById('pasarTableBody');
    if (!thead || !tbody) return;
    thead.innerHTML = tableHeadHtml(pasarAltTab);

    const rowFn =
        pasarAltTab === 'etf' ? rowCellsEtf : pasarAltTab === 'obligasi' ? rowCellsObligasi : rowCellsRd;

    tbody.innerHTML = list
        .map((row, i) => {
            const id = row.id || row.symbol || String(i);
            const active = pasarAltSelectedId === id ? 'bg-blue-50/80 ring-1 ring-blue-200' : 'hover:bg-slate-50';
            const safeId = String(id).replace(/'/g, "\\'");
            return `<tr class="cursor-pointer border-b border-slate-100 ${active}" data-pasar-id="${id}" onclick="selectPasarRow('${safeId}')">${rowFn(row, i + 1)}</tr>`;
        })
        .join('');

    if (!list.length) {
        tbody.innerHTML = `<tr><td colspan="8" class="px-6 py-12 text-center text-slate-400 text-sm">Tidak ada data yang cocok.</td></tr>`;
    }
}

function selectPasarRow(id) {
    pasarAltSelectedId = id;
    renderPasarTable();
    const list = getPasarList(pasarAltTab);
    const row = list.find((r) => (r.id || r.symbol) === id);
    renderPasarDetail(row);
    renderPasarYearlyChart(row);
}

function renderPasarDetail(row) {
    const el = document.getElementById('pasarDetailPanel');
    if (!el) return;
    if (!row) {
        el.innerHTML = `<p class="text-sm text-slate-400 text-center py-8">Klik baris untuk detail return per tahun.</p>`;
        return;
    }
    const years = (row.yearly || [])
        .map((y) => `<tr><td class="py-2 font-bold text-slate-600">${y.year}</td><td class="py-2 text-right">${fmtReturnPct(y.return)}</td></tr>`)
        .join('');
    el.innerHTML = `
        <h4 class="font-black text-slate-900 text-lg mb-1">${row.name}</h4>
        <p class="text-xs text-slate-500 mb-4">${row.note || row.focus || ''}</p>
        <div class="flex flex-wrap gap-2 mb-4">
            ${fmtCagrBadge(row.cagr10y)}
            ${row.yieldNow != null ? `<span class="text-xs bg-emerald-50 text-emerald-800 px-2 py-1 rounded font-bold">Yield ${row.yieldNow}%</span>` : ''}
            <span class="text-[10px] text-slate-400 uppercase font-bold">Sumber: ${row.source || 'referensi'}</span>
        </div>
        <table class="w-full text-sm"><tbody>${years}</tbody></table>
    `;
}

function renderPasarYearlyChart(row) {
    const canvas = document.getElementById('pasarYearlyChart');
    if (!canvas || typeof Chart === 'undefined') return;
    if (pasarAltChart) {
        pasarAltChart.destroy();
        pasarAltChart = null;
    }
    if (!row?.yearly?.length) return;
    const labels = row.yearly.map((y) => String(y.year));
    const data = row.yearly.map((y) => y.return);
    pasarAltChart = new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: 'Return tahunan (%)',
                    data,
                    backgroundColor: data.map((v) => (v >= 0 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(244, 63, 94, 0.7)')),
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    title: { display: true, text: '%' },
                    grid: { color: 'rgba(148, 163, 184, 0.2)' }
                },
                x: { grid: { display: false } }
            }
        }
    });
}

function setPasarTab(tab) {
    pasarAltTab = tab;
    pasarAltSelectedId = null;
    document.querySelectorAll('[data-pasar-tab]').forEach((btn) => {
        const on = btn.getAttribute('data-pasar-tab') === tab;
        btn.classList.toggle('bg-slate-900', on);
        btn.classList.toggle('text-white', on);
        btn.classList.toggle('bg-white', !on);
        btn.classList.toggle('text-slate-600', !on);
    });
    renderPasarTable();
    renderPasarDetail(null);
    if (pasarAltChart) {
        pasarAltChart.destroy();
        pasarAltChart = null;
    }
}

function renderPasarSummaryCardsFixed() {
    const el = document.getElementById('pasarSummaryCards');
    if (!el || !pasarAltData) return;
    const topEtf = pasarAltData.etf?.[0];
    const topRd = pasarAltData.reksadana?.[0];
    const topObl = pasarAltData.obligasi?.[0];
    const bench = pasarAltData.meta?.benchmark;
    el.innerHTML = `
        <div class="premium-card p-4 border-blue-100 bg-blue-50/20">
            <p class="text-[10px] font-black text-blue-600 uppercase">Top ETF (10 th)</p>
            <p class="font-black text-slate-900 mt-1">${topEtf?.symbol || '—'}</p>
            <p class="text-xs text-slate-500 truncate">${topEtf?.name || ''}</p>
            <p class="text-lg font-black text-emerald-600 mt-2">${topEtf?.cagr10y ?? '—'}% CAGR</p>
        </div>
        <div class="premium-card p-4 border-amber-100 bg-amber-50/20">
            <p class="text-[10px] font-black text-amber-600 uppercase">Top Reksa Dana</p>
            <p class="font-black text-slate-900 mt-1 text-sm leading-tight">${topRd?.name || '—'}</p>
            <p class="text-lg font-black text-emerald-600 mt-2">${topRd?.cagr10y ?? '—'}% CAGR</p>
        </div>
        <div class="premium-card p-4 border-emerald-100 bg-emerald-50/20">
            <p class="text-[10px] font-black text-emerald-600 uppercase">Top Obligasi (est.)</p>
            <p class="font-black text-slate-900 mt-1 text-sm leading-tight">${topObl?.name || '—'}</p>
            <p class="text-lg font-black text-emerald-600 mt-2">${topObl?.cagr10y ?? '—'}% CAGR</p>
        </div>
        <div class="premium-card p-4 border-slate-200 bg-slate-50">
            <p class="text-[10px] font-black text-slate-500 uppercase">Benchmark Saham ID</p>
            <p class="font-black text-slate-900 mt-1">${bench?.label || 'IHSG'}</p>
            <p class="text-lg font-black text-slate-700 mt-2">~${bench?.cagr10y ?? '—'}% CAGR</p>
            <p class="text-[10px] text-slate-400 mt-1">Bandingkan diversifikasi di luar saham</p>
        </div>
    `;
}

async function initPasarAlternatifPage() {
    if (!EwoksSiteContext.is('pasar-alternatif')) return;
    try {
        await loadPasarAlternatifData();
        const metaEl = document.getElementById('pasarMetaText');
        if (metaEl && pasarAltData.meta) {
            metaEl.textContent = `Diperbarui ${pasarAltData.meta.built} · ${pasarAltData.meta.period} · ${pasarAltData.meta.disclaimer}`;
        }
        renderPasarSummaryCardsFixed();
        setPasarTab('etf');
        const first = pasarAltData.etf?.[0];
        if (first) selectPasarRow(first.id || first.symbol);
    } catch (e) {
        showToast('Gagal memuat database pasar alternatif.', 'error');
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initPasarAlternatifPage();
});
