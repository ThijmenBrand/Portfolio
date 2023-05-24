import {
  InteractionRequiredAuthError,
  PublicClientApplication,
  AuthenticationResult,
} from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./config";
import callMSGraph from "./graph";
import graphConfig from "./graphConfig";
import router from "../../routes";

// configuration parameters are located at authConfig.js
const myMSALObj = new PublicClientApplication(msalConfig);

function checkUserLoggedIn() {
  const userLoggedIn = myMSALObj.getAllAccounts();
  if (userLoggedIn.length === 0) {
    return false;
  } else {
    return userLoggedIn[0];
  }
}

let username = "";

myMSALObj
  .handleRedirectPromise()
  .then(() => {
    router.replace({ name: "Home" });
  })
  .catch((err) => {
    console.error(err);
  });

/**
 * A promise handler needs to be registered for handling the
 * response returned from redirect flow. For more information, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/acquire-token.md
 */

function selectAccount() {
  /**
   * See here for more info on account retrieval:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
   */

  const currentAccounts = myMSALObj.getAllAccounts();

  if (currentAccounts.length === 0) {
    return;
  } else if (currentAccounts.length > 1) {
    // Add your account choosing logic here
    console.warn("Multiple accounts detected.");
  } else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
  }
}

function handleResponse(response: any) {
  if (response !== null) {
    username = response.account.username;
  } else {
    selectAccount();
  }
}

function signIn() {
  /**
   * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
   */

  myMSALObj.loginRedirect(loginRequest);
}

function signOut() {
  /**
   * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
   */

  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
    postLogoutRedirectUri: msalConfig.auth.redirectUri,
  };

  myMSALObj.logoutRedirect(logoutRequest);
}

function getTokenRedirect(request: any) {
  /**
   * See here for more info on account retrieval:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
   */
  request.account = myMSALObj.getAccountByUsername(username);

  return myMSALObj.acquireTokenSilent(request).catch((error) => {
    console.warn(
      "silent token acquisition fails. acquiring token using redirect"
    );
    if (error instanceof InteractionRequiredAuthError) {
      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenRedirect(request);
    } else {
      console.warn(error);
    }
  });
}

function seeProfile() {
  getTokenRedirect(loginRequest)
    .then((response?: AuthenticationResult | void) => {
      callMSGraph(graphConfig.graphMeEndpoint, response!.accessToken, () =>
        console.log(response)
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export { signIn, signOut, seeProfile, getTokenRedirect, checkUserLoggedIn };
