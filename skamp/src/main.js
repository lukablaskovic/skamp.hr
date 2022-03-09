import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import "./assets/tailwind.css";
import "flowbite";
import "tw-elements";
const app = createApp(App);

app.use(router).mount("#app");

import { init } from "@emailjs/browser";
init("user_wfAKSZTaxPRzWyb0Q6fDr");
