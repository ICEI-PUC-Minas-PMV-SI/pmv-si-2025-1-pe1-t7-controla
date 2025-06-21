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
      // Edita apenas as 3 primeiras colunas (Data, Valor, Categoria)
      for (let i = 0; i < 3; i++) {
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
      
      // Reattach event listeners to the new row
      attachEventListenersToRow(newRow);
    });
  });
  
  const saveButtons = document.querySelectorAll(".ph-check");

  saveButtons.forEach(button => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");
      // Salva apenas as 3 primeiras colunas editáveis
      for (let i = 0; i < 3; i++) {
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
      for (let i = 0; i < 3; i++) {
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
  
  // Reattach duplicate button listener
  const duplicateBtn = row.querySelector(".ph-copy");
  if (duplicateBtn) {
    duplicateBtn.addEventListener("click", () => {
      const newRow = row.cloneNode(true);
      row.parentNode.insertBefore(newRow, row.nextSibling);
      attachEventListenersToRow(newRow);
    });
  }
  
  // Reattach save button listener
  const saveBtn = row.querySelector(".ph-check");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const cells = row.querySelectorAll("td");
      for (let i = 0; i < 3; i++) {
        const cell = cells[i];
        const input = cell.querySelector("input");
        if (input) {
          cell.textContent = input.value;
        }
      }
      
      salvarTransacoes();
    });
  }
}

function salvarTransacoes() {
  const linhas = document.querySelectorAll(".transacoes-table tbody tr");
  const transacoes = [];

  linhas.forEach((linha) => {
    const cells = linha.querySelectorAll("td");
    if (cells.length >= 5) {
      const data = cells[0].innerText;
      const valor = cells[1].innerText;
      const categoria = cells[2].querySelector("select")?.value || cells[2].innerText;
      const metodoTransacao = cells[3].querySelector("select")?.value || cells[3].innerText;

      transacoes.push({ 
        data, 
        valor, 
        categoria, 
        metodoTransacao
      });
    }
  });

  console.log("Transações salvas:", transacoes);
}