import type { PublicClientApplication } from "@azure/msal-browser";

import type { RouteLocationNormalized, Router } from "vue-router";

import { MSALInstance } from "./auth.config";

export function registerAuthGuard(router: Router) {
  router.beforeEach(async (to: RouteLocationNormalized) => {
    const loggedIn = await isAuthenticated(MSALInstance);

    if (!loggedIn && to.name !== "Home") {
      return { name: "Home" };
    }
  });
}

export async function isAuthenticated(
  instance: PublicClientApplication
): Promise<boolean> {
  return instance
    .handleRedirectPromise()
    .then(() => {
      const accounts = instance.getAllAccounts();

      if (accounts.length > 0) {
        return true;
      }
      return false;
    })
    .catch(() => {
      return false;
    });
}
