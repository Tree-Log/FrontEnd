import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Board from "@/views/Board/Board.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Regist from "@/views/Regist.vue";
import PostCreate from "@/views/Board/PostCreate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/board",
      name: "board",
      component: Board,
    },
    {
      path: "/board/create",
      name: "create",
      component: PostCreate,
    },
    // {
    //   path: "/board/detail",
    //   name: "detail",
    //   component: PostDetail,
    // },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/regist",
      name: "regist",
      component: Regist,
    },
  ],
});

export default router;
