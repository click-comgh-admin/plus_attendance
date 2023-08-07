!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-view/schedule"],{99493:(e,t,a)=>{"use strict";a.r(t)},24173:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getDate:()=>n});const n=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},30367:()=>{},11148:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_DayOfWeek:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null){return t=this,a=void 0,d=function*(){const t=(0,c.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),r=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function s(e){try{c(d.next(e))}catch(e){n(e)}}function l(e){try{c(d.throw(e))}catch(e){n(e)}}function c(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(s,l)}c((d=d.apply(t,a||[])).next())}));var t,a,r,d}},35663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventLinkTypes:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null){return t=this,a=void 0,d=function*(){const t=(0,c.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),r=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function s(e){try{c(d.next(e))}catch(e){n(e)}}function l(e){try{c(d.throw(e))}catch(e){n(e)}}function c(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(s,l)}c((d=d.apply(t,a||[])).next())}));var t,a,r,d}},96404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventLocations:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null){return t=this,a=void 0,d=function*(){const t=(0,c.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),r=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function s(e){try{c(d.next(e))}catch(e){n(e)}}function l(e){try{c(d.throw(e))}catch(e){n(e)}}function c(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(s,l)}c((d=d.apply(t,a||[])).next())}));var t,a,r,d}},47790:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventMemberTypes:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null){return t=this,a=void 0,d=function*(){const t=(0,c.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),r=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function s(e){try{c(d.next(e))}catch(e){n(e)}}function l(e){try{c(d.throw(e))}catch(e){n(e)}}function c(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(s,l)}c((d=d.apply(t,a||[])).next())}));var t,a,r,d}},40028:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MeetingEventTypes:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null){return t=this,a=void 0,d=function*(){const t=(0,c.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),r=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function s(e){try{c(d.next(e))}catch(e){n(e)}}function l(e){try{c(d.throw(e))}catch(e){n(e)}}function c(t){var a;t.done?e(t.value):(a=t.value,a instanceof r?a:new r((function(e){e(a)}))).then(s,l)}c((d=d.apply(t,a||[])).next())}));var t,a,r,d}},14331:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleAdmin:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},10540:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleAgenda:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},72404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleAttachment:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},8698:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleDate:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},67824:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleDay:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},34843:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleGroup:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},606:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleLocation:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},55524:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleMember:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},94481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DELETE_MeetingEvent:()=>u});var n=a(86455),s=a.n(n),l=a(48485),c=a(87270),r=a(14492),d=a(8967),i=a(33600),o=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};function u(e){return o(this,void 0,void 0,(function*(){const t=(0,i.getUserLoginInfoCookie)(),a=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n={};return s().fire({title:"Remove Meeting/ Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>o(this,void 0,void 0,(function*(){return yield(0,c.http)(a,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new r.NetWorkCallResponses("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new r.NetWorkCallResponses("delete",a,!0);return n.postForm,n}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}s().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5029:(e,t,a)=>{"use strict";a.r(t),a.d(t,{DELETE_MeetingEventAgendaFile:()=>u});var n=a(86455),s=a.n(n),l=a(48485),c=a(87270),r=a(14492),d=a(8967),i=a(33600),o=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};function u(e){return o(this,void 0,void 0,(function*(){const t=(0,i.getUserLoginInfoCookie)(),a=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/delete_agenda_file/"+e,n={delete:"this"};return s().fire({title:"Remove Agenda File?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>o(this,void 0,void 0,(function*(){return yield(0,c.http)(a,{method:"PATCH",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!0).then((e=>{try{const t=new r.NetWorkCallResponses("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new r.NetWorkCallResponses("delete",a,!0);return n.postForm,n}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}s().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},72482:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_AttendanceScheduleSMS:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t=""){return a=this,r=void 0,i=function*(){const a=(0,c.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms"+(null===e?"":"/"+e)+t,d=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new l.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{l(i.next(e))}catch(e){t(e)}}function s(e){try{l(i.throw(e))}catch(e){t(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,s)}l((i=i.apply(a,r||[])).next())}));var a,r,d,i}},26656:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GET_MembershipUsers:()=>r});var n=a(48485),s=a(87270),l=a(14492),c=a(33600);function r(e=null,t="",a=!1){return r=this,d=void 0,o=function*(){const r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,d=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,i=(0,c.getUserLoginInfoCookie)(),o=a?d:r,u=yield(0,s.http)(o,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new l.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{s(o.next(e))}catch(e){t(e)}}function n(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(a,n)}s((o=o.apply(r,d||[])).next())}));var r,d,i,o}},16883:(e,t,a)=>{"use strict";a.r(t),a.d(t,{_DATATABLES_:()=>d});var n,s=a(85862),l=a(59662),c=(a(30367),a(99493),function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return s.html`
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
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const a=this.ajaxHeader[e];t[e]=a}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};d.styles=[s.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],c([(0,l.property)({type:Number}),r("design:type",Number)],d.prototype,"randomID1",void 0),c([(0,l.property)({type:Number}),r("design:type",Number)],d.prototype,"randomID2",void 0),c([(0,l.property)({type:String}),r("design:type",String)],d.prototype,"ID",void 0),c([(0,l.property)({type:Object}),r("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],d.prototype,"datatable",void 0),c([(0,l.property)({type:Array}),r("design:type",Array)],d.prototype,"dt_head",void 0),c([(0,l.property)({type:Array}),r("design:type",Array)],d.prototype,"dt_foot",void 0),c([(0,l.property)({type:Array}),r("design:type",Array)],d.prototype,"dt_body",void 0),c([(0,l.property)(),r("design:type",Object)],d.prototype,"ajaxHeader",void 0),d=c([(0,l.customElement)("datatables-new"),r("design:paramtypes",[])],d)},17108:(e,t,a)=>{"use strict";a.r(t),a.d(t,{PAGE__IDS:()=>n});const n={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},13922:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewSchedule:()=>h}),a(69579),a(43683),a(74657);var n=a(14108),s=a(85862),l=a(59662),c=(a(64574),a(27712)),r=a(91354),d=a(41302),i=a(17108),o=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,l=function*(){e.connectedCallback.call(this),(0,c.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,n.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,n){function c(e){try{d(l.next(e))}catch(e){n(e)}}function r(e){try{d(l.throw(e))}catch(e){n(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(c,r)}d((l=l.apply(t,a||[])).next())}));var t,a,s,l}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,r.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,d.PageButtonUserAccess)(i.PAGE__IDS.schedule_meeting_event),!(0,d.AppSettingsExtraUserAccess)({pageId:i.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-view-one CLIENT_ID="${this.clientId}"></attendance-setup-view-one>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};o([(0,l.property)({type:String}),u("design:type",String)],h.prototype,"email",void 0),o([(0,l.property)({type:Number}),u("design:type",Number)],h.prototype,"mId",void 0),o([(0,l.property)({type:Number}),u("design:type",Number)],h.prototype,"clientId",void 0),o([(0,l.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_hasSetup",void 0),o([(0,l.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_pageButtonAccess",void 0),h=o([(0,l.customElement)("attendance-setup-view-schedule"),u("design:paramtypes",[])],h)},18420:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneAdmin:()=>h}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(58881)),c=a(14331),r=a(46262),d=a(48485),i=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAdmins=null}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${d.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
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
              ${(0,l.until)(this.getAdminUser(e.adminId),n.html`<span>Loading...</span>`)}
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
    `}firstUpdated(){}getAttendanceScheduleAdmin(){return u(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleAdmin)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}getAdminUser(e){return u(this,void 0,void 0,(function*(){const t=yield(0,r.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),o("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-admin"),o("design:paramtypes",[])],h)},39375:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneAgenda:()=>o}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(10540)),c=a(48485),r=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let o=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAgendas=null}set _scheduleAgendas(e){this.__scheduleAgendas=e,this.requestUpdate()}get _scheduleAgendas(){return this.__scheduleAgendas}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/edit/agendas?meeting-event-id=${this.meetingEventId}"
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
    `}firstUpdated(){}getAttendanceScheduleAgenda(){return i(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleAgenda)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAgendas=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};o.styles=[n.css`
   :host { display: block; }
  `],r([(0,s.property)({type:Array}),d("design:type",Array)],o.prototype,"DATA",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"CLIENT_ID",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"meetingEventId",void 0),o=r([(0,s.customElement)("attendance-setup-view-one-agenda"),d("design:paramtypes",[])],o)},65458:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneAttachment:()=>o}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(72404)),c=a(48485),r=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let o=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAttachments=null}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
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
    `}firstUpdated(){}getAttendanceScheduleAttachment(){return i(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleAttachment)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};o.styles=[n.css`
   :host { display: block; }
  `],r([(0,s.property)({type:Array}),d("design:type",Array)],o.prototype,"DATA",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"CLIENT_ID",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"meetingEventId",void 0),o=r([(0,s.customElement)("attendance-setup-view-one-attachment"),d("design:paramtypes",[])],o)},29451:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneBreak:()=>u}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(20706)),c=a(48485),r=a(92831),d=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleBreaks=null}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
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
              ${(0,r.getTime)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,r.getTime)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleBreak(){return o(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleBreak)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Array}),i("design:type",Array)],u.prototype,"DATA",void 0),d([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"meetingEventId",void 0),u=d([(0,s.customElement)("attendance-setup-view-one-break"),i("design:paramtypes",[])],u)},69439:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneDate:()=>o}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(8698)),c=a(48485),r=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let o=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDates=null}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
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
    `}firstUpdated(){}getAttendanceScheduleDate(){return i(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleDate)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};o.styles=[n.css`
   :host { display: block; }
  `],r([(0,s.property)({type:Array}),d("design:type",Array)],o.prototype,"DATA",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"CLIENT_ID",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"meetingEventId",void 0),o=r([(0,s.customElement)("attendance-setup-view-one-date"),d("design:paramtypes",[])],o)},66716:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneDay:()=>p}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(67824)),c=a(24173),r=a(11148),d=a(58881),i=a(48485),o=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let p=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDays=null}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDay()}))}disconnectedCallback(){}render(){return n.html`
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
                      Start Date
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
              ${(0,d.until)(this.getDayOfWeek(e.dayId),n.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.getDate)(e.startDate,{dateStyle:"medium"})}
              ${t+1==a.length?"...":""}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.getDate)(e.endDate,{dateStyle:"medium"})}
              ${t+1==a.length?"...":""}
            </td>
          </tr>
        `))}
    `}firstUpdayd(){}getAttendanceScheduleDay(){return h(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=5");null===e?this._scheduleDays=void 0:Array.isArray(e.response.data)&&(this._scheduleDays=e.response.data)}))}getDayOfWeek(e){return h(this,void 0,void 0,(function*(){const t=yield(0,r.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};p.styles=[n.css`
   :host { display: block; }
  `],o([(0,s.property)({type:Array}),u("design:type",Array)],p.prototype,"DATA",void 0),o([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"CLIENT_ID",void 0),o([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"meetingEventId",void 0),p=o([(0,s.customElement)("attendance-setup-view-one-day"),u("design:paramtypes",[])],p)},24657:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneGroup:()=>h}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(34843)),c=a(58881),r=a(2892),d=a(48485),i=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleGroups=null}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleGroup()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${d.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
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
              ${(0,c.until)(this.getGroup(e.groupId),n.html`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpgroupd(){}getAttendanceScheduleGroup(){return u(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroup(e){return u(this,void 0,void 0,(function*(){const t=yield(0,r.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),o("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-group"),o("design:paramtypes",[])],h)},51052:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneSchedule:()=>f}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(52218)),c=a(35663),r=a(96404),d=a(40028),i=a(58881),o=a(92831),u=a(48485),h=a(94481),p=a(5029),m=(a(55996),a(66716),a(69439),a(24657),a(18420),a(29451),a(22353),a(39375),a(26489),a(47720),a(65458),a(47790)),_=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let f=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__schedule=null}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return null===this._schedule?n.html`
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
            <a href="${u.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}">
              <mwc-button class="button warning mr-2">Categories</mwc-button>
            </a>
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
            ${(0,o.getTime)(e.startTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Close Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,o.getTime)(e.closeTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Lateness Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,o.getTime)(e.latenessTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
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
                
            <a href="${u.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}">
              <mwc-button class="button success mr-2">Agenda(s)</mwc-button>
            </a>
            ${""}
          </td>
        </tr>
      `}firstUpdated(){}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getType(e){return v(this,void 0,void 0,(function*(){const t=yield(0,d.GET_MeetingEventTypes)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMemberType(e){return v(this,void 0,void 0,(function*(){const t=yield(0,m.GET_MeetingEventMemberTypes)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLinkType(e){return v(this,void 0,void 0,(function*(){const t=yield(0,c.GET_MeetingEventLinkTypes)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLocation(e){return v(this,void 0,void 0,(function*(){const t=yield(0,r.GET_MeetingEventLocations)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}deleteMeetingEvent(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_MeetingEvent)(t)}))}deleteMeetingEventAgendaFile(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_MeetingEventAgendaFile)(t)}))}createRenderRoot(){return this}};f.styles=[n.css`
   :host { display: block; }
  `],_([(0,s.property)({type:Array}),b("design:type",Array)],f.prototype,"DATA",void 0),_([(0,s.property)({type:Number}),b("design:type",Number)],f.prototype,"CLIENT_ID",void 0),_([(0,s.property)({type:Number}),b("design:type",Number)],f.prototype,"meetingEventId",void 0),f=_([(0,s.customElement)("attendance-setup-view-one-schedule"),b("design:paramtypes",[])],f)},47720:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneLocation:()=>o}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(606)),c=a(48485),r=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let o=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleLocations=null}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
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
    `}firstUpdated(){}getAttendanceScheduleLocation(){return i(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleLocation)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};o.styles=[n.css`
   :host { display: block; }
  `],r([(0,s.property)({type:Array}),d("design:type",Array)],o.prototype,"DATA",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"CLIENT_ID",void 0),r([(0,s.property)({type:Number}),d("design:type",Number)],o.prototype,"meetingEventId",void 0),o=r([(0,s.customElement)("attendance-setup-view-one-location"),d("design:paramtypes",[])],o)},22353:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneMember:()=>h}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(58881)),c=a(55524),r=a(26656),d=a(48485),i=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleMembers=null}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${d.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
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
              ${(0,l.until)(this.getMember(e.memberId),n.html`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleMember(){return u(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleMember)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMember(e){return u(this,void 0,void 0,(function*(){const t=yield(0,r.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),o("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-member"),o("design:paramtypes",[])],h)},55996:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneSMS:()=>u}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(72482)),c=a(92831),r=a(48485),d=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSMSs=null}set _scheduleSMSs(e){this.__scheduleSMSs=e,this.requestUpdate()}get _scheduleSMSs(){return this.__scheduleSMSs}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSMS()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
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
              ${(0,c.getTime)(e.alertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
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
              ${(0,c.getTime)(e.attendeeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.getTime)(e.absenteeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.absenteeAlertMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleSMS(){return o(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleSMS)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSMSs=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Array}),i("design:type",Array)],u.prototype,"DATA",void 0),d([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Number}),i("design:type",Number)],u.prototype,"meetingEventId",void 0),u=d([(0,s.customElement)("attendance-setup-view-one-sms"),i("design:paramtypes",[])],u)},26489:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOneSubgroup:()=>h}),a(45501);var n=a(85862),s=a(59662),l=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(92715),a(88786)),c=a(58881),r=a(89605),d=a(48485),i=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,a,n){return new(a||(a=Promise))((function(s,l){function c(e){try{d(n.next(e))}catch(e){l(e)}}function r(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}d((n=n.apply(e,t||[])).next())}))};let h=class extends n.LitElement{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSubgroups=null}set _scheduleSubgroups(e){this.__scheduleSubgroups=e,this.requestUpdate()}get _scheduleSubgroups(){return this.__scheduleSubgroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){return n.html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${d.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
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
              ${(0,c.until)(this.getSubGroup(e.subGroupId),n.html`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpsubgroupd(){}getAttendanceScheduleSubGroup(){return u(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSubgroups=null===e?void 0:e.paginResponse}))}getSubGroup(e){return u(this,void 0,void 0,(function*(){const t=yield(0,r.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};h.styles=[n.css`
   :host { display: block; }
  `],i([(0,s.property)({type:Array}),o("design:type",Array)],h.prototype,"DATA",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"CLIENT_ID",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"meetingEventId",void 0),h=i([(0,s.customElement)("attendance-setup-view-one-subgroup"),o("design:paramtypes",[])],h)},64574:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AttendanceSetupViewOne:()=>i}),a(45501);var n,s=a(85862),l=a(59662),c=(a(23283),a(51511),a(43690),a(71854),a(16883),a(30367),a(51052),a(44672)),r=function(e,t,a,n){var s,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(l<3?s(c):l>3?s(t,a,c):s(t,a))||c);return l>3&&c&&Object.defineProperty(t,a,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,s=function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.urlQueryParams)(),this.getMeetingEventId()},new((n=void 0)||(n=Promise))((function(e,l){function c(e){try{d(s.next(e))}catch(e){l(e)}}function r(e){try{d(s.throw(e))}catch(e){l(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(c,r)}d((s=s.apply(t,a||[])).next())}));var t,a,n,s}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return s.html`<div class="row">
      <div class="col-md-12 my-2">
        <attendance-setup-view-one-schedule CLIENT_ID="${this.CLIENT_ID}" 
          meetingEventId="${this.meetingEventId}">
        </attendance-setup-view-one-schedule>
      </div>
    </div>`}firstUpdated(){}getMeetingEventId(){let e=(0,c.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};i.styles=[s.css`
   :host { display: block; }
  `],r([(0,l.property)({type:Number}),d("design:type",Number)],i.prototype,"CLIENT_ID",void 0),r([(0,l.property)({type:Array}),d("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],i.prototype,"_data",void 0),r([(0,l.property)({type:Object}),d("design:type",Object)],i.prototype,"urlQueryParams",void 0),r([(0,l.property)({type:Number}),d("design:type",Number)],i.prototype,"meetingEventId",void 0),i=r([(0,l.customElement)("attendance-setup-view-one"),d("design:paramtypes",[])],i)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_network_attendance_setup_sub-b7b953","src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-4bed11","shared"],(()=>(13922,e(e.s=13922)))),e.O())])));
//# sourceMappingURL=schedule.js.map