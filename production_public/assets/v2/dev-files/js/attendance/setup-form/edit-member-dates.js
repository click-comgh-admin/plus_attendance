"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member-dates"],{45501:(e,t,n)=>{n.r(t)},24173:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>r});const r=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},14302:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceScheduleMemberDate:()=>m});var r=n(86455),s=n.n(r),a=n(48485),i=n(87270),o=n(14492),c=n(8967),d=n(33600),l=function(e,t,n,r){return new(n||(n=Promise))((function(s,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))};function m(e){return l(this,void 0,void 0,(function*(){const t=(0,d.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date/"+e,r={};return s().fire({title:"Remove Member Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new o.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},68466:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberDate:()=>o});var r=n(48485),s=n(87270),a=n(14492),i=n(33600);function o(e=null,t=""){return n=this,o=void 0,d=function*(){const n=(0,i.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{a(d.next(e))}catch(e){t(e)}}function s(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,s)}a((d=d.apply(n,o||[])).next())}));var n,o,c,d}},55524:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMember:()=>o});var r=n(48485),s=n(87270),a=n(14492),i=n(33600);function o(e=null,t=""){return n=this,o=void 0,d=function*(){const n=(0,i.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{a(d.next(e))}catch(e){t(e)}}function s(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,s)}a((d=d.apply(n,o||[])).next())}));var n,o,c,d}},75337:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDates:()=>u}),n(69579),n(43683),n(74657);var r=n(14108),s=n(85862),a=n(59662),i=(n(8693),n(27712)),o=n(91354),c=n(41302),d=n(17108),l=(n(50047),function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}),m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,o)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(d.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-dates-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-dates-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};l([(0,a.property)({type:String}),m("design:type",String)],u.prototype,"email",void 0),l([(0,a.property)({type:Number}),m("design:type",Number)],u.prototype,"mId",void 0),l([(0,a.property)({type:Number}),m("design:type",Number)],u.prototype,"clientId",void 0),l([(0,a.property)({type:Number}),m("design:type",Number)],u.prototype,"meetingEventId",void 0),l([(0,a.property)({type:Boolean}),m("design:type",Boolean)],u.prototype,"_hasSetup",void 0),l([(0,a.property)({type:Boolean}),m("design:type",Boolean)],u.prototype,"_pageButtonAccess",void 0),u=l([(0,a.customElement)("attendance-setup-form-edit-member-dates"),m("design:paramtypes",[])],u)},50047:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDatesContent:()=>g}),n(45501);var r,s=n(85862),a=n(59662),i=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),o=n(44672),c=(n(75866),n(24173)),d=n(55524),l=(n(90002),n(28322)),m=n(8698),u=n(13930),p=n(14302),h=n(68466),_=function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,r){return new(n||(n=Promise))((function(s,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))};let g=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dateUser=null,this.__scheduleDates=[],this.__meetingMember=null,this.__memberDates=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dateUser(e){this.__dateUser=e,this.requestUpdate()}get _dateUser(){return this.__dateUser}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDates(e){this.__memberDates=e,this.requestUpdate()}get _memberDates(){return this.__memberDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingMemberId(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDate(),yield this.getAttendanceScheduleMemberDate()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._meetingMember?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?s.html`${this.memberDate}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDate(){return null===this._memberDates?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDates?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._memberDates.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Member Meeting Date">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Member
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Date
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
                ${this.getMeetingAttendanceDates}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDates(){return s.html`
      ${this._memberDates.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.getDate)(e.dateId.date,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-date">
                <div class="p-0 m-0" show-dateField="all">
                  <member-date-multiple-inputs-component .meetingDates="${this._scheduleDates}" 
                    meetingMemberId="${this.meetingMemberId}"
                    meetingEventId="${this.meetingEventId}">
                  </member-date-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="${this.meetingMemberId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Date(s)" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new i.MDCDataTable(e)}))}submitForm(e){return f(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-date-multiple-inputs-component").forEach((e=>f(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDateObjects;yield(0,u.POST_AttendanceScheduleMemberDateBulk)(t)}))))}))}deleteMemberMeetingAttendanceDate(e){return f(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceScheduleMemberDate)(t)}))}getMeetingMemberId(){let e=(0,o.urlQueryParamsGet)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return f(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceScheduleMember)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDate(){return f(this,void 0,void 0,(function*(){const e=yield(0,m.GET_AttendanceScheduleDate)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,date:new Date}):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results);const n=[];n.push(...this._scheduleDates,...t),this._scheduleDates=n}))}getAttendanceScheduleMemberDate(){return f(this,void 0,void 0,(function*(){const e=yield(0,h.GET_AttendanceScheduleMemberDate)(null,"?memberId="+this.meetingMemberId+"&length=1000");let t=[];null===e?t.push(new l.MemberMeetingEventDateModel):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>l.MemberMeetingEventDateModel.fromJson(e))));const n=[];n.push(...this._memberDates,...t),this._memberDates=n}))}createRenderRoot(){return this}};g.styles=[s.css`
   :host { display: block; }
  `],_([(0,a.property)({type:Number}),b("design:type",Number)],g.prototype,"CLIENT_ID",void 0),_([(0,a.property)({type:Number}),b("design:type",Number)],g.prototype,"startSearchPage",void 0),_([(0,a.property)({type:Array}),b("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],g.prototype,"_data",void 0),_([(0,a.property)({type:Object}),b("design:type",Object)],g.prototype,"urlQueryParams",void 0),_([(0,a.property)({type:Number}),b("design:type",Number)],g.prototype,"meetingMemberId",void 0),_([(0,a.property)({type:Number}),b("design:type",Number)],g.prototype,"meetingEventId",void 0),g=_([(0,a.customElement)("attendance-setup-form-edit-member-dates-content"),b("design:paramtypes",[])],g)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_attendance_meeting_event-9c74b9","src_addons_interfaces_attendance_meeting_event_member_member_index_ts-src_addons_widgets_add_-7d4222","src_addons_network_attendance_setup_date_index_ts-src_addons_network_attendance_setup_member_-bd7e20","shared"],(()=>(75337,e(e.s=75337)))),e.O())])));
//# sourceMappingURL=edit-member-dates.js.map