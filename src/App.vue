<template>
  <Header />
  <Home />
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

<script setup>
import Header from './components/Header.vue'
import Home from './view/Home.vue';
</script>
