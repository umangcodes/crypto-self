import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Usage from "../views/Usage.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/usage",
    component: Usage,
  },
];

const router = createRouter({
  base: "/",
  history: createWebHistory(),
  routes,
});

export default router;
