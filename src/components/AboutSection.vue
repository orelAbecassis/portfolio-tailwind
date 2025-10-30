<template>
  <section
    id="about"
    class="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-100 pt-20 px-4"
  >
    <div class="flex flex-col items-center w-full">
      <!-- Photo -->
      <img
        :src="photoOrel"
        alt="Orel Abecassis"
        class="fade rounded-full shadow-lg w-48 h-48 object-cover mb-6 border-4 border-purple-200"
      />

      <!-- Titre -->
      <h1 class="fade text-4xl font-bold text-purple-700 mb-2">À propos de moi</h1>

      <!-- Texte principal -->
      <div class="fade max-w-6xl w-full text-center text-lg text-gray-700 mb-8">
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">Qui suis-je&nbsp;?</h2>

        <p class="mb-2">
          Je suis <span class="font-bold">Orel Abecassis</span>, cheffe de projet et développeuse web passionnée par l'innovation numérique et les nouvelles technologies.
        </p>

        <p class="mb-2">
          J'ai obtenu un <span class="font-bold">Bac+5 en informatique</span>, spécialisé en développement web et gestion de projet, et je poursuis aujourd'hui un <span class="font-bold">double master en entrepreneuriat</span> afin de renforcer mes compétences en management, stratégie et leadership.
        </p>

        <p class="mb-2">
          Passionnée par le <span class="font-bold">DevOps</span>, la <span class="font-bold">gestion de projet</span> et le <span class="font-bold">développement web</span>, j'ai choisi de me lancer en <span class="font-bold">freelance</span> pour me consacrer pleinement à mes passions&nbsp;: <span class="text-purple-700 font-semibold">créer, automatiser et piloter des projets innovants</span>.
        </p>

        <p class="mb-2">
          Je suis également <span class="font-bold">community manager</span>, en charge de la gestion et de la mise en valeur de plusieurs comptes Instagram.
        </p>

        <div class="mb-4">
          <a href="#projects">
            <button
              class="mt-2 px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition-colors font-semibold text-base"
            >
              Voir mes projets
            </button>
          </a>
        </div>

        <p class="mb-2">
          Ma double expertise en développement et en gestion de projet me permet d'accompagner mes clients de la conception à la réalisation de leurs projets numériques, en garantissant des solutions techniques innovantes et adaptées à leurs besoins.
        </p>
      </div>

      <!-- Compétences -->
      <div class="fade w-full max-w-6xl">
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">Compétences techniques</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <slot />
        </div>
      </div>

      <!-- Parcours -->
      <div class="fade w-full max-w-6xl">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Parcours</h2>
        <ol class="relative border-l-2 border-blue-300 ml-4">
          <li
            v-for="(etude, i) in parcours"
            :key="i"
            class="mb-8 ml-6 p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:scale-105 cursor-pointer"
          >
            <span
              class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-8 ring-white text-white"
            >{{ i + 1 }}</span>
            <h3 class="font-semibold text-lg text-purple-700">{{ etude.titre }}</h3>
            <div class="text-gray-600">{{ etude.ecole }}</div>
            <time class="block mb-1 text-sm font-normal leading-none text-gray-400">{{ etude.date }}</time>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import photoOrel from '../Images/photo-orel.jpeg'
import 'devicon/devicon.min.css'

const parcours = [
  {
    titre: 'Master en entrepreneuriat - Alternance à la Société Générale',
    ecole: 'Ort Montreuil Daniel Mayer - 3IL',
    date: '2023 - 2025',
  },
  {
    titre: 'Master en Manager des Solutions Digitales et Data (MSD2) - Alternance à la Société Générale',
    ecole: 'Ort Montreuil Daniel Mayer - 3IL',
    date: '2023 - 2025',
  },
  {
    titre: "Bachelor Conception des systèmes informatiques - Alternance chez Delph Fiduciaire",
    ecole: 'Ort Montreuil Daniel Mayer',
    date: '2022 - 2023',
  },
  {
    titre: "BTS Services Informatiques aux Organisations (SIO) Option SLAM",
    ecole: 'Ort Montreuil Daniel Mayer',
    date: '2020 - 2022',
  },
]

// 🎬 Animation au scroll
onMounted(async () => {
  await nextTick()
  const elements = document.querySelectorAll('.fade')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  elements.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
