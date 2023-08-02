import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
      },
      {
        path: "/to-read",
        name: "toRead",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ToReadPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
});

export default router;
