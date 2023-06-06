import type { Configuration } from "@azure/msal-browser";
import {
  EventType,
  LogLevel,
  PublicClientApplication,
  type AuthenticationResult,
} from "@azure/msal-browser";

import type { Router } from "vue-router";

import { AuthNavigationClient } from "./auth.navigationClient";

export const config: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${
      import.meta.env.VITE_AUTH_TENANT_ID
    }`,
    redirectUri: import.meta.env.PROD
      ? import.meta.env.VITE_AUTH_REDIRECT_URI
      : import.meta.env.VITE_AUTH_LOCAL_REDIRECT_URI,
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
  },
  system: {
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean
      ) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
      logLevel: LogLevel.Verbose,
    },
  },
};

export const MSALInstance = new PublicClientApplication(config);

export const loginRequest = {
  scopes: ["User.Read"],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

export function setupMSAL(router: Router) {
  MSALInstance.setNavigationClient(new AuthNavigationClient(router));

  const accounts = MSALInstance.getAllAccounts();

  if (accounts.length > 0) {
    MSALInstance.setActiveAccount(accounts[0]);
  }

  MSALInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;
      MSALInstance.setActiveAccount(account);
    }
  });
}
