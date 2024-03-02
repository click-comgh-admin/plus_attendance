"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/list-agendas"],{45501:(e,t,n)=>{n.r(t)},96951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>s,getDateTime:()=>a});const s=(e="")=>{let t=new Date,n=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),i=t.getHours(),o=t.getMinutes(),r=t.getSeconds(),l=n+"-"+s+"-"+a,d=i+":"+o+":"+r;return{dateTime:new Date(n,s,a,i,o,r),__string__:l+" "+d,__code__:n+s+a+i+o+r}},a=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>s,https_swal_error_format:()=>a});const s="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",a=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?s:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>a,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>o});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},a=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},i=e=>new URLSearchParams(window.location.search).getAll(e),o=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},39904:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAgenda:()=>u});var s=n(86455),a=n.n(s),i=n(48485),o=n(87270),r=n(14492),l=n(8967),d=n(33600),c=function(e,t,n,s){return new(n||(n=Promise))((function(a,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function r(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((s=s.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,d.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda/"+e,s={};return a().fire({title:"Remove Meeting Date Agenda?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new r.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new r.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}a().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},10540:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAgenda:()=>l});var s=n(48485),a=n(87270),i=n(14492),o=n(33600),r=function(e,t,n,s){return new(n||(n=Promise))((function(a,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function r(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((s=s.apply(e,t||[])).next())}))};function l(e=null,t=""){return r(this,void 0,void 0,(function*(){const n=(0,o.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===e?"":"/"+e)+t,l=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}}))}},17108:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>s});const s={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>d});var s=n(85862),a=n(59662),i=(n(92715),n(48485)),o=n(44672),r=function(e,t,n,s){var a,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
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
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${i.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,o.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[s.css`
   :host { display: block; }
  `],r([(0,a.property)({type:Number}),l("design:type",Number)],d.prototype,"meetingEventId",void 0),d=r([(0,a.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],d)},24189:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormViewAgendas:()=>_}),n(45501),n(43683),n(74657),n(23283),n(16413),n(51511);var s=n(96951),a=n(85862),i=n(59662),o=n(29068),r=n(27712),l=n(91354),d=n(41302),c=n(17108),u=n(39904),m=(n(8693),n(10540)),g=n(44672),b=n(48485),h=(n(92715),function(e,t,n,s){var a,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}),p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,s){return new(n||(n=Promise))((function(a,i){function o(e){try{l(s.next(e))}catch(e){i(e)}}function r(e){try{l(s.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}l((s=s.apply(e,t||[])).next())}))};let _=class extends a.LitElement{constructor(){super(),this.meetingEventId=0,this._hasSetup=!1,this._pageButtonAccess=!1,this.__scheduleAgendas=null}set _scheduleAgendas(e){this.__scheduleAgendas=e,this.requestUpdate()}get _scheduleAgendas(){return this.__scheduleAgendas}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return a.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,d.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,d.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return a.html`<no-page-entry-component></no-page-entry-component>`}return a.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <div class="m-1 w-full flex justify-end">
          <link-button isblockcontent="false" aClass="" bClass="button info mr-2" raised
            href="${b.CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda-add?meeting-event-id=${this.meetingEventId}"
            label="Add Agenda"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `}get display(){return a.html`${this.table}`}get table(){var e;return(null===(e=this._scheduleAgendas)||void 0===e?void 0:e.results.length)>0?a.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Agenda">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Agenda
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
                ${this.getMeetingAttendanceAgendas}
              </tbody>
            </table>
          </div>
        </div>
      `:null===this._scheduleAgendas?a.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `:a.html`
        <div class="flex justify-center shadow bg-white">
          <h3 class="font-bold">No Agenda(s) Found!</h3>
        </div>
      `}get getMeetingAttendanceAgendas(){return a.html`
      ${this._scheduleAgendas.results.map(((e,t)=>{const n=(0,s.getDateTime)(e.meetingDate,{dateStyle:"medium"});return a.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              Agenda for <b>${n}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="flex flex-col md:flex-row justify-end whitespace-normal">
                <div class="m-1">
                  <link-button isblockcontent="false" aClass="" bClass="button success mr-2" raised
                    href="${b.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${e.id}"
                    label="Open"></link-button>
                </div>
                <div class="m-1">
                  <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
                    href="${b.CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${e.id}"
                    label="Update"></link-button>
                </div>
                <div class="m-1">
                  <mwc-icon-button class="ml-1 danger rounded-full" icon="delete_forever" delete-this-item="${e.id}" 
                    @click="${this.deleteQuestionnaireMeetingAttendanceAgenda}">
                  </mwc-icon-button>
                </div>
              </div>
            </td>
          </tr>
        `}))}
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new o.MDCDataTable(e)}))}getMeetingEventId(){let e=(0,g.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceScheduleAgenda(){return f(this,void 0,void 0,(function*(){const e=yield(0,m.GET_AttendanceScheduleAgenda)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAgendas=null===e?void 0:e.paginResponse}))}deleteQuestionnaireMeetingAttendanceAgenda(e){return f(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleAgenda)(t)}))}createRenderRoot(){return this}};h([(0,i.property)({type:String}),p("design:type",String)],_.prototype,"email",void 0),h([(0,i.property)({type:Number}),p("design:type",Number)],_.prototype,"mId",void 0),h([(0,i.property)({type:Number}),p("design:type",Number)],_.prototype,"clientId",void 0),h([(0,i.property)({type:Number}),p("design:type",Number)],_.prototype,"meetingEventId",void 0),h([(0,i.property)({type:Boolean}),p("design:type",Boolean)],_.prototype,"_hasSetup",void 0),h([(0,i.property)({type:Boolean}),p("design:type",Boolean)],_.prototype,"_pageButtonAccess",void 0),_=h([(0,i.customElement)("attendance-setup-form-view-agendas"),p("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.material","vendors.lit","vendors.lit-element","vendors.buffer","vendors.tslib","vendors.sweetalert2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(24189,e(e.s=24189)))),e.O())])));
//# sourceMappingURL=list-agendas.js.map