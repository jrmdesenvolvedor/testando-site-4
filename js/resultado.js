// Selecionando elementos do DOM
const dataEntradaInput = document.getElementById('data-entrada');
const horaEntradaInput = document.getElementById('hora-entrada');
const dataSaidaInput = document.getElementById('data-saida');
const horaSaidaInput = document.getElementById('hora-saida');

const dataEntradaInfo = document.getElementById('data-entrada-info');
const horaEntradaInfo = document.getElementById('hora-entrada-info');
const dataSaidaInfo = document.getElementById('data-saida-info');
const horaSaidaInfo = document.getElementById('hora-saida-info');
const tipoCobertoInfo = document.getElementById('tipoCoberto');
const periodoInfo = document.getElementById('periodo');
const mensagemEstadiaCurta = document.getElementById('mensagemEstadiaCurta');
const mensagemEstadiaLonga = document.getElementById('mensagemEstadiaLonga');
const valorReservaInfo = document.getElementById('valorReserva');
const valorTotalInfo = document.getElementById('valorTotal');

const valorDiariaCoberto = 29.99;
const valorDiariaDescoberto = 19.99;
const valorFixoCoberto = 395;
const valorFixoDescoberto = 275;

// Função para formatar a data
function formatDate(dateString) {
    const date = new Date(dateString);
    const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const day = utcDate.getUTCDate().toString().padStart(2, '0');
    const month = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
}

// Função para atualizar as informações
function updateInfo() {
    const dataEntrada = dataEntradaInput.value;
    const horaEntrada = horaEntradaInput.value;
    const dataSaida = dataSaidaInput.value;
    const horaSaida = horaSaidaInput.value;

    if (dataEntrada && horaEntrada && dataSaida && horaSaida) {
        dataEntradaInfo.textContent = formatDate(dataEntrada);
        horaEntradaInfo.textContent = horaEntrada;
        dataSaidaInfo.textContent = formatDate(dataSaida);
        horaSaidaInfo.textContent = horaSaida;

        // Calculando o período em milissegundos
        const entrada = new Date(`${dataEntrada}T${horaEntrada}`);
        const saida = new Date(`${dataSaida}T${horaSaida}`);
        const diffTime = saida - entrada;

        // Calculando o período em diárias de 24 horas
        const periodoDiarias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const excessTime = diffTime % (1000 * 60 * 60 * 24);

        // Aplicando a tolerância de 1 hora
        let periodo = periodoDiarias;
        if (excessTime > (1000 * 60 * 60)) { // Tolerância de 1 hora
            periodo += 1; // Adiciona uma diária extra
        }

        console.log(`Data Entrada: ${entrada}`);
        console.log(`Data Saída: ${saida}`);
        console.log(`Diferença em Milissegundos: ${diffTime}`);
        console.log(`Período em Dias (Inicial): ${periodoDiarias}`);
        console.log(`Excesso de Tempo em Milissegundos: ${excessTime}`);
        console.log(`Período em Dias (Com Tolerância): ${periodo}`);

        // Aplicando regras específicas
        if (periodo < 3) {
            periodo = 3; // Estadia mínima de 3 dias
            mensagemEstadiaCurta.style.display = 'block';
        } else {
            mensagemEstadiaCurta.style.display = 'none';
        }

        periodoInfo.textContent = `${periodo} Dia${periodo > 1 ? 's' : ''}`;

        // Atualizando valor da reserva com base no tipo selecionado
        let valorDiaria;
        if (tipoCobertoInfo.textContent === 'Coberto') {
            valorDiaria = valorDiariaCoberto;
        } else {
            valorDiaria = valorDiariaDescoberto;
        }
        valorReservaInfo.textContent = `R$ ${valorDiaria.toFixed(2)}`;

        // Calculando o valor total com base no período e tipo de vaga
        let valorTotal;
        if (periodo > 30) {
            valorTotal = tipoCobertoInfo.textContent === 'Coberto' ? valorFixoCoberto : valorFixoDescoberto;
        } else if (periodo > 13) {
            valorTotal = tipoCobertoInfo.textContent === 'Coberto' ? valorFixoCoberto : valorFixoDescoberto;
        } else {
            valorTotal = periodo * valorDiaria;
        }
        valorTotalInfo.textContent = `R$ ${valorTotal.toFixed(2)}`;

        // Mostrar mensagem de contato para estadias superiores a 30 dias
        if (periodo > 30) {
            mensagemEstadiaLonga.style.display = 'block';
        } else {
            mensagemEstadiaLonga.style.display = 'none';
        }

        console.log(`Período em Dias (Final): ${periodo}`);
        console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);
    }
}

// Função para definir a data mínima de saída
function setMinSaidaDate() {
    const dataEntrada = dataEntradaInput.value;
    if (dataEntrada) {
        const entrada = new Date(dataEntrada);
        entrada.setDate(entrada.getDate() + 3);
        const minSaida = entrada.toISOString().split('T')[0];
        dataSaidaInput.min = minSaida;
    } else {
        dataSaidaInput.min = ''; // Remove a restrição caso a data de entrada não esteja definida
    }
}

// Adicionando event listeners
dataEntradaInput.addEventListener('change', () => {
    setMinSaidaDate();
    updateInfo();
});
horaEntradaInput.addEventListener('change', updateInfo);
dataSaidaInput.addEventListener('change', updateInfo);
horaSaidaInput.addEventListener('change', updateInfo);

document.getElementById('cobertoButton').addEventListener('click', () => {
    tipoCobertoInfo.textContent = 'Coberto';
    updateInfo();
});

document.getElementById('descobertoButton').addEventListener('click', () => {
    tipoCobertoInfo.textContent = 'Descoberto';
    updateInfo();
});
updateInfo();
