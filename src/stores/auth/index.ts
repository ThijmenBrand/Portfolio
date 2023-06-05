import { AccountInfo } from "@azure/msal-browser";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { myMSALObj } from "../../providers/auth/authRedirect";
import { loginRequest, msalConfig } from "../../providers/auth/config";

const useAuthStore = defineStore("authorization", () => {
  const userInfo = ref<AccountInfo | null>();

  const getUserInfo = computed(() => userInfo);

  const signIn = () => myMSALObj.loginRedirect(loginRequest);
  const signOut = () => {
    const logoutRequest = {
      account: myMSALObj.getAccountByUsername(userInfo.value?.username ?? ""),
      postLogoutRedirectUri: msalConfig.auth.redirectUri,
    };

    myMSALObj.logoutRedirect(logoutRequest);
  };

  return { userInfo, getUserInfo, signIn, signOut };
});

export default useAuthStore;
