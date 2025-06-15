// Função para carregar componentes HTML
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // Adiciona a classe 'active' ao link correspondente à página atual
        const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
        const links = document.querySelectorAll('.sidebar a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    } catch (error) {
        console.error('Erro ao carregar o componente:', error);
    }
}

// Carrega o sidebar quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('sidebar-container', './components/sidebar.html');
});