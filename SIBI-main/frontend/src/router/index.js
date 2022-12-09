import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favoritas from "../views/Favoritas.vue";
import Registro from "../views/Registro.vue";
import Entrada from "../views/Entrada.vue";
import QuienesSomos from "../views/QuienesSomos.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/favoritas",
    name: "Favoritas",
    component:  Favoritas
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/",
    name: "Entrada",
    component: Entrada,
  },
  {
    path: "/quienesSomos",
    name: "QuienesSomos",
    component: QuienesSomos,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
