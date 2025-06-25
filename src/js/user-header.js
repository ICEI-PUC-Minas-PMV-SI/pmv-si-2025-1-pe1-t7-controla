// Função para carregar dados do usuário do localStorage
function loadUserData() {
    try {
        const userData = localStorage.getItem('usuario');
        if (userData) {
            const user = JSON.parse(userData);
            
            const savedPhoto = localStorage.getItem('userPhoto');
            if (savedPhoto && !user.foto) {
                user.foto = savedPhoto;
                localStorage.setItem('usuario', JSON.stringify(user));
                localStorage.removeItem('userPhoto');
            }
            
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
    
    userInfoElement.innerHTML = '';
    
    const imgContainer = document.createElement('div');
    imgContainer.style.position = 'relative';
    imgContainer.style.display = 'inline-block';
    
    const img = document.createElement('img');
    
    if (user && user.foto) {
        img.src = user.foto;
    } else {
        img.src = 'data:image/svg+xml;base64,' + btoa(`
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#6B7280"/>
                <circle cx="18" cy="14" r="6" fill="#9CA3AF"/>
                <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="#9CA3AF"/>
            </svg>
        `);
    }
    
    img.alt = 'Foto do usuário';
    img.id = 'userAvatar';
    imgContainer.appendChild(img);
    
    const editButton = document.createElement('button');
    editButton.className = 'edit-photo-btn';
    editButton.title = 'Alterar foto';
    editButton.innerHTML = '<i class="ph ph-camera"></i>';
    
    editButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.openPhotoUpload) {
            window.openPhotoUpload();
        } else if (window.photoUploadManager) {
            window.photoUploadManager.openModal();
        }
    });
    imgContainer.appendChild(editButton);
    
    userInfoElement.appendChild(imgContainer);
    
    const span = document.createElement('span');
    span.id = 'userName';
    if (user && user.nome) {
        span.textContent = user.nome;
    } else {
        span.textContent = 'Usuário';
    }
    userInfoElement.appendChild(span);
    
    const logoutButton = document.createElement('button');
    logoutButton.className = 'logout-btn';
    logoutButton.title = 'Sair';
    logoutButton.innerHTML = '<i class="ph ph-sign-out"></i>';
    
    logoutButton.addEventListener('click', function() {
        const userData = localStorage.getItem('usuario');
        if (userData) {
            const user = JSON.parse(userData);
            if (user.foto) {
                localStorage.setItem('userPhoto', user.foto);
            }
        }
        localStorage.removeItem('usuario');
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