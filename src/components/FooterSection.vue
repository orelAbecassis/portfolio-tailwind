<template>
  <footer
    class="w-full bg-purple-700 text-white py-6 mt-16 text-center rounded-t-2xl shadow-inner"
  >
    <div
      class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <p class="text-sm">
        © 2025 <span class="font-semibold">Orel Abecassis | ABEWEB</span> — Tous droits réservés.
      </p>

      <div class="flex gap-6 text-lg">
        <a
          href="https://www.linkedin.com/in/orel-abecassis-488ba7203/"
          target="_blank"
          class="hover:text-pink-300 transition transform hover:scale-110 duration-300"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/orelAbecassis"
          target="_blank"
          class="hover:text-pink-300 transition transform hover:scale-110 duration-300"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="mailto:orel.abecassis.pro@gmail.com"
          class="hover:text-pink-300 transition transform hover:scale-110 duration-300"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Pas besoin d’animation ici 👌
</script>

<style scoped>
/* Aucun effet spécial, footer simple et propre */
</style>
