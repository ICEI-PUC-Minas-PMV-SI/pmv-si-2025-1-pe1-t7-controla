// ui.js

export function setupMonthSelect(onChange) {
  document.getElementById('monthSelect').addEventListener('change', e => {
    onChange(Number(e.target.value));
  });
}

export function setupModeButtons(onModeChange) {
  document.querySelectorAll('.chart-controls button').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.chart-controls button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      onModeChange(this.textContent.trim().toLowerCase());
    });
  });
}

export function updateCards(monthData) {
  document.querySelector('.card:nth-child(1) .value').textContent = `R$ ${monthData.saldo.toLocaleString('pt-BR')}`;
  document.querySelector('.card:nth-child(2) .value').textContent = `R$ ${monthData.receitas.toLocaleString('pt-BR')}`;
  document.querySelector('.card:nth-child(3) .value').textContent = `R$ ${monthData.despesas.toLocaleString('pt-BR')}`;
}

export function populateYearSelect(selectId, minYear, maxYear) {
  const select = document.getElementById(selectId);
  select.innerHTML = '';
  for (let y = maxYear; y >= minYear; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    select.appendChild(opt);
  }
  select.value = maxYear;
}

export function populateMonthSelect(selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = '';
  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  meses.forEach((mes, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = mes;
    select.appendChild(opt);
  });
}

export function showCardAverages(monthData, mode) {
  // Calcula média de receitas/despesas do modo selecionado
  const evol = monthData.evolucao?.[mode];
  if (!evol) return;
  const avgReceitas = evol.receitas.reduce((a, b) => a + b, 0) / evol.receitas.length;
  const avgDespesas = evol.despesas.reduce((a, b) => a + b, 0) / evol.despesas.length;
  document.querySelector('.card:nth-child(2) .label').title = `Média: R$ ${avgReceitas.toLocaleString('pt-BR', {maximumFractionDigits:2})}`;
  document.querySelector('.card:nth-child(3) .label').title = `Média: R$ ${avgDespesas.toLocaleString('pt-BR', {maximumFractionDigits:2})}`;
}

export function showPiePercent(credito, debito) {
  const total = credito + debito;
  const percentCredito = total ? Math.round((credito / total) * 100) : 0;
  const percentDebito = total ? Math.round((debito / total) * 100) : 0;
  let el = document.getElementById('pie-percent-info');
  if (!el) {
    el = document.createElement('div');
    el.id = 'pie-percent-info';
    el.style.textAlign = 'center';
    el.style.marginTop = '8px';
    el.style.color = 'var(--text-color-dark-mode)';
    document.querySelector('.graph-card .chart-container').after(el);
  }
  el.innerHTML = `<span>Crédito: ${percentCredito}% &nbsp;|&nbsp; Débito: ${percentDebito}%</span>`;
} 