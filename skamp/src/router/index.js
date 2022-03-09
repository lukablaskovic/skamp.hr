import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LimarijaView from "../views/LimarijaView.vue";
import StrojnaObradaView from "../views/StrojnaObradaView.vue";
import BravarijaView from "../views/BravarijaView.vue";
import GalerijaView from "../views/GalerijaView.vue";
import KontaktView from "../views/KontaktView.vue";
const routes = [
  {
    path: "/",
    name: "pocetna",
    component: HomeView,
  },
  {
    path: "/o-nama",
    name: "o-nama",
    component: AboutView,
  },
  {
    path: "/limarija",
    name: "limarija",
    component: LimarijaView,
  },
  {
    path: "/strojna-obrada",
    name: "strojna-obrada",
    component: StrojnaObradaView,
  },
  {
    path: "/bravarija",
    name: "bravarija",
    component: BravarijaView,
  },
  {
    path: "/galerija",
    name: "galerija",
    component: GalerijaView,
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: KontaktView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
