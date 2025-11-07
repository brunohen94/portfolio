document.addEventListener('DOMContentLoaded', () => {

    const resources = {
        en: {
            translation: {
                "navAbout": "About",
                "navProjects": "Projects",
                "navContact": "Contact",
                "heroTitle": "Hi, I'm Bruno.",
                "heroSubtitle": "I am a dedicated and curious young person with a passion for technology.",
                "heroButton": "View My Work",
                "heroButtonResume": "My Resume",
                "aboutTitle": "About Me",
                "aboutP1": "I am a Full Stack developer who enjoys clean code and promoting the best user experience.",
                "aboutP2": "Here are a few technologies I've been working with recently:",
                "projectsTitle": "My Projects",
                "project1Title": "Community Center API",
                "project1Desc": "API for managing community centers during emergencies.",
                "project2Title": "Python File Organizer",
                "project2Desc": "A script to organize directory files into categories.",
                "contactTitle": "Get In Touch!",
                "contactP": "I'm always looking for new challenges and open to connections. If you have a project in mind, a question, or simply want to start a conversation, I'd be happy to hear from you. Feel free to send me a message!",
                "contactFormName": "Name",
                "contactFormEmail": "Email",
                "contactFormMessage": "Message",
                "contactFormButton": "Send Message"
            }
        },
        pt: {
            translation: {
                "navAbout": "Sobre",
                "navProjects": "Projetos",
                "navContact": "Contato",
                "heroTitle": "Olá, eu sou Bruno.",
                "heroSubtitle": "Sou um jovem esforçado e curioso pela tecnologia.",
                "heroButton": "Veja meu trabalho",
                "heroButtonResume": "Meu Currículo",
                "aboutTitle": "Sobre mim",
                "aboutP1": "Sou um desenvolvedor Full Stack que gosta de códigos limpos e gosta de promover a melhor experiência ao usuário.",
                "aboutP2": "Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:",
                "projectsTitle": "Meus Projetos",
                "project1Title": "Centro Comunitário API",
                "project1Desc": "API para gerenciamento de centros comunitários em emergências.",
                "project2Title": "Organizador de Arquivo Python",
                "project2Desc": "Script para organizar por catagorias os arquivos do diretório.",
                "contactTitle": "Entre em contato!",
                "contactP": "Busco novos desafios e estou sempre aberto a conexões. Se você tem um projeto em mente, uma pergunta ou simplesmente quer iniciar uma conversa, ficarei feliz em ouvir. Sinta-se à vontade para me enviar uma mensagem!",
                "contactFormName": "Nome",
                "contactFormEmail": "Email",
                "contactFormMessage": "Mensagem",
                "contactFormButton": "Enviar Mensagem"
            }
        }
    };

    const heroSubtitleElement = document.querySelector('.hero-subtitle');
    const typewriter = new Typewriter(heroSubtitleElement, {
        loop: false,
        delay: 75,
    });

    const startTypewriter = (lang) => {
        const text = i18next.t('heroSubtitle');
        typewriter
            .deleteAll(1)
            .typeString(text)
            .start();
    };

    const updateContent = () => {
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            if (key === 'heroSubtitle') return;
            element.textContent = i18next.t(key);
        });
    };

    const updateLanguageSelector = (lang) => {
        const languageLinks = document.querySelectorAll('.lang-link');
        languageLinks.forEach(link => {
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active-lang');
            } else {
                link.classList.remove('active-lang');
            }
        });
    };

    i18next.init({
        lng: localStorage.getItem('language') || 'pt',
        fallbackLng: 'pt',
        resources: resources
    }, (err, t) => {
        if (err) return console.error(err);
        updateContent();
        startTypewriter(i18next.language);
        updateLanguageSelector(i18next.language);
    });

    const languageSelector = document.querySelector('.language-selector');
    languageSelector.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('data-lang');
        
        if (selectedLang && selectedLang !== i18next.language) {
            i18next.changeLanguage(selectedLang, (err, t) => {
                if (err) return console.error(err);
                localStorage.setItem('language', selectedLang);
                updateContent();
                startTypewriter(selectedLang);
                updateLanguageSelector(selectedLang);
            });
        }
    });

    const hamburgerMenu = document.querySelector('.hamburger');
    const navigationMenu = document.querySelector('.nav-menu');
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navigationMenu.classList.toggle('active');
    });

    const navigationLinks = document.querySelectorAll('.nav-link');
    navigationLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburgerMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navigationMenu.classList.remove('active');
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToReveal = document.querySelectorAll('.revealable');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
});