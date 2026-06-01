<script setup>
/**
 * Fondo animado de partículas conectadas (canvas).
 * Ligero, responsivo y respeta prefers-reduced-motion.
 */
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let ctx, rafId, particles, width, height
let mouse = { x: -9999, y: -9999 }

const COLORS = ['#22d3ee', '#a855f7', '#818cf8']

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.value.width = width * dpr
  canvas.value.height = height * dpr
  canvas.value.style.width = width + 'px'
  canvas.value.style.height = height + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function initParticles() {
  // Densidad según el área de pantalla (con tope)
  const count = Math.min(Math.floor((width * height) / 18000), 90)
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.8 + 0.6,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
  }))
}

function draw() {
  ctx.clearRect(0, 0, width, height)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    p.x += p.vx
    p.y += p.vy

    // Rebote en bordes
    if (p.x < 0 || p.x > width) p.vx *= -1
    if (p.y < 0 || p.y > height) p.vy *= -1

    // Líneas a partículas cercanas
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j]
      const dx = p.x - q.x
      const dy = p.y - q.y
      const dist = Math.hypot(dx, dy)
      if (dist < 130) {
        ctx.globalAlpha = (1 - dist / 130) * 0.22
        ctx.strokeStyle = p.c
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()
      }
    }

    // Conexión sutil al cursor
    const mdx = p.x - mouse.x
    const mdy = p.y - mouse.y
    const mdist = Math.hypot(mdx, mdy)
    if (mdist < 160) {
      ctx.globalAlpha = (1 - mdist / 160) * 0.3
      ctx.strokeStyle = p.c
      ctx.lineWidth = 0.7
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(mouse.x, mouse.y)
      ctx.stroke()
    }

    // Punto
    ctx.globalAlpha = 0.7
    ctx.fillStyle = p.c
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.globalAlpha = 1
  rafId = requestAnimationFrame(draw)
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}
function onMouseLeave() {
  mouse.x = -9999
  mouse.y = -9999
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ctx = canvas.value.getContext('2d')
  resize()
  initParticles()
  if (!reduced) {
    draw()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
  }
  window.addEventListener('resize', handleResize)
})

function handleResize() {
  resize()
  initParticles()
}

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<template>
  <canvas ref="canvas" class="particles" aria-hidden="true"></canvas>
</template>

<style scoped>
.particles {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.9;
}
</style>
