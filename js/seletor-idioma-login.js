function changeLanguage() {
    const language = document.getElementById('languageSelector').value;
    const elements = {
        "title": {
            "pt-br": "Faça seu Login",
            "en": "Login",
            "es": "Iniciar sesión"
        },
        "email-label": {
            "pt-br": "Email*",
            "en": "Email*",
            "es": "Correo electrónico*"
        },
        "senha-label": {
            "pt-br": "Senha*",
            "en": "Password*",
            "es": "Contraseña*"
        },
        "lembrar-label": {
            "pt-br": "Lembrar-me",
            "en": "Remember me",
            "es": "Recuérdame"
        },
        "entrar-button": {
            "pt-br": "Entrar",
            "en": "Login",
            "es": "Iniciar sesión"
        },
        "cadastro-button": {
            "pt-br": "Cadastre-se",
            "en": "Register",
            "es": "Registro"
        },
        "esqueci-senha-label": {
            "pt-br": "Esqueci minha senha",
            "en": "Forgot my password",
            "es": "Olvidé mi contraseña"
        },
        "desenvolvido-label": {
            "pt-br": "Desenvolvido Por",
            "en": "Developed by",
            "es": "Desarrollado por"
        },
        "links-úteis-label": {
            "pt-br": "Links Úteis",
            "en": "Useful Links",
            "es": "Enlaces útiles"
        },
        "politica-privacidade-label": {
            "pt-br": "Política de Privacidade",
            "en": "Privacy Policy",
            "es": "Política de Privacidad"
        },
        "canais-atendimento-label": {
            "pt-br": "Canais de Atendimento",
            "en": "Customer Service",
            "es": "Canales de Atención"
        }
    };

    const placeholders = {
        "emailPlaceholder": {
            "pt-br": "Digite seu email",
            "en": "Enter your email",
            "es": "Ingrese su correo electrónico"
        },
        "senha": {
            "pt-br": "Digite sua senha",
            "en": "Enter your password",
            "es": "Ingrese su contraseña"
        }
    };

    for (const [key, value] of Object.entries(elements)) {
        document.getElementById(key).innerText = value[language];
    }

    for (const [key, value] of Object.entries(placeholders)) {
        document.getElementById(key).placeholder = value[language];
    }
}

document.getElementById('login-form').addEventListener('submit', function() {
    document.querySelector('.form-container').style.display = 'none';
});