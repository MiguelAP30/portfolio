<script setup>
/**
 * Vista principal: compone todas las secciones del portafolio en orden.
 * Cada sección es un componente independiente y autocontenido.
 */
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ExperienceSection />
  <EducationSection />
  <ProjectsSection />
  <ContactSection />
</template>
