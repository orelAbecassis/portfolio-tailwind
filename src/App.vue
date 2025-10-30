<template>
  <!-- Dark/Light toggle (global) -->
  <button
    @click="toggleTheme"
  :aria-pressed="isDark"
    class="fixed top-6 left-6 z-50 p-2 rounded-md bg-white/80 dark:bg-gray-800/80 shadow backdrop-blur focus:outline-none"
    :title="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
  >
    <span v-if="isDark" class="sr-only">Mode sombre activé</span>
    <span v-else class="sr-only">Mode clair activé</span>
    <!-- simple icons: sun / moon -->
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.64 13.64A9 9 0 1 1 10.36 2.36 7 7 0 0 0 21.64 13.64z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M18.36 18.36l-.7-.7M6.34 6.34l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  </button>

  <BurgerMenu />
  <router-view />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BurgerMenu from './components/BurgerMenu.vue'

const isDark = ref(false)

function applyTheme(dark: boolean) {
  const html = document.documentElement
  if (dark) html.classList.add('dark')
  else html.classList.remove('dark')
}

function saveTheme(dark: boolean) {
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch (e) {
    /* ignore */
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  saveTheme(isDark.value)
}

onMounted(() => {
  // priority: saved preference -> system preference -> default (light)
  let saved = null
  try {
    saved = localStorage.getItem('theme')
  } catch (e) {
    /* ignore */
  }

  if (saved === 'dark') {
    isDark.value = true
  } else if (saved === 'light') {
    isDark.value = false
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  }

  applyTheme(isDark.value)
})
</script>
