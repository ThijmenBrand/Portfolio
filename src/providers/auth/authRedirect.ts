import {
  InteractionRequiredAuthError,
  PublicClientApplication,
  AuthenticationResult,
} from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./config";
import callMSGraph from "./graph";
import graphConfig from "./graphConfig";
import router from "../../routes";

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

function selectAccount() {
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
  myMSALObj.loginRedirect(loginRequest);
}

function signOut() {
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
    postLogoutRedirectUri: msalConfig.auth.redirectUri,
  };

  myMSALObj.logoutRedirect(logoutRequest);
}

function getTokenRedirect(request: any) {
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
