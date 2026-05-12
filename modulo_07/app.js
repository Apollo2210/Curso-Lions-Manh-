import express from 'express';// Chama o Express
const app = express(); // Cria a lanchonete
const porta = 3000; // Define o endereço (número da lanchonete)

// ROTA 1: A entrada da lanchonete
app.get('/', (req, res) => {
  res.send('lanchonete!');
});

// ROTA 2: O cardápio
app.get('/cardapio', (req, res) => {
  res.send('Temos Hambúrguer e Suco de Laranja!');
});

// Liga o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});