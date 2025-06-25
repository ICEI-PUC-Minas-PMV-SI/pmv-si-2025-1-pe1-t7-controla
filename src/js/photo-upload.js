// Classe para gerenciar upload de foto de perfil
class PhotoUploadManager {
    constructor() {
        this.modal = null;
        this.fileInput = null;
        this.preview = null;
        this.currentUser = null;
        this.maxFileSize = 2 * 1024 * 1024; // 2MB
        this.allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'photo-upload-modal';
        this.modal.innerHTML = `
            <div class="photo-upload-content">
                <div class="photo-upload-header">
                    <h3>Alterar Foto de Perfil</h3>
                    <button class="close-modal" title="Fechar">&times;</button>
                </div>
                
                <div class="photo-upload-area" id="uploadArea">
                    <div class="upload-icon">
                        <i class="ph ph-camera"></i>
                    </div>
                    <div class="upload-text">Clique ou arraste uma imagem aqui</div>
                    <div class="upload-hint">JPG, PNG - Máximo 2MB</div>
                    <input type="file" id="photoInput" accept="image/*" style="display: none;">
                </div>
                
                <div class="photo-preview" id="photoPreview">
                    <img id="previewImage" src="" alt="Preview">
                </div>
                
                <div class="photo-actions" id="photoActions" style="display: none;">
                    <button class="photo-btn primary" id="savePhoto">Salvar</button>
                    <button class="photo-btn secondary" id="cancelPhoto">Cancelar</button>
                    <button class="photo-btn danger" id="removePhoto">Remover Foto</button>
                </div>
                
                <div class="error-message" id="errorMessage"></div>
                <div class="success-message" id="successMessage"></div>
            </div>
        `;

        document.body.appendChild(this.modal);
        
        this.fileInput = document.getElementById('photoInput');
        this.preview = document.getElementById('photoPreview');
        this.previewImage = document.getElementById('previewImage');
        this.uploadArea = document.getElementById('uploadArea');
        this.photoActions = document.getElementById('photoActions');
        this.errorMessage = document.getElementById('errorMessage');
        this.successMessage = document.getElementById('successMessage');
    }

    bindEvents() {
        this.modal.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        this.uploadArea.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadArea.classList.add('dragover');
        });

        this.uploadArea.addEventListener('dragleave', () => {
            this.uploadArea.classList.remove('dragover');
        });

        this.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFile(files[0]);
            }
        });

        this.fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.handleFile(e.target.files[0]);
            }
        });

        document.getElementById('savePhoto').addEventListener('click', () => {
            this.savePhoto();
        });

        document.getElementById('cancelPhoto').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('removePhoto').addEventListener('click', () => {
            this.removePhoto();
        });
    }

    handleFile(file) {
        this.hideMessages();

        if (!this.allowedTypes.includes(file.type)) {
            this.showError('Formato não suportado. Use JPG ou PNG.');
            return;
        }

        if (file.size > this.maxFileSize) {
            this.showError('Arquivo muito grande. Máximo 2MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.previewImage.src = e.target.result;
            this.preview.style.display = 'block';
            this.photoActions.style.display = 'flex';
            this.uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    savePhoto() {
        const photoData = this.previewImage.src;
        
        const userData = localStorage.getItem('usuario');
        if (userData) {
            const user = JSON.parse(userData);
            user.foto = photoData;
            localStorage.setItem('usuario', JSON.stringify(user));
            
            this.showSuccess('Foto atualizada com sucesso!');
            
            if (window.updateUserHeader) {
                window.updateUserHeader();
            }
            
            setTimeout(() => {
                this.closeModal();
            }, 1500);
        } else {
            this.showError('Erro ao salvar foto. Tente novamente.');
        }
    }

    removePhoto() {
        const userData = localStorage.getItem('usuario');
        if (userData) {
            const user = JSON.parse(userData);
            delete user.foto;
            localStorage.setItem('usuario', JSON.stringify(user));
            localStorage.removeItem('userPhoto');
            
            this.showSuccess('Foto removida com sucesso!');
            
            if (window.updateUserHeader) {
                window.updateUserHeader();
            }
            
            setTimeout(() => {
                this.closeModal();
            }, 1500);
        }
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.style.display = 'block';
        this.successMessage.style.display = 'none';
    }

    showSuccess(message) {
        this.successMessage.textContent = message;
        this.successMessage.style.display = 'block';
        this.errorMessage.style.display = 'none';
    }

    hideMessages() {
        this.errorMessage.style.display = 'none';
        this.successMessage.style.display = 'none';
    }

    openModal() {
        this.modal.style.display = 'block';
        this.resetModal();
    }

    closeModal() {
        this.modal.style.display = 'none';
        this.resetModal();
    }

    resetModal() {
        this.preview.style.display = 'none';
        this.photoActions.style.display = 'none';
        this.uploadArea.style.display = 'block';
        this.fileInput.value = '';
        this.hideMessages();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.photoUploadManager = new PhotoUploadManager();
});

window.openPhotoUpload = function() {
    if (window.photoUploadManager) {
        window.photoUploadManager.openModal();
    }
}; 