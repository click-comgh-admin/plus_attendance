"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member-days"],{45501:(e,t,n)=>{n.r(t)},24173:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>s});const s=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},49744:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceScheduleMemberDay:()=>m});var s=n(86455),a=n.n(s),r=n(48485),i=n(87270),d=n(14492),o=n(8967),c=n(33600),l=function(e,t,n,s){return new(n||(n=Promise))((function(a,r){function i(e){try{o(s.next(e))}catch(e){r(e)}}function d(e){try{o(s.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}o((s=s.apply(e,t||[])).next())}))};function m(e){return l(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/"+e,s={};return a().fire({title:"Remove Member Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new d.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,o.https_swal_error_format)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new d.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}a().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},32617:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberDay:()=>d});var s=n(48485),a=n(87270),r=n(14492),i=n(33600);function d(e=null,t=""){return n=this,d=void 0,c=function*(){const n=(0,i.getUserLoginInfoCookie)(),d=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}r((c=c.apply(n,d||[])).next())}));var n,d,o,c}},55524:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMember:()=>d});var s=n(48485),a=n(87270),r=n(14492),i=n(33600);function d(e=null,t=""){return n=this,d=void 0,c=function*(){const n=(0,i.getUserLoginInfoCookie)(),d=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}r((c=c.apply(n,d||[])).next())}));var n,d,o,c}},59665:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDays:()=>u}),n(69579),n(43683),n(74657);var s=n(14108),a=n(85862),r=n(59662),i=(n(8693),n(27712)),d=n(91354),o=n(41302),c=n(17108),l=(n(16628),function(e,t,n,s){var a,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}),m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends a.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((a=void 0)||(a=Promise))((function(e,s){function i(e){try{o(r.next(e))}catch(e){s(e)}}function d(e){try{o(r.throw(e))}catch(e){s(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,d)}o((r=r.apply(t,n||[])).next())}));var t,n,a,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return a.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,o.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,o.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return a.html`<no-page-entry-component></no-page-entry-component>`}return a.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-days-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-days-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};l([(0,r.property)({type:String}),m("design:type",String)],u.prototype,"email",void 0),l([(0,r.property)({type:Number}),m("design:type",Number)],u.prototype,"mId",void 0),l([(0,r.property)({type:Number}),m("design:type",Number)],u.prototype,"clientId",void 0),l([(0,r.property)({type:Number}),m("design:type",Number)],u.prototype,"meetingEventId",void 0),l([(0,r.property)({type:Boolean}),m("design:type",Boolean)],u.prototype,"_hasSetup",void 0),l([(0,r.property)({type:Boolean}),m("design:type",Boolean)],u.prototype,"_pageButtonAccess",void 0),u=l([(0,r.customElement)("attendance-setup-form-edit-member-days"),m("design:paramtypes",[])],u)},16628:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDaysContent:()=>g}),n(45501);var s,a,r=n(85862),i=n(59662),d=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),o=n(44672),c=(n(75866),n(11148)),l=n(24173),m=n(7149),u=n(55524),h=n(32617),p=n(67824),_=n(37067),y=n(49744),b=(n(62643),function(e,t,n,s){var a,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}),f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,s){return new(n||(n=Promise))((function(a,r){function i(e){try{o(s.next(e))}catch(e){r(e)}}function d(e){try{o(s.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}o((s=s.apply(e,t||[])).next())}))};let g=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__scheduleDays=[],this.__meetingMember=null,this.__memberDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDays(e){this.__memberDays=e,this.requestUpdate()}get _memberDays(){return this.__memberDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingMemberId(),yield this.getDaysOfWeek(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDay(),yield this.getAttendanceScheduleMemberDay()}))}disconnectedCallback(){}render(){return r.html`${this.schedule}`}get schedule(){return null===this._meetingMember?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?r.html`${this.memberDay}`:r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDay(){return null===this._memberDays?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDays?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.html`${this.table}`}get table(){return this._memberDays.length>0?r.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Member Meeting Day">
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
                        Meeting Day
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Date
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Date
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
                ${this.getMeetingAttendanceDays}
              </tbody>
            </table>
          </div>
        </div>
      `:r.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDays(){return r.html`
      ${this._memberDays.map(((e,t)=>r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${""}
              ${this.getMemberDayOfWeek(e.dayId.id)}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.getDate)(e.dayId.startDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.getDate)(e.dayId.endDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDay}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Day</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Day!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-day">
                <div class="p-0 m-0" show-dayField="all">
                  <member-day-multiple-inputs-component .meetingDays="${this._scheduleDays}" 
                    .daysOfWeek="${this._daysOfWeek}" meetingMemberId="${this.meetingMemberId}"
                    meetingEventId="${this.meetingEventId}">
                  </member-day-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="${this.meetingMemberId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Day(s)" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.MDCDataTable(e)}))}getMemberDayOfWeek(e){let t="-";return this._scheduleDays.forEach((n=>{e===n.id&&this._daysOfWeek.forEach((e=>{n.dayId===e.id&&(t=e.day)}))})),t}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-day-multiple-inputs-component").forEach((e=>v(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield(0,_.POST_AttendanceScheduleMemberDayBulk)(t)}))))}))}deleteMemberMeetingAttendanceDay(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,y.DELETE_AttendanceScheduleMemberDay)(t)}))}getMeetingMemberId(){let e=(0,o.urlQueryParamsGet)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return v(this,void 0,void 0,(function*(){const e=yield(0,u.GET_AttendanceScheduleMember)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,p.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getAttendanceScheduleMemberDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.GET_AttendanceScheduleMemberDay)(null,"?memberId="+this.meetingMemberId+"&meetingEventId="+this.meetingEventId+"&dayId__meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push(new m.MemberMeetingEventDayModel):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>m.MemberMeetingEventDayModel.fromJson(e))));const n=[];n.push(...this._memberDays,...t),this._memberDays=n}))}getDaysOfWeek(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return v(this,void 0,void 0,(function*(){const t=yield(0,c.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};g.styles=[r.css`
   :host { display: block; }
  `],b([(0,i.property)({type:Number}),f("design:type",Number)],g.prototype,"CLIENT_ID",void 0),b([(0,i.property)({type:Number}),f("design:type",Number)],g.prototype,"startSearchPage",void 0),b([(0,i.property)({type:Array}),f("design:type",Array)],g.prototype,"_daysOfWeek",void 0),b([(0,i.property)({type:Array}),f("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],g.prototype,"_data",void 0),b([(0,i.property)({type:Object}),f("design:type",Object)],g.prototype,"urlQueryParams",void 0),b([(0,i.property)({type:Number}),f("design:type",Number)],g.prototype,"meetingMemberId",void 0),b([(0,i.property)({type:Number}),f("design:type",Number)],g.prototype,"meetingEventId",void 0),b([(0,i.query)('[show-dayField="all"]'),f("design:type","function"==typeof(a="undefined"!=typeof Element&&Element)?a:Object)],g.prototype,"showDayFieldAllSelector",void 0),g=b([(0,i.customElement)("attendance-setup-form-edit-member-days-content"),f("design:paramtypes",[])],g)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_attendance_meeting_event-9c74b9","src_addons_interfaces_attendance_meeting_event_member_member_index_ts-src_addons_widgets_add_-7d4222","src_addons_network_attendance_day_of_week_index_ts-src_addons_network_attendance_setup_day_in-7ee3af","shared"],(()=>(59665,e(e.s=59665)))),e.O())])));
//# sourceMappingURL=edit-member-days.js.map