import type { NavigationOptions } from "@azure/msal-browser";
import { NavigationClient } from "@azure/msal-browser";
import type { Router } from "vue-router";

export class AuthNavigationClient extends NavigationClient {
  private router: Router;

  constructor(router: Router) {
    super();
    this.router = router;
  }

  async navigateInternal(url: string, options: NavigationOptions) {
    const relativePath = url.replace(window.location.origin, "");
    if (options.noHistory) {
      this.router.replace(relativePath);
    } else {
      this.router.push(relativePath);
    }

    return false;
  }
}
