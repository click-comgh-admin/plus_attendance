"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member-groups"],{15049:(e,t,s)=>{s.r(t),s.d(t,{GET_AttendanceScheduleMemberGroup:()=>l});var r=s(48485),n=s(87270),o=s(14492),i=s(33600);function l(e=null,t=""){return s=this,l=void 0,a=function*(){const s=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/members"+(null===e?"":"/"+e)+t,c=yield(0,n.http)(l,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{o(a.next(e))}catch(e){t(e)}}function n(e){try{o(a.throw(e))}catch(e){t(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof c?s:new c((function(e){e(s)}))).then(r,n)}o((a=a.apply(s,l||[])).next())}));var s,l,c,a}},4358:(e,t,s)=>{s.r(t),s.d(t,{POST_AttendanceAddScheduleGroupMember:()=>u});var r=s(86455),n=s.n(r),o=s(48485),i=s(87270),l=s(14492),c=s(8967),a=s(33600),d=function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/member",s=document.querySelector('[make-general-posts="add-schedule-group"]'),r=new FormData(s);return n().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((s=>{let r={error:t.id+": "+s};"non_field_errors"===t.id&&(r={error:s}),e.push(r)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),s=r.response.success}s&&n().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},97434:(e,t,s)=>{s.r(t),s.d(t,{AttendanceSetupFormEditMemberGroups:()=>p}),s(69579),s(43683),s(74657);var r=s(14108),n=s(85862),o=s(59662),i=(s(87553),s(8693),s(27712)),l=s(91354),c=s(41302),a=s(17108),d=function(e,t,s,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(o<3?n(i):o>3?n(t,s,i):n(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends n.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,o=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(t){var s;t.done?e(t.value):(s=t.value,s instanceof n?s:new n((function(e){e(s)}))).then(i,l)}c((o=o.apply(t,s||[])).next())}));var t,s,n,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(a.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:a.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}return n.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member-groups CLIENT_ID="${this.clientId}"></attendance-setup-form-member-groups>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};d([(0,o.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=d([(0,o.customElement)("attendance-setup-form-edit-member-groups"),u("design:paramtypes",[])],p)},87553:(e,t,s)=>{s.r(t),s.d(t,{AttendanceSetupFormMemberGroups:()=>v}),s(45501);var r,n,o=s(85862),i=s(59662),l=s(58881),c=(s(23283),s(51511),s(43690),s(71854),s(37725),s(29068)),a=s(52218),d=s(44672),u=s(77128),p=(s(75866),s(2892)),h=s(15049),m=s(4358),_=function(e,t,s,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(o<3?n(i):o>3?n(t,s,i):n(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,s,r){return new(s||(s=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};let v=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
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
      `:!0===this._schedule.success?o.html`${this.scheduleGroup}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleGroups.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Group
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
                ${this.getMeetingAttendanceGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return o.html`
      ${this._scheduleGroups.results.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getGroup(e.groupId),o.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member Groups</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member Groups!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-group">
                <div class="p-0 m-0" show-groupField="all">
                  ${this.groupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member Groups" raised class="button" @click="${this.submitForm}">
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
    `}get groupField(){const e=this._groups.map((e=>o.html`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${o.html`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,s=document.createElement("multiple-widgets");s.setAttribute("class","col-md-12 col-lg-12 mb-3"),s.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(s);const r=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),n=this.groupField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=n}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.MDCDataTable(e)}))}submitForm(e){return f(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_AttendanceAddScheduleGroupMember)()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return f(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleGroup)(t)}))}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return f(this,void 0,void 0,(function*(){const e=yield(0,a.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return f(this,void 0,void 0,(function*(){const e=yield(0,h.GET_AttendanceScheduleMemberGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return f(this,void 0,void 0,(function*(){const e=yield(0,p.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const s=[];s.push(...this._groups,...t),this._groups=s}))}getGroup(e){return f(this,void 0,void 0,(function*(){const t=yield(0,p.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};v.styles=[o.css`
   :host { display: block; }
  `],_([(0,i.property)({type:Number}),g("design:type",Number)],v.prototype,"CLIENT_ID",void 0),_([(0,i.property)({type:Number}),g("design:type",Number)],v.prototype,"startSearchPage",void 0),_([(0,i.property)({type:Array}),g("design:type",Array)],v.prototype,"_groups",void 0),_([(0,i.property)({type:Array}),g("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],v.prototype,"_data",void 0),_([(0,i.property)({type:Object}),g("design:type",Object)],v.prototype,"urlQueryParams",void 0),_([(0,i.property)({type:Number}),g("design:type",Number)],v.prototype,"meetingEventId",void 0),_([(0,i.query)('[show-groupField="all"]'),g("design:type","function"==typeof(n="undefined"!=typeof Element&&Element)?n:Object)],v.prototype,"showGroupFieldAllSelector",void 0),v=_([(0,i.customElement)("attendance-setup-form-member-groups"),g("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_assets_styles_views_widget_simple-table_main_scss-src_addons_network_attendance_setup_gro-4befb5","shared"],(()=>(97434,e(e.s=97434)))),e.O())])));
//# sourceMappingURL=edit-member-groups.js.map