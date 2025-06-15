// Módulo para trabalhar com dados do LocalStorage

// Função para converter string de valor em número
function converterValorParaNumero(valorString) {
  const valorLimpo = valorString.replace('R$', '').trim();
  return parseFloat(valorLimpo.replace('.', '').replace(',', '.'));
}

// Função para obter dados do LocalStorage
function obterDadosLocalStorage() {
  const historicoDespesas = JSON.parse(localStorage.getItem('historicoDespesas') || '[]');
  const historicoReceitas = JSON.parse(localStorage.getItem('historicoReceitas') || '[]');
  return { historicoDespesas, historicoReceitas };
}

// Função para obter o número de dias em um mês
function getDiasNoMes(ano, mes) {
  return new Date(ano, mes + 1, 0).getDate();
}

function processarDadosMes(dados, ano, mes) {
  const despesasDoMes = dados.historicoDespesas.filter(despesa => {
    const [dia, mesDespesa, anoDespesa] = despesa.data.split('/');
    const mesCorreto = parseInt(mesDespesa) - 1 === mes;
    const anoCorreto = parseInt(anoDespesa) === ano;
    return mesCorreto && anoCorreto;
  });

  const receitasDoMes = dados.historicoReceitas.filter(receita => {
    const [dia, mesReceita, anoReceita] = receita.data.split('/');
    const mesCorreto = parseInt(mesReceita) - 1 === mes;
    const anoCorreto = parseInt(anoReceita) === ano;
    return mesCorreto && anoCorreto;
  });

  const totalDespesas = despesasDoMes.reduce((total, despesa) => {
    const valor = converterValorParaNumero(despesa.valor);
    return total + valor;
  }, 0);

  const totalReceitas = receitasDoMes.reduce((total, receita) => {
    const valor = converterValorParaNumero(receita.valor);
    return total + valor;
  }, 0);

  const despesasPorMetodo = despesasDoMes.reduce((acc, despesa) => {
    const metodo = despesa.metodoPagamento;
    if (!acc[metodo]) {
      acc[metodo] = 0;
    }
    const valor = converterValorParaNumero(despesa.valor);
    acc[metodo] += valor;
    return acc;
  }, {});

  const saldo = totalReceitas - totalDespesas;

  const diasNoMes = getDiasNoMes(ano, mes);
  
  const evolucaoDiaria = {
    receitas: Array(diasNoMes).fill(0),
    despesas: Array(diasNoMes).fill(0),
    labels: Array.from({length: diasNoMes}, (_, i) => (i + 1).toString().padStart(2, '0'))
  };

  const diasDaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const evolucaoSemanal = {
    receitas: Array(7).fill(0),
    despesas: Array(7).fill(0),
    labels: diasDaSemana
  };

  // Processar despesas diárias
  despesasDoMes.forEach(despesa => {
    const [dia, mesDespesa, anoDespesa] = despesa.data.split('/');
    const valor = converterValorParaNumero(despesa.valor);
    
    const diaIndex = parseInt(dia) - 1;
    
    if (diaIndex >= 0 && diaIndex < diasNoMes) {
      evolucaoDiaria.despesas[diaIndex] += valor;
    }

    const data = new Date(parseInt(anoDespesa), parseInt(mesDespesa) - 1, parseInt(dia));
    const diaSemana = data.getDay();
    const indiceSemana = diaSemana === 0 ? 6 : diaSemana - 1;
    evolucaoSemanal.despesas[indiceSemana] += valor;
  });

  // Processar receitas diárias
  receitasDoMes.forEach(receita => {
    const [dia, mesReceita, anoReceita] = receita.data.split('/');
    const valor = converterValorParaNumero(receita.valor);
    
    const diaIndex = parseInt(dia) - 1;
    
    if (diaIndex >= 0 && diaIndex < diasNoMes) {
      evolucaoDiaria.receitas[diaIndex] += valor;
    }

    const data = new Date(parseInt(anoReceita), parseInt(mesReceita) - 1, parseInt(dia));
    const diaSemana = data.getDay();
    const indiceSemana = diaSemana === 0 ? 6 : diaSemana - 1;
    evolucaoSemanal.receitas[indiceSemana] += valor;
  });

  return {
    saldo,
    receitas: totalReceitas,
    despesas: totalDespesas,
    cartoes: {
      credito: despesasPorMetodo['Cartão de crédito'] || 0,
      debito: despesasPorMetodo['Cartão de débito'] || 0
    },
    evolucao: {
      diario: evolucaoDiaria,
      semanal: evolucaoSemanal
    }
  };
}

function processarDadosMensais(dados, ano) {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const evolucaoMensal = {
    receitas: Array(12).fill(0),
    despesas: Array(12).fill(0),
    labels: meses
  };

  const despesasDoAno = dados.historicoDespesas.filter(despesa => {
    const [_, __, anoDespesa] = despesa.data.split('/');
    return parseInt(anoDespesa) === ano;
  });

  const receitasDoAno = dados.historicoReceitas.filter(receita => {
    const [_, __, anoReceita] = receita.data.split('/');
    return parseInt(anoReceita) === ano;
  });

  despesasDoAno.forEach(despesa => {
    const [_, mesDespesa, __] = despesa.data.split('/');
    const mesIndex = parseInt(mesDespesa) - 1;
    evolucaoMensal.despesas[mesIndex] += converterValorParaNumero(despesa.valor);
  });

  receitasDoAno.forEach(receita => {
    const [_, mesReceita, __] = receita.data.split('/');
    const mesIndex = parseInt(mesReceita) - 1;
    evolucaoMensal.receitas[mesIndex] += converterValorParaNumero(receita.valor);
  });

  return evolucaoMensal;
}

export async function carregarDadosLocalStorage() {
  const dados = obterDadosLocalStorage();
  
  const anosPresentes = new Set();
  dados.historicoDespesas.forEach(item => {
    const ano = parseInt(item.data.split('/')[2]);
    if (!isNaN(ano)) anosPresentes.add(ano);
  });
  dados.historicoReceitas.forEach(item => {
    const ano = parseInt(item.data.split('/')[2]);
    if (!isNaN(ano)) anosPresentes.add(ano);
  });

  const dadosProcessados = { anos: {} };

  const anosOrdenados = Array.from(anosPresentes).sort((a, b) => a - b);
  
  for (const ano of anosOrdenados) {
    dadosProcessados.anos[ano] = {
      meses: {},
      evolucaoMensal: processarDadosMensais(dados, ano)
    };
    for (let mes = 0; mes < 12; mes++) {
      dadosProcessados.anos[ano].meses[mes] = processarDadosMes(dados, ano, mes);
    }
  }
  if (anosOrdenados.length === 0) {
    const anoAtual = new Date().getFullYear();
    dadosProcessados.anos[anoAtual] = {
      meses: {},
      evolucaoMensal: processarDadosMensais(dados, anoAtual)
    };
    for (let mes = 0; mes < 12; mes++) {
      dadosProcessados.anos[anoAtual].meses[mes] = processarDadosMes(dados, anoAtual, mes);
    }
  }

  return dadosProcessados;
}

export function getMesDataLocalStorage(dados, ano, mes) {
  return dados.anos?.[ano]?.meses?.[mes] || null;
}

export function getEvolucaoLocalStorage(dados, ano, mes, modo) {
  if (modo === 'mensal') {
    return dados.anos?.[ano]?.evolucaoMensal || { receitas: [], despesas: [], labels: [] };
  }
  const mesData = getMesDataLocalStorage(dados, ano, mes);
  const evolucao = mesData?.evolucao?.[modo] || { receitas: [], despesas: [], labels: [] };
  return evolucao;
} 