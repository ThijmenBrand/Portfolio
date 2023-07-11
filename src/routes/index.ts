import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

import projectRoutes from "../views/Projects/router";
import portalRoutes from "../views/Portal/router";
// import { isAuthenticated } from "../providers/authv2/auth.guard";
// import { MSALInstance } from "../providers/authv2/auth.config";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  ...projectRoutes,
  ...portalRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async () => {
  // const loggedIn = isAuthenticated(MSALInstance);
  // if (!loggedIn && to.name !== "Home") {
  //   return { name: "Home" };
  // }
});

export default router;
