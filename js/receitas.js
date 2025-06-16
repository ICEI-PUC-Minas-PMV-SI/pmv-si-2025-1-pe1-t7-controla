document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formReceitas');
    const inputData = document.getElementById('dataR');
    const inputValor = document.getElementById('valorR');
    const inputCategoria = document.getElementById('categoriaR');
    const lista = document.getElementById('listaR');

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

    function mascaraValor(input) {
        let valor = input.value.replace(/\D/g, '');
        if (valor === '') {
            input.value = '';
            return;
        }
        valor = (parseInt(valor) / 100).toFixed(2);
        valor = valor.replace('.', ',');
        valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        input.value = `R$ ${valor}`;
    }

    function validarData(data) {
        const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!regex.test(data)) return false;
        const [_, dia, mes, ano] = data.match(regex);
        const dataObj = new Date(ano, mes - 1, dia);
        return dataObj.getDate() === parseInt(dia) &&
               dataObj.getMonth() === parseInt(mes) - 1 &&
               dataObj.getFullYear() === parseInt(ano);
    }

    function validarValor(valor) {
        if (!valor) return false;
        const valorNumerico = parseFloat(valor.replace(/[R$\s.]/g, '').replace(',', '.'));
        return !isNaN(valorNumerico) && valorNumerico > 0;
    }

    function mostrarErro(elemento, mensagem) {
        let erroId;
        if (elemento.id === 'dataR') {
            erroId = 'erroData';
        } else if (elemento.id === 'valorR') {
            erroId = 'erroValor';
        }
        
        const erroElement = document.getElementById(erroId);
        if (erroElement) {
            erroElement.textContent = mensagem;
            erroElement.style.display = 'block';
        }
    }

    function limparErro(elemento) {
        let erroId;
        if (elemento.id === 'dataR') {
            erroId = 'erroData';
        } else if (elemento.id === 'valorR') {
            erroId = 'erroValor';
        }
        
        const erroElement = document.getElementById(erroId);
        if (erroElement) {
            erroElement.textContent = '';
            erroElement.style.display = 'none';
        }
    }

    if (inputData) {
        inputData.addEventListener('input', function() {
            mascaraData(this);
            limparErro(this);
        });
        inputData.addEventListener('blur', function() {
            if (this.value && !validarData(this.value)) {
                mostrarErro(this, 'Data inválida');
            }
        });
    }

    if (inputValor) {
        inputValor.addEventListener('input', function() {
            mascaraValor(this);
            limparErro(this);
        });
        inputValor.addEventListener('blur', function() {
            if (this.value && !validarValor(this.value)) {
                mostrarErro(this, 'Valor inválido');
            }
        });
    }

    function salvarHistorico(receita) {
        let historico = JSON.parse(localStorage.getItem('historicoReceitas')) || [];
        historico.push(receita);
          
        localStorage.setItem('historicoReceitas', JSON.stringify(historico));
    }

    function buscarHistorico() {
        return JSON.parse(localStorage.getItem('historicoReceitas')) || [];
    }

    function renderizarHistorico() {
        lista.innerHTML = '';
        const historico = buscarHistorico();
        // Pega apenas os últimos 7 registros
        const ultimosRegistros = historico.slice(-7);
        
        ultimosRegistros.forEach(receita => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${receita.categoria}</span>
                <span>${receita.valor}</span>
            `;
            lista.appendChild(li);
        });
    }

    function mostrarMensagemSucesso(msg) {
        const div = document.getElementById('mensagemSucesso');
        div.textContent = msg;
        div.style.display = 'block';
        setTimeout(() => {
            div.style.display = 'none';
        }, 2000);
    }
  
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let temErro = false;

            if (!inputData.value || !validarData(inputData.value)) {
                mostrarErro(inputData, 'Data inválida ou não preenchida');
                temErro = true;
            }
            if (!inputValor.value || !validarValor(inputValor.value)) {
                mostrarErro(inputValor, 'Valor inválido ou não preenchido');
                temErro = true;
            }

            if (!temErro) {
                const receita = {
                    data: inputData.value,
                    valor: inputValor.value,
                    categoria: inputCategoria.value,
                    metodoRecebimento: document.getElementById('metodoRecebimento').value
                };
                salvarHistorico(receita);
                renderizarHistorico();
                form.reset();
                mostrarMensagemSucesso('Dados salvos com sucesso!');
                limparErro(inputData);
                limparErro(inputValor);
            }
        });
    }
    renderizarHistorico();
});