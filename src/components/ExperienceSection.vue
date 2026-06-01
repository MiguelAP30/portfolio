<script setup>
/**
 * Sección Experiencia: timeline vertical de experiencia laboral.
 */
import { experiences } from '@/data/info.js'
</script>

<template>
  <section id="experiencia" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow reveal" v-reveal>Trayectoria</p>
        <h2 class="section-title reveal" v-reveal="{ delay: 60 }">
          Experiencia <span class="text-gradient">laboral</span>
        </h2>
      </header>

      <div class="timeline">
        <article
          v-for="(exp, i) in experiences"
          :key="i"
          class="item reveal"
          v-reveal="{ delay: i * 90 }"
        >
          <div class="dot" aria-hidden="true"></div>
          <div class="content card">
            <div class="top">
              <h3 class="role">{{ exp.role }}</h3>
              <span class="period">{{ exp.period }}</span>
            </div>
            <p class="company">
              {{ exp.company }} · <span class="loc">{{ exp.location }}</span>
            </p>
            <ul class="bullets">
              <li v-for="(b, bi) in exp.bullets" :key="bi">{{ b }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  margin-bottom: 3rem;
}
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-left: 1.8rem;
}
/* Línea vertical */
.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--accent),
    var(--accent-2),
    transparent
  );
}
.item {
  position: relative;
}
.dot {
  position: absolute;
  left: -1.8rem;
  top: 1.6rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-900);
  border: 3px solid var(--accent);
  box-shadow: var(--glow-cyan);
  transform: translateX(-1px);
}
.content {
  padding: 1.5rem 1.6rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.content:hover {
  transform: translateX(6px);
  border-color: var(--border-strong);
}
.top {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  justify-content: space-between;
  align-items: baseline;
}
.role {
  font-size: 1.12rem;
  font-weight: 700;
}
.period {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent);
  white-space: nowrap;
}
.company {
  color: var(--text-muted);
  margin: 0.3rem 0 0.9rem;
  font-size: 0.95rem;
}
.loc {
  color: var(--text-dim);
}
.bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.bullets li {
  position: relative;
  padding-left: 1.3rem;
  color: var(--text-muted);
  font-size: 0.96rem;
}
.bullets li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}
</style>
