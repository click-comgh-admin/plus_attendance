"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/view-agenda"],{3076:(e,t,n)=>{n.r(t)},6951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>a,getDateTime:()=>s});const a=(e="")=>{let t=new Date,n=t.getFullYear(),a=t.getMonth()+1,s=t.getDate(),d=t.getHours(),i=t.getMinutes(),l=t.getSeconds(),c=n+"-"+a+"-"+s,r=d+":"+i+":"+l;return{dateTime:new Date(n,a,s,d,i,l),__string__:c+" "+r,__code__:n+a+s+d+i+l}},s=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2138:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormViewAgenda:()=>v}),n(3076),n(5501),n(3683),n(4657),n(1511);var a=n(9068),s=n(5862),d=n(9662),i=(n(8693),n(7712)),l=n(1354),c=n(1302),r=n(7108),o=n(540),_=n(4672),p=n(7234),u=n(6951),g=n(8485),m=(n(2715),function(e,t,n,a){var s,d=arguments.length,i=d<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(d<3?s(i):d>3?s(t,n,i):s(t,n))||i);return d>3&&i&&Object.defineProperty(t,n,i),i}),h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,a){return new(n||(n=Promise))((function(s,d){function i(e){try{c(a.next(e))}catch(e){d(e)}}function l(e){try{c(a.throw(e))}catch(e){d(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this.meetingAgendaId=0,this.meetingEventId=0,this._pageButtonAccess=!1,this.__scheduleAgenda=null}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),this.getMeetingAgendaId(),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(r.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:r.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
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
      `}get scheduleAgenda(){const e=this._scheduleAgenda,t=(0,u.getDateTime)(e.meetingDate,{dateStyle:"medium"});return s.html`
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
    `}get getMeetingAttendanceAgendas(){const e=this._scheduleAgenda;return(0,u.getDateTime)(e.meetingDate,{dateStyle:"medium"}),s.html`
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}getMeetingEventId(){let e=(0,_.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,_.urlQueryParamsGet)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceScheduleAgenda(){return b(this,void 0,void 0,(function*(){const e=yield(0,o.GET_AttendanceScheduleAgenda)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,n=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=p.Convert.toMeetingAgendaModel(JSON.stringify(n))}}))}createRenderRoot(){return this}};m([(0,d.property)({type:String}),h("design:type",String)],v.prototype,"email",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"mId",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"clientId",void 0),m([(0,d.property)({type:Boolean}),h("design:type",Boolean)],v.prototype,"_hasSetup",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"meetingAgendaId",void 0),m([(0,d.property)({type:Number}),h("design:type",Number)],v.prototype,"meetingEventId",void 0),m([(0,d.property)({type:Boolean}),h("design:type",Boolean)],v.prototype,"_pageButtonAccess",void 0),v=m([(0,d.customElement)("attendance-setup-form-view-agenda"),h("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_widget_simple-table_main_scss-src_addons_interfaces_attendance_agenda-6585a2","shared"],(()=>(2138,e(e.s=2138)))),e.O())])));
//# sourceMappingURL=view-agenda.js.map