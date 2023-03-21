"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8667],{6951:(e,t,n)=>{n.d(t,{F:()=>s});const s=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},4672:(e,t,n)=>{n.d(t,{Jx:()=>a,O1:()=>s,Vc:()=>l,W3:()=>i});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},a=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let s=null;for(const t in n)t===e&&(s=n[t]);return s},l=e=>new URLSearchParams(window.location.search).getAll(e),i=e=>{let t="",n=0;for(const s in e)n+=1,t+=`${n>1?"&":""}${s}=${e[s]}`;return t}},7234:(e,t,n)=>{n.d(t,{e:()=>s});class s{static toMeetingAgendaModel(e){return o(JSON.parse(e),c("MeetingAgendaModel"),l)}static meetingAgendaModelToJson(e){return JSON.stringify(o(e,c("MeetingAgendaModel"),i),null,2)}}function a(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function l(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function o(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:a(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let a=0;a<s;a++){const s=e[a];try{return o(t,s,n)}catch(e){}}return a(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>o(t,e,n))):a("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return a("object",s);const l={};return Object.getOwnPropertyNames(e).forEach((t=>{const a=e[t],i=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;l[a.key]=o(i,a.typ,n,a.key)})),Object.getOwnPropertyNames(s).forEach((a=>{Object.prototype.hasOwnProperty.call(e,a)||(l[a]=o(s[a],t,n,a))})),l}(n(t),t.additional,e):a(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?a("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:a(e,t,s)}(t,e)}}function r(...e){return{unionMembers:e}}function d(e,t){return{props:e,additional:t}}function c(e){return{ref:e}}const u={MeetingAgendaModel:d([{json:"id",js:"id",typ:r(null,0)},{json:"meetingEventId",js:"meetingEventID",typ:r(null,c("MeetingEventID"))},{json:"agenda",js:"agenda",typ:r(null,"")},{json:"attachment",js:"attachment",typ:r(null,r(null,""))},{json:"meetingDate",js:"meetingDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"date",js:"date",typ:r(null,Date)}],!1),MeetingEventID:d([{json:"id",js:"id",typ:r(null,0)},{json:"type",js:"type",typ:r(null,0)},{json:"memberType",js:"memberType",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"clientId",js:"clientID",typ:r(null,c("ClientID"))},{json:"branchId",js:"branchID",typ:r(null,c("BranchID"))},{json:"memberCategoryId",js:"memberCategoryID",typ:r(null,c("MemberCategoryID"))},{json:"meetingSpan",js:"meetingSpan",typ:r(null,0)},{json:"startTime",js:"startTime",typ:r(null,"")},{json:"closeTime",js:"closeTime",typ:r(null,"")},{json:"latenessTime",js:"latenessTime",typ:r(null,"")},{json:"isRecuring",js:"isRecuring",typ:r(null,!0)},{json:"hasBreakTime",js:"hasBreakTime",typ:r(null,!0)},{json:"hasDuty",js:"hasDuty",typ:r(null,!0)},{json:"hasOvertime",js:"hasOvertime",typ:r(null,!0)},{json:"virtualMeetingLink",js:"virtualMeetingLink",typ:r(null,"")},{json:"virtualMeetingType",js:"virtualMeetingType",typ:r(null,0)},{json:"meetingLocation",js:"meetingLocation",typ:r(null,0)},{json:"expectedMonthlyAttendance",js:"expectedMonthlyAttendance",typ:r(null,0)},{json:"activeMonthlyAttendance",js:"activeMonthlyAttendance",typ:r(null,0)},{json:"agenda",js:"agenda",typ:r(null,"")},{json:"agendaFile",js:"agendaFile",typ:r(null,"")},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"date",js:"date",typ:r(null,Date)}],!1),BranchID:d([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"accountId",js:"accountID",typ:r(null,0)},{json:"createdBy",js:"createdBy",typ:r(null,0)},{json:"creationDate",js:"creationDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)}],!1),ClientID:d([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"accountType",js:"accountType",typ:r(null,0)},{json:"country",js:"country",typ:r(null,"")},{json:"stateProvince",js:"stateProvince",typ:r(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:r(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:r(null,"")},{json:"applicantGender",js:"applicantGender",typ:r(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:r(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:r(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:r(null,0)},{json:"region",js:"region",typ:r(null,0)},{json:"district",js:"district",typ:r(null,0)},{json:"constituency",js:"constituency",typ:r(null,0)},{json:"community",js:"community",typ:r(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:r(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:r(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:r(null,"")},{json:"logo",js:"logo",typ:r(null,"")},{json:"status",js:"status",typ:r(null,0)},{json:"archive",js:"archive",typ:r(null,0)},{json:"accountCategory",js:"accountCategory",typ:r(null,c("MemberCategoryID"))},{json:"website",js:"website",typ:r(null,"")},{json:"creationDate",js:"creationDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"subscriptionInfo",js:"subscriptionInfo",typ:r(null,c("SubscriptionInfo"))},{json:"countryInfo",js:"countryInfo",typ:r(null,(p=c("CountryInfo"),{arrayItems:p}))}],!1),MemberCategoryID:d([{json:"id",js:"id",typ:r(null,0)},{json:"clientId",js:"clientID",typ:r(null,0)},{json:"category",js:"category",typ:r(null,"")},{json:"createdBy",js:"createdBy",typ:r(null,0)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,r(Date,null))},{json:"date",js:"date",typ:r(null,r(Date,null))}],!1),CountryInfo:d([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"short",js:"short",typ:r(null,"")},{json:"code",js:"code",typ:r(null,"")}],!1),SubscriptionInfo:d([{json:"id",js:"id",typ:r(null,0)},{json:"client",js:"client",typ:r(null,"")},{json:"client_id",js:"clientID",typ:r(null,"")},{json:"subscription_id",js:"subscriptionID",typ:r(null,"")},{json:"subscribed_modules",js:"subscribedModules",typ:r(null,c("SubscribedModules"))},{json:"date_created",js:"dateCreated",typ:r(null,Date)}],!1),SubscribedModules:d([{json:"Module 1",js:"module1",typ:r(null,c("Module"))},{json:"Module 2",js:"module2",typ:r(null,c("Module"))},{json:"Module 3",js:"module3",typ:r(null,c("Module"))}],!1),Module:d([{json:"module name",js:"moduleName",typ:r(null,"")},{json:"expires_on",js:"expiresOn",typ:r(null,"")}],!1)};var p},540:(e,t,n)=>{n.d(t,{p:()=>o});var s=n(771),a=n(7270),l=n(596),i=n(3600);function o(e=null,t=""){return n=this,o=void 0,d=function*(){const n=(0,i.Ie)(),o=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===e?"":"/"+e)+t,r=yield(0,a.d)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{l(d.next(e))}catch(e){t(e)}}function a(e){try{l(d.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}l((d=d.apply(n,o||[])).next())}));var n,o,r,d}},7108:(e,t,n)=>{n.d(t,{W:()=>s});const s={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},8693:(e,t,n)=>{var s=n(9392),a=n(1936),l=(n(2715),n(771)),i=n(4672),o=function(e,t,n,s){var a,l=arguments.length,i=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(l<3?a(i):l>3?a(t,n,i):a(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends s.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return s.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${l.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,i.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[s.iv`
   :host { display: block; }
  `],o([(0,a.Cb)({type:Number}),r("design:type",Number)],d.prototype,"meetingEventId",void 0),d=o([(0,a.Mo)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],d)},2138:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormViewAgenda:()=>h}),n(3683),n(4657),n(6811);var s=n(2262),a=n(9392),l=n(1936),i=(n(8693),n(9665)),o=n(8092),r=n(1302),d=n(7108),c=n(540),u=n(4672),p=n(7234),y=n(6951),g=n(771),b=(n(2715),function(e,t,n,s){var a,l=arguments.length,i=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(l<3?a(i):l>3?a(t,n,i):a(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i}),m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,n,s){return new(n||(n=Promise))((function(a,l){function i(e){try{r(s.next(e))}catch(e){l(e)}}function o(e){try{r(s.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}r((s=s.apply(e,t||[])).next())}))};let h=class extends a.oi{constructor(){super(),this._hasSetup=!1,this.meetingAgendaId=0,this.meetingEventId=0,this._pageButtonAccess=!1,this.__scheduleAgenda=null}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),this.getMeetingAgendaId(),(0,i.f)().then((()=>this._hasSetup=!0)),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.H)())||void 0===e?void 0:e.expiration_date.expired)return a.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,r.OR)(d.W.schedule_meeting_event),!(0,r.H)({pageId:d.W.schedule_meeting_event,viewType:"View"},!1))return a.dy`<no-page-entry-component></no-page-entry-component>`}return a.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <div class="m-1 w-full flex justify-end">
          <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
            href="${g.t.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${this.meetingAgendaId}"
            label="Update"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `}get display(){return null===this._scheduleAgenda?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgenda?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
        ${this.scheduleAgenda}
      `}get scheduleAgenda(){const e=this._scheduleAgenda,t=(0,y.F)(e.meetingDate,{dateStyle:"medium"});return a.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting/ Event Agenda">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Meeting/ Event Agenda For ${t}</b>
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
    `}get getMeetingAttendanceAgendas(){const e=this._scheduleAgenda;return(0,y.F)(e.meetingDate,{dateStyle:"medium"}),a.dy`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
          <b>File</b>
        </th>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell !py-1" scope="row">
          ${null===e.attachment?"No File":a.dy`<a href="${e.attachment}" target="_blank">Open File</a>`}
        </td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
          <b>Agenda</b>
        </th>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell !py-1" scope="row">
          <div class="whitespace-pre-wrap">${e.agenda}</div>
        </td>
      </tr>
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new s.T(e)}))}getMeetingEventId(){let e=(0,u.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,u.Jx)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceScheduleAgenda(){return j(this,void 0,void 0,(function*(){const e=yield(0,c.p)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,n=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=p.e.toMeetingAgendaModel(JSON.stringify(n))}}))}createRenderRoot(){return this}};b([(0,l.Cb)({type:String}),m("design:type",String)],h.prototype,"email",void 0),b([(0,l.Cb)({type:Number}),m("design:type",Number)],h.prototype,"mId",void 0),b([(0,l.Cb)({type:Number}),m("design:type",Number)],h.prototype,"clientId",void 0),b([(0,l.Cb)({type:Boolean}),m("design:type",Boolean)],h.prototype,"_hasSetup",void 0),b([(0,l.Cb)({type:Number}),m("design:type",Number)],h.prototype,"meetingAgendaId",void 0),b([(0,l.Cb)({type:Number}),m("design:type",Number)],h.prototype,"meetingEventId",void 0),b([(0,l.Cb)({type:Boolean}),m("design:type",Boolean)],h.prototype,"_pageButtonAccess",void 0),h=b([(0,l.Mo)("attendance-setup-form-view-agenda"),m("design:paramtypes",[])],h)}},e=>(e.O(0,[5744,2185,7708,1109,6236,6069,214,3901,3712],(()=>(2138,e(e.s=2138)))),e.O())])));
//# sourceMappingURL=view-agenda.js.map