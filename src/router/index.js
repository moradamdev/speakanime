import { createRouter, createWebHistory } from 'vue-router'
import Airing from '../views/Airing.vue'
import Random from '../views/Random.vue'
import About from '../views/About.vue'
import Thread from '../components/Thread.vue'

const routes = [
  {
    path: '/',
    name: 'Airing',
    component: Airing
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: Thread
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
