import { AccountInfo } from "@azure/msal-browser";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useAuthStore = defineStore("authorization", () => {
  const userInfo = ref<AccountInfo | null>();

  const getUserInfo = computed(() => userInfo);

  return { userInfo, getUserInfo };
});

export default useAuthStore;
