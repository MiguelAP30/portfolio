<script setup>
/**
 * Sección Habilidades: grupos de skills con barras animadas
 * que se llenan al entrar en viewport.
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { skillGroups } from '@/data/info.js'

const root = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section id="habilidades" class="section">
    <div class="container" ref="root">
      <header class="head">
        <p class="eyebrow reveal" v-reveal>Habilidades</p>
        <h2 class="section-title reveal" v-reveal="{ delay: 60 }">
          Stack <span class="text-gradient">técnico</span>
        </h2>
        <p class="section-lead reveal" v-reveal="{ delay: 120 }">
          Tecnologías y herramientas con las que construyo, automatizo y
          despliego software e inteligencia artificial.
        </p>
      </header>

      <div class="groups">
        <article
          v-for="(group, gi) in skillGroups"
          :key="group.category"
          class="group card reveal"
          v-reveal="{ delay: gi * 80 }"
        >
          <h3 class="group-title">{{ group.category }}</h3>
          <ul class="bars">
            <li v-for="skill in group.skills" :key="skill.name">
              <div class="bar-top">
                <span>{{ skill.name }}</span>
                <span class="pct">{{ skill.level }}%</span>
              </div>
              <div class="track">
                <div
                  class="fill"
                  :style="{ width: visible ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  margin-bottom: 3rem;
  max-width: 640px;
}
.groups {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;
}
.group {
  padding: 1.8rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.group:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
}
.group-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.group-title::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: var(--gradient);
}
.bars {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.05rem;
}
.bar-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.92rem;
  margin-bottom: 0.45rem;
  color: var(--text);
}
.pct {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-dim);
}
.track {
  height: 7px;
  background: var(--surface-2);
  border-radius: 999px;
  overflow: hidden;
}
.fill {
  height: 100%;
  background: var(--gradient);
  border-radius: 999px;
  width: 0;
  transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.45);
}

@media (min-width: 720px) {
  .groups {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1080px) {
  .groups {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
