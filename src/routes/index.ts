import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Portal from "@/views/Portal/Portal.vue";
import useAuthStore from "../stores/auth";

const routes: Array<RouteRecordRaw> = [
  { path: "/portal", name: "Portal", component: Portal },
  { path: "/", name: "Home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  const loggedIn = authStore.userInfo;

  if (!loggedIn && to.name !== "Home") {
    return { name: "Home" };
  }
});

export default router;
