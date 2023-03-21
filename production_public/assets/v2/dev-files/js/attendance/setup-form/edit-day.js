"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-day"],{5501:(e,t,n)=>{n.r(t)},4947:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>s});const s=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>a,urlQueryParamsJoin:()=>r});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},a=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},1148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>o});var s=n(8485),i=n(7270),a=n(4492),r=n(3600);function o(e=null){return t=this,n=void 0,l=function*(){const t=(0,r.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),o=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,s){function i(e){try{r(l.next(e))}catch(e){s(e)}}function a(e){try{r(l.throw(e))}catch(e){s(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((l=l.apply(t,n||[])).next())}));var t,n,o,l}},963:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleDay:()=>u});var s=n(6455),i=n.n(s),a=n(8485),r=n(7270),o=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day/"+e,s={};return i().fire({title:"Remove Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new o.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>o});var s=n(8485),i=n(7270),a=n(4492),r=n(3600);function o(e=null,t=""){return n=this,o=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,l=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{a(c.next(e))}catch(e){t(e)}}function i(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,i)}a((c=c.apply(n,o||[])).next())}));var n,o,l,c}},5134:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleDay:()=>u});var s=n(6455),i=n.n(s),a=n(8485),r=n(7270),o=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day",n=document.querySelector('[make-general-posts="add-schedule-day"]'),s=new FormData(n);return i().fire({title:"Setup Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:a=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let s=e;s.error=t;const i=new o.NetWorkCallResponses("post",s,!0,n);return i.postForm,i}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message)}i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500)}}))}))}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>l});var s=n(5862),i=n(9662),a=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};let l=class extends s.LitElement{constructor(){super(),this.index=0,this._widget=s.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return s.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?s.nothing:s.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return o(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};a([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"index",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"no_delete",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"single",void 0),a([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"_single",void 0),l=a([(0,i.customElement)("multiple-widgets"),r("design:paramtypes",[])],l)},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>o});var s=n(5862),i=n(9662),a=(n(9975),n(6788),function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends s.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return s.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?s.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:s.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};o.styles=[s.css`
      :host {
        display: block;
      }
    `],a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"name",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"label",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"selected",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"value",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"isSelected",void 0),o=a([(0,i.customElement)("switch-input")],o)},5588:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditDay:()=>h}),n(3076),n(3683),n(4657);var s=n(4108),i=n(5862),a=n(9662),r=(n(8656),n(8693),n(7712)),o=n(1354),l=n(1302),c=n(7108),d=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}l((a=a.apply(t,n||[])).next())}));var t,n,i,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-day CLIENT_ID="${this.clientId}"></attendance-setup-form-day>
      </div>
    `}firstUpdayd(){}createRenderRoot(){return this}};d([(0,a.property)({type:String}),u("design:type",String)],h.prototype,"email",void 0),d([(0,a.property)({type:Number}),u("design:type",Number)],h.prototype,"mId",void 0),d([(0,a.property)({type:Number}),u("design:type",Number)],h.prototype,"clientId",void 0),d([(0,a.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_hasSetup",void 0),d([(0,a.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_pageButtonAccess",void 0),h=d([(0,a.customElement)("attendance-setup-form-edit-day"),u("design:paramtypes",[])],h)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var s=n(5862),i=n(9662),a=(n(2715),n(8485)),r=n(4672),o=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[s.css`
   :host { display: block; }
  `],o([(0,i.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=o([(0,i.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)},8656:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormDay:()=>b}),n(5501);var s,i,a=n(5862),r=n(9662),o=n(8881),l=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),c=n(7824),d=n(2218),u=n(4672),h=n(963),p=(n(5866),n(1148)),m=n(4947),f=n(5134),y=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};let b=class extends a.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__schedule=null,this.__scheduleDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleDay(),yield this.getDaysOfWeek()}))}disconnectedCallback(){}render(){return a.html`${this.schedule}`}get schedule(){return null===this._schedule?a.html`
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
      `:!0===this._schedule.success?a.html`${this.scheduleDay}`:a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleDay(){return null===this._scheduleDays?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleDays?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:a.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.html`${this.table}`}get table(){return this._scheduleDays.length>0?a.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Day">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Day
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
                ${this.getMeetingAttendanceDays}
              </tbody>
            </table>
          </div>
        </div>
      `:a.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceDays(){return a.html`
      ${this._scheduleDays.map(((e,t)=>a.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.until)(this.getDayOfWeek(e.dayId),a.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,m.getDate)(e.endDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDay}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Day</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Day!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-day">
                <div class="p-0 m-0" show-dayField="all">
                  ${this.dayFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Day" raised class="button" @click="${this.submitForm}">
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
    `}get dayField(){const e=this._daysOfWeek.map((e=>a.html`<mwc-list-item value="${e.id}">${e.day}</mwc-list-item>`));return a.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId" label="Select Day" outlined required>
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${a.html`${e}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Date</h4>
            <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate"
              label="Select Date" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}dayFieldDefault(e){return a.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.dayField}
        dayField-id="${e}" no_delete></multiple-widgets>
    `}addDayField(){const e=this.showDayFieldAllSelector.children.length,t=(0===e?-1:Number(this.showDayFieldAllSelector.children[e-1].getAttribute("dayField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("dayField-id",String(t)),this.showDayFieldAllSelector.append(n);const s=this.showDayFieldAllSelector.querySelectorAll('multiple-widgets[dayField-id="'+t+'"]'),i=this.dayField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.MDCDataTable(e)}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,f.POST_AttendanceAddScheduleDay)()}))}deleteQuestionnaireMeetingAttendanceDay(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_AttendanceDeleteScheduleDay)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getDaysOfWeek(){return v(this,void 0,void 0,(function*(){const e=yield(0,p.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return v(this,void 0,void 0,(function*(){const t=yield(0,p.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};b.styles=[a.css`
   :host { display: block; }
  `],y([(0,r.property)({type:Number}),g("design:type",Number)],b.prototype,"CLIENT_ID",void 0),y([(0,r.property)({type:Number}),g("design:type",Number)],b.prototype,"startSearchPage",void 0),y([(0,r.property)({type:Array}),g("design:type",Array)],b.prototype,"_daysOfWeek",void 0),y([(0,r.property)({type:Array}),g("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],b.prototype,"_data",void 0),y([(0,r.property)({type:Object}),g("design:type",Object)],b.prototype,"urlQueryParams",void 0),y([(0,r.property)({type:Number}),g("design:type",Number)],b.prototype,"meetingEventId",void 0),y([(0,r.query)('[show-dayField="all"]'),g("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],b.prototype,"showDayFieldAllSelector",void 0),b=y([(0,r.customElement)("attendance-setup-form-day"),g("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-231986","shared"],(()=>(5588,e(e.s=5588)))),e.O())])));
//# sourceMappingURL=edit-day.js.map