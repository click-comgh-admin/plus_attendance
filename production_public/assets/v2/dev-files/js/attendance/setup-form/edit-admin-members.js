!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-admin-members"],{99493:(e,t,n)=>{"use strict";n.r(t)},13703:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MeetingEventScheduleAdminModel:()=>i});var r=n(69474);class i{toJson(){return{id:this.id,meetingEventId:Number.isNaN(this.meetingEventId)?this.meetingEventId.toJson():this.meetingEventId,adminId:this.adminId,meetingEditor:this.meetingEditor,agendaEditor:this.agendaEditor,clockingAdmin:this.clockingAdmin,updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}static fromJson(e){const t=new i;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.adminId=Number(e.adminId),t.meetingEditor=Boolean(e.meetingEditor),t.agendaEditor=Boolean(e.agendaEditor),t.clockingAdmin=Boolean(e.clockingAdmin),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}},99080:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MeetingAttendanceMemberStatusIdModel:()=>c,MeetingEventScheduleAdminMemberModel:()=>a});var r=n(69474),i=n(17189),o=n(19345),s=n(84676),d=n(13703);class a{static fromJson(e){const t=new a;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.memberId=s.MeetingAttendanceMemberModel.fromJson(e.memberId),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?o.OrganizationMemberModel.fromJson(e.memberInfo):i.IndividualMemberModel.fromJson(e.memberInfo),t.adminId=d.MeetingEventScheduleAdminModel.fromJson(e.adminId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toJson(){try{return{id:this.id,meetingEventId:this.meetingEventId.toJson(),memberId:this.memberId,memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson(),adminId:this.adminId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}catch(e){return{id:this.id,meetingEventId:this.meetingEventId,memberId:this.memberId,memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson(),adminId:this.adminId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}}toString(){return JSON.stringify(this.toJson())}}class c{static fromJson(e){const t=new c;return t.id=e.id,t.status=e.status,t}toJson(){return{id:this.id,status:this.status}}toString(){return JSON.stringify(this.toJson())}}},30367:()=>{},55503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DELETE_AttendanceScheduleAdminMembers:()=>l});var r=n(86455),i=n.n(r),o=n(48485),s=n(87270),d=n(14492),a=n(8967),c=n(33600),m=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function d(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}a((r=r.apply(e,t||[])).next())}))};function l(e){return m(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin-member/delete-bulk",r=JSON.stringify(e);return i().fire({title:"Remove Admin Member(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:r,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new d.NetWorkCallResponses("delete",e,!1),n=t.multipleResponse;let r=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{r.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{r.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),r.length>0){const e=(0,a.https_swal_error_format)(r);return i().showValidationMessage(`${e}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},33973:(e,t,n)=>{"use strict";n.r(t),n.d(t,{POST_AttendanceScheduleAdminMembers:()=>l});var r=n(86455),i=n.n(r),o=n(48485),s=n(87270),d=n(14492),a=n(8967),c=n(33600),m=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function d(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}a((r=r.apply(e,t||[])).next())}))};function l(e){return m(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin-member/bulk",r=JSON.stringify(e);return i().fire({title:"Add Admin Member(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"POST",body:r,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new d.NetWorkCallResponses("post",e,!1),n=t.multipleResponse;let r=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{r.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{r.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),r.length>0){const e=(0,a.https_swal_error_format)(r);return i().showValidationMessage(`${e}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(console.log({result:e}),e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},16883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{_DATATABLES_:()=>a});var r,i=n(85862),o=n(59662),s=(n(30367),n(99493),function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.html`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return i.html`
      ${this.dt_head.map((e=>i.html`<th>${e.title}</th>`))}
    `}tbody(){return i.html`
      ${this.dt_body.map((e=>i.html`<tr>${e.map((e=>i.html`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return i.html`
    ${this.dt_foot.map((e=>i.html`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const n=this.ajaxHeader[e];t[e]=n}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};a.styles=[i.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,o.property)({type:Number}),d("design:type",Number)],a.prototype,"randomID1",void 0),s([(0,o.property)({type:Number}),d("design:type",Number)],a.prototype,"randomID2",void 0),s([(0,o.property)({type:String}),d("design:type",String)],a.prototype,"ID",void 0),s([(0,o.property)({type:Object}),d("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],a.prototype,"datatable",void 0),s([(0,o.property)({type:Array}),d("design:type",Array)],a.prototype,"dt_head",void 0),s([(0,o.property)({type:Array}),d("design:type",Array)],a.prototype,"dt_foot",void 0),s([(0,o.property)({type:Array}),d("design:type",Array)],a.prototype,"dt_body",void 0),s([(0,o.property)(),d("design:type",Object)],a.prototype,"ajaxHeader",void 0),a=s([(0,o.customElement)("datatables-new"),d("design:paramtypes",[])],a)},77061:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditAdminMembers:()=>u}),n(69579),n(43683),n(74657);var r=n(14108),i=n(85862),o=n(59662),s=(n(9621),n(8693),n(27712)),d=n(91354),a=n(41302),c=n(17108),m=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,s.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function d(e){try{a(o.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,d)}a((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,a.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,a.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-admin-member CLIENT_ID="${this.clientId}"></attendance-setup-form-admin-member>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};m([(0,o.property)({type:String}),l("design:type",String)],u.prototype,"email",void 0),m([(0,o.property)({type:Number}),l("design:type",Number)],u.prototype,"mId",void 0),m([(0,o.property)({type:Number}),l("design:type",Number)],u.prototype,"clientId",void 0),m([(0,o.property)({type:Boolean}),l("design:type",Boolean)],u.prototype,"_hasSetup",void 0),m([(0,o.property)({type:Boolean}),l("design:type",Boolean)],u.prototype,"_pageButtonAccess",void 0),u=m([(0,o.customElement)("attendance-setup-form-edit-admin-members"),l("design:paramtypes",[])],u)},9621:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormAdminMember:()=>M}),n(26660);var r,i,o,s,d=n(85862),a=n(59662),c=(n(15474),n(23283)),m=(n(66163),n(51511),n(43690),n(71854),n(37725),n(16883),n(30367),n(52218)),l=n(44672),u=n(38304),p=(n(75866),n(33512)),b=n(48485),h=n(33600),f=(n(71725),n(99080)),g=(n(92805),n(4663),n(55503)),y=n(33973),v=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function d(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}a((r=r.apply(e,t||[])).next())}))};let M=class extends d.LitElement{constructor(){super(),this.CLIENT_ID=0,this.statusDisplay=1,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._isLoading=!1,this.firstLoad=!0,this.renderView=d.html``,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this.meetingAdminId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.urlQueryParams)(),this.getMeetingEventId(),this.getMeetingAdminId(),document.onreadystatechange=e=>{"complete"==document.readyState&&this.handleQueryParam()},yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return d.html`
      <span class="flex flex-row md:flex-col w-100">
      </span>
      <div class="mt-1 mb-2 border border-y-2 rounded shadow-sm">
        <div class="block my-1">
          <schedule-title-card meetingEventId="${this.meetingEventId}" CLIENT_ID="${this.CLIENT_ID}">
          </schedule-title-card>
        </div>
      </div>
      <div class="block my-2">
        ${this.firstLoad?this.mainRender:d.nothing}
        ${this._isLoading?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:this.renderView}
      </div>
    `}get getCurrentTabFromQueryParam(){return new URLSearchParams(window.location.search).get("member-view")}get currentIndex(){return"unassigned"===this.getCurrentTabFromQueryParam?1:0}handleQueryParam(){"unassigned"===this.getCurrentTabFromQueryParam?this.displayUnassignedMembers(new Event("click")):this.displayAssignedMembers(new Event("click")),this.pageRenderFirstView()}updateQueryParam(e){const t=new URLSearchParams(window.location.search);t.set("member-view",e);const n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState("","",n),this.reloadRenderView(new Event("click"))}displayUnassignedMembers(e){e.preventDefault(),this.statusDisplay=1,this.updateQueryParam("unassigned")}displayAssignedMembers(e){e.preventDefault(),this.statusDisplay=2,this.updateQueryParam("assigned")}pageRenderView(){this.firstLoad=!1,this._isLoading=!0,this.renderView=d.html``,setTimeout((()=>{this.renderView=this.mainRender,this._isLoading=!1}),100)}pageRenderFirstView(){setTimeout((()=>{this.firstLoad=!0,this._isLoading=!1,this.renderView=d.html``}),100)}get mainRender(){return d.html`
      <!-- <mwc-button icon="refresh" label="Reload" raised class="primary mt-1"
        @click="${""}">
      </mwc-button> -->
      <div>
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedMemberDisplayBtn"
                label="Member" @click="${this.displayAssignedMembers}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedMemberDisplayBtn"
                label="Member" @click="${this.displayUnassignedMembers}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedMemberDisplayBtn"
                label="Member :: Assigned" @click="${this.displayAssignedMembers}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedMemberDisplayBtn"
                label="Member :: Unassigned" @click="${this.displayUnassignedMembers}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${""}
          </div>
        </div>
      </div>
      ${this.schedule}
    `}reloadRenderView(e){e.preventDefault(),this.pageRenderView()}get schedule(){return null===this._schedule?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?d.html`
        <div class="flex items-center justify-center ">
          <div class="w-full md:w-[40rem] items-center justify-center">
            ${this.table_header}
          </div>
        </div>
        <div class="flex items-center justify-center ">
          <div class="w-full md:w-[30rem]">
            ${this.table}
          </div>
        </div>
      `:d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get table_header(){return d.html`
      <div class="p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-stretch px-4 my-2">
            <b>CHECK ALL: </b>
            <input id="admin_member_info_all" name="admin_member_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_admin_members}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2 flex justify-center items-center">
          ${0===this.currentIndex?d.html`
            <mwc-button class="danger" raised admin_member_info_all="unassign"
              @click="${this.unassignMultipleMemberAction}">Unassign All Selected</mwc-button>
              `:d.html`<mwc-button class="success" raised admin_member_info_all="assign" @click="${this.assignMultipleMemberAction}">
            Assign All Selected</mwc-button>`}
        </div>
      </div>
    `}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=b.CONSTANTS.URLS.AKWAABA_API_BASE_URL;console.log({"this.currentIndex--this.currentIndex":this.currentIndex}),0===this.currentIndex?e+="attendance/meeting-event/admin-member?datatable_plugin&meetingEventId="+this.meetingEventId+"&adminId="+this.meetingAdminId:e+="attendance/meeting-event/admin-member/unassigned/"+this.meetingEventId+"/"+this.meetingAdminId+"?datatable_plugin";const t=this.__dataTable(e);let n={};const r=(0,h.getUserLoginInfoCookie)();return n.Authorization="Token "+r.token,d.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){}rowOneRender(e){const t=f.MeetingEventScheduleAdminMemberModel.fromJson(e);return 0==this.currentIndex?`\n        <admin-member-row1-component isAssigned class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row1-component>\n      `:`\n        <admin-member-row1-component class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row1-component>\n      `}rowTwoRender(e){const t=f.MeetingEventScheduleAdminMemberModel.fromJson(e);return 0==this.currentIndex?`\n        <admin-member-row2-component isAssigned class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row2-component>\n      `:`\n        <admin-member-row2-component class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row2-component>\n      `}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,r)=>t.rowOneRender(r),orderable:!0},{data:"memberId",render:(e,n,r)=>t.rowTwoRender(r),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return w(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}submitForm(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,p.POST_AttendanceAddScheduleMember)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return w(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleMember)(t)}))}getMeetingEventId(){let e=(0,l.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAdminId(){let e=(0,l.urlQueryParamsGet)("meeting-admin-id"),t=null!==e?Number(e):null;this.meetingAdminId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return w(this,void 0,void 0,(function*(){const e=yield(0,m.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}check_all_admin_members(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="admin_member_info_all"][name="admin_member_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{e.checked=!1}))}))}))}assignMultipleMemberAction(e){return w(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}}));let n=t.map((e=>({memberId:e,adminId:this.meetingAdminId,meetingEventId:this.meetingEventId})));yield(0,y.POST_AttendanceScheduleAdminMembers)(n)}))}unassignMultipleMemberAction(e){return w(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}}));let n=t.map((e=>({id:e})));yield(0,g.DELETE_AttendanceScheduleAdminMembers)(n)}))}createRenderRoot(){return this}};M.styles=[d.css`
   :host { display: block; }
  `],v([(0,a.property)({type:Number}),_("design:type",Number)],M.prototype,"CLIENT_ID",void 0),v([(0,a.query)("#assignedMemberDisplayBtn"),_("design:type","function"==typeof(r=void 0!==c.Button&&c.Button)?r:Object)],M.prototype,"assignedMemberDisplayBtn",void 0),v([(0,a.query)("#unassignedMemberDisplayBtn"),_("design:type","function"==typeof(i=void 0!==c.Button&&c.Button)?i:Object)],M.prototype,"unassignedMemberDisplayBtn",void 0),v([(0,a.property)({type:Number}),_("design:type",Number)],M.prototype,"statusDisplay",void 0),v([(0,a.property)({type:Boolean}),_("design:type",Boolean)],M.prototype,"_isLoading",void 0),v([(0,a.property)({type:Boolean}),_("design:type",Boolean)],M.prototype,"firstLoad",void 0),v([(0,a.property)({type:Object}),_("design:type","function"==typeof(o=void 0!==d.TemplateResult&&d.TemplateResult)?o:Object)],M.prototype,"renderView",void 0),v([(0,a.property)({type:Array}),_("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],M.prototype,"_data",void 0),v([(0,a.property)({type:Object}),_("design:type",Object)],M.prototype,"urlQueryParams",void 0),v([(0,a.property)({type:Number}),_("design:type",Number)],M.prototype,"meetingEventId",void 0),v([(0,a.property)({type:Number}),_("design:type",Number)],M.prototype,"meetingAdminId",void 0),M=v([(0,a.customElement)("attendance-setup-form-admin-member"),_("design:paramtypes",[])],M)},47719:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminMemberRow1AssignedComponent:()=>c});var r,i=n(99080),o=n(85862),s=n(59662),d=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="admin_member_info" name="admin_member_info" type="checkbox" value="${this.adminMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start border-b border-b-blue-400">
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${this.memberName}
          </p>
        </div>
      </div>
    `}get memberName(){return 1===this.adminMember.memberInfo.accountType?o.html`${this.individualMember}`:o.html`${this.organizationMember}`}get individualMember(){var e;const t=this.adminMember.memberInfo;return`${t.firstname} ${null!==(e=t.middlename)&&void 0!==e?e:""} ${t.surname}`}get organizationMember(){return`${this.adminMember.memberInfo.organizationName}`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({attribute:!1}),a("design:type","function"==typeof(r=void 0!==i.MeetingEventScheduleAdminMemberModel&&i.MeetingEventScheduleAdminMemberModel)?r:Object)],c.prototype,"adminMember",void 0),c=d([(0,s.customElement)("admin-member-row1-assigned-component"),a("design:paramtypes",[])],c)},92805:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminMemberRow1Component:()=>c});var r,i=n(99080),o=n(85862),s=n(59662),d=(n(47719),n(66330),function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this.adminMemberString=""}connectedCallback(){super.connectedCallback();try{this.adminMember=i.MeetingEventScheduleAdminMemberModel.fromJson(JSON.parse(this.adminMemberString))}catch(e){this.adminMember=null}}disconnectedCallback(){}render(){return null===this.adminMember||null===this.adminMember.memberInfo?o.html`<b class="text-red-500">UNKOWN MEMBER</b>`:this.isAssigned?o.html`
            <admin-member-row1-assigned-component .adminMember="${this.adminMember}"></admin-member-row1-assigned-component>
          `:o.html`
            <admin-member-row1-unassigned-component .adminMember="${this.adminMember}"></admin-member-row1-unassigned-component>
          `}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"isAssigned",void 0),d([(0,s.property)({type:String}),a("design:type",String)],c.prototype,"adminMemberString",void 0),d([(0,s.property)({attribute:!1}),a("design:type","function"==typeof(r=void 0!==i.MeetingEventScheduleAdminMemberModel&&i.MeetingEventScheduleAdminMemberModel)?r:Object)],c.prototype,"adminMember",void 0),c=d([(0,s.customElement)("admin-member-row1-component"),a("design:paramtypes",[])],c)},66330:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminMemberRow1UnssignedComponent:()=>c});var r,i=n(99080),o=n(85862),s=n(59662),d=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="admin_member_info" name="admin_member_info" type="checkbox" value="${this.adminMember.memberId.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start border-b border-b-red-400">
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${this.memberName}
          </p>
        </div>
      </div>
    `}get memberName(){return 1===this.adminMember.memberInfo.accountType?o.html`${this.individualMember}`:o.html`${this.organizationMember}`}get individualMember(){var e;const t=this.adminMember.memberInfo;return`${t.firstname} ${null!==(e=t.middlename)&&void 0!==e?e:""} ${t.surname}`}get organizationMember(){return`${this.adminMember.memberInfo.organizationName}`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({attribute:!1}),a("design:type","function"==typeof(r=void 0!==i.MeetingEventScheduleAdminMemberModel&&i.MeetingEventScheduleAdminMemberModel)?r:Object)],c.prototype,"adminMember",void 0),c=d([(0,s.customElement)("admin-member-row1-unassigned-component"),a("design:paramtypes",[])],c)},77271:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminMemberRow2AssignedComponent:()=>m});var r,i=n(99080),o=n(55503),s=n(85862),d=n(59662),a=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends s.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return s.html`
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="block">
          <mwc-button class="button warning text-xs" label="Unassign" outlined @click="${this.submitMember}">
            <mwc-icon>circle</mwc-icon>
          </mwc-button>
        </div>
      </div>
    `}submitMember(e){return t=this,n=void 0,i=function*(){e.preventDefault(),null!==this.adminMember&&(yield(0,o.DELETE_AttendanceScheduleAdminMembers)([{id:this.adminMember.id}]))},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{a(i.next(e))}catch(e){o(e)}}function d(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,d)}a((i=i.apply(t,n||[])).next())}));var t,n,r,i}firstUpdated(){}createRenderRoot(){return this}};m.styles=[s.css`
   :host { display: block; }
  `],a([(0,d.property)({attribute:!1}),c("design:type","function"==typeof(r=void 0!==i.MeetingEventScheduleAdminMemberModel&&i.MeetingEventScheduleAdminMemberModel)?r:Object)],m.prototype,"adminMember",void 0),m=a([(0,d.customElement)("admin-member-row2-assigned-component"),c("design:paramtypes",[])],m)},4663:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminMemberRow2Component:()=>c});var r,i=n(99080),o=n(85862),s=n(59662),d=(n(77271),n(65320),function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this.adminMemberString=""}connectedCallback(){super.connectedCallback();try{this.adminMember=i.MeetingEventScheduleAdminMemberModel.fromJson(JSON.parse(this.adminMemberString))}catch(e){this.adminMember=null}}disconnectedCallback(){}render(){return null===this.adminMember||null===this.adminMember.memberInfo?o.html`<b class="text-red-500">UNKOWN MEMBER</b>`:!0===this.isAssigned?o.html`
            <admin-member-row2-assigned-component .adminMember="${this.adminMember}"></admin-member-row2-assigned-component>
          `:o.html`
            <admin-member-row2-unassigned-component .adminMember="${this.adminMember}"></admin-member-row2-unassigned-component>
          `}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"isAssigned",void 0),d([(0,s.property)({type:String}),a("design:type",String)],c.prototype,"adminMemberString",void 0),d([(0,s.property)({attribute:!1}),a("design:type","function"==typeof(r=void 0!==i.MeetingEventScheduleAdminMemberModel&&i.MeetingEventScheduleAdminMemberModel)?r:Object)],c.prototype,"adminMember",void 0),c=d([(0,s.customElement)("admin-member-row2-component"),a("design:paramtypes",[])],c)},65320:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminMemberRow2UnssignedComponent:()=>m});var r,i=n(99080),o=n(85862),s=n(59662),d=n(33973),a=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends o.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="block">
          <mwc-button class="button success text-xs" label="Assign" outlined @click="${this.submitMember}">
            <mwc-icon>check_circle</mwc-icon>
          </mwc-button>
        </div>
      </div>
    `}submitMember(e){return t=this,n=void 0,i=function*(){e.preventDefault(),null!==this.adminMember&&(yield(0,d.POST_AttendanceScheduleAdminMembers)([{adminId:this.adminMember.adminId.id,memberId:this.adminMember.memberId.id,meetingEventId:this.adminMember.meetingEventId.id}]))},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{a(i.next(e))}catch(e){o(e)}}function d(e){try{a(i.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,d)}a((i=i.apply(t,n||[])).next())}));var t,n,r,i}firstUpdated(){}createRenderRoot(){return this}};m.styles=[o.css`
   :host { display: block; }
  `],a([(0,s.property)({attribute:!1}),c("design:type","function"==typeof(r=void 0!==i.MeetingEventScheduleAdminMemberModel&&i.MeetingEventScheduleAdminMemberModel)?r:Object)],m.prototype,"adminMember",void 0),m=a([(0,s.customElement)("admin-member-row2-unassigned-component"),c("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_assets_styles_views_home_dashboard_scss","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_attendance_meeting_event-9c74b9","src_addons_interfaces_attendance_meeting_event_member_member_index_ts-src_addons_widgets_add_-7d4222","src_assets_styles_views_home_dashboard_scss-src_addons_network_attendance_setup_member_delete-620edf","shared"],(()=>(77061,e(e.s=77061)))),e.O())])));
//# sourceMappingURL=edit-admin-members.js.map