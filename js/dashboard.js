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

function getPieChartData(month) {
  // Aqui você pode implementar a lógica para buscar os dados do mês selecionado
  // Por enquanto, retornando dados de exemplo
  return [
    { label: 'Alimentação', value: 1200 },
    { label: 'Transporte', value: 800 },
    { label: 'Moradia', value: 2000 },
    { label: 'Lazer', value: 500 },
    { label: 'Outros', value: 300 }
  ];
}

function getLineChartData(month) {
  // Aqui você pode implementar a lógica para buscar os dados do mês selecionado
  // Por enquanto, retornando dados de exemplo
  return [1500, 1800, 2000, 1700, 1900, 2200, 2100];
} 