import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes,
});
console.log(7777, window.__MICRO_APP_BASE_ROUTE__);
export default router
