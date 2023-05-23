"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/view-agenda"],{3076:(e,t,a)=>{a.r(t)},6951:(e,t,a)=>{a.r(t),a.d(t,{dateTime:()=>n,getDateTime:()=>s});const n=(e="")=>{let t=new Date,a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),d=t.getHours(),i=t.getMinutes(),l=t.getSeconds(),c=a+"-"+n+"-"+s,r=d+":"+i+":"+l;return{dateTime:new Date(a,n,s,d,i,l),__string__:c+" "+r,__code__:a+n+s+d+i+l}},s=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2138:(e,t,a)=>{a.r(t),a.d(t,{AttendanceSetupFormViewAgenda:()=>v}),a(3076),a(5501),a(3683),a(4657),a(1511);var n=a(9068),s=a(5862),d=a(9662),i=(a(8693),a(7712)),l=a(1354),c=a(1302),r=a(7108),o=a(540),p=a(4672),u=a(7234),_=a(6951),g=a(8485),m=(a(2715),function(e,t,a,n){var s,d=arguments.length,i=d<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(d<3?s(i):d>3?s(t,a,i):s(t,a))||i);return d>3&&i&&Object.defineProperty(t,a,i),i}),h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,a,n){return new(a||(a=Promise))((function(s,d){function i(e){try{c(n.next(e))}catch(e){d(e)}}function l(e){try{c(n.throw(e))}catch(e){d(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this.meetingAgendaId=0,this.meetingEventId=0,this._pageButtonAccess=!1,this.__scheduleAgenda=null}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),this.getMeetingAgendaId(),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(r.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:r.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <div class="m-1 w-full flex justify-end">
          <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
            href="${g.CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${this.meetingAgendaId}"
            label="Update"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `}get display(){return null===this._scheduleAgenda?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgenda?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.scheduleAgenda}
      `}get scheduleAgenda(){const e=this._scheduleAgenda,t=(0,_.getDateTime)(e.meetingDate,{dateStyle:"medium"});return s.html`
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
    `}get getMeetingAttendanceAgendas(){const e=this._scheduleAgenda;return(0,_.getDateTime)(e.meetingDate,{dateStyle:"medium"}),s.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
          <b>File</b>
        </th>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell !py-1" scope="row">
          ${null===e.attachment?"No File":s.html`<a href="${e.attachment}" target="_blank">Open File</a>`}
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new n.MDCDataTable(e)}))}getMeetingEventId(){let e=(0,p.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,p.urlQueryParamsGet)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceScheduleAgenda(){return b(this,void 0,void 0,(function*(){const e=yield(0,o.GET_AttendanceScheduleAgenda)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,a=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=u.Convert.toMeetingAgendaModel(JSON.stringify(a))}}))}createRenderRoot(){return this}};m([(0,d.property)({type:String}),h("design:type",String)],v.prototype,"email",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"mId",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"clientId",void 0),m([(0,d.property)({type:Boolean}),h("design:type",Boolean)],v.prototype,"_hasSetup",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"meetingAgendaId",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"meetingEventId",void 0),m([(0,d.property)({type:Boolean}),h("design:type",Boolean)],v.prototype,"_pageButtonAccess",void 0),v=m([(0,d.customElement)("attendance-setup-form-view-agenda"),h("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_widget_simple-table_main_scss-src_addons_interfaces_attendance_agenda-6585a2","shared"],(()=>(2138,e(e.s=2138)))),e.O())])));
//# sourceMappingURL=view-agenda.js.map