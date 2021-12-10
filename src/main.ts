import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faDiscord, faInstagram);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
