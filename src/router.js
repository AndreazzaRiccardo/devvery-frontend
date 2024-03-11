import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./pages/AppHome.vue')
    },
    {
      path: "/shipment",
      name: "Shipment",
      component: () => import('./pages/AppShipment.vue')
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: () => import('./pages/PrivacyPage.vue')
    },
    {
      path: "/show/:slug",
      name: "show",
      component: () => import('./pages/AppShow.vue')
    },
    {
      path: "/success",
      name: "success",
      component: () => import('./pages/AppSuccess.vue')
    },
    {
      path: "/term",
      name: "term",
      component: () => import('./pages/TermAndConditionPage.vue')
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import('./pages/AboutUs.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import('./pages/NotFoundPage.vue')
    }
  ],
});

export { router };
