<script setup>
/**
 * Sección "Sobre mí": resumen profesional + highlights + foto de perfil.
 */
import { about, profile } from '@/data/info.js'
import { profilePhoto } from '@/data/profile-photo.js'
import AppIcon from './AppIcon.vue'

const initials = profile.name
  .split(' ')
  .filter((_, i) => i === 0 || i === 2)
  .map((w) => w[0])
  .join('')
  .toUpperCase()
  .slice(0, 2)
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container grid">
      <!-- Mini avatar (visible en mobile sobre el texto; en desktop no aplica) -->
      <div class="about-avatar card reveal" v-reveal="{ delay: 80 }">
        <div class="about-avatar-inner">
          <img
            v-if="profilePhoto"
            :src="profilePhoto"
            :alt="`Foto de ${profile.name}`"
            class="about-photo"
          />
          <span v-else class="about-initials">{{ initials }}</span>
        </div>
        <p class="about-name">{{ profile.name }}</p>
        <p class="about-role">Full Stack &amp; IA</p>
      </div>

      <div class="text">
        <p class="eyebrow reveal" v-reveal>Sobre mí</p>
        <h2 class="section-title reveal" v-reveal="{ delay: 60 }">
          Ingeniero <span class="text-gradient">Full Stack & IA</span>
        </h2>
        <p
          v-for="(p, i) in about.paragraphs"
          :key="i"
          class="para reveal"
          v-reveal="{ delay: 120 + i * 80 }"
        >
          {{ p }}
        </p>

        <ul class="meta reveal" v-reveal="{ delay: 300 }">
          <li><AppIcon name="map-pin" :size="18" /> {{ profile.location }}</li>
          <li><AppIcon name="mail" :size="18" /> {{ profile.email }}</li>
          <li><AppIcon name="phone" :size="18" /> {{ profile.phone }}</li>
        </ul>
      </div>

      <div class="stats">
        <div
          v-for="(h, i) in about.highlights"
          :key="i"
          class="stat card reveal"
          v-reveal="{ delay: i * 90 }"
        >
          <span class="stat-value text-gradient">{{ h.value }}</span>
          <span class="stat-label">{{ h.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  align-items: start;
}

/* Mini avatar en About */
.about-avatar {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
  order: -1; /* encima del texto en mobile */
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.about-avatar:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
}
.about-avatar-inner {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--gradient);
  padding: 3px;
  box-shadow: var(--glow-cyan);
}
.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
.about-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--gradient-soft);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
}
.about-name {
  font-weight: 700;
  font-size: 1rem;
  margin-top: 0.2rem;
}
.about-role {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
}
.para {
  color: var(--text-muted);
  margin-top: 1rem;
  font-size: 1.05rem;
}
.meta {
  list-style: none;
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.meta li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.92rem;
}
.meta svg {
  color: var(--accent);
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.stat {
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.stat:hover {
  transform: translateY(-5px);
  border-color: var(--border-strong);
}
.stat-value {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1;
}
.stat-label {
  color: var(--text-muted);
  font-size: 0.92rem;
}

@media (min-width: 860px) {
  .grid {
    /* texto | avatar-about | stats */
    grid-template-columns: 1.4fr 220px 1fr;
    gap: 2.5rem;
    align-items: start;
  }
  .about-avatar {
    order: 0;
  }
}
</style>
