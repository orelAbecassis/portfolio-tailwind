<template>
  <section class="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 pt-20 px-4">
    <transition name="fade" appear>
      <div class="flex flex-col items-center w-full">
        <img
          :src="photoOrel"
          alt="Orel Abecassis"
          class="rounded-full shadow-lg w-48 h-48 object-cover mb-6 border-4 border-purple-200"
        />
        <h1 class="text-4xl font-bold text-purple-700 mb-2">À propos de moi</h1>
        <div class="max-w-2xl w-full text-center text-lg text-gray-700 mb-8">
          <h2 class="text-2xl font-semibold text-pink-600 mb-4">Qui suis-je&nbsp;?</h2>
          <p class="mb-2">Je suis <span class="font-bold">Orel Abecassis</span>, développeur web et chef de projet passionné par l'innovation numérique.</p>
          <p class="mb-2">Je termine actuellement mon <span class="font-bold">Bac+5 en informatique</span> (développement web & gestion de projet) et je poursuis un <span class="font-bold">double master en entrepreneuriat</span> pour enrichir mes compétences en management et gestion de projet.</p>
          <p class="mb-2">Animé par ma créativité et mon désir d'indépendance, j'ai choisi de me lancer en tant que <span class="font-bold">freelance</span> pour me consacrer pleinement à ma passion&nbsp;: <span class="text-purple-700 font-semibold">le développement web</span>.</p>
          <p class="mb-2">Je suis également <span class="font-bold">community manager</span> et gère plusieurs comptes Instagram pour les mettre en valeur.</p>
          <div class="mb-4">
            <router-link to="/projects">
              <button class="mt-2 px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition-colors font-semibold text-base">Voir plus</button>
            </router-link>
          </div>
          <p class="mb-2">Ma double expertise en développement et en gestion de projet me permet d'accompagner mes clients de la conception à la réalisation de leurs projets numériques, en garantissant des solutions techniques innovantes et adaptées à leurs besoins.</p>
        </div>
        <div class="w-full max-w-2xl">
          <h2 class="text-2xl font-semibold text-pink-600 mb-4">Compétences techniques</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <!-- Langages -->
            <div class="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400 cursor-pointer backdrop-blur-sm">
              <h3 class="font-semibold text-purple-700 mb-3 text-lg flex items-center gap-2">
                <span>Langages</span>
              </h3>
              <div class="flex flex-wrap gap-4 justify-center">
                <!-- HTML -->
                <div class="flex flex-col items-center">
                  <i class="devicon-html5-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">HTML</span>
                </div>
                <!-- CSS -->
                <div class="flex flex-col items-center">
                  <i class="devicon-css3-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">CSS</span>
                </div>
                <!-- PHP -->
                <div class="flex flex-col items-center">
                  <i class="devicon-php-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">PHP</span>
                </div>
                <!-- Symfony -->
                <div class="flex flex-col items-center">
                  <i class="devicon-symfony-original colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">Symfony</span>
                </div>
                <!-- Python -->
                <div class="flex flex-col items-center">
                  <i class="devicon-python-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">Python</span>
                </div>
              </div>
            </div>
            <!-- Outils -->
            <div class="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400 cursor-pointer backdrop-blur-sm">
              <h3 class="font-semibold text-purple-700 mb-3 text-lg flex items-center gap-2">
                <span>Outils</span>
              </h3>
              <div class="flex flex-wrap gap-4 justify-center">
                <!-- Git -->
                <div class="flex flex-col items-center">
                  <i class="devicon-git-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">Git</span>
                </div>
                <!-- GitHub -->
                <div class="flex flex-col items-center">
                  <i class="devicon-github-original colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">GitHub</span>
                </div>
                <!-- VSCode -->
                <div class="flex flex-col items-center">
                  <i class="devicon-vscode-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">VSCode</span>
                </div>
                <!-- PyCharm -->
                <div class="flex flex-col items-center">
                  <i class="devicon-pycharm-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">PyCharm</span>
                </div>
                <!-- Microsoft 365 -->
                <div class="flex flex-col items-center">
                  <img src="../Images/logo_skills/Microsoft-365-Logo-PNG.jpg" alt="Microsoft 365" class="h-12 w-12 aspect-square object-contain bg-white rounded p-1 mx-auto shadow" />
                  <span class="text-xs mt-1">Microsoft 365</span>
                </div>
                <!-- VirtualBox -->
                <div class="flex flex-col items-center">
                  <img src="../Images/logo_skills/Virtualbox.webp" alt="VirtualBox" class="h-12 w-12 aspect-square object-contain bg-white rounded p-1 mx-auto shadow" />
                  <span class="text-xs mt-1">VirtualBox</span>
                </div>
                <!-- Grafana -->
                <div class="flex flex-col items-center">
                  <img src="../Images/logo_skills/grafana.png" alt="Grafana" class="h-12 w-12 aspect-square object-contain bg-white rounded p-1 mx-auto shadow" />
                  <span class="text-xs mt-1">Grafana</span>
                </div>
              </div>
            </div>
            <!-- CMS -->
            <div class="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400 cursor-pointer backdrop-blur-sm">
              <h3 class="font-semibold text-purple-700 mb-3 text-lg flex items-center gap-2">
                <span>CMS</span>
              </h3>
              <div class="flex flex-wrap gap-4 justify-center">
                <!-- Odoo -->
                <div class="flex flex-col items-center">
                  <img src="../Images/logo_skills/Odoo-Logo.wine.png" alt="Odoo" class="h-12 w-12 aspect-square object-contain bg-white rounded p-1 mx-auto shadow" />
                  <span class="text-xs mt-1">Odoo</span>
                </div>
                <!-- WordPress -->
                <div class="flex flex-col items-center">
                  <i class="devicon-wordpress-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">WordPress</span>
                </div>
              </div>
            </div>
            <!-- Systèmes d'exploitation -->
            <div class="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400 cursor-pointer backdrop-blur-sm">
              <h3 class="font-semibold text-purple-700 mb-3 text-lg flex items-center gap-2">
                <span>Systèmes d'exploitation</span>
              </h3>
              <div class="flex flex-wrap gap-4 justify-center">
                <!-- Windows -->
                <div class="flex flex-col items-center">
                  <img src="../Images/logo_skills/windows_logo.webp" alt="Windows" class="h-12 w-12 aspect-square object-contain bg-white rounded p-1 mx-auto shadow" />
                  <span class="text-xs mt-1">Windows</span>
                </div>
                <!-- Red Hat -->
                <div class="flex flex-col items-center">
                  <i class="devicon-redhat-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">Red Hat</span>
                </div>
                <!-- Linux -->
                <div class="flex flex-col items-center">
                  <i class="devicon-linux-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">Linux</span>
                </div>
              </div>
            </div>
            <!-- Bases de données -->
            <div class="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400 cursor-pointer backdrop-blur-sm">
              <h3 class="font-semibold text-purple-700 mb-3 text-lg flex items-center gap-2">
                <span>Bases de données</span>
              </h3>
              <div class="flex flex-wrap gap-4 justify-center">
                <!-- MySQL -->
                <div class="flex flex-col items-center">
                  <i class="devicon-mysql-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">MySQL</span>
                </div>
                <!-- Oracle -->
                <div class="flex flex-col items-center">
                  <i class="devicon-oracle-original colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">Oracle</span>
                </div>
                <!-- MariaDB -->
                <div class="flex flex-col items-center">
                  <i class="devicon-mariadb-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">MariaDB</span>
                </div>
                <!-- PostgreSQL -->
                <div class="flex flex-col items-center">
                  <i class="devicon-postgresql-plain colored text-4xl bg-white rounded p-1 aspect-square mx-auto shadow" style="width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;"></i>
                  <span class="text-xs mt-1">PostgreSQL</span>
                </div>
                <!-- Druid -->
                <div class="flex flex-col items-center">
                  <img src="../Images/logo_skills/druid-logo.png" alt="Druid" class="h-12 w-12 aspect-square object-contain bg-white rounded p-1 mx-auto shadow" />
                  <span class="text-xs mt-1">Druid</span>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Parcours</h2>
          <ol class="relative border-l-2 border-purple-200 ml-4">
            <li class="mb-8 ml-6 p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:scale-105 cursor-pointer">
              <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-8 ring-white text-white">1</span>
              <h3 class="font-semibold text-lg text-purple-700">Développeur Full Stack Freelance</h3>
              <time class="block mb-1 text-sm font-normal leading-none text-gray-400">2023 - Aujourd'hui</time>
              <p class="text-base font-normal text-gray-600">Je décide de me lancer en freelance pour faire ce que j'aime vraiment faire&nbsp;: créer, innover et accompagner mes clients dans leurs projets digitaux.</p>
            </li>
            <li class="mb-8 ml-6 p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:scale-105 cursor-pointer">
              <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-pink-500 rounded-full ring-8 ring-white text-white">2</span>
              <h3 class="font-semibold text-lg text-pink-700">Chef de projet digital</h3>
              <time class="block mb-1 text-sm font-normal leading-none text-gray-400">2021 - 2023</time>
              <p class="text-base font-normal text-gray-600">Gestion d'équipes et pilotage de projets pour des PME et startups innovantes.</p>
            </li>
            <li class="mb-8 ml-6 p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:scale-105 cursor-pointer">
              <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-8 ring-white text-white">3</span>
              <h3 class="font-semibold text-lg text-indigo-700">Bac+5 Informatique & Double Master Entrepreneuriat</h3>
              <time class="block mb-1 text-sm font-normal leading-none text-gray-400">2018 - 2024</time>
              <p class="text-base font-normal text-gray-600">Formation en développement web, gestion de projet et entrepreneuriat pour enrichir mes compétences techniques et managériales.</p>
            </li>
          </ol>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import photoOrel from '../Images/photo-orel.jpeg'
import 'devicon/devicon.min.css'
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
