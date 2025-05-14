document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
    //const usuario = localStorage.getItem('usuario');
    //if (!usuario) {
    //    window.location.href = 'login.html';
    //    return;
    //}

    // Atualizar nome do usuário no header
    //const userData = JSON.parse(usuario);
    //document.querySelector('.user-name').textContent = userData.nome || 'Usuário';

    // Adicionar evento ao botão de nova categoria
    const btnAddCategory = document.querySelector('.btn-add-category');
    btnAddCategory.addEventListener('click', showAddCategoryModal);

    // Carregar categorias do localStorage
    loadCategories();
});

// Função para mostrar o modal de adicionar categoria
function showAddCategoryModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Nova Categoria</h2>
            <form id="addCategoryForm">
                <div class="form-group">
                    <label for="categoryName">Nome da Categoria</label>
                    <input type="text" id="categoryName" required>
                </div>
                <div class="form-group">
                    <label for="categoryType">Tipo</label>
                    <select id="categoryType" required>
                        <option value="despesas">Despesa</option>
                        <option value="receitas">Receita</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="categoryIcon">Ícone</label>
                    <select id="categoryIcon" required>
                        <option value="🏠">🏠 Moradia</option>
                        <option value="🍽️">🍽️ Alimentação</option>
                        <option value="🚗">🚗 Transporte</option>
                        <option value="💰">💰 Salário</option>
                        <option value="📈">📈 Investimentos</option>
                        <option value="💼">💼 Freelance</option>
                    </select>
                </div>
                <div class="form-buttons">
                    <button type="button" onclick="closeModal()">Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Adicionar evento ao formulário
    document.getElementById('addCategoryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('categoryName').value;
        const tipo = document.getElementById('categoryType').value;
        const icone = document.getElementById('categoryIcon').value;

        addCategory({ nome, icone, valor: 0 }, tipo);
        closeModal();
    });
}

// Função para fechar o modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Função para adicionar uma nova categoria
function addCategory(categoria, tipo) {
    const categorias = JSON.parse(localStorage.getItem('categorias')) || {
        despesas: [],
        receitas: []
    };

    categorias[tipo].push(categoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    loadCategories();
}

// Função para editar uma categoria
function editCategory(index, tipo) {
    const categorias = JSON.parse(localStorage.getItem('categorias'));
    const categoria = categorias[tipo][index];

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Editar Categoria</h2>
            <form id="editCategoryForm">
                <div class="form-group">
                    <label for="editCategoryName">Nome da Categoria</label>
                    <input type="text" id="editCategoryName" value="${categoria.nome}" required>
                </div>
                <div class="form-group">
                    <label for="editCategoryIcon">Ícone</label>
                    <select id="editCategoryIcon" required>
                        <option value="🏠" ${categoria.icone === '🏠' ? 'selected' : ''}>🏠 Moradia</option>
                        <option value="🍽️" ${categoria.icone === '🍽️' ? 'selected' : ''}>🍽️ Alimentação</option>
                        <option value="🚗" ${categoria.icone === '🚗' ? 'selected' : ''}>🚗 Transporte</option>
                        <option value="💰" ${categoria.icone === '💰' ? 'selected' : ''}>💰 Salário</option>
                        <option value="📈" ${categoria.icone === '📈' ? 'selected' : ''}>📈 Investimentos</option>
                        <option value="💼" ${categoria.icone === '💼' ? 'selected' : ''}>💼 Freelance</option>
                    </select>
                </div>
                <div class="form-buttons">
                    <button type="button" onclick="closeModal()">Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('editCategoryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('editCategoryName').value;
        const icone = document.getElementById('editCategoryIcon').value;

        categorias[tipo][index] = { ...categoria, nome, icone };
        localStorage.setItem('categorias', JSON.stringify(categorias));
        closeModal();
        loadCategories();
    });
}

// Função para excluir uma categoria
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