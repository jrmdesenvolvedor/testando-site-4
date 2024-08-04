// Configuração do PagSeguro
var pagseguro = new PagSeguroDirectPayment({
    token: 'SEU_TOKEN_DE_ACESSO',
    mode: 'payment'
  });
  
  // Função para enviar os dados do pagamento para o PagSeguro
  function sendPaymentData() {
    var paymentData = {
      'paymentMethod': 'creditCard',
      'creditCardToken': '',
      'senderName': document.getElementById('name').value,
      'senderEmail': document.getElementById('email').value,
      'senderPhone': document.getElementById('phone').value,
      'senderCPF': document.getElementById('cpf').value,
      'creditCardNumber': document.getElementById('card-number').value,
      'creditCardExpiration': document.getElementById('card-expiration').value,
      'creditCardCVV': document.getElementById('card-cvv').value
    };
  
    pagseguro.createPaymentToken(paymentData, function(data) {
      if (data.error) {
        console.log('Erro ao criar o token de pagamento:', data.error);
      } else {
        console.log('Token de pagamento criado com sucesso:', data.token);
      }
    });
  }
  
  // Função para enviar o pagamento para o PagSeguro
  function sendPayment() {
    var paymentData = {
      'paymentMethod': 'creditCard',
      'creditCardToken': document.getElementById('card-number').value,
      'senderName': document.getElementById('name').value,
      'senderEmail': document.getElementById('email').value,
      'senderPhone': document.getElementById('phone').value,
      'senderCPF': document.getElementById('cpf').value,
      'amount': '10.00',
      'currency': 'BRL'
    };
  
    pagseguro.createPayment(paymentData, function(data) {
      if (data.error) {
        console.log('Erro ao criar o pagamento:', data.error);
      } else {
        console.log('Pagamento criado com sucesso:', data.paymentId);
      }
    });
  }  