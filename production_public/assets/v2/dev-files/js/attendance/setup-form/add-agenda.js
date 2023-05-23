"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/add-agenda"],{5501:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>a,urlQueryParamsJoin:()=>r});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},a=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},4183:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAgenda:()=>u});var s=n(6455),i=n.n(s),a=n(8485),r=n(7270),o=n(4492),l=n(8967),d=n(3600),c=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};function u(){return c(this,void 0,void 0,(function*(){const e=(0,d.getUserLoginInfoCookie)(),t=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda",n=document.querySelector('[make-general-posts="add-schedule-agenda"]'),s=new FormData(n);return i().fire({title:"Add Meeting Date Agenda?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:a=>c(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new o.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},157:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAddAgenda:()=>m}),n(3076),n(3683),n(4657);var s=n(4108),i=n(5862),a=n(9662),r=(n(1862),n(8693),n(7712)),o=n(1354),l=n(1302),d=n(7108),c=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}l((a=a.apply(t,n||[])).next())}));var t,n,i,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(d.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-agenda-add CLIENT_ID="${this.clientId}"></attendance-setup-form-agenda-add>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};c([(0,a.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),c([(0,a.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),c([(0,a.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),c([(0,a.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),c([(0,a.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=c([(0,a.customElement)("attendance-setup-form-add-agenda"),u("design:paramtypes",[])],m)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>d});var s=n(5862),i=n(9662),a=(n(2715),n(8485)),r=n(4672),o=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[s.css`
   :host { display: block; }
  `],o([(0,i.property)({type:Number}),l("design:type",Number)],d.prototype,"meetingEventId",void 0),d=o([(0,i.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],d)},1862:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAgendaAdd:()=>m}),n(5501);var s,i=n(5862),a=n(9662),r=(n(3283),n(6034),n(3313),n(6413),n(1511),n(2461),n(2218)),o=n(4672),l=(n(5866),n(4183)),d=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};let m=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.__agendaUser=null,this.__schedule=null,this.__scheduleAgendas=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _agendaUser(e){this.__agendaUser=e,this.requestUpdate()}get _agendaUser(){return this.__agendaUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAgendas(e){this.__scheduleAgendas=e,this.requestUpdate()}get _scheduleAgendas(){return this.__scheduleAgendas}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._schedule?i.html`
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
      `:!0===this._schedule.success?i.html`${this.scheduleAgenda}`:i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAgenda(){return i.html`
      ${this.form}
    `}get form(){return i.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Agenda</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Agenda!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-agenda">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="attachment" name="attachment" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Meeting Date</h4>
                    <mwc-textfield name="meetingDate" type="date" class="w-full" id="meetingDate"
                      value="" label="Select Meeting Date" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="" outlined required>
                    </mwc-textarea>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Agenda" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return u(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,l.POST_AttendanceAddScheduleAgenda)()}))}getMeetingEventId(){let e=(0,o.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return u(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}createRenderRoot(){return this}};m.styles=[i.css`
   :host { display: block; }
  `],d([(0,a.property)({type:Number}),c("design:type",Number)],m.prototype,"CLIENT_ID",void 0),d([(0,a.property)({type:Array}),c("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],m.prototype,"_data",void 0),d([(0,a.property)({type:Object}),c("design:type",Object)],m.prototype,"urlQueryParams",void 0),d([(0,a.property)({type:Number}),c("design:type",Number)],m.prototype,"meetingEventId",void 0),m=d([(0,a.customElement)("attendance-setup-form-agenda-add"),c("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-231986","shared"],(()=>(157,e(e.s=157)))),e.O())])));
//# sourceMappingURL=add-agenda.js.map