<script setup>
/**
 * Tarjeta de proyecto. Muestra la portada (primera imagen del proyecto,
 * con relleno difuminado para cualquier proporción), nombre, descripción
 * corta, tags y stack. Al hacer click abre el detalle.
 */
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  project: { type: Object, required: true },
})
const emit = defineEmits(['open'])

const cover = computed(() => props.project.media.images[0] || null)
const hasVideo = computed(() => props.project.media.videos.length > 0)
</script>

<template>
  <article class="card project" @click="emit('open', project)">
    <div class="cover">
      <template v-if="cover">
        <div
          class="cover-bg"
          :style="{ backgroundImage: `url(${cover})` }"
          aria-hidden="true"
        ></div>
        <img :src="cover" :alt="project.name" class="cover-img" loading="lazy" />
      </template>
      <div v-else class="cover-empty">{{ project.name.charAt(0) }}</div>

      <span v-if="hasVideo" class="badge-video">
        <AppIcon name="play" :size="13" /> Video
      </span>

      <span
        v-if="project.status"
        class="badge-status"
        :class="`st-${project.status.type}`"
      >
        <i class="dot"></i>{{ project.status.label }}
      </span>

      <div class="overlay">
        <span class="view">Ver detalles <AppIcon name="arrow-right" :size="16" /></span>
      </div>
    </div>

    <div class="body">
      <div class="tags">
        <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
      </div>
      <h3 class="name">{{ project.name }}</h3>
      <p class="tagline">{{ project.tagline }}</p>
      <p class="desc">{{ project.description }}</p>

      <ul class="stack">
        <li v-for="s in project.stack.slice(0, 5)" :key="s">{{ s }}</li>
        <li v-if="project.stack.length > 5" class="more">
          +{{ project.stack.length - 5 }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s ease, box-shadow 0.35s ease;
}
.project:hover {
  transform: translateY(-7px);
  border-color: var(--border-strong);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(168, 85, 247, 0.12);
}

.cover {
  position: relative;
  aspect-ratio: 16 / 10;
  background: #05070d;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.cover-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(24px) brightness(0.4) saturate(1.1);
  transform: scale(1.2);
}
.cover-img {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
  transition: transform 0.4s ease;
}
.project:hover .cover-img {
  transform: scale(1.04);
}
.cover-empty {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  background: var(--gradient-soft);
}
.badge-video {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: rgba(5, 6, 10, 0.7);
  border: 1px solid var(--border);
  color: var(--accent);
}
.badge-status {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(5, 6, 10, 0.7);
  border: 1px solid var(--border);
  backdrop-filter: blur(6px);
}
.badge-status .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.st-active {
  color: #6ee7b7;
  border-color: rgba(110, 231, 183, 0.35);
}
.st-active .dot {
  background: #34d399;
  box-shadow: 0 0 8px #34d399;
  animation: pulse 1.6s ease-in-out infinite;
}
.st-done {
  color: #93c5fd;
  border-color: rgba(147, 197, 253, 0.3);
}
.st-done .dot {
  background: #60a5fa;
}
.st-paused {
  color: #fbbf24;
  border-color: rgba(251, 191, 36, 0.3);
}
.st-paused .dot {
  background: #f59e0b;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: grid;
  place-items: end center;
  padding-bottom: 1.2rem;
  background: linear-gradient(to top, rgba(5, 6, 10, 0.85), transparent 55%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project:hover .overlay {
  opacity: 1;
}
.view {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--accent);
}

.body {
  padding: 1.4rem 1.5rem 1.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.7rem;
}
.tag {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--accent-2-soft);
  color: #d6b8ff;
  border: 1px solid rgba(168, 85, 247, 0.25);
}
.name {
  font-size: 1.3rem;
  font-weight: 700;
}
.tagline {
  color: var(--accent);
  font-size: 0.9rem;
  margin: 0.2rem 0 0.7rem;
}
.desc {
  color: var(--text-muted);
  font-size: 0.93rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.stack {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 1.1rem;
}
.stack li {
  font-size: 0.76rem;
  font-family: var(--font-mono);
  padding: 0.22rem 0.55rem;
  border-radius: 7px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.stack .more {
  color: var(--accent);
}
</style>
