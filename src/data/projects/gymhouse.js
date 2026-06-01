import { getMedia } from './_media.js'

const slug = 'gymhouse'

/**
 * GymHouse — App móvil de gestión para gimnasios.
 * Proyecto personal multiempresarial (en pausa para despliegue serio).
 * Medios en:
 *   src/assets/projects/gymhouse/images/
 *   src/assets/projects/gymhouse/videos/
 */
export default {
  slug,
  name: 'GymHouse',
  tagline: 'App móvil de gestión integral para gimnasios',
  status: { label: 'Pausado', type: 'paused' },
  description:
    'Plataforma móvil de gestión integral para gimnasios: miembros, planes y membresías, rutinas y seguimiento del progreso. Es un proyecto personal pensado como producto multiempresarial; actualmente está en pausa para preparar un despliegue serio.',
  tags: ['App Móvil', 'Multiempresa', 'Full Stack'],
  stack: ['React Native', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
  features: [
    'App móvil construida con React Native + Tailwind (NativeWind).',
    'Backend en FastAPI con PostgreSQL.',
    'Gestión de miembros, planes, membresías y rutinas.',
    'Proyecto personal multiempresarial, en pausa para un despliegue serio.',
  ],
  featured: true,
  repo: null,
  demo: null,
  get media() {
    return getMedia(slug)
  },
}
