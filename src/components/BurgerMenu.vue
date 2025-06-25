<template>
  <div class="fixed top-0 right-0 z-50 h-full w-[28rem]">
    <button @click="menuOpen = !menuOpen" class="absolute top-8 right-8 focus:outline-none z-60">
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <transition name="fade">
      <div v-if="menuOpen" class="absolute right-0 top-0 h-full w-[28rem] bg-purple-50 shadow-2xl py-8 px-6 border-l border-purple-100 flex flex-col">
        <!-- Photo + prénom -->
        <div class="flex items-center mb-8">
          <img src="../Images/photo-orel.jpeg" alt="Orel Abecassis" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow mr-3" />
          <span class="text-lg font-semibold text-purple-700">Orel Abecassis</span>
        </div>
        <!-- Liens -->
        <nav class="flex flex-col gap-4">
          <router-link to="/" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-100 text-lg font-medium" @click.native="menuOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m5 0a2 2 0 002-2V7a2 2 0 00-2-2h-3.5a2 2 0 00-1.5.67" /></svg>
            Accueil
          </router-link>
          <router-link to="/about" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-100 text-lg font-medium" @click.native="menuOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            À propos
          </router-link>
          <router-link to="/projects" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-100 text-lg font-medium" @click.native="menuOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" /></svg>
            Projets
          </router-link>
          <router-link to="/contact" class="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-100 text-lg font-medium" @click.native="menuOpen = false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact
          </router-link>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 