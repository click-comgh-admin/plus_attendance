"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-attachment"],{7909:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAttachment:()=>u});var s=n(6455),i=n.n(s),a=n(8485),r=n(7270),o=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment/"+e,s={};return i().fire({title:"Remove Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new o.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2404:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAttachment:()=>o});var s=n(8485),i=n(7270),a=n(4492),r=n(3600);function o(e=null,t=""){return n=this,o=void 0,l=function*(){const n=(0,r.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,c=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{a(l.next(e))}catch(e){t(e)}}function i(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,i)}a((l=l.apply(n,o||[])).next())}));var n,o,c,l}},5217:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAttachment:()=>u});var s=n(6455),i=n.n(s),a=n(8485),r=n(7270),o=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment",n=document.querySelector('[make-general-posts="add-schedule-attachment"]'),s=new FormData(n);return i().fire({title:"Add Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:a=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new o.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},3731:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAttachment:()=>h}),n(3076),n(3683),n(4657);var s=n(4108),i=n(5862),a=n(9662),r=(n(3261),n(8693),n(7712)),o=n(1354),c=n(1302),l=n(7108),d=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{c(a.next(e))}catch(e){s(e)}}function o(e){try{c(a.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}c((a=a.apply(t,n||[])).next())}));var t,n,i,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(l.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-attachment CLIENT_ID="${this.clientId}"></attendance-setup-form-attachment>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,a.property)({type:String}),u("design:type",String)],h.prototype,"email",void 0),d([(0,a.property)({type:Number}),u("design:type",Number)],h.prototype,"mId",void 0),d([(0,a.property)({type:Number}),u("design:type",Number)],h.prototype,"clientId",void 0),d([(0,a.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_hasSetup",void 0),d([(0,a.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_pageButtonAccess",void 0),h=d([(0,a.customElement)("attendance-setup-form-edit-attachment"),u("design:paramtypes",[])],h)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>l});var s=n(5862),i=n(9662),a=(n(2715),n(8485)),r=n(4672),o=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};l.styles=[s.css`
   :host { display: block; }
  `],o([(0,i.property)({type:Number}),c("design:type",Number)],l.prototype,"meetingEventId",void 0),l=o([(0,i.customElement)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],l)},3261:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAttachment:()=>v}),n(5501);var s,i,a=n(5862),r=n(9662),o=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),c=n(2404),l=n(2218),d=n(4672),u=n(7909),h=n(6262),m=(n(5866),n(5217)),p=n(3600),f=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}c((s=s.apply(e,t||[])).next())}))};let v=class extends a.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__attachmentUser=null,this.__schedule=null,this.__scheduleAttachments=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _attachmentUser(e){this.__attachmentUser=e,this.requestUpdate()}get _attachmentUser(){return this.__attachmentUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return a.html`${this.schedule}`}get schedule(){return null===this._schedule?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?a.html`${this.scheduleAttachment}`:a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAttachment(){return null===this._scheduleAttachments?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAttachments?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Attachment</span>: undefined error</h4>
          </div>
        </div>
      `:a.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.html`${this.table}`}get table(){return this._scheduleAttachments.results.length>0?a.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Attachment">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Attachment
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
                ${this.getMeetingAttendanceAttachments}
              </tbody>
            </table>
          </div>
        </div>
      `:a.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAttachments(){return a.html`
      ${this._scheduleAttachments.results.map(((e,t)=>a.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${e.attachment}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAttachment}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return a.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Attachment</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Attachment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-attachment">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Attachment" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return(0,p.getUserLoginInfoCookie)().token,a.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="attachment" name="attachment" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}attachmentFieldDefault(e){return a.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.attachmentField}
        attachmentField-id="${e}" no_delete></multiple-widgets>
    `}addAttachmentField(){const e=this.showAttachmentFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAttachmentFieldAllSelector.children[e-1].getAttribute("attachmentField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("attachmentField-id",String(t)),this.showAttachmentFieldAllSelector.append(n);const s=this.showAttachmentFieldAllSelector.querySelectorAll('multiple-widgets[attachmentField-id="'+t+'"]'),i=this.attachmentField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new o.MDCDataTable(e)}))}getAttachmentUsers(){return g(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUsers)();this._attachmentUser=null===e?void 0:e.paginResponse}))}getAttachmentUser(e){return g(this,void 0,void 0,(function*(){const t=yield(0,h.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_AttendanceAddScheduleAttachment)()}))}deleteQuestionnaireMeetingAttendanceAttachment(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleAttachment)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,s=e.results,i=document.querySelector('[id="attachment"]');let a=[];if(n>0){var r=s;for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};a.includes(n)||a.push(n)}}return{results:a,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return g(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAttachment(){return g(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleAttachment)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};v.styles=[a.css`
   :host { display: block; }
  `],f([(0,r.property)({type:Number}),_("design:type",Number)],v.prototype,"CLIENT_ID",void 0),f([(0,r.property)({type:Number}),_("design:type",Number)],v.prototype,"startSearchPage",void 0),f([(0,r.property)({type:Array}),_("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],v.prototype,"_data",void 0),f([(0,r.property)({type:Object}),_("design:type",Object)],v.prototype,"urlQueryParams",void 0),f([(0,r.property)({type:Number}),_("design:type",Number)],v.prototype,"meetingEventId",void 0),f([(0,r.query)('[show-attachmentField="all"]'),_("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],v.prototype,"showAttachmentFieldAllSelector",void 0),v=f([(0,r.customElement)("attendance-setup-form-attachment"),_("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-231986","src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_url_query_params_i-a30b73","shared"],(()=>(3731,e(e.s=3731)))),e.O())])));
//# sourceMappingURL=edit-attachment.js.map