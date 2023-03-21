"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-sub_group"],{5501:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>s,urlQueryParamsGet:()=>r,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>i});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},o=e=>new URLSearchParams(window.location.search).getAll(e),i=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},1257:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleSubGroup:()=>u});var s=n(6455),r=n.n(s),o=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function l(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/"+e,s={};return r().fire({title:"Remove SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new l.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8786:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>l});var s=n(8485),r=n(7270),o=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((a=a.apply(n,l||[])).next())}));var n,l,c,a}},4647:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleSubGroup:()=>u});var s=n(6455),r=n.n(s),o=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function l(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup",n=document.querySelector('[make-general-posts="add-schedule-subgroup"]'),s=new FormData(n);return r().fire({title:"Add SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>l});var s=n(8485),r=n(7270),o=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((a=a.apply(n,l||[])).next())}));var n,l,c,a}},9605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>l});var s=n(8485),r=n(7270),o=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(a.next(e))}catch(e){t(e)}}function r(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((a=a.apply(n,l||[])).next())}));var n,l,c,a}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var s=n(5862),r=n(9662),o=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function l(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((s=s.apply(e,t||[])).next())}))};let c=class extends s.LitElement{constructor(){super(),this.index=0,this._widget=s.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return s.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};o([(0,r.property)({type:Number}),i("design:type",Number)],c.prototype,"index",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"no_delete",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"single",void 0),o([(0,r.property)({type:String}),i("design:type",String)],c.prototype,"_single",void 0),c=o([(0,r.customElement)("multiple-widgets"),i("design:paramtypes",[])],c)},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var s=n(5862),r=n(9662),o=(n(9975),n(6788),function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return s.html`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[s.css`
      :host {
        display: block;
      }
    `],o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"selected",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"isSelected",void 0),l=o([(0,r.customElement)("switch-input")],l)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>a});var s=n(5862),r=n(9662),o=(n(2715),n(8485)),i=n(4672),l=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,i.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};a.styles=[s.css`
   :host { display: block; }
  `],l([(0,r.property)({type:Number}),c("design:type",Number)],a.prototype,"meetingEventId",void 0),a=l([(0,r.customElement)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],a)},7993:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditSubGroup:()=>p}),n(3076),n(3683),n(4657);var s=n(4108),r=n(5862),o=n(9662),i=(n(4315),n(8693),n(7712)),l=n(1354),c=n(1302),a=n(7108),d=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends r.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,l)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(a.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:a.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return r.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-subgroup CLIENT_ID="${this.clientId}"></attendance-setup-form-subgroup>
      </div>
    `}firstUpsubgroupd(){}createRenderRoot(){return this}};d([(0,o.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=d([(0,o.customElement)("attendance-setup-form-edit-subgroup"),u("design:paramtypes",[])],p)},4315:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormSubGroup:()=>_}),n(5501);var s,r,o=n(5862),i=n(9662),l=n(8881),c=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),a=n(8786),d=n(2218),u=n(4672),p=n(1257),h=(n(5866),n(4647)),m=n(9605),f=n(2892),b=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function l(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((s=s.apply(e,t||[])).next())}))};let _=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__subgroupUser=null,this.__schedule=null,this.__scheduleSubGroups=null,this._groups=[],this._subgroups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _subgroupUser(e){this.__subgroupUser=e,this.requestUpdate()}get _subgroupUser(){return this.__subgroupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSubGroups(e){this.__scheduleSubGroups=e,this.requestUpdate()}get _scheduleSubGroups(){return this.__scheduleSubGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSubGroup(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.html`${this.scheduleSubGroup}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSubGroup(){return null===this._scheduleSubGroups?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSubGroups?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SubGroup</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleSubGroups.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting SubGroup">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting SubGroup
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
                ${this.getMeetingAttendanceSubGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceSubGroups(){return o.html`
      ${this._scheduleSubGroups.results.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getSubGroup(e.subGroupId),o.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSubGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SubGroup</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SubGroup!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-subgroup">
                <div class="p-0 m-0" show-subgroupField="all">
                  ${this.subgroupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add SubGroup" raised class="button" @click="${this.submitForm}">
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
    `}get subgroupField(){const e=this._subgroups.map((e=>o.html`<mwc-list-item value="${e.id}">
        ${(0,l.until)(this.getGroup(e.groupId),o.html`<span>Loading...</span>`)} >> 
        ${e.subgroup}
      </mwc-list-item>`));return o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select SubGroup</h4>
            <mwc-select name="subGroupId" class="w-full" id="subGroupId" label="Select SubGroup" outlined required>
              <mwc-list-item value="">Select SubGroup</mwc-list-item>
              <mwc-list-item value="all">All SubGroups</mwc-list-item>
              ${o.html`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}subgroupFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.subgroupField}
        subgroupField-id="${e}" no_delete></multiple-widgets>
    `}addSubGroupField(){const e=this.showSubGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSubGroupFieldAllSelector.children[e-1].getAttribute("subgroupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("subgroupField-id",String(t)),this.showSubGroupFieldAllSelector.append(n);const s=this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+t+'"]'),r=this.subgroupField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.MDCDataTable(e)}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleSubGroup)()}))}deleteQuestionnaireMeetingAttendanceSubGroup(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleSubGroup)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSubGroup(){return v(this,void 0,void 0,(function*(){const e=yield(0,a.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleSubGroups=null===e?void 0:e.paginResponse}))}getGroups(){return v(this,void 0,void 0,(function*(){const e=yield(0,f.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._groups,...t),this._groups=n}))}getGroup(e){return v(this,void 0,void 0,(function*(){const t=yield(0,f.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}getSubGroups(){return v(this,void 0,void 0,(function*(){const e=yield(0,m.GET_MemberGroupingsSubGroups)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._subgroups,...t),this._subgroups=n}))}getSubGroup(e){return v(this,void 0,void 0,(function*(){const t=yield(0,m.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};_.styles=[o.css`
   :host { display: block; }
  `],b([(0,i.property)({type:Number}),g("design:type",Number)],_.prototype,"CLIENT_ID",void 0),b([(0,i.property)({type:Number}),g("design:type",Number)],_.prototype,"startSearchPage",void 0),b([(0,i.property)({type:Array}),g("design:type",Array)],_.prototype,"_groups",void 0),b([(0,i.property)({type:Array}),g("design:type",Array)],_.prototype,"_subgroups",void 0),b([(0,i.property)({type:Array}),g("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],_.prototype,"_data",void 0),b([(0,i.property)({type:Object}),g("design:type",Object)],_.prototype,"urlQueryParams",void 0),b([(0,i.property)({type:Number}),g("design:type",Number)],_.prototype,"meetingEventId",void 0),b([(0,i.query)('[show-subgroupField="all"]'),g("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],_.prototype,"showSubGroupFieldAllSelector",void 0),_=b([(0,i.customElement)("attendance-setup-form-subgroup"),g("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-231986","shared"],(()=>(7993,e(e.s=7993)))),e.O())])));
//# sourceMappingURL=edit-sub_group.js.map