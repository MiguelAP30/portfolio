<script setup>
/**
 * Pie de página con marca, navegación rápida y redes.
 */
import { profile } from '@/data/info.js'
import SocialLinks from './SocialLinks.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <div class="brand">
        <span class="brand-mark">MP</span>
        <div>
          <p class="brand-name">{{ profile.name }}</p>
          <p class="brand-sub">Full Stack & IA · {{ profile.location }}</p>
        </div>
      </div>

      <SocialLinks :size="18" />
    </div>

    <div class="container bottom">
      <p>© {{ year }} {{ profile.name }}. Hecho con Vue 3 + Vite.</p>
      <a href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 1.5rem 2rem;
  background: var(--bg-850);
}
.inner {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: var(--gradient);
  color: #05060a;
  font-weight: 800;
}
.brand-name {
  font-weight: 700;
}
.brand-sub {
  color: var(--text-dim);
  font-size: 0.85rem;
}
.bottom {
  margin-top: 1.8rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: space-between;
  color: var(--text-dim);
  font-size: 0.85rem;
}
.bottom a {
  color: var(--text-muted);
  transition: color 0.2s;
}
.bottom a:hover {
  color: var(--accent);
}
</style>
