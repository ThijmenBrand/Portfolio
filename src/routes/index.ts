import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import SignIn from "@/views/Home.vue";
import Home from "@/views/Portal/Portal.vue";
import { checkUserLoggedIn } from "../providers/auth/authRedirect";

const routes: Array<RouteRecordRaw> = [
  { path: "/portal", name: "Portal", component: Home },
  { path: "/", name: "Home", component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to) => {
  const loggedIn = checkUserLoggedIn();

  if (!loggedIn && to.name !== "Home") {
    return { name: "Home" };
  }
});

export default router;
