<script setup>
/**
 * Lista de enlaces sociales (GitHub, LinkedIn, Email).
 */
import { socials } from '@/data/info.js'
import AppIcon from './AppIcon.vue'

defineProps({
  size: { type: Number, default: 20 },
})
</script>

<template>
  <div class="socials">
    <a
      v-for="s in socials"
      :key="s.name"
      :href="s.url"
      :target="s.icon === 'mail' ? '_self' : '_blank'"
      rel="noopener noreferrer"
      :aria-label="s.name"
      :title="s.name"
    >
      <AppIcon :name="s.icon" :size="size" />
    </a>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  gap: 0.75rem;
}
.socials a {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;
}
.socials a:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--glow-cyan);
}
</style>
