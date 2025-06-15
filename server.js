const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta src
app.use(express.static(path.join(__dirname, 'src')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'dashboard.html'));
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 