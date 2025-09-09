<script setup lang="ts">
import { ref, onMounted } from 'vue'

const projetsDev = ref<{ id: string; name: string; image: string; tags: string[]; url: string }[]>([])
const projetsCommunity = ref<{ id: string; name: string; image: string; tags: string[]; url: string }[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)
const selectedProject = ref<any | null>(null)
const isModalOpen = ref(false)
const currentImageIndex = ref(0)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/projects')
    if (!res.ok) throw new Error('Erreur lors du chargement')
    const data = await res.json()
    projetsDev.value = data.filter((p: any) => p.type === 'Dev')
    projetsCommunity.value = data.filter((p: any) => p.type === 'Community management')
  } catch (err: any) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})

const fetchProjectDetails = async (id: string) => {
  error.value = null;
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`)
    if (!res.ok) throw new Error('Erreur lors du chargement du projet')
    const data = await res.json()
    selectedProject.value = data
    currentImageIndex.value = 0 // Réinitialiser l'index de l'image
    isModalOpen.value = true
    // Ajouter l'écouteur de clavier quand la modale s'ouvre
    document.addEventListener('keydown', handleKeydown)
  } catch (err: any) {
    error.value = err.message
  }
}

const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  currentImageIndex.value = 0
  // Supprimer l'écouteur de clavier quand la modale se ferme
  document.removeEventListener('keydown', handleKeydown)
}

// Fonctions de navigation des images
const nextImage = () => {
  if (selectedProject.value?.images && selectedProject.value.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length
  }
}

const previousImage = () => {
  if (selectedProject.value?.images && selectedProject.value.images.length > 0) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? selectedProject.value.images.length - 1 
      : currentImageIndex.value - 1
  }
}

// Fonction pour obtenir l'image actuelle
const getCurrentImage = () => {
  // Si on a un tableau d'images, utiliser l'index
  if (selectedProject.value?.images && selectedProject.value.images.length > 0) {
    return selectedProject.value.images[currentImageIndex.value]
  }
  // Sinon, utiliser l'image unique
  return selectedProject.value?.image || ''
}

// Fonction pour vérifier si le projet a plusieurs images
const hasMultipleImages = () => {
  return selectedProject.value?.images && selectedProject.value.images.length > 1
}

// Fonction pour obtenir le nombre total d'images
const getTotalImages = () => {
  return selectedProject.value?.images?.length || 0
}

// Gestion des touches du clavier
const handleKeydown = (event: KeyboardEvent) => {
  if (!isModalOpen.value) return
  
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      previousImage()
      break
    case 'ArrowRight':
      event.preventDefault()
      nextImage()
      break
    case 'Escape':
      event.preventDefault()
      closeModal()
      break
  }
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
      <div v-else>
        <h2 class="text-2xl font-bold text-purple-800 mb-6">Mes Projets Développement</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <component
            v-for="p in projetsDev"
            :is="p.tags && p.tags.includes('En Ligne') && p.url ? 'a' : 'div'"
            :href="p.tags && p.tags.includes('En Ligne') && p.url ? p.url : undefined"
            target="_blank"
            rel="noopener"
            :key="p.id"
            class="bg-white/70 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-purple-200 hover:border-purple-400 cursor-pointer backdrop-blur-sm"
            @click="!p.tags || !p.tags.includes('En Ligne') || !p.url ? fetchProjectDetails(p.id) : null"
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
          </component>
        </div>
        <h2 class="text-2xl font-bold text-purple-800 mb-6">Mes Projets Community Management</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <component
            v-for="p in projetsCommunity"
            :is="p.tags && p.tags.includes('En Ligne') && p.url ? 'a' : 'div'"
            :href="p.tags && p.tags.includes('En Ligne') && p.url ? p.url : undefined"
            target="_blank"
            rel="noopener"
            :key="p.id"
            class="bg-white/70 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-purple-200 hover:border-purple-400 cursor-pointer backdrop-blur-sm"
            @click="!p.tags || !p.tags.includes('En Ligne') || !p.url ? fetchProjectDetails(p.id) : null"
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
          </component>
        </div>
      </div>
      <!-- MODALE -->
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
        <div class="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full h-[600px] p-8 animate-fadeIn flex flex-col">
          <button class="absolute top-4 right-4 text-3xl text-gray-400 hover:text-purple-600 font-bold z-10" @click="closeModal">×</button>
          <div v-if="selectedProject" class="flex-1 flex flex-col">
            <h2 class="text-2xl font-bold text-purple-800 mb-4 text-center">{{ selectedProject.name }}</h2>
            
            <!-- Galerie d'images avec navigation -->
            <div class="relative flex-1 flex items-center justify-center mb-4">
              <div v-if="getCurrentImage()" class="relative w-full h-full flex items-center justify-center">
                <!-- Flèche précédente -->
                <button 
                  v-if="hasMultipleImages()"
                  @click="previousImage"
                  class="nav-arrow absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 border-2 border-purple-200"
                  style="min-width: 48px; min-height: 48px;"
                >
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                
                <!-- Image actuelle -->
                <img 
                  :src="getCurrentImage()" 
                  :alt="selectedProject.name" 
                  class="image-transition max-h-80 max-w-full object-contain rounded-lg shadow-lg"
                />
                
                <!-- Flèche suivante -->
                <button 
                  v-if="hasMultipleImages()"
                  @click="nextImage"
                  class="nav-arrow absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 border-2 border-purple-200"
                  style="min-width: 48px; min-height: 48px;"
                >
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                
                <!-- Indicateur de position -->
                <div 
                  v-if="hasMultipleImages()"
                  class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
                >
                  {{ currentImageIndex + 1 }} / {{ getTotalImages() }}
                </div>
              </div>
              <div v-else class="text-gray-400 text-center">Aucune image disponible</div>
            </div>
            
            
            <!-- Description -->
            <div v-if="selectedProject.description" class="text-gray-700 text-lg mb-4 text-center">{{ selectedProject.description }}</div>
            <div v-else class="text-gray-400 text-center">Aucune description disponible.</div>
          </div>
          <div v-else class="text-center text-gray-400">Chargement...</div>
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

@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease;
}

.animate-slideIn {
  animation: slideIn 0.3s ease;
}

/* Styles pour les flèches de navigation */
.nav-arrow {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-arrow:hover {
  backdrop-filter: blur(15px);
  border-color: rgba(147, 51, 234, 0.3);
}

/* Animation pour le changement d'image */
.image-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive pour mobile */
@media (max-width: 640px) {
  .nav-arrow {
    padding: 0.5rem;
  }
  
  .nav-arrow svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>