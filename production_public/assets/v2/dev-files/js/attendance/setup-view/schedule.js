!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-view/schedule"],{3076:(e,t,a)=>{"use strict";a.r(t)},9493:(e,t,a)=>{"use strict";a.r(t)},4947:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getDate:()=>n});const n=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},2831:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getLocalTime:()=>s,getTime:()=>n});const n=e=>{const t=new Date,a=`${t.getFullYear()}/${t.getMonth()}/${t.getDate()} ${e}`;return console.log({time:e,__time:t,_DateString:a}),new Date(a)},s=(e,t)=>void 0===e?"-":e.toLocaleTimeString("en-US",t)},8967:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__swalStyle:()=>n,https_swal_error_format:()=>s});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",s=(e,t=!0)=>{if(Array.isArray(e)){let a=(t?n:"")+"<ul>";return e.forEach((e=>{a+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),a+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,a)=>{"use strict";a.r(t),a.d(t,{tokenLogin:()=>d,verifyToken:()=>o});var n=a(8485),s=a(7270),r=a(7052),l=a(1942),c=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};const o=(e,t,a)=>c(void 0,void 0,void 0,(function*(){const o=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=a,u=(0,l.get_cookie)(d),h=JSON.stringify({token:(0,r.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,l.get_cookie)(d+"_date"))))return u;yield(0,s.http)(o,{method:"POST",body:h},!0).then((n=>c(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,r.base64Encode)(String(n.jsonData.token));(0,l.set_cookies)(d,e,10),(0,l.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield i(e,t,a)}))))})),i=(e,t,a)=>c(void 0,void 0,void 0,(function*(){const c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",o=a,i=JSON.stringify({email:e,id:t});yield(0,s.http)(c,{method:"POST",body:i},!0).then((e=>{if(e.jsonData.token){const t=(0,r.base64Encode)(String(e.jsonData.token));(0,l.set_cookies)(o,t,10),(0,l.set_cookies_minutes)(o+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,a)=>c(void 0,void 0,void 0,(function*(){const n=(0,r.base64Encode)(String(t)),s=a;window.supersecret={unknowable:{ops:{email:e,id:n,cookieName:s}}},""==(0,l.get_cookie)(s)?yield i(e,n,a):yield o(e,n,a)}))},367:()=>{},1148:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_DayOfWeek:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null){return t=this,a=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof c?a:new c((function(e){e(a)}))).then(s,r)}l((o=o.apply(t,a||[])).next())}));var t,a,c,o}},5663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventLinkTypes:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null){return t=this,a=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof c?a:new c((function(e){e(a)}))).then(s,r)}l((o=o.apply(t,a||[])).next())}));var t,a,c,o}},6404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventLocations:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null){return t=this,a=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof c?a:new c((function(e){e(a)}))).then(s,r)}l((o=o.apply(t,a||[])).next())}));var t,a,c,o}},7790:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventMemberTypes:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null){return t=this,a=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof c?a:new c((function(e){e(a)}))).then(s,r)}l((o=o.apply(t,a||[])).next())}));var t,a,c,o}},28:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventTypes:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null){return t=this,a=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function r(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof c?a:new c((function(e){e(a)}))).then(s,r)}l((o=o.apply(t,a||[])).next())}));var t,a,c,o}},4331:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleAdmin:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},540:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleAgenda:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},2404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleAttachment:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},706:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleBreak:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},8698:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleDate:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},7824:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleDay:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},4843:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleGroup:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},606:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleLocation:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},6637:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleMember:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},4481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DELETE_MeetingEvent:()=>u});var n=a(6455),s=a.n(n),r=a(8485),l=a(7270),c=a(4492),o=a(8967),i=a(3600),d=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,i.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n={};return s().fire({title:"Remove Meeting/ Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,l.http)(a,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,o.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new c.NetWorkCallResponses("delete",a,!0);return n.postForm,n}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}s().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5029:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DELETE_MeetingEventAgendaFile:()=>u});var n=a(6455),s=a.n(n),r=a(8485),l=a(7270),c=a(4492),o=a(8967),i=a(3600),d=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,i.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/delete_agenda_file/"+e,n={delete:"this"};return s().fire({title:"Remove Agenda File?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,l.http)(a,{method:"PATCH",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!0).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,o.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new c.NetWorkCallResponses("delete",a,!0);return n.postForm,n}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}s().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2218:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceSchedule:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},2482:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleSMS:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},8786:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleSubGroup:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},2892:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MemberGroupingsGroups:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},9605:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MemberGroupingsSubGroups:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t=""){return a=this,c=void 0,i=function*(){const a=(0,l.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,o=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function s(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,s)}r((i=i.apply(a,c||[])).next())}));var a,c,o,i}},6656:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MembershipUsers:()=>c});var n=a(8485),s=a(7270),r=a(4492),l=a(3600);function c(e=null,t="",a=!1){return c=this,o=void 0,d=function*(){const c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,o=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,i=(0,l.getUserLoginInfoCookie)(),d=a?o:c,u=yield(0,s.http)(d,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{s(d.next(e))}catch(e){t(e)}}function n(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(a,n)}s((d=d.apply(c,o||[])).next())}));var c,o,i,d}},6883:(e,t,a)=>{"use strict";a.r(t),a.d(t,{_DATATABLES_:()=>o});var n,s=a(5862),r=a(9662),l=(a(367),a(9493),function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends s.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return s.html`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return s.html`
      ${this.dt_head.map((e=>s.html`<th>${e.title}</th>`))}
    `}tbody(){return s.html`
      ${this.dt_body.map((e=>s.html`<tr>${e.map((e=>s.html`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return s.html`
    ${this.dt_foot.map((e=>s.html`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const a=this.ajaxHeader[e];t[e]=a}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};o.styles=[s.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],l([(0,r.property)({type:Number}),c("design:type",Number)],o.prototype,"randomID1",void 0),l([(0,r.property)({type:Number}),c("design:type",Number)],o.prototype,"randomID2",void 0),l([(0,r.property)({type:String}),c("design:type",String)],o.prototype,"ID",void 0),l([(0,r.property)({type:Object}),c("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],o.prototype,"datatable",void 0),l([(0,r.property)({type:Array}),c("design:type",Array)],o.prototype,"dt_head",void 0),l([(0,r.property)({type:Array}),c("design:type",Array)],o.prototype,"dt_foot",void 0),l([(0,r.property)({type:Array}),c("design:type",Array)],o.prototype,"dt_body",void 0),l([(0,r.property)(),c("design:type",Object)],o.prototype,"ajaxHeader",void 0),o=l([(0,r.customElement)("datatables-new"),c("design:paramtypes",[])],o)},7108:(e,t,a)=>{"use strict";a.r(t),a.d(t,{PAGE__IDS:()=>n});const n={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},3922:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewSchedule:()=>h}),a(3076),a(3683),a(4657);var n=a(4108),s=a(5862),r=a(9662),l=(a(4574),a(7712)),c=a(1354),o=a(1302),i=a(7108),d=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,r=function*(){e.connectedCallback.call(this),(0,l.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,n.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,n){function l(e){try{o(r.next(e))}catch(e){n(e)}}function c(e){try{o(r.throw(e))}catch(e){n(e)}}function o(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(l,c)}o((r=r.apply(t,a||[])).next())}));var t,a,s,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,c.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,o.PageButtonUserAccess)(i.PAGE__IDS.schedule_meeting_event),!(0,o.AppSettingsExtraUserAccess)({pageId:i.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-view-one CLIENT_ID="${this.clientId}"></attendance-setup-view-one>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,r.property)({type:String}),u("design:type",String)],h.prototype,"email",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],h.prototype,"mId",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],h.prototype,"clientId",void 0),d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_hasSetup",void 0),d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_pageButtonAccess",void 0),h=d([(0,r.customElement)("attendance-setup-view-schedule"),u("design:paramtypes",[])],h)},8420:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneAdmin:()=>h}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(8881)),l=a(4331),c=a(6262),o=a(8485),i=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAdmins=null}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Admin Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Meeting Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Agenda Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Clocking Admin
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleAdmins?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAdmins?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Admin </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleAdmins.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,r.until)(this.getAdminUser(e.adminId),n.html`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?n.html`<mwc-icon class="text-green-600">check</mwc-icon>`:n.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?n.html`<mwc-icon class="text-green-600">check</mwc-icon>`:n.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?n.html`<mwc-icon class="text-green-600">check</mwc-icon>`:n.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAdmin(){return u(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleAdmin)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}getAdminUser(e){return u(this,void 0,void 0,(function*(){const t=yield(0,c.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),d("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-admin"),d("design:paramtypes",[])],h)},9375:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneAgenda:()=>d}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(540)),l=a(8485),c=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let d=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAgendas=null}set _scheduleAgendas(e){this.__scheduleAgendas=e,this.requestUpdate()}get _scheduleAgendas(){return this.__scheduleAgendas}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${l.CONSTANTS.URLS.PDB_CLIENT}settings/edit/agendas?meeting-event-id=${this.meetingEventId}"
        label="Edit Agenda(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Agenda Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleAgendas?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAgendas?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Agenda </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleAgendas.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${e.agenda}" target="_blank">Open File ${t+1}</a>
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAgenda(){return i(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleAgenda)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAgendas=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};d.styles=[n.css`
   :host { display: block; }
  `],c([(0,s.property)({type:Array}),o("design:type",Array)],d.prototype,"DATA",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"CLIENT_ID",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingEventId",void 0),d=c([(0,s.customElement)("attendance-setup-view-one-agenda"),o("design:paramtypes",[])],d)},5458:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneAttachment:()=>d}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(2404)),l=a(8485),c=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let d=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAttachments=null}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${l.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Attachment Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleAttachments?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAttachments?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Attachment </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleAttachments.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${e.attachment}" target="_blank">Open File ${t+1}</a>
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAttachment(){return i(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleAttachment)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};d.styles=[n.css`
   :host { display: block; }
  `],c([(0,s.property)({type:Array}),o("design:type",Array)],d.prototype,"DATA",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"CLIENT_ID",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingEventId",void 0),d=c([(0,s.customElement)("attendance-setup-view-one-attachment"),o("design:paramtypes",[])],d)},9451:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneBreak:()=>u}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(706)),l=a(8485),c=a(2831),o=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleBreaks=null}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${l.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Break Start Time</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleBreaks?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleBreaks?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Break </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleBreaks.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,c.getTime)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,c.getTime)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleBreak(){return d(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleBreak)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],o([(0,s.property)({type:Array}),i("design:type",Array)],u.prototype,"DATA",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"CLIENT_ID",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"meetingEventId",void 0),u=o([(0,s.customElement)("attendance-setup-view-one-break"),i("design:paramtypes",[])],u)},9439:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneDate:()=>d}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(8698)),l=a(8485),c=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let d=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDates=null}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${l.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Date</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleDates?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleDates?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Date </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleDates.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleDate(){return i(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleDate)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};d.styles=[n.css`
   :host { display: block; }
  `],c([(0,s.property)({type:Array}),o("design:type",Array)],d.prototype,"DATA",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"CLIENT_ID",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingEventId",void 0),d=c([(0,s.customElement)("attendance-setup-view-one-date"),o("design:paramtypes",[])],d)},6716:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneDay:()=>p}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(7824)),l=a(4947),c=a(1148),o=a(8881),i=a(8485),d=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let p=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDays=null}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDay()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Day</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      End Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleDays?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleDays?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Day </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleDays.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.until)(this.getDayOfWeek(e.dayId),n.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.getDate)(e.endDate,{dateStyle:"medium"})}
              ${t+1==a.length?"...":""}
            </td>
          </tr>
        `))}
    `}firstUpdayd(){}getAttendanceScheduleDay(){return h(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=5");null===e?this._scheduleDays=void 0:Array.isArray(e.response.data)&&(this._scheduleDays=e.response.data)}))}getDayOfWeek(e){return h(this,void 0,void 0,(function*(){const t=yield(0,c.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};p.styles=[n.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Array}),u("design:type",Array)],p.prototype,"DATA",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"meetingEventId",void 0),p=d([(0,s.customElement)("attendance-setup-view-one-day"),u("design:paramtypes",[])],p)},5381:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneGroup:()=>h}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(4843)),l=a(8881),c=a(2892),o=a(8485),i=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleGroups=null}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleGroup()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Group</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleGroups?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleGroups?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Group </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleGroups.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getGroup(e.groupId),n.html`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpgroupd(){}getAttendanceScheduleGroup(){return u(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroup(e){return u(this,void 0,void 0,(function*(){const t=yield(0,c.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),d("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-group"),d("design:paramtypes",[])],h)},1052:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneSchedule:()=>f}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(2218)),l=a(5663),c=a(6404),o=a(28),i=a(8881),d=a(2831),u=a(8485),h=a(4481),p=a(5029),m=(a(5996),a(6716),a(9439),a(5381),a(8420),a(9451),a(2353),a(9375),a(6489),a(7720),a(5458),a(7790)),_=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let f=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__schedule=null}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return null===this._schedule?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:n.html`${this.schedule}`}get schedule(){const e=this._schedule.data;return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-4"
        href="${u.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <mwc-icon-button class="ml-4 danger -mt-2 mb-2" icon="delete_forever" delete-this-item="${this.meetingEventId}"
        @click="${this.deleteMeetingEvent}"></mwc-icon-button>
      ${this.table}
      <div class="row">
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-admin CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-admin>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-attachment CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-attachment>
        </div>
        ${" "}
        ${e.hasBreakTime?n.html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-break CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-break>
          </div>`:n.html``}
        ${e.isRecuring?n.html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-day CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-day>
          </div>`:n.html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-date CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-date>
          </div>`}
        ${1===e.memberType?n.html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-member CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-member>
          </div>`:n.html``}
        ${2===e.memberType?n.html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-group CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-group>
          </div>`:n.html``}
        ${3===e.memberType?n.html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-subgroup CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-subgroup>
          </div>`:n.html``}
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-location CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-location>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-sms CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-sms>
        </div>
      </div>
    `}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <mwc-icon>tune</mwc-icon>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const e=this._schedule.data;if(!Array.isArray(e))return n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Name
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,i.until)(this.getType(e.type),n.html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,i.until)(this.getMemberType(e.memberType),n.html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Branch
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.branchId.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Category
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.memberCategoryId.category}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Span <span class="text-xs text-gray-700">How long the meeting/ event will last (default is 1 day)</span>
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.meetingSpan} day${e.meetingSpan>1?"s":""} 
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Start Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,d.getTime)(e.startTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Close Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,d.getTime)(e.closeTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Lateness Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,d.getTime)(e.latenessTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Is Recuring
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.isRecuring}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Has Break Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.hasBreakTime}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Link
          </th>
          <td class="mdc-data-table__cell" scope="row">
            <a href="${e.virtualMeetingLink}">${e.virtualMeetingLink}</a>
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,i.until)(this.getMeetingEventLinkType(e.virtualMeetingType),n.html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Location
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,i.until)(this.getMeetingEventLocation(e.meetingLocation),n.html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Expected Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.expectedMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Active Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.activeMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.agenda}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda File
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${0===e.agendaFile.length?"-":n.html`<a href="${u.CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files/${e.agendaFile}" target="_blank">Open File</a>
              <mwc-icon-button class="ml-4 danger" icon="delete_forever" delete-this-item="${this.meetingEventId}"
                @click="${this.deleteMeetingEventAgendaFile}"></mwc-icon-button>`}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Day Agenda
          </th>
          <td class="mdc-data-table__cell" scope="row">
            <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
              href="${u.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
              label="Agenda(s)"></link-button>
          </td>
        </tr>
      `}firstUpdated(){}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getType(e){return v(this,void 0,void 0,(function*(){const t=yield(0,o.GET_MeetingEventTypes)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMemberType(e){return v(this,void 0,void 0,(function*(){const t=yield(0,m.GET_MeetingEventMemberTypes)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLinkType(e){return v(this,void 0,void 0,(function*(){const t=yield(0,l.GET_MeetingEventLinkTypes)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLocation(e){return v(this,void 0,void 0,(function*(){const t=yield(0,c.GET_MeetingEventLocations)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}deleteMeetingEvent(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_MeetingEvent)(t)}))}deleteMeetingEventAgendaFile(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_MeetingEventAgendaFile)(t)}))}createRenderRoot(){return this}};f.styles=[n.css`
   :host { display: block; }
  `],_([(0,s.property)({type:Array}),b("design:type",Array)],f.prototype,"DATA",void 0),_([(0,s.property)({type:Number}),b("design:type",Number)],f.prototype,"CLIENT_ID",void 0),_([(0,s.property)({type:Number}),b("design:type",Number)],f.prototype,"meetingEventId",void 0),f=_([(0,s.customElement)("attendance-setup-view-one-schedule"),b("design:paramtypes",[])],f)},7720:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneLocation:()=>d}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(606)),l=a(8485),c=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let d=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleLocations=null}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${l.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Location Latitude</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleLocations?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleLocations?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Location </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleLocations.results.map(((e,t)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius}
            </td>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleLocation(){return i(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleLocation)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};d.styles=[n.css`
   :host { display: block; }
  `],c([(0,s.property)({type:Array}),o("design:type",Array)],d.prototype,"DATA",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"CLIENT_ID",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingEventId",void 0),d=c([(0,s.customElement)("attendance-setup-view-one-location"),o("design:paramtypes",[])],d)},2353:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneMember:()=>h}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(8881)),l=a(6637),c=a(6656),o=a(8485),i=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleMembers=null}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Member</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleMembers?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleMembers?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Member </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleMembers.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,r.until)(this.getMember(e.memberId),n.html`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleMember(){return u(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleMember)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMember(e){return u(this,void 0,void 0,(function*(){const t=yield(0,c.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),d("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-member"),d("design:paramtypes",[])],h)},5996:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneSMS:()=>u}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(2482)),l=a(2831),c=a(8485),o=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSMSs=null}set _scheduleSMSs(e){this.__scheduleSMSs=e,this.requestUpdate()}get _scheduleSMSs(){return this.__scheduleSMSs}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSMS()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting SMS">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Event Message</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Parent
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Member
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Attendee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Message
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleSMSs?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleSMSs?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SMS </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleSMSs.results.map((e=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.eventMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.getTime)(e.alertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.alertDate}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.notifyParent}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.notifyMember}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.getTime)(e.attendeeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.getTime)(e.absenteeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.absenteeAlertMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleSMS(){return d(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleSMS)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSMSs=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],o([(0,s.property)({type:Array}),i("design:type",Array)],u.prototype,"DATA",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"CLIENT_ID",void 0),o([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"meetingEventId",void 0),u=o([(0,s.customElement)("attendance-setup-view-one-sms"),i("design:paramtypes",[])],u)},6489:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneSubgroup:()=>h}),a(5501);var n=a(5862),s=a(9662),r=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(2715),a(8786)),l=a(8881),c=a(9605),o=a(8485),i=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,r){function l(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSubgroups=null}set _scheduleSubgroups(e){this.__scheduleSubgroups=e,this.requestUpdate()}get _scheduleSubgroups(){return this.__scheduleSubgroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return n.html`${this.table}`}get table(){return n.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule SubGroup</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleSubgroups?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleSubgroups?n.html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SubGroup </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:n.html`
      ${this._scheduleSubgroups.results.map(((e,t,a)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getSubGroup(e.subGroupId),n.html`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpsubgroupd(){}getAttendanceScheduleSubGroup(){return u(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSubgroups=null===e?void 0:e.paginResponse}))}getSubGroup(e){return u(this,void 0,void 0,(function*(){const t=yield(0,c.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),d("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),d("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-subgroup"),d("design:paramtypes",[])],h)},4574:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOne:()=>i}),a(5501);var n,s=a(5862),r=a(9662),l=(a(3283),a(1511),a(3690),a(1854),a(6883),a(367),a(1052),a(4672)),c=function(e,t,a,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,a,l):s(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,s=function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.urlQueryParams)(),this.getMeetingEventId()},new((n=void 0)||(n=Promise))((function(e,r){function l(e){try{o(s.next(e))}catch(e){r(e)}}function c(e){try{o(s.throw(e))}catch(e){r(e)}}function o(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(l,c)}o((s=s.apply(t,a||[])).next())}));var t,a,n,s}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return s.html`<div class="row">
      <div class="col-md-12 my-2">
        <attendance-setup-view-one-schedule CLIENT_ID="${this.CLIENT_ID}" 
          meetingEventId="${this.meetingEventId}">
        </attendance-setup-view-one-schedule>
      </div>
    </div>`}firstUpdated(){}getMeetingEventId(){let e=(0,l.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};i.styles=[s.css`
   :host { display: block; }
  `],c([(0,r.property)({type:Number}),o("design:type",Number)],i.prototype,"CLIENT_ID",void 0),c([(0,r.property)({type:Array}),o("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],i.prototype,"_data",void 0),c([(0,r.property)({type:Object}),o("design:type",Object)],i.prototype,"urlQueryParams",void 0),c([(0,r.property)({type:Number}),o("design:type",Number)],i.prototype,"meetingEventId",void 0),i=c([(0,r.customElement)("attendance-setup-view-one"),o("design:paramtypes",[])],i)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_url_query_params_i-a30b73","shared"],(()=>(3922,e(e.s=3922)))),e.O())])));
//# sourceMappingURL=schedule.js.map