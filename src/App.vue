<script setup>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
</script>

<template>
  <!-- Fondo animado de partículas (capa global) -->
  <ParticlesBackground />

  <NavBar />

  <main>
    <RouterView />
  </main>

  <SiteFooter />
</template>
