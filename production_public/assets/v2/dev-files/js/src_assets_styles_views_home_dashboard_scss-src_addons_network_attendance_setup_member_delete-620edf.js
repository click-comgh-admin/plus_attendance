"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_home_dashboard_scss-src_addons_network_attendance_setup_member_delete-620edf"],{26660:(e,t,n)=>{n.r(t)},38304:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleMember:()=>u});var o=n(86455),r=n.n(o),c=n(48485),s=n(87270),i=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,o={};return r().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new i.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new i.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},33512:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleMember:()=>u});var o=n(86455),r=n.n(o),c=n(48485),s=n(87270),i=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",n=document.querySelector('[make-general-posts="add-schedule-member"]'),o=new FormData(n);return r().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:c=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>i});var o=n(48485),r=n(87270),c=n(14492),s=n(33600);function i(e=null,t=""){return n=this,i=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),i=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,a=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new c.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{c(l.next(e))}catch(e){t(e)}}function r(e){try{c(l.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,r)}c((l=l.apply(n,i||[])).next())}));var n,i,a,l}},71725:(e,t,n)=>{n.r(t),n.d(t,{ScheduleTitleCard:()=>u}),n(23283),n(75866);var o=n(85862),r=n(48485),c=n(33600),s=n(59662),i=n(52218),a=function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};let u=class extends o.LitElement{constructor(){super(),this.meetingEventId=0,this.CLIENT_ID=0,this.startSearchPage=0,this.__schedule=null}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){var e;return o.html`
      <div class="flex justify-end">
        <div class="col-md-6 col-lg-4 px-0 my-2">
          <div class="m-1 border rounded-md">
            <div class="p-2 shadow-sm border rounded-md">
              <h4 class="text-lg font-bold">${`${(null!==(e=this.currentMeetingEventName)&&void 0!==e?e:null==this._schedule)?"...":this._schedule.data.name}`.replace(/\b\w/g,(e=>e.toUpperCase()))}</h4>
            </div>
            <div class="p-2">
              ${this.meetingEventField}
            </div>
            <div class="p-2 shadow-sm border rounded-md">
              <div class="flex justify-end ">
                <mwc-button raised class="button success" @click="${this.changeCurrentSchedule}">
                  Change Meeting/ Event
                </mwc-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}get meetingEventField(){let e={};const t=(0,c.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,o.html`
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-12">
            <h4 class="font-semibold my-2">Select Meeting/ Event</h4>
            <select-input class="w-100" id="change_schedule_input_box" name="change_schedule_input_box" label="Select Schedule"
              .ajaxFetchProcessResponse="${this.processClientScheduleSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${r.CONSTANTS.URLS.AKWAABA_API_BASE_URL}attendance/meeting-event/schedule"></select-input>
          </div>
        </div>
      </div>
    `}processClientScheduleSearch(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="change_schedule_input_box"]');let c=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.name};c.includes(n)||c.push(n)}}return{results:c,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"isRecuring",value:"both"},{param:"branchId",value:String((0,c.getUserLoginInfoCookie)().user.branchId)}]}changeCurrentSchedule(e){e.preventDefault(),this.querySelectorAll('[id="change_schedule_input_box"][name="change_schedule_input_box"]').forEach((e=>{if(e.value.length>0){const t=window.location.href,n=new URL(t);n.searchParams.set("meeting-event-id",e.value),window.location.href=n}}))}getAttendanceSchedule(){return d(this,void 0,void 0,(function*(){const e=yield(0,i.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}createRenderRoot(){return this}};u.styles=[o.css`
   :host { display: block; }
  `],a([(0,s.property)({type:String}),l("design:type",String)],u.prototype,"currentMeetingEventName",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"meetingEventId",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"startSearchPage",void 0),u=a([(0,s.customElement)("schedule-title-card"),l("design:paramtypes",[])],u)}}]);
//# sourceMappingURL=src_assets_styles_views_home_dashboard_scss-src_addons_network_attendance_setup_member_delete-620edf.js.map