<script setup>
/**
 * Sección Hero: nombre, título con typing effect, CTA y redes.
 * Incluye avatar de foto de perfil (foto real o iniciales).
 */
import { profile } from '@/data/info.js'
import { profilePhoto } from '@/data/profile-photo.js'
import TypingText from './TypingText.vue'
import SocialLinks from './SocialLinks.vue'
import AppIcon from './AppIcon.vue'

// Iniciales del nombre (fallback si no hay foto)
const initials = profile.name
  .split(' ')
  .filter((_, i) => i === 0 || i === 2) // "Miguel" + "Pérez"
  .map((w) => w[0])
  .join('')
  .toUpperCase()
  .slice(0, 2)

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="inicio" class="hero section">
    <!-- Halos decorativos -->
    <div class="halo halo-1" aria-hidden="true"></div>
    <div class="halo halo-2" aria-hidden="true"></div>

    <div class="container hero-inner">
      <!-- Columna de texto -->
      <div class="text-col">
        <p class="eyebrow reveal" v-reveal>Hola, soy</p>

        <h1 class="name reveal" v-reveal="{ delay: 80 }">
          {{ profile.name }}
        </h1>

        <h2 class="role reveal" v-reveal="{ delay: 160 }">
          <TypingText :words="profile.roles" />
        </h2>

        <p class="tagline reveal" v-reveal="{ delay: 240 }">
          {{ profile.tagline }}
        </p>

        <div class="actions reveal" v-reveal="{ delay: 320 }">
          <button class="btn btn-primary" @click="scrollTo('proyectos')">
            Ver proyectos <AppIcon name="arrow-right" :size="18" />
          </button>
          <button class="btn btn-ghost" @click="scrollTo('contacto')">
            Contáctame
          </button>
          <SocialLinks class="hero-socials" />
        </div>
      </div>

      <!-- Avatar de foto de perfil -->
      <div class="avatar-col reveal" v-reveal="{ delay: 100 }">
        <div class="avatar-wrap">
          <!-- Anillos orbitales decorativos -->
          <div class="ring ring-1" aria-hidden="true"></div>
          <div class="ring ring-2" aria-hidden="true"></div>

          <div class="avatar">
            <img
              v-if="profilePhoto"
              :src="profilePhoto"
              :alt="`Foto de ${profile.name}`"
              class="avatar-img"
            />
            <span v-else class="avatar-initials">{{ initials }}</span>
          </div>

          <!-- Chip flotante: ubicación -->
          <div class="chip chip-location" aria-hidden="true">
            <AppIcon name="map-pin" :size="13" />
            {{ profile.location }}
          </div>

          <!-- Chip flotante: disponibilidad -->
          <div class="chip chip-status" aria-hidden="true">
            <i class="dot"></i> Open to work
          </div>
        </div>
      </div>
    </div>

    <!-- Indicador de scroll -->
    <button class="scroll-cue" aria-label="Bajar" @click="scrollTo('sobre-mi')">
      <AppIcon name="arrow-down" :size="22" />
    </button>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: calc(var(--nav-h) + 2rem);
  overflow: hidden;
}
.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

/* --- Columna de texto --- */
.text-col {
  max-width: 660px;
}
.name {
  font-size: clamp(2.4rem, 7vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.02;
  margin: 0.6rem 0 0.4rem;
}
.role {
  font-size: clamp(1.3rem, 4vw, 2.4rem);
  font-weight: 700;
  min-height: 1.4em;
  letter-spacing: -0.02em;
}
.tagline {
  margin-top: 1.4rem;
  max-width: 580px;
  font-size: clamp(0.97rem, 2.2vw, 1.12rem);
  color: var(--text-muted);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 2.2rem;
}
.hero-socials {
  margin-left: 0.25rem;
}

/* --- Avatar --- */
.avatar-col {
  display: flex;
  justify-content: center;
}
.avatar-wrap {
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
}
.avatar {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--gradient);
  padding: 3px;
  box-shadow: var(--glow-cyan), var(--glow-violet);
  animation: float-avatar 7s ease-in-out infinite;
}
.avatar::before {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--bg-800);
  z-index: 0;
}
.avatar-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.avatar-initials {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--gradient-soft);
  color: var(--text);
  letter-spacing: -0.02em;
  /* Evita que las iniciales queden tapadas por el ::before */
  margin-top: 3px;
  margin-left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
}

/* Anillos orbitales */
.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px dashed;
  animation: spin-ring linear infinite;
}
.ring-1 {
  border-color: rgba(34, 211, 238, 0.3);
  animation-duration: 18s;
}
.ring-2 {
  inset: -18px;
  border-color: rgba(168, 85, 247, 0.2);
  animation-duration: 30s;
  animation-direction: reverse;
}

/* Chips flotantes */
.chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(5, 6, 10, 0.75);
  border: 1px solid var(--border-strong);
  backdrop-filter: blur(8px);
  color: var(--text);
  white-space: nowrap;
  animation: float-chip 5s ease-in-out infinite;
}
.chip-location {
  bottom: 12px;
  left: -10px;
  color: var(--text-muted);
  animation-delay: -1s;
}
.chip-location svg {
  color: var(--accent);
}
.chip-status {
  top: 16px;
  right: -14px;
  animation-delay: -2.5s;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px #34d399;
  animation: pulse-dot 1.6s ease-in-out infinite;
  display: inline-block;
}

/* Halos de gradiente */
.halo {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  z-index: 0;
  animation: float 9s ease-in-out infinite;
}
.halo-1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.5), transparent 70%);
  top: -80px;
  right: -60px;
}
.halo-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent 70%);
  bottom: -100px;
  left: -80px;
  animation-delay: -4s;
}

/* Scroll cue */
.scroll-cue {
  position: absolute;
  bottom: 1.8rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  color: var(--text-muted);
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  animation: bob 1.8s ease-in-out infinite;
  transition: color 0.2s, border-color 0.2s;
}
.scroll-cue:hover {
  color: var(--accent);
  border-color: var(--accent);
}

/* Keyframes */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-26px); }
}
@keyframes float-avatar {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
@keyframes float-chip {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
}
@keyframes spin-ring {
  to { transform: rotate(360deg); }
}
@keyframes bob {
  0%, 100% { transform: translate(-50%, 0); }
  50%       { transform: translate(-50%, 7px); }
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}

/* Desktop: dos columnas */
@media (min-width: 860px) {
  .hero-inner {
    grid-template-columns: 1fr auto;
    gap: 4rem;
  }
  .avatar-wrap {
    width: 320px;
    height: 320px;
  }
}

/* Mobile: avatar más pequeño */
@media (max-width: 859px) {
  .avatar-wrap {
    width: 220px;
    height: 220px;
  }
  .chip { font-size: 0.7rem; padding: 0.3rem 0.6rem; }
  .chip-location { bottom: 0; left: 0; }
  .chip-status   { top: 8px; right: 0; }
}
</style>
