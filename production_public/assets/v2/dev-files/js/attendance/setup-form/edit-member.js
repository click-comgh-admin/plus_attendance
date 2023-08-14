"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member"],{52368:(e,t,n)=>{n.r(t),n.d(t,{FilterFieldBox:()=>r});var i=n(44672);class r{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{var t,n;e.preventDefault();const i=window.FilterFieldBox.form,r=new FormData(i),s=null===(t=this.unmutableInputNames)||void 0===t?void 0:t.map((e=>e.name));null==r||r.forEach(((e,t)=>{var n;(null==s?void 0:s.includes(t))||null===(n=document.querySelectorAll('[name="'+t+'"]'))||void 0===n||n.forEach((e=>{e.value=""}))})),null===(n=this.unmutableInputNames)||void 0===n||n.map((e=>{var t;const n=e.name,i=e.value;void 0!==i&&(null===(t=document.querySelectorAll('[name="'+n+'"]'))||void 0===t||t.forEach((e=>{e.value=i})))})),i.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},60089:(e,t,n)=>{n.r(t),n.d(t,{NavigatorRouter:()=>r});var i=n(48485);class r{constructor(){}static push(e,t={baseUrl:i.CONSTANTS.URLS.PDB_CLIENT}){const n=`${t.baseUrl}${e}`;window.location.href=n}}r.baseUrl=i.CONSTANTS.URLS.PDB_CLIENT},78276:(e,t,n)=>{n.r(t),n.d(t,{http_download:()=>s});var i=n(67153),r=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};function s(e,t,n=!0){return r(this,void 0,void 0,(function*(){let s=null;t=null==t?{method:"GET"}:t;var o=new Headers;if(o.append("Access-Control-Allow-Origin","*/*"),o.append("Accept","application/json, text/plain, */*"),n&&o.append("Content-Type","application/json"),void 0===t.headers)t.headers=o;else for(const e of o.keys())t.headers[e]=o.get(e);return t.mode="cors",t.redirect="follow",yield(0,i.default)(e,t,3e5).then((e=>(s=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>r(this,void 0,void 0,(function*(){return{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>r(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=e.response.headers.get("Content-Disposition").split(";")[1].split("=")[1],t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},14474:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleCategory:()=>a});var i=n(48485),r=n(87270),s=n(14492),o=n(33600);function a(e=null,t=""){return n=this,a=void 0,d=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function r(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}s((d=d.apply(n,a||[])).next())}));var n,a,c,d}},15049:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberGroup:()=>a});var i=n(48485),r=n(87270),s=n(14492),o=n(33600);function a(e=null,t=""){return n=this,a=void 0,d=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/members"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function r(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}s((d=d.apply(n,a||[])).next())}));var n,a,c,d}},997:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberDownload:()=>a});var i=n(48485),r=n(78276),s=n(14492),o=n(33600);function a(e=""){return t=this,n=void 0,c=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/download-excel"+e,a=yield(0,r.http_download)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return a}catch(e){let t=a;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function r(e){try{o(c.next(e))}catch(e){i(e)}}function s(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,s)}o((c=c.apply(t,n||[])).next())}));var t,n,a,c}},48774:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceUpdateScheduleMemberStatus:()=>u});var i=n(86455),r=n.n(i),s=n(48485),o=n(87270),a=n(14492),c=n(8967),d=n(33600),l=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};function u(e,t){return l(this,void 0,void 0,(function*(){const n=(0,d.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,u={statusId:t};return r().fire({title:"Update Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,o.http)(i,{method:"PUT",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},46634:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceScheduleMemberStatusBulk:()=>u});var i=n(86455),r=n.n(i),s=n(48485),o=n(87270),a=n(14492),c=n(8967),d=n(33600),l=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};function u(e,t){return l(this,void 0,void 0,(function*(){const n=(0,d.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/bulk-status/"+t,u=JSON.stringify(e);return r().fire({title:"Add Member Status(es)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,o.http)(i,{method:"PUT",body:u,headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1),n=t.multipleResponse;let i=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),i.length>0){const e=(0,c.https_swal_error_format)(i);return r().showValidationMessage(`${e}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},81245:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroupMember:()=>a});var i=n(48485),r=n(87270),s=n(14492),o=n(33600);function a(e=null,t=""){return n=this,a=void 0,d=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/members"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function r(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}s((d=d.apply(n,a||[])).next())}));var n,a,c,d}},56692:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>m}),n(69579),n(43683),n(74657);var i=n(14108),r=n(85862),s=n(59662),o=(n(16945),n(8693),n(27712)),a=n(91354),c=n(41302),d=n(17108),l=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends r.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,o.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,a)}c((s=s.apply(t,n||[])).next())}));var t,n,r,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(d.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return r.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};l([(0,s.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),l([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),l([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),l([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),l([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=l([(0,s.customElement)("attendance-setup-form-edit-member"),u("design:paramtypes",[])],m)},16945:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormMember:()=>F}),n(26660);var i,r,s,o,a,c,d,l,u,m,p,b=n(85862),h=n(59662),f=(n(15474),n(23283)),g=(n(66163),n(51511),n(43690),n(71854),n(37725),n(16883),n(30367),n(52218)),y=n(44672),v=n(38304),_=(n(75866),n(33512)),w=n(48485),S=n(33600),A=(n(71725),n(60089)),M=n(52368),x=n(14474),k=n(69474),I=n(15049),E=n(84676),C=n(32126),D=n(30701),$=n(81245),R=(n(66553),n(5236),n(89429),n(94934),n(46634)),N=n(997),O=(n(908),n(303),n(67824)),j=n(11148),B=n(8698),T=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},U=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};let F=class extends b.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.statusDisplay=1,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this.downloadingFile=!1,this.activeStatus=E.AttendanceMemberStatus.None,this._isLoading=!1,this.firstLoad=!0,this.renderView=b.html``,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this._categories=[],this._groups=[],this._subgroups=[],this.attendanceMembers=[],this.selectedAttendanceMembers=[],this.__scheduleDays=[],this._daysOfWeek=[],this.__scheduleDates=[]}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return U(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,y.urlQueryParams)(),this.getMeetingEventId(),this.filterBox=new M.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),document.onreadystatechange=e=>{"complete"==document.readyState&&this.handleQueryParam()},yield this.getAttendanceSchedule(),yield this.getCategories(),yield this.getGroups(),yield this.getSubGroups(),yield this.getDaysOfWeek(),yield this.getAttendanceScheduleDay(),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return b.html`
      <span class="flex flex-row md:flex-col w-100">
      </span>
      <div class="mt-1 mb-2 border border-y-2 rounded shadow-sm">
        <div class="block my-1 p-2">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
          <schedule-title-card meetingEventId="${this.meetingEventId}" CLIENT_ID="${this.CLIENT_ID}">
          </schedule-title-card>
        </div>
      </div>
      <div class="block my-2">
        ${this.firstLoad?this.mainRender:b.nothing}
        ${this._isLoading?b.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:this.renderView}
      </div>
    `}get getCurrentTabFromQueryParam(){return new URLSearchParams(window.location.search).get("status-view")}get currentIndex(){return this.getCurrentTabFromQueryParam===E.AttendanceMemberStatus.None.valueOf().toString()?E.AttendanceMemberStatus.None:this.getCurrentTabFromQueryParam===E.AttendanceMemberStatus.Assigned.valueOf().toString()?E.AttendanceMemberStatus.Assigned:this.getCurrentTabFromQueryParam===E.AttendanceMemberStatus.Unassigned.valueOf().toString()?E.AttendanceMemberStatus.Unassigned:E.AttendanceMemberStatus.Pending}handleQueryParam(){const e=this.getCurrentTabFromQueryParam;e===E.AttendanceMemberStatus.None.valueOf().toString()?this.displayAllStatus(new Event("click")):e===E.AttendanceMemberStatus.Assigned.valueOf().toString()?this.displayAssignedStatus(new Event("click")):e===E.AttendanceMemberStatus.Unassigned.valueOf().toString()?this.displayUnassignedStatus(new Event("click")):this.displayPendingStatus(new Event("click")),this.pageRenderFirstView()}updateQueryParam(e){const t=new URLSearchParams(window.location.search);t.set("status-view",e);const n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState(null,"",n),this.reloadRenderView(new Event("click"))}displayAllStatus(e){e.preventDefault(),this.statusDisplay=1,this.downloadingFile=!1,this.updateQueryParam(E.AttendanceMemberStatus.None.valueOf().toString())}displayAssignedStatus(e){e.preventDefault(),this.statusDisplay=2,this.downloadingFile=!1,this.updateQueryParam(E.AttendanceMemberStatus.Assigned.valueOf().toString())}displayUnassignedStatus(e){e.preventDefault(),this.statusDisplay=3,this.downloadingFile=!1,this.updateQueryParam(E.AttendanceMemberStatus.Unassigned.valueOf().toString())}displayPendingStatus(e){e.preventDefault(),this.statusDisplay=4,this.downloadingFile=!1,this.updateQueryParam(E.AttendanceMemberStatus.Pending.valueOf().toString())}pageRenderView(){this.firstLoad=!1,this._isLoading=!0,this.renderView=b.html``,setTimeout((()=>{this.renderView=this.mainRender,this._isLoading=!1}),100)}pageRenderFirstView(){setTimeout((()=>{this.firstLoad=!0,this._isLoading=!1,this.renderView=b.html``}),100)}get mainRender(){return b.html`
      <!-- <mwc-button icon="refresh" label="Reload" raised class="primary mt-1"
        @click="${""}">
      </mwc-button> -->
      <div>
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="album" id="allStatusDisplayBtn"
                label="All" @click="${this.displayAllStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedStatusDisplayBtn"
                label="Assigned" @click="${this.displayAssignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedStatusDisplayBtn"
                label="Unassigned" @click="${this.displayUnassignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timer" id="pendingStatusDisplayBtn"
                label="Pending" @click="${this.displayPendingStatus}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="album" id="allStatusDisplayBtn"
                label="All" @click="${this.displayAllStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedStatusDisplayBtn"
                label="Assigned" @click="${this.displayAssignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedStatusDisplayBtn"
                label="Unassigned" @click="${this.displayUnassignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timer" id="pendingStatusDisplayBtn"
                label="Pending" @click="${this.displayPendingStatus}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${""}
          </div>
        </div>
      </div>
      ${this.schedule}
    `}reloadRenderView(e){e.preventDefault(),this.pageRenderView()}get schedule(){return null===this._schedule?b.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?b.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?b.html`
        <div>
          ${this.groupsAndSubgroups}
          ${this.downloadBtns}
          ${this.table}
        </div>
      `:b.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get groupsAndSubgroups(){return b.html`
      <div class="main-container mt-2 mb-4">
        <div class="flex justify-end">
          <div class="flex flex-col md:flex-row justify-evenly">
            <mwc-button raised class="button info" type="button" @click="${()=>A.NavigatorRouter.push("settings/edit/member-groups?meeting-event-id="+this.meetingEventId)}">
              Assign Group(s)
            </mwc-button>
            <div class="m-1"></div>
            <mwc-button raised class="button warning" type="button" @click="${()=>A.NavigatorRouter.push("settings/edit/member-subgroups?meeting-event-id="+this.meetingEventId)}">
              Assign Sub-Group(s)
            </mwc-button>
          </div>
        </div>
      </div>
    `}get __tableHeaders(){return[{title:"Member(s)"},{title:"Status"},{title:"Grouping"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Status"},{title:"Grouping"},{title:"Action"}]}get table(){const e=0===this.currentIndex?"":`&statusId=${this.currentIndex}`;let t=w.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member?datatable_plugin&meetingEventId="+this.meetingEventId+e;t+=this.urlQueryString;const n=this.__dataTable(t);let i={};const r=(0,S.getUserLoginInfoCookie)();return i.Authorization="Token "+r.token,b.html`
      ${this.table_header}
      <datatables-new .datatable="${n}" .ajaxHeader="${i}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){this.filterBox=new M.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:String(this.meetingEventId)}]})}get downloadBtns(){const e=Math.random().toString(36).substring(2,22);return b.html`
      <div class="flex mb-4" id="inputId-${e}-inputId">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile?b.html`<mwc-circular-progress indeterminate></mwc-circular-progress>`:b.nothing}
      </div>
    `}get filterForm(){let e=b.html``;const t=(0,y.urlQueryParams)(),n="meetingGroupId",i="meetingSubgroupId",r="meetingCategoryId";let s=null,o=null,a=null;for(const e in t){let c=String(t[e]);c=""===c?null:c,e===n&&(o=c),e===i&&(a=c),e===r&&(s=c)}const c=Number.isNaN(o)?0:Number(o),d=Number.isNaN(a)?0:Number(a),l=Number.isNaN(s)?0:Number(s),u=this.groupsSubgroupsCategories(c,d,l),m=b.html`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${n}" class="w-full" id="${n}" label="Select Group"
            .options="${u.groups}" outlined required>
          </select-input>
        </div>
      </div>`,p=b.html`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${i}" class="w-full" id="${i}" label="Select Sub-Group"
            .options="${u.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`,h=b.html`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Category</h4>
          <select-input name="${r}" class="w-full" id="${r}" label="Select Category"
            .options="${u.categories}" outlined required>
          </select-input>
        </div>
      </div>`;return e=b.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container pb-2">
            <div class="row">
              ${h} ${m} ${p}
              <div class="col-xl-12 col-md-12">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" id="meeting-event-id" value="${this.meetingEventId}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}groupsSubgroupsCategories(e,t,n){let i=[{id:0,name:"Select Group Status",isSelected:"false",selected:!1}],r=[{id:0,name:"Select Sub-Group Status",isSelected:"false",selected:!1}],s=[{id:0,name:"Select Category Status",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let n=!1,r="false";e===t.id&&(n=!0,r="true");const s={id:t.id,name:t.groupInfo.group,isSelected:r,selected:n};i.includes(s)||i.push(s)})),this._subgroups.forEach((e=>{let n=!1,i="false";t===e.id&&(n=!0,i="true");const s={id:e.id,name:`${e.subGroupInfo.groupId.group} => ${e.subGroupInfo.subgroup}`,isSelected:i,selected:n};r.includes(s)||r.push(s)})),this._categories.forEach((e=>{let n=!1,i="false";t===e.id&&(n=!0,i="true");const r={id:e.id,name:`${e.memberCategoryId.category}`,isSelected:i,selected:n};s.includes(r)||s.push(r)})),{groups:i,subgroups:r,categories:s}}get urlQueryString(){const e=(0,y.urlQueryParams)(),t="meetingGroupId",n="meetingSubgroupId",i="meetingCategoryId";let r={};for(const s in e){let o=String(e[s]);s!==t&&s!==n&&s!==i||(r[s]=o,s!==t&&s!==n&&s!==i||"0"===o&&(r[s]=""))}let s=(0,y.urlQueryParamsJoin)(r);return 0===s.length?s:"&"+s}get table_header(){return b.html`
      <div class="p-2 mb-2 grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2 h-[50px]">
          <label class="flex justify-between items-stretch px-4 my-2">
            <b>CHECK ALL: </b>
            <input id="meeting_member_info_all" name="meeting_member_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_meeting_members}" />
          </label>
        </div>
        ${this.table_header_buttons}
      </div>
    `}get table_header_buttons(){const e=this.getCurrentTabFromQueryParam;return e===E.AttendanceMemberStatus.None.valueOf().toString()?b.html` ${this.table_header_day_dates_buttons} `:e===E.AttendanceMemberStatus.Assigned.valueOf().toString()?b.html`
        <div>
          <div
            class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
            <mwc-button class="danger" raised meeting_member_info_all="unassign"
              @click="${e=>this.updateBulkStatusID(e,2)}">Unassign Selected</mwc-button>
            <div class="w-4 h-4"></div>
            <mwc-button class="info" raised meeting_member_info_all="pending"
              @click="${e=>this.updateBulkStatusID(e,3)}">Set Pending To Selected</mwc-button>  
          </div>
          ${this.table_header_day_dates_buttons} 
        </div>
      `:e===E.AttendanceMemberStatus.Unassigned.valueOf().toString()?b.html`
        <div>
          <div
            class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
            <mwc-button class="success" raised meeting_member_info_all="assign"
              @click="${e=>this.updateBulkStatusID(e,1)}">Assign Selected</mwc-button>
            <div class="w-4 h-4"></div>
            <mwc-button class="info" raised meeting_member_info_all="unassign"
              @click="${e=>this.updateBulkStatusID(e,3)}">Set Pending To Selected</mwc-button>  
          </div>
          ${this.table_header_day_dates_buttons} 
        </div>
      `:b.html`
        <div>
          <div
            class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
            <mwc-button class="success" raised meeting_member_info_all="assign"
              @click="${e=>this.updateBulkStatusID(e,1)}">Assign Selected</mwc-button>
            <div class="w-4 h-4"></div>
            <mwc-button class="danger" raised meeting_member_info_all="pending"
              @click="${e=>this.updateBulkStatusID(e,2)}">Unassign Selected</mwc-button> 
          </div>
          ${this.table_header_day_dates_buttons} 
        </div>
      `}get table_header_day_dates_buttons(){return b.html`
      <div
        class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
        <attendance-setup-multiple-member-days-btn-component .selectedAttendanceMembers="${this.selectedAttendanceMembers}"
          @click="${this.set_selected_members_on_dialog_btn_click}" .meetingDays="${this._scheduleDays}"
          .daysOfWeek="${this._daysOfWeek}" clientId="${this.CLIENT_ID}" meetingEventId="${this.meetingEventId}">
        </attendance-setup-multiple-member-days-btn-component>
        <div class="w-2 h-2"></div>
        <attendance-setup-multiple-member-dates-btn-component .selectedAttendanceMembers="${this.selectedAttendanceMembers}"
          @click="${this.set_selected_members_on_dialog_btn_click}" .meetingDates="${this._scheduleDates}" 
          clientId="${this.CLIENT_ID}" meetingEventId="${this.meetingEventId}">
        </attendance-setup-multiple-member-dates-btn-component>
      </div>
    `}rowOneRender(e){const t=E.MeetingAttendanceMemberModel.fromJson(e);return`\n      <member-col-one-component activeStatus="${this.activeStatus}"\n        attendanceMemberString='${t.toString()}'>\n      </member-col-one-component>\n    `}rowTwoRender(e){const t=E.MeetingAttendanceMemberModel.fromJson(e);return`\n      <member-col-two-component activeStatus="${this.activeStatus}"\n      attendanceMemberString='${t.toString()}'>\n    </member-col-two-component>\n    `}rowThreeRender(e){const t=E.MeetingAttendanceMemberModel.fromJson(e);return`\n      <member-col-three-component activeStatus="${this.activeStatus}"\n      attendanceMemberString='${t.toString()}'>\n    </member-col-three-component>\n    `}rowFourRender(e){const t=E.MeetingAttendanceMemberModel.fromJson(e);return`\n      <member-col-four-component activeStatus="${this.activeStatus}"\n      attendanceMemberString='${t.toString()}'>\n    </member-col-four-component>\n    `}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.rowOneRender(i),orderable:!0,className:"w-1/6"},{data:"memberId",render:(e,n,i)=>t.rowTwoRender(i),orderable:!0,className:"w-20"},{data:"meetingEventId",render:(e,n,i)=>t.rowThreeRender(i),orderable:!0,className:"w-full sm:w-1/4"},{data:"statusId",render:(e,n,i)=>t.rowFourRender(i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return U(this,void 0,void 0,(function*(){const n=e.aoData;t.getCurrentList(n)}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}getCurrentList(e){this.attendanceMembers=[];let t=[];e.forEach((e=>{const n=e._aData,i=E.MeetingAttendanceMemberModel.fromJson(n);t.includes(i)||t.push(i)})),setTimeout((()=>{this.attendanceMembers=t}),100)}submitForm(e){return U(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,_.POST_AttendanceAddScheduleMember)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return U(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,v.DELETE_AttendanceDeleteScheduleMember)(t)}))}getMeetingEventId(){let e=(0,y.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return U(this,void 0,void 0,(function*(){const e=yield(0,g.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getCategories(){return U(this,void 0,void 0,(function*(){const e=yield(0,x.GET_AttendanceScheduleCategory)(null,"?length=10000&meetingEventId="+this.meetingEventId);if(null===e)this._categories=[];else{const t=e.paginResponse.results;Array.isArray(t)?this._categories=t.map((e=>k.MeetingEventCategoryModel.fromJson(e))):this._categories=[k.MeetingEventCategoryModel.fromJson(t)]}}))}getGroups(){return U(this,void 0,void 0,(function*(){const e=yield(0,I.GET_AttendanceScheduleMemberGroup)(null,"?length=10000&meetingEventId="+this.meetingEventId);if(null===e)this._groups=[];else{const t=e.paginResponse.results;Array.isArray(t)?this._groups=t.map((e=>C.MeetingAttendanceMemberGroupModel.fromJson(e))):this._groups=[C.MeetingAttendanceMemberGroupModel.fromJson(t)]}}))}getSubGroups(){return U(this,void 0,void 0,(function*(){const e=yield(0,$.GET_AttendanceScheduleSubGroupMember)(null,"?length=10000&meetingEventId="+this.meetingEventId);if(null===e)this._subgroups=[];else{const t=e.paginResponse.results;Array.isArray(t)?this._subgroups=t.map((e=>D.MeetingAttendanceMemberSubGroupModel.fromJson(e))):this._subgroups=[D.MeetingAttendanceMemberSubGroupModel.fromJson(t)]}}))}getDaysOfWeek(){return U(this,void 0,void 0,(function*(){const e=yield(0,j.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getAttendanceScheduleDay(){return U(this,void 0,void 0,(function*(){const e=yield(0,O.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getAttendanceScheduleDate(){return U(this,void 0,void 0,(function*(){const e=yield(0,B.GET_AttendanceScheduleDate)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,date:new Date}):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results);const n=[];n.push(...this._scheduleDates,...t),this._scheduleDates=n}))}set_selected_members_on_dialog_btn_click(e){if(e.preventDefault(),e.target.hasAttribute("open-dialog-btn")){let e=[];document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((t=>{if(t.checked&&!Number.isNaN(t.value)){const n=Number(t.value);e.includes(n)||e.push(n)}}));let t=[];this.selectedAttendanceMembers=[],this.attendanceMembers.forEach((n=>{const i=n.id;e.includes(i)&&(t.includes(n)||t.push(n))})),setTimeout((()=>{this.selectedAttendanceMembers=t}),100)}}check_all_meeting_members(e){return U(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="meeting_member_info_all"][name="meeting_member_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((e=>{e.checked=!1}))}))}))}updateBulkStatusID(e,t){return U(this,void 0,void 0,(function*(){e.preventDefault();let n=[];document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const t=Number(e.value);n.includes(t)||n.push(t)}}));let i=n.map((e=>({id:e})));yield(0,R.PUT_AttendanceScheduleMemberStatusBulk)(i,t)}))}downloadMemberExcel(e){return U(this,void 0,void 0,(function*(){e.preventDefault();const t=0===this.currentIndex?"":`&statusId=${this.currentIndex}`;let n="?datatable_plugin&meetingEventId="+this.meetingEventId+t;n+=this.urlQueryString,this.downloadingFile=!0,yield(0,N.GET_AttendanceScheduleMemberDownload)(n),this.downloadingFile=!1}))}createRenderRoot(){return this}};F.styles=[b.css`
   :host { display: block; }
  `],T([(0,h.property)({type:Number}),P("design:type",Number)],F.prototype,"CLIENT_ID",void 0),T([(0,h.property)({type:Number}),P("design:type",Number)],F.prototype,"startSearchPage",void 0),T([(0,h.query)('[filter-section-context="btn"]'),P("design:type","function"==typeof(i=void 0!==f.Button&&f.Button)?i:Object)],F.prototype,"filterSectionContextBtn",void 0),T([(0,h.query)('[filter-section-context="container"]'),P("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],F.prototype,"filterSectionContextContainer",void 0),T([(0,h.query)('[make-general-posts="submit_filter_form"]'),P("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],F.prototype,"filterSectionContextForm",void 0),T([(0,h.query)("#allStatusDisplayBtn"),P("design:type","function"==typeof(o=void 0!==f.Button&&f.Button)?o:Object)],F.prototype,"allStatusDisplayBtn",void 0),T([(0,h.query)("#assignedStatusDisplayBtn"),P("design:type","function"==typeof(a=void 0!==f.Button&&f.Button)?a:Object)],F.prototype,"assignedStatusDisplayBtn",void 0),T([(0,h.query)("#unassignedStatusDisplayBtn"),P("design:type","function"==typeof(c=void 0!==f.Button&&f.Button)?c:Object)],F.prototype,"unassignedStatusDisplayBtn",void 0),T([(0,h.query)("#pendingStatusDisplayBtn"),P("design:type","function"==typeof(d=void 0!==f.Button&&f.Button)?d:Object)],F.prototype,"pendingStatusDisplayBtn",void 0),T([(0,h.property)({type:Number}),P("design:type",Number)],F.prototype,"statusDisplay",void 0),T([(0,h.property)({type:Boolean}),P("design:type",Boolean)],F.prototype,"downloadingFile",void 0),T([(0,h.property)({type:Number}),P("design:type","function"==typeof(l=void 0!==E.AttendanceMemberStatus&&E.AttendanceMemberStatus)?l:Object)],F.prototype,"activeStatus",void 0),T([(0,h.property)({type:Boolean}),P("design:type",Boolean)],F.prototype,"_isLoading",void 0),T([(0,h.property)({type:Boolean}),P("design:type",Boolean)],F.prototype,"firstLoad",void 0),T([(0,h.property)({type:Object}),P("design:type","function"==typeof(u=void 0!==b.TemplateResult&&b.TemplateResult)?u:Object)],F.prototype,"renderView",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"_members",void 0),T([(0,h.property)({type:Array}),P("design:type","function"==typeof(m="undefined"!=typeof Array&&Array)?m:Object)],F.prototype,"_data",void 0),T([(0,h.property)({type:Object}),P("design:type",Object)],F.prototype,"urlQueryParams",void 0),T([(0,h.property)({type:Number}),P("design:type",Number)],F.prototype,"meetingEventId",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"_categories",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"_groups",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"_subgroups",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"attendanceMembers",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"selectedAttendanceMembers",void 0),T([(0,h.property)({type:Array}),P("design:type",Array)],F.prototype,"_daysOfWeek",void 0),T([(0,h.query)('[show-memberField="all"]'),P("design:type","function"==typeof(p="undefined"!=typeof Element&&Element)?p:Object)],F.prototype,"showMemberFieldAllSelector",void 0),F=T([(0,h.customElement)("attendance-setup-form-member"),P("design:paramtypes",[])],F)},94934:(e,t,n)=>{n.r(t),n.d(t,{MemberColFourComponent:()=>p});var i,r,s,o=n(84676),a=n(85862),c=n(59662),d=(n(33590),n(23283),n(48774)),l=n(60089),u=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends a.LitElement{constructor(){super(),this.activeStatus=o.AttendanceMemberStatus.None,this.memberActiveStatus=o.AttendanceMemberStatus.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=o.MeetingAttendanceMemberModel.fromJson(JSON.parse(this.attendanceMemberString));for(const e in o.AttendanceMemberStatus)if(Object.prototype.hasOwnProperty.call(o.AttendanceMemberStatus,e)){const t=o.AttendanceMemberStatus[e];this.attendanceMember.statusId.id.toString()===t.toString()&&(this.memberActiveStatus=Number(t))}}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){return null===this.attendanceMember?a.html`<b class="text-red-500">UNKOWN MEMBER</b>`:this.memberActiveStatus===o.AttendanceMemberStatus.Assigned?a.html`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.unassignButton}
            <div class="mx-1"></div>
            ${this.pendingButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `:this.memberActiveStatus===o.AttendanceMemberStatus.Pending?a.html`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.assignButton}
            <div class="mx-1"></div>
            ${this.unassignButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `:a.html`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.assignButton}
            <div class="mx-1"></div>
            ${this.pendingButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `}get pendingButton(){return a.html`
      <div class="block">
        <mwc-button class="button info text-xs" label="Set Pending" status-id="3" outlined @click="${this.submitStatus}">
          <mwc-icon>timer</mwc-icon>
        </mwc-button>
      </div>
    `}get assignButton(){return a.html`
      <div class="block">
        <mwc-button class="button success text-xs" label="Assign" status-id="1" outlined @click="${this.submitStatus}">
          <mwc-icon>check_circle</mwc-icon>
        </mwc-button>
      </div>
    `}get unassignButton(){return a.html`
      <div class="block">
        <mwc-button class="button danger text-xs" label="Unassign" status-id="2" outlined @click="${this.submitStatus}">
          <mwc-icon>circle</mwc-icon>
        </mwc-button>
      </div>
    `}get showDayDateButtons(){return this.attendanceMember.meetingEventId.isRecuring?a.html`
        <mwc-button class="button warning text-xs" label="Set Meeting Days" raised @click="${()=>l.NavigatorRouter.push("settings/edit/member-days?member-id="+this.attendanceMember.id)}">
          <mwc-icon>today</mwc-icon>
        </mwc-button>`:a.html`
        <mwc-button class="button warning text-xs" label="Set Meeting Dates" raised @click="${()=>l.NavigatorRouter.push("settings/edit/member-dates?member-id="+this.attendanceMember.id)}">
          <mwc-icon>today</mwc-icon>
        </mwc-button>`}submitStatus(e){return t=this,n=void 0,r=function*(){if(null!==this.attendanceMember){const t=e.target.getAttribute("status-id"),n=Number.isNaN(t)?0:t;yield(0,d.PUT_AttendanceUpdateScheduleMemberStatus)(this.attendanceMember.id,n)}},new((i=void 0)||(i=Promise))((function(e,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,a)}c((r=r.apply(t,n||[])).next())}));var t,n,i,r}firstUpdated(){}createRenderRoot(){return this}};p.styles=[a.css`
   :host { display: block; }
  `],u([(0,c.property)({attribute:!1}),m("design:type","function"==typeof(i=void 0!==o.AttendanceMemberStatus&&o.AttendanceMemberStatus)?i:Object)],p.prototype,"activeStatus",void 0),u([(0,c.property)({attribute:!1}),m("design:type","function"==typeof(r=void 0!==o.AttendanceMemberStatus&&o.AttendanceMemberStatus)?r:Object)],p.prototype,"memberActiveStatus",void 0),u([(0,c.property)({type:String}),m("design:type",String)],p.prototype,"attendanceMemberString",void 0),u([(0,c.property)({attribute:!1}),m("design:type","function"==typeof(s=void 0!==o.MeetingAttendanceMemberModel&&o.MeetingAttendanceMemberModel)?s:Object)],p.prototype,"attendanceMember",void 0),p=u([(0,c.customElement)("member-col-four-component"),m("design:paramtypes",[])],p)},66553:(e,t,n)=>{n.r(t),n.d(t,{MemberColOneComponent:()=>l});var i,r,s=n(85862),o=n(59662),a=n(84676),c=(n(23747),n(99792),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),this.activeStatus=a.AttendanceMemberStatus.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=a.MeetingAttendanceMemberModel.fromJson(JSON.parse(this.attendanceMemberString))}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){if(null===this.attendanceMember)return s.html`<b class="text-red-500">UNKOWN MEMBER</b>`;{const e=this.attendanceMember.memberInfo;return null===e?s.html`<b class="text-red-500">UNKOWN MEMBER</b>`:1===e.accountType?s.html`
            <member-col-one-ind-component activeStatus="${this.activeStatus}" .attendanceMember="${this.attendanceMember}"></member-col-one-ind-component>
          `:s.html`
            <member-col-one-org-component activeStatus="${this.activeStatus}" .attendanceMember="${this.attendanceMember}"></member-col-one-org-component>
          `}}firstUpdated(){}createRenderRoot(){return this}};l.styles=[s.css`
   :host { display: block; }
  `],c([(0,o.property)({attribute:!1}),d("design:type","function"==typeof(i=void 0!==a.AttendanceMemberStatus&&a.AttendanceMemberStatus)?i:Object)],l.prototype,"activeStatus",void 0),c([(0,o.property)({type:String}),d("design:type",String)],l.prototype,"attendanceMemberString",void 0),c([(0,o.property)({attribute:!1}),d("design:type","function"==typeof(r=void 0!==a.MeetingAttendanceMemberModel&&a.MeetingAttendanceMemberModel)?r:Object)],l.prototype,"attendanceMember",void 0),l=c([(0,o.customElement)("member-col-one-component"),d("design:paramtypes",[])],l)},99792:(e,t,n)=>{n.r(t),n.d(t,{MemberColOneIndComponent:()=>l});var i,r,s=n(85862),o=n(59662),a=n(84676),c=(n(38281),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),this.activeStatus=a.AttendanceMemberStatus.None}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e;const t=this.attendanceMember.memberInfo;return s.html`
      <!-- <div class="flex flex-col items-center whitespace-normal mb-0"> -->
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="meeting_member_info" name="meeting_member_info" type="checkbox" value="${this.attendanceMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start">
          <!-- <user-profile-photo class="w-16 h-16 mb-1 justify-center" rounded 'click-to-open'="" click-to-open="" type="member"
            url="${t.profilePicture}" size="16"></user-profile-photo> -->
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${t.firstname} ${null!==(e=t.middlename)&&void 0!==e?e:""} ${t.surname}
          </p>
        </div>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};l.styles=[s.css`
   :host { display: block; }
  `],c([(0,o.property)({attribute:!1}),d("design:type","function"==typeof(i=void 0!==a.AttendanceMemberStatus&&a.AttendanceMemberStatus)?i:Object)],l.prototype,"activeStatus",void 0),c([(0,o.property)({attribute:!1}),d("design:type","function"==typeof(r=void 0!==a.MeetingAttendanceMemberModel&&a.MeetingAttendanceMemberModel)?r:Object)],l.prototype,"attendanceMember",void 0),l=c([(0,o.customElement)("member-col-one-ind-component"),d("design:paramtypes",[])],l)},23747:(e,t,n)=>{n.r(t),n.d(t,{MemberColOneOrgComponent:()=>l});var i,r,s=n(85862),o=n(59662),a=n(84676),c=(n(38281),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(),this.activeStatus=a.AttendanceMemberStatus.None}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.attendanceMember.memberInfo;return s.html`
      <!-- <div class="flex flex-col items-center whitespace-normal mb-0"> -->
      <div class="whitespace-normal mb-0">
        <div class="flex flex-col items-center">
          <input id="meeting_member_info" name="meeting_member_info" type="checkbox" value="${this.attendanceMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 flex flex-col items-start justify-start">
          <!-- <user-profile-photo class="w-16 h-16 mb-1 justify-center" rounded 'click-to-open'="" click-to-open="" type="member"
            url="${e.logo}" size="16"></user-profile-photo> -->
          <p class="ml-1 mb-2 text-xs w-[130px] whitespace-[normal]">
            ${e.organizationName}
          </p>
        </div>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};l.styles=[s.css`
   :host { display: block; }
  `],c([(0,o.property)({attribute:!1}),d("design:type","function"==typeof(i=void 0!==a.AttendanceMemberStatus&&a.AttendanceMemberStatus)?i:Object)],l.prototype,"activeStatus",void 0),c([(0,o.property)({attribute:!1}),d("design:type","function"==typeof(r=void 0!==a.MeetingAttendanceMemberModel&&a.MeetingAttendanceMemberModel)?r:Object)],l.prototype,"attendanceMember",void 0),l=c([(0,o.customElement)("member-col-one-org-component"),d("design:paramtypes",[])],l)},89429:(e,t,n)=>{n.r(t),n.d(t,{MemberColThreeComponent:()=>l});var i,r,s=n(84676),o=n(85862),a=n(59662),c=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(),this.activeStatus=s.AttendanceMemberStatus.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=s.MeetingAttendanceMemberModel.fromJson(JSON.parse(this.attendanceMemberString))}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){if(null===this.attendanceMember)return o.html`<b class="text-red-500">UNKOWN MEMBER</b>`;{this.attendanceMember.memberInfo;const e=this.attendanceMember.meetingCategoryId,t=this.attendanceMember.meetingGroupId,n=this.attendanceMember.meetingSubgroupId;return o.html`
        <table class="table striped hover w-full shadow-md border">
          <thead>
            <tr>
              <th class="text-left">Grouping</th>
              <th class="text-left">Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category</td>
              <td>${null==e?o.html`<p class="text-red-400">Not Assigned</p>`:e.memberCategoryId.category}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>${null==t?o.html`<p class="text-red-400">Not Assigned</p>`:t.groupInfo.group}</td>
            </tr>
            <tr>
              <td>Subgroup</td>
              <td>${null==n?o.html`<p class="text-red-400">Not Assigned</p>`:n.subGroupInfo.subgroup}</td>
            </tr>
          </tbody>
        </table>
      `}}firstUpdated(){}createRenderRoot(){return this}};l.styles=[o.css`
   :host { display: block; }
  `],c([(0,a.property)({attribute:!1}),d("design:type","function"==typeof(i=void 0!==s.AttendanceMemberStatus&&s.AttendanceMemberStatus)?i:Object)],l.prototype,"activeStatus",void 0),c([(0,a.property)({type:String}),d("design:type",String)],l.prototype,"attendanceMemberString",void 0),c([(0,a.property)({attribute:!1}),d("design:type","function"==typeof(r=void 0!==s.MeetingAttendanceMemberModel&&s.MeetingAttendanceMemberModel)?r:Object)],l.prototype,"attendanceMember",void 0),l=c([(0,a.customElement)("member-col-three-component"),d("design:paramtypes",[])],l)},5236:(e,t,n)=>{n.r(t),n.d(t,{MemberColTwoComponent:()=>u});var i,r,s,o=n(84676),a=n(85862),c=n(59662),d=(n(33590),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends a.LitElement{constructor(){super(),this.activeStatus=o.AttendanceMemberStatus.None,this.memberActiveStatus=o.AttendanceMemberStatus.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=o.MeetingAttendanceMemberModel.fromJson(JSON.parse(this.attendanceMemberString));for(const e in o.AttendanceMemberStatus)if(Object.prototype.hasOwnProperty.call(o.AttendanceMemberStatus,e)){const t=o.AttendanceMemberStatus[e];this.attendanceMember.statusId.id.toString()===t.toString()&&(this.memberActiveStatus=Number(t))}}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){if(null===this.attendanceMember)return a.html`<b class="text-red-500">UNKOWN MEMBER</b><b class="w-1/6"></b>`;{const e=this.attendanceMember.statusId;return a.html`
        <div class="ml-1 mb-2 whitespace-normal"><b class="w-100"></b>
          <p class="ml-1 mb-2 text-xs whitespace-normal flex flex-col items-start justify-start">
            <mwc-icon class="${this.textIconColor} flex flex-col items-center justify-center">${this.iconType}</mwc-icon>
            <b class="${this.textIconColor}">${e.status}</b>
          </p>
        </div>
      `}}get iconType(){return this.memberActiveStatus===o.AttendanceMemberStatus.Assigned?"check_circle":this.memberActiveStatus===o.AttendanceMemberStatus.Pending?"timer":"circle"}get textIconColor(){return this.memberActiveStatus===o.AttendanceMemberStatus.Assigned?"text-green-500":this.memberActiveStatus===o.AttendanceMemberStatus.Pending?"text-purple-500":"text-red-500"}firstUpdated(){}createRenderRoot(){return this}};u.styles=[a.css`
   :host { display: block; }
  `],d([(0,c.property)({attribute:!1}),l("design:type","function"==typeof(i=void 0!==o.AttendanceMemberStatus&&o.AttendanceMemberStatus)?i:Object)],u.prototype,"activeStatus",void 0),d([(0,c.property)({attribute:!1}),l("design:type","function"==typeof(r=void 0!==o.AttendanceMemberStatus&&o.AttendanceMemberStatus)?r:Object)],u.prototype,"memberActiveStatus",void 0),d([(0,c.property)({type:String}),l("design:type",String)],u.prototype,"attendanceMemberString",void 0),d([(0,c.property)({attribute:!1}),l("design:type","function"==typeof(s=void 0!==o.MeetingAttendanceMemberModel&&o.MeetingAttendanceMemberModel)?s:Object)],u.prototype,"attendanceMember",void 0),u=d([(0,c.customElement)("member-col-two-component"),l("design:paramtypes",[])],u)},303:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupMultipleMemberDatesBtnComponent:()=>a});var i=n(85862),r=n(59662),s=(n(76948),n(23283),n(33590),n(422),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),this.selectedAttendanceMembers=[],this.meetingDates=[],this.clientId=0,this.meetingEventId=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`
      <div class="whitespace-nowrap my-1">
        <attendance-setup-multiple-member-dates-form-component multiple-member-events="dates" clientId="${this.clientId}"
          .selectedAttendanceMembers="${this.selectedAttendanceMembers}" meetingEventId="${this.meetingEventId}"
          .meetingDates="${this.meetingDates}">
        </attendance-setup-multiple-member-dates-form-component>
        <mwc-button class="warning w-full mx-1" label="Set Multiple Dates" icon="today" @click="${this.showDialog}"
          outlined open-dialog-btn="multiple-member-events--dates"> 
        </mwc-button>
      </div>
    `}firstUpdated(){}showDialog(e){e.preventDefault();const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}createRenderRoot(){return this}};a.styles=[i.css`
   :host { display: block; }
  `],s([(0,r.property)({type:Array}),o("design:type",Array)],a.prototype,"selectedAttendanceMembers",void 0),s([(0,r.property)({type:Array}),o("design:type",Array)],a.prototype,"meetingDates",void 0),s([(0,r.property)({type:Number}),o("design:type",Number)],a.prototype,"clientId",void 0),s([(0,r.property)({type:Number}),o("design:type",Number)],a.prototype,"meetingEventId",void 0),a=s([(0,r.customElement)("attendance-setup-multiple-member-dates-btn-component"),o("design:paramtypes",[])],a)},422:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupMultipleMemberDatesFormComponent:()=>l});var i=n(85862),r=n(59662),s=(n(76948),n(33590),n(23283),n(90002),n(13930)),o=n(28322),a=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};let l=class extends i.LitElement{constructor(){super(),this.selectedAttendanceMembers=[],this.meetingDates=[],this.clientId=0,this.meetingEventId=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`
      <mwc-dialog class="w-full" open-this-dialog="multiple-member-events--dates" heading="Set Multiple Dates">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            ${this.selectedMembers}
          </div>
          <div class="flex flex-col m-1 justify-evenly">
            ${this.form}
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}get selectedMembers(){return i.html`
      <div class="flex flex-col justify-between content-between">
        <h6 class="whitespace-nowrap text-base font-bold mr-1">Selected Members</h6>
        <select class="form-control">
          <option>Selected Members</option>
          ${this.selectedAttendanceMembers.map((e=>{var t;const n=e.memberInfo;let r="-";return r=null===n?"-":1===n.accountType?i.html`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`:i.html`${n.organizationName}`,i.html`<option>${r}</option>`}))}
        </select>
      </div>
    `}get form(){return i.html`
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
                  <member-date-multiple-inputs-component .meetingDates="${this.meetingDates}" 
                    meetingMemberId="0" meetingEventId="${this.meetingEventId}">
                  </member-date-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.clientId}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="0"/>
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
    `}firstUpdated(){}showDialog(){const e=document.querySelector('[open-this-dialog="multiple-member-events--dates"]');e.setAttribute("open","true"),e.open=!0}closeDialog(){const e=document.querySelector('[open-this-dialog="multiple-member-events--dates"]');e.setAttribute("open","false"),e.open=!1}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-date-multiple-inputs-component").forEach((e=>d(this,void 0,void 0,(function*(){this.closeDialog();const t=e.multipleDateObjects,n=this.getSubmitData(t);yield(0,s.POST_AttendanceScheduleMemberDateBulk)(n),this.showDialog()}))))}))}getSubmitData(e){const t=[];return this.selectedAttendanceMembers.forEach((n=>{for(let i=0;i<e.length;i++){const r=e[i],s=new o.MemberMeetingEventDateFormInputModel;s.dateId=r.dateId,s.memberId=n.id,s.meetingEventId=r.meetingEventId,t.includes(s)||t.push(s)}})),t}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],a([(0,r.property)({type:Array}),c("design:type",Array)],l.prototype,"selectedAttendanceMembers",void 0),a([(0,r.property)({type:Array}),c("design:type",Array)],l.prototype,"meetingDates",void 0),a([(0,r.property)({type:Number}),c("design:type",Number)],l.prototype,"clientId",void 0),a([(0,r.property)({type:Number}),c("design:type",Number)],l.prototype,"meetingEventId",void 0),l=a([(0,r.customElement)("attendance-setup-multiple-member-dates-form-component"),c("design:paramtypes",[])],l)},908:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupMultipleMemberDaysBtnComponent:()=>a});var i=n(85862),r=n(59662),s=(n(76948),n(23283),n(33590),n(586),function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),this.selectedAttendanceMembers=[],this.meetingDays=[],this.daysOfWeek=[],this.clientId=0,this.meetingEventId=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`
      <div class="whitespace-nowrap my-1">
        <attendance-setup-multiple-member-days-form-component multiple-member-events="days" clientId="${this.clientId}"
          .selectedAttendanceMembers="${this.selectedAttendanceMembers}" meetingEventId="${this.meetingEventId}"
          .meetingDays="${this.meetingDays}" .daysOfWeek="${this.daysOfWeek}">
        </attendance-setup-multiple-member-days-form-component>
        <mwc-button class="warning w-full mx-1" label="Set Multiple Days" icon="today" @click="${this.showDialog}"
          outlined open-dialog-btn="multiple-member-events--days">
        </mwc-button>
      </div>
    `}firstUpdated(){}showDialog(e){e.preventDefault();const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}createRenderRoot(){return this}};a.styles=[i.css`
   :host { display: block; }
  `],s([(0,r.property)({type:Array}),o("design:type",Array)],a.prototype,"selectedAttendanceMembers",void 0),s([(0,r.property)({type:Array}),o("design:type",Array)],a.prototype,"meetingDays",void 0),s([(0,r.property)({type:Array}),o("design:type",Array)],a.prototype,"daysOfWeek",void 0),s([(0,r.property)({type:Number}),o("design:type",Number)],a.prototype,"clientId",void 0),s([(0,r.property)({type:Number}),o("design:type",Number)],a.prototype,"meetingEventId",void 0),a=s([(0,r.customElement)("attendance-setup-multiple-member-days-btn-component"),o("design:paramtypes",[])],a)},586:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupMultipleMemberDaysFormComponent:()=>l});var i=n(85862),r=n(59662),s=(n(76948),n(33590),n(23283),n(62643),n(37067)),o=n(7149),a=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};let l=class extends i.LitElement{constructor(){super(),this.selectedAttendanceMembers=[],this.meetingDays=[],this.daysOfWeek=[],this.clientId=0,this.meetingEventId=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`
      <mwc-dialog open-this-dialog="multiple-member-events--days" heading="Set Multiple Days">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            ${this.selectedMembers}
          </div>
          <div class="flex flex-col m-1 justify-evenly">
            ${this.form}
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}get selectedMembers(){return i.html`
      <div class="flex flex-col justify-between content-between">
        <h6 class="whitespace-nowrap text-base font-bold mr-1">Selected Members</h6>
        <select class="form-control">
          <option>Selected Members</option>
          ${this.selectedAttendanceMembers.map((e=>{var t;const n=e.memberInfo;let r="-";return r=null===n?"-":1===n.accountType?i.html`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`:i.html`${n.organizationName}`,i.html`<option>${r}</option>`}))}
        </select>
      </div>
    `}get form(){return i.html`
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
                  <member-day-multiple-inputs-component .meetingDays="${this.meetingDays}" 
                    .daysOfWeek="${this.daysOfWeek}" meetingMemberId="0" smallView
                    meetingEventId="${this.meetingEventId}">
                  </member-day-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.clientId}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="0"/>
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
    `}firstUpdated(){}showDialog(){const e=document.querySelector('[open-this-dialog="multiple-member-events--days"]');e.setAttribute("open","true"),e.open=!0}closeDialog(){const e=document.querySelector('[open-this-dialog="multiple-member-events--days"]');e.setAttribute("open","false"),e.open=!1}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-day-multiple-inputs-component").forEach((e=>d(this,void 0,void 0,(function*(){this.closeDialog();const t=e.multipleDayObjects,n=this.getSubmitData(t);yield(0,s.POST_AttendanceScheduleMemberDayBulk)(n),this.showDialog()}))))}))}getSubmitData(e){const t=[];return this.selectedAttendanceMembers.forEach((n=>{for(let i=0;i<e.length;i++){const r=e[i],s=new o.MemberMeetingEventDayFormInputModel;s.dayId=r.dayId,s.memberId=n.id,s.meetingEventId=r.meetingEventId,t.includes(s)||t.push(s)}})),t}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],a([(0,r.property)({type:Array}),c("design:type",Array)],l.prototype,"selectedAttendanceMembers",void 0),a([(0,r.property)({type:Array}),c("design:type",Array)],l.prototype,"meetingDays",void 0),a([(0,r.property)({type:Array}),c("design:type",Array)],l.prototype,"daysOfWeek",void 0),a([(0,r.property)({type:Number}),c("design:type",Number)],l.prototype,"clientId",void 0),a([(0,r.property)({type:Number}),c("design:type",Number)],l.prototype,"meetingEventId",void 0),l=a([(0,r.customElement)("attendance-setup-multiple-member-days-form-component"),c("design:paramtypes",[])],l)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts","src_assets_styles_views_datatable_main_scss-src_assets_styles_views_home_dashboard_scss","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_attendance_meeting_event-9c74b9","src_addons_interfaces_attendance_meeting_event_member_member_index_ts-src_addons_widgets_add_-7d4222","src_addons_network_attendance_day_of_week_index_ts-src_addons_network_attendance_setup_day_in-7ee3af","src_addons_network_attendance_setup_date_index_ts-src_addons_network_attendance_setup_member_-bd7e20","src_assets_styles_views_home_dashboard_scss-src_addons_network_attendance_setup_member_delete-620edf","shared"],(()=>(56692,e(e.s=56692)))),e.O())])));
//# sourceMappingURL=edit-member.js.map