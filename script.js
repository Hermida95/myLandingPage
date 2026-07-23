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
    "hero.subtitle": "Backend Developer · Cloud & AI Ops Engineer.",
    "hero.desc": "Bridging software development, cloud infrastructure, and AI orchestration. Building with Node.js, Python, and AWS. Driven by Infrastructure as Code (Terraform), Kubernetes, and scalable CI/CD pipelines.",
    "hero.cta": "View Projects",
    "hero.cv": "Download CV",
    "about.title": "01<span class=\"dot\">.</span> About Me<span class=\"dot\">.</span>",
    "about.p1": "I am a Cloud Platform & AI Ops Engineer bridging the gap between sophisticated infrastructure, artificial intelligence integration, and clear business logic. With a foundation forged in enterprise management, I bring a mature product vision to tech, ensuring that systems are not only resilient but solve real business problems efficiently.",
    "about.p2": "My technical core revolves around the <strong>AWS ecosystem</strong>, containerized deployments with <strong>Docker & Kubernetes (K8s)</strong>, and <strong>Terraform (IaC)</strong>. I build robust APIs using <strong>Node.js and Python</strong> to seamlessly connect enterprise data with <strong>LLMs and AI models (LangChain, RAG)</strong>, deploying them through automated GitHub Actions pipelines.",
    "about.p3": "<strong>Global Communication:</strong> With a background in Modern Languages Philology, my professional command of <strong>English</strong> and <strong>French</strong> is a core asset. It allows me to integrate seamlessly into international tech hubs—particularly the <strong>Vaud canton and EPFL ecosystem</strong>—translating complex DevOps and AI concepts to non-technical stakeholders.",
    "about.stack.cloud": "Cloud & Infrastructure",
    "about.stack.devai": "Development & AI Ops",
    "about.stack.automation": "Automation & CI/CD",
    "projects.title": "02<span class=\"dot\">.</span> Selected Work<span class=\"dot\">.</span>",
    "projects.p4.overline": "Cloud-Native PWA",
    "projects.p4.desc": "A full-stack fitness & habits PWA: periodized gym routines, daily streaks, body-metrics tracking, and scheduled anti-sedentary notifications. Multi-user with JWT auth, deployed to GCP Cloud Run via Terraform and GitHub Actions CI/CD.",
    "projects.p1.overline": "Enterprise Tooling",
    "projects.p1.desc": "A comprehensive workforce management application emphasizing Clean Architecture. Features dynamic salary calculations based on contract variables.",
    "projects.p2.overline": "Security Infrastructure",
    "projects.p2.desc": "A privacy-first security utility engineered with pure JavaScript (Vanilla). Employs robust entropy generation optimized for zero external dependencies.",
    "projects.p3.overline": "Algorithmic Engineering",
    "projects.p3.desc": "A high-performance poker probability simulator showcasing the translation of highly complex mathematical logic into functional code.",
    "experience.title": "03<span class=\"dot\">.</span> Career Trajectory<span class=\"dot\">.</span>",
    "experience.e0.badge": "The Road Ahead",
    "experience.e0.role": "Cloud & DevOps Engineer",
    "experience.e0.date": "Where I'm heading next",
    "experience.e0.desc": "Building on solid backend foundations, my goal is to grow into Cloud & DevOps engineering: deepening Infrastructure as Code (Terraform), container orchestration with Kubernetes, and CI/CD pipelines on AWS and GCP. I want to own the full path from code to resilient, automated production infrastructure.",
    "experience.e1.role": "Backend Developer (Python)",
    "experience.e1.date": "2026 — Present",
    "experience.e1.desc": "Designing and building REST APIs with Python (FastAPI) and Node.js. Working with PostgreSQL and SQLAlchemy, JWT authentication, automated testing (pytest), and containerized environments with Docker — shipping clean, maintainable and well-tested backend services.",
    "experience.e2.role": "Higher Degree in Web Application Development (DAW)",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Formalized deep technical skills traversing the entire software stack. Engineered complex backend solutions, REST APIs, and gained extensive practice in database administration, server deployments, and modern architectural patterns.",
    "experience.e3.role": "Operations & Project Management",
    "experience.e3.date": "2015 — 2022",
    "experience.e3.desc": "End-to-end management of retail operations. Developed resilient leadership, high-stakes negotiation skills, and a holistic, client-facing product strategy that directly translates into building infrastructure that meets precise user needs and business metrics.",
    "contact.title": "Let's build scalable infrastructure<span class=\"dot\">.</span>",
    "contact.desc": "I am currently available for new opportunities. Whether you have a position open in the Vaud ecosystem or just want to discuss Cloud architecture and AI Ops, my inbox is open.",
    "contact.btn": "Get in Touch",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Engineered with precision and IaC."
  },
  fr: {
    "nav.about": "À Propos",
    "nav.work": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "hero.subtitle": "Développeur Backend · Ingénieur Cloud & AI Ops.",
    "hero.desc": "Création d'un pont entre le développement logiciel, l'infrastructure cloud et l'orchestration de l'IA. Conception avec Node.js, Python et AWS. Guidé par l'Infrastructure as Code (Terraform), Kubernetes et des pipelines CI/CD évolutifs.",
    "hero.cta": "Voir les Projets",
    "hero.cv": "Télécharger le CV",
    "about.title": "01<span class=\"dot\">.</span> À Propos de Moi<span class=\"dot\">.</span>",
    "about.p1": "Je suis un Ingénieur Plateforme Cloud & AI Ops créant un pont entre une infrastructure sophistiquée, l'intégration de l'intelligence artificielle et une logique métier claire. Avec une fondation forgée dans la gestion d'entreprise, j'apporte une vision produit mature à la technologie, m'assurant que les systèmes soient non seulement résilients, mais qu'ils résolvent efficacement de vrais problèmes commerciaux.",
    "about.p2": "Mon cœur technique s'articule autour de l'<strong>écosystème AWS</strong>, des déploiements conteneurisés avec <strong>Docker & Kubernetes (K8s)</strong> et <strong>Terraform (IaC)</strong>. Je construis des API robustes en utilisant <strong>Node.js et Python</strong> pour connecter de manière transparente les données d'entreprise aux <strong>LLMs et modèles d'IA (LangChain, RAG)</strong>, en les déployant via des pipelines GitHub Actions automatisés.",
    "about.p3": "<strong>Communication Globale :</strong> Fort de mes études en Philologie des Langues Modernes, ma maîtrise professionnelle de l'<strong>Anglais</strong> et du <strong>Français</strong> est un atout majeur. Cela me permet de m'intégrer parfaitement dans les hubs technologiques internationaux — en particulier <strong>le canton de Vaud et l'écosystème de l'EPFL</strong> — en traduisant des concepts complexes de DevOps et d'IA aux parties prenantes non techniques.",
    "about.stack.cloud": "Cloud & Infrastructure",
    "about.stack.devai": "Développement & AI Ops",
    "about.stack.automation": "Automatisation & CI/CD",
    "projects.title": "02<span class=\"dot\">.</span> Travaux Sélectionnés<span class=\"dot\">.</span>",
    "projects.p4.overline": "PWA Cloud-Native",
    "projects.p4.desc": "Une PWA full-stack de fitness & habitudes : routines de gym périodisées, séries quotidiennes, suivi des mesures corporelles et notifications anti-sédentarité programmées. Multi-utilisateur avec authentification JWT, déployée sur GCP Cloud Run via Terraform et des pipelines CI/CD GitHub Actions.",
    "projects.p1.overline": "Outils d'Entreprise",
    "projects.p1.desc": "Une application de gestion de la main-d'œuvre axée sur la Clean Architecture. Calculs dynamiques de salaires basés sur les variables de contrat.",
    "projects.p2.overline": "Infrastructure de Sécurité",
    "projects.p2.desc": "Un utilitaire de sécurité cryptographique conçu en Vanilla JavaScript avec une génération d'entropie optimisée sans dépendances externes.",
    "projects.p3.overline": "Ingénierie Algorithmique",
    "projects.p3.desc": "Un simulateur de probabilités de poker de haute performance illustrant la traduction de logiques mathématiques complexes en code fonctionnel.",
    "experience.title": "03<span class=\"dot\">.</span> Trajectoire Professionnelle<span class=\"dot\">.</span>",
    "experience.e0.badge": "La Suite",
    "experience.e0.role": "Ingénieur Cloud & DevOps",
    "experience.e0.date": "Ma prochaine étape",
    "experience.e0.desc": "En m'appuyant sur des bases backend solides, mon objectif est d'évoluer vers l'ingénierie Cloud & DevOps : approfondir l'Infrastructure as Code (Terraform), l'orchestration de conteneurs avec Kubernetes et les pipelines CI/CD sur AWS et GCP. Je souhaite maîtriser tout le parcours, du code à une infrastructure de production résiliente et automatisée.",
    "experience.e1.role": "Développeur Backend (Python)",
    "experience.e1.date": "2026 — Présent",
    "experience.e1.desc": "Conception et développement d'API REST avec Python (FastAPI) et Node.js. Travail avec PostgreSQL et SQLAlchemy, authentification JWT, tests automatisés (pytest) et environnements conteneurisés avec Docker — livraison de services backend propres, maintenables et bien testés.",
    "experience.e2.role": "Brevet de Technicien Supérieur (BTS) en Développement d'Applications Web",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Acquisition de compétences techniques approfondies couvrant l'ensemble de la stack logicielle. Ingénierie de solutions backend complexes, d'API REST et pratique intensive de l'administration de bases de données, des déploiements de serveurs et des modèles d'architecture modernes.",
    "experience.e3.role": "Gestion des Opérations & Projets",
    "experience.e3.date": "2015 — 2022",
    "experience.e3.desc": "Gestion complète d'opérations commerciales. Développement d'un leadership résilient, de compétences de négociation à forts enjeux et d'une stratégie produit globale orientée client, se traduisant directement par la construction d'infrastructures répondant aux besoins précis des utilisateurs et aux métriques de l'entreprise.",
    "contact.title": "Construisons une infrastructure évolutive<span class=\"dot\">.</span>",
    "contact.desc": "Je suis actuellement disponible pour de nouvelles opportunités. Que vous ayez un poste ouvert dans l'écosystème vaudois ou que vous souhaitiez simplement discuter d'architecture Cloud et d'AI Ops, mon e-mail est ouvert.",
    "contact.btn": "Me Contacter",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Conçu avec précision et IaC."
  },
  es: {
    "nav.about": "Perfil",
    "nav.work": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "hero.subtitle": "Desarrollador Backend · Ingeniero Cloud & AI Ops.",
    "hero.desc": "Uniendo desarrollo de software, infraestructura cloud y orquestación de IA. Construyo con Node.js, Python y AWS. Guiado por la Infraestructura como Código (Terraform), Kubernetes y pipelines CI/CD escalables.",
    "hero.cta": "Ver Proyectos",
    "hero.cv": "Descargar CV",
    "about.title": "01<span class=\"dot\">.</span> Sobre Mí<span class=\"dot\">.</span>",
    "about.p1": "Soy Ingeniero Cloud Platform & AI Ops, tendiendo puentes entre una infraestructura sofisticada, la integración de inteligencia artificial y una lógica de negocio clara. Con una base forjada en la gestión empresarial, aporto una visión de producto madura a la tecnología, asegurando que los sistemas no solo sean resilientes, sino que resuelvan problemas reales de negocio de forma eficiente.",
    "about.p2": "Mi núcleo técnico gira en torno al <strong>ecosistema AWS</strong>, los despliegues en contenedores con <strong>Docker y Kubernetes (K8s)</strong> y <strong>Terraform (IaC)</strong>. Construyo APIs robustas con <strong>Node.js y Python</strong> para conectar de forma fluida los datos empresariales con <strong>LLMs y modelos de IA (LangChain, RAG)</strong>, desplegándolos mediante pipelines automatizados de GitHub Actions.",
    "about.p3": "<strong>Comunicación Global:</strong> Con una formación en Filología de Lenguas Modernas, mi dominio profesional del <strong>inglés</strong> y el <strong>francés</strong> es un activo clave. Me permite integrarme sin fricciones en hubs tecnológicos internacionales —en particular <strong>el cantón de Vaud y el ecosistema de la EPFL</strong>— traduciendo conceptos complejos de DevOps e IA a interlocutores no técnicos.",
    "about.stack.cloud": "Cloud e Infraestructura",
    "about.stack.devai": "Desarrollo & AI Ops",
    "about.stack.automation": "Automatización & CI/CD",
    "projects.title": "02<span class=\"dot\">.</span> Trabajos Seleccionados<span class=\"dot\">.</span>",
    "projects.p4.overline": "PWA Cloud-Native",
    "projects.p4.desc": "Una PWA full-stack de fitness y hábitos: rutinas de gimnasio periodizadas, rachas diarias, seguimiento de métricas corporales y notificaciones antisedentarismo programadas. Multiusuario con autenticación JWT, desplegada en GCP Cloud Run mediante Terraform y pipelines CI/CD de GitHub Actions.",
    "projects.p1.overline": "Herramientas Empresariales",
    "projects.p1.desc": "Una aplicación integral de gestión de personal centrada en Clean Architecture. Cálculos dinámicos de salario basados en las variables del contrato.",
    "projects.p2.overline": "Infraestructura de Seguridad",
    "projects.p2.desc": "Una utilidad de seguridad centrada en la privacidad, desarrollada en JavaScript puro (Vanilla). Emplea una generación de entropía robusta y optimizada sin dependencias externas.",
    "projects.p3.overline": "Ingeniería Algorítmica",
    "projects.p3.desc": "Un simulador de probabilidades de póker de alto rendimiento que demuestra la traducción de una lógica matemática muy compleja en código funcional.",
    "experience.title": "03<span class=\"dot\">.</span> Trayectoria Profesional<span class=\"dot\">.</span>",
    "experience.e0.badge": "El Camino a Seguir",
    "experience.e0.role": "Ingeniero Cloud & DevOps",
    "experience.e0.date": "Mi próximo paso",
    "experience.e0.desc": "Partiendo de una base backend sólida, mi objetivo es crecer hacia la ingeniería Cloud & DevOps: profundizar en la Infraestructura como Código (Terraform), la orquestación de contenedores con Kubernetes y los pipelines CI/CD en AWS y GCP. Quiero dominar todo el recorrido, del código a una infraestructura de producción resiliente y automatizada.",
    "experience.e1.role": "Desarrollador Backend (Python)",
    "experience.e1.date": "2026 — Presente",
    "experience.e1.desc": "Diseño y desarrollo de APIs REST con Python (FastAPI) y Node.js. Trabajo con PostgreSQL y SQLAlchemy, autenticación JWT, testing automatizado (pytest) y entornos en contenedores con Docker — entregando servicios backend limpios, mantenibles y bien probados.",
    "experience.e2.role": "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Consolidación de competencias técnicas profundas a lo largo de todo el stack de software. Ingeniería de soluciones backend complejas, APIs REST y práctica intensiva en administración de bases de datos, despliegue de servidores y patrones de arquitectura modernos.",
    "experience.e3.role": "Gestión de Operaciones y Proyectos",
    "experience.e3.date": "2015 — 2022",
    "experience.e3.desc": "Gestión integral de operaciones de retail. Desarrollo de un liderazgo resiliente, habilidades de negociación de alto nivel y una estrategia de producto orientada al cliente que se traduce directamente en construir infraestructura que responde a las necesidades precisas de los usuarios y a las métricas de negocio.",
    "contact.title": "Construyamos infraestructura escalable<span class=\"dot\">.</span>",
    "contact.desc": "Actualmente estoy disponible para nuevas oportunidades. Ya sea que tengas una posición abierta en el ecosistema de Vaud o simplemente quieras hablar de arquitectura Cloud y AI Ops, mi bandeja de entrada está abierta.",
    "contact.btn": "Hablemos",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Diseñado con precisión e IaC."
  }
};

class Portfolio {
  constructor() {
    this.themeToggleBtn = document.getElementById('themeToggle');
    this.langButtons = document.querySelectorAll('.lang-option');
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
    const savedLang = localStorage.getItem('lang');
    const currentLang = translations[savedLang] ? savedLang : 'en';
    this.applyLanguage(currentLang);

    this.langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.applyLanguage(btn.getAttribute('data-lang'));
        this.setCopyrightYear(); // Fix year span inside i18n
      });
    });
  }

  applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    // Update selector UI: highlight the active language
    this.langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

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
