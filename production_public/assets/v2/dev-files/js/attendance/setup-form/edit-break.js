"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-break"],{3076:(e,t,n)=>{n.r(t)},2831:(e,t,n)=>{n.r(t),n.d(t,{getLocalTime:()=>r,getTime:()=>s});const s=e=>{const t=new Date,n=`${t.getFullYear()}/${t.getMonth()}/${t.getDate()} ${e}`;return console.log({time:e,__time:t,_DateString:n}),new Date(n)},r=(e,t)=>void 0===e?"-":e.toLocaleTimeString("en-US",t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>s,https_swal_error_format:()=>r});const s="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?s:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>l});var s=n(8485),r=n(7270),i=n(7052),o=n(1942),a=function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function a(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const l=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,o.get_cookie)(d),m=JSON.stringify({token:(0,i.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,o.get_cookie)(d+"_date"))))return u;yield(0,r.http)(l,{method:"POST",body:m},!0).then((s=>a(void 0,void 0,void 0,(function*(){if(s.jsonData.token&s.jsonData.user&s.jsonData.expiry){const e=(0,i.base64Encode)(String(s.jsonData.token));(0,o.set_cookies)(d,e,10),(0,o.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,n)}))))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,r.http)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,i.base64Encode)(String(e.jsonData.token));(0,o.set_cookies)(l,t,10),(0,o.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const s=(0,i.base64Encode)(String(t)),r=n;window.supersecret={unknowable:{ops:{email:e,id:s,cookieName:r}}},""==(0,o.get_cookie)(r)?yield c(e,s,n):yield l(e,s,n)}))},8729:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleBreak:()=>u});var s=n(6455),r=n.n(s),i=n(8485),o=n(7270),a=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function a(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break/"+e,s={};return r().fire({title:"Remove Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new a.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},706:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleBreak:()=>a});var s=n(8485),r=n(7270),i=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,r)}i((c=c.apply(n,a||[])).next())}));var n,a,l,c}},3444:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleBreak:()=>u});var s=n(6455),r=n.n(s),i=n(8485),o=n(7270),a=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function a(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break",n=document.querySelector('[make-general-posts="add-schedule-break"]'),s=new FormData(n);return r().fire({title:"Setup Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let s=e;s.error=t;const r=new a.NetWorkCallResponses("post",s,!0,n);return r.postForm,r}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>a});var s=n(8485),r=n(7270),i=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,r)}i((c=c.apply(n,a||[])).next())}));var n,a,l,c}},8951:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditBreak:()=>m}),n(3076),n(3683),n(4657);var s=n(4108),r=n(5862),i=n(9662),o=(n(6723),n(8693),n(7712)),a=n(1354),l=n(1302),c=n(7108),d=function(e,t,n,s){var r,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends r.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,o.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}l((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return r.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-break CLIENT_ID="${this.clientId}"></attendance-setup-form-break>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,i.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),d([(0,i.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),d([(0,i.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),d([(0,i.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),d([(0,i.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=d([(0,i.customElement)("attendance-setup-form-edit-break"),u("design:paramtypes",[])],m)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var s=n(5862),r=n(9662),i=(n(2715),n(8485)),o=n(4672),a=function(e,t,n,s){var r,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,o.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[s.css`
   :host { display: block; }
  `],a([(0,r.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,r.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)},6723:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormBreak:()=>_}),n(5501);var s,r,i=n(5862),o=n(9662),a=(n(3283),n(1511),n(3690),n(1854),n(9068)),l=n(2831),c=n(706),d=n(2218),u=n(4672),m=n(8729),h=n(6262),f=(n(5866),n(3444)),p=n(3600),b=function(e,t,n,s){var r,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,s){return new(n||(n=Promise))((function(r,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function a(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};let _=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__breakUser=null,this.__schedule=null,this.__scheduleBreaks=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _breakUser(e){this.__breakUser=e,this.requestUpdate()}get _breakUser(){return this.__breakUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._schedule?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?i.html`${this.scheduleBreak}`:i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleBreak(){return null===this._scheduleBreaks?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleBreaks?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.html`${this.table}`}get table(){return this._scheduleBreaks.results.length>0?i.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Break">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Time
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
                ${this.getMeetingAttendanceBreaks}
              </tbody>
            </table>
          </div>
        </div>
      `:i.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceBreaks(){return i.html`
      ${this._scheduleBreaks.results.map((e=>i.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,l.getTime)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,l.getTime)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceBreak}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return i.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Break</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Break!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-break">
                <div class="p-0 m-0" show-breakField="all">
                  ${this.breakFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Break" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get breakField(){return(0,p.getUserLoginInfoCookie)().token,i.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startBreak" type="time" class="w-full" id="startBreak" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Time</h4> 
            <mwc-textfield name="endBreak" type="time" class="w-full" id="endBreak" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}breakFieldDefault(e){return i.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${e}" no_delete></multiple-widgets>
    `}addBreakField(){const e=this.showBreakFieldAllSelector.children.length,t=(0===e?-1:Number(this.showBreakFieldAllSelector.children[e-1].getAttribute("breakField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("breakField-id",String(t)),this.showBreakFieldAllSelector.append(n);const s=this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+t+'"]'),r=this.breakField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}getBreakUsers(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUsers)();this._breakUser=null===e?void 0:e.paginResponse}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,f.POST_AttendanceAddScheduleBreak)()}))}deleteQuestionnaireMeetingAttendanceBreak(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleBreak)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,s=e.results,r=document.querySelector('[id="breakId"]');let i=[];if(n>0){var o=s;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.firstname+" "+t.surname};i.includes(n)||i.push(n)}}return{results:i,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleBreak(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleBreak)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};_.styles=[i.css`
   :host { display: block; }
  `],b([(0,o.property)({type:Number}),g("design:type",Number)],_.prototype,"CLIENT_ID",void 0),b([(0,o.property)({type:Number}),g("design:type",Number)],_.prototype,"startSearchPage",void 0),b([(0,o.property)({type:Array}),g("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],_.prototype,"_data",void 0),b([(0,o.property)({type:Object}),g("design:type",Object)],_.prototype,"urlQueryParams",void 0),b([(0,o.property)({type:Number}),g("design:type",Number)],_.prototype,"meetingEventId",void 0),b([(0,o.query)('[show-breakField="all"]'),g("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],_.prototype,"showBreakFieldAllSelector",void 0),_=b([(0,o.customElement)("attendance-setup-form-break"),g("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_url_query_params_i-a30b73","shared"],(()=>(8951,e(e.s=8951)))),e.O())])));
//# sourceMappingURL=edit-break.js.map