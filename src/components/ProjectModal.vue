<script setup>
/**
 * Modal de detalle de proyecto: galería de medios + descripción completa,
 * features, stack y enlaces. Cierra con Escape, click en backdrop o botón.
 */
import { onMounted, onBeforeUnmount } from 'vue'
import ProjectMedia from './ProjectMedia.vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  project: { type: Object, required: true },
})
const emit = defineEmits(['close'])

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="backdrop" @click.self="emit('close')">
    <div class="modal card" role="dialog" aria-modal="true" :aria-label="project.name">
      <button class="close" aria-label="Cerrar" @click="emit('close')">
        <AppIcon name="close" :size="22" />
      </button>

      <div class="content">
        <ProjectMedia :images="project.media.images" :videos="project.media.videos" />

        <div class="info">
          <div class="tags">
            <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
          </div>
          <div class="name-row">
            <h2 class="name">{{ project.name }}</h2>
            <span
              v-if="project.status"
              class="status"
              :class="`st-${project.status.type}`"
            >
              <i class="dot"></i>{{ project.status.label }}
            </span>
          </div>
          <p class="tagline">{{ project.tagline }}</p>
          <p class="desc">{{ project.description }}</p>

          <div v-if="project.features?.length" class="block">
            <h4>Lo que hace</h4>
            <ul class="features">
              <li v-for="(f, i) in project.features" :key="i">{{ f }}</li>
            </ul>
          </div>

          <div class="block">
            <h4>Stack</h4>
            <ul class="stack">
              <li v-for="s in project.stack" :key="s">{{ s }}</li>
            </ul>
          </div>

          <div v-if="project.repo || project.demo" class="actions">
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Ver demo <AppIcon name="external" :size="16" />
            </a>
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost"
            >
              Código <AppIcon name="github" :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(3, 4, 8, 0.78);
  backdrop-filter: blur(8px);
  display: grid;
  place-items: center;
  padding: 1.2rem;
  animation: fade 0.25s ease;
}
@keyframes fade {
  from {
    opacity: 0;
  }
}
.modal {
  position: relative;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--bg-800);
  animation: pop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
}
.close {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  z-index: 5;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(5, 6, 10, 0.7);
  border: 1px solid var(--border-strong);
  color: var(--text);
  transition: background 0.2s, color 0.2s;
}
.close:hover {
  background: var(--accent);
  color: #05060a;
}
.content {
  padding: 1.4rem;
}
.info {
  margin-top: 1.4rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
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
.name-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
}
.name {
  font-size: clamp(1.6rem, 4vw, 2.1rem);
  font-weight: 800;
}
.status {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-family: var(--font-mono);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(5, 6, 10, 0.5);
  border: 1px solid var(--border);
}
.status .dot {
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
.tagline {
  color: var(--accent);
  margin: 0.25rem 0 1rem;
}
.desc {
  color: var(--text-muted);
  font-size: 1.02rem;
}
.block {
  margin-top: 1.5rem;
}
.block h4 {
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.7rem;
}
.features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.features li {
  position: relative;
  padding-left: 1.4rem;
  color: var(--text-muted);
}
.features li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--accent);
}
.stack {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.stack li {
  font-size: 0.82rem;
  font-family: var(--font-mono);
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.8rem;
}

@media (min-width: 760px) {
  .content {
    padding: 1.8rem;
  }
}
</style>
