document.addEventListener('DOMContentLoaded', function() {
    var inputTelefone = document.getElementById('telefonePlaceholder');
    
    inputTelefone.addEventListener('input', function() {
      var telefone = inputTelefone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
      telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); // Formata (XX) X
      telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2');    // Formata XXXX-X
      
      inputTelefone.value = telefone; // Atualiza o valor do campo
    });
  });