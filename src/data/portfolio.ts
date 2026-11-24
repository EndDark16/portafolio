/**
 * Single source of truth for every piece of content on the site.
 * All user-facing text is bilingual: { es, en }.
 */

export type Language = "es" | "en";
export type Localized = Record<Language, string>;

export const languages: Language[] = ["es", "en"];

/* -------------------------------------------------------------------------- */
/*                                   Profile                                  */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Andres Felipe Melo Chaguala",
  nameLines: ["Andres Felipe", "Melo Chaguala"],
  shortName: "Andres Melo",
  headline: "Systems & Computer Engineer · Full-Stack, Backend & ML Integration",
  email: "andresfelipe16200411@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/andresmeloafmc",
  linkedinLabel: "linkedin.com/in/andresmeloafmc",
  githubUrl: "https://github.com/EndDark16",
  githubLabel: "github.com/EndDark16",
  /** Resume PDF per language (files live in /public). */
  cv: { es: "/cv_cond_esp.pdf", en: "/cv_cond.pdf" },
  city: "Bogotá, Colombia",
  coordinates: "4.711° N · 74.072° W",
  timeZone: "America/Bogota",
} as const;

/* -------------------------------------------------------------------------- */
/*                                  UI copy                                   */
/* -------------------------------------------------------------------------- */

export const copy = {
  es: {
    meta: { skip: "Saltar al contenido" },
    nav: {
      aria: "Navegación principal",
      projects: "Proyectos",
      stack: "Stack",
      about: "Sobre mí",
      contact: "Contacto",
      cv: "CV",
      language: "Idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      availability: "Disponible para roles Backend / Full-Stack / AI-ML",
      summary:
        "Desarrollo aplicaciones web full-stack, APIs RESTful y soluciones de aprendizaje automático con foco en arquitectura limpia, bases de datos, seguridad y rendimiento real.",
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV",
      profileLabel: "Ficha",
      facts: [
        { label: "Base", value: "Bogotá, Colombia" },
        { label: "Modalidad", value: "Remoto · Híbrido" },
        { label: "Enfoque", value: "Backend · Full-Stack · ML" },
        { label: "Formación", value: "Ing. de Sistemas y Computación" },
        { label: "Idiomas", value: "Español nativo · Inglés C1" },
      ],
      localTime: "Hora local",
    },
    projects: {
      index: "01",
      eyebrow: "Proyectos",
      title: "Cuatro sistemas, cuatro problemas distintos.",
      intro:
        "Cada uno resuelve algo concreto: servir modelos de ML de forma segura, mantener datos de usuario consistentes, clasificar texto sin depender de la red o convertir datos en decisiones explicables.",
      flow: "Flujo",
      decisions: "Decisiones clave",
      details: "Ver detalles técnicos",
      code: "GitHub",
      featured: "Proyecto principal",
    },
    drawer: {
      close: "Cerrar",
      overview: "Resumen",
      architecture: "Arquitectura",
      decisions: "Decisiones",
      challenges: "Retos",
      problem: "Reto",
      solution: "Cómo se resolvió",
      stack: "Stack",
      repo: "Ver repositorio",
      related: "Repositorios relacionados",
      hint: "ESC para cerrar",
    },
    stack: {
      index: "02",
      eyebrow: "Stack",
      title: "Qué uso, y para qué.",
      intro: "Sin porcentajes: herramientas agrupadas según el trabajo que hacen en un proyecto real.",
      columns: { area: "Área", use: "Uso", tools: "Herramientas" },
    },
    about: {
      index: "03",
      eyebrow: "Sobre mí",
      lead: "Me interesa el software que sigue funcionando cuando crece: consultas que no se degradan, permisos bien definidos y modelos que responden a tiempo.",
      body: [
        "Soy Ingeniero de Sistemas y Computación de la Universidad de Cundinamarca. Trabajo de extremo a extremo —modelo de datos, API, interfaz e integración de ML— y suelo empezar por la base de datos y la seguridad, porque ahí se deciden la mayoría de los problemas de rendimiento.",
        "Cuento con la certificación EF SET C1 Advanced (2026) y busco roles Backend, Full-Stack o AI/ML en modalidad remota o híbrida.",
      ],
      facts: [
        { label: "Formación", value: "Ingeniería de Sistemas y Computación — Universidad de Cundinamarca" },
        { label: "Certificación", value: "EF SET C1 Advanced English (2026)" },
        { label: "Idiomas", value: "Español: nativo · Inglés: C1 Advanced" },
        { label: "Intereses", value: "Eficiencia, bases de datos y ciberseguridad" },
      ],
    },
    contact: {
      index: "04",
      eyebrow: "Contacto",
      title: "¿Tienes un rol o un proyecto en mente?",
      body: "La forma más rápida es el correo. Respondo en español o inglés.",
      copy: "Copiar correo",
      copied: "¡Copiado!",
      copyFailed: "No se pudo copiar",
      write: "Escribir",
      backToTop: "Volver arriba",
    },
    footer: { rights: "Hecho con Next.js, TypeScript y Tailwind CSS." },
  },
  en: {
    meta: { skip: "Skip to content" },
    nav: {
      aria: "Main navigation",
      projects: "Projects",
      stack: "Stack",
      about: "About",
      contact: "Contact",
      cv: "Resume",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      availability: "Available for Backend / Full-Stack / AI-ML roles",
      summary:
        "I build full-stack web applications, RESTful APIs and machine learning solutions with a focus on clean architecture, databases, security and real-world performance.",
      viewProjects: "View projects",
      downloadCv: "Download resume",
      profileLabel: "Profile",
      facts: [
        { label: "Based in", value: "Bogotá, Colombia" },
        { label: "Work mode", value: "Remote · Hybrid" },
        { label: "Focus", value: "Backend · Full-Stack · ML" },
        { label: "Degree", value: "Systems & Computer Engineering" },
        { label: "Languages", value: "Spanish native · English C1" },
      ],
      localTime: "Local time",
    },
    projects: {
      index: "01",
      eyebrow: "Projects",
      title: "Four systems, four different problems.",
      intro:
        "Each one solves something specific: serving ML models securely, keeping user data consistent, classifying text without relying on the network, or turning data into explainable decisions.",
      flow: "Flow",
      decisions: "Key decisions",
      details: "View technical details",
      code: "GitHub",
      featured: "Lead project",
    },
    drawer: {
      close: "Close",
      overview: "Overview",
      architecture: "Architecture",
      decisions: "Decisions",
      challenges: "Challenges",
      problem: "Challenge",
      solution: "How it was solved",
      stack: "Stack",
      repo: "View repository",
      related: "Related repositories",
      hint: "ESC to close",
    },
    stack: {
      index: "02",
      eyebrow: "Stack",
      title: "What I use, and what for.",
      intro: "No percentages: tools grouped by the job they do in a real project.",
      columns: { area: "Area", use: "Use", tools: "Tools" },
    },
    about: {
      index: "03",
      eyebrow: "About",
      lead: "I care about software that keeps working as it grows: queries that don't degrade, well-defined permissions and models that answer on time.",
      body: [
        "I'm a Systems & Computer Engineer from Universidad de Cundinamarca. I work end to end —data model, API, interface and ML integration— and I usually start with the database and security, because that's where most performance problems are decided.",
        "I hold the EF SET C1 Advanced certification (2026) and I'm looking for Backend, Full-Stack or AI/ML roles, remote or hybrid.",
      ],
      facts: [
        { label: "Education", value: "Systems & Computer Engineering — Universidad de Cundinamarca" },
        { label: "Certification", value: "EF SET C1 Advanced English (2026)" },
        { label: "Languages", value: "Spanish: native · English: C1 Advanced" },
        { label: "Interests", value: "Efficiency, databases and cybersecurity" },
      ],
    },
    contact: {
      index: "04",
      eyebrow: "Contact",
      title: "Have a role or a project in mind?",
      body: "Email is the fastest way to reach me. I reply in English or Spanish.",
      copy: "Copy email",
      copied: "Copied!",
      copyFailed: "Couldn't copy",
      write: "Write",
      backToTop: "Back to top",
    },
    footer: { rights: "Built with Next.js, TypeScript and Tailwind CSS." },
  },
} as const;

export type Copy = (typeof copy)[Language];

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  index: string;
  name: string;
  kind: Localized;
  summary: Localized;
  flow: Localized[];
  decisions: Localized[];
  stack: string[];
  repoUrl: string;
  /** Extra repositories shown in the technical drawer (e.g. split frontend/backend). */
  relatedRepos?: { label: string; url: string }[];
  details: {
    overview: Localized;
    architecture: { layer: Localized; detail: Localized }[];
    challenges: { problem: Localized; solution: Localized }[];
  };
};

export const projects: Project[] = [
  {
    id: "cognia",
    index: "01",
    name: "CognIA",
    kind: { es: "Backend & ML Platform", en: "Backend & ML Platform" },
    summary: {
      es: "Sistema backend con flujos de ML y endpoints optimizados para reducir tiempos de respuesta, modelado estructurado en PostgreSQL/MongoDB y autenticación/autorización con JWT/OAuth2.",
      en: "Backend system with ML workflows and endpoints optimized to cut response times, structured data modeling in PostgreSQL/MongoDB and JWT/OAuth2 authentication and authorization.",
    },
    flow: [
      { es: "Cliente", en: "Client" },
      { es: "API REST", en: "REST API" },
      { es: "JWT / OAuth2", en: "JWT / OAuth2" },
      { es: "Pipeline ML", en: "ML pipeline" },
      { es: "PostgreSQL · MongoDB", en: "PostgreSQL · MongoDB" },
    ],
    decisions: [
      {
        es: "La inferencia vive en su propia capa, separada de la lógica HTTP.",
        en: "Inference lives in its own layer, separate from HTTP logic.",
      },
      {
        es: "Modelo híbrido: relacional para entidades, documental para datos flexibles.",
        en: "Hybrid model: relational for entities, document store for flexible data.",
      },
      {
        es: "Autorización por rol verificada en cada endpoint, no solo en el login.",
        en: "Role-based authorization checked on every endpoint, not just at login.",
      },
    ],
    stack: ["Python", "REST APIs", "Scikit-learn", "PostgreSQL", "MongoDB", "JWT", "OAuth2"],
    repoUrl: "https://github.com/EndDark16/CognIA",
    details: {
      overview: {
        es: "CognIA es el backend que conecta usuarios autenticados con flujos de aprendizaje automático: recibe datos, ejecuta la inferencia y devuelve resultados a través de endpoints protegidos y diseñados para responder rápido.",
        en: "CognIA is the backend that connects authenticated users with machine learning workflows: it receives data, runs inference and returns results through protected endpoints designed to respond quickly.",
      },
      architecture: [
        {
          layer: { es: "API", en: "API" },
          detail: {
            es: "Endpoints RESTful con validación de entrada y un formato de respuesta consistente para éxito y error.",
            en: "RESTful endpoints with input validation and a consistent response shape for both success and error.",
          },
        },
        {
          layer: { es: "Identidad", en: "Identity" },
          detail: {
            es: "JWT para sesiones sin estado y OAuth2 para delegar acceso; los permisos se resuelven por rol.",
            en: "JWT for stateless sessions and OAuth2 for delegated access; permissions are resolved by role.",
          },
        },
        {
          layer: { es: "ML", en: "ML" },
          detail: {
            es: "Pipeline de preprocesamiento y modelo encapsulados detrás de una interfaz de servicio propia.",
            en: "Preprocessing pipeline and model wrapped behind their own service interface.",
          },
        },
        {
          layer: { es: "Datos", en: "Data" },
          detail: {
            es: "PostgreSQL para usuarios, permisos y resultados; MongoDB para registros con esquema variable.",
            en: "PostgreSQL for users, permissions and results; MongoDB for records with a variable schema.",
          },
        },
      ],
      challenges: [
        {
          problem: {
            es: "Endpoints con inferencia que tardaban más de lo aceptable.",
            en: "Inference endpoints that took longer than acceptable.",
          },
          solution: {
            es: "Optimización de consultas y del camino de cada petición para reducir el tiempo de respuesta.",
            en: "Query and request-path optimization to reduce response time.",
          },
        },
        {
          problem: {
            es: "Mantener coherencia entre dos motores de base de datos.",
            en: "Keeping two database engines consistent.",
          },
          solution: {
            es: "Responsabilidades claras por motor: cada entidad tiene un único lugar donde es fuente de verdad.",
            en: "Clear ownership per engine: every entity has a single source of truth.",
          },
        },
        {
          problem: {
            es: "Exponer resultados sensibles solo a quien corresponde.",
            en: "Exposing sensitive results only to the right people.",
          },
          solution: {
            es: "Tokens con expiración y verificación de rol en cada ruta protegida.",
            en: "Expiring tokens and role checks on every protected route.",
          },
        },
      ],
    },
  },
  {
    id: "spartanfit",
    index: "02",
    name: "SpartanFit MVP",
    kind: { es: "Full-Stack Fitness Platform", en: "Full-Stack Fitness Platform" },
    summary: {
      es: "MVP web full-stack para seguimiento de entrenamientos, gestión de usuarios y programación de rutinas con React y Tailwind CSS, APIs REST para CRUD, cálculo de métricas y persistencia en tiempo real con despliegue en contenedores.",
      en: "Full-stack web MVP for workout tracking, user management and routine scheduling with React and Tailwind CSS, REST APIs for CRUD, metric calculation and real-time persistence, deployed in containers.",
    },
    flow: [
      { es: "React + Tailwind", en: "React + Tailwind" },
      { es: "API REST · CRUD", en: "REST API · CRUD" },
      { es: "Métricas", en: "Metrics" },
      { es: "Persistencia", en: "Persistence" },
      { es: "Docker", en: "Docker" },
    ],
    decisions: [
      {
        es: "Las métricas se calculan en el servidor: una sola regla para todos los clientes.",
        en: "Metrics are computed server-side: one rule for every client.",
      },
      {
        es: "Recursos REST simples (usuarios, rutinas, sesiones) para iterar rápido el MVP.",
        en: "Plain REST resources (users, routines, sessions) to iterate the MVP fast.",
      },
      {
        es: "Contenedores desde el primer día para que desarrollo y despliegue sean iguales.",
        en: "Containers from day one so development and deployment match.",
      },
    ],
    stack: ["React", "Tailwind CSS", "REST APIs", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/EndDark16/spartanfit-mvp",
    details: {
      overview: {
        es: "SpartanFit reúne la planificación de rutinas y el seguimiento del entrenamiento en una sola aplicación. Como MVP, la prioridad fue una base pequeña y clara que pudiera crecer sin reescribirse.",
        en: "SpartanFit brings routine planning and workout tracking into one application. As an MVP, the priority was a small, clear foundation that could grow without a rewrite.",
      },
      architecture: [
        {
          layer: { es: "Interfaz", en: "Interface" },
          detail: {
            es: "React con Tailwind CSS: componentes pequeños para registrar sesiones y consultar el progreso.",
            en: "React with Tailwind CSS: small components to log sessions and review progress.",
          },
        },
        {
          layer: { es: "API", en: "API" },
          detail: {
            es: "Endpoints REST para el CRUD de usuarios, rutinas y entrenamientos.",
            en: "REST endpoints for user, routine and workout CRUD.",
          },
        },
        {
          layer: { es: "Dominio", en: "Domain" },
          detail: {
            es: "Cálculo de métricas de entrenamiento centralizado en el backend.",
            en: "Workout metric calculation centralized in the backend.",
          },
        },
        {
          layer: { es: "Infraestructura", en: "Infrastructure" },
          detail: {
            es: "Persistencia inmediata de cada registro y despliegue en contenedores Docker.",
            en: "Immediate persistence of every entry and deployment in Docker containers.",
          },
        },
      ],
      challenges: [
        {
          problem: {
            es: "Que la interfaz reflejara cada cambio sin recargar.",
            en: "Making the interface reflect every change without reloading.",
          },
          solution: {
            es: "Persistencia por operación y actualización del estado local con la respuesta de la API.",
            en: "Per-operation persistence and local state updated from the API response.",
          },
        },
        {
          problem: {
            es: "Evitar métricas distintas según dónde se calcularan.",
            en: "Avoiding metrics that differ depending on where they're computed.",
          },
          solution: {
            es: "Una sola implementación en el servidor, consumida por la interfaz.",
            en: "A single server-side implementation consumed by the interface.",
          },
        },
      ],
    },
  },
  {
    id: "pgc-rf-chat",
    index: "03",
    name: "PGC Local Conduct RF Chat",
    kind: { es: "ML Conversational App", en: "ML Conversational App" },
    summary: {
      es: "IA conversacional local con Random Forest y PLN (NLP) para inferencia fuera de línea de baja latencia, pipelines de extracción de características, evaluación de modelos, ajuste de hiperparámetros y benchmarking.",
      en: "Local conversational AI using Random Forest and NLP for low-latency offline inference, with feature extraction pipelines, model evaluation, hyperparameter tuning and benchmarking.",
    },
    flow: [
      { es: "Texto", en: "Text" },
      { es: "Preprocesado NLP", en: "NLP preprocessing" },
      { es: "Features", en: "Features" },
      { es: "Random Forest", en: "Random Forest" },
      { es: "Respuesta", en: "Response" },
    ],
    decisions: [
      {
        es: "Inferencia 100 % local: funciona sin conexión y sin enviar datos a terceros.",
        en: "Fully local inference: works offline and sends no data to third parties.",
      },
      {
        es: "Random Forest en lugar de un LLM: más liviano y más rápido para este dominio.",
        en: "Random Forest instead of an LLM: lighter and faster for this domain.",
      },
      {
        es: "Hiperparámetros elegidos por evaluación y benchmarking, no por intuición.",
        en: "Hyperparameters chosen through evaluation and benchmarking, not gut feeling.",
      },
    ],
    stack: ["Python", "Scikit-learn", "Random Forest", "NLP", "Pandas", "NumPy"],
    repoUrl: "https://github.com/EndDark16/pgc-local-conduct-rf-chat",
    details: {
      overview: {
        es: "Un asistente conversacional que responde consultas sobre conductas locales ejecutándose por completo en la máquina del usuario. La clasificación de intención la hace un Random Forest entrenado sobre características extraídas del texto.",
        en: "A conversational assistant that answers questions about local conduct while running entirely on the user's machine. Intent classification is handled by a Random Forest trained on features extracted from text.",
      },
      architecture: [
        {
          layer: { es: "Entrada", en: "Input" },
          detail: {
            es: "Normalización y tokenización del texto libre del usuario.",
            en: "Normalization and tokenization of the user's free text.",
          },
        },
        {
          layer: { es: "Features", en: "Features" },
          detail: {
            es: "Pipeline reproducible que transforma el texto en vectores para el modelo.",
            en: "Reproducible pipeline that turns text into vectors for the model.",
          },
        },
        {
          layer: { es: "Modelo", en: "Model" },
          detail: {
            es: "Random Forest para clasificar la intención y seleccionar la respuesta.",
            en: "Random Forest that classifies intent and selects the response.",
          },
        },
        {
          layer: { es: "Evaluación", en: "Evaluation" },
          detail: {
            es: "Métricas de clasificación, ajuste de hiperparámetros y benchmarking de latencia.",
            en: "Classification metrics, hyperparameter tuning and latency benchmarking.",
          },
        },
      ],
      challenges: [
        {
          problem: {
            es: "Responder rápido sin GPU ni servicios externos.",
            en: "Answering quickly with no GPU or external services.",
          },
          solution: {
            es: "Un modelo clásico y compacto, medido con benchmarks de latencia.",
            en: "A compact classical model, measured with latency benchmarks.",
          },
        },
        {
          problem: {
            es: "Texto libre, ruidoso y con muchas formas de decir lo mismo.",
            en: "Free, noisy text with many ways to say the same thing.",
          },
          solution: {
            es: "Pipeline de extracción de características ajustado y validado contra el conjunto de evaluación.",
            en: "A feature extraction pipeline tuned and validated against the evaluation set.",
          },
        },
      ],
    },
  },
  {
    id: "voter-hospital",
    index: "04",
    name: "Voter Intention & Hospital Optimization",
    kind: { es: "ML Analytics · KNN & K-Means", en: "ML Analytics · KNN & K-Means" },
    summary: {
      es: "Dos sistemas analíticos con APIs FastAPI y frontends React: un pipeline KNN que predice la intención de voto declarada a partir de datos de encuesta, y un K-Means implementado a mano que ubica hospitales cerca de vecindarios simulados.",
      en: "Two analytical systems with FastAPI services and React frontends: a KNN pipeline that predicts stated vote intention from survey data, and a hand-written K-Means that places hospitals close to simulated neighborhoods.",
    },
    flow: [
      { es: "Dataset", en: "Dataset" },
      { es: "Pipeline Scikit-learn", en: "Scikit-learn pipeline" },
      { es: "KNN · K-Means", en: "KNN · K-Means" },
      { es: "FastAPI", en: "FastAPI" },
      { es: "React + Vite", en: "React + Vite" },
    ],
    decisions: [
      {
        es: "Preprocesado y modelo serializados como un solo pipeline: entrenamiento e inferencia transforman igual.",
        en: "Preprocessing and model serialized as one pipeline: training and inference transform data identically.",
      },
      {
        es: "Hiperparámetros de KNN elegidos con búsqueda en malla y validación estratificada de 5 pliegues.",
        en: "KNN hyperparameters chosen with grid search and stratified 5-fold cross-validation.",
      },
      {
        es: "K-Means escrito explícitamente, sin caja negra, para poder explicar cada asignación.",
        en: "K-Means written explicitly, not as a black box, so every assignment can be explained.",
      },
    ],
    stack: ["Python", "Scikit-learn", "KNN", "K-Means", "FastAPI", "React", "Docker"],
    repoUrl: "https://github.com/EndDark16/voter_intentions",
    relatedRepos: [
      { label: "voterintentionsBackend", url: "https://github.com/EndDark16/voterintentionsBackend" },
      { label: "kmeansback", url: "https://github.com/EndDark16/kmeansback" },
      { label: "kmeansfront", url: "https://github.com/EndDark16/kmeansfront" },
    ],
    details: {
      overview: {
        es: "Dos proyectos de ML aplicados de extremo a extremo. Intención de voto: flujo tabular completo —preprocesado, búsqueda de modelo, evaluación y servicio de inferencia—. Hospitales: simulación de vecindarios en una cuadrícula y cálculo de ubicaciones con K-Means, con métricas listas para un panel.",
        en: "Two end-to-end applied ML projects. Voter intention: a complete tabular workflow —preprocessing, model search, evaluation and an inference service. Hospitals: neighborhoods simulated on a grid and locations computed with K-Means, with metrics ready for a dashboard.",
      },
      architecture: [
        {
          layer: { es: "Datos", en: "Data" },
          detail: {
            es: "Imputación y escalado numérico, imputación y one-hot para categóricas; manejo propio de etiquetas faltantes.",
            en: "Numeric imputation and scaling, categorical imputation and one-hot encoding; custom handling of missing labels.",
          },
        },
        {
          layer: { es: "Modelos", en: "Models" },
          detail: {
            es: "KNN seleccionado por validación cruzada; K-Means propio con soporte para centroides preentrenados.",
            en: "KNN selected through cross-validation; custom K-Means with support for pretrained centroids.",
          },
        },
        {
          layer: { es: "API", en: "API" },
          detail: {
            es: "Servicios FastAPI con validación Pydantic, endpoints de salud y predicción, y CORS configurable.",
            en: "FastAPI services with Pydantic validation, health and prediction endpoints, and configurable CORS.",
          },
        },
        {
          layer: { es: "Interfaz", en: "Interface" },
          detail: {
            es: "Clientes React + Vite; el de hospitales dibuja la cuadrícula en SVG y muestra la carga y distancia por hospital.",
            en: "React + Vite clients; the hospital one renders the grid in SVG and shows load and distance per hospital.",
          },
        },
      ],
      challenges: [
        {
          problem: {
            es: "Evitar diferencias entre cómo se transforman los datos al entrenar y al predecir.",
            en: "Avoiding differences between how data is transformed at training and prediction time.",
          },
          solution: {
            es: "Un único pipeline persistido junto al codificador de etiquetas, cargado por la API.",
            en: "A single persisted pipeline plus label encoder, loaded by the API.",
          },
        },
        {
          problem: {
            es: "Que los resultados de K-Means fueran interpretables, no solo coordenadas.",
            en: "Making K-Means results interpretable, not just coordinates.",
          },
          solution: {
            es: "La API devuelve asignaciones, inercia y estadísticas por clúster (distancia media y máxima).",
            en: "The API returns assignments, inertia and per-cluster statistics (mean and max distance).",
          },
        },
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                                    Stack                                   */
/* -------------------------------------------------------------------------- */

export type StackGroup = {
  title: Localized;
  rows: { use: Localized; tools: string[] }[];
};

export const stack: StackGroup[] = [
  {
    title: { es: "Lenguajes & Frameworks", en: "Languages & Frameworks" },
    rows: [
      {
        use: { es: "Lenguajes de trabajo", en: "Day-to-day languages" },
        tools: ["Python", "TypeScript", "JavaScript", "C#", "Java", "SQL"],
      },
      {
        use: { es: "Servicios y APIs", en: "Services & APIs" },
        tools: ["FastAPI", "Flask", ".NET"],
      },
      {
        use: { es: "Interfaces web", en: "Web interfaces" },
        tools: ["React", "Next.js", "Tailwind CSS"],
      },
    ],
  },
  {
    title: { es: "AI, ML & Data", en: "AI, ML & Data" },
    rows: [
      {
        use: { es: "Modelos de clasificación y agrupamiento", en: "Classification & clustering models" },
        tools: ["Scikit-learn", "Random Forest", "KNN", "K-Means"],
      },
      {
        use: { es: "Lenguaje natural", en: "Natural language" },
        tools: ["NLP", "LLMs"],
      },
      {
        use: { es: "Preparación y análisis de datos", en: "Data preparation & analysis" },
        tools: ["Pandas", "NumPy", "EDA"],
      },
      {
        use: { es: "Visualización", en: "Visualization" },
        tools: ["Matplotlib", "Seaborn"],
      },
    ],
  },
  {
    title: { es: "Bases de datos, DevOps & Herramientas", en: "Databases, DevOps & Tools" },
    rows: [
      {
        use: { es: "Persistencia relacional y documental", en: "Relational & document storage" },
        tools: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        use: { es: "Contenedores, versiones y entrega", en: "Containers, versioning & delivery" },
        tools: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux"],
      },
      {
        use: { es: "Contratos, seguridad y pruebas", en: "Contracts, security & testing" },
        tools: ["REST APIs", "JWT/MFA", "Pytest"],
      },
    ],
  },
];
