"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts-src_vie-98afd2"],{3076:(e,t,n)=>{n.r(t)},4108:(e,t,n)=>{n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>r});var i=n(8485),s=n(7270),o=n(7052),a=n(1942),l=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{r(i.next(e))}catch(e){o(e)}}function l(e){try{r(i.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};const r=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,a.get_cookie)(d),b=JSON.stringify({token:(0,o.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.get_cookie)(d+"_date"))))return u;yield(0,s.http)(r,{method:"POST",body:b},!0).then((i=>l(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,o.base64Encode)(String(i.jsonData.token));(0,a.set_cookies)(d,e,10),(0,a.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,n)}))))})),c=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",r=n,c=JSON.stringify({email:e,id:t});yield(0,s.http)(l,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,o.base64Encode)(String(e.jsonData.token));(0,a.set_cookies)(r,t,10),(0,a.set_cookies_minutes)(r+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const i=(0,o.base64Encode)(String(t)),s=n;window.supersecret={unknowable:{ops:{email:e,id:i,cookieName:s}}},""==(0,a.get_cookie)(s)?yield c(e,i,n):yield r(e,i,n)}))},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>i,urlQueryParamsGet:()=>s,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>a});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var i=n(5862),s=n(9662),o=(n(2715),n(8485)),a=n(4672),l=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}"
        label="Edit Agenda(s)"></link-button>
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],l([(0,s.property)({type:Number}),r("design:type",Number)],c.prototype,"meetingEventId",void 0),c=l([(0,s.customElement)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts-src_vie-98afd2.js.map