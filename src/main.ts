import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style/index.scss";
import App from "./App.vue";
import router from "./routes";
import { msalObject } from "./providers/auth/config";
import useAuthStore from "./stores/auth";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const authStore = useAuthStore();
msalObject
  .handleRedirectPromise()
  .then(() => {
    const userLoggedIn = msalObject.getAllAccounts();
    console.log(userLoggedIn);
    if (userLoggedIn.length === 0) {
      authStore.userInfo = null;
    } else {
      authStore.userInfo = userLoggedIn[0];
    }
  })
  .catch((err) => {
    console.error(err);
  });

app.use(router);

app.mount("#app");
