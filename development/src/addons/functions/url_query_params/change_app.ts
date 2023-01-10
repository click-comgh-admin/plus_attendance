import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { base64Decode, base64Encode } from "@@addons/functions/base64";
import { CONSTANTS } from "@@addons/constants";

export const change_app_by_link = (page: string) => {
  const userLoginInfo = getUserLoginInfoCookie(),
    token = userLoginInfo.token,
    permissionKey = base64Encode(token, true),
    accountsAccessPageKey = base64Encode(page, true);
  // console.log({ permissionKey, accountsAccessPageKey, });
  const URL = `${CONSTANTS.URLS.PDB_DATABASE}app-reroute?permission-key=${permissionKey}&access-page-key=${accountsAccessPageKey}`;
  // console.log({ URL });

  return URL;
}