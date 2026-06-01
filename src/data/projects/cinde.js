import { getMedia } from './_media.js'

const slug = 'cinde'

/**
 * Sistema de Información — Fundación CINDE.
 * Desarrollado completamente por Miguel Ángel (arquitectura, backend,
 * frontend y base de datos).
 * Medios en:
 *   src/assets/projects/cinde/images/
 *   src/assets/projects/cinde/videos/
 */
export default {
  slug,
  name: 'Sistema de Información CINDE',
  tagline: 'Sistema institucional completo con IA integrada',
  status: { label: 'Finalizado', type: 'done' },
  description:
    'Sistema de información institucional de la Fundación CINDE, desarrollado de extremo a extremo: arquitectura, Backend, Frontend y gestión de base de datos. Integra chatbots con MCP, RAG sobre documentos institucionales y automatización de flujos con n8n. Entregado funcional, documentado y desplegado para uso real de la fundación.',
  tags: ['Full Stack', 'IA', 'Sistema institucional', 'Solo'],
  stack: [
    'AdonisJS',
    'Node.js',
    'Vue',
    'CSS',
    'PostgreSQL',
    'pgvector',
    'MCP',
    'n8n',
  ],
  features: [
    'Arquitectura, Backend (AdonisJS), Frontend (Vue) y base de datos desarrollados íntegramente.',
    'Frontend construido con CSS puro, sin framework de utilidades.',
    'Chatbots con MCP y RAG sobre documentos institucionales.',
    'Automatización de procesos e integraciones API con n8n.',
    'Desplegado y entregado en mayo de 2026.',
  ],
  featured: true,
  repo: null,
  demo: null,
  get media() {
    return getMedia(slug)
  },
}
