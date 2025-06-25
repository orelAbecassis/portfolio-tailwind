<template>
  <section class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-20 px-4">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="w-full max-w-6xl mx-auto"
    >
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden p-8 md:p-12 border-2 border-purple-200">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Formulaire -->
          <div>
            <h2 class="text-3xl font-bold text-purple-700 mb-2">Envoyez-moi un message</h2>
            <p class="text-gray-600 mb-8">Une question, une proposition de projet ? N'hésitez pas.</p>
            <form @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Votre nom" class="form-input" required />
                <input type="email" placeholder="Votre email" class="form-input" required />
              </div>
              <div class="mb-6">
                <input type="text" placeholder="Sujet" class="form-input" required />
              </div>
              <div class="mb-6">
                <textarea placeholder="Votre message" rows="5" class="form-input" required></textarea>
              </div>
              <button type="submit" class="w-full px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Envoyer
              </button>
            </form>
          </div>

          <!-- Informations de contact -->
          <div class="flex flex-col justify-between bg-purple-50 p-8 rounded-xl border border-purple-200">
            <div>
              <h2 class="text-3xl font-bold text-pink-600 mb-6">Contact</h2>
              <ul class="space-y-6 text-gray-700">
                <li class="flex items-center space-x-4">
                  <i class="fas fa-envelope text-purple-500 text-2xl w-8 text-center"></i>
                  <a href="mailto:orel.abecassis.pro@gmail.com" class="hover:text-purple-700 transition-colors">orel.abecassis.pro@gmail.com</a>
                </li>
                <li class="flex items-center space-x-4">
                  <i class="fas fa-phone text-purple-500 text-2xl w-8 text-center"></i>
                  <a href="tel:+33612345678" class="hover:text-purple-700 transition-colors">+33 7 81 62 23 57</a>
                </li>
                <li class="flex items-center space-x-4">
                  <i class="fas fa-map-marker-alt text-purple-500 text-2xl w-8 text-center"></i>
                  <span>Paris, France</span>
                </li>
              </ul>
            </div>
            <div class="mt-8 flex flex-col items-center">
              <h3 class="text-xl font-semibold text-purple-700 mb-4">Suivez-moi</h3>
              <div class="flex space-x-6">
                <a href="https://www.linkedin.com/in/orel-abecassis-488ba7203/" class="text-gray-500 hover:text-purple-600 transition-colors text-3xl">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/orelAbecassis" class="text-gray-500 hover:text-purple-600 transition-colors text-3xl">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" class="text-gray-500 hover:text-purple-600 transition-colors text-3xl">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  // Logique de soumission du formulaire
  // (ex: appel API, validation, etc.)
  alert("Merci pour votre message !");
};
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-3 bg-white/50 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-500 text-gray-800;
}
</style>
