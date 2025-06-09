// main.js
import { carregarDados, getMesData, getEvolucao } from './data.js';
import { createPieChart, createLineChart, updateLineChart } from './charts.js';
import { setupMonthSelect, setupModeButtons, updateCards, populateYearSelect, populateMonthSelect, showCardAverages, showPiePercent } from './ui.js';

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
let currentYear = new Date().getFullYear();
let currentMode = 'semanal';

let pieChart, lineChart;

async function init() {
  const dados = await carregarDados();
  // Popular selects de ano e mês
  const anos = Object.keys(dados.anos).map(Number);
  populateYearSelect('yearSelect', Math.min(...anos), Math.max(...anos));
  populateMonthSelect('monthSelect');
  document.getElementById('yearSelect').value = currentYear;
  document.getElementById('monthSelect').value = currentMonth;

  // Inicializar gráficos
  const mesData = getMesData(dados, currentYear, currentMonth) || { saldo: 0, receitas: 0, despesas: 0, cartoes: { credito: 0, debito: 0 }, evolucao: { semanal: { receitas: [], despesas: [], labels: [] } } };
  pieChart = createPieChart(
    document.getElementById('pieChart').getContext('2d'),
    [mesData.cartoes.credito, mesData.cartoes.debito],
    [colorHighlight, colorStroke],
    colorSurface
  );
  const evol = getEvolucao(dados, currentYear, currentMonth, currentMode);
  lineChart = createLineChart(
    document.getElementById('lineChart').getContext('2d'),
    evol,
    colors,
    colorSurface,
    colorText
  );
  updateAll(dados);

  document.getElementById('yearSelect').addEventListener('change', () => {
    currentYear = Number(document.getElementById('yearSelect').value);
    updateAll(dados);
  });
  document.getElementById('monthSelect').addEventListener('change', () => {
    const month = Number(document.getElementById('monthSelect').value);
    if (isNaN(month) || month < 0 || month > 11) {
      alert('Selecione um mês válido!');
      document.getElementById('monthSelect').value = new Date().getMonth();
      return;
    }
    currentMonth = month;
    updateAll(dados);
  });
  setupModeButtons(mode => {
    currentMode = mode;
    updateAll(dados);
  });
}

function updateAll(dados) {
  const mesData = getMesData(dados, currentYear, currentMonth) || { saldo: 0, receitas: 0, despesas: 0, cartoes: { credito: 0, debito: 0 }, evolucao: { semanal: { receitas: [], despesas: [], labels: [] } } };
  updateCards(mesData);
  pieChart.data.datasets[0].data = [mesData.cartoes.credito, mesData.cartoes.debito];
  pieChart.update();
  const evol = getEvolucao(dados, currentYear, currentMonth, currentMode);
  updateLineChart(lineChart, evol);
  showCardAverages({ evolucao: { [currentMode]: { receitas: evol.receitas, despesas: evol.despesas } } }, currentMode);
  showPiePercent(mesData.cartoes.credito, mesData.cartoes.debito);
}

init(); 