import type {
  PopupRequest,
  PublicClientApplication,
  RedirectRequest,
} from "@azure/msal-browser";
import { InteractionType } from "@azure/msal-browser";

import type { RouteLocationNormalized, Router } from "vue-router";

import { loginRequest, MSALInstance } from "./auth.config";

export function registerAuthGuard(router: Router) {
  router.beforeEach(async (to: RouteLocationNormalized) => {
    const request = {
      ...loginRequest,
      redirectStartPage: to.fullPath,
    };
    const shouldProceed = await isAuthenticated(
      MSALInstance,
      InteractionType.Redirect,
      request
    );

    return shouldProceed || "/failed";
  });
}

export async function isAuthenticated(
  instance: PublicClientApplication,
  interactionType: InteractionType,
  loginRequest: PopupRequest | RedirectRequest
): Promise<boolean> {
  return instance
    .handleRedirectPromise()
    .then(() => {
      const accounts = instance.getAllAccounts();

      if (accounts.length > 0) {
        return true;
      }

      // User is not signed in and attempting to access protected route. Sign them in.
      if (interactionType === InteractionType.Popup) {
        return instance
          .loginPopup(loginRequest)
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
      } else if (interactionType === InteractionType.Redirect) {
        return instance
          .loginRedirect(loginRequest)
          .then(() => {
            return true;
          })
          .catch((er) => {
            console.log(er);

            return false;
          });
      }

      return false;
    })
    .catch(() => {
      return false;
    });
}
