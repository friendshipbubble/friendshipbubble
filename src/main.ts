import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import VueScrollTo from "vue-scrollto";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown, faDiscord, faInstagram);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueScrollTo)
  .mount("#app");
