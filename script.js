/**
 * scripts.js
 *
 * Clean Code Implementation for Miguel Garcia Hermida Portfolio
 * Features: OOP architecture, Theme Management, Intersection Observer, i18n, Interactive Hover Effects
 *
 * Language model:
 *  - Default language is Spanish (sales-first, target market = Spain).
 *  - The sales content (Servicios, FAQ, sales hero copy) is Spanish-only and
 *    hardcoded in index.html; elements tagged data-lang-only="es" are shown only
 *    when the active language is Spanish, so EN/FR render a clean technical portfolio.
 */

// Translations Dictionary
const translations = {
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.subtitle": "Backend Developer — Python · LLMs in production · Cloud (GCP/AWS).",
    "hero.desc": "I design and build backends in Python (FastAPI/Django) and take LLMs to production: microservices on GCP, robust APIs and Docker deployments. I come from 8+ years leading teams and operations in retail, so I build with the business — and whoever will use it — in mind. Currently expanding into Cloud/DevOps (AWS SAA, Terraform, Kubernetes).",
    "hero.whatsapp": "Message me on WhatsApp",
    "hero.cv": "Download CV",
    "about.title": "01<span class=\"dot\">.</span> About Me<span class=\"dot\">.</span>",
    "about.p1": "I'm a backend developer focused on <strong>Python (FastAPI/Django)</strong>. During my internship at <strong>Coinscrap Finance</strong> (fintech) I integrated <strong>LLMs in production</strong> and worked with microservices on <strong>GCP</strong>, in a real product environment. Before tech, I led teams and operations in retail for over 8 years — that experience gives me a read on business and customers that I bring to every system I build.",
    "about.p2": "My technical core is <strong>Python (FastAPI/Django)</strong>, with <strong>Node.js</strong> and <strong>TypeScript</strong> on the JavaScript side. REST APIs, <strong>PostgreSQL / SQLAlchemy</strong>, <strong>Docker</strong> and deployment on <strong>GCP</strong>. I integrate <strong>LLMs into production flows</strong> — not demos — with authentication, automated testing (pytest) and solid engineering practices. I'm currently expanding this profile toward Cloud/DevOps with the <strong>AWS SAA</strong> certification, <strong>Terraform</strong> and <strong>Kubernetes</strong>.",
    "about.p3": "<strong>Communication:</strong> with a background in Modern Languages Philology, I have a professional command of <strong>English</strong> and <strong>French</strong>. I translate technical concepts — backend, AI, DevOps — into business language, which is key when the person across the table isn't technical.",
    "about.stack.languages": "Languages",
    "about.stack.core": "Backend & Data",
    "about.stack.ai": "AI in Production & Cloud",
    "about.stack.learning": "Expanding · In Progress",
    "projects.title": "02<span class=\"dot\">.</span> Selected Work<span class=\"dot\">.</span>",
    "projects.p4.overline": "Cloud-Native PWA",
    "projects.p4.desc": "A full-stack fitness & habits PWA: periodized gym routines, daily streaks, body-metrics tracking, and scheduled anti-sedentary notifications. Multi-user with JWT auth, deployed to GCP Cloud Run via Terraform and GitHub Actions CI/CD.",
    "projects.p1.overline": "Enterprise Tooling",
    "projects.p1.desc": "A comprehensive workforce management application emphasizing Clean Architecture. Features dynamic salary calculations based on contract variables.",
    "projects.invoice.overline": "AI Agent · Document Automation",
    "projects.invoice.desc": "An AI agent that turns invoice and delivery-note PDFs (text or scanned) into structured, validated data ready for Google Sheets. It doesn't blindly trust the LLM: it cross-checks amounts (lines vs. tax base vs. total) and flags anything that doesn't add up as needs_review instead of letting bad data through.",
    "projects.rehab.overline": "Full-Stack · Healthtech",
    "projects.rehab.desc": "A therapeutic PWA for patients with acquired brain injury (stroke, TBI). Built under strict clinical-accessibility principles: near-zero cognitive load, oversized hitboxes, error-tolerant \"magnetic\" drag & drop and positive feedback. Production-grade deployment with hardened security (nginx, CSP).",
    "projects.gitedu.overline": "Developer Tool · Desktop",
    "projects.gitedu.desc": "A desktop app that visualizes your local repositories as an interactive commit graph and — unlike most Git GUIs — shows the exact command it's about to run and its effect on the branch tree before running it. It even scripts interactive rebase with no terminal.",
    "experience.title": "03<span class=\"dot\">.</span> Career Trajectory<span class=\"dot\">.</span>",
    "experience.e0.badge": "The Road Ahead",
    "experience.e0.role": "Cloud & DevOps Engineer",
    "experience.e0.date": "Where I'm heading next",
    "experience.e0.desc": "Building on solid backend foundations, my goal is to grow into Cloud & DevOps engineering: deepening Infrastructure as Code (Terraform), container orchestration with Kubernetes, and CI/CD pipelines on AWS and GCP. I want to own the full path from code to resilient, automated production infrastructure.",
    "experience.free.role": "Freelance Developer — AI Automation",
    "experience.free.date": "2025 — Present",
    "experience.free.desc": "I help clinics, real-estate agencies and self-employed professionals automate customer service and lead capture: WhatsApp AI agents, appointment scheduling, custom automations and bespoke development — taken to production, not left as a demo.",
    "experience.e1.role": "Backend Developer — Coinscrap Finance (fintech)",
    "experience.e1.date": "Mar 2026 — Aug 2026 · Internship",
    "experience.e1.desc": "Integrated LLMs into production and built microservices on GCP with Python, inside a real fintech product. REST APIs, PostgreSQL/SQLAlchemy, automated testing (pytest) and containerized environments with Docker.",
    "experience.e2.role": "Higher Degree in Web Application Development (DAW)",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Formalized deep technical skills traversing the entire software stack. Engineered complex backend solutions, REST APIs, and gained extensive practice in database administration, server deployments, and modern architectural patterns.",
    "experience.e3.role": "Team & Operations Management (Retail)",
    "experience.e3.date": "8+ years · until 2022",
    "experience.e3.desc": "Over 8 years leading teams and end-to-end operations in retail. Direct client contact, high-stakes negotiation and, above all, getting people to actually adopt new tools and processes — the part that decides whether technology delivers or gathers dust.",
    "contact.title": "Let's build something solid<span class=\"dot\">.</span>",
    "contact.desc": "I'm open to backend roles and to freelance AI-integration projects. Tell me what you're working on and we'll see if I can help.",
    "contact.whatsapp": "Message me on WhatsApp",
    "contact.btn": "Email me",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Engineered with precision and IaC."
  },
  fr: {
    "nav.about": "À Propos",
    "nav.work": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "hero.subtitle": "Développeur Backend — Python · LLM en production · Cloud (GCP/AWS).",
    "hero.desc": "Je conçois et développe des backends en Python (FastAPI/Django) et je mets des LLM en production : microservices sur GCP, API robustes et déploiements Docker. Je viens de plus de 8 ans à diriger des équipes et des opérations dans le retail, donc je construis en pensant au business — et à qui va l'utiliser. J'élargis actuellement mon profil vers le Cloud/DevOps (AWS SAA, Terraform, Kubernetes).",
    "hero.whatsapp": "Écrivez-moi sur WhatsApp",
    "hero.cv": "Télécharger le CV",
    "about.title": "01<span class=\"dot\">.</span> À Propos de Moi<span class=\"dot\">.</span>",
    "about.p1": "Je suis développeur backend spécialisé en <strong>Python (FastAPI/Django)</strong>. Lors de mon stage chez <strong>Coinscrap Finance</strong> (fintech), j'ai intégré des <strong>LLM en production</strong> et travaillé avec des microservices sur <strong>GCP</strong>, dans un environnement produit réel. Avant la tech, j'ai dirigé des équipes et des opérations dans le retail pendant plus de 8 ans — une expérience qui me donne une lecture du business et du client que j'applique à chaque système que je construis.",
    "about.p2": "Mon cœur technique, c'est <strong>Python (FastAPI/Django)</strong>, avec <strong>Node.js</strong> et <strong>TypeScript</strong> côté JavaScript. Les API REST, <strong>PostgreSQL / SQLAlchemy</strong>, <strong>Docker</strong> et le déploiement sur <strong>GCP</strong>. J'intègre des <strong>LLM dans des flux de production</strong> — pas des démos — avec authentification, tests automatisés (pytest) et de bonnes pratiques d'ingénierie. J'élargis actuellement ce profil vers le Cloud/DevOps avec la certification <strong>AWS SAA</strong>, <strong>Terraform</strong> et <strong>Kubernetes</strong>.",
    "about.p3": "<strong>Communication :</strong> fort de mes études en Philologie des Langues Modernes, j'ai une maîtrise professionnelle de l'<strong>anglais</strong> et du <strong>français</strong>. Je traduis les concepts techniques — backend, IA, DevOps — en langage métier, ce qui est clé quand l'interlocuteur n'est pas technique.",
    "about.stack.languages": "Langages",
    "about.stack.core": "Backend & Données",
    "about.stack.ai": "IA en production & Cloud",
    "about.stack.learning": "En cours d'apprentissage",
    "projects.title": "02<span class=\"dot\">.</span> Travaux Sélectionnés<span class=\"dot\">.</span>",
    "projects.p4.overline": "PWA Cloud-Native",
    "projects.p4.desc": "Une PWA full-stack de fitness & habitudes : routines de gym périodisées, séries quotidiennes, suivi des mesures corporelles et notifications anti-sédentarité programmées. Multi-utilisateur avec authentification JWT, déployée sur GCP Cloud Run via Terraform et des pipelines CI/CD GitHub Actions.",
    "projects.p1.overline": "Outils d'Entreprise",
    "projects.p1.desc": "Une application de gestion de la main-d'œuvre axée sur la Clean Architecture. Calculs dynamiques de salaires basés sur les variables de contrat.",
    "projects.invoice.overline": "Agent IA · Automatisation documentaire",
    "projects.invoice.desc": "Un agent IA qui transforme les PDF de factures et bons de livraison (texte ou scannés) en données structurées et validées, prêtes pour Google Sheets. Il ne fait pas aveuglément confiance au LLM : il recoupe les montants (lignes vs. base imposable vs. total) et signale tout ce qui ne colle pas comme needs_review au lieu de laisser passer une donnée erronée.",
    "projects.rehab.overline": "Full-Stack · Healthtech",
    "projects.rehab.desc": "Une PWA thérapeutique pour les patients atteints de lésions cérébrales acquises (AVC, TCC). Conçue selon des principes stricts d'accessibilité clinique : charge cognitive quasi nulle, zones de clic surdimensionnées, glisser-déposer « magnétique » tolérant à l'erreur motrice et feedback positif. Déploiement de production avec sécurité renforcée (nginx, CSP).",
    "projects.gitedu.overline": "Outil Développeur · Desktop",
    "projects.gitedu.desc": "Une application de bureau qui visualise vos dépôts locaux sous forme de graphe de commits interactif et — contrairement à la plupart des GUI Git — montre la commande exacte qu'elle va exécuter et son effet sur l'arbre des branches avant de la lancer. Elle scripte même le rebase interactif sans terminal.",
    "experience.title": "03<span class=\"dot\">.</span> Trajectoire Professionnelle<span class=\"dot\">.</span>",
    "experience.e0.badge": "La Suite",
    "experience.e0.role": "Ingénieur Cloud & DevOps",
    "experience.e0.date": "Ma prochaine étape",
    "experience.e0.desc": "En m'appuyant sur des bases backend solides, mon objectif est d'évoluer vers l'ingénierie Cloud & DevOps : approfondir l'Infrastructure as Code (Terraform), l'orchestration de conteneurs avec Kubernetes et les pipelines CI/CD sur AWS et GCP. Je souhaite maîtriser tout le parcours, du code à une infrastructure de production résiliente et automatisée.",
    "experience.free.role": "Développeur Freelance — Automatisation IA",
    "experience.free.date": "2025 — Présent",
    "experience.free.desc": "J'aide les cliniques, agences immobilières et indépendants à automatiser la relation client et la captation de leads : agents d'IA sur WhatsApp, prise de rendez-vous, automatisations et développement sur mesure — mis en production, pas laissés en démo.",
    "experience.e1.role": "Développeur Backend — Coinscrap Finance (fintech)",
    "experience.e1.date": "Mars 2026 — Août 2026 · Stage",
    "experience.e1.desc": "Intégration de LLM en production et développement de microservices sur GCP avec Python, au sein d'un produit fintech réel. API REST, PostgreSQL/SQLAlchemy, tests automatisés (pytest) et environnements conteneurisés avec Docker.",
    "experience.e2.role": "Brevet de Technicien Supérieur (BTS) en Développement d'Applications Web",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Acquisition de compétences techniques approfondies couvrant l'ensemble de la stack logicielle. Ingénierie de solutions backend complexes, d'API REST et pratique intensive de l'administration de bases de données, des déploiements de serveurs et des modèles d'architecture modernes.",
    "experience.e3.role": "Gestion d'équipes & d'opérations (Retail)",
    "experience.e3.date": "8+ ans · jusqu'en 2022",
    "experience.e3.desc": "Plus de 8 ans à diriger des équipes et des opérations de bout en bout dans le retail. Contact client direct, négociation à forts enjeux et, surtout, faire adopter réellement de nouveaux outils et processus — ce qui décide si la technologie apporte de la valeur ou prend la poussière.",
    "contact.title": "Construisons quelque chose de solide<span class=\"dot\">.</span>",
    "contact.desc": "Je suis ouvert aux postes backend et aux projets freelance d'intégration d'IA. Dites-moi sur quoi vous travaillez et nous verrons si je peux aider.",
    "contact.whatsapp": "Écrivez-moi sur WhatsApp",
    "contact.btn": "M'écrire un email",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Conçu avec précision et IaC."
  },
  es: {
    "nav.about": "Perfil",
    "nav.work": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "hero.subtitle": "Automatizo la atención al cliente y la captación de leads con IA.",
    "hero.desc": "Agentes de IA que contestan WhatsApp a cualquier hora, agenda de citas, captación de leads y automatizaciones a medida para <strong>clínicas, inmobiliarias, fisioterapeutas y autónomos</strong>. Menos tareas repetitivas, cero clientes perdidos por no contestar a tiempo — y te lo dejo funcionando, no un piloto que se queda en el cajón.",
    "hero.whatsapp": "Escríbeme por WhatsApp",
    "hero.cv": "Descargar CV",
    "about.title": "01<span class=\"dot\">.</span> Sobre Mí<span class=\"dot\">.</span>",
    "about.p1": "Soy ingeniero de software y, antes de la tecnología, dirigí equipos y operaciones durante más de 8 años. Esa mezcla —saber construir de verdad y saber cómo funciona un negocio por dentro— es justo lo que hace que lo que entrego se use y dé resultados, en vez de quedarse en un cajón. He integrado <strong>IA en producción en fintech (Coinscrap)</strong> y construido <strong>software clínico (REHAB)</strong>, así que me manejo con datos sensibles y con lo que de verdad importa a un negocio.",
    "about.p2": "En lo técnico, mi núcleo es <strong>Python (FastAPI/Django)</strong>, con <strong>Node.js</strong> y <strong>TypeScript</strong> en el lado JavaScript. APIs REST, <strong>PostgreSQL / SQLAlchemy</strong>, <strong>Docker</strong> y despliegue en <strong>GCP</strong>. Integro <strong>LLM en flujos de producción</strong> —no en demos— con autenticación, tests automatizados (pytest) y buenas prácticas. Estoy ampliando perfil hacia Cloud/DevOps con la certificación <strong>AWS SAA</strong>, <strong>Terraform</strong> y <strong>Kubernetes</strong>.",
    "about.p3": "<strong>Comunicación:</strong> con una formación en Filología de Lenguas Modernas, tengo un dominio profesional del <strong>inglés</strong> y el <strong>francés</strong>. Traduzco lo técnico —IA, backend, automatización— a lenguaje de negocio, algo clave cuando el interlocutor no es técnico.",
    "about.stack.languages": "Lenguajes",
    "about.stack.core": "Backend y Datos",
    "about.stack.ai": "IA en producción & Cloud",
    "about.stack.learning": "Ampliando · en curso",
    "projects.title": "02<span class=\"dot\">.</span> Trabajos Seleccionados<span class=\"dot\">.</span>",
    "projects.p4.overline": "PWA Cloud-Native",
    "projects.p4.desc": "Una PWA full-stack de fitness y hábitos: rutinas de gimnasio periodizadas, rachas diarias, seguimiento de métricas corporales y notificaciones antisedentarismo programadas. Multiusuario con autenticación JWT, desplegada en GCP Cloud Run mediante Terraform y pipelines CI/CD de GitHub Actions.",
    "projects.p1.overline": "Herramientas Empresariales",
    "projects.p1.desc": "Una aplicación integral de gestión de personal centrada en Clean Architecture. Cálculos dinámicos de salario basados en las variables del contrato.",
    "projects.invoice.overline": "Agente IA · Automatización documental",
    "projects.invoice.desc": "Un agente de IA que convierte PDFs de facturas y albaranes (con texto o escaneados) en datos estructurados y validados, listos para Google Sheets. No se fía ciegamente del LLM: cuadra los importes (líneas vs. base imponible vs. total) y marca como needs_review cualquier cosa que no encaje, en vez de dejar pasar un dato erróneo.",
    "projects.rehab.overline": "Full-Stack · Healthtech",
    "projects.rehab.desc": "Una PWA terapéutica para pacientes con daño cerebral adquirido (ictus, TCE). Diseñada bajo principios estrictos de accesibilidad clínica: carga cognitiva casi nula, hitboxes enormes, drag & drop \"magnético\" tolerante al error motriz y feedback positivo. Despliegue de producción con seguridad endurecida (nginx, CSP).",
    "projects.gitedu.overline": "Herramienta Dev · Escritorio",
    "projects.gitedu.desc": "Una app de escritorio que visualiza tus repositorios locales como un grafo de commits interactivo y —a diferencia de la mayoría de GUIs de Git— muestra el comando exacto que va a ejecutar y su efecto en el árbol de ramas antes de lanzarlo. Incluso hace rebase interactivo sin terminal.",
    "experience.title": "03<span class=\"dot\">.</span> Trayectoria Profesional<span class=\"dot\">.</span>",
    "experience.e0.badge": "El Camino a Seguir",
    "experience.e0.role": "Ingeniero Cloud & DevOps",
    "experience.e0.date": "Mi próximo paso",
    "experience.e0.desc": "Partiendo de una base backend sólida, mi objetivo es crecer hacia la ingeniería Cloud & DevOps: profundizar en la Infraestructura como Código (Terraform), la orquestación de contenedores con Kubernetes y los pipelines CI/CD en AWS y GCP. Quiero dominar todo el recorrido, del código a una infraestructura de producción resiliente y automatizada.",
    "experience.free.role": "Desarrollador Freelance — Automatización con IA",
    "experience.free.date": "2025 — Actualidad",
    "experience.free.desc": "Ayudo a clínicas, inmobiliarias y autónomos a automatizar la atención al cliente y la captación de leads: agentes de IA en WhatsApp, agenda de citas, automatizaciones y desarrollo a medida — llevados a producción, no en demo.",
    "experience.e1.role": "Desarrollador Backend — Coinscrap Finance (fintech)",
    "experience.e1.date": "Mar 2026 — Ago 2026 · Prácticas",
    "experience.e1.desc": "Integré LLM en producción y desarrollé microservicios en GCP con Python, dentro de un producto fintech real. APIs REST, PostgreSQL/SQLAlchemy, testing automatizado (pytest) y entornos en contenedores con Docker.",
    "experience.e2.role": "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Consolidación de competencias técnicas profundas a lo largo de todo el stack de software. Ingeniería de soluciones backend complejas, APIs REST y práctica intensiva en administración de bases de datos, despliegue de servidores y patrones de arquitectura modernos.",
    "experience.e3.role": "Gestión de equipos y operaciones (Retail)",
    "experience.e3.date": "8+ años · hasta 2022",
    "experience.e3.desc": "Más de 8 años dirigiendo equipos y operaciones de principio a fin en retail. Trato directo con cliente, negociación de alto nivel y, sobre todo, conseguir que la gente adopte de verdad nuevas herramientas y procesos — la parte que decide si la tecnología aporta o se queda en un cajón.",
    "contact.title": "¿Hablamos?<span class=\"dot\">.</span>",
    "contact.desc": "Cuéntame qué proceso te está costando tiempo o qué te gustaría automatizar. En una llamada corta vemos si tiene sentido — sin compromiso. ¿Prefieres contratarme como desarrollador? También estoy abierto a ello.",
    "contact.whatsapp": "Escríbeme por WhatsApp",
    "contact.btn": "Enviar un email",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Diseñado con precisión e IaC."
  }
};

class Portfolio {
  constructor() {
    this.themeToggleBtn = document.getElementById('themeToggle');
    this.langButtons = document.querySelectorAll('.lang-option');
    this.langScopedEls = document.querySelectorAll('[data-lang-only]');
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
   * Initializes Language system. Default is Spanish (sales-first).
   */
  setupLanguageManager() {
    const savedLang = localStorage.getItem('lang');
    const currentLang = translations[savedLang] ? savedLang : 'es';
    this.applyLanguage(currentLang);

    this.langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.applyLanguage(btn.getAttribute('data-lang'));
        this.setCopyrightYear(); // Fix year span inside i18n
      });
    });
  }

  applyLanguage(lang) {
    if (!translations[lang]) lang = 'es';
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

    // Show sales-only content (Servicios, FAQ, sales hero bits) only in Spanish.
    // Inline display:none beats class rules like .btn { display:inline-flex }.
    this.langScopedEls.forEach(el => {
      el.style.display = (el.getAttribute('data-lang-only') === lang) ? '' : 'none';
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
