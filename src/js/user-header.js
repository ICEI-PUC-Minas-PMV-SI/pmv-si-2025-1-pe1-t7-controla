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
    const userNameElement = document.getElementById('userName');
    const userAvatarElement = document.getElementById('userAvatar');
    
    if (user && user.nome) {
        userNameElement.textContent = user.nome;
    } else {
        userNameElement.textContent = 'Usuário';
    }
    
    // Por enquanto mantém a foto padrão
    if (user && user.foto) {
        userAvatarElement.src = user.foto;
    }
}

// Inicializa o componente quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    updateUserHeader();
});

// Exporta a função para uso em outros módulos
window.updateUserHeader = updateUserHeader; 