"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_setup_form_forms_schedule_ts"],{35663:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventLinkTypes:()=>c});var i=n(48485),l=n(87270),s=n(14492),o=n(33600),r=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function c(e=null){return r(this,void 0,void 0,(function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),r=yield(0,l.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},96404:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventLocations:()=>c});var i=n(48485),l=n(87270),s=n(14492),o=n(33600),r=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function c(e=null){return r(this,void 0,void 0,(function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),r=yield(0,l.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},47790:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventMemberTypes:()=>c});var i=n(48485),l=n(87270),s=n(14492),o=n(33600),r=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function c(e=null){return r(this,void 0,void 0,(function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),r=yield(0,l.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},40028:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventTypes:()=>c});var i=n(48485),l=n(87270),s=n(14492),o=n(33600),r=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function c(e=null){return r(this,void 0,void 0,(function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),r=yield(0,l.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},41125:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddSchedule:()=>m});var i=n(86455),l=n.n(i),s=n(48485),o=n(87270),r=n(14492),c=n(8967),a=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule",n=document.querySelector('[make-general-posts="add-schedule"]'),i=new FormData(n);return l().fire({title:"Set Meeting/Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&l().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(i instanceof Object){const e=i.response;window.location.href=s.CONSTANTS.URLS.PDB_CLIENT+"settings/schedule?meeting-event-id="+e.data.id}else window.location.reload()}),500)}}))}))}},64609:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceEditSchedule:()=>m});var i=n(86455),l=n.n(i),s=n(48485),o=n(87270),r=n(14492),c=n(8967),a=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,i=document.querySelector('[make-general-posts="add-schedule"]'),m=new FormData(i);return l().fire({title:"Update Schedule?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&l().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>c});var i=n(48485),l=n(87270),s=n(14492),o=n(33600),r=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};function c(e=null){return r(this,void 0,void 0,(function*(){const t=(0,o.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),r=yield(0,l.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},83979:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormSchedule:()=>b});var i,l=n(85862),s=n(59662),o=(n(63313),n(40789),n(36034),n(23283),n(43690),n(37725),n(75866),n(40028)),r=n(26224),c=n(90072),a=n(96404),d=n(35663),m=n(41125),u=n(52218),h=n(64609),p=n(47790),y=n(33600),v=n(17725),f=(n(43629),function(e,t,n,i){var l,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(o=(s<3?l(o):s>3?l(t,n,o):l(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,i){return new(n||(n=Promise))((function(l,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};let b=class extends l.LitElement{constructor(){super(),this.__schedule=null,this.CLIENT_ID=0,this.meetingEventId=0,this.isEdit=!1,this._type=[],this._memberType=[],this.selectedBranchId=0,this._branches=[],this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._meetingEventLinkTypes=[],this._meetingEventLocations=[],this._data=[]}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,v.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,y.getUserLoginInfoCookie)()],yield this.getTypes(),yield this.getBranches(),yield this.getMemberTypes(),yield this.getMemberCategories(),yield this.getAttendanceSchedule(),yield this.getMeetingEventLinkTypes(),yield this.getMeetingEventLocations()}))}disconnectedCallback(){}render(){let e=null;e=null!==this._schedule&&void 0!==this._schedule.data?Array.isArray(this._schedule.data)?this._schedule.data.length>0?this._schedule.data[0]:{}:this._schedule.data:{};let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),void 0===e.meetingLocation||e.meetingLocation,l.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Schedule</h1>
                  <h3 class="h3">Create New Meeting/ Event Schedule!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="add-schedule" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Schedule Type</h4>
                    ${void 0===e.type?l.html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((t=>e.type===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Type</h4>
                    ${void 0===e.memberType?l.html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((t=>e.memberType===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Meeting/ Event</h4> 
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter Meeting/ Event" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${1===t?l.html`
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>void 0===e.branchId?l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`:e.branchId.id===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      `:l.html`
                        ${this._branches.map((e=>{if(e.id===t)return l.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      `}
                    </mwc-select>
                    ${""}
                  </div>
                  ${this.categoriesFormField}
          
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Span (in days) <span class="text-xs text-akwaaba-orange-light">How long the meeting/ event will last (default is 1 day)</span></h4> 
                    <mwc-textfield name="meetingSpan" type="number" min="1" class="w-full" id="meetingSpan" value="${void 0===e.id?"1":String(e.meetingSpan)}" label="Select Meeting Span" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Start Time <i class="text-xs text-akwaaba-orange-light">[If multiple times are required, set primary time here and extra times in <b>TIMES</b> page]</i></h4> 
                    <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" value="${void 0===e.id?"":String(e.startTime)}" label="Select Start Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Close Time <i class="text-xs text-akwaaba-orange-light">[If multiple times are required, set primary time here and extra times in <b>TIMES</b> page]</i></h4> 
                    <mwc-textfield name="closeTime" type="time" class="w-full" id="closeTime" value="${void 0===e.id?"":String(e.closeTime)}" label="Select Close Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Lateness Time</h4> 
                    <mwc-textfield name="latenessTime" type="time" class="w-full" id="latenessTime" value="${void 0===e.id?"":String(e.latenessTime)}" label="Select Lateness Time" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Is It Recuring?</h4> 
                    <switch-input name="isRecuring" class="w-full" id="isRecuring" .selected="${void 0!==e.id&&e.isRecuring}" label="Is It Recuring?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Multiple Meeting Times?</h4> 
                    <switch-input name="hasMultipleTimes" class="w-full" id="hasMultipleTimes" .selected="${void 0!==e.id&&e.hasMultipleTimes}" label="Has Multiple Times?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Break-Time?</h4> 
                    <switch-input name="hasBreakTime" class="w-full" id="hasBreakTime" .selected="${void 0!==e.id&&e.hasBreakTime}" label="Any Break-Time?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Duty/ Work Reporting?</h4> 
                    <switch-input name="hasDuty" class="w-full" id="hasDuty" .selected="${void 0!==e.id&&e.hasDuty}" label="Any Duty/ Work Reporting?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Overtime?</h4> 
                    <switch-input name="hasOvertime" class="w-full" id="hasOvertime" .selected="${void 0!==e.id&&e.hasOvertime}" label="Any Overtime?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Location</h4>
                    ${void 0===e.meetingLocation?l.html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((e=>l.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:l.html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((t=>e.meetingLocation===t.id?l.html`<mwc-list-item value="${t.id}" selected activated aria-selected="true">${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Virtual Meeting Link</h4> 
                    <mwc-textfield name="virtualMeetingLink" type="url" class="w-full" id="virtualMeetingLink" value="${e.virtualMeetingLink}" label="Enter Virtual Meeting Link" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Virtual Meeting Type</h4>
                    <mwc-select name="virtualMeetingType" class="w-full" id="virtualMeetingType" label="Select Virtual Meeting Type" outlined>
                      <mwc-list-item value="0">Select Virtual Meeting Type</mwc-list-item>
                      ${this._meetingEventLinkTypes.map((t=>e.virtualMeetingType===t.id?l.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:l.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Expected Monthly Attendance</h4> 
                    <mwc-textfield name="expectedMonthlyAttendance" type="number" class="w-full" id="expectedMonthlyAttendance"
                      value="${void 0===e.id?0:e.expectedMonthlyAttendance}" label="Enter Expected Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Active Monthly Attendance</h4>
                    <mwc-textfield name="activeMonthlyAttendance" type="number" class="w-full" id="activeMonthlyAttendance"
                      value="${void 0===e.id?0:e.activeMonthlyAttendance}" label="Enter Active Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${void 0===e.id?"":e.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="agendaFile" name="agendaFile" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="${void 0===e.id?"Create":"Update"} Schedule" raised class="button" @click="${this.submitForm}">
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
    `}get categoriesFormField(){let e=null;return e=null!==this._schedule&&void 0!==this._schedule.data?Array.isArray(this._schedule.data)?this._schedule.data.length>0?this._schedule.data[0]:{}:this._schedule.data:null,null==e?l.nothing:l.html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Category</h4>
          <pdb-membership-select-member-type material="false" multiple
            name="meetingCategories" id="meetingCategories"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
      </div>
    `}firstUpdated(){}submitForm(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),void 0!==this._schedule&&!0===this.isEdit?yield(0,h.PUT_AttendanceEditSchedule)(this.meetingEventId):yield(0,m.POST_AttendanceAddSchedule)()}))}getAttendanceSchedule(){return w(this,void 0,void 0,(function*(){const e=yield(0,u.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,o.GET_MeetingEventTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._type,...t),this._type=n}))}getMemberTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,p.GET_MeetingEventMemberTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberType,...t),this._memberType=n}))}getMeetingEventLinkTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,d.GET_MeetingEventLinkTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._meetingEventLinkTypes,...t),this._meetingEventLinkTypes=n}))}getMeetingEventLocations(){return w(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MeetingEventLocations)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._meetingEventLocations,...t),this._meetingEventLocations=n}))}getBranches(){return w(this,void 0,void 0,(function*(){const e=yield(0,r.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getMemberCategories(){return w(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}createRenderRoot(){return this}};b.styles=[l.css`
   :host { display: block; }
  `],f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"CLIENT_ID",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"meetingEventId",void 0),f([(0,s.property)({type:Boolean}),g("design:type",Boolean)],b.prototype,"isEdit",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_type",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_memberType",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"selectedBranchId",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_branches",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_userLoginInfo",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_activeBranchId",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_memberCategories",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_meetingEventLinkTypes",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_meetingEventLocations",void 0),f([(0,s.property)({type:Array}),g("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],b.prototype,"_data",void 0),b=f([(0,s.customElement)("attendance-setup-form-schedule"),g("design:paramtypes",[])],b)}}]);
//# sourceMappingURL=src_view_attendance_setup_form_forms_schedule_ts.js.map