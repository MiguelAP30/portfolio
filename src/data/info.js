/**
 * Información personal central del portafolio.
 * Toda la data proviene del CV de Miguel Ángel Pérez Clavijo.
 * Editar este archivo actualiza el contenido en toda la app.
 */

export const profile = {
  name: 'Miguel Ángel Pérez Clavijo',
  // Frases que rotan en el typing effect del Hero
  roles: [
    'Ingeniero de Sistemas',
    'Desarrollador Full Stack',
    'Especialista en IA',
    'Backend & Frontend',
    'SRE',
  ],
  tagline:
    'Construyo sistemas de información complejos, chatbots empresariales y arquitecturas RAG con un enfoque Full Stack y de IA.',
  location: 'Manizales, Colombia',
  email: 'miguelonperez300@gmail.com',
  phone: '+57 304 674 2211',
  // Ruta al CV dentro de /public (ver carpeta public/)
  resumeUrl: '/cv-miguel-angel-perez.pdf',
}

export const about = {
  heading: 'Sobre mí',
  // Resumen profesional tal cual el enfoque del CV
  paragraphs: [
    'Ingeniero de Sistemas con enfoque en desarrollo Full Stack, Backend, Frontend y SRE, con experiencia en la arquitectura e implementación de sistemas de información complejos, incluyendo chatbots empresariales y configuraciones RAG con bases de datos vectoriales.',
    'Hábil en Python, JavaScript, React, Node.js y FastAPI, así como en herramientas de IA como Claude Code y OpenAI Codex. Me apasiona resolver problemas, el aprendizaje rápido y contribuir al éxito de proyectos de ingeniería de software.',
  ],
  // Métricas/highlights para las tarjetas del bloque "Sobre mí"
  highlights: [
    { value: '3+', label: 'Años construyendo y colaborando en equipos' },
    { value: '9º', label: 'Semestre de Ingeniería de Sistemas' },
    { value: '100%', label: 'Sistema CINDE desarrollado de extremo a extremo' },
    { value: 'IA', label: 'Chatbots, RAG y agentes en producción' },
  ],
}

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/MiguelAP30',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/miguelangelperezdev',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:miguelonperez300@gmail.com',
    icon: 'mail',
  },
]

/**
 * Habilidades agrupadas por categoría.
 * "level" (0-100) alimenta las barras animadas.
 */
export const skillGroups = [
  {
    category: 'Lenguajes',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 70 },
      { name: 'C++', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 82 },
      { name: 'Vue', level: 78 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 80 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    category: 'Backend & Datos',
    skills: [
      { name: 'FastAPI', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'AdonisJS', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQL Server', level: 72 },
    ],
  },
  {
    category: 'IA & Automatización',
    skills: [
      { name: 'RAG (pgvector / Chroma)', level: 88 },
      { name: 'Chatbots con MCP', level: 90 },
      { name: 'Agentes de IA & Skills', level: 85 },
      { name: 'Embeddings & Búsqueda semántica', level: 85 },
      { name: 'n8n (flujos / APIs)', level: 82 },
      { name: 'Prompting avanzado', level: 90 },
    ],
  },
  {
    category: 'Herramientas & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Claude Code', level: 90 },
      { name: 'OpenAI Codex / Open Code', level: 85 },
      { name: 'Cursor', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'SRE', level: 72 },
    ],
  },
]

/**
 * Experiencia laboral (orden cronológico inverso).
 */
export const experiences = [
  {
    role: 'Desarrollador Full Stack — Proyecto de Innovación',
    company: 'INDUMA',
    period: '11/2025 – 05/2026',
    location: 'Manizales',
    bullets: [
      'Desarrollo de funcionalidades Backend y Frontend para un analizador de riesgos empresariales.',
      'Apoyo en el diseño e implementación del sistema de análisis de riesgos.',
      'Participación activa en pruebas y validación del sistema.',
      'Colaboración estrecha con el equipo de innovación de la empresa.',
    ],
  },
  {
    role: 'Desarrollador Full Stack & Especialista en IA',
    company: 'Fundación CINDE — Práctica Social UAM',
    period: '2025 – 05/2026',
    location: 'Manizales',
    bullets: [
      'Arquitecté y desarrollé integralmente el sistema de información institucional: arquitectura, Backend, Frontend y gestión de base de datos.',
      'Implementé chatbots empresariales conectados a bases de datos mediante el protocolo MCP, habilitando consultas en lenguaje natural.',
      'Configuré sistemas RAG con bases de datos vectoriales (pgvector, Chroma) para búsquedas semánticas sobre documentos institucionales.',
      'Automaticé flujos de trabajo con n8n, integrando APIs externas con los sistemas internos.',
      'Diseñé agentes de IA con skills y herramientas MCP conectados a fuentes de datos en tiempo real.',
      'Entregué el sistema completo, funcional, documentado y desplegado.',
    ],
  },
  {
    role: 'Becario de Contraprestación — Instituto de Idiomas',
    company: 'Universidad Autónoma de Manizales',
    period: '01/2023 – 05/2026',
    location: 'Manizales',
    bullets: [
      'Apoyo en procesos administrativos y gestión documental del instituto.',
      'Organización de información y atención a usuarios internos y externos.',
      'Asistencia logística en actividades académicas y eventos.',
      'Más de tres años cultivando comunicación, organización y trabajo en equipo.',
    ],
  },
]

/**
 * Formación académica.
 */
export const education = [
  {
    institution: 'Universidad Autónoma de Manizales',
    title: 'Ingeniería de Sistemas',
    period: '2021 – Presente',
    location: 'Manizales, Colombia',
    detail: 'Noveno semestre.',
  },
  {
    institution: 'Colegio Seminario Redentoristas',
    title: 'Bachiller Académico',
    period: '',
    location: 'Manizales',
    detail: '',
  },
]

export const languages = [
  { name: 'Español', level: 'Nativo', percent: 100 },
  { name: 'Inglés', level: '70% – 80%', percent: 78 },
]
