"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-0cdf44"],{3076:(t,e,n)=>{n.r(e)},8967:(t,e,n)=>{n.r(e),n.d(e,{__swalStyle:()=>i,https_swal_error_format:()=>s});const i="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",s=(t,e=!0)=>{if(Array.isArray(t)){let n=(e?i:"")+"<ul>";return t.forEach((t=>{n+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(t,e,n)=>{n.r(e),n.d(e,{tokenLogin:()=>d,verifyToken:()=>l});var i=n(8485),s=n(7270),o=n(7052),a=n(1942),r=function(t,e,n,i){return new(n||(n=Promise))((function(s,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function r(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,r)}l((i=i.apply(t,e||[])).next())}))};const l=(t,e,n)=>r(void 0,void 0,void 0,(function*(){const l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,a.get_cookie)(d),b=JSON.stringify({token:(0,o.base64Decode)(u)});if((t=>{const e=new Date;return Math.abs(t.getTime()-e.getTime())/36e5<24})(new Date((0,a.get_cookie)(d+"_date"))))return u;yield(0,s.http)(l,{method:"POST",body:b},!0).then((i=>r(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const t=(0,o.base64Encode)(String(i.jsonData.token));(0,a.set_cookies)(d,t,10),(0,a.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(t,e,n)}))))})),c=(t,e,n)=>r(void 0,void 0,void 0,(function*(){const r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:t,id:e});yield(0,s.http)(r,{method:"POST",body:c},!0).then((t=>{if(t.jsonData.token){const e=(0,o.base64Encode)(String(t.jsonData.token));(0,a.set_cookies)(l,e,10),(0,a.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}}))})),d=(t,e,n)=>r(void 0,void 0,void 0,(function*(){const i=(0,o.base64Encode)(String(e)),s=n;window.supersecret={unknowable:{ops:{email:t,id:i,cookieName:s}}},""==(0,a.get_cookie)(s)?yield c(t,i,n):yield l(t,i,n)}))},4672:(t,e,n)=>{n.r(e),n.d(e,{urlQueryParams:()=>i,urlQueryParamsGet:()=>s,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>a});const i=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},s=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let i=null;for(const e in n)e===t&&(i=n[e]);return i},o=t=>new URLSearchParams(window.location.search).getAll(t),a=t=>{let e="",n=0;for(const i in t)n+=1,e+=`${n>1?"&":""}${i}=${t[i]}`;return e}},2218:(t,e,n)=>{n.r(e),n.d(e,{GET_AttendanceSchedule:()=>r});var i=n(8485),s=n(7270),o=n(4492),a=n(3600);function r(t=null,e=""){return n=this,r=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===t?"":"/"+t)+e,l=yield(0,s.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(t){console.error({error:t});let e=l;return e.error=t,new o.NetWorkCallResponses("get",e,!0)}},new((l=void 0)||(l=Promise))((function(t,e){function i(t){try{o(c.next(t))}catch(t){e(t)}}function s(t){try{o(c.throw(t))}catch(t){e(t)}}function o(e){var n;e.done?t(e.value):(n=e.value,n instanceof l?n:new l((function(t){t(n)}))).then(i,s)}o((c=c.apply(n,r||[])).next())}));var n,r,l,c}},8693:(t,e,n)=>{n.r(e),n.d(e,{AttendanceSetupFormEditLinks:()=>c});var i=n(5862),s=n(9662),o=(n(2715),n(8485)),a=n(4672),r=function(t,e,n,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o<3?s(a):o>3?s(e,n,a):s(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
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
    `}firstUpdated(){}getMeetingEventId(){let t=(0,a.urlQueryParamsGet)("meeting-event-id"),e=null!==t?Number(t):null;this.meetingEventId=Number.isNaN(e)?null:e}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],r([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=r([(0,s.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-0cdf44.js.map