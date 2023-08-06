import { CONSTANTS } from "@@addons/constants";

export class NavigatorRouter {
  constructor() {

  }

  static baseUrl = CONSTANTS.URLS.PDB_CLIENT;

  static push(path: String, params: { baseUrl: String } = { baseUrl: CONSTANTS.URLS.PDB_CLIENT }) {
    // Get the current URL.
    const newUrl = `${params.baseUrl}${path}`;

    // Reload the page with the new URL.
    // @ts-ignore
    window.location.href = newUrl;
  }
}