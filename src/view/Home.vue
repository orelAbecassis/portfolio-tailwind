<template>
  <section class="flex flex-col items-center justify-start min-h-[60vh] bg-white pt-20">
    <img
      :src="photoOrel"
      alt="Orel Abecassis"
      class="rounded-full shadow-lg w-60 h-60 object-cover mb-6 border-4 border-purple-200"
    />
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Bonjour ! Je suis Orel Abecassis.</h1>
    <div class="h-12 text-2xl font-semibold mt-2">
      <span>{{ displayedRole }}</span><span v-if="showCursor" class="text-blue-700">|</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import photoOrel from '../Images/photo-orel.jpeg'
import { ref, onMounted, onUnmounted } from 'vue'

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
