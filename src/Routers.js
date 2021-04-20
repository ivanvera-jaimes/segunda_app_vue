import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./components/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("./components/Products.vue"),
  },
  {
    path: "/search",
    name: "Busqueda",
    component: () => import("./components/Search.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
