<script setup>
/**
 * Sección Educación: formación académica + idiomas.
 */
import { education, languages } from '@/data/info.js'
</script>

<template>
  <section id="educacion" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow reveal" v-reveal>Formación</p>
        <h2 class="section-title reveal" v-reveal="{ delay: 60 }">
          Educación <span class="text-gradient">& idiomas</span>
        </h2>
      </header>

      <div class="layout">
        <!-- Educación -->
        <div class="edu-list">
          <article
            v-for="(e, i) in education"
            :key="i"
            class="edu card reveal"
            v-reveal="{ delay: i * 90 }"
          >
            <div class="edu-icon" aria-hidden="true">🎓</div>
            <div>
              <div class="edu-top">
                <h3 class="inst">{{ e.institution }}</h3>
                <span v-if="e.period" class="period">{{ e.period }}</span>
              </div>
              <p class="title">{{ e.title }}</p>
              <p class="sub">
                {{ e.location }}<template v-if="e.detail"> · {{ e.detail }}</template>
              </p>
            </div>
          </article>
        </div>

        <!-- Idiomas -->
        <aside class="langs card reveal" v-reveal="{ delay: 120 }">
          <h3 class="langs-title">Idiomas</h3>
          <div v-for="l in languages" :key="l.name" class="lang">
            <div class="lang-top">
              <span>{{ l.name }}</span>
              <span class="lvl">{{ l.level }}</span>
            </div>
            <div class="track">
              <div class="fill" :style="{ width: l.percent + '%' }"></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  margin-bottom: 3rem;
}
.layout {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;
}
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}
.edu {
  display: flex;
  gap: 1.1rem;
  padding: 1.5rem 1.6rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.edu:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
}
.edu-icon {
  font-size: 1.6rem;
  line-height: 1;
}
.edu-top {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
  justify-content: space-between;
  align-items: baseline;
}
.inst {
  font-size: 1.1rem;
  font-weight: 700;
}
.period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  white-space: nowrap;
}
.title {
  color: var(--text);
  margin-top: 0.2rem;
}
.sub {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.langs {
  padding: 1.7rem 1.7rem;
  align-self: start;
}
.langs-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
}
.lang {
  margin-bottom: 1.1rem;
}
.lang-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.92rem;
  margin-bottom: 0.45rem;
}
.lvl {
  font-family: var(--font-mono);
  font-size: 0.8rem;
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
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
}

@media (min-width: 860px) {
  .layout {
    grid-template-columns: 1.4fr 1fr;
    gap: 2rem;
  }
}
</style>
