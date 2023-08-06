"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-06b720"],{26660:(e,t,n)=>{n.r(t)},52368:(e,t,n)=>{n.r(t),n.d(t,{FilterFieldBox:()=>a});var i=n(44672);class a{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{var t,n;e.preventDefault();const i=window.FilterFieldBox.form,a=new FormData(i),l=null===(t=this.unmutableInputNames)||void 0===t?void 0:t.map((e=>e.name));null==a||a.forEach(((e,t)=>{var n;(null==l?void 0:l.includes(t))||null===(n=document.querySelectorAll('[name="'+t+'"]'))||void 0===n||n.forEach((e=>{e.value=""}))})),null===(n=this.unmutableInputNames)||void 0===n||n.map((e=>{var t;const n=e.name,i=e.value;void 0!==i&&(null===(t=document.querySelectorAll('[name="'+n+'"]'))||void 0===t||t.forEach((e=>{e.value=i})))})),i.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},53464:(e,t,n)=>{function i(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>i})},12583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>a});var i=n(53464);function a(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},72869:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>i})},11148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),r=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function l(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,c=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}l((o=o.apply(n,r||[])).next())}));var n,r,c,o}},67824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,c=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}l((o=o.apply(n,r||[])).next())}));var n,r,c,o}},32734:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e,t=""){return n=this,r=void 0,o=function*(){const n=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,c=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}l((o=o.apply(n,r||[])).next())}));var n,r,c,o}},11694:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=""){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,r=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function l(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}},17435:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=""){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,r=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function l(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}},56972:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=""){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,r=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function l(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}l((o=o.apply(n,r||[])).next())}));var n,r,c,o}},37891:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericGender:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),r=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function l(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}l((o=o.apply(n,r||[])).next())}));var n,r,c,o}},90072:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),r=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(c.next(e))}catch(e){i(e)}}function l(e){try{s(c.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}},89605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>r});var i=n(48485),a=n(87270),l=n(14492),s=n(33600);function r(e=null,t=""){return n=this,r=void 0,o=function*(){const n=(0,s.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,a.http)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function a(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,a)}l((o=o.apply(n,r||[])).next())}));var n,r,c,o}},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>r});var i=n(85862),a=n(59662),l=(n(29975),n(16788),function(e,t,n,i){var a,l=arguments.length,s=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(t,n,s):a(t,n))||s);return l>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};r.styles=[i.css`
      :host {
        display: block;
      }
    `],l([(0,a.property)({type:String}),s("design:type",String)],r.prototype,"name",void 0),l([(0,a.property)({type:String}),s("design:type",String)],r.prototype,"label",void 0),l([(0,a.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"selected",void 0),l([(0,a.property)({type:String}),s("design:type",String)],r.prototype,"value",void 0),l([(0,a.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"isSelected",void 0),r=l([(0,a.customElement)("switch-input")],r)},60997:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>N}),n(73794);var i,a,l,s,r,c=n(85862),o=n(59662),d=n(17725),h=n(67052),u=n(44672),m=(n(51511),n(92715),n(48763),n(15474),n(66163),n(12583)),p=n(32506),g=n(33600),v=n(23283),y=n(11694),f=n(17435),_=n(32734),b=n(56972),w=(n(43690),n(11148)),S=n(8698),A=n(67824),k=n(58881),E=n(52218),B=function(e,t,n,i){var a,l=arguments.length,s=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(t,n,s):a(t,n))||s);return l>3&&s&&Object.defineProperty(t,n,s),s},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},$=function(e,t,n,i){return new(n||(n=Promise))((function(a,l){function s(e){try{c(i.next(e))}catch(e){l(e)}}function r(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let N=class extends c.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return $(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,g.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return c.html`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?c.html`
        ${this.nowSectionData}
      `:2===this.formId?c.html`
        ${this.todaySectionData}
      `:3===this.formId?c.html`
        ${this.upcomingSectionData}
      `:4===this.formId?c.html`
        ${this.dateSectionData}
      `:c.html`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=c.html`<h4 class="text-white">Empty</h4>`,t=c.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return c.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:c.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):c.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:c.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):c.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:c.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):c.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=c.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return c.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?c.html`${e}${this.notFound}`:c.html`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):c.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return c.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return c.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):c.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,h.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),a=this.getTime(String(e.closeTime));return c.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${a} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,k.until)(this.getAttendanceScheduleDay(t),c.html`<span>Loading...</span>`):(0,k.until)(this.getAttendanceScheduleDate(t),c.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,h.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,p.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,m.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceAllSchedules(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,E.GET_AttendanceSchedule)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,y.GET_AttendanceScheduleNow)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,f.GET_AttendanceScheduleToday)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return $(this,void 0,void 0,(function*(){const t=yield(0,A.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return c.html`<li class="border p-1">Every ${(0,k.until)(this.getDayOfWeek(t),c.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return c.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return $(this,void 0,void 0,(function*(){const t=yield(0,w.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return $(this,void 0,void 0,(function*(){const t=yield(0,S.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e+"&length=1000");if(null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return c.html`<li class="border p-1">On ${t}</li>`}));return c.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};N.styles=[c.css`
   :host { display: block; }
  `],B([(0,o.query)("#getNowMeetingsBtn"),I("design:type","function"==typeof(i=void 0!==v.Button&&v.Button)?i:Object)],N.prototype,"getNowMeetingsBtn",void 0),B([(0,o.query)("#getAllMeetingsBtn"),I("design:type","function"==typeof(a=void 0!==v.Button&&v.Button)?a:Object)],N.prototype,"getAllMeetingsBtn",void 0),B([(0,o.query)("#getTodayMeetingsBtn"),I("design:type","function"==typeof(l=void 0!==v.Button&&v.Button)?l:Object)],N.prototype,"getTodayMeetingsBtn",void 0),B([(0,o.query)("#getUpcomingMeetingsBtn"),I("design:type","function"==typeof(s=void 0!==v.Button&&v.Button)?s:Object)],N.prototype,"getUpcomingMeetingsBtn",void 0),B([(0,o.query)("#getDateMeetingsBtn"),I("design:type","function"==typeof(r=void 0!==v.Button&&v.Button)?r:Object)],N.prototype,"getDateMeetingsBtn",void 0),B([(0,o.property)({type:String}),I("design:type",String)],N.prototype,"todayDate",void 0),B([(0,o.property)({type:Number}),I("design:type",Number)],N.prototype,"meetingEventId",void 0),B([(0,o.property)({type:Number}),I("design:type",Number)],N.prototype,"loggedUserId",void 0),B([(0,o.property)({type:Number}),I("design:type",Number)],N.prototype,"formId",void 0),B([(0,o.property)({type:Boolean}),I("design:type",Boolean)],N.prototype,"allowFetch",void 0),B([(0,o.property)({type:Boolean}),I("design:type",Boolean)],N.prototype,"recurring",void 0),B([(0,o.property)({type:String}),I("design:type",String)],N.prototype,"openContentBaseUrl",void 0),B([(0,o.property)({type:String}),I("design:type",String)],N.prototype,"openMeetingEventBaseUrl",void 0),B([(0,o.property)({type:Array}),I("design:type",Array)],N.prototype,"_pageAccesses",void 0),B([(0,o.property)({type:Array}),I("design:type",Array)],N.prototype,"_activeBranchId",void 0),B([(0,o.property)({type:Array}),I("design:type",Array)],N.prototype,"_userLoginInfo",void 0),N=B([(0,o.customElement)("pdb-attendance-clocking-meeting-picker"),I("design:paramtypes",[])],N)},43629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>h}),n(26660);var i,a,l=n(85862),s=n(59662),r=n(90072),c=(n(75866),function(e,t,n,i){var a,l=arguments.length,s=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(l<3?a(s):l>3?a(t,n,s):a(t,n))||s);return l>3&&s&&Object.defineProperty(t,n,s),s}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,i){return new(n||(n=Promise))((function(a,l){function s(e){try{c(i.next(e))}catch(e){l(e)}}function r(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let h=class extends l.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?l.html`
        ${this.materialSelectField}
      `:l.html`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?l.html`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>l.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:l.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((n=>{n===e.id&&(t=!0)})),t?l.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:l.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let n=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(n=!0)}));let i=!1,a="false";n&&(i=!0,a="true");const l={id:t.id,name:t.category,isSelected:a,selected:i};e.includes(l)||e.push(l)}));let t=l.html`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return l.html`${t}`}get selectField(){let e=l.html``;return e=this.setDefaultValues.length<1?l.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>l.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:l.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((n=>{n===e.id&&(t=!0)})),t?l.html`<option value="${e.id}" selected>${e.category}</option>`:l.html`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,l.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return d(this,void 0,void 0,(function*(){const e=yield(0,r.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};h.styles=[l.css`
   :host { display: block; }
  `],c([(0,s.property)({type:String}),o("design:type",String)],h.prototype,"material",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"defaultValue",void 0),c([(0,s.property)({type:Array}),o("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],h.prototype,"defaultValues",void 0),c([(0,s.property)({type:Array}),o("design:type","function"==typeof(a="undefined"!=typeof Array&&Array)?a:Object)],h.prototype,"setDefaultValues",void 0),c([(0,s.property)({type:Number}),o("design:type",Number)],h.prototype,"selectedCategory",void 0),c([(0,s.property)({type:Boolean}),o("design:type",Boolean)],h.prototype,"multiple",void 0),c([(0,s.property)({type:Boolean}),o("design:type",Boolean)],h.prototype,"required",void 0),c([(0,s.property)({type:String}),o("design:type",String)],h.prototype,"label",void 0),c([(0,s.property)({type:String}),o("design:type",String)],h.prototype,"name",void 0),c([(0,s.property)({type:String}),o("design:type",String)],h.prototype,"id",void 0),c([(0,s.property)({type:String}),o("design:type",String)],h.prototype,"tag_class",void 0),c([(0,s.property)({type:String}),o("design:type",String)],h.prototype,"css_style",void 0),c([(0,s.property)({type:Array}),o("design:type",Array)],h.prototype,"_memberCategories",void 0),h=c([(0,s.customElement)("pdb-membership-select-member-type"),o("design:paramtypes",[])],h)}}]);
//# sourceMappingURL=src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-06b720.js.map