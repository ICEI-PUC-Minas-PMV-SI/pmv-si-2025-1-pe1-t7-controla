document.addEventListener('DOMContentLoaded', function() {
  var usuario = localStorage.getItem("usuario");
  if(usuario){
      var analiseUsuario = JSON.parse(usuario);
      var userInfo = document.querySelector(".user-info");
      if(userInfo){
          const img = userInfo.querySelector('img');
          const nomeUsuario = analiseUsuario.nome;

          // Limpa o conteúdo atual
          userInfo.innerHTML = '';

          // Adiciona a imagem de volta
          if (img) {
              userInfo.appendChild(img);
          }

          // Adiciona o nome do usuário
          const nomeElement = document.createTextNode(" " + nomeUsuario);
          userInfo.appendChild(nomeElement);

          // Cria e adiciona o botão de logout
          const logoutButton = document.createElement('button');
          logoutButton.className = 'logout-btn';
          logoutButton.title = 'Sair';
          logoutButton.innerHTML = '<i class="ph ph-sign-out"></i>';
          
          logoutButton.addEventListener('click', function() {
              localStorage.removeItem("usuario");
              // Redireciona para a página inicial
              window.location.href = window.location.origin + '/index.html';
          });

          userInfo.appendChild(logoutButton);
      }
  }
}); 