document.write(`
  <div class="sidebar">
    <div class="logo">C+</div>
    <button title="Adicionar">+</button>
    <a href="dashboard.html" title="Home"><i class="ph ph-house"></i></a>
    <a href="categorias.html" title="Categorias"><i class="ph ph-list-bullets"></i></a>
    <a href="transacoes.html" title="Transações"><i class="ph ph-arrows-left-right"></i></a>
    <a href="receitas.html" title="Receitas"><i class="ph ph-chart-line-up"></i></a>
    <a href="despesas.html" title="Despesas"><i class="ph ph-chart-line-down"></i></a>
    <a href="configuracoes.html" title="Configurações"><i class="ph ph-gear-six"></i></a>
  </div>
`);

// Adiciona a classe 'active' ao link correspondente à página atual
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}); 