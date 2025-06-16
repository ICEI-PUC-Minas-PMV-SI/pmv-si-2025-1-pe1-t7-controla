document.addEventListener("DOMContentLoaded", () => {
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
      for (let i = 0; i < 5; i++) {
        const cell = cells[i];
        if (!cell.querySelector("input") && cell.querySelector("select") === null) {
          const currentText = cell.innerText;
          const input = document.createElement("input");
          input.type = "text";
          input.value = currentText;
          input.classList.add("editable");
          cell.innerHTML = ""; // limpa a célula
          cell.appendChild(input);
        }
      }
    });
  });
  const duplicateButtons = document.querySelectorAll(".ph-copy");

  duplicateButtons.forEach(button => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const newRow = row.cloneNode(true);
      row.parentNode.insertBefore(newRow, row.nextSibling);
    });
  });
  const saveButtons = document.querySelectorAll(".ph-check");

  saveButtons.forEach(button => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");
      for (let i = 0; i < 5; i++) {
        const cell = cells[i];
        const input = cell.querySelector("input");
        if (input) {
          cell.textContent = input.value;
        }
      }
      
      salvarTransacoes();
    });
  });
});

function salvarTransacoes() {
  const linhas = document.querySelectorAll(".transacoes-table tbody tr");
  const transacoes = [];

  linhas.forEach((linha) => {
    const inputs = linha.querySelectorAll("input");
    const select = linha.querySelector("select");
    if (inputs.length > 0 || select) {
      const situacao = inputs[0]?.value || linha.cells[0]?.innerText;
      const data = inputs[1]?.value || linha.cells[1]?.innerText;
      const valor = inputs[2]?.value || linha.cells[2]?.innerText;
      const categoria = inputs[3].value || linha.cells[3]?.innerText;
      const conta = inputs[4]?.value || linha.cells[4]?.innerText;

      transacoes.push({ situacao, data, valor, categoria, conta });
    }
  });

  console.log("Transações salvas:", transacoes);
}