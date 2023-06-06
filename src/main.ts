import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style/index.scss";
import App from "./App.vue";
import router from "./routes";

import { MSALInstance, setupMSAL } from "./providers/authv2/auth.config";
import { msalPlugin } from "./providers/authv2/auth.plugin";

setupMSAL(router);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(msalPlugin, MSALInstance);

app.mount("#app");
