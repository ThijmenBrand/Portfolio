import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import SignIn from "../views/SignIn.vue";
import Home from "../views/Home/Home.vue";
import { checkUserLoggedIn } from "../providers/auth/authRedirect";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: SignIn },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to) => {
  const loggedIn = checkUserLoggedIn();

  if (!loggedIn && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
