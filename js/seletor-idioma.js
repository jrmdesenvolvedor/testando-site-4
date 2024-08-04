const translations = {
    en: {
        title: "Select the reservation period",
        dataEntradaLabel: "Check-in Date",
        horaEntradaLabel: "Check-in Time",
        dataSaidaLabel: "Check-out Date",
        horaSaidaLabel: "Check-out Time",
        tipoVagaLabel: "Parking Type",
        cobertoButton: "Covered",
        descobertoButton: "Uncovered",
        segInfoTitle: "Your Information",
        dadosEntradaLabel: "Check-in Date",
        dadosSaidaLabel: "Check-out Date",
        tipoVagaInfo: "Parking Type",
        tipoCoberto: "Covered",
        periodoLabel: "Period",
        valorDiariaLabel: "Daily Rate",
        totalLabel: "Total",
        dias: 'days',
        avancarButton: "Proceed",
        importanteTitle: "Important",
        importanteText: `
            Due to high demand, the availability of "self park" can only be verified at the entrance.<br>
            Price for passenger vehicles with up to 5 passengers.<br>
            Check availability and price for utility vehicles, vans or more passengers in the vehicle.<br>
            We have spots for RAM/F-150 and similar (R$ 25.99 per day uncovered). Reservations and information via WhatsApp (11) 98404-2366.<br>
            We do not transport boxes, boards, bikes, and large volumes.<br>
            The trip to the airport takes 10 to 15 minutes. Vans every 30 minutes. Example: 10:00, 10:30, 11:00.<br>
            Minimum stay of 3 days.<br>
            Label your luggage well. This will make your life easier throughout the trip.
        `,
        mensagemEstadiaLonga: "For stays longer than 30 days, contact us! Just click on WhatsApp!",
        mensagemEstadiaCurta: "The minimum stay is 3 days.",
        desenvolvidolabel: "developed by",
        linksúteislabel: "useful links",
        canaisatendimentolabel: "service channels",
        politicaprivacidadelabel: "Privacy Policy"
    },
    es: {
        title: "Seleccione el período de reserva",
        dataEntradaLabel: "Fecha de entrada",
        horaEntradaLabel: "Hora de entrada",
        dataSaidaLabel: "Fecha de salida",
        horaSaidaLabel: "Hora de salida",
        tipoVagaLabel: "Tipo de plaza",
        cobertoButton: "Cubierto",
        descobertoButton: "Descubierto",
        segInfoTitle: "Sus datos",
        dadosEntradaLabel: "Datos de entrada",
        dadosSaidaLabel: "Datos de salida",
        tipoVagaInfo: "Tipo de plaza",
        periodoLabel: "Período",
        valorDiariaLabel: "Tarifa diaria",
        totalLabel: "Total",
        dias: 'días',
        avancarButton: "Avanzar",
        importanteTitle: "Importante",
        importanteText: `
            Debido a la alta demanda, la disponibilidad de "self park" solo se puede verificar en la entrada.<br>
            Precio para vehículos de pasajeros con hasta 5 pasajeros.<br>
            Consulte disponibilidad y precio para vehículos utilitarios, furgonetas o más pasajeros en el vehículo.<br>
            Tenemos plazas para RAM/F-150 y similares (R$ 25.99 por día descubierto). Reservas e información vía WhatsApp (11) 98404-2366.<br>
            No transportamos cajas, tablas, bicicletas y grandes volúmenes.<br>
            El viaje al aeropuerto dura de 10 a 15 minutos. Furgonetas cada 30 minutos. Ejemplo: 10:00, 10:30, 11:00.<br>
            Estancia mínima de 3 días.<br>
            Etiquete bien su equipaje. Esto facilitará su vida durante todo el viaje.
        `,
        mensagemEstadiaLonga: "Para estancias de más de 30 días, ¡contáctenos! ¡Solo haga clic en WhatsApp!",
        mensagemEstadiaCurta: "La estancia mínima es de 3 días.",
        desenvolvidolabel: "desarrollado por",
        linksúteislabel: "enlaces útiles",
        canaisatendimentolabel: "canales de servicio",
        politicaprivacidadelabel: "Política de privacidad"
    },
    'pt-br': {
        title: "Selecione o período de reserva",
        dataEntradaLabel: "Data Entrada",
        horaEntradaLabel: "Hora Entrada",
        dataSaidaLabel: "Data Saída",
        horaSaidaLabel: "Hora Saída",
        tipoVagaLabel: "Tipo de Vaga",
        cobertoButton: "Coberto",
        descobertoButton: "Descoberto",
        segInfoTitle: "Segue suas informações",
        dadosEntradaLabel: "Dados Entrada",
        dadosSaidaLabel: "Dados Saída",
        tipoVagaInfo: "Tipo Vaga",
        periodoLabel: "Período",
        valorDiariaLabel: "Valor da Diária",
        totalLabel: "Total",
        dias: 'dias',
        avancarButton: "Avançar",
        importanteTitle: "Importante",
        importanteText: `
            Em virtude da alta demanda, a disponibilidade do "self park" só pode ser verificado na entrada.<br>
            Valor para veículos de passeio com até 5 passageiros.<br>
            Consulte disponibilidade e valor para utilitários, vans ou mais passageiros no veículo.<br>
            Temos vagas para RAM/F-150 e similares(R$ 25,99 diária no descoberto). Reservas e informações via Whatsapp (11) 98404-2366.<br>
            Não transportamos caixas, pranchas, bikes e grandes volumes.<br>
            O trajeto até o aeroporto leva de 10 a 15 minutos. Vans a cada 30 minutos. Exemplo: 10:00, 10:30, 11:00.<br>
            Estadia mínima de 3 diárias.<br>
            Identifique bem as suas bagagens. Isso facilitará a sua vida durante toda a viagem.
        `,
        mensagemEstadiaLonga: "Para estadias acima de 30 dias, entre em contato conosco! Só clicar no Whatsapp!",
        mensagemEstadiaCurta: "A estadia mínima é de 3 dias.",
        desenvolvidolabel: "desenvolvido por",
        linksúteislabel: "links úteis",
        canaisatendimentolabel: "canais de atendimento",
        politicaprivacidadelabel: "política de privacidade"
    }
};

document.getElementById('languageSelector').addEventListener('change', changeLanguage);
document.getElementById('cobertoButton').addEventListener('click', () => setParkingType('coberto'));
document.getElementById('descobertoButton').addEventListener('click', () => setParkingType('descoberto'));

function changeLanguage() {
    const languageSelector = document.getElementById('languageSelector');
    const selectedLanguage = languageSelector.value;

    document.getElementById('title').innerText = translations[selectedLanguage].title;
    document.getElementById('data-entrada-label').innerText = translations[selectedLanguage].dataEntradaLabel;
    document.getElementById('hora-entrada-label').innerText = translations[selectedLanguage].horaEntradaLabel;
    document.getElementById('data-saida-label').innerText = translations[selectedLanguage].dataSaidaLabel;
    document.getElementById('hora-saida-label').innerText = translations[selectedLanguage].horaSaidaLabel;
    document.getElementById('tipo-vaga-label').innerText = translations[selectedLanguage].tipoVagaLabel;
    document.getElementById('cobertoButton').innerText = translations[selectedLanguage].cobertoButton;
    document.getElementById('descobertoButton').innerText = translations[selectedLanguage].descobertoButton;
    document.getElementById('seg-info-title').innerText = translations[selectedLanguage].segInfoTitle;
    document.getElementById('dados-entrada-label').innerText = translations[selectedLanguage].dadosEntradaLabel;
    document.getElementById('dados-saida-label').innerText = translations[selectedLanguage].dadosSaidaLabel;
    document.getElementById('tipo-vaga-info').innerText = translations[selectedLanguage].tipoVagaInfo;
    document.getElementById('periodo-label').innerText = translations[selectedLanguage].periodoLabel;
    document.getElementById('valor-diaria-label').innerText = translations[selectedLanguage].valorDiariaLabel;
    document.getElementById('total-label').innerText = translations[selectedLanguage].totalLabel;
    document.getElementById('avancar-button').innerText = translations[selectedLanguage].avancarButton;
    document.getElementById('importante-title').innerText = translations[selectedLanguage].importanteTitle;
    document.getElementById('importante-text').innerHTML = translations[selectedLanguage].importanteText;
    document.getElementById('mensagem-estadia-longa').innerText = translations[selectedLanguage].mensagemEstadiaLonga;
    document.getElementById('mensagem-estadia-curta').innerText = translations[selectedLanguage].mensagemEstadiaCurta;
    document.getElementById('desenvolvido-label').innerText = translations[selectedLanguage].desenvolvidolabel;
    document.getElementById('links-úteis-label').innerText = translations[selectedLanguage].linksúteislabel;
    document.getElementById('canais-atendimento-label').innerText = translations[selectedLanguage].canaisatendimentolabel;
    document.getElementById('politica-privacidade-label').innerText = translations[selectedLanguage].politicaprivacidadelabel;

updateParkingType();
updatePeriod();
}

let currentParkingType = '';

function setParkingType(type) {
    currentParkingType = type;
    updateParkingType();
}

function updateParkingType() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const tipoCoberto = translations[selectedLanguage].cobertoButton;
    const tipoDescoberto = translations[selectedLanguage].descobertoButton;
    document.getElementById('tipoCoberto').innerText = currentParkingType === 'coberto' ? tipoCoberto : tipoDescoberto;
}

function updatePeriod() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const periodoLabel = translations[selectedLanguage].periodoLabel;

    const dataEntrada = document.getElementById('data-entrada').value;
    const horaEntrada = document.getElementById('hora-entrada').value;
    const dataSaida = document.getElementById('data-saida').value;
    const horaSaida = document.getElementById('hora-saida').value;

    const entrada = new Date(dataEntrada + 'T' + horaEntrada);
    const saida = new Date(dataSaida + 'T' + horaSaida);

    const diffTime = Math.abs(saida - entrada);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('periodo').innerText = `${diffDays} ${translations[selectedLanguage].dias}`;
}