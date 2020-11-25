import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Actividad from "../views/Actividad.vue";
import Contacto from "../views/Contacto.vue";
import Productos from "../views/Productos.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/actividad',
    name: "Actividad",
    component: Actividad
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: "/productos",
    name: "Producto",
    component: Productos
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
