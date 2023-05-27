import { Configuration, LogLevel } from "@azure/msal-browser";

console.log(import.meta.env);
const redirectUri = import.meta.env.PROD
  ? "https://develop.thijmenbrand.nl/login"
  : "http://localhost:5173/login";

const msalConfig: Configuration = {
  auth: {
    clientId: "458e7102-0723-448f-8c46-7be309084831",
    authority:
      "https://login.microsoftonline.com/35c15bd7-41e6-48f7-9bc1-f95027ab4dd1",
    redirectUri: redirectUri,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
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
        }
      },
    },
  },
};

const loginRequest = {
  scopes: ["User.Read"],
};

const tokenRequest = {
  scopes: ["User.Read", "Mail.Read"],
  forceRefresh: false,
};

export { msalConfig, loginRequest, tokenRequest };
