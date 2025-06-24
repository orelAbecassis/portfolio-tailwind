<template>
  <section class="relative flex flex-col items-center justify-center min-h-[80vh] w-full overflow-hidden bg-white">
    <!-- Arc violet en SVG en fond -->
    <svg class="absolute top-0 left-1/2 -translate-x-1/2 z-0" width="1800" height="500" viewBox="0 0 1800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style="min-width:100vw;">
      <path d="M0,500 Q900,-200 1800,500 L1800,0 L0,0 Z" fill="url(#arcGradient)"/>
      <defs>
        <linearGradient id="arcGradient" x1="0" y1="0" x2="1800" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#a78bfa"/>
          <stop offset="0.5" stop-color="#c4b5fd"/>
          <stop offset="1" stop-color="#818cf8"/>
        </linearGradient>
      </defs>
    </svg>
    <!-- Badge animé -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      transition="ease-in-out duration-700"
      class="relative z-10 mt-16 mb-8"
    >
      <span class="px-8 py-3 rounded-full border border-purple-300 bg-white/80 text-2xl font-bold tracking-wide shadow-md">HELLO! I AM OREL ABECASSIS</span>
    </div>
    <!-- Animation des rôles animée -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      transition="ease-in-out duration-700 delay-200"
      class="relative z-10 h-16 text-6xl font-black text-center leading-tight mb-12 min-h-[80px] flex items-center justify-center"
    >
      <span class="text-purple-700 underline underline-offset-4 decoration-4 decoration-purple-500">{{ displayedRole }}</span><span v-if="showCursor" class="text-purple-700">|</span>
    </div>
    <!-- Image centrée animée à l'arrivée -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.9 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      transition="ease-in-out duration-700 delay-400"
      class="relative z-10 inline-block"
    >
      <img
        :src="photoOrel"
        alt="Orel Abecassis"
        class="rounded-full shadow-xl w-[520px] h-[520px] object-cover border-8 border-purple-100 bg-white"
      />
    </div>
  </section>
  <main class="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 text-gray-800">
    <!-- Contenu test -->
    <section class="py-24 text-center" id="projects">
      <h2 class="text-4xl font-bold text-purple-700 mb-4">Mes projets</h2>
      <p>Contenu de la section projets...</p>
    </section>

    <section class="py-24 text-center bg-white" id="about">
      <h2 class="text-4xl font-bold text-pink-600 mb-4">À propos</h2>
      <p>Contenu de la section à propos...</p>
    </section>

    <section class="py-24 text-center" id="contact">
      <h2 class="text-4xl font-bold text-indigo-600 mb-4">Contact</h2>
      <p>Formulaire ou infos de contact...</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import photoOrel from '../Images/photo-orel.jpeg'
import { ref, onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'

const roles = [
    'Développeur Full Stack',
    'Chef de projet',
    'Freelance Tech'
]

const currentIndex = ref(0)
const displayedRole = ref('')
const showCursor = ref(true)
let letterIndex = 0
let typingInterval: number
let roleInterval: number
let cursorInterval: number

function typeRole() {
  displayedRole.value = ''
  letterIndex = 0
  clearInterval(typingInterval)
  typingInterval = setInterval(() => {
    if (letterIndex < roles[currentIndex.value].length) {
      displayedRole.value += roles[currentIndex.value][letterIndex]
      letterIndex++
    } else {
      clearInterval(typingInterval)
      // Après 2s, passe au rôle suivant
      roleInterval = setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % roles.length
        typeRole()
      }, 2000)
    }
  }, 60)
}

onMounted(() => {
  typeRole()
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

onUnmounted(() => {
  clearInterval(typingInterval)
  clearTimeout(roleInterval)
  clearInterval(cursorInterval)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
