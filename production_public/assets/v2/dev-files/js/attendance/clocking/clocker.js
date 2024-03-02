"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/clocker"],{22388:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceMultipleClockingBreak:()=>u});var i=n(86455),o=n.n(i),l=n(48485),r=n(87270),s=n(14492),c=n(8967),a=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{c(i.next(e))}catch(e){l(e)}}function s(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};function u(e,t,n,i,u){return d(this,void 0,void 0,(function*(){const m=(0,a.getUserLoginInfoCookie)();let p=0;u.forEach((e=>{e.name===n&&(p=e.id)}));const g=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/bulk-clocking/"+e,h={clockingType:p,clockingIds:i};return o().fire({title:`${t} multiple action?`,icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(g,{method:"PATCH",body:JSON.stringify(h),headers:{Authorization:"Token "+m.token}},!0).then((e=>{const t=new s.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},30596:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingUpdateClockingList:()=>u});var i=n(86455),o=n.n(i),l=n(48485),r=n(87270),s=n(14492),c=n(8967),a=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{c(i.next(e))}catch(e){l(e)}}function s(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};function u(e,t){return d(this,void 0,void 0,(function*(){const n=(0,a.getUserLoginInfoCookie)(),i=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/reset-clocking-list/"+e,u={time:t};return o().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return o().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(i,{method:"POST",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))})),allowOutsideClick:()=>!o().isLoading()})}))}},15234:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClocker:()=>F}),n(73794);var i,o,l,r=n(85862),s=n(59662),c=n(23283),a=(n(40789),n(63313),n(16883),n(30367),n(43683),n(74657),n(17725)),d=(n(43690),n(67052)),u=n(48485),m=n(33600),p=n(44672),g=n(37891),h=n(72869),f=n(52368),_=(n(60997),n(90072)),b=n(27325),v=n(30596),k=n(22388),y=n(14115),w=n(45069),C=n(2892),S=(n(43629),n(34843)),x=n(58881),T=n(33437),$=n(660),B=n(88786),A=n(89605),E=(n(47546),n(97601)),I=(n(21694),n(27712)),G=n(91354),N=n(41302),O=n(17108),L=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r},M=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{c(i.next(e))}catch(e){l(e)}}function s(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};let F=class extends r.LitElement{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.datatablePathUrl="attendance/meeting-event/attendance",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.clockingTimeValue="",this.clockingTime=!1,this.meetingEventForToday=!1,this.__members=null,this._hasSetup=!1,this._pageButtonAccess=!1}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return P(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,I.AppSetup)().then((()=>this._hasSetup=!0)),this.getMeetingEventId();const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new f.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,G.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.PageButtonUserAccess)(O.PAGE__IDS.clocking),!(0,N.AppSettingsExtraUserAccess)({pageId:O.PAGE__IDS.clocking,viewType:"Both"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?r.html`
        <div class="shadow bg-white p-2">
          <pdb-attendance-clocking-meeting-picker
            openContentBaseUrl="/clocking/clocker?meeting-event-id=">
          </pdb-attendance-clocking-meeting-picker>
        </div>
      `:r.html`
        <div class="shadow bg-white p-2">
          <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
              filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2"/>
            <div class="my-2 flex flex-col items-end">
              <div class="col-md-6 col-lg-4 flex flex-col items-end">
                <h4 class="font-semibold my-2 capitalize">Override Clocking Time</h4>
                <switch-input class="capitalize" ?isSelected="${this.clockingTime}" name="clockingTimeSwitchAction"
                  label="Override Clocking Time"></switch-input>
              </div>
              <hr />
            </div>
            ${this.clockingTimeField}
            ${this.table}
          </div>
        </div>
      `}get clockingTimeField(){return this.clockingTime?r.html`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-textfield name="setClockingTimeBtn" type="datetime-local" step="1" class="w-full" label="Select Clocking Time"
              value="${this.clockingTimeValue}" outlined required>
            </mwc-textfield><br>
            <mwc-button raised label="Set Clocking Time" @click="${this.setClockingTimeBtn}"></mwc-button>
          </div>
        </div>
      `:r.nothing}get resetClockingList(){return r.html`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <mwc-button raised label="Refresh Clocking List" class="success" @click="${this.UpdateClockingList}"></mwc-button>
          </div>
        </div>
      `}setClockingTimeBtn(e){document.querySelectorAll('mwc-textfield[name="setClockingTimeBtn"]').forEach((e=>{this.clockingTimeValue=e.value}))}clockingTimeSwitchAction(){const e=this;document.querySelectorAll('[name="clockingTimeSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.clockingTime=t.isSelected}))}))}firstUpdated(){this.filterBox=new f.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]}),this.clockingTimeSwitchAction(),setInterval((()=>(0,E.setClockingTimeInfo)(this.clockingTime,this.clockingTimeValue)))}getMeetingEventId(){let e=(0,p.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,d.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,d.base64Encode)(String(this.meetingEventId),!0)}get filterForm(){let e=r.html``;const t=(0,p.urlQueryParams)(),n="filter_date",i="filter_gender",o="filter_name",l="filter_identity",s="filter_member_category",c="filter_group",a="filter_subgroup",d="filter_from_age",u="filter_to_age";let m=null,g=null,h=null,f=null,_=null,b=null,v=null,k=null,y=null;for(const e in t){let r=String(t[e]);if(r=""===r?null:r,e===n)if(null===r)m="";else{const e=new Date(r).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");m=[e[2],e[0],e[1]].join("-")}e===i&&(g=r),e===o&&(h=r),e===l&&(f=r),e===s&&(_=Number(r)),e===c&&(b=Number(r)),e===a&&(v=Number(r)),e===d&&(k=Number(r)),e===u&&(y=Number(r))}const w=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${o}" id="${o}" label="Search By Name" 
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,C=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${d}" id="${d}" label="Pick From Age" 
              value="${null===k?"":k}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick To Age" 
              value="${null===y?"":y}" class="mx-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,S=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${_}" 
            name="${s}" id="${s}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,T=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${n}" id="${n}"
            value="${m}" outlined required></mwc-textfield>
        </div>
      </div>`,$=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===g?r.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(g)===e.id?r.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:r.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,B=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${c}" id="${c}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,n=(0,x.until)(this.getGroup(t),r.html`<span>Loading...</span>`);return null===b?r.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(b)===t?r.html`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:r.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,A=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${a}" id="${a}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,n=(0,x.until)(this.getSubGroup(t),r.html`<span>Loading...</span>`);return null===v?r.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(v)===t?r.html`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:r.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,E=r.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${l}" id="${l}" label="Search By Member ID"
            value="${null===f?"":f}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=r.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${S} ${w} ${$} ${C} ${E} ${B} ${A} ${T}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" value="${this.meetingEventIdEnc}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=this.__dataTable(n);let o={};const l=(0,m.getUserLoginInfoCookie)();return o.Authorization="Token "+l.token,r.html`
      ${this._pageButtonAccess?this.resetClockingList:r.nothing}
      <form>
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="outTime">Clock Out Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="inTime">Clock In Selected</button>
          </div>
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="endBreak">End Break For Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="startBreak">Start Break For Selected</button>
          </div>
        </div>
        <datatables-new .datatable="${i}" .ajaxHeader="${o}" .dt_body="${this.__tableBody}"
          .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
      </form>
    `}renderMemberInfo(e,t,n){const i=(0,b.MemberClockingInfo_S)(n),o=new Date;return this.meetingEventForToday=i.date.toDateString()===o.toDateString(),`<clocker-table-parts-first data="${e}" type="${t}" clocking_info='${JSON.stringify(i).replaceAll("'","&rsquo;")}' ></clocker-table-parts-first>`}renderClockInInfo(e,t,n){return console.log({"--this._pageButtonAccess--":this._pageButtonAccess}),this._pageButtonAccess?`<clocker-table-parts-second clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n          ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >\n        </clocker-table-parts-second>`:`<clocker-table-parts-second clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n          ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >\n        </clocker-table-parts-second>`}renderClockOutInfo(e,t,n){return this._pageButtonAccess?`<clocker-table-parts-third clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n        ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >\n      </clocker-table-parts-third>`:`<clocker-table-parts-third clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n        ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >\n      </clocker-table-parts-third>`}multiBreakClocking(){const e="multi-break-clocking";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),this.multiBreakClockingSubmit(t,e,n)}))}))}multiBreakClockingSubmit(e,t,n){return P(this,void 0,void 0,(function*(){n.preventDefault();const i=e.getAttribute(t),o=document.querySelectorAll('input[type="checkbox"][multi-break-check-in]'),l=document.querySelectorAll('input[type="checkbox"][multi-break-check-out]');let r=[],s=[];if(o.forEach((e=>{if(e.checked){const t=Number(e.getAttribute("multi-break-check-in"));r.includes(t)||r.push(t)}})),l.forEach((e=>{if(e.checked){const t=Number(e.getAttribute("multi-break-check-out"));s.includes(t)||s.push(t)}})),"inTime"===i||"startBreak"===i){let e="Initiate";"inTime"===i&&(e="Clock In"),"startBreak"===i&&(e="Start Break"),yield(0,k.PATCH_AttendanceMultipleClockingBreak)(this.meetingEventId,e,i,r,this._clockingTypes)}else if("outTime"===i||"endBreak"===i){let e="Initiate";"outTime"===i&&(e="Clock Out"),"endBreak"===i&&(e="End Break"),yield(0,k.PATCH_AttendanceMultipleClockingBreak)(this.meetingEventId,e,i,s,this._clockingTypes)}}))}UpdateClockingList(e){return P(this,void 0,void 0,(function*(){e.preventDefault();let t=new Date,n=t.toLocaleString("default",{year:"numeric"})+"-"+t.toLocaleString("default",{month:"2-digit"})+"-"+t.toLocaleString("default",{day:"2-digit"});const i=(0,p.urlQueryParams)();for(const e in i){let t=String(i[e]);"filter_date"===e&&(n=t)}yield(0,v.POST_AttendanceClockingUpdateClockingList)(this.meetingEventId,n)}))}get urlQueryString(){const e=(0,p.urlQueryParams)();let t={};for(const n in e){let i=String(e[n]);"filter_date"!==n&&"filter_gender"!==n&&"filter_name"!==n&&"filter_identity"!==n&&"filter_member_category"!==n&&"filter_group"!==n&&"filter_subgroup"!==n&&"filter_from_age"!==n&&"filter_to_age"!==n||(t[n]=i)}let n=(0,p.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}getGenders(){return P(this,void 0,void 0,(function*(){const e=yield(0,g.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.GenericGenderInfo_S)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}getClockingType(){return P(this,void 0,void 0,(function*(){const e=yield(0,y.GET_GenericMeetingEventClockingType)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,w.GenericMeetingEventClockingTypeInfo_S)(e))));const n=[];n.push(...this._clockingTypes,...t),this._clockingTypes=n}))}getAttendanceScheduleGroup(){return P(this,void 0,void 0,(function*(){if(0===this.meetingEventId)return;const e=yield(0,S.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return P(this,void 0,void 0,(function*(){const t=yield(0,C.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,T.GroupingsGroup_S)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return P(this,void 0,void 0,(function*(){if(0===this.meetingEventId)return;const e=yield(0,B.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return P(this,void 0,void 0,(function*(){const t=yield(0,A.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,$.GroupingsSubGroup_S)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return P(this,void 0,void 0,(function*(){const e=yield(0,_.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.renderMemberInfo(e,n,i),orderable:!0},{data:"inTime",render:(e,n,i)=>t.renderClockInInfo(e,n,i),orderable:!0},{data:"outTime",render:(e,n,i)=>t.renderClockOutInfo(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return P(this,void 0,void 0,(function*(){e.aoData,t.multiBreakClocking()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};F.styles=[r.css`
   :host { display: block; }
  `],L([(0,s.query)('[filter-section-context="btn"]'),M("design:type","function"==typeof(i=void 0!==c.Button&&c.Button)?i:Object)],F.prototype,"filterSectionContextBtn",void 0),L([(0,s.query)('[filter-section-context="container"]'),M("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],F.prototype,"filterSectionContextContainer",void 0),L([(0,s.query)('[make-general-posts="submit_filter_form"]'),M("design:type","function"==typeof(l="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?l:Object)],F.prototype,"filterSectionContextForm",void 0),L([(0,s.property)({type:Number}),M("design:type",Number)],F.prototype,"meetingEventId",void 0),L([(0,s.property)({type:String}),M("design:type",String)],F.prototype,"meetingEventIdEnc",void 0),L([(0,s.property)({type:String}),M("design:type",String)],F.prototype,"datatablePathUrl",void 0),L([(0,s.property)({type:Array}),M("design:type",Array)],F.prototype,"_genders",void 0),L([(0,s.property)({type:Array}),M("design:type",Array)],F.prototype,"_clockingTypes",void 0),L([(0,s.property)({type:Array}),M("design:type",Array)],F.prototype,"_memberCategories",void 0),L([(0,s.property)({type:Array}),M("design:type",Array)],F.prototype,"_scheduleGroups",void 0),L([(0,s.property)({type:Array}),M("design:type",Array)],F.prototype,"_scheduleSubGroups",void 0),L([(0,s.property)({type:Array}),M("design:type",Array)],F.prototype,"_activeBranchId",void 0),L([(0,s.property)({type:Number}),M("design:type",Number)],F.prototype,"_memberType",void 0),L([(0,s.property)({type:String}),M("design:type",String)],F.prototype,"clockingTimeValue",void 0),L([(0,s.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"clockingTime",void 0),L([(0,s.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"meetingEventForToday",void 0),L([(0,s.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"_hasSetup",void 0),L([(0,s.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"_pageButtonAccess",void 0),F=L([(0,s.customElement)("pdb-attendance-clocking-clocker"),M("design:paramtypes",[])],F)}},e=>(e.O(0,["vendors.material","vendors.lit","vendors.lit-element","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_home_dashboard_scss","src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts","src_assets_styles_views_attendance_clocking_main_scss","src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-35ad44","src_addons_interfaces_members_user_organization_model_index_ts","src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_https_https_swal_e-e8b48a","src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-aca8c2","src_addons_interfaces_generic_meeting_event_clocking_type_index_ts-src_addons_interfaces_memb-2533f0","shared"],(()=>(15234,e(e.s=15234)))),e.O())])));
//# sourceMappingURL=clocker.js.map