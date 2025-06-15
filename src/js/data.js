// Módulo de dados simulados e funções de acesso

export const monthlyData = {
  0: {
    saldo: 1400,
    receitas: 4500,
    despesas: 3100,
    cartoes: { credito: 65, debito: 35 },
    evolucao: {
      diario: {
        receitas: [200, 300, 250, 400, 350, 500, 400],
        despesas: [100, 200, 150, 300, 200, 400, 250],
        labels: ['01', '02', '03', '04', '05', '06', '07']
      },
      semanal: {
        receitas: [1200, 1900, 1500, 2100, 1800, 2400, 2000],
        despesas: [800, 1200, 900, 1500, 1100, 1800, 1400],
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      },
      mensal: {
        receitas: [4000, 4500, 4700, 4800, 4900, 5000, 5100, 5200, 5300, 5400, 5500, 5600],
        despesas: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      }
    }
  },
  1: {
    saldo: 1800,
    receitas: 5200,
    despesas: 3400,
    cartoes: { credito: 70, debito: 30 },
    evolucao: {
      diario: {
        receitas: [300, 350, 400, 420, 410, 500, 520],
        despesas: [150, 220, 180, 320, 210, 410, 260],
        labels: ['01', '02', '03', '04', '05', '06', '07']
      },
      semanal: {
        receitas: [1500, 2200, 1800, 2400, 2100, 2700, 2300],
        despesas: [1000, 1400, 1100, 1700, 1300, 2000, 1600],
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      },
      mensal: {
        receitas: [5000, 5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900, 6000, 6100],
        despesas: [2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      }
    }
  },
  2: {
    saldo: 2200,
    receitas: 5800,
    despesas: 3600,
    cartoes: { credito: 75, debito: 25 },
    evolucao: {
      diario: {
        receitas: [400, 420, 430, 440, 450, 460, 470],
        despesas: [200, 230, 210, 350, 220, 420, 270],
        labels: ['01', '02', '03', '04', '05', '06', '07']
      },
      semanal: {
        receitas: [1800, 2500, 2100, 2700, 2400, 3000, 2600],
        despesas: [1200, 1600, 1300, 1900, 1500, 2200, 1800],
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      },
      mensal: {
        receitas: [6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6800, 6900, 7000, 7100],
        despesas: [2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      }
    }
  },
  3: {
    saldo: 2500,
    receitas: 6000,
    despesas: 3500,
    cartoes: { credito: 72, debito: 28 },
    evolucao: {
      diario: {
        receitas: [420, 430, 410, 460, 480, 490, 500],
        despesas: [220, 210, 230, 240, 250, 260, 270],
        labels: ['01', '02', '03', '04', '05', '06', '07']
      },
      semanal: {
        receitas: [1700, 2400, 2000, 2600, 2300, 2800, 2500],
        despesas: [1200, 1600, 1300, 1800, 1400, 2000, 1700],
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      },
      mensal: {
        receitas: [6200, 6100, 6300, 6400, 6500, 6600],
        despesas: [2600, 2700, 2800, 2900, 3000, 3100],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
      }
    }
  },
  4: {
    saldo: 3000,
    receitas: 6300,
    despesas: 3300,
    cartoes: { credito: 70, debito: 30 },
    evolucao: {
      diario: {
        receitas: [500, 490, 520, 530, 540, 550, 560],
        despesas: [250, 240, 260, 270, 280, 290, 300],
        labels: ['01', '02', '03', '04', '05', '06', '07']
      },
      semanal: {
        receitas: [1800, 2500, 2200, 2700, 2400, 2900, 2600],
        despesas: [1300, 1700, 1400, 1900, 1500, 2100, 1800],
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      },
      mensal: {
        receitas: [6400, 6500, 6600, 6700, 6800, 6900],
        despesas: [2700, 2800, 2900, 3000, 3100, 3200],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
      }
    }
  },
  5: {
    saldo: 3500,
    receitas: 6800,
    despesas: 3600,
    cartoes: { credito: 74, debito: 26 },
    evolucao: {
      diario: {
        receitas: [550, 560, 580, 590, 600, 610, 620],
        despesas: [270, 280, 290, 300, 310, 320, 330],
        labels: ['01', '02', '03', '04', '05', '06', '07']
      },
      semanal: {
        receitas: [1900, 2600, 2300, 2800, 2500, 3000, 2700],
        despesas: [1400, 1800, 1500, 2000, 1600, 2200, 1900],
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
      },
      mensal: {
        receitas: [6700, 6800, 6900, 7000, 7100, 7200],
        despesas: [2800, 2900, 3000, 3100, 3200, 3300],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
      }
    }
  }
};

export function getMonthData(month) {
  return monthlyData[month];
}

export function getEvolucaoData(month, mode) {
  const data = getMonthData(month);
  return data?.evolucao?.[mode] || data?.evolucao?.semanal;
}

// Funções para acessar dados do JSON estruturado

let dados = null;

export async function carregarDados() {
  if (dados) return dados;
  const resp = await fetch('dados.json');
  dados = await resp.json();
  return dados;
}

export function getMesData(dados, ano, mes) {
  return dados.anos?.[ano]?.meses?.[mes] || null;
}

export function getEvolucao(dados, ano, mes, modo) {
  const mesData = getMesData(dados, ano, mes);
  return mesData?.evolucao?.[modo] || { receitas: [], despesas: [], labels: [] };
}

// Módulo para trabalhar com dados do LocalStorage

// Função para converter string de valor em número
function converterValorParaNumero(valorString) {
  const valorLimpo = valorString.replace('R$', '').trim();
  return parseFloat(valorLimpo.replace('.', '').replace(',', '.'));
}

// Função para obter dados do LocalStorage
function obterDadosLocalStorage() {
  const historicoDespesas = JSON.parse(localStorage.getItem('historicoDespesas') || '[]');
  return historicoDespesas;
}

// Função para obter o número de dias em um mês
function getDiasNoMes(ano, mes) {
  return new Date(ano, mes + 1, 0).getDate();
}

function processarDadosMes(despesas, ano, mes) {
  console.log('Processando mês:', mes + 1, 'ano:', ano);
  
  const despesasDoMes = despesas.filter(despesa => {
    const [dia, mesDespesa, anoDespesa] = despesa.data.split('/');
    const mesCorreto = parseInt(mesDespesa) - 1 === mes;
    const anoCorreto = parseInt(anoDespesa) === ano;
    console.log('Despesa:', despesa.data, 'mes correto:', mesCorreto, 'ano correto:', anoCorreto);
    return mesCorreto && anoCorreto;
  });

  console.log('Despesas do mês:', despesasDoMes);

  const totalDespesas = despesasDoMes.reduce((total, despesa) => {
    const valor = converterValorParaNumero(despesa.valor);
    console.log('Convertendo valor:', despesa.valor, 'para:', valor);
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

  const receitas = 4500;
  const saldo = receitas - totalDespesas;

  const diasNoMes = getDiasNoMes(ano, mes);
  console.log('Dias no mês:', diasNoMes);
  
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

  despesasDoMes.forEach(despesa => {
    const [dia, mesDespesa, anoDespesa] = despesa.data.split('/');
    const valor = converterValorParaNumero(despesa.valor);
    
    const diaIndex = parseInt(dia) - 1;
    console.log('Processando dia:', dia, 'índice:', diaIndex, 'valor:', valor);
    
    if (diaIndex >= 0 && diaIndex < diasNoMes) {
      evolucaoDiaria.despesas[diaIndex] += valor;
      console.log('Despesa adicionada ao dia', dia, 'novo valor:', evolucaoDiaria.despesas[diaIndex]);
    } else {
      console.log('ERRO: Índice do dia fora do intervalo:', diaIndex, 'dias no mês:', diasNoMes);
    }

    const data = new Date(parseInt(anoDespesa), parseInt(mesDespesa) - 1, parseInt(dia));
    const diaSemana = data.getDay();
    const indiceSemana = diaSemana === 0 ? 6 : diaSemana - 1;
    evolucaoSemanal.despesas[indiceSemana] += valor;
  });

  console.log('Evolução diária final:', evolucaoDiaria);

  return {
    saldo,
    receitas,
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

function processarDadosMensais(despesas, ano) {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const evolucaoMensal = {
    receitas: Array(12).fill(0),
    despesas: Array(12).fill(0),
    labels: meses
  };

  const despesasDoAno = despesas.filter(despesa => {
    const [_, __, anoDespesa] = despesa.data.split('/');
    return parseInt(anoDespesa) === ano;
  });

  despesasDoAno.forEach(despesa => {
    const [_, mesDespesa, __] = despesa.data.split('/');
    const mesIndex = parseInt(mesDespesa) - 1;
    evolucaoMensal.despesas[mesIndex] += converterValorParaNumero(despesa.valor);
  });

  return evolucaoMensal;
}

export async function carregarDadosLocalStorage() {
  const despesas = obterDadosLocalStorage();
  console.log('Todas as despesas:', despesas);
  
  const anoAtual = new Date().getFullYear();
  
  const dados = {
    anos: {
      [anoAtual]: {
        meses: {},
        evolucaoMensal: processarDadosMensais(despesas, anoAtual)
      }
    }
  };

  for (let mes = 0; mes < 12; mes++) {
    dados.anos[anoAtual].meses[mes] = processarDadosMes(despesas, anoAtual, mes);
  }

  return dados;
}

export function getMesDataLocalStorage(dados, ano, mes) {
  return dados.anos?.[ano]?.meses?.[mes] || null;
}

export function getEvolucaoLocalStorage(dados, ano, mes, modo) {
  if (modo === 'mensal') {
    return dados.anos?.[ano]?.evolucaoMensal || { receitas: [], despesas: [], labels: [] };
  }
  const mesData = getMesDataLocalStorage(dados, ano, mes);
  console.log('Dados do mês para evolução:', mesData);
  console.log('Modo:', modo);
  const evolucao = mesData?.evolucao?.[modo] || { receitas: [], despesas: [], labels: [] };
  console.log('Evolução retornada:', evolucao);
  return evolucao;
} 