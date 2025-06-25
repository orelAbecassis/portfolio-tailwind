<template>
  <div class="fixed top-8 right-8 z-50">
    <button @click="menuOpen = !menuOpen" class="focus:outline-none">
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <transition name="fade">
      <div v-if="menuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border z-40">
        <router-link to="/" class="block px-6 py-3 text-gray-700 hover:bg-purple-100" @click.native="menuOpen = false">Accueil</router-link>
        <router-link to="/projects" class="block px-6 py-3 text-gray-700 hover:bg-purple-100" @click.native="menuOpen = false">Projets</router-link>
        <router-link to="/about" class="block px-6 py-3 text-gray-700 hover:bg-purple-100" @click.native="menuOpen = false">À propos</router-link>
        <router-link to="/contact" class="block px-6 py-3 text-gray-700 hover:bg-purple-100" @click.native="menuOpen = false">Contact</router-link>
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