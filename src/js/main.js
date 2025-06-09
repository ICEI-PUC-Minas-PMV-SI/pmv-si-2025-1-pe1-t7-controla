// main.js
import { monthlyData, getEvolucaoData, getMonthData } from './data.js';
import { createPieChart, createLineChart, updateLineChart } from './charts.js';
import { setupMonthSelect, setupModeButtons, updateCards, populateYearSelect, populateMonthSelect } from './ui.js';

// Função para obter o valor da variável CSS
function getCssVar(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

// Cores do tema
const colorHighlight = getCssVar('--highlight-color-dark-mode');
const colorStroke = getCssVar('--stroke-color-dark-mode');
const colorText = getCssVar('--text-color-dark-mode');
const colorSurface = getCssVar('--surface-color-dark-mode');
const colorSurfaceHover = getCssVar('--surface-color-dark-mode-hover');

const colors = {
  highlight: colorHighlight,
  stroke: colorStroke
};

let currentMonth = new Date().getMonth();
let currentMode = 'semanal';

// Inicialização dos gráficos
const pieChart = createPieChart(
  document.getElementById('pieChart').getContext('2d'),
  [monthlyData[currentMonth].cartoes.credito, monthlyData[currentMonth].cartoes.debito],
  [colorHighlight, colorStroke],
  colorSurface
);

let lineChart = createLineChart(
  document.getElementById('lineChart').getContext('2d'),
  getEvolucaoData(currentMonth, currentMode),
  colors,
  colorSurface,
  colorText
);

// Atualizar cards
updateCards(getMonthData(currentMonth));

// Popular selects de ano e mês
const currentYear = new Date().getFullYear();
populateYearSelect('yearSelect', currentYear - 4, currentYear + 1);
populateMonthSelect('monthSelect');

document.getElementById('yearSelect').addEventListener('change', () => {
  // No momento, só atualiza os gráficos/cards para o mês selecionado
  const month = Number(document.getElementById('monthSelect').value);
  currentMonth = month;
  updateAll();
});

document.getElementById('monthSelect').addEventListener('change', () => {
  const month = Number(document.getElementById('monthSelect').value);
  if (isNaN(month) || month < 0 || month > 11) {
    alert('Selecione um mês válido!');
    document.getElementById('monthSelect').value = new Date().getMonth();
    return;
  }
  currentMonth = month;
  updateAll();
});

function updateAll() {
  // Se não houver dados para o mês, mostra tudo zerado
  const data = getMonthData(currentMonth) || {
    saldo: 0,
    receitas: 0,
    despesas: 0,
    cartoes: { credito: 0, debito: 0 },
    evolucao: {
      diario: { receitas: [0,0,0,0,0,0,0], despesas: [0,0,0,0,0,0,0], labels: ['01','02','03','04','05','06','07'] },
      semanal: { receitas: [0,0,0,0,0,0,0], despesas: [0,0,0,0,0,0,0], labels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'] },
      mensal: { receitas: [0,0,0,0,0,0,0,0,0,0,0,0], despesas: [0,0,0,0,0,0,0,0,0,0,0,0], labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'] }
    }
  };
  updateCards(data);
  pieChart.data.datasets[0].data = [data.cartoes.credito, data.cartoes.debito];
  pieChart.update();
  updateLineChart(lineChart, getEvolucaoData(currentMonth, currentMode));
}

// Atualizar cards e gráficos na inicialização
updateAll();

// Eventos
setupMonthSelect(month => {
  currentMonth = month;
  updateCards(getMonthData(currentMonth));
  // Atualiza gráficos
  pieChart.data.datasets[0].data = [monthlyData[currentMonth].cartoes.credito, monthlyData[currentMonth].cartoes.debito];
  pieChart.update();
  updateLineChart(lineChart, getEvolucaoData(currentMonth, currentMode));
});

setupModeButtons(mode => {
  currentMode = mode;
  updateLineChart(lineChart, getEvolucaoData(currentMonth, currentMode));
}); 