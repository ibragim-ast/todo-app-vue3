import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import TaskPage from "@/pages/TaskPage";
import About from "@/pages/About";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/tasks",
    component: TaskPage,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
