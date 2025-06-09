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