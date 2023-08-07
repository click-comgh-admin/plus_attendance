"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-day"],{45501:(e,t,n)=>{n.r(t)},24173:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>s});const s=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>a,urlQueryParamsJoin:()=>r});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},a=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},86324:(e,t,n)=>{n.r(t),n.d(t,{MeetingEventFormInputInterface:()=>s});class s{toJson(){return{meetingEventId:this.meetingEventId,dayId:this.dayId,startDate:this.startDate,endDate:this.endDate}}static fromJson(e){const t=new s;return t.meetingEventId=e.meetingEventId,t.dayId=e.dayId,t.startDate=e.startDate,t.endDate=e.endDate,t}toString(){return`MeetingEvent(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, startDate=${this.startDate}, endDate=${this.endDate})`}}},11148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>o});var s=n(48485),i=n(87270),a=n(14492),r=n(33600);function o(e=null){return t=this,n=void 0,l=function*(){const t=(0,r.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),o=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,s){function i(e){try{r(l.next(e))}catch(e){s(e)}}function a(e){try{r(l.throw(e))}catch(e){s(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((l=l.apply(t,n||[])).next())}));var t,n,o,l}},50963:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleDay:()=>u});var s=n(86455),i=n.n(s),a=n(48485),r=n(87270),o=n(14492),l=n(8967),d=n(33600),c=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,d.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day/"+e,s={};return i().fire({title:"Remove Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new o.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},67824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>o});var s=n(48485),i=n(87270),a=n(14492),r=n(33600);function o(e=null,t=""){return n=this,o=void 0,d=function*(){const n=(0,r.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,l=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{a(d.next(e))}catch(e){t(e)}}function i(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,i)}a((d=d.apply(n,o||[])).next())}));var n,o,l,d}},58141:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleDayMultipleAlt:()=>u});var s=n(86455),i=n.n(s),a=n(48485),r=n(87270),o=n(14492),l=n(8967),d=n(33600),c=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,d.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day/multiple",s=document.querySelector('[make-general-posts="add-schedule-day"]'),u=JSON.stringify(e);return i().fire({title:"Setup Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"POST",body:u,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new o.NetWorkCallResponses("post",e,!1,s),n=t.multipleResponse;let a=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{a.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{a.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),a.length>0){const e=(0,l.https_swal_error_format)(a);return i().showValidationMessage(`${e}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>o});var s=n(48485),i=n(87270),a=n(14492),r=n(33600);function o(e=null,t=""){return n=this,o=void 0,d=function*(){const n=(0,r.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{a(d.next(e))}catch(e){t(e)}}function i(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,i)}a((d=d.apply(n,o||[])).next())}));var n,o,l,d}},71854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>l});var s=n(85862),i=n(59662),a=(n(23283),n(16413),n(40789),n(33830),n(76948),n(63313),function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};let l=class extends s.LitElement{constructor(){super(),this.index=0,this._widget=s.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return s.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return o(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};a([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"index",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"no_delete",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"single",void 0),a([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"_single",void 0),l=a([(0,i.customElement)("multiple-widgets"),r("design:paramtypes",[])],l)},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>o});var s=n(85862),i=n(59662),a=(n(29975),n(16788),function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends s.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return s.html`
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
    `],a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"name",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"label",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"selected",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"value",void 0),a([(0,i.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"isSelected",void 0),o=a([(0,i.customElement)("switch-input")],o)},25588:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditDay:()=>p}),n(69579),n(43683),n(74657);var s=n(14108),i=n(85862),a=n(59662),r=(n(18656),n(8693),n(27712)),o=n(91354),l=n(41302),d=n(17108),c=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}l((a=a.apply(t,n||[])).next())}));var t,n,i,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(d.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-day CLIENT_ID="${this.clientId}"></attendance-setup-form-day>
      </div>
    `}firstUpdayd(){}createRenderRoot(){return this}};c([(0,a.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),c([(0,a.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),c([(0,a.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),c([(0,a.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),c([(0,a.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=c([(0,a.customElement)("attendance-setup-form-edit-day"),u("design:paramtypes",[])],p)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>d});var s=n(85862),i=n(59662),a=(n(92715),n(48485)),r=n(44672),o=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
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
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${a.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[s.css`
   :host { display: block; }
  `],o([(0,i.property)({type:Number}),l("design:type",Number)],d.prototype,"meetingEventId",void 0),d=o([(0,i.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],d)},18656:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormDay:()=>b}),n(45501);var s,i,a=n(85862),r=n(59662),o=n(58881),l=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),d=n(67824),c=n(52218),u=n(44672),p=n(50963),h=(n(75866),n(11148)),m=n(24173),y=(n(18376),n(58141)),f=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};let b=class extends a.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__schedule=null,this.__scheduleDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleDay(),yield this.getDaysOfWeek()}))}disconnectedCallback(){}render(){return a.html`${this.schedule}`}get schedule(){return null===this._schedule?a.html`
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
              ${(0,m.getDate)(e.startDate,{dateStyle:"medium"})}
            </td>
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
                  <day-multiple-inputs-component .daysOfWeek="${this._daysOfWeek}" 
                    meetingEventId="${this.meetingEventId}">
                  </day-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Day(s)" raised class="button" @click="${this.submitForm}">
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
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId" label="Select Day" outlined required>
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${a.html`${e}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select Start Date</h4>
                  <mwc-textfield name="startDate" multiple type="date" class="w-full" id="startDate"
                    label="Select Date" outlined required>
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select End Date</h4>
                  <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate"
                    label="Select Date" outlined required>
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}dayFieldDefault(e){return a.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.dayField}
        dayField-id="${e}" no_delete></multiple-widgets>
    `}addDayField(){const e=this.showDayFieldAllSelector.children.length,t=(0===e?-1:Number(this.showDayFieldAllSelector.children[e-1].getAttribute("dayField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("dayField-id",String(t)),this.showDayFieldAllSelector.append(n);const s=this.showDayFieldAllSelector.querySelectorAll('multiple-widgets[dayField-id="'+t+'"]'),i=this.dayField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.MDCDataTable(e)}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("day-multiple-inputs-component").forEach((e=>v(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield(0,y.POST_AttendanceAddScheduleDayMultipleAlt)(t)}))))}))}deleteQuestionnaireMeetingAttendanceDay(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleDay)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getDaysOfWeek(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return v(this,void 0,void 0,(function*(){const t=yield(0,h.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};b.styles=[a.css`
   :host { display: block; }
  `],f([(0,r.property)({type:Number}),g("design:type",Number)],b.prototype,"CLIENT_ID",void 0),f([(0,r.property)({type:Number}),g("design:type",Number)],b.prototype,"startSearchPage",void 0),f([(0,r.property)({type:Array}),g("design:type",Array)],b.prototype,"_daysOfWeek",void 0),f([(0,r.property)({type:Array}),g("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],b.prototype,"_data",void 0),f([(0,r.property)({type:Object}),g("design:type",Object)],b.prototype,"urlQueryParams",void 0),f([(0,r.property)({type:Number}),g("design:type",Number)],b.prototype,"meetingEventId",void 0),f([(0,r.query)('[show-dayField="all"]'),g("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],b.prototype,"showDayFieldAllSelector",void 0),b=f([(0,r.customElement)("attendance-setup-form-day"),g("design:paramtypes",[])],b)},45466:(e,t,n)=>{n.r(t),n.d(t,{DayInputsComponent:()=>o});var s=n(85862),i=n(59662),a=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends s.LitElement{constructor(){super(),this.daysOfWeek=[],this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.daysOfWeek.map((e=>s.html`<mwc-list-item value="${e.id}">${e.day}</mwc-list-item>`));return s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId--${this.inputId}" label="Select Day" outlined
              required @change="${this.handleDayChange}">
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${s.html`${e}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select Start Date</h4>
                  <mwc-textfield name="startDate" multiple type="date" class="w-full" id="startDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleStartDateChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select End Date</h4>
                  <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleEndDateChange}">
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}handleDayChange(e){const t=e.target.value;this.dayValue=t}handleStartDateChange(e){this.startDateValue=e.target.value}handleEndDateChange(e){this.endDateValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};o.styles=[s.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Array}),r("design:type",Array)],o.prototype,"daysOfWeek",void 0),a([(0,i.property)({type:String}),r("design:type",Object)],o.prototype,"inputId",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"dayValue",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"startDateValue",void 0),a([(0,i.property)({type:String}),r("design:type",String)],o.prototype,"endDateValue",void 0),o=a([(0,i.customElement)("day-inputs-component"),r("design:paramtypes",[])],o)},18376:(e,t,n)=>{n.r(t),n.d(t,{DayMultipleInputsComponent:()=>l});var s=n(85862),i=n(59662),a=(n(45466),n(23283),n(51511),n(86324)),r=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.daysOfWeekCalled=!1,this.loading=!0,this.daysOfWeek=[],this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.daysOfWeekCalled&&this.daysOfWeek.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.daysOfWeekCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=s.html`<day-inputs-component day-inputs-component--object="${this.currentObjectCount}" 
      .daysOfWeek="${this.daysOfWeek}" >
    </day-inputs-component>`,n=this.inputs;n.push(t);let i=this.addedInputIndex;i.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=i,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?s.html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:s.html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>s.html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Day Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?s.html`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:s.nothing}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Day</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[day-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t,n,s;let i=new a.MeetingEventFormInputInterface;return i.meetingEventId=this.meetingEventId,i.dayId=Number(null!==(t=e.dayValue)&&void 0!==t?t:0),i.startDate=null!==(n=e.startDateValue)&&void 0!==n?n:"",i.endDate=null!==(s=e.endDateValue)&&void 0!==s?s:"",i}))[0]))}multipleInputsHaveChangedOld(e){const t=Array.from(document.querySelectorAll("[day-inputs-component--object]"));this.multipleDayObjects=t.map((e=>{let t=new a.MeetingEventFormInputInterface;return t.meetingEventId=this.meetingEventId,t.dayId=Number(e.dayValue),t.startDate=e.startDateValue,t.endDate=e.endDateValue,t}))}firstUpdated(){}createRenderRoot(){return this}};l.styles=[s.css`
   :host { display: block; }
  `],r([(0,i.property)({type:Number}),o("design:type",Number)],l.prototype,"meetingEventId",void 0),r([(0,i.property)({type:Number}),o("design:type",Number)],l.prototype,"currentObjectCount",void 0),r([(0,i.property)({type:Array}),o("design:type",Array)],l.prototype,"multipleDayObjects",void 0),r([(0,i.property)({type:Array}),o("design:type",Array)],l.prototype,"removedInputIndex",void 0),r([(0,i.property)({type:Array}),o("design:type",Array)],l.prototype,"addedInputIndex",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"daysOfWeekCalled",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"loading",void 0),r([(0,i.property)({type:Array}),o("design:type",Array)],l.prototype,"daysOfWeek",void 0),l=r([(0,i.customElement)("day-multiple-inputs-component"),o("design:paramtypes",[])],l)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","shared"],(()=>(25588,e(e.s=25588)))),e.O())])));
//# sourceMappingURL=edit-day.js.map