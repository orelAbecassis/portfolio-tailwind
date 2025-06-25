<script setup>
import logoAbweb from '../Images/logoABEWEB-violet.png'
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 50)
</script>

<template>
  <header 
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-purple-100/95 shadow-lg' : 'bg-purple-100 shadow-md'
    ]"
  >
    <nav 
      :class="[
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300',
        isScrolled ? 'h-20' : 'h-24'
      ]"
    >
      <!-- Logo -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        class="flex items-center h-full"
      >
        <img
          :src="logoAbweb"
          alt="Logo Abweb"
          :class="['w-auto object-contain transition-all duration-300', isScrolled ? 'h-16' : 'h-20']"
        />
      </div>

      <!-- Navigation -->
      <div 
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 200 } }"
        class="flex space-x-8"
      >
        <a href="/" class="nav-link">Accueil</a>
        <a href="/projects" class="nav-link">Projets</a>
        <a href="/about" class="nav-link">À propos</a>
        <a href="/contact" class="nav-link">Contact</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300 border-b-2 border-transparent hover:border-purple-500;
}
</style>
