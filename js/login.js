const nodemailer = require('nodemailer');

// Configurações de transporte usando Gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com', // Seu endereço de email
        pass: 'suasenha' // Sua senha de email
    }
});

// Função para enviar email
function sendEmail(toEmail, subject, text) {
    let mailOptions = {
        from: 'seuemail@gmail.com',
        to: toEmail,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

module.exports = sendEmail;

// Importe a função de envio de email
const sendEmail = require('./sendMail');

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evite a submissão do formulário

    const email = document.getElementById('emailPlaceholder').value;
    const password = document.getElementById('senha').value;

    // Validação básica
    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    // Simulando autenticação no backend
    authenticateUser(email, password).then(response => {
        if (response.success) {
            alert("Login bem-sucedido!");

            // Enviar email de teste
            sendEmail(email, 'Teste de Login', 'Você fez login com sucesso!');

            // Redirecionar para outra página após o login
            window.location.href = "index.html";
        } else {
            alert("Email ou senha incorretos.");
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function authenticateUser(email, password) {
    // Simulando chamada ao backend
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === "usuario@example.com" && password === "senha123") {
                resolve({ success: true });
            } else {
                resolve({ success: false });
            }
        }, 1000);
    });
}

// Mostrar/Ocultar senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('senha');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});
