"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2013],{6951:(e,t,n)=>{n.d(t,{F:()=>i});const i=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,n)=>{n.d(t,{Jx:()=>a,O1:()=>i,Vc:()=>s,W3:()=>o});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},a=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),o=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},540:(e,t,n)=>{n.d(t,{p:()=>l});var i=n(771),a=n(7270),s=n(596),o=n(3600);function l(e=null,t=""){return n=this,l=void 0,d=function*(){const n=(0,o.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===e?"":"/"+e)+t,r=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function a(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,a)}s((d=d.apply(n,l||[])).next())}));var n,l,r,d}},7108:(e,t,n)=>{n.d(t,{W:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},8693:(e,t,n)=>{var i=n(5862),a=n(8393),s=(n(2715),n(771)),o=n(4672),l=function(e,t,n,i){var a,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(s<3?a(o):s>3?a(t,n,o):a(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,o.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],l([(0,a.Cb)({type:Number}),r("design:type",Number)],d.prototype,"meetingEventId",void 0),d=l([(0,a.Mo)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],d)},5879:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormViewAgendas:()=>E}),n(3683),n(4657),n(5248),n(934),n(6811);var i=n(6951),a=n(5862),s=n(8393),o=n(2262),l=n(9665),r=n(8092),d=n(1302),c=n(7108),u=n(6455),b=n.n(u),m=n(771),g=n(7270),h=n(596),f=n(8967),p=n(3600),v=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}))};n(8693);var y=n(540),_=n(4672),k=(n(2715),function(e,t,n,i){var a,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(s<3?a(o):s>3?a(t,n,o):a(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function o(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}r((i=i.apply(e,t||[])).next())}))};let E=class extends a.oi{constructor(){super(),this.meetingEventId=0,this._hasSetup=!1,this._pageButtonAccess=!1,this.__scheduleAgendas=null}set _scheduleAgendas(e){this.__scheduleAgendas=e,this.requestUpdate()}get _scheduleAgendas(){return this.__scheduleAgendas}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),(0,l.f)().then((()=>this._hasSetup=!0)),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,r.H)())||void 0===e?void 0:e.expiration_date.expired)return a.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,d.OR)(c.W.schedule_meeting_event),!(0,d.H)({pageId:c.W.schedule_meeting_event,viewType:"View"},!1))return a.dy`<no-page-entry-component></no-page-entry-component>`}return a.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <div class="m-1 w-full flex justify-end">
          <link-button isblockcontent="false" aClass="" bClass="button info mr-2" raised
            href="${m.t.URLS.PDB_CLIENT}settings/edit/agenda-add?meeting-event-id=${this.meetingEventId}"
            label="Add Agenda"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `}get display(){return a.dy`${this.table}`}get table(){var e;return(null===(e=this._scheduleAgendas)||void 0===e?void 0:e.results.length)>0?a.dy`
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
      `:null===this._scheduleAgendas?a.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `:a.dy`
        <div class="flex justify-center shadow bg-white">
          <h3 class="font-bold">No Agenda(s) Found!</h3>
        </div>
      `}get getMeetingAttendanceAgendas(){return a.dy`
      ${this._scheduleAgendas.results.map(((e,t)=>{const n=(0,i.F)(e.meetingDate,{dateStyle:"medium"});return a.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              Agenda for <b>${n}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="flex flex-col md:flex-row justify-end whitespace-normal">
                <div class="m-1">
                  <link-button isblockcontent="false" aClass="" bClass="button success mr-2" raised
                    href="${m.t.URLS.PDB_CLIENT}settings/meeting-agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${e.id}"
                    label="Open"></link-button>
                </div>
                <div class="m-1">
                  <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
                    href="${m.t.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${e.id}"
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new o.T(e)}))}getMeetingEventId(){let e=(0,_.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceScheduleAgenda(){return C(this,void 0,void 0,(function*(){const e=yield(0,y.p)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAgendas=null===e?void 0:e.paginResponse}))}deleteQuestionnaireMeetingAttendanceAgenda(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda/"+e,i={};return b().fire({title:"Remove Meeting Date Agenda?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,g.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new h.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,f.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new h.H("delete",n,!0);return i.postForm,i}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}b().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};k([(0,s.Cb)({type:String}),w("design:type",String)],E.prototype,"email",void 0),k([(0,s.Cb)({type:Number}),w("design:type",Number)],E.prototype,"mId",void 0),k([(0,s.Cb)({type:Number}),w("design:type",Number)],E.prototype,"clientId",void 0),k([(0,s.Cb)({type:Number}),w("design:type",Number)],E.prototype,"meetingEventId",void 0),k([(0,s.Cb)({type:Boolean}),w("design:type",Boolean)],E.prototype,"_hasSetup",void 0),k([(0,s.Cb)({type:Boolean}),w("design:type",Boolean)],E.prototype,"_pageButtonAccess",void 0),E=k([(0,s.Mo)("attendance-setup-form-view-agendas"),w("design:paramtypes",[])],E)}},e=>(e.O(0,[5744,2185,9674,4351,1109,6236,6069,3901,3712],(()=>(5879,e(e.s=5879)))),e.O())])));
//# sourceMappingURL=list-agendas.js.map