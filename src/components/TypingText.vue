<script setup>
/**
 * Efecto de máquina de escribir que rota entre varias frases.
 * <TypingText :words="['A', 'B']" />
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  words: { type: Array, required: true },
  typeSpeed: { type: Number, default: 90 },
  deleteSpeed: { type: Number, default: 45 },
  pause: { type: Number, default: 1400 },
})

const display = ref('')
let wordIndex = 0
let charIndex = 0
let deleting = false
let timer

function tick() {
  const current = props.words[wordIndex]

  if (!deleting) {
    display.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      deleting = true
      timer = setTimeout(tick, props.pause)
      return
    }
    timer = setTimeout(tick, props.typeSpeed)
  } else {
    display.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      deleting = false
      wordIndex = (wordIndex + 1) % props.words.length
      timer = setTimeout(tick, props.typeSpeed)
      return
    }
    timer = setTimeout(tick, props.deleteSpeed)
  }
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    display.value = props.words[0]
    return
  }
  timer = setTimeout(tick, 400)
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <span class="typing">
    <span class="text-gradient">{{ display }}</span>
    <span class="caret" aria-hidden="true"></span>
  </span>
</template>

<style scoped>
.typing {
  display: inline-flex;
  align-items: center;
}
.caret {
  display: inline-block;
  width: 3px;
  height: 1em;
  margin-left: 4px;
  background: var(--accent);
  border-radius: 2px;
  animation: blink 1s steps(2, start) infinite;
}
@keyframes blink {
  to {
    opacity: 0;
  }
}
</style>
