document.getElementById('monthSelect').addEventListener('change', function(e) {
  const selectedMonth = parseInt(e.target.value);
  updateCharts(selectedMonth);
});

function updateCharts(month) {
  // Atualizar dados do gráfico de pizza
  const pieData = getPieChartData(month);
  pieChart.data.datasets[0].data = pieData.map(item => item.value);
  pieChart.data.labels = pieData.map(item => item.label);
  pieChart.update();

  // Atualizar dados do gráfico de linha
  const lineData = getLineChartData(month);
  lineChart.data.datasets[0].data = lineData;
  lineChart.update();
}