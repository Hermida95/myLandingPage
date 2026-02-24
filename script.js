/**
 * scripts.js
 * 
 * Clean Code Implementation for Miguel Garcia Hermida Portfolio
 * Features: OOP architecture, Theme Management, Intersection Observer, i18n, Interactive Hover Effects
 */

// Translations Dictionary
const translations = {
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.subtitle": "Software Engineer crafting scalable web architectures.",
    "hero.desc": "Expertise in modern JavaScript, TypeScript, and React. Driven by Clean Code principles and robust Design Patterns.",
    "hero.cta": "View Projects",
    "about.title": "01<span class=\"dot\">.</span> About Me<span class=\"dot\">.</span>",
    "about.p1": "I am a Software Engineer bridging the gap between sophisticated technical architecture and clear business logic. With a foundation forged in enterprise management and retail, I bring a mature product vision to software development, ensuring that code not only functions flawlessly but solves real business problems.",
    "about.p2": "My technical stack is firmly rooted in the <strong>TypeScript</strong> and <strong>React</strong> ecosystem, extending deep into scalable <strong>Node.js</strong> backends and <strong>Dockerized</strong> deployments. I code with a strict adherence to <strong>Clean Code</strong> and established Design Patterns, resulting in maintainable, efficient, and semantic structures.",
    "about.p3": "<strong>Global Communication:</strong> Having formally studied <strong>Modern Languages Philology</strong>, my professional command of <strong>English</strong> and <strong>French</strong> is a core asset. It allows me to integrate seamlessly into international environments, effectively bridge communication gaps between technical and non-technical stakeholders, and collaborate efficiently across diverse global teams.",
    "projects.title": "02<span class=\"dot\">.</span> Selected Work<span class=\"dot\">.</span>",
    "projects.p1.overline": "Enterprise Tooling",
    "projects.p1.desc": "A comprehensive workforce management application emphasizing Clean Architecture. Features dynamic salary calculations based on contract variables.",
    "projects.p2.overline": "Security Infrastructure",
    "projects.p2.desc": "A privacy-first security utility engineered with pure JavaScript (Vanilla). Employs robust entropy generation optimized for zero external dependencies.",
    "projects.p3.overline": "Algorithmic Engineering",
    "projects.p3.desc": "A high-performance poker probability simulator showcasing the translation of highly complex mathematical logic into functional code.",
    "experience.title": "03<span class=\"dot\">.</span> Career Trajectory<span class=\"dot\">.</span>",
    "experience.e1.role": "Software Engineer",
    "experience.e1.date": "2024 — Present",
    "experience.e1.desc": "Operating in modern, agile corporate environments utilizing version control (Git) and containerized workflows (Docker). Strong emphasis on writing semantic, tested, and highly maintainable code to ensure long-term architectural stability.",
    "experience.e2.role": "Higher Degree in Web Application Development (DAW)",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Formalized deep technical skills traversing the entire stack. Engineering complex solutions with Java, PHP, and the modern JavaScript/TypeScript ecosystem. Extensive practice in advanced design patterns, server administration, and continuous integration.",
    "experience.e3.role": "Operations & Project Management",
    "experience.e3.date": "2015 — 2022",
    "experience.e3.desc": "End-to-end management of retail operations. Developed resilient leadership, high-stakes negotiation skills, and a holistic, client-facing product strategy that directly translates into building software that meets precise user needs and business metrics.",
    "contact.title": "Let's build something scalable<span class=\"dot\">.</span>",
    "contact.desc": "I am currently available for new opportunities. Whether you have a position open or just want to discuss software architecture, my inbox is open.",
    "contact.btn": "Get in Touch",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Engineered with precision and Clean Code."
  },
  fr: {
    "nav.about": "À Propos",
    "nav.work": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "hero.subtitle": "Ingénieur Logiciel concevant des architectures web évolutives.",
    "hero.desc": "Expertise en JavaScript moderne, TypeScript et React. Guidé par les principes du Clean Code et des Design Patterns robustes.",
    "hero.cta": "Voir les Projets",
    "about.title": "01<span class=\"dot\">.</span> À Propos de Moi<span class=\"dot\">.</span>",
    "about.p1": "Je suis un Ingénieur Logiciel créant un pont entre une architecture technique sophistiquée et une logique métier claire. Avec une fondation forgée dans la gestion d'entreprise, j'apporte une vision produit mature au développement, m'assurant que le code résout de vrais problèmes.",
    "about.p2": "Ma stack technique est ancrée dans l'écosystème <strong>TypeScript</strong> et <strong>React</strong>, s'étendant aux backends <strong>Node.js</strong> évolutifs et aux déploiements <strong>Docker</strong>. Je code avec une stricte adhésion au <strong>Clean Code</strong>.",
    "about.p3": "<strong>Communication Globale :</strong> Ayant formellement étudié la <strong>Philologie des Langues Modernes</strong>, ma maîtrise professionnelle de l'<strong>Anglais</strong> et du <strong>Français</strong> est un atout majeur pour les équipes internationales.",
    "projects.title": "02<span class=\"dot\">.</span> Travaux Sélectionnés<span class=\"dot\">.</span>",
    "projects.p1.overline": "Outils d'Entreprise",
    "projects.p1.desc": "Une application de gestion de la main-d'œuvre axée sur la Clean Architecture. Calculs dynamiques de salaires basés sur les variables de contrat.",
    "projects.p2.overline": "Infrastructure de Sécurité",
    "projects.p2.desc": "Un utilitaire de sécurité cryptographique conçu en Vanilla JavaScript avec une génération d'entropie optimisée sans dépendances externes.",
    "projects.p3.overline": "Ingénierie Algorithmique",
    "projects.p3.desc": "Un simulateur de probabilités de poker de haute performance illustrant la traduction de logiques mathématiques complexes en code fonctionnel.",
    "experience.title": "03<span class=\"dot\">.</span> Trajectoire Professionnelle<span class=\"dot\">.</span>",
    "experience.e1.role": "Ingénieur Logiciel",
    "experience.e1.date": "2024 — Présent",
    "experience.e1.desc": "Travail dans des environnements d'entreprise agiles modernes avec Git et Docker. Accent fort sur l'écriture de code sémantique et maintenable.",
    "experience.e2.role": "Diplôme Supérieur en Développement d'Applications Web",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Maîtrise de bout en bout de la stack technique. Ingénierie de solutions complexes avec Java, PHP et l'écosystème JavaScript moderne.",
    "experience.e3.role": "Gestion des Opérations & Projets",
    "experience.e3.date": "2015 — 2022",
    "experience.e3.desc": "Gestion complète d'opérations commerciales. Développement d'un leadership résilient et d'une vision stratégique produit axée sur le client.",
    "contact.title": "Construisons ensemble<span class=\"dot\">.</span>",
    "contact.desc": "Je suis actuellement disponible pour de nouvelles opportunités. Mon e-mail est ouvert pour discuter d'architecture logicielle.",
    "contact.btn": "Me Contacter",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Conçu avec précision et Clean Code."
  }
};

class Portfolio {
  constructor() {
    this.themeToggleBtn = document.getElementById('themeToggle');
    this.langToggleBtn = document.getElementById('langToggle');
    this.yearSpan = document.getElementById('year');

    // Initialize standard functionalities
    this.init();
  }

  init() {
    this.setupThemeManager();
    this.setupLanguageManager();
    this.setupIntersectionObserver();
    this.setupHoverImages();
    this.setCopyrightYear();
  }

  /**
   * Evaluates system preferences and local storage to set initial theme,
   * then adds the event listener for toggling modes.
   */
  setupThemeManager() {
    const currentTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.updateThemeIcon(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.updateThemeIcon(false);
    }

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }
  }

  toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.updateThemeIcon(!isDark);
  }

  updateThemeIcon(isNowDark) {
    if (!this.themeToggleBtn) return;
    this.themeToggleBtn.innerHTML = isNowDark
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    this.themeToggleBtn.setAttribute('aria-label', isNowDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  /**
   * Initializes Language system
   */
  setupLanguageManager() {
    const currentLang = localStorage.getItem('lang') || 'en';
    this.applyLanguage(currentLang);

    if (this.langToggleBtn) {
      this.langToggleBtn.addEventListener('click', () => {
        const activeLang = document.documentElement.getAttribute('lang');
        const newLang = activeLang === 'en' ? 'fr' : 'en';
        this.applyLanguage(newLang);
        this.setCopyrightYear(); // Fix year span inside i18n
      });
    }
  }

  applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    // Update Toggle UI
    if (this.langToggleBtn) {
      const activeSpan = this.langToggleBtn.querySelector('.lang-active');
      const inactiveSpan = this.langToggleBtn.querySelector('.lang-inactive');

      activeSpan.textContent = lang.toUpperCase();
      inactiveSpan.textContent = lang === 'en' ? 'FR' : 'EN';
    }

    // Apply translations
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }


  /**
   * Sets up the interactive hover image effect on the project list titles
   */
  setupHoverImages() {
    const container = document.getElementById('hover-image-container');
    const hoverImage = document.getElementById('hover-image');
    const hoverItems = document.querySelectorAll('.cursor-hover-item');
    const projectsSection = document.getElementById('projects');

    if (!container || !hoverImage || hoverItems.length === 0 || !projectsSection) return;

    let isHovering = false;

    const moveImage = (e) => {
      if (!isHovering) return;
      const sectionRect = projectsSection.getBoundingClientRect();
      const x = e.clientX - sectionRect.left;
      const y = e.clientY - sectionRect.top;
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;
    };

    hoverItems.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        const imageUrl = item.getAttribute('data-image');
        if (imageUrl) {
          hoverImage.src = imageUrl;
          isHovering = true;
          container.classList.add('show');
          moveImage(e);
        }
      });

      item.addEventListener('mousemove', moveImage);

      item.addEventListener('mouseleave', () => {
        isHovering = false;
        container.classList.remove('show');
      });
    });
  }

  /**
   * Adds efficient scroll animations matching the clean aesthetic
   */
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, options);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));
  }

  setCopyrightYear() {
    // The span is dynamically recreated if translation occurs, re-fetch it
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }
}

// Bootstrap application once DOM is entirely loaded
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
});
