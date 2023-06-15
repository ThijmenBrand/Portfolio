import { RouteRecordRaw } from "vue-router";
import Projects from "../Projects.vue";
import Project from "../Project.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/projects/:projectId",
    name: "Project",
    component: Project,
  },
];

export default routes;
