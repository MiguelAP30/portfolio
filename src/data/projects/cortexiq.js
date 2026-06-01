import { getMedia } from './_media.js'

const slug = 'cortexiq'

/**
 * CortexIQ — SaaS de chatbots empresariales con IA (proyecto principal).
 * Los medios se cargan solos desde:
 *   src/assets/projects/cortexiq/images/
 *   src/assets/projects/cortexiq/videos/
 */
export default {
  slug,
  name: 'CortexIQ',
  tagline: 'SaaS de chatbots empresariales con IA (RAG + agentes)',
  // Estado del proyecto: 'active' | 'done' | 'paused'
  status: { label: 'En proceso', type: 'active' },
  description:
    'Plataforma SaaS de chatbots empresariales con IA que conecta modelos de lenguaje con las bases de datos de cada organización mediante el protocolo MCP, permitiendo consultas en lenguaje natural. Incluye sistemas RAG con bases de datos vectoriales para búsqueda semántica y agentes de IA con skills personalizadas. Es mi proyecto personal principal, en monetización: un producto multiempresarial cuyo primer cliente piloto es la Fundación CINDE.',
  // Etiquetas destacadas
  tags: ['SaaS', 'IA', 'RAG', 'Multiempresa'],
  // Stack técnico
  stack: ['FastAPI', 'Vue', 'Tailwind CSS', 'MCP', 'pgvector', 'Chroma', 'PostgreSQL'],
  // Highlights del proyecto
  features: [
    'Producto SaaS multiempresarial en monetización (primer piloto: CINDE).',
    'Consultas en lenguaje natural sobre datos internos vía MCP.',
    'RAG con embeddings y búsqueda semántica (pgvector / Chroma).',
    'Agentes de IA con skills y herramientas conectadas en tiempo real.',
  ],
  featured: true,
  // Enlaces (deja en null lo que no aplique)
  repo: null,
  demo: null,
  // Medios dinámicos
  get media() {
    return getMedia(slug)
  },
}
