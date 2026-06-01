/**
 * Registro central de proyectos.
 *
 * Para AÑADIR un proyecto nuevo:
 *   1. Crea un archivo  src/data/projects/<slug>.js  (copia uno existente).
 *   2. Crea la carpeta   src/assets/projects/<slug>/images/  y  /videos/
 *      y deja ahí tus medios.
 *   3. Impórtalo y añádelo al array `projects` de abajo.
 *
 * No hace falta tocar nada más: Projects.vue los renderiza dinámicamente.
 */
import cortexiq from './cortexiq.js'
import gymhouse from './gymhouse.js'
import cinde from './cinde.js'

// Orden de aparición en el portafolio (CortexIQ primero: proyecto principal)
export const projects = [cortexiq, cinde, gymhouse]

export default projects
