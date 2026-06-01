# Portafolio — Miguel Ángel Pérez Clavijo

Portafolio personal construido con **Vue 3 + Vite**. Tema oscuro premium con
acento dual (cyan + violeta), animaciones (typing effect, scroll reveals,
fondo de partículas, hover effects) y diseño totalmente responsivo (mobile-first).

## 🚀 Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5188)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

## 🧱 Arquitectura

```
src/
├── assets/
│   └── projects/<slug>/      # medios por proyecto
│       ├── images/           #   imágenes (cualquier tamaño)
│       └── videos/           #   videos
├── components/               # componentes y secciones
│   ├── NavBar.vue            # navegación + scroll-spy
│   ├── HeroSection.vue       # hero con typing effect
│   ├── AboutSection.vue
│   ├── SkillsSection.vue     # barras animadas
│   ├── ExperienceSection.vue # timeline
│   ├── EducationSection.vue
│   ├── ProjectsSection.vue   # consume los proyectos dinámicamente
│   ├── ProjectCard.vue
│   ├── ProjectModal.vue
│   ├── ProjectMedia.vue      # galería imágenes + videos
│   ├── ContactSection.vue    # formulario (mailto)
│   ├── ParticlesBackground.vue
│   ├── TypingText.vue
│   ├── SocialLinks.vue
│   ├── AppIcon.vue           # íconos SVG inline
│   └── SiteFooter.vue
├── data/
│   ├── info.js               # TODA la info personal (CV)
│   └── projects/             # un archivo por proyecto
│       ├── _media.js         # carga dinámica de imágenes/videos
│       ├── cinde.js
│       ├── cortexiq.js
│       ├── gymhouse.js
│       └── index.js          # registro central
├── directives/reveal.js      # directiva v-reveal (scroll reveal)
├── router/index.js
├── views/HomeView.vue
├── App.vue
├── main.js
└── style.css                 # tokens de diseño + estilos globales
```

## ✏️ Editar el contenido

Toda la información personal (resumen, skills, experiencia, educación,
idiomas, redes) vive en [`src/data/info.js`](src/data/info.js). Edítalo y se
actualiza en toda la app.

## 📦 Añadir un proyecto nuevo

1. Crea `src/data/projects/<slug>.js` (copia uno existente).
2. Crea la carpeta `src/assets/projects/<slug>/images/` y `/videos/`.
3. Registra el proyecto en `src/data/projects/index.js`.

## 🖼️ Añadir imágenes / videos a un proyecto

Solo deja los archivos en la carpeta del proyecto:

```
src/assets/projects/<slug>/images/01-portada.png
src/assets/projects/<slug>/videos/demo.mp4
```

- Se detectan automáticamente (vía `import.meta.glob`), sin tocar código.
- Se ordenan alfabéticamente: usa prefijos `01-`, `02-`, ... para controlar el orden.
- La **primera imagen** es la portada de la tarjeta.
- Imágenes/videos de **cualquier tamaño** se ajustan sin recortarse ni
  deformarse (lienzo de proporción fija + `object-fit: contain` + relleno
  difuminado de fondo).

Formatos soportados: imágenes `png, jpg, jpeg, webp, gif, avif, svg` ·
videos `mp4, webm, mov`.
