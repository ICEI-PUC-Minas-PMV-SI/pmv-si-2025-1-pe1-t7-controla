// main.js
import { carregarDadosLocalStorage, getMesDataLocalStorage, getEvolucaoLocalStorage } from './data.js';
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
  const dados = await carregarDadosLocalStorage();
  
  // Popular selects de ano e mês
  const anosDisponiveis = Object.keys(dados.anos).map(Number).sort((a, b) => b - a);
  currentYear = anosDisponiveis.length > 0 ? Math.max(...anosDisponiveis) : new Date().getFullYear();
  populateYearSelect('yearSelect', anosDisponiveis);
  populateMonthSelect('monthSelect');
  document.getElementById('yearSelect').value = currentYear;
  document.getElementById('monthSelect').value = currentMonth;

  // Inicializar gráficos
  const mesData = getMesDataLocalStorage(dados, currentYear, currentMonth) || { saldo: 0, receitas: 0, despesas: 0, cartoes: { credito: 0, debito: 0 } };
  pieChart = createPieChart(
    document.getElementById('pieChart').getContext('2d'),
    [mesData.cartoes?.credito || 0, mesData.cartoes?.debito || 0],
    [colorHighlight, colorStroke],
    colorSurface
  );
  const evol = getEvolucaoLocalStorage(dados, currentYear, currentMonth, currentMode);
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
  const mesData = getMesDataLocalStorage(dados, currentYear, currentMonth) || { saldo: 0, receitas: 0, despesas: 0, cartoes: { credito: 0, debito: 0 } };
  updateCards(mesData);
  
  // Atualizar gráfico de pizza se houver dados de cartões
  if (mesData.cartoes) {
    pieChart.data.datasets[0].data = [mesData.cartoes.credito || 0, mesData.cartoes.debito || 0];
    pieChart.update();
  }
  
  const evol = getEvolucaoLocalStorage(dados, currentYear, currentMonth, currentMode);
  updateLineChart(lineChart, evol);
  showCardAverages({ evolucao: { [currentMode]: { receitas: evol.receitas, despesas: evol.despesas } } }, currentMode);
  showPiePercent(mesData.cartoes?.credito || 0, mesData.cartoes?.debito || 0);
}

init(); 