<script setup>
/**
 * Galería de medios de un proyecto (imágenes + videos).
 *
 * Maneja medios de cualquier tamaño sin recortar ni deformar:
 *  - El medio real va con object-fit: contain sobre un lienzo de proporción fija.
 *  - Detrás se pinta una versión difuminada (cover) del mismo medio como relleno,
 *    para que los bordes no queden vacíos y se vea estético.
 *
 * Incluye navegación (flechas + miniaturas) cuando hay más de un medio.
 */
import { ref, computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  videos: { type: Array, default: () => [] },
})

// Lista unificada: primero imágenes, luego videos
const items = computed(() => [
  ...props.images.map((src) => ({ type: 'image', src })),
  ...props.videos.map((src) => ({ type: 'video', src })),
])

const index = ref(0)
const current = computed(() => items.value[index.value] || null)

function next() {
  index.value = (index.value + 1) % items.value.length
}
function prev() {
  index.value = (index.value - 1 + items.value.length) % items.value.length
}
function select(i) {
  index.value = i
}
</script>

<template>
  <div v-if="current" class="media">
    <div class="stage">
      <!-- Relleno difuminado (solo imágenes) -->
      <div
        v-if="current.type === 'image'"
        class="backdrop"
        :style="{ backgroundImage: `url(${current.src})` }"
        aria-hidden="true"
      ></div>

      <!-- Medio principal -->
      <img
        v-if="current.type === 'image'"
        :src="current.src"
        class="main"
        alt="Captura del proyecto"
        loading="lazy"
      />
      <video
        v-else
        :src="current.src"
        class="main"
        controls
        playsinline
        preload="metadata"
      ></video>

      <!-- Flechas -->
      <template v-if="items.length > 1">
        <button class="nav prev" aria-label="Anterior" @click="prev">
          <AppIcon name="chevron-left" :size="22" />
        </button>
        <button class="nav next" aria-label="Siguiente" @click="next">
          <AppIcon name="chevron-right" :size="22" />
        </button>
        <span class="counter">{{ index + 1 }} / {{ items.length }}</span>
      </template>
    </div>

    <!-- Miniaturas -->
    <div v-if="items.length > 1" class="thumbs">
      <button
        v-for="(it, i) in items"
        :key="i"
        class="thumb"
        :class="{ active: i === index }"
        @click="select(i)"
        :aria-label="`Ir al medio ${i + 1}`"
      >
        <img v-if="it.type === 'image'" :src="it.src" alt="" loading="lazy" />
        <span v-else class="thumb-video">
          <AppIcon name="play" :size="16" />
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.stage {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #05070d;
  border-radius: var(--radius-sm);
  overflow: hidden;
  display: grid;
  place-items: center;
}
.backdrop {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(28px) brightness(0.45) saturate(1.1);
  transform: scale(1.15);
}
.main {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  z-index: 1;
}
video.main {
  width: 100%;
  height: 100%;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: rgba(5, 6, 10, 0.6);
  backdrop-filter: blur(6px);
  color: var(--text);
  transition: background 0.2s, color 0.2s;
}
.nav:hover {
  background: var(--accent);
  color: #05060a;
}
.prev {
  left: 0.7rem;
}
.next {
  right: 0.7rem;
}
.counter {
  position: absolute;
  bottom: 0.7rem;
  right: 0.8rem;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(5, 6, 10, 0.6);
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.thumbs {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.8rem;
  overflow-x: auto;
  padding-bottom: 0.3rem;
}
.thumb {
  flex: 0 0 auto;
  width: 72px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #05070d;
  padding: 0;
  opacity: 0.6;
  transition: opacity 0.2s, border-color 0.2s, transform 0.2s;
}
.thumb:hover {
  transform: translateY(-2px);
}
.thumb.active {
  opacity: 1;
  border-color: var(--accent);
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.thumb-video {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  color: var(--accent);
  background: var(--accent-soft);
}
</style>
