/**
 * Carga dinámica de la foto de perfil.
 *
 * Cómo usar:
 *   1. Deja tu foto en  src/assets/profile/<nombre>.<ext>
 *      (jpg, jpeg, png, webp, avif — cualquier nombre)
 *   2. Importa { profilePhoto } desde aquí.
 *      Si hay foto → URL de la imagen.
 *      Si no hay   → null  (los componentes muestran las iniciales).
 */

const modules = import.meta.glob(
  '../assets/profile/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' },
)

const urls = Object.values(modules)

/** URL de la foto de perfil, o null si no existe. */
export const profilePhoto = urls.length > 0 ? urls[0] : null
