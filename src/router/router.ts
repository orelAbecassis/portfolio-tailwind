import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 🔒 si quelqu’un tente d’aller sur une ancienne route (par ex. /contact),
  // on le redirige vers la page d’accueil
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // 🔽 permet le scroll fluide vers les sections (#about, #contact, etc.)
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
