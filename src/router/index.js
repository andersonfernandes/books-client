import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listaLivro',
    name: 'ListaLivrosView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaLivrosView.vue')
  },
  {
    path: '/cadastrar',
    name: 'CadastrarView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarView.vue')
  },
  {
    path: '/editar/:id',
    name: 'EditarView',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarView.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
