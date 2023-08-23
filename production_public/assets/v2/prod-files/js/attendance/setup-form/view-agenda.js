"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8667],{6951:(e,t,a)=>{a.d(t,{F:()=>n});const n=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2138:(e,t,a)=>{a.r(t),a.d(t,{AttendanceSetupFormViewAgenda:()=>y}),a(3683),a(4657),a(6811);var n=a(2262),d=a(5862),s=a(8393),i=(a(8693),a(9665)),c=a(8092),l=a(1302),r=a(7108),o=a(540),u=a(4672),p=a(7234),g=a(6951),h=a(771),b=(a(2715),function(e,t,a,n){var d,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(d=e[c])&&(i=(s<3?d(i):s>3?d(t,a,i):d(t,a))||i);return s>3&&i&&Object.defineProperty(t,a,i),i}),m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,a,n){return new(a||(a=Promise))((function(d,s){function i(e){try{l(n.next(e))}catch(e){s(e)}}function c(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?d(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))};let y=class extends d.oi{constructor(){super(),this._hasSetup=!1,this.meetingAgendaId=0,this.meetingEventId=0,this._pageButtonAccess=!1,this.__scheduleAgenda=null}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),this.getMeetingAgendaId(),(0,i.f)().then((()=>this._hasSetup=!0)),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,c.H)())||void 0===e?void 0:e.expiration_date.expired)return d.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.OR)(r.W.schedule_meeting_event),!(0,l.H)({pageId:r.W.schedule_meeting_event,viewType:"View"},!1))return d.dy`<no-page-entry-component></no-page-entry-component>`}return d.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <div class="m-1 w-full flex justify-end">
          <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
            href="${h.t.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${this.meetingAgendaId}"
            label="Update"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `}get display(){return null===this._scheduleAgenda?d.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgenda?d.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:d.dy`
        ${this.scheduleAgenda}
      `}get scheduleAgenda(){const e=this._scheduleAgenda,t=(0,g.F)(e.meetingDate,{dateStyle:"medium"});return d.dy`
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
    `}get getMeetingAttendanceAgendas(){const e=this._scheduleAgenda;return(0,g.F)(e.meetingDate,{dateStyle:"medium"}),d.dy`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
          <b>File</b>
        </th>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell !py-1" scope="row">
          ${null===e.attachment?"No File":d.dy`<a href="${e.attachment}" target="_blank">Open File</a>`}
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new n.T(e)}))}getMeetingEventId(){let e=(0,u.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,u.Jx)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceScheduleAgenda(){return v(this,void 0,void 0,(function*(){const e=yield(0,o.p)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,a=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=p.e.toMeetingAgendaModel(JSON.stringify(a))}}))}createRenderRoot(){return this}};b([(0,s.Cb)({type:String}),m("design:type",String)],y.prototype,"email",void 0),b([(0,s.Cb)({type:Number}),m("design:type",Number)],y.prototype,"mId",void 0),b([(0,s.Cb)({type:Number}),m("design:type",Number)],y.prototype,"clientId",void 0),b([(0,s.Cb)({type:Boolean}),m("design:type",Boolean)],y.prototype,"_hasSetup",void 0),b([(0,s.Cb)({type:Number}),m("design:type",Number)],y.prototype,"meetingAgendaId",void 0),b([(0,s.Cb)({type:Number}),m("design:type",Number)],y.prototype,"meetingEventId",void 0),b([(0,s.Cb)({type:Boolean}),m("design:type",Boolean)],y.prototype,"_pageButtonAccess",void 0),y=b([(0,s.Mo)("attendance-setup-form-view-agenda"),m("design:paramtypes",[])],y)}},e=>(e.O(0,[5744,2185,4351,1109,6236,6069,214,3901,4735,3712],(()=>(2138,e(e.s=2138)))),e.O())])));
//# sourceMappingURL=view-agenda.js.map