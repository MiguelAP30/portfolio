# Portafolio — Miguel Ángel Pérez Clavijo

Portafolio personal en **Vue 3 + Vite + Vue Router**. Tema oscuro premium
(acento dual cyan + violeta), animaciones y diseño mobile-first.

## 🔑 Regla principal: el CV es la fuente de verdad

[`CV.md`](CV.md) es el **origen de todo el contenido del sitio**.

> **Cada cambio en `CV.md` debe reflejarse en la página.**

Cuando el usuario edite `CV.md` (o pida un cambio de contenido), hay que
propagarlo a los archivos de datos de Vue. Para eso existe el skill
**`actualizar-portafolio`** (`.claude/skills/actualizar-portafolio/`):
úsalo cada vez que cambie el CV o se pida modificar contenido.

### Mapa: sección del CV → archivo de datos

| Sección de `CV.md`                    | Dónde se refleja en el código                          |
|---------------------------------------|--------------------------------------------------------|
| Datos personales / Roles / Resumen    | `src/data/info.js` → `profile`, `about`                |
| Redes (GitHub, LinkedIn, Email)       | `src/data/info.js` → `socials`                         |
| Habilidades                           | `src/data/info.js` → `skillGroups`                     |
| Experiencia laboral                   | `src/data/info.js` → `experiences`                     |
| Educación / Idiomas                   | `src/data/info.js` → `education`, `languages`          |
| Proyectos (CortexIQ, CINDE, GymHouse) | `src/data/projects/<slug>.js` + `index.js`             |
| Imágenes / videos de un proyecto      | `src/assets/projects/<slug>/images/` y `/videos/`      |

## 📐 Convenciones

- **Solo van a Proyectos: CortexIQ, CINDE y GymHouse.** INDUMA y el trabajo en
  la universidad quedan únicamente en la sección **Experiencia**.
- Cada proyecto tiene un campo `status: { label, type }` con `type` ∈
  `'active'` (verde, "En proceso") · `'done'` (azul, "Finalizado") ·
  `'paused'` (ámbar, "Pausado").
- Los medios de proyecto se cargan **dinámicamente** con `import.meta.glob`
  (ver `src/data/projects/_media.js`); no se importan a mano. Para añadir
  imágenes/videos basta con dejar los archivos en la carpeta del proyecto.
  Se ordenan alfabéticamente (usa prefijos `01-`, `02-`); la primera imagen es
  la portada.
- Medios de cualquier tamaño se muestran con `object-fit: contain` + relleno
  difuminado, sin recortar ni deformar.
- El contenido de la UI está en **español**.

## 🛠️ Comandos

```bash
npm run dev      # dev server en http://localhost:5188 (puerto fijo)
npm run build    # build de producción → dist/
npm run preview
```

> El puerto 5173 lo ocupa otro proyecto del usuario (CortexIQ), por eso el dev
> server usa el puerto fijo **5188** (`strictPort` en `vite.config.js`).

## ✅ Tras cualquier cambio

1. Verifica que `npm run build` pase sin errores.
2. Si es un cambio visible, revísalo en el preview del navegador.
