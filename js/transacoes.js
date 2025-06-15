document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".ph-trash");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      row.remove();
    });
  });
});document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(".ph-pencil");

  editButtons.forEach(button => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");
      for (let i = 0; i < 5; i++) {
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
});function salvarTransacoes() {
  const linhas = document.querySelectorAll(".transactions-table tbody tr");
  const transacoes = [];

  linhas.forEach((linha) => {
    const inputs = linha.querySelectorAll("input");
    const select = linha.querySelector("select");
    if (inputs.length > 0 || select) {
      const situacao = inputs[0]?.value || linha.cells[0]?.innerText;
      const data = inputs[1]?.value || linha.cells[1]?.innerText;
      const valor = inputs[2]?.value || linha.cells[2]?.innerText;
      const categoria = select?.value || linha.cells[3]?.innerText;
      const conta = inputs[3]?.value || linha.cells[4]?.innerText;

      transacoes.push({ situacao, data, valor, categoria, conta });
    }
  });

  console.log("Transações salvas:", transacoes);
}