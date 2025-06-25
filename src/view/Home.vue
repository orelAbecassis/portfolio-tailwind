<template>
  <div class="relative min-h-screen flex">
    <!-- Colonne gauche violette (35%) -->
    <div class="w-[35%] bg-gradient-to-br from-purple-600 to-purple-200 relative flex flex-col">
      <!-- Logo en haut à gauche -->
      <img
        src="../Images/logo_ABEWEB.png"
        alt="Logo Abweb"
        class="absolute top-8 left-8 w-36 h-auto z-20"
      />
    </div>
    <!-- Colonne droite blanche (65%) -->
    <div class="w-[65%] bg-white relative flex flex-col justify-between">
      <!-- Bloc principal à droite -->
      <div class="flex flex-col justify-center h-full pl-[420px] pr-16">
        <!-- Animation lettre par lettre -->
        <div class="text-2xl text-purple-500 font-semibold mb-4 min-h-[40px] flex items-center">
          <span>{{ displayedRole }}</span><span v-if="showCursor" class="text-purple-700">|</span>
        </div>
        <!-- Nom -->
        <h1 class="text-8xl font-black text-gray-900 mb-6">Orel Abecassis</h1>
        <!-- Texte descriptif -->
        <p class="text-xl text-gray-500 mb-12 max-w-2xl">
          Développeur web passionné par la création d'expériences numériques élégantes et performantes. Toujours prêt à relever de nouveaux défis et à apprendre de nouvelles technologies.
        </p>
      </div>
    </div>
    <!-- Photo ronde à cheval sur la séparation, centrée sur la coupure -->
    <div class="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 z-20">
      <img
        :src="photoOrel"
        alt="Orel Abecassis"
        class="rounded-full border-8 border-white shadow-2xl w-[700px] h-[700px] object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import photoOrel from '../Images/photo-orel.jpeg'

const menuOpen = ref(false)
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
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
