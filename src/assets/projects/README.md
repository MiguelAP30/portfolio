# Medios de proyectos

Cada proyecto tiene su propia carpeta aquí. La estructura es:

```
projects/
  <slug>/
    images/   ← imágenes del proyecto (png, jpg, jpeg, webp, gif, avif, svg)
    videos/   ← videos del proyecto (mp4, webm, mov)
```

## Cómo añadir imágenes o videos a un proyecto

1. Copia tus archivos dentro de `images/` o `videos/` de la carpeta del proyecto.
2. ¡Listo! El código los detecta automáticamente con `import.meta.glob`
   (ver `src/data/projects/_media.js`). No hay que tocar código.

## Orden

Los medios se ordenan **alfabéticamente por nombre de archivo**. Para controlar
el orden (por ejemplo cuál imagen es la portada), usa prefijos numéricos:

```
01-portada.png
02-dashboard.png
03-detalle.jpg
```

La **primera imagen** se usa como portada en la tarjeta del proyecto.

## Tamaños distintos

No te preocupes por el tamaño: la galería usa `object-fit: contain` sobre un
lienzo de proporción fija, así que las imágenes/videos se ajustan sin
recortarse ni deformarse, sin importar sus dimensiones.

## Añadir un proyecto nuevo

1. Crea `src/data/projects/<slug>.js` (copia uno existente).
2. Crea la carpeta `src/assets/projects/<slug>/images` y `/videos`.
3. Regístralo en `src/data/projects/index.js`.
