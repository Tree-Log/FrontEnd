import { reateRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Board from "@/views/Board.vue"
import Login from "@/views/Login.vue"
import Profile from "@/views/Profile.vue"
import Regist from "@/views/Regist.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'board',
      component: Board
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
  ]
})

export default router
