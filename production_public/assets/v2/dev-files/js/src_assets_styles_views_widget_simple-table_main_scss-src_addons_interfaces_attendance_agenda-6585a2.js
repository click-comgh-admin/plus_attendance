"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_widget_simple-table_main_scss-src_addons_interfaces_attendance_agenda-6585a2"],{45501:(t,e,n)=>{n.r(e)},44672:(t,e,n)=>{n.r(e),n.d(e,{urlQueryParams:()=>s,urlQueryParamsGet:()=>l,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>a});const s=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},l=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let s=null;for(const e in n)e===t&&(s=n[e]);return s},o=t=>new URLSearchParams(window.location.search).getAll(t),a=t=>{let e="",n=0;for(const s in t)n+=1,e+=`${n>1?"&":""}${s}=${t[s]}`;return e}},37234:(t,e,n)=>{n.r(e),n.d(e,{Convert:()=>s,typeMap:()=>d});class s{static toMeetingAgendaModel(t){return i(JSON.parse(t),c("MeetingAgendaModel"),o)}static meetingAgendaModelToJson(t){return JSON.stringify(i(t,c("MeetingAgendaModel"),a),null,2)}}function l(t,e,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(t)} but got ${JSON.stringify(e)}`),console.error(`Invalid value ${JSON.stringify(e)} for type ${JSON.stringify(t)}`)}function o(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function a(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function i(t,e,n,s=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=d[e.ref];return Array.isArray(e)?function(t,e){return-1!==t.indexOf(e)?e:l(t,e)}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const s=t.length;for(let l=0;l<s;l++){const s=t[l];try{return i(e,s,n)}catch(t){}}return l(t,e)}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){return Array.isArray(e)?e.map((e=>i(e,t,n))):l("array",e)}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,s){if(null===s||"object"!=typeof s||Array.isArray(s))return l("object",s);const o={};return Object.getOwnPropertyNames(t).forEach((e=>{const l=t[e],a=Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;o[l.key]=i(a,l.typ,n,l.key)})),Object.getOwnPropertyNames(s).forEach((l=>{Object.prototype.hasOwnProperty.call(t,l)||(o[l]=i(s[l],e,n,l))})),o}(n(e),e.additional,t):l(e,t):e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?l("Date",t):e}(t):function(t,e){return typeof t==typeof e?e:l(t,e,s)}(e,t)}}function r(...t){return{unionMembers:t}}function u(t,e){return{props:t,additional:e}}function c(t){return{ref:t}}const d={MeetingAgendaModel:u([{json:"id",js:"id",typ:r(null,0)},{json:"meetingEventId",js:"meetingEventID",typ:r(null,c("MeetingEventID"))},{json:"agenda",js:"agenda",typ:r(null,"")},{json:"attachment",js:"attachment",typ:r(null,r(null,""))},{json:"meetingDate",js:"meetingDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"date",js:"date",typ:r(null,Date)}],!1),MeetingEventID:u([{json:"id",js:"id",typ:r(null,0)},{json:"type",js:"type",typ:r(null,0)},{json:"memberType",js:"memberType",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"clientId",js:"clientID",typ:r(null,c("ClientID"))},{json:"branchId",js:"branchID",typ:r(null,c("BranchID"))},{json:"memberCategoryId",js:"memberCategoryID",typ:r(null,c("MemberCategoryID"))},{json:"meetingSpan",js:"meetingSpan",typ:r(null,0)},{json:"startTime",js:"startTime",typ:r(null,"")},{json:"closeTime",js:"closeTime",typ:r(null,"")},{json:"latenessTime",js:"latenessTime",typ:r(null,"")},{json:"isRecuring",js:"isRecuring",typ:r(null,!0)},{json:"hasBreakTime",js:"hasBreakTime",typ:r(null,!0)},{json:"hasDuty",js:"hasDuty",typ:r(null,!0)},{json:"hasOvertime",js:"hasOvertime",typ:r(null,!0)},{json:"virtualMeetingLink",js:"virtualMeetingLink",typ:r(null,"")},{json:"virtualMeetingType",js:"virtualMeetingType",typ:r(null,0)},{json:"meetingLocation",js:"meetingLocation",typ:r(null,0)},{json:"expectedMonthlyAttendance",js:"expectedMonthlyAttendance",typ:r(null,0)},{json:"activeMonthlyAttendance",js:"activeMonthlyAttendance",typ:r(null,0)},{json:"agenda",js:"agenda",typ:r(null,"")},{json:"agendaFile",js:"agendaFile",typ:r(null,"")},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"date",js:"date",typ:r(null,Date)}],!1),BranchID:u([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"accountId",js:"accountID",typ:r(null,0)},{json:"createdBy",js:"createdBy",typ:r(null,0)},{json:"creationDate",js:"creationDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)}],!1),ClientID:u([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"accountType",js:"accountType",typ:r(null,0)},{json:"country",js:"country",typ:r(null,"")},{json:"stateProvince",js:"stateProvince",typ:r(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:r(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:r(null,"")},{json:"applicantGender",js:"applicantGender",typ:r(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:r(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:r(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:r(null,0)},{json:"region",js:"region",typ:r(null,0)},{json:"district",js:"district",typ:r(null,0)},{json:"constituency",js:"constituency",typ:r(null,0)},{json:"community",js:"community",typ:r(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:r(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:r(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:r(null,"")},{json:"logo",js:"logo",typ:r(null,"")},{json:"status",js:"status",typ:r(null,0)},{json:"archive",js:"archive",typ:r(null,0)},{json:"accountCategory",js:"accountCategory",typ:r(null,c("MemberCategoryID"))},{json:"website",js:"website",typ:r(null,"")},{json:"creationDate",js:"creationDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"subscriptionInfo",js:"subscriptionInfo",typ:r(null,c("SubscriptionInfo"))},{json:"countryInfo",js:"countryInfo",typ:r(null,(p=c("CountryInfo"),{arrayItems:p}))}],!1),MemberCategoryID:u([{json:"id",js:"id",typ:r(null,0)},{json:"clientId",js:"clientID",typ:r(null,0)},{json:"category",js:"category",typ:r(null,"")},{json:"createdBy",js:"createdBy",typ:r(null,0)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,r(Date,null))},{json:"date",js:"date",typ:r(null,r(Date,null))}],!1),CountryInfo:u([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"short",js:"short",typ:r(null,"")},{json:"code",js:"code",typ:r(null,"")}],!1),SubscriptionInfo:u([{json:"id",js:"id",typ:r(null,0)},{json:"client",js:"client",typ:r(null,"")},{json:"client_id",js:"clientID",typ:r(null,"")},{json:"subscription_id",js:"subscriptionID",typ:r(null,"")},{json:"subscribed_modules",js:"subscribedModules",typ:r(null,c("SubscribedModules"))},{json:"date_created",js:"dateCreated",typ:r(null,Date)}],!1),SubscribedModules:u([{json:"Module 1",js:"module1",typ:r(null,c("Module"))},{json:"Module 2",js:"module2",typ:r(null,c("Module"))},{json:"Module 3",js:"module3",typ:r(null,c("Module"))}],!1),Module:u([{json:"module name",js:"moduleName",typ:r(null,"")},{json:"expires_on",js:"expiresOn",typ:r(null,"")}],!1)};var p},10540:(t,e,n)=>{n.r(e),n.d(e,{GET_AttendanceScheduleAgenda:()=>r});var s=n(48485),l=n(87270),o=n(14492),a=n(33600),i=function(t,e,n,s){return new(n||(n=Promise))((function(l,o){function a(t){try{r(s.next(t))}catch(t){o(t)}}function i(t){try{r(s.throw(t))}catch(t){o(t)}}function r(t){var e;t.done?l(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}r((s=s.apply(t,e||[])).next())}))};function r(t=null,e=""){return i(this,void 0,void 0,(function*(){const n=(0,a.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===t?"":"/"+t)+e,r=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",r)}catch(t){console.error({error:t});let e=r;return e.error=t,new o.NetWorkCallResponses("get",e,!0)}}))}},17108:(t,e,n)=>{n.r(e),n.d(e,{PAGE__IDS:()=>s});const s={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},8693:(t,e,n)=>{n.r(e),n.d(e,{AttendanceSetupFormEditLinks:()=>u});var s=n(85862),l=n(59662),o=(n(92715),n(48485)),a=n(44672),i=function(t,e,n,s){var l,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,s);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(a=(o<3?l(a):o>3?l(e,n,a):l(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let u=class extends s.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.html`
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
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let t=(0,a.urlQueryParamsGet)("meeting-event-id"),e=null!==t?Number(t):null;this.meetingEventId=Number.isNaN(e)?null:e}createRenderRoot(){return this}};u.styles=[s.css`
   :host { display: block; }
  `],i([(0,l.property)({type:Number}),r("design:type",Number)],u.prototype,"meetingEventId",void 0),u=i([(0,l.customElement)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],u)}}]);
//# sourceMappingURL=src_assets_styles_views_widget_simple-table_main_scss-src_addons_interfaces_attendance_agenda-6585a2.js.map