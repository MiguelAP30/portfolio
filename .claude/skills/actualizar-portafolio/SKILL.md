---
name: actualizar-portafolio
description: Sincroniza el portafolio (Vue 3) con el CV cuando el usuario edita CV.md o pide un cambio de contenido — actualiza experiencia, educación, skills, datos personales o proyectos, y verifica el resultado. Úsalo siempre que cambie el CV o el contenido del sitio.
---

# Actualizar portafolio desde el CV

El portafolio se alimenta de [`CV.md`](../../../CV.md), que es la **fuente de
verdad**. Tu trabajo es propagar cualquier cambio del CV a los datos de Vue para
que se vea reflejado en la página.

## Cuándo usar este skill

- El usuario editó `CV.md`.
- El usuario pide cambiar contenido del sitio (un dato, una fecha, un proyecto,
  una skill, etc.).
- El usuario añade imágenes o videos a un proyecto.

## Flujo de trabajo

1. **Lee `CV.md`** para conocer el estado deseado del contenido.
2. **Identifica qué cambió** (compara con los archivos de datos actuales si hace
   falta). Si el usuario describió el cambio en lenguaje natural, primero
   **actualiza `CV.md`** para que siga siendo la fuente de verdad, y luego
   propaga a los datos.
3. **Edita el/los archivo(s) de datos** según el mapa de abajo.
4. **Verifica:** corre `npm run build` (debe pasar) y, si el dev server está
   activo, revisa el cambio en el preview del navegador.

## Mapa CV → datos

| Qué cambió en el CV                      | Archivo a editar                                  | Campo                          |
|------------------------------------------|---------------------------------------------------|--------------------------------|
| Nombre, título, ubicación, email, etc.   | `src/data/info.js`                                | `profile`                      |
| Roles del typing effect                  | `src/data/info.js`                                | `profile.roles`                |
| Resumen / "Sobre mí"                     | `src/data/info.js`                                | `about.paragraphs`             |
| Redes sociales                           | `src/data/info.js`                                | `socials`                      |
| Habilidades                              | `src/data/info.js`                                | `skillGroups`                  |
| Experiencia laboral                      | `src/data/info.js`                                | `experiences`                  |
| Educación                                | `src/data/info.js`                                | `education`                    |
| Idiomas                                  | `src/data/info.js`                                | `languages`                    |
| Datos de un proyecto                     | `src/data/projects/<slug>.js`                     | (todo el objeto)               |
| Estado de un proyecto                    | `src/data/projects/<slug>.js`                     | `status: { label, type }`      |
| Orden / alta / baja de proyectos         | `src/data/projects/index.js`                      | array `projects`               |
| Imágenes o videos de un proyecto         | `src/assets/projects/<slug>/images|videos/`       | (deja los archivos ahí)        |

## Reglas

- **Solo van a Proyectos: CortexIQ, CINDE y GymHouse.** INDUMA y el trabajo en
  la universidad van únicamente en **Experiencia** (`experiences`).
- `status.type` ∈ `'active'` (verde · "En proceso") · `'done'` (azul ·
  "Finalizado") · `'paused'` (ámbar · "Pausado").
- Mantén el contenido en **español**.
- No importes medios a mano: el sistema los detecta con `import.meta.glob`.

## Añadir un proyecto nuevo

1. Crea `src/data/projects/<slug>.js` (copia uno existente; usa el getter
   `media` con `getMedia(slug)`).
2. Crea `src/assets/projects/<slug>/images/` y `/videos/`.
3. Regístralo en `src/data/projects/index.js` (en el orden deseado).
4. Documenta el proyecto en la sección "Proyectos" de `CV.md`.

## Verificación final

```bash
npm run build   # debe terminar sin errores
```
Si el dev server corre (`npm run dev`, puerto 5188), revisa el cambio en el
navegador antes de dar por terminado.
