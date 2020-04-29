import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/series',
    name: 'Series',
    component: () => import('../views/Series.vue')
  },
  {
    path: '/estrenos',
    name: 'Estrenos',
    component: () => import('../views/Estrenos.vue')
  },
  {
    path: '/peliculas-2020',
    name: 'Peliculas-2020',
    component: () => import('../views/Pelis2020.vue')
  },
  {
    path: '/verpelicula',
    name: 'VerPelicula',
    component: () => import('../views/VerPelicula')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
