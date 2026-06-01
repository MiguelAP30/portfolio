<script setup>
/**
 * Barra de navegación fija con scroll-spy, blur al hacer scroll
 * y menú responsivo (mobile-first).
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppIcon from './AppIcon.vue'

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'educacion', label: 'Educación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

const scrolled = ref(false)
const active = ref('inicio')
const menuOpen = ref(false)

let observer

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function go(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // Scroll-spy: marca el enlace de la sección visible
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  links.forEach((l) => {
    const el = document.getElementById(l.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="nav-inner container">
      <a href="#inicio" class="brand" @click.prevent="go('inicio')">
        <span class="brand-mark">MP</span>
        <span class="brand-text">Miguel<span class="text-gradient">.dev</span></span>
      </a>

      <!-- Navegación desktop -->
      <nav class="links" aria-label="Secciones">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          :class="{ active: active === l.id }"
          @click.prevent="go(l.id)"
        >
          {{ l.label }}
        </a>
      </nav>

      <!-- Botón menú móvil -->
      <button
        class="burger"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="24" />
      </button>
    </div>

    <!-- Panel móvil -->
    <transition name="drop">
      <nav v-if="menuOpen" class="mobile" aria-label="Secciones (móvil)">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          :class="{ active: active === l.id }"
          @click.prevent="go(l.id)"
        >
          {{ l.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(5, 6, 10, 0.72);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 700;
  font-size: 1.1rem;
}
.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: var(--gradient);
  color: #05060a;
  font-weight: 800;
  font-size: 0.95rem;
  box-shadow: var(--glow-cyan);
}
.links {
  display: none;
  gap: 0.35rem;
}
.links a {
  position: relative;
  padding: 0.5rem 0.85rem;
  font-size: 0.92rem;
  color: var(--text-muted);
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;
}
.links a:hover {
  color: var(--text);
}
.links a.active {
  color: var(--text);
  background: var(--surface-2);
}
.links a.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: var(--gradient);
  transform: translateX(-50%);
}
.burger {
  display: inline-flex;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 10px;
  padding: 0.45rem;
}
.mobile {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.6rem 1.5rem 1rem;
  background: rgba(5, 6, 10, 0.95);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.mobile a {
  padding: 0.75rem 0.5rem;
  color: var(--text-muted);
  border-radius: 10px;
}
.mobile a.active {
  color: var(--accent);
  background: var(--accent-soft);
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (min-width: 920px) {
  .links {
    display: flex;
  }
  .burger {
    display: none;
  }
}
</style>
