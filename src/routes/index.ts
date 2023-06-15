import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Portal from "@/views/Portal/Portal.vue";
import { registerAuthGuard } from "../providers/authv2/auth.guard";

import projectRoutes from "../views/Projects/router";

const routes: Array<RouteRecordRaw> = [
  { path: "/portal", name: "Portal", component: Portal },
  { path: "/", name: "Home", component: Home },
  ...projectRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

registerAuthGuard(router);

// router.beforeEach(async (to) => {
//   const authStore = useAuthStore();
//   const loggedIn = authStore.userInfo;

//   if (!loggedIn && to.name !== "Home") {
//     return { name: "Home" };
//   }
// });

export default router;
