<script setup lang="ts">
import { ref, onMounted } from 'vue'

const projects = ref<{ id: string; name: string; image: string }[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)

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
</script>

<template>
  <div>
    <h1>Projets Notion</h1>
    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="p in projects" :key="p.id" class="bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <img
          v-if="p.image"
          :src="p.image"
          :alt="p.name"
          class="w-48 h-32 object-cover rounded mb-3 border"
        />
        <div class="text-lg font-semibold text-center">{{ p.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tu peux personnaliser le style ici si tu veux */
</style>