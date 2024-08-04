// Função para armazenar informações no localStorage
function storeInfo() {
    const info = {
        dataEntrada: document.getElementById('data-entrada-info').textContent,
        horaEntrada: document.getElementById('hora-entrada-info').textContent,
        dataSaida: document.getElementById('data-saida-info').textContent,
        horaSaida: document.getElementById('hora-saida-info').textContent,
        tipoCoberto: document.getElementById('tipoCoberto').textContent,
        periodo: document.getElementById('periodo').textContent,
        valorReserva: document.getElementById('valorReserva').textContent,
        valorTotal: document.getElementById('valorTotal').textContent,
    };

    localStorage.setItem('info-container', JSON.stringify(info));
}

// Adicionar evento ao botão "Avançar"
document.getElementById('avancar-button').addEventListener('click', function() {
    storeInfo();
    window.location.href = '';
});