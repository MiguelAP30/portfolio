<script setup>
/**
 * Sección Proyectos: consume dinámicamente todos los proyectos
 * registrados en src/data/projects/index.js y abre un modal de detalle.
 */
import { ref } from 'vue'
import { projects } from '@/data/projects/index.js'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const selected = ref(null)

function open(project) {
  selected.value = project
}
function close() {
  selected.value = null
}
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow reveal" v-reveal>Portafolio</p>
        <h2 class="section-title reveal" v-reveal="{ delay: 60 }">
          Proyectos <span class="text-gradient">destacados</span>
        </h2>
        <p class="section-lead reveal" v-reveal="{ delay: 120 }">
          Sistemas que diseñé y construí de extremo a extremo. Haz click en
          cualquiera para ver imágenes, video y detalles técnicos.
        </p>
      </header>

      <div class="grid">
        <div
          v-for="(p, i) in projects"
          :key="p.slug"
          class="reveal"
          v-reveal="{ delay: i * 100 }"
        >
          <ProjectCard :project="p" @open="open" />
        </div>
      </div>
    </div>

    <transition name="modal">
      <ProjectModal v-if="selected" :project="selected" @close="close" />
    </transition>
  </section>
</template>

<style scoped>
.head {
  margin-bottom: 3rem;
  max-width: 640px;
}
.grid {
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (min-width: 720px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1080px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
