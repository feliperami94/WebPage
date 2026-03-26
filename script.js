// ============================================
// TUTO MUSIC — Script
// ============================================

const translations = {
    en: {
        "nav-about": "About",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-vlog": "Vlog",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "hero-title": "Mixing & Mastering\nEngineer",
        "hero-subtitle": "Technical mastery guided by emotional intention. Specializing in Hip Hop, Trap, Reggaetón & Urbano.",
        "hero-cta": "Get a Quote",
        "about-title": "About Me",
        "about-p1": "I am Tuto Music — a sound engineer driven by perception, emotion, and musical intention rather than technical complexity. I understand what makes a record feel alive.",
        "about-p2": "My work lives at the intersection of raw, urban energy and clean, high-end sonics. Whether it's the weight of an 808 or the intimacy of a vocal, every decision I make serves the emotion of the song.",
        "services-title": "Services",
        "services-subtitle": "Perception over gear. Intention over process.",
        "service-mixing-title": "Mixing",
        "service-mixing-desc": "Sculpting space, depth, and clarity so every element breathes and connects emotionally.",
        "service-mastering-title": "Mastering",
        "service-mastering-desc": "The final lens. Optimizing loudness, tonal balance, and translation for every platform.",
        "service-production-title": "Production",
        "service-production-desc": "Building sonic worlds around your vision — from the first texture to the final arrangement.",
        "service-recording-title": "Recording",
        "service-recording-desc": "Capturing honest, raw performances in a space designed for focus and comfort.",
        "service-live-title": "Live Sound",
        "service-live-desc": "Translating studio precision to the stage — immersive, clear, unforgettable.",
        "portfolio-title": "Portfolio",
        "portfolio-subtitle": "Recent work — hear the intention behind every mix.",
        "vlog-title": "Studio Vlog",
        "faq-title": "Frequently Asked Questions",
        "faq-q1": "How do I send my files for mixing?",
        "faq-a1": "Export your stems as high-quality WAV files (24-bit, 44.1kHz or higher) with processing bypassed. Compress and send via WeTransfer or Dropbox.",
        "faq-q2": "How many revisions are included?",
        "faq-a2": "Up to 3 rounds of revisions are included to make sure the final result matches your vision.",
        "faq-q3": "What are your turnaround times?",
        "faq-a3": "A standard mix and master takes 3–5 business days. Rush delivery is available for an additional fee.",
        "contact-title": "Let's Work Together",
        "contact-subtitle": "Tell me about your project. Let's make it sound the way it deserves.",
        "form-name": "Name",
        "form-email": "Email",
        "form-service-label": "Service",
        "form-service-mixing": "Mixing",
        "form-service-mastering": "Mastering",
        "form-service-mixmaster": "Mix & Master",
        "form-service-prod": "Production",
        "form-service-recording": "Recording",
        "form-service-live": "Live Sound",
        "form-message": "Message",
        "form-submit": "Send Message",
        "footer-rights": "All rights reserved."
    },
    es: {
        "nav-about": "Sobre Mí",
        "nav-services": "Servicios",
        "nav-portfolio": "Portafolio",
        "nav-vlog": "Videoblog",
        "nav-faq": "Preguntas",
        "nav-contact": "Contacto",
        "hero-title": "Ingeniero de Mezcla\ny Masterización",
        "hero-subtitle": "Dominio técnico guiado por la intención emocional. Especializado en Hip Hop, Trap, Reggaetón y Urbano.",
        "hero-cta": "Cotizar Ahora",
        "about-title": "Sobre Mí",
        "about-p1": "Soy Tuto Music — un ingeniero de sonido guiado por la percepción, la emoción y la intención musical, más que por la complejidad técnica. Entiendo lo que hace que un disco se sienta vivo.",
        "about-p2": "Mi trabajo vive en la intersección de la energía urbana cruda y la sonoridad limpia de alto nivel. Ya sea el peso de un 808 o la intimidad de una voz, cada decisión que tomo sirve a la emoción de la canción.",
        "services-title": "Servicios",
        "services-subtitle": "Percepción sobre equipo. Intención sobre proceso.",
        "service-mixing-title": "Mezcla",
        "service-mixing-desc": "Esculpiendo espacio, profundidad y claridad para que cada elemento respire y conecte emocionalmente.",
        "service-mastering-title": "Masterización",
        "service-mastering-desc": "El lente final. Optimizando volumen, balance tonal y traducción para cada plataforma.",
        "service-production-title": "Producción",
        "service-production-desc": "Construyendo mundos sonoros alrededor de tu visión — desde la primera textura hasta el arreglo final.",
        "service-recording-title": "Grabación",
        "service-recording-desc": "Capturando interpretaciones honestas y crudas en un espacio diseñado para el enfoque y la comodidad.",
        "service-live-title": "Sonido en Vivo",
        "service-live-desc": "Traduciendo la precisión del estudio al escenario — inmersivo, claro, inolvidable.",
        "portfolio-title": "Portafolio",
        "portfolio-subtitle": "Trabajo reciente — escucha la intención detrás de cada mezcla.",
        "vlog-title": "Videoblog del Estudio",
        "faq-title": "Preguntas Frecuentes",
        "faq-q1": "¿Cómo envío mis archivos para mezcla?",
        "faq-a1": "Exporta tus stems en WAV de alta calidad (24-bit, 44.1kHz o superior) sin procesamiento. Comprímelos y envíalos vía WeTransfer o Dropbox.",
        "faq-q2": "¿Cuántas revisiones están incluidas?",
        "faq-a2": "Hasta 3 rondas de revisiones están incluidas para asegurar que el resultado final coincida con tu visión.",
        "faq-q3": "¿Cuáles son los tiempos de entrega?",
        "faq-a3": "Una mezcla y máster estándar toma de 3 a 5 días hábiles. Entrega exprés disponible por un cargo adicional.",
        "contact-title": "Trabajemos Juntos",
        "contact-subtitle": "Cuéntame sobre tu proyecto. Hagamos que suene como se merece.",
        "form-name": "Nombre",
        "form-email": "Correo",
        "form-service-label": "Servicio",
        "form-service-mixing": "Mezcla",
        "form-service-mastering": "Masterización",
        "form-service-mixmaster": "Mezcla y Máster",
        "form-service-prod": "Producción",
        "form-service-recording": "Grabación",
        "form-service-live": "Sonido en Vivo",
        "form-message": "Mensaje",
        "form-submit": "Enviar Mensaje",
        "footer-rights": "Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ── FAQ Accordion ──
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.classList.toggle('active');
            content.style.maxHeight = button.classList.contains('active')
                ? content.scrollHeight + 'px'
                : null;
        });
    });

    // ── Language Toggle ──
    const langSwitch = document.getElementById('lang-switch');
    const langEN = document.getElementById('lang-indicator-en');
    const langES = document.getElementById('lang-indicator-es');

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'OPTION') {
                    el.textContent = translations[lang][key];
                } else if (key === 'hero-title') {
                    // Preserve the <br> in the hero title
                    el.innerHTML = translations[lang][key].replace('\n', '<br>');
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        langEN.classList.toggle('active-lang', lang === 'en');
        langEN.classList.toggle('inactive-lang', lang !== 'en');
        langES.classList.toggle('active-lang', lang === 'es');
        langES.classList.toggle('inactive-lang', lang !== 'es');
        if (langSwitch) langSwitch.checked = lang === 'es';
    }

    if (langSwitch) {
        langSwitch.addEventListener('change', (e) => {
            setLanguage(e.target.checked ? 'es' : 'en');
        });
    }

    // ── Scroll Reveal ──
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ── Contact Form ──
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isEs = langSwitch && langSwitch.checked;
            alert(isEs ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
            e.target.reset();
        });
    }
});
