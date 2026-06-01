<script setup>
/**
 * Sección Hero: nombre, título con typing effect, CTA y redes.
 */
import { profile } from '@/data/info.js'
import TypingText from './TypingText.vue'
import SocialLinks from './SocialLinks.vue'
import AppIcon from './AppIcon.vue'

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
      <p class="eyebrow reveal">Hola, soy</p>

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
  max-width: 880px;
}
.name {
  font-size: clamp(2.6rem, 8vw, 5.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.02;
  margin: 0.6rem 0 0.4rem;
}
.role {
  font-size: clamp(1.4rem, 4.5vw, 2.6rem);
  font-weight: 700;
  min-height: 1.4em;
  letter-spacing: -0.02em;
}
.tagline {
  margin-top: 1.4rem;
  max-width: 600px;
  font-size: clamp(1rem, 2.5vw, 1.18rem);
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

/* Halos de gradiente */
.halo {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
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
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-26px);
  }
}

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
@keyframes bob {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 7px);
  }
}
</style>
