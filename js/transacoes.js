document.addEventListener("DOMContentLoaded", () => {
  // Mapeamento de meses para números
  const mesesMap = {
    "Janeiro": "01",
    "Fevereiro": "02", 
    "Março": "03",
    "Abril": "04",
    "Maio": "05",
    "Junho": "06",
    "Julho": "07",
    "Agosto": "08",
    "Setembro": "09",
    "Outubro": "10",
    "Novembro": "11",
    "Dezembro": "12"
  };

  // Função para carregar categorias do localStorage
  function carregarCategorias() {
    const categorias = JSON.parse(localStorage.getItem('categorias')) || {
      despesas: [
        { nome: 'Moradia', icone: '🏠', valor: 0 },
        { nome: 'Alimentação', icone: '🍽️', valor: 0 },
        { nome: 'Transporte', icone: '🚗', valor: 0 }
      ],
      receitas: [
        { nome: 'Salário', icone: '💰', valor: 0 },
        { nome: 'Investimentos', icone: '📈', valor: 0 },
        { nome: 'Freelance', icone: '💼', valor: 0 }
      ]
    };
    
    // Combinar categorias de despesas e receitas
    const todasCategorias = [
      ...categorias.despesas.map(cat => ({ ...cat, tipo: 'despesa' })),
      ...categorias.receitas.map(cat => ({ ...cat, tipo: 'receita' }))
    ];
    
    return todasCategorias;
  }

  // Função para gerar HTML do select de categorias
  function gerarSelectCategorias(categoriaSelecionada = '') {
    const categorias = carregarCategorias();
    let html = '<option value="">Selecione...</option>';
    
    categorias.forEach(categoria => {
      const selected = categoria.nome === categoriaSelecionada ? 'selected' : '';
      html += `<option value="${categoria.nome}" ${selected}>${categoria.icone} ${categoria.nome}</option>`;
    });
    
    return html;
  }

  // Função para buscar dados de receitas e despesas do localStorage
  function buscarDadosIntegrados() {
    const receitas = JSON.parse(localStorage.getItem('historicoReceitas')) || [];
    const despesas = JSON.parse(localStorage.getItem('historicoDespesas')) || [];
    
    console.log('Receitas encontradas:', receitas);
    console.log('Despesas encontradas:', despesas);
    
    const transacoesIntegradas = [];
    
    // Adicionar receitas
    receitas.forEach(receita => {
      transacoesIntegradas.push({
        data: receita.data,
        valor: receita.valor,
        categoria: receita.categoria,
        metodo: receita.metodoRecebimento,
        tipo: 'Receita'
      });
    });
    
    // Adicionar despesas
    despesas.forEach(despesa => {
      transacoesIntegradas.push({
        data: despesa.data,
        valor: despesa.valor,
        categoria: despesa.categoria,
        metodo: despesa.metodoPagamento,
        tipo: 'Despesa'
      });
    });
    
    console.log('Transações integradas:', transacoesIntegradas);
    
    // Ordenar por data (mais recente primeiro)
    transacoesIntegradas.sort((a, b) => {
      const dataA = new Date(a.data.split('/').reverse().join('-'));
      const dataB = new Date(b.data.split('/').reverse().join('-'));
      return dataB - dataA;
    });
    
    return transacoesIntegradas;
  }

  // Função para filtrar transações por mês e ano
  function filtrarTransacoes() {
    const mesSelecionado = document.querySelector(".month-select").value;
    const anoSelecionado = document.querySelector(".year-select").value;
    
    console.log('Mês selecionado:', mesSelecionado);
    console.log('Ano selecionado:', anoSelecionado);
    
    const mesNumero = mesesMap[mesSelecionado];
    const anoNumero = anoSelecionado.slice(-2); // Pega os últimos 2 dígitos do ano
    
    console.log('Mês número:', mesNumero);
    console.log('Ano número:', anoNumero);
    
    const todasTransacoes = buscarDadosIntegrados();
    
    const transacoesFiltradas = todasTransacoes.filter(transacao => {
      const [dia, mes, ano] = transacao.data.split("/");
      console.log('Verificando transação:', transacao.data, 'mes:', mes, 'ano:', ano);
      const match = mes === mesNumero && ano === anoNumero;
      console.log('Match:', match);
      return match;
    });

    console.log('Transações filtradas:', transacoesFiltradas);

    // Limpar tabela atual (exceto a primeira linha que é sempre mantida)
    const tbody = document.querySelector(".transacoes-table tbody");
    const primeiraLinha = tbody.querySelector("tr");
    tbody.innerHTML = "";
    tbody.appendChild(primeiraLinha);

    // Adicionar transações filtradas a partir da segunda linha
    transacoesFiltradas.forEach(transacao => {
      const novaLinha = document.createElement("tr");
      novaLinha.className = `transacao-${transacao.tipo.toLowerCase()}`;
      novaLinha.innerHTML = `
        <td>${transacao.data}</td>
        <td class="valor">${transacao.valor}</td>
        <td>
          <select>
            ${gerarSelectCategorias(transacao.categoria)}
          </select>
        </td>
        <td>${transacao.metodo}</td>
        <td>
          <div class="actions">
            <button title="Editar"><i class="ph ph-pencil"></i></button>
            <button title="Criar"><i class="ph ph-plus"></i></button>
            <button title="Excluir"><i class="ph ph-trash"></i></button>
            <button title="Salvar"><i class="ph ph-check"></i></button>
          </div>
        </td>
      `;
      tbody.appendChild(novaLinha);
    });
  }

  // Adicionar event listeners para os selects de mês e ano
  document.querySelector(".month-select").addEventListener("change", filtrarTransacoes);
  document.querySelector(".year-select").addEventListener("change", filtrarTransacoes);

  // Carregar dados iniciais (Janeiro 2025)
  filtrarTransacoes();

  // Atualizar a primeira linha da tabela com categorias dinâmicas
  function atualizarPrimeiraLinha() {
    const primeiraLinha = document.querySelector(".transacoes-table tbody tr");
    if (primeiraLinha) {
      const selectCategoria = primeiraLinha.querySelector("td:nth-child(3) select");
      if (selectCategoria) {
        selectCategoria.innerHTML = gerarSelectCategorias();
      }
    }
  }

  // Atualizar primeira linha quando a página carrega
  atualizarPrimeiraLinha();

  // Função para anexar event listeners a todos os botões
  function attachEventListenersToAllButtons() {
    const deleteButtons = document.querySelectorAll(".ph-trash");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const row = button.closest("tr");
    
        const tbody = row.closest("tbody");
        const rows = tbody.querySelectorAll("tr");
        const isFirstRow = rows[0] === row;
        
        if (!isFirstRow) {
          if (rows.length > 2) { 
            row.remove();
          } else {
            alert("É necessário manter pelo menos uma linha de transação!");
          }
        } else {
          alert("Não é possível excluir a primeira linha!");
        }
      });
    });
    
    const editButtons = document.querySelectorAll(".ph-pencil");

    editButtons.forEach(button => {
      button.addEventListener("click", () => {
        const row = button.closest("tr"); // acha a linha inteira
        const cells = row.querySelectorAll("td");
        // Edita as 4 primeiras colunas (Data, Valor, Categoria, Método da Transação)
        for (let i = 0; i < 4; i++) {
          const cell = cells[i];
          if (!cell.querySelector("input") && cell.querySelector("select") === null) {
            const currentText = cell.innerText;
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.classList.add("editable");
            cell.innerHTML = "";
            cell.appendChild(input);
          }
        }
      });
    });
    
    const createButtons = document.querySelectorAll(".ph-plus");

    createButtons.forEach(button => {
      button.addEventListener("click", () => {
        const tbody = document.querySelector(".transacoes-table tbody");
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
          <td><input type="text" class="editable" placeholder="dd/mm/aaaa" /></td>
          <td><input type="text" class="editable" placeholder="R$ 0,00" /></td>
          <td>
              <select>
                  ${gerarSelectCategorias()}
              </select>
          </td>
          <td><input type="text" class="editable" placeholder="Método" /></td>
          <td>
            <div class="actions">
            <button title="Editar"><i class="ph ph-pencil"></i></button>
            <button title="Criar"><i class="ph ph-plus"></i></button>
            <button title="Excluir"><i class="ph ph-trash"></i></button>
            <button title="Salvar"><i class= "ph ph-check"></i></button>
            </div>
          </td>
        `;
        tbody.appendChild(novaLinha);
        
        // Reattach event listeners to the new row
        attachEventListenersToRow(novaLinha);
      });
    });
    
    const saveButtons = document.querySelectorAll(".ph-check");

    saveButtons.forEach(button => {
      button.addEventListener("click", () => {
        const row = button.closest("tr");
        const cells = row.querySelectorAll("td");
        // Salva as 4 primeiras colunas editáveis
        for (let i = 0; i < 4; i++) {
          const cell = cells[i];
          const input = cell.querySelector("input");
          const select = cell.querySelector("select");
          
          if (input) {
            cell.textContent = input.value;
          } else if (select) {
            cell.textContent = select.value;
          }
        }
        
        salvarTransacoes();
      });
    });
  }

  // Inicializar event listeners
  attachEventListenersToAllButtons();

  // Sistema de sincronização - verificar mudanças no localStorage periodicamente
  setInterval(() => {
    const dadosAtuais = buscarDadosIntegrados();
    const dadosAnteriores = JSON.parse(localStorage.getItem('dadosTransacoesAnteriores')) || [];
    
    // Verificar se houve mudanças
    if (JSON.stringify(dadosAtuais) !== JSON.stringify(dadosAnteriores)) {
      localStorage.setItem('dadosTransacoesAnteriores', JSON.stringify(dadosAtuais));
      filtrarTransacoes(); // Atualizar a tabela
    }
  }, 1000); // Verificar a cada 1 segundo
});

function attachEventListenersToRow(row) {
  // Reattach delete button listener
  const deleteBtn = row.querySelector(".ph-trash");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      const tbody = row.closest("tbody");
      const rows = tbody.querySelectorAll("tr");
      const isFirstRow = rows[0] === row;
      
      if (!isFirstRow) {
        if (rows.length > 2) { 
          row.remove();
        } else {
          alert("É necessário manter pelo menos uma linha de transação!");
        }
      } else {
        alert("Não é possível excluir a primeira linha!");
      }
    });
  }
  
  // Reattach edit button listener
  const editBtn = row.querySelector(".ph-pencil");
  if (editBtn) {
    editBtn.addEventListener("click", () => {
      const cells = row.querySelectorAll("td");
      for (let i = 0; i < 4; i++) {
        const cell = cells[i];
        if (!cell.querySelector("input") && cell.querySelector("select") === null) {
          const currentText = cell.innerText;
          const input = document.createElement("input");
          input.type = "text";
          input.value = currentText;
          input.classList.add("editable");
          cell.innerHTML = "";
          cell.appendChild(input);
        }
      }
    });
  }
  
  // Reattach create button listener
  const createBtn = row.querySelector(".ph-plus");
  if (createBtn) {
    createBtn.addEventListener("click", () => {
      const tbody = document.querySelector(".transacoes-table tbody");
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
        <td><input type="text" class="editable" placeholder="dd/mm/aaaa" /></td>
        <td><input type="text" class="editable" placeholder="R$ 0,00" /></td>
        <td>
            <select>
                ${gerarSelectCategorias()}
            </select>
        </td>
        <td><input type="text" class="editable" placeholder="Método" /></td>
        <td>
          <div class="actions">
          <button title="Editar"><i class="ph ph-pencil"></i></button>
          <button title="Criar"><i class="ph ph-plus"></i></button>
          <button title="Excluir"><i class="ph ph-trash"></i></button>
          <button title="Salvar"><i class= "ph ph-check"></i></button>
          </div>
        </td>
      `;
      tbody.appendChild(novaLinha);
      attachEventListenersToRow(novaLinha);
    });
  }
  
  // Reattach save button listener
  const saveBtn = row.querySelector(".ph-check");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const cells = row.querySelectorAll("td");
      for (let i = 0; i < 4; i++) {
        const cell = cells[i];
        const input = cell.querySelector("input");
        const select = cell.querySelector("select");
        
        if (input) {
          cell.textContent = input.value;
        } else if (select) {
          cell.textContent = select.value;
        }
      }
      
      salvarTransacoes();
    });
  }
}

function salvarTransacoes() {
  // Pega o filtro atual para saber quais transações estão na tela
  const mesSelecionado = document.querySelector(".month-select").value;
  const anoSelecionado = document.querySelector(".year-select").value;
  const mesNumero = mesesMap[mesSelecionado];
  const anoNumero = anoSelecionado.slice(-2);

  // Carrega TODAS as receitas e despesas do localStorage
  const todasReceitas = JSON.parse(localStorage.getItem('historicoReceitas')) || [];
  const todasDespesas = JSON.parse(localStorage.getItem('historicoDespesas')) || [];

  // Filtra as transações que NÃO estão na tela para preservá-las
  const outrasReceitas = todasReceitas.filter(r => {
      const [dia, mes, ano] = r.data.split('/');
      return !(mes === mesNumero && ano === anoNumero);
  });
  const outrasDespesas = todasDespesas.filter(d => {
      const [dia, mes, ano] = d.data.split('/');
      return !(mes === mesNumero && ano === anoNumero);
  });

  // Lê as transações que estão atualmente na tabela (as que foram editadas/adicionadas)
  const linhas = document.querySelectorAll(".transacoes-table tbody tr");
  const novasReceitasDaView = [];
  const novasDespesasDaView = [];
  const todasCategorias = carregarCategorias();

  linhas.forEach((linha) => {
    const cells = linha.querySelectorAll("td");
    if (cells.length < 5) return;

    const data = cells[0].querySelector('input')?.value || cells[0].innerText;
    const valor = cells[1].querySelector('input')?.value || cells[1].innerText;
    const categoriaNome = cells[2].querySelector('select')?.value || cells[2].innerText;
    const metodoTransacao = cells[3].querySelector('input')?.value || cells[3].innerText;

    if (!data || !valor || !categoriaNome || categoriaNome === 'Selecione...' || categoriaNome === 'Carregando categorias...') {
      return;
    }
    
    const categoriaInfo = todasCategorias.find(cat => cat.nome === categoriaNome.trim());

    if (categoriaInfo) {
      const transacao = {
        data: data.trim(),
        valor: valor.trim(),
        categoria: categoriaInfo.nome,
      };

      if (categoriaInfo.tipo === 'receita') {
        transacao.metodoRecebimento = metodoTransacao.trim();
        novasReceitasDaView.push(transacao);
      } else {
        transacao.metodoPagamento = metodoTransacao.trim();
        novasDespesasDaView.push(transacao);
      }
    }
  });

  // Combina as transações preservadas com as novas/editadas
  const receitasFinais = [...outrasReceitas, ...novasReceitasDaView];
  const despesasFinais = [...outrasDespesas, ...novasDespesasDaView];

  // Salva tudo de volta no localStorage
  localStorage.setItem('historicoReceitas', JSON.stringify(receitasFinais));
  localStorage.setItem('historicoDespesas', JSON.stringify(despesasFinais));

  console.log("Transações salvas com sucesso no localStorage!");
  
  // Recarrega a tabela para mostrar o estado atual salvo
  filtrarTransacoes();
}