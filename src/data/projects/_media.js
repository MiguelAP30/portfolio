/**
 * Carga dinámica de medios (imágenes y videos) por proyecto.
 *
 * Cómo funciona:
 *  - Cada proyecto tiene una carpeta en  src/assets/projects/<slug>/
 *      <slug>/images/   → imágenes (png, jpg, jpeg, webp, gif, avif, svg)
 *      <slug>/videos/   → videos    (mp4, webm, mov)
 *  - Vite recoge todos esos archivos en build con import.meta.glob.
 *  - getMedia(slug) devuelve { images: [...urls], videos: [...urls] }.
 *
 * Para AÑADIR medios a un proyecto: solo deja los archivos en su carpeta.
 * No hay que tocar código. El orden es alfabético por nombre de archivo,
 * así que usa prefijos numéricos (01-, 02-, ...) si quieres controlarlo.
 */

// Recolectamos todas las URLs de medios bajo src/assets/projects/**
const imageModules = import.meta.glob(
  '../../assets/projects/**/images/*.{png,jpg,jpeg,webp,gif,avif,svg}',
  { eager: true, query: '?url', import: 'default' },
)

const videoModules = import.meta.glob(
  '../../assets/projects/**/videos/*.{mp4,webm,mov}',
  { eager: true, query: '?url', import: 'default' },
)

/**
 * Convierte el mapa de glob en una lista de { slug, path, url } ordenada.
 */
function indexBySlug(modules) {
  const bySlug = {}
  for (const [path, url] of Object.entries(modules)) {
    // path ej: ../../assets/projects/cortexiq/images/01-dashboard.png
    const match = path.match(/projects\/([^/]+)\//)
    if (!match) continue
    const slug = match[1]
    if (!bySlug[slug]) bySlug[slug] = []
    bySlug[slug].push({ path, url })
  }
  // Orden alfabético estable por ruta para que los prefijos numéricos manden
  for (const slug of Object.keys(bySlug)) {
    bySlug[slug].sort((a, b) => a.path.localeCompare(b.path))
  }
  return bySlug
}

const imagesBySlug = indexBySlug(imageModules)
const videosBySlug = indexBySlug(videoModules)

/**
 * Devuelve los medios de un proyecto a partir de su slug.
 * @param {string} slug
 * @returns {{ images: string[], videos: string[] }}
 */
export function getMedia(slug) {
  return {
    images: (imagesBySlug[slug] || []).map((m) => m.url),
    videos: (videosBySlug[slug] || []).map((m) => m.url),
  }
}
