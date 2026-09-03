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
    "nav.freelance": "For Companies",
    "nav.contact": "Contact",
    "hero.subtitle": "Backend Developer — Python · LLMs in production · Cloud (GCP/AWS).",
    "hero.desc": "I design and build backends in Python (FastAPI/Django) and take LLMs to production: microservices on GCP, robust APIs and Docker deployments. I come from 8+ years leading teams and operations in retail, so I build with the business — and whoever will use it — in mind. Currently expanding into Cloud/DevOps (AWS SAA, Terraform, Kubernetes).",
    "hero.cta": "View Projects",
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
    "contact.btn": "Get in Touch",
    "freelance.eyebrow": "For companies · Freelance",
    "freelance.hero": "I take AI agents to production in mid-sized companies: I connect them to your ERP/CRM with Python and leave them running, monitored and documented — not a pilot that ends up in a drawer.",
    "freelance.uc1.title": "Invoice & document reading with AI",
    "freelance.uc1.desc": "I extract data from invoices, delivery notes or contracts using AI vision and return it structured in your Google Sheet or system. No more manual typing.",
    "freelance.uc2.title": "WhatsApp customer agent",
    "freelance.uc2.desc": "Automated FAQs and bookings over WhatsApp, connected to your Google Calendar. Twilio + Claude handling your customers, with handover to a person when needed.",
    "freelance.uc3.title": "Automation wired to your systems",
    "freelance.uc3.desc": "I connect AI to your ERP/CRM to automate repetitive processes: classifying, replying and moving data between tools that today don't talk to each other.",
    "freelance.includes.title": "What a typical project includes",
    "freelance.includes.i1": "<strong>Real production, not a demo:</strong> deployed and running on your data.",
    "freelance.includes.i2": "<strong>Monitoring:</strong> if something breaks, it's detected and flagged.",
    "freelance.includes.i3": "<strong>Documentation & handover:</strong> your team understands and maintains what I deliver.",
    "freelance.includes.i4": "<strong>Optional monthly maintenance:</strong> reviews, tweaks and ongoing support.",
    "freelance.authority": "90% of AI projects fail on adoption, not on tech. I led teams for 8 years: I know how to get people to actually use the tool, not just how to build it.",
    "freelance.cta.btn": "Tell me your process",
    "freelance.cta.note": "Tell me which process is costing your team time. In 20 minutes we'll see if it makes sense — no strings attached.",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Engineered with precision and IaC."
  },
  fr: {
    "nav.about": "À Propos",
    "nav.work": "Projets",
    "nav.experience": "Expérience",
    "nav.freelance": "Entreprises",
    "nav.contact": "Contact",
    "hero.subtitle": "Développeur Backend — Python · LLM en production · Cloud (GCP/AWS).",
    "hero.desc": "Je conçois et développe des backends en Python (FastAPI/Django) et je mets des LLM en production : microservices sur GCP, API robustes et déploiements Docker. Je viens de plus de 8 ans à diriger des équipes et des opérations dans le retail, donc je construis en pensant au business — et à qui va l'utiliser. J'élargis actuellement mon profil vers le Cloud/DevOps (AWS SAA, Terraform, Kubernetes).",
    "hero.cta": "Voir les Projets",
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
    "contact.btn": "Me Contacter",
    "freelance.eyebrow": "Pour les entreprises · Freelance",
    "freelance.hero": "Je mets des agents d'IA en production dans les PME : je les connecte à votre ERP/CRM avec Python et je vous les laisse opérationnels, monitorés et documentés — pas un pilote qui finit dans un tiroir.",
    "freelance.uc1.title": "Lecture de factures et documents par IA",
    "freelance.uc1.desc": "J'extrais les données de factures, bons de livraison ou contrats par vision IA et je les renvoie structurées dans votre Google Sheets ou système. Fini la saisie manuelle.",
    "freelance.uc2.title": "Agent client sur WhatsApp",
    "freelance.uc2.desc": "FAQ et réservations automatisées sur WhatsApp, connecté à votre Google Calendar. Twilio + Claude au service de vos clients, avec transfert à une personne si nécessaire.",
    "freelance.uc3.title": "Automatisation reliée à vos systèmes",
    "freelance.uc3.desc": "Je connecte l'IA à votre ERP/CRM pour automatiser les processus répétitifs : classer, répondre et faire circuler les données entre des outils qui aujourd'hui ne se parlent pas.",
    "freelance.includes.title": "Ce qu'inclut un projet type",
    "freelance.includes.i1": "<strong>Production réelle, pas une démo :</strong> déployé et opérationnel sur vos données.",
    "freelance.includes.i2": "<strong>Monitoring :</strong> si quelque chose casse, c'est détecté et signalé.",
    "freelance.includes.i3": "<strong>Documentation & handover :</strong> votre équipe comprend et maintient ce que je livre.",
    "freelance.includes.i4": "<strong>Maintenance mensuelle en option :</strong> révisions, ajustements et support continu.",
    "freelance.authority": "90% des projets d'IA échouent sur l'adoption, pas sur la technique. J'ai dirigé des équipes pendant 8 ans : je sais faire en sorte que les gens utilisent réellement l'outil, pas seulement le construire.",
    "freelance.cta.btn": "Parlez-moi de votre processus",
    "freelance.cta.note": "Dites-moi quel processus vous fait perdre du temps. En 20 minutes, on voit si ça a du sens — sans engagement.",
    "footer.copy": "&copy; <span id=\"year\"></span> &mdash; Conçu avec précision et IaC."
  },
  es: {
    "nav.about": "Perfil",
    "nav.work": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.freelance": "Para Empresas",
    "nav.contact": "Contacto",
    "hero.subtitle": "Desarrollador Backend — Python · LLM en producción · Cloud (GCP/AWS).",
    "hero.desc": "Diseño e implemento backends en Python (FastAPI/Django) y llevo LLM a producción: microservicios en GCP, APIs robustas y despliegues con Docker. Vengo de más de 8 años dirigiendo equipos y operaciones en retail, así que construyo pensando en el negocio — y en quién va a usar lo que entrego. Ahora amplío perfil hacia Cloud/DevOps (AWS SAA, Terraform, Kubernetes).",
    "hero.cta": "Ver Proyectos",
    "hero.cv": "Descargar CV",
    "about.title": "01<span class=\"dot\">.</span> Sobre Mí<span class=\"dot\">.</span>",
    "about.p1": "Soy desarrollador backend centrado en <strong>Python (FastAPI/Django)</strong>. En mis prácticas en <strong>Coinscrap Finance</strong> (fintech) integré <strong>LLM en producción</strong> y trabajé con microservicios en <strong>GCP</strong>, en un entorno de producto real. Antes de la tecnología dirigí equipos y operaciones en retail durante más de 8 años — esa experiencia me da una lectura de negocio y de cliente que aplico a cada sistema que construyo.",
    "about.p2": "Mi núcleo técnico es <strong>Python (FastAPI/Django)</strong>, con <strong>Node.js</strong> y <strong>TypeScript</strong> en el lado JavaScript. APIs REST, <strong>PostgreSQL / SQLAlchemy</strong>, <strong>Docker</strong> y despliegue en <strong>GCP</strong>. Integro <strong>LLM en flujos de producción</strong> —no en demos— con autenticación, tests automatizados (pytest) y buenas prácticas de ingeniería. Estoy ampliando este perfil hacia Cloud/DevOps con la certificación <strong>AWS SAA</strong>, <strong>Terraform</strong> y <strong>Kubernetes</strong>.",
    "about.p3": "<strong>Comunicación:</strong> con una formación en Filología de Lenguas Modernas, tengo un dominio profesional del <strong>inglés</strong> y el <strong>francés</strong>. Traduzco conceptos técnicos —backend, IA, DevOps— a lenguaje de negocio, algo clave cuando el interlocutor no es técnico.",
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
    "experience.e1.role": "Desarrollador Backend — Coinscrap Finance (fintech)",
    "experience.e1.date": "Mar 2026 — Ago 2026 · Prácticas",
    "experience.e1.desc": "Integré LLM en producción y desarrollé microservicios en GCP con Python, dentro de un producto fintech real. APIs REST, PostgreSQL/SQLAlchemy, testing automatizado (pytest) y entornos en contenedores con Docker.",
    "experience.e2.role": "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    "experience.e2.date": "2024 — 2026",
    "experience.e2.desc": "Consolidación de competencias técnicas profundas a lo largo de todo el stack de software. Ingeniería de soluciones backend complejas, APIs REST y práctica intensiva en administración de bases de datos, despliegue de servidores y patrones de arquitectura modernos.",
    "experience.e3.role": "Gestión de equipos y operaciones (Retail)",
    "experience.e3.date": "8+ años · hasta 2022",
    "experience.e3.desc": "Más de 8 años dirigiendo equipos y operaciones de principio a fin en retail. Trato directo con cliente, negociación de alto nivel y, sobre todo, conseguir que la gente adopte de verdad nuevas herramientas y procesos — la parte que decide si la tecnología aporta o se queda en un cajón.",
    "contact.title": "Construyamos algo sólido<span class=\"dot\">.</span>",
    "contact.desc": "Estoy abierto a posiciones backend y a proyectos freelance de integración de IA. Cuéntame en qué trabajas y vemos si puedo ayudar.",
    "contact.btn": "Hablemos",
    "freelance.eyebrow": "Para empresas · Freelance",
    "freelance.hero": "Llevo agentes de IA a producción en empresas medianas: los conecto a vuestro ERP/CRM con Python, y os los dejo funcionando, monitorizados y documentados — no un piloto que se queda en el cajón.",
    "freelance.uc1.title": "Lectura de facturas y documentos con IA",
    "freelance.uc1.desc": "Extraigo datos de facturas, albaranes o contratos con visión por IA y los devuelvo estructurados en tu Google Sheets o sistema. Se acabó teclear a mano.",
    "freelance.uc2.title": "Agente de atención por WhatsApp",
    "freelance.uc2.desc": "FAQs y reservas automatizadas por WhatsApp, conectado a tu Google Calendar. Twilio + Claude atendiendo a tus clientes, con traspaso a una persona cuando hace falta.",
    "freelance.uc3.title": "Automatización conectada a tus sistemas",
    "freelance.uc3.desc": "Conecto la IA a tu ERP/CRM para automatizar procesos repetitivos: clasificar, responder y mover datos entre herramientas que hoy no se hablan.",
    "freelance.includes.title": "Qué incluye un proyecto tipo",
    "freelance.includes.i1": "<strong>Producción real, no demo:</strong> desplegado y funcionando con tus datos.",
    "freelance.includes.i2": "<strong>Monitorización:</strong> si algo falla, se detecta y se avisa.",
    "freelance.includes.i3": "<strong>Documentación y handover:</strong> tu equipo entiende y mantiene lo que entrego.",
    "freelance.includes.i4": "<strong>Mantenimiento mensual opcional:</strong> revisiones, ajustes y soporte continuo.",
    "freelance.authority": "El 90% de los proyectos de IA fracasan por adopción, no por técnica. Dirigí equipos durante 8 años: sé hacer que la gente use la herramienta, no solo construirla.",
    "freelance.cta.btn": "Cuéntame tu proceso",
    "freelance.cta.note": "Cuéntame qué proceso os está costando tiempo. En 20 minutos vemos si tiene sentido — sin compromiso.",
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
