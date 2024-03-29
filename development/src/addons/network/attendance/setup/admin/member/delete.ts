import Swal from "sweetalert2";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { NetworkCallResponse_I } from "@@addons/interfaces/network_calls/response";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export interface RemoveAdminMember { id: number }
export async function DELETE_AttendanceScheduleAdminMembers(removeInfos: Array<RemoveAdminMember>): Promise<any> {

  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/meeting-event/admin-member/delete-bulk',
    formData = JSON.stringify(removeInfos);

  return Swal.fire({
    title: 'Remove Admin Member(s)?',
    // text: "You won't be able to revert this!",
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
        method: "DELETE",
        body: formData,
        headers: {
          Authorization: "Token " + _get_cookie.token
        }
      }, true).then((HTTP) => {
        // console.log({ HTTP });

        // try {
        const networkCallRes = new NetWorkCallResponses("delete", HTTP, false);
        const _RESPONSES = networkCallRes.multipleResponse;
        // console.log({ _RESPONSES });
        let errors: Array<{ error: string }> = [];
        if (_RESPONSES !== null) {
          _RESPONSES.forEach((_RESPONSE, i) => {
            // console.log({ "_RESPONSE._RESPONSE": _RESPONSE });
            if ('nameError' in _RESPONSE && 'unknownError' in _RESPONSE) {
              if (_RESPONSE.unknownError.length > 0) {
                // console.log({"_RESPONSE.unknownError": _RESPONSE.unknownError});

                _RESPONSE.unknownError.forEach(e => {
                  const _errors = e.errors;
                  _errors.forEach(err => {
                    errors.push({ error: `[${"Entry".toUpperCase()} ${i + 1}] - ${err}` });
                  });
                });
              } else {
                if (_RESPONSE.nameError.length > 0) {
                  // console.log({"_RESPONSE.nameError": _RESPONSE.nameError});

                  _RESPONSE.nameError.forEach(e => {
                    const _errorId = e.id;
                    const _errors = e.errors;
                    _errors.forEach(err => {
                      errors.push({ error: `[${"Entry".toUpperCase()} ${i + 1}] - ${_errorId.toUpperCase()} :: ${err}` });
                    });
                  });
                }

              }
            }
          });

        }
        if (errors.length > 0) {
          const res = https_swal_error_format(errors);
          return Swal.showValidationMessage(
            `${res}`
          );
        }
        return networkCallRes;
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
      isSuccess ? Swal.fire({
        title: successMsg,
        icon: isSuccess ? 'success' : 'error',
        iconColor: isSuccess ? '#f97817' : '#dc2626',
        confirmButtonColor: '#f97817',
      }) : null;
      isSuccess ? setTimeout(() => {
        window.location.reload();
      }, 500) : null;
    }
  });
}