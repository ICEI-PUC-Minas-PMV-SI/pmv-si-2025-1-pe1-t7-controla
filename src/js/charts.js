// charts.js
import { getEvolucaoData } from './data.js';

export function createPieChart(ctx, data, colors, colorSurface) {
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Cartão de Crédito', 'Cartão de Débito'],
      datasets: [{
        data,
        backgroundColor: colors,
        borderColor: colorSurface,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: colors[2] || '#e0e4db', font: { size: 14 } }
        }
      }
    }
  });
}

export function createLineChart(ctx, evolucao, colors, colorSurface, colorText) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: evolucao.labels,
      datasets: [
        {
          label: 'Receitas',
          data: evolucao.receitas,
          borderColor: colors.stroke,
          backgroundColor: colors.stroke + '33',
          pointBackgroundColor: colors.stroke,
          pointBorderColor: colorSurface,
          tension: 0.4,
          fill: true
        },
        {
          label: 'Despesas',
          data: evolucao.despesas,
          borderColor: colors.highlight,
          backgroundColor: colors.highlight + '33',
          pointBackgroundColor: colors.highlight,
          pointBorderColor: colorSurface,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: colorText, font: { size: 14 } }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: colorText + '22' },
          ticks: { color: colorText }
        },
        x: {
          grid: { color: colorText + '22' },
          ticks: { color: colorText }
        }
      }
    }
  });
}

export function updateLineChart(chart, evolucao) {
  chart.data.labels = evolucao.labels;
  chart.data.datasets[0].data = evolucao.receitas;
  chart.data.datasets[1].data = evolucao.despesas;
  chart.update();
} 