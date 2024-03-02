import Swal from "sweetalert2";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { NetworkCallResponse_I } from "@@addons/interfaces/network_calls/response";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { MeetingEventTimeFormModel } from "@@addons/interfaces/attendance/meeting_event/schedules/times";


export async function POST_AttendanceAddScheduleTimesBulk(timeData: MeetingEventTimeFormModel,): Promise<any> {

  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});
  console.log({ timeData });

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/meeting-event/time/bulk',
    formData = {
      "meetingEventId": timeData.meetingEventId,
      "times": timeData.times.map(time => {
        return {
          "startTime": time.startTime ?? "",
          "endTime": time.endTime ?? ""
        }
      }),
    };

  return Swal.fire({
    title: 'Add Extra Time(s)?',
    icon: 'info',
    iconColor: '#f97817',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#f97817',
    cancelButtonColor: '#ddd',
    reverseButtons: true,
    showLoaderOnConfirm: true,
    backdrop: true,
    preConfirm: async (login) => {
      return await http(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Authorization: "Token " + _get_cookie.token
        }
      }, true, false).then((HTTP) => {
        // console.log({ HTTP });

        try {
          const networkCallRes = new NetWorkCallResponses("post", HTTP, false);
          return networkCallRes;
        } catch (error) {
          console.error({ error });
          let errorHttp = HTTP;
          errorHttp['error'] = error;
          const networkCallRes = new NetWorkCallResponses("post", errorHttp, true);
          networkCallRes.postForm
          return networkCallRes;
        }
      }).catch(error => {
        Swal.showValidationMessage(
          `${String(error)}`
        );
      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    // console.log({ result });
    if (result.isConfirmed) {
      let successMsg = "Success",
        isSuccess = false;
      const _VALUE = result.value;
      if (_VALUE instanceof Object) {
        const VALUE: NetworkCallResponse_I<unknown> = _VALUE.response;
        successMsg = String(VALUE.message);

        isSuccess = _VALUE.response.success;
      }
      Swal.fire({
        title: successMsg,
        icon: isSuccess ? 'success' : 'error',
        iconColor: '#f97817',
        confirmButtonColor: '#f97817',
      });
      isSuccess ? setTimeout(() => {
        window.location.reload();
      }, 500) : null;
    }
  });
}