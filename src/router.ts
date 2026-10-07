import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/home/index.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/portfolio/:slug",
    component: () => import("./pages/portfolio-item/index.vue"),
  },
  {
    path: "/about",
    component: () => import("./pages/about/index.vue"),
  },
  {
    path: "/how-to-order",
    component: () => import("./pages/how-to-order/index.vue"),
  },
  {
    path: "/exhibitions",
    component: () => import("./pages/exhibitions/index.vue"),
  },
  {
    path: "/reviews",
    component: () => import("./pages/reviews/index.vue"),
  },
  {
    path: "/services-and-prices",
    component: () => import("./pages/services-prices/index.vue"),
  },
  {
    path: "/contacts",
    component: () => import("./pages/contacts/index.vue"),
  },
  {
    path: "/privacy",
    component: () => import("./pages/privacy/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
