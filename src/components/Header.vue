<script setup>
import logoAbweb from '../Images/logo-abweb.jpeg'
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex items-center h-full">
        <img
          :src="logoAbweb"
          alt="Logo Abweb"
          class="h-10 w-auto object-contain"
        />
      </div>

      <!-- Navigation -->
      <div class="flex space-x-8">
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
