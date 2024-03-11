import { createApp } from "vue";

import App from "./App.vue";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import { router } from "./router";

createApp(App).use(router).mount("#app");
