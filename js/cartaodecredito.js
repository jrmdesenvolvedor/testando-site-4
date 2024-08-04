// Selecione o botão Cartão de Crédito
//const cartaoCreditoBtn = document.getElementById('cartao-credito-btn');

// Selecione o formulário Cartão de Crédito
//const cartaoCreditoForm = document.getElementById('cartao-credito-form');

// Adicione um evento de clique ao botão Cartão de Crédito
//cartaoCreditoBtn.addEventListener('click', () => {
    // Exiba o formulário Cartão de Crédito
    //cartaoCreditoForm.style.display = 'block';
//});

// Selecione o botão Cartão de Crédito
const cartaoCreditoBtn = document.getElementById('cartao-credito-btn');

// Selecione o formulário Cartão de Crédito
const cartaoCreditoForm = document.getElementById('cartao-credito-form');

// Adicione um evento de clique ao botão Cartão de Crédito
cartaoCreditoBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que o evento de clique seja propagado
    cartaoCreditoForm.style.display = 'block'; // Exibe o formulário
});

document.getElementById('cartao-credito-btn').addEventListener('click', function() {
    document.getElementById('cartao-credito-form').style.display = 'block';
  });

  document.getElementById('cartao-credito-btn-fechar').addEventListener('click', function() {
    document.getElementById('cartao-credito-form').style.display = 'none';
  });

  document.getElementById('cartao-credito-btn').addEventListener('click', function() {
    document.getElementById('cartao-credito-form').classList.add('mostrar');
  });