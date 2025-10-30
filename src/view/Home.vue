<template>
  <div class="relative min-h-screen flex">
    <!-- Colonne gauche violette (35%) -->
    <div class="w-[35%] bg-gradient-to-br from-purple-600 to-purple-200 relative flex flex-col">
      <!-- Logo en haut à gauche -->
      <img
        src="../Images/logo_ABEWEB.png"
        alt="Logo Abweb"
        class="absolute top-8 left-8 w-64 h-auto z-20"
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
        <!-- BADGES RESEAUX -->
        <div class="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/orel-abecassis-488ba7203/" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" class="h-10" />
          </a>
          <a href="https://discordapp.com/users/775785441198211113" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" class="h-10" />
          </a>
           <a href="https://www.github.com/orelAbecassis" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" class="h-10" />
          </a>
        </div>
      </div>
    </div>
    <!-- Photo ronde à cheval sur la séparation, centrée sur la coupure -->
    <div class="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 z-20">
      <img
        :src="photoOrel"
        alt="Orel Abecassis"
        class="rounded-full border-8 border-white shadow-2xl w-[550px] h-[550px] object-cover"
      />
    </div>
  </div>
  <!-- Section Projets -->
  <section class="w-full flex flex-col items-center py-24 bg-white">
    <h2 class="text-4xl font-bold text-purple-700 mb-12">Mes projets</h2>
    <div class="w-full max-w-4xl flex flex-col gap-12">
      <!-- Projet 1 : aligné à gauche -->
      <div class="flex items-center bg-white/80 rounded-2xl shadow-lg p-8 border border-purple-100 self-start">
        <!-- Image projet -->
        <div class="flex-shrink-0">
          <img src="../Images/logo-mel.png" alt="Logo Mel Marciano" class="w-32 h-32 rounded-full object-cover border-4 border-purple-200 bg-white shadow" />
        </div>
        <!-- Infos projet -->
        <div class="flex-1 flex flex-col items-center justify-center ml-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Mel Marciano</h3>
          <p class="text-gray-600 text-center mb-4">
            Mel Marciano est un projet de nutritionniste proposant un e-book de recettes de salades fraîches et légères pour le Shabbat, alliant tradition et équilibre alimentaire.
          </p>
             <a href="https://mel-marciano.odoo.com/" target="_blank" rel="noopener">
            <button class="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition font-semibold text-base">Visiter le site</button>
            </a>
        </div>
      </div>
      <!-- Projet 2 : centré -->
      <div class="flex items-center bg-white/80 rounded-2xl shadow-lg p-8 border border-purple-100 mx-auto">
        <!-- Image projet -->
        <div class="flex-shrink-0">
          <img src="../Images/udon-projet.jpeg" alt="Logo UDON" class="w-32 h-32 rounded-full object-cover border-4 border-purple-200 bg-white shadow" />
        </div>
        <!-- Infos projet -->
        <div class="flex-1 flex flex-col items-center justify-center ml-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">UDON</h3>
          <p class="text-gray-600 text-center mb-4">
            Création d'une solution de communication Discord et Notion pour notre école.
          </p>
            <a href="https://app.phenixel.fr/udon" target="_blank" rel="noopener">
            <button class="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition font-semibold text-base">Visiter le site</button>
            </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import photoOrel from '../Images/photo-orel.jpeg'

const menuOpen = ref(false)
const roles = [
  'Développeur Full Stack',
  'Cheffe de projet',
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
