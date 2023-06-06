import type { AccountInfo, EventMessage } from "@azure/msal-browser";
import {
  EventMessageUtils,
  EventType,
  InteractionStatus,
  PublicClientApplication,
} from "@azure/msal-browser";
import { reactive, type App, type Plugin } from "vue";

type AccountIdentifiers = Partial<
  Pick<AccountInfo, "homeAccountId" | "localAccountId" | "username">
>;

function accountArraysAreEqual(
  arrayA: Array<AccountIdentifiers>,
  arrayB: Array<AccountIdentifiers>
): boolean {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  const comparisonArray = [...arrayB];

  return arrayA.every((elementA) => {
    const elementB = comparisonArray.shift();
    if (!elementA || !elementB) {
      return false;
    }

    return (
      elementA.homeAccountId === elementB.homeAccountId &&
      elementA.localAccountId === elementB.localAccountId &&
      elementA.username === elementB.username
    );
  });
}

export const msalPlugin: Plugin = {
  install: (app: App, msalInstance: PublicClientApplication) => {
    const inProgress = InteractionStatus.Startup;
    const accounts = msalInstance.getAllAccounts();

    const state = reactive({
      instance: msalInstance,
      inProgress: inProgress,
      accounts: accounts,
    });

    app.config.globalProperties.$msal = state;

    msalInstance.addEventCallback((message: EventMessage) => {
      const hasEvent = [
        EventType.ACCOUNT_ADDED,
        EventType.ACCOUNT_REMOVED,
        EventType.LOGIN_SUCCESS,
        EventType.SSO_SILENT_SUCCESS,
        EventType.HANDLE_REDIRECT_END,
        EventType.LOGIN_FAILURE,
        EventType.SSO_SILENT_FAILURE,
        EventType.LOGOUT_END,
        EventType.ACQUIRE_TOKEN_SUCCESS,
        EventType.ACQUIRE_TOKEN_FAILURE,
      ].includes(message.eventType);

      if (hasEvent) {
        const currentAccounts = msalInstance.getAllAccounts();

        if (!accountArraysAreEqual(currentAccounts, state.accounts)) {
          state.accounts = currentAccounts;
          return;
        }
      }

      const status = EventMessageUtils.getInteractionStatusFromEvent(
        message,
        state.inProgress
      );
      if (status !== null) {
        state.inProgress = status;
      }
    });
  },
};
