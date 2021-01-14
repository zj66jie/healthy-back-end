import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    // name: 'Home',
    // component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "about",
        component: () => import("../views/About.vue"),
        meta: { key: 1 },
        // meta: { keepAlive: true },
      },
    ],
  },

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
