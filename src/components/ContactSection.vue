<script setup>
/**
 * Sección Contacto: enlaces directos + formulario que abre el cliente
 * de correo con el mensaje prellenado (mailto, sin backend).
 */
import { ref, computed } from 'vue'
import { profile } from '@/data/info.js'
import SocialLinks from './SocialLinks.vue'
import AppIcon from './AppIcon.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Contacto de ${name.value || 'tu portafolio'}`)
  const body = encodeURIComponent(
    `Nombre: ${name.value}\nEmail: ${email.value}\n\n${message.value}`,
  )
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
})

const sent = ref(false)
function submit() {
  window.location.href = mailtoHref.value
  sent.value = true
}
</script>

<template>
  <section id="contacto" class="section">
    <div class="container">
      <div class="panel card reveal" v-reveal>
        <div class="left">
          <p class="eyebrow">Contacto</p>
          <h2 class="section-title">
            ¿Construimos algo <span class="text-gradient">juntos?</span>
          </h2>
          <p class="lead">
            Estoy abierto a prácticas, proyectos y oportunidades de desarrollo
            Full Stack e IA. Escríbeme y te respondo pronto.
          </p>

          <ul class="contacts">
            <li>
              <a :href="`mailto:${profile.email}`">
                <AppIcon name="mail" :size="18" /> {{ profile.email }}
              </a>
            </li>
            <li>
              <span><AppIcon name="map-pin" :size="18" /> {{ profile.location }}</span>
            </li>
          </ul>

          <SocialLinks :size="20" />
        </div>

        <form class="right" @submit.prevent="submit">
          <div class="field">
            <label for="name">Nombre</label>
            <input id="name" v-model="name" type="text" required placeholder="Tu nombre" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" required placeholder="tu@email.com" />
          </div>
          <div class="field">
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              v-model="message"
              rows="4"
              required
              placeholder="Cuéntame en qué puedo ayudarte..."
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Enviar mensaje <AppIcon name="arrow-right" :size="18" />
          </button>
          <p v-if="sent" class="hint">
            Se abrió tu cliente de correo. Si no, escríbeme a
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding: 2.4rem;
  background: var(--gradient-soft);
  border-color: var(--border-strong);
}
.lead {
  color: var(--text-muted);
  margin-top: 0.5rem;
  max-width: 420px;
}
.contacts {
  list-style: none;
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.contacts a,
.contacts span {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  transition: color 0.2s;
}
.contacts a:hover {
  color: var(--accent);
}
.contacts svg {
  color: var(--accent);
}

.right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.field label {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
input,
textarea {
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text);
  background: rgba(5, 6, 10, 0.5);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input::placeholder,
textarea::placeholder {
  color: var(--text-dim);
}
input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}
.right .btn {
  align-self: flex-start;
}
.hint {
  font-size: 0.85rem;
  color: var(--text-muted);
}
.hint a {
  color: var(--accent);
}

@media (min-width: 860px) {
  .panel {
    grid-template-columns: 1fr 1fr;
    padding: 3rem;
  }
}
</style>
