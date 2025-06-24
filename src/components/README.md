# Componentes Reutilizáveis

Este diretório contém componentes reutilizáveis para o projeto Controla+.

## Componentes Disponíveis

### 1. Sidebar (`sidebar.html` + `sidebar.js`)
- **Arquivo HTML**: `src/components/sidebar.html`
- **Arquivo JS**: `src/js/sidebar.js`
- **Função**: Navegação lateral com links para todas as páginas
- **Como usar**: Incluir `<script src="js/sidebar.js"></script>` no `<head>` da página

### 2. User Header (`user-header.html` + `user-header.js`)
- **Arquivo HTML**: `src/components/user-header.html`
- **Arquivo JS**: `src/js/user-header.js`
- **Função**: Exibe informações do usuário logado (foto e nome)
- **Como usar**: 
  1. Incluir `<script src="js/user-header.js"></script>` no `<head>` da página
  2. Adicionar o HTML do componente onde necessário:
  ```html
  <div class="user-info">
    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Foto do usuário" id="userAvatar">
    <span id="userName">Carregando...</span>
  </div>
  ```

## Dados do Usuário

O componente User Header busca os dados do usuário no localStorage com a chave "usuario". A estrutura esperada é:

```javascript
{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senhaDoUsuário" // opcional
}
```

### Exemplo de como definir dados do usuário:

```javascript
const usuario = {
  nome: "João Silva",
  email: "joao@email.com"
};
localStorage.setItem('usuario', JSON.stringify(usuario));
```

### Função para atualizar o componente:

```javascript
// Atualiza o componente manualmente
updateUserHeader();
```