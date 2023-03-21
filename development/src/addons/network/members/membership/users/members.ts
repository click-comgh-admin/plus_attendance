import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export async function GET_MembershipUserIds<Type>(IDs: Array<Number> = null, accountType: number |1 | 2 = 1) {

  const _get_cookie = getUserLoginInfoCookie();
  let url = ``;
  if (accountType === 1) {
    url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/user/memberids';
  } else {
    url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/user-organization/memberids';
  }
  const formData = {memberIds: IDs},
    HTTP = await http(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Authorization: "Token " + _get_cookie.token
      }
    }, true, true);
  try {
    // console.log({"HTTP.jsonData": HTTP.jsonData});
    
    return new NetWorkCallResponses<Type>("get", HTTP);
  } catch (error) {
    console.error({ error });
    let errorHttp = HTTP;
    errorHttp['error'] = error;
    return new NetWorkCallResponses<Type>("get", errorHttp, true);
  }
}