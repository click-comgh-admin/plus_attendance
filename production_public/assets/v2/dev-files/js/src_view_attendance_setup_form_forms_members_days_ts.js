"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_setup_form_forms_members_days_ts"],{45501:(e,t,n)=>{n.r(t)},24173:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>r});const r=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},7149:(e,t,n)=>{n.r(t),n.d(t,{DayIdFullModel:()=>l,DayIdModel:()=>o,MemberMeetingEventDayFormInputModel:()=>c,MemberMeetingEventDayModel:()=>d});var r=n(69474),a=n(17189),i=n(19345),s=n(84676);class d{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId.toJson(),memberId:this.memberId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson()}}static fromJson(e){const t=new d;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.dayId=l.fromJson(e.dayId),t.memberId=s.MeetingAttendanceMemberModel.fromJson(e.memberId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?i.OrganizationMemberModel.fromJson(e.memberInfo):a.IndividualMemberModel.fromJson(e.memberInfo),t}toString(){return JSON.stringify(this.toJson())}}class o{toJson(){return{id:this.id,date:this.date.toISOString()}}static fromJson(e){const t=new o;return t.id=e.id,t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class l{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId,startDate:this.startDate.toISOString(),endDate:this.endDate.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}static fromJson(e){const t=new l;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.dayId=e.dayId,t.startDate=new Date(e.startDate),t.endDate=new Date(e.endDate),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class c{toJson(){return{meetingEventId:this.meetingEventId,dayId:this.dayId,memberId:this.memberId}}static fromJson(e){const t=new c;return t.meetingEventId=e.meetingEventId,t.dayId=e.dayId,t.memberId=e.memberId,t}toString(){return`MemberMeetingEventDayFormInputModel(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, memberId=${this.memberId})`}}},11148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>d});var r=n(48485),a=n(87270),i=n(14492),s=n(33600);function d(e=null){return t=this,n=void 0,o=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),d=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function i(e){try{s(o.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(a,i)}s((o=o.apply(t,n||[])).next())}));var t,n,d,o}},67824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>d});var r=n(48485),a=n(87270),i=n(14492),s=n(33600);function d(e=null,t=""){return n=this,d=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function a(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,a)}i((l=l.apply(n,d||[])).next())}));var n,d,o,l}},49744:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceScheduleMemberDay:()=>u});var r=n(86455),a=n.n(r),i=n(48485),s=n(87270),d=n(14492),o=n(8967),l=n(33600),c=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function s(e){try{o(r.next(e))}catch(e){i(e)}}function d(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}o((r=r.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/"+e,r={};return a().fire({title:"Remove Member Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new d.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,o.https_swal_error_format)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new d.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}a().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},32617:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberDay:()=>d});var r=n(48485),a=n(87270),i=n(14492),s=n(33600);function d(e=null,t=""){return n=this,d=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function a(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,a)}i((l=l.apply(n,d||[])).next())}));var n,d,o,l}},37067:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceScheduleMemberDayBulk:()=>u});var r=n(86455),a=n.n(r),i=n(48485),s=n(87270),d=n(14492),o=n(8967),l=n(33600),c=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function s(e){try{o(r.next(e))}catch(e){i(e)}}function d(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}o((r=r.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/bulk",r=document.querySelector('[make-general-posts="add-schedule-member-day"]'),u=JSON.stringify(e);return a().fire({title:"Add Member Day(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"POST",body:u,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new d.NetWorkCallResponses("post",e,!1,r),n=t.multipleResponse;let i=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),i.length>0){const e=(0,o.https_swal_error_format)(i);return a().showValidationMessage(`${e}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&a().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},55524:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMember:()=>d});var r=n(48485),a=n(87270),i=n(14492),s=n(33600);function d(e=null,t=""){return n=this,d=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),d=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function a(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,a)}i((l=l.apply(n,d||[])).next())}));var n,d,o,l}},19956:(e,t,n)=>{n.r(t),n.d(t,{MemberDayInputsComponent:()=>d});var r=n(85862),a=n(59662),i=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r.LitElement{constructor(){super(),this.daysOfWeek=[],this.meetingDays=[],this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.meetingDays.map((e=>r.html`<mwc-list-item value="${e.id}">${this.getDayOfWeek(e.dayId).day}</mwc-list-item>`));return r.html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId--${this.inputId}" label="Select Day" outlined
              required @change="${this.handleDayChange}">
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${r.html`${e}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select Start Date</h4>
                  <mwc-textfield name="startDate" multiple type="date" class="w-full" id="startDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleStartDateChange}" disabled>
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select End Date</h4>
                  <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleEndDateChange}" disabled>
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}getDayOfWeek(e){let t={id:0,date:new Date,day:"-"};return this.daysOfWeek.forEach((n=>{n.id===e&&(t=n)})),t}getMeetingDay(e){let t={id:0,date:new Date};return this.meetingDays.forEach((n=>{n.id===e&&(t=n)})),t}handleDayChange(e){const t=e.target.value;this.dayValue=t,Array.from(this.querySelectorAll(`[id="startDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).startDate,this.startDateValue=e.value})),Array.from(this.querySelectorAll(`[id="endDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).endDate,this.endDateValue=e.value}))}handleStartDateChange(e){this.startDateValue=e.target.value}handleEndDateChange(e){this.endDateValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};d.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Array}),s("design:type",Array)],d.prototype,"daysOfWeek",void 0),i([(0,a.property)({type:Array}),s("design:type",Array)],d.prototype,"meetingDays",void 0),i([(0,a.property)({type:String}),s("design:type",Object)],d.prototype,"inputId",void 0),i([(0,a.property)({type:String}),s("design:type",String)],d.prototype,"dayValue",void 0),i([(0,a.property)({type:String}),s("design:type",String)],d.prototype,"startDateValue",void 0),i([(0,a.property)({type:String}),s("design:type",String)],d.prototype,"endDateValue",void 0),d=i([(0,a.customElement)("member-day-inputs-component"),s("design:paramtypes",[])],d)},62643:(e,t,n)=>{n.r(t),n.d(t,{MemberDayMultipleInputsComponent:()=>o});var r=n(85862),a=n(59662),i=(n(19956),n(23283),n(51511),n(7149)),s=function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends r.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.meetingDaysCalled=!1,this.loading=!0,this.meetingDays=[],this.daysOfWeek=[],this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.meetingDaysCalled&&this.meetingDays.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.meetingDaysCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=r.html`<member-day-inputs-component day-inputs-component--object="${this.currentObjectCount}" 
      .meetingDays="${this.meetingDays}" .daysOfWeek="${this.daysOfWeek}" >
    </member-day-inputs-component>`,n=this.inputs;n.push(t);let a=this.addedInputIndex;a.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=a,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?r.html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:r.html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>r.html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Day Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?r.html`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:r.nothing}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Day</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[day-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t;let n=new i.MemberMeetingEventDayFormInputModel;return n.meetingEventId=this.meetingEventId,n.dayId=Number(null!==(t=e.dayValue)&&void 0!==t?t:0),n.memberId=this.meetingMemberId,n}))[0]))}firstUpdated(){}createRenderRoot(){return this}};o.styles=[r.css`
   :host { display: block; }
  `],s([(0,a.property)({type:Number}),d("design:type",Number)],o.prototype,"meetingEventId",void 0),s([(0,a.property)({type:Number}),d("design:type",Number)],o.prototype,"meetingMemberId",void 0),s([(0,a.property)({type:Number}),d("design:type",Number)],o.prototype,"currentObjectCount",void 0),s([(0,a.property)({type:Array}),d("design:type",Array)],o.prototype,"multipleDayObjects",void 0),s([(0,a.property)({type:Array}),d("design:type",Array)],o.prototype,"removedInputIndex",void 0),s([(0,a.property)({type:Array}),d("design:type",Array)],o.prototype,"addedInputIndex",void 0),s([(0,a.property)({type:Boolean}),d("design:type",Boolean)],o.prototype,"meetingDaysCalled",void 0),s([(0,a.property)({type:Boolean}),d("design:type",Boolean)],o.prototype,"loading",void 0),s([(0,a.property)({type:Array}),d("design:type",Array)],o.prototype,"meetingDays",void 0),s([(0,a.property)({type:Array}),d("design:type",Array)],o.prototype,"daysOfWeek",void 0),o=s([(0,a.customElement)("member-day-multiple-inputs-component"),d("design:paramtypes",[])],o)},16628:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDaysContent:()=>_}),n(45501);var r,a,i=n(85862),s=n(59662),d=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),o=n(44672),l=(n(75866),n(11148)),c=n(24173),u=n(7149),m=n(55524),h=n(32617),p=n(67824),y=n(37067),f=n(49744),g=(n(62643),function(e,t,n,r){var a,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(s=(i<3?a(s):i>3?a(t,n,s):a(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function s(e){try{o(r.next(e))}catch(e){i(e)}}function d(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}o((r=r.apply(e,t||[])).next())}))};let _=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__scheduleDays=[],this.__meetingMember=null,this.__memberDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDays(e){this.__memberDays=e,this.requestUpdate()}get _memberDays(){return this.__memberDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingMemberId(),yield this.getDaysOfWeek(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDay(),yield this.getAttendanceScheduleMemberDay()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._meetingMember?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?i.html`${this.memberDay}`:i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDay(){return null===this._memberDays?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDays?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.html`${this.table}`}get table(){return this._memberDays.length>0?i.html`
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
      `:i.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDays(){return i.html`
      ${this._memberDays.map(((e,t)=>i.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${""}
              ${this.getMemberDayOfWeek(e.dayId.id)}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.getDate)(e.dayId.startDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,c.getDate)(e.dayId.endDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDay}"></mwc-icon-button>
            </td>
          </tr>
        `))}
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.MDCDataTable(e)}))}getMemberDayOfWeek(e){let t="-";return this._scheduleDays.forEach((n=>{e===n.id&&this._daysOfWeek.forEach((e=>{n.dayId===e.id&&(t=e.day)}))})),t}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-day-multiple-inputs-component").forEach((e=>v(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield(0,y.POST_AttendanceScheduleMemberDayBulk)(t)}))))}))}deleteMemberMeetingAttendanceDay(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,f.DELETE_AttendanceScheduleMemberDay)(t)}))}getMeetingMemberId(){let e=(0,o.urlQueryParamsGet)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return v(this,void 0,void 0,(function*(){const e=yield(0,m.GET_AttendanceScheduleMember)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,p.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getAttendanceScheduleMemberDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.GET_AttendanceScheduleMemberDay)(null,"?memberId="+this.meetingMemberId+"&length=1000");let t=[];null===e?t.push(new u.MemberMeetingEventDayModel):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>u.MemberMeetingEventDayModel.fromJson(e))));const n=[];n.push(...this._memberDays,...t),this._memberDays=n}))}getDaysOfWeek(){return v(this,void 0,void 0,(function*(){const e=yield(0,l.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return v(this,void 0,void 0,(function*(){const t=yield(0,l.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};_.styles=[i.css`
   :host { display: block; }
  `],g([(0,s.property)({type:Number}),b("design:type",Number)],_.prototype,"CLIENT_ID",void 0),g([(0,s.property)({type:Number}),b("design:type",Number)],_.prototype,"startSearchPage",void 0),g([(0,s.property)({type:Array}),b("design:type",Array)],_.prototype,"_daysOfWeek",void 0),g([(0,s.property)({type:Array}),b("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],_.prototype,"_data",void 0),g([(0,s.property)({type:Object}),b("design:type",Object)],_.prototype,"urlQueryParams",void 0),g([(0,s.property)({type:Number}),b("design:type",Number)],_.prototype,"meetingMemberId",void 0),g([(0,s.property)({type:Number}),b("design:type",Number)],_.prototype,"meetingEventId",void 0),g([(0,s.query)('[show-dayField="all"]'),b("design:type","function"==typeof(a="undefined"!=typeof Element&&Element)?a:Object)],_.prototype,"showDayFieldAllSelector",void 0),_=g([(0,s.customElement)("attendance-setup-form-edit-member-days-content"),b("design:paramtypes",[])],_)}}]);
//# sourceMappingURL=src_view_attendance_setup_form_forms_members_days_ts.js.map