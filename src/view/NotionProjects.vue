<script setup lang="ts">
import { ref, onMounted } from 'vue'

const projects = ref<{ id: string; name: string; image: string }[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)
const selectedProject = ref<any | null>(null)
const isModalOpen = ref(false)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/projects')
    if (!res.ok) throw new Error('Erreur lors du chargement')
    const data = await res.json()
    projects.value = data
  } catch (err: any) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})

const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-100 pt-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-purple-700 mb-12">Mes Projets</h1>
      <div v-if="isLoading" class="text-center text-gray-600">
        <p>Chargement des projets...</p>
      </div>
      <div v-else-if="error" class="text-center text-red-600 bg-red-100 p-4 rounded-lg">
        <p>Une erreur est survenue : {{ error }}</p>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="p in projects" 
          :key="p.id" 
          class="bg-white/70 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-purple-200 hover:border-purple-400 cursor-pointer backdrop-blur-sm"
          @click="openModal"
        >
          <img
            v-if="p.image"
            :src="p.image"
            :alt="p.name"
            class="w-full h-48 object-cover"
          />
          <div v-else class="w-full h-48 bg-gray-200/50 flex items-center justify-center">
            <span class="text-gray-500">Image non disponible</span>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-purple-800 text-center">{{ p.name }}</h2>
          </div>
        </div>
      </div>
      <!-- MODALE -->
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
        <div class="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full h-[500px] p-12 animate-fadeIn flex flex-col justify-center">
          <button class="absolute top-6 right-6 text-4xl text-gray-400 hover:text-purple-600 font-bold" @click="closeModal">×</button>
          <!-- Contenu vierge pour l'instant -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease;
}
</style>