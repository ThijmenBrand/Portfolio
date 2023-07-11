import { RouteRecordRaw } from "vue-router";
import Portal from "../Portal.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/portal/",
    name: "Portal",
    component: Portal,
    redirect: { name: "Dashboard" },
    children: [
      {
        path: "dashboard/",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },
];

export default routes;
