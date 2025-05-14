document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
   // const usuario = localStorage.getItem('usuario');
    //if (!usuario) {
    //    window.location.href = 'login.html';
    //    return;
    //}

    // Atualizar nome do usuário no header
    //const userData = JSON.parse(usuario);
    //document.querySelector('.user-info').textContent = userData.nome || 'Usuário';

    // Adicionar evento ao botão de nova categoria
    const btnAddCategory = document.querySelector('.btn-add-category');
    btnAddCategory.addEventListener('click', function() {
        showCategoryFormModal();
    });

    // Carregar categorias do localStorage
    loadCategories();
});

function showCategoryFormModal({ nome = '', icone = '🏠', tipo = 'despesas', index = null, isEdit = false } = {}) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2 style="color: var(--stroke-color-dark-mode); font-size: 20px; margin-bottom: 18px;">${isEdit ? 'Editar Categoria' : 'Nova Categoria'}</h2>
            <form id="editCategoryForm">
                <div class="category-form-row">
                    <div class="category-form-group" style="flex:0 0 60px; align-items:center;">
                        <label>Ícone</label>
                        <span class="category-form-icon" id="iconPreview">${icone}</span>
                    </div>
                    <div class="category-form-group">
                        <label for="categoryName">Descrição</label>
                        <input type="text" id="categoryName" class="category-form-input" value="${nome}" required maxlength="30">
                    </div>
                    <div class="category-form-group" style="min-width:110px;">
                        <label for="categoryType">Tipo</label>
                        <select id="categoryType" class="category-form-select" required>
                            <option value="despesas" ${tipo === 'despesas' ? 'selected' : ''}>Despesa</option>
                            <option value="receitas" ${tipo === 'receitas' ? 'selected' : ''}>Receita</option>
                        </select>
                    </div>
                    <div class="category-form-group" style="min-width:80px;">
                        <label for="categoryIcon">&nbsp;</label>
                        <select id="categoryIcon" class="category-form-select" style="width:48px;" required>
                            <option value="🏠">🏠</option>
                            <option value="🍽️">🍽️</option>
                            <option value="🚗">🚗</option>
                            <option value="💰">💰</option>
                            <option value="📈">📈</option>
                            <option value="💼">💼</option>
                            <option value="🎮">🎮</option>
                            <option value="🏥">🏥</option>
                            <option value="👕">👕</option>
                            <option value="📚">📚</option>
                        </select>
                    </div>
                    <div class="category-form-actions">
                        <button type="button" class="category-form-btn-cancel" onclick="closeModal()">Cancelar</button>
                        <button type="submit" class="category-form-btn-confirm" title="Salvar"><span style="font-size:20px;">✔️</span></button>
                    </div>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    // Atualiza o preview do ícone ao trocar o select
    const iconSelect = document.getElementById('categoryIcon');
    iconSelect.value = icone;
    iconSelect.addEventListener('change', function() {
        document.getElementById('iconPreview').textContent = this.value;
    });

    document.getElementById('editCategoryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('categoryName').value;
        const tipoSelecionado = document.getElementById('categoryType').value;
        const iconeSelecionado = document.getElementById('categoryIcon').value;
        if (isEdit) {
            updateCategory({ nome, icone: iconeSelecionado, tipo: tipoSelecionado, index, oldTipo: tipo });
        } else {
            addCategory({ nome, icone: iconeSelecionado, valor: 0 }, tipoSelecionado);
        }
        closeModal();
    });
}

function addCategory(categoria, tipo) {
    const categorias = JSON.parse(localStorage.getItem('categorias')) || {
        despesas: [],
        receitas: []
    };
    categorias[tipo].push(categoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    loadCategories();
}

function updateCategory({ nome, icone, tipo, index, oldTipo }) {
    const categorias = JSON.parse(localStorage.getItem('categorias'));
    if (tipo !== oldTipo) {
        categorias[tipo].push({ nome, icone, valor: 0 });
        categorias[oldTipo].splice(index, 1);
    } else {
        categorias[tipo][index] = { ...categorias[tipo][index], nome, icone };
    }
    localStorage.setItem('categorias', JSON.stringify(categorias));
    loadCategories();
}

function editCategory(index, tipo) {
    const categorias = JSON.parse(localStorage.getItem('categorias'));
    const categoria = categorias[tipo][index];
    showCategoryFormModal({ nome: categoria.nome, icone: categoria.icone, tipo, index, isEdit: true });
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
}

function deleteCategory(index, tipo) {
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
        const categorias = JSON.parse(localStorage.getItem('categorias'));
        categorias[tipo].splice(index, 1);
        localStorage.setItem('categorias', JSON.stringify(categorias));
        loadCategories();
    }
}

function loadCategories() {
    const categorias = JSON.parse(localStorage.getItem('categorias')) || {
        despesas: [
            { nome: 'Moradia', icone: '🏠', valor: 0 },
            { nome: 'Alimentação', icone: '🍽️', valor: 0 },
            { nome: 'Transporte', icone: '🚗', valor: 0 }
        ],
        receitas: [
            { nome: 'Salário', icone: '💰', valor: 0 },
            { nome: 'Investimentos', icone: '📈', valor: 0 },
            { nome: 'Freelance', icone: '💼', valor: 0 }
        ]
    };
    // Renderizar categorias de despesas
    const despesasList = document.querySelector('.category-section:first-child .category-list');
    despesasList.innerHTML = '';
    categorias.despesas.forEach((categoria, index) => {
        despesasList.appendChild(createCategoryCard(categoria, index, 'despesas'));
    });
    // Renderizar categorias de receitas
    const receitasList = document.querySelector('.category-section:last-child .category-list');
    receitasList.innerHTML = '';
    categorias.receitas.forEach((categoria, index) => {
        receitasList.appendChild(createCategoryCard(categoria, index, 'receitas'));
    });
}

function createCategoryCard(categoria, index, tipo) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <div class="category-icon">${categoria.icone}</div>
        <div class="category-info">
            <h3>${categoria.nome}</h3>
            <p>R$ ${categoria.valor.toFixed(2)}</p>
        </div>
        <div class="category-actions">
            <button onclick="editCategory(${index}, '${tipo}')" class="btn-edit">✏️</button>
            <button onclick="deleteCategory(${index}, '${tipo}')" class="btn-delete">🗑️</button>
        </div>
    `;
    return card;
} 