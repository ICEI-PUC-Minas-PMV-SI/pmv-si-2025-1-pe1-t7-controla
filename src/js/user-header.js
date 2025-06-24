// Função para carregar dados do usuário do localStorage
function loadUserData() {
    try {
        const userData = localStorage.getItem('usuario');
        if (userData) {
            const user = JSON.parse(userData);
            return user;
        }
    } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
    }
    return null;
}

// Função para atualizar o componente do usuário
function updateUserHeader() {
    const user = loadUserData();
    const userInfoElement = document.querySelector('.user-info');
    
    if (!userInfoElement) return;
    
    // Limpa o conteúdo atual
    userInfoElement.innerHTML = '';
    
    // Adiciona a imagem
    const img = document.createElement('img');
    img.src = 'https://randomuser.me/api/portraits/men/32.jpg';
    img.alt = 'Foto do usuário';
    img.id = 'userAvatar';
    userInfoElement.appendChild(img);
    
    // Adiciona o nome do usuário
    const span = document.createElement('span');
    span.id = 'userName';
    if (user && user.nome) {
        span.textContent = user.nome;
    } else {
        span.textContent = 'Usuário';
    }
    userInfoElement.appendChild(span);
    
    // Adiciona o botão de logout
    const logoutButton = document.createElement('button');
    logoutButton.className = 'logout-btn';
    logoutButton.title = 'Sair';
    logoutButton.innerHTML = '<i class="ph ph-sign-out"></i>';
    
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('usuario');
        // Redireciona para a página inicial
        window.location.href = window.location.origin + '/index.html';
    });
    
    userInfoElement.appendChild(logoutButton);
}

// Inicializa o componente quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    updateUserHeader();
});

// Exporta a função para uso em outros módulos
window.updateUserHeader = updateUserHeader; 