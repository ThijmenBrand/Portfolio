import { MSALInstance, loginRequest } from "./auth.config";

export const signIn = () => MSALInstance.loginRedirect(loginRequest);

export const signOut = () =>
  MSALInstance.logoutRedirect({ postLogoutRedirectUri: "/" });

export const acquireAccessToken = async () => {
  const account = MSALInstance.getAllAccounts()[0];

  const scopes = [`${import.meta.env.VITE_AUTH_CLIENT_ID}/user.read`];

  const request = {
    account,
    scopes,
  };

  try {
    const tokenResponse = await MSALInstance.acquireTokenSilent(request);

    return tokenResponse.accessToken;
  } catch (error) {
    const tokenPopupResponse = await MSALInstance.acquireTokenPopup({
      scopes,
    });

    return tokenPopupResponse.accessToken;
  }
};
