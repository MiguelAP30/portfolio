/**
 * Directiva v-reveal: anima la entrada de un elemento al hacer scroll.
 *
 * Uso:
 *   <div v-reveal>...</div>
 *   <div v-reveal="{ delay: 120 }">...</div>   // retardo en ms
 *
 * Añade la clase .reveal (estado inicial) y .is-visible cuando el
 * elemento entra en el viewport (ver estilos en style.css).
 */
const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = binding.value?.delay ?? 0
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}

export default reveal
