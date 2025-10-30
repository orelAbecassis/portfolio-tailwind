<template>
  <!-- 🌗 Bouton clair/sombre -->
  <button
    @click="toggleTheme"
    class="fixed top-5 left-5 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow hover:scale-110 transition"
  >
    <span v-if="isDark">☀️</span>
    <span v-else>🌙</span>
  </button>

  <!-- 🏠 Page principale -->
  <Home />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Home from './view/Home.vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>
