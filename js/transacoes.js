document.addEventListener("DOMContentLoaded", () => {
  // Mapeamento de meses para números
  const mesesMap = {
    "Janeiro": "01", "Fevereiro": "02", "Março": "03", "Abril": "04",
    "Maio": "05", "Junho": "06", "Julho": "07", "Agosto": "08",
    "Setembro": "09", "Outubro": "10", "Novembro": "11", "Dezembro": "12"
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
    
    return [
      ...categorias.despesas.map(cat => ({ ...cat, tipo: 'despesa' })),
      ...categorias.receitas.map(cat => ({ ...cat, tipo: 'receita' }))
    ];
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

  // Função para aplicar máscara de data (dd/mm/aaaa)
  function mascaraData(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 8) valor = valor.slice(0, 8);
    if (valor.length > 4) {
      valor = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    }
    input.value = valor;
  }

  // Função para buscar dados de receitas e despesas do localStorage
  function buscarDadosIntegrados() {
    const receitas = JSON.parse(localStorage.getItem('historicoReceitas')) || [];
    const despesas = JSON.parse(localStorage.getItem('historicoDespesas')) || [];
    
    const transacoesIntegradas = [
      ...receitas.map(receita => ({
        data: receita.data,
        valor: receita.valor,
        categoria: receita.categoria,
        metodo: receita.metodoRecebimento,
        tipo: 'Receita'
      })),
      ...despesas.map(despesa => ({
        data: despesa.data,
        valor: despesa.valor,
        categoria: despesa.categoria,
        metodo: despesa.metodoPagamento,
        tipo: 'Despesa'
      }))
    ];
    
    // Ordenar por data (mais recente primeiro)
    return transacoesIntegradas.sort((a, b) => {
      const dataA = new Date(a.data.split('/').reverse().join('-'));
      const dataB = new Date(b.data.split('/').reverse().join('-'));
      return dataB - dataA;
    });
  }

  // Função para filtrar transações por mês e ano
  function filtrarTransacoes() {
    const mesSelecionado = document.querySelector(".month-select").value;
    const anoSelecionado = document.querySelector(".year-select").value;
    const mesNumero = mesesMap[mesSelecionado];
    const anoNumero = anoSelecionado;
    
    const todasTransacoes = buscarDadosIntegrados();
    const transacoesFiltradas = todasTransacoes.filter(transacao => {
      if (!transacao.data || typeof transacao.data !== 'string') return false;
      const [dia, mes, ano] = transacao.data.split("/");
      return mes && ano && mes === mesNumero && ano === anoNumero;
    });

    // Limpar tabela atual (exceto a primeira linha)
    const tbody = document.querySelector(".transacoes-table tbody");
    const primeiraLinha = tbody.querySelector("tr");
    tbody.innerHTML = "";
    tbody.appendChild(primeiraLinha);

    // Adicionar transações filtradas
    transacoesFiltradas.forEach(transacao => {
      const novaLinha = document.createElement("tr");
      novaLinha.className = `transacao-${transacao.tipo.toLowerCase()}`;
      novaLinha.innerHTML = `
        <td>${transacao.data}</td>
        <td class="valor">${transacao.valor}</td>
        <td><select>${gerarSelectCategorias(transacao.categoria)}</select></td>
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

  // FUNÇÕES COMPARTILHADAS PARA ELIMINAR DUPLICAÇÃO

  // Função compartilhada para criar nova linha
  function criarNovaLinha() {
    const tbody = document.querySelector(".transacoes-table tbody");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td><input type="text" class="editable" placeholder="dd/mm/aaaa" /></td>
      <td><input type="text" class="editable" placeholder="R$ 0,00" /></td>
      <td><select>${gerarSelectCategorias()}</select></td>
      <td><input type="text" class="editable" placeholder="Método" /></td>
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
    
    // Aplica a máscara ao novo campo de data
    const novoInputData = novaLinha.querySelector("td:first-child input");
    novoInputData.addEventListener('input', () => mascaraData(novoInputData));
    
    return novaLinha;
  }

  // Função compartilhada para deletar linha
  function deletarLinha(row) {
    const tbody = row.closest("tbody");
    const rows = tbody.querySelectorAll("tr");
    const isFirstRow = rows[0] === row;
    
    if (!isFirstRow) {
      if (rows.length > 2) { 
        row.remove();
        salvarTransacoes();
      } else {
        alert("É necessário manter pelo menos uma linha de transação!");
      }
    } else {
      alert("Não é possível excluir a primeira linha!");
    }
  }

  // Função compartilhada para editar linha
  function editarLinha(row) {
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

        // Aplica a máscara se for a célula da data
        if (i === 0) {
          input.addEventListener('input', () => mascaraData(input));
        }
      }
    }
  }

  // Função compartilhada para salvar linha
  function salvarLinha(row) {
    const cells = row.querySelectorAll("td");
    for (let i = 0; i < 4; i++) {
      const cell = cells[i];
      const input = cell.querySelector("input");
      const select = cell.querySelector("select");
      
      if (input) {
        cell.textContent = input.value;
      } else if (select) {
        // Para selects, preservar o texto exibido (ícone + nome) em vez do valor
        const selectedOption = select.options[select.selectedIndex];
        cell.textContent = selectedOption ? selectedOption.textContent : select.value;
      }
    }
    
    salvarTransacoes();
  }

  // Função para anexar event listeners a todos os botões
  function attachEventListenersToAllButtons() {
    const deleteButtons = document.querySelectorAll(".ph-trash");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const row = button.closest("tr");
        deletarLinha(row);
      });
    });
    
    const editButtons = document.querySelectorAll(".ph-pencil");
    editButtons.forEach(button => {
      button.addEventListener("click", () => {
        const row = button.closest("tr");
        editarLinha(row);
      });
    });
    
    const createButtons = document.querySelectorAll(".ph-plus");
    createButtons.forEach(button => {
      button.addEventListener("click", () => {
        const novaLinha = criarNovaLinha();
        attachEventListenersToRow(novaLinha);
      });
    });
    
    const saveButtons = document.querySelectorAll(".ph-check");
    saveButtons.forEach(button => {
      button.addEventListener("click", () => {
        const row = button.closest("tr");
        salvarLinha(row);
      });
    });
  }

  // Função para anexar event listeners a uma linha específica
  function attachEventListenersToRow(row) {
    const deleteBtn = row.querySelector(".ph-trash");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => deletarLinha(row));
    }
    
    const editBtn = row.querySelector(".ph-pencil");
    if (editBtn) {
      editBtn.addEventListener("click", () => editarLinha(row));
    }
    
    const createBtn = row.querySelector(".ph-plus");
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        const novaLinha = criarNovaLinha();
        attachEventListenersToRow(novaLinha);
      });
    }
    
    const saveBtn = row.querySelector(".ph-check");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => salvarLinha(row));
    }
  }

  // Função para salvar transações no localStorage
  function salvarTransacoes() {
    const mesSelecionado = document.querySelector(".month-select").value;
    const anoSelecionado = document.querySelector(".year-select").value;
    const mesNumero = mesesMap[mesSelecionado];
    const anoNumero = anoSelecionado;

    // Carrega todas as receitas e despesas do localStorage
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

    // Lê as transações que estão atualmente na tabela
    const linhas = document.querySelectorAll(".transacoes-table tbody tr");
    const novasReceitasDaView = [];
    const novasDespesasDaView = [];
    const todasCategorias = carregarCategorias();

    linhas.forEach((linha) => {
      const cells = linha.querySelectorAll("td");
      if (cells.length < 5) return;

      const data = cells[0].querySelector('input')?.value || cells[0].innerText;
      const valor = cells[1].querySelector('input')?.value || cells[1].innerText;
      
      // Extrair nome da categoria do texto (removendo ícone se presente)
      let categoriaNome = cells[2].querySelector('select')?.value || cells[2].innerText;
      if (categoriaNome && categoriaNome.includes(' ')) {
        // Se tem espaço, provavelmente tem ícone, pegar apenas o nome
        categoriaNome = categoriaNome.trim().split(' ').slice(1).join(' ');
      }
      
      const metodoTransacao = cells[3].querySelector('input')?.value || cells[3].innerText;

      if (!data || !valor || !categoriaNome || categoriaNome === 'Selecione...') {
        return;
      }
      
      const categoriaInfo = todasCategorias.find(cat => cat.nome === categoriaNome);

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
    

  }

  // INICIALIZAÇÃO

  // Adicionar event listeners para os selects de mês e ano
  document.querySelector(".month-select").addEventListener("change", filtrarTransacoes);
  document.querySelector(".year-select").addEventListener("change", filtrarTransacoes);

  // Atualizar primeira linha com categorias dinâmicas
  function atualizarPrimeiraLinha() {
    const primeiraLinha = document.querySelector(".transacoes-table tbody tr");
    if (primeiraLinha) {
      const selectCategoria = primeiraLinha.querySelector("td:nth-child(3) select");
      if (selectCategoria) {
        selectCategoria.innerHTML = gerarSelectCategorias();
      }
    }
  }

  // Aplica a máscara ao campo de data da primeira linha inicial
  const primeiroInputData = document.querySelector(".transacoes-table tbody tr td:first-child input");
  if (primeiroInputData) {
    primeiroInputData.addEventListener('input', () => mascaraData(primeiroInputData));
  }

  // Inicializar
  atualizarPrimeiraLinha();
  filtrarTransacoes();
  attachEventListenersToAllButtons();

  // Sistema de sincronização - verificar mudanças no localStorage periodicamente
  setInterval(() => {
    const dadosAtuais = buscarDadosIntegrados();
    const dadosAnteriores = JSON.parse(localStorage.getItem('dadosTransacoesAnteriores')) || [];
    
    if (JSON.stringify(dadosAtuais) !== JSON.stringify(dadosAnteriores)) {
      localStorage.setItem('dadosTransacoesAnteriores', JSON.stringify(dadosAtuais));
      filtrarTransacoes();
    }
  }, 1000);
});