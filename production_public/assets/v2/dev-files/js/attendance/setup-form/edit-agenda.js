"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-agenda"],{18264:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceUpdateScheduleAgenda:()=>u});var s=n(86455),i=n.n(s),a=n(48485),r=n(87270),o=n(14492),d=n(8967),c=n(33600),l=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{d(s.next(e))}catch(e){a(e)}}function o(e){try{d(s.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}d((s=s.apply(e,t||[])).next())}))};function u(e){return l(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda/"+e,s=document.querySelector('[make-general-posts="add-schedule-agenda"]'),u=new FormData(s);return i().fire({title:"Update Meeting Date Agenda?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"PATCH",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new o.NetWorkCallResponses("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,d.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>o});var s=n(48485),i=n(87270),a=n(14492),r=n(33600);function o(e=null,t=""){return n=this,o=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,d=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function s(e){try{a(c.next(e))}catch(e){t(e)}}function i(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(s,i)}a((c=c.apply(n,o||[])).next())}));var n,o,d,c}},48034:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAgenda:()=>p}),n(69579),n(43683),n(74657);var s=n(14108),i=n(85862),a=n(59662),r=(n(16643),n(8693),n(27712)),o=n(91354),d=n(41302),c=n(17108),l=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{d(a.next(e))}catch(e){s(e)}}function o(e){try{d(a.throw(e))}catch(e){s(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}d((a=a.apply(t,n||[])).next())}));var t,n,i,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,d.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,d.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-agenda-edit CLIENT_ID="${this.clientId}"></attendance-setup-form-agenda-edit>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};l([(0,a.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),l([(0,a.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),l([(0,a.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),l([(0,a.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),l([(0,a.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=l([(0,a.customElement)("attendance-setup-form-edit-agenda"),u("design:paramtypes",[])],p)},16643:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAgendaEdit:()=>m}),n(45501);var s,i=n(85862),a=n(59662),r=(n(23283),n(36034),n(63313),n(16413),n(51511),n(37725),n(10540)),o=n(52218),d=n(44672),c=n(37234),l=n(18264),u=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{d(s.next(e))}catch(e){a(e)}}function o(e){try{d(s.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}d((s=s.apply(e,t||[])).next())}))};let m=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.__agendaUser=null,this.__schedule=null,this.__scheduleAgenda=null,this._data=[],this.urlQueryParams=void 0,this.meetingAgendaId=0,this.meetingEventId=0}set _agendaUser(e){this.__agendaUser=e,this.requestUpdate()}get _agendaUser(){return this.__agendaUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),this.getMeetingAgendaId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._schedule?i.html`
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
      `}get scheduleAgenda(){return null===this._scheduleAgenda?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgenda?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
        ${this.form}
      `}get form(){var e;const t=this.__scheduleAgenda;let n="";if(t.meetingDate){const e=new Date(t.meetingDate).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");n=[e[2],e[0],e[1]].join("-")}return i.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Meeting/ Event Scheduled Agenda</h1>
                  <h3 class="h3">Update Meeting/ Event Scheduled Agenda!</h3>
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
                    <mwc-textfield name="" type="date" class="w-full" id="" disabled
                      .value="${n}" label="Select Meeting Date" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${void 0===(null==t?void 0:t.id)?"":null==t?void 0:t.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${null!==(e=this.meetingEventId)&&void 0!==e?e:0}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update Agenda" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return h(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,l.PUT_AttendanceUpdateScheduleAgenda)(this.meetingAgendaId)}))}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,d.urlQueryParamsGet)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return h(this,void 0,void 0,(function*(){const e=yield(0,o.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAgenda(){return h(this,void 0,void 0,(function*(){const e=yield(0,r.GET_AttendanceScheduleAgenda)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,n=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=c.Convert.toMeetingAgendaModel(JSON.stringify(n))}}))}createRenderRoot(){return this}};m.styles=[i.css`
   :host { display: block; }
  `],u([(0,a.property)({type:Number}),p("design:type",Number)],m.prototype,"CLIENT_ID",void 0),u([(0,a.property)({type:Array}),p("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],m.prototype,"_data",void 0),u([(0,a.property)({type:Object}),p("design:type",Object)],m.prototype,"urlQueryParams",void 0),u([(0,a.property)({type:Number}),p("design:type",Number)],m.prototype,"meetingAgendaId",void 0),u([(0,a.property)({type:Number}),p("design:type",Number)],m.prototype,"meetingEventId",void 0),m=u([(0,a.customElement)("attendance-setup-form-agenda-edit"),p("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_assets_styles_views_widget_simple-table_main_scss-src_addons_interfaces_attendance_agenda-6585a2","shared"],(()=>(48034,e(e.s=48034)))),e.O())])));
//# sourceMappingURL=edit-agenda.js.map