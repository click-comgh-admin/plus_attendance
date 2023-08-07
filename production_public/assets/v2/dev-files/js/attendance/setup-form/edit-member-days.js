"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member-days"],{45501:(e,t,n)=>{n.r(t)},24173:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>r});const r=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},7149:(e,t,n)=>{n.r(t),n.d(t,{DayIdFullModel:()=>l,DayIdModel:()=>d,MemberMeetingEventDayFormInputModel:()=>c,MemberMeetingEventDayModel:()=>o});var r=n(69474),a=n(17189),s=n(19345),i=n(84676);class o{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId.toJson(),memberId:this.memberId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson()}}static fromJson(e){const t=new o;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.dayId=l.fromJson(e.dayId),t.memberId=i.MeetingAttendanceMemberModel.fromJson(e.memberId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?s.OrganizationMemberModel.fromJson(e.memberInfo):a.IndividualMemberModel.fromJson(e.memberInfo),t}toString(){return JSON.stringify(this.toJson())}}class d{toJson(){return{id:this.id,date:this.date.toISOString()}}static fromJson(e){const t=new d;return t.id=e.id,t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class l{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId,startDate:this.startDate.toISOString(),endDate:this.endDate.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}static fromJson(e){const t=new l;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.dayId=e.dayId,t.startDate=new Date(e.startDate),t.endDate=new Date(e.endDate),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class c{toJson(){return{meetingEventId:this.meetingEventId,dayId:this.dayId,memberId:this.memberId}}static fromJson(e){const t=new c;return t.meetingEventId=e.meetingEventId,t.dayId=e.dayId,t.memberId=e.memberId,t}toString(){return`MemberMeetingEventDayFormInputModel(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, memberId=${this.memberId})`}}},11148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>o});var r=n(48485),a=n(87270),s=n(14492),i=n(33600);function o(e=null){return t=this,n=void 0,d=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),o=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,r){function a(e){try{i(d.next(e))}catch(e){r(e)}}function s(e){try{i(d.throw(e))}catch(e){r(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}i((d=d.apply(t,n||[])).next())}));var t,n,o,d}},67824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>o});var r=n(48485),a=n(87270),s=n(14492),i=n(33600);function o(e=null,t=""){return n=this,o=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,d=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{s(l.next(e))}catch(e){t(e)}}function a(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,a)}s((l=l.apply(n,o||[])).next())}));var n,o,d,l}},49744:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceScheduleMemberDay:()=>u});var r=n(86455),a=n.n(r),s=n(48485),i=n(87270),o=n(14492),d=n(8967),l=n(33600),c=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function i(e){try{d(r.next(e))}catch(e){s(e)}}function o(e){try{d(r.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}d((r=r.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/"+e,r={};return a().fire({title:"Remove Member Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new o.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}a().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},32617:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberDay:()=>o});var r=n(48485),a=n(87270),s=n(14492),i=n(33600);function o(e=null,t=""){return n=this,o=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day"+(null===e?"":"/"+e)+t,d=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{s(l.next(e))}catch(e){t(e)}}function a(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,a)}s((l=l.apply(n,o||[])).next())}));var n,o,d,l}},37067:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceScheduleMemberDayBulk:()=>u});var r=n(86455),a=n.n(r),s=n(48485),i=n(87270),o=n(14492),d=n(8967),l=n(33600),c=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function i(e){try{d(r.next(e))}catch(e){s(e)}}function o(e){try{d(r.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}d((r=r.apply(e,t||[])).next())}))};function u(e){return c(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/bulk",r=document.querySelector('[make-general-posts="add-schedule-member-day"]'),u=JSON.stringify(e);return a().fire({title:"Add Member Day(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"POST",body:u,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new o.NetWorkCallResponses("post",e,!1,r),n=t.multipleResponse;let s=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{s.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{s.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),s.length>0){const e=(0,d.https_swal_error_format)(s);return a().showValidationMessage(`${e}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&a().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},55524:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMember:()=>o});var r=n(48485),a=n(87270),s=n(14492),i=n(33600);function o(e=null,t=""){return n=this,o=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,d=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{s(l.next(e))}catch(e){t(e)}}function a(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,a)}s((l=l.apply(n,o||[])).next())}));var n,o,d,l}},59665:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDays:()=>m}),n(69579),n(43683),n(74657);var r=n(14108),a=n(85862),s=n(59662),i=(n(8693),n(27712)),o=n(91354),d=n(41302),l=n(17108),c=(n(16628),function(e,t,n,r){var a,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(s<3?a(i):s>3?a(t,n,i):a(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends a.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((a=void 0)||(a=Promise))((function(e,r){function i(e){try{d(s.next(e))}catch(e){r(e)}}function o(e){try{d(s.throw(e))}catch(e){r(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,o)}d((s=s.apply(t,n||[])).next())}));var t,n,a,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return a.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,d.PageButtonUserAccess)(l.PAGE__IDS.schedule_meeting_event),!(0,d.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return a.html`<no-page-entry-component></no-page-entry-component>`}return a.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-days-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-days-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};c([(0,s.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),c([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),c([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),c([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"meetingEventId",void 0),c([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),c([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=c([(0,s.customElement)("attendance-setup-form-edit-member-days"),u("design:paramtypes",[])],m)},19956:(e,t,n)=>{n.r(t),n.d(t,{MemberDayInputsComponent:()=>o});var r=n(85862),a=n(59662),s=function(e,t,n,r){var a,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(s<3?a(i):s>3?a(t,n,i):a(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends r.LitElement{constructor(){super(),this.daysOfWeek=[],this.meetingDays=[],this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.meetingDays.map((e=>r.html`<mwc-list-item value="${e.id}">${this.getDayOfWeek(e.dayId).day}</mwc-list-item>`));return r.html`
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
    `}getDayOfWeek(e){let t={id:0,date:new Date,day:"-"};return this.daysOfWeek.forEach((n=>{n.id===e&&(t=n)})),t}getMeetingDay(e){let t={id:0,date:new Date};return this.meetingDays.forEach((n=>{n.id===e&&(t=n)})),t}handleDayChange(e){const t=e.target.value;this.dayValue=t,Array.from(this.querySelectorAll(`[id="startDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).startDate,this.startDateValue=e.value})),Array.from(this.querySelectorAll(`[id="endDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).endDate,this.endDateValue=e.value}))}handleStartDateChange(e){this.startDateValue=e.target.value}handleEndDateChange(e){this.endDateValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};o.styles=[r.css`
   :host { display: block; }
  `],s([(0,a.property)({type:Array}),i("design:type",Array)],o.prototype,"daysOfWeek",void 0),s([(0,a.property)({type:Array}),i("design:type",Array)],o.prototype,"meetingDays",void 0),s([(0,a.property)({type:String}),i("design:type",Object)],o.prototype,"inputId",void 0),s([(0,a.property)({type:String}),i("design:type",String)],o.prototype,"dayValue",void 0),s([(0,a.property)({type:String}),i("design:type",String)],o.prototype,"startDateValue",void 0),s([(0,a.property)({type:String}),i("design:type",String)],o.prototype,"endDateValue",void 0),o=s([(0,a.customElement)("member-day-inputs-component"),i("design:paramtypes",[])],o)},62643:(e,t,n)=>{n.r(t),n.d(t,{MemberDayMultipleInputsComponent:()=>d});var r=n(85862),a=n(59662),s=(n(19956),n(23283),n(51511),n(7149)),i=function(e,t,n,r){var a,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(s<3?a(i):s>3?a(t,n,i):a(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.meetingDaysCalled=!1,this.loading=!0,this.meetingDays=[],this.daysOfWeek=[],this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.meetingDaysCalled&&this.meetingDays.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.meetingDaysCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=r.html`<member-day-inputs-component day-inputs-component--object="${this.currentObjectCount}" 
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
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[day-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t;let n=new s.MemberMeetingEventDayFormInputModel;return n.meetingEventId=this.meetingEventId,n.dayId=Number(null!==(t=e.dayValue)&&void 0!==t?t:0),n.memberId=this.meetingMemberId,n}))[0]))}firstUpdated(){}createRenderRoot(){return this}};d.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingEventId",void 0),i([(0,a.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingMemberId",void 0),i([(0,a.property)({type:Number}),o("design:type",Number)],d.prototype,"currentObjectCount",void 0),i([(0,a.property)({type:Array}),o("design:type",Array)],d.prototype,"multipleDayObjects",void 0),i([(0,a.property)({type:Array}),o("design:type",Array)],d.prototype,"removedInputIndex",void 0),i([(0,a.property)({type:Array}),o("design:type",Array)],d.prototype,"addedInputIndex",void 0),i([(0,a.property)({type:Boolean}),o("design:type",Boolean)],d.prototype,"meetingDaysCalled",void 0),i([(0,a.property)({type:Boolean}),o("design:type",Boolean)],d.prototype,"loading",void 0),i([(0,a.property)({type:Array}),o("design:type",Array)],d.prototype,"meetingDays",void 0),i([(0,a.property)({type:Array}),o("design:type",Array)],d.prototype,"daysOfWeek",void 0),d=i([(0,a.customElement)("member-day-multiple-inputs-component"),o("design:paramtypes",[])],d)},16628:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDaysContent:()=>_}),n(45501);var r,a,s=n(85862),i=n(59662),o=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),d=n(44672),l=(n(75866),n(11148)),c=n(24173),u=n(7149),m=n(55524),p=n(32617),h=n(67824),y=n(37067),f=n(49744),g=(n(62643),function(e,t,n,r){var a,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(s<3?a(i):s>3?a(t,n,i):a(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function i(e){try{d(r.next(e))}catch(e){s(e)}}function o(e){try{d(r.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}d((r=r.apply(e,t||[])).next())}))};let _=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__scheduleDays=[],this.__meetingMember=null,this.__memberDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDays(e){this.__memberDays=e,this.requestUpdate()}get _memberDays(){return this.__memberDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingMemberId(),yield this.getDaysOfWeek(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDay(),yield this.getAttendanceScheduleMemberDay()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._meetingMember?s.html`
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
      `:!0===this._meetingMember.success?s.html`${this.memberDay}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDay(){return null===this._memberDays?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDays?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._memberDays.length>0?s.html`
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
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDays(){return s.html`
      ${this._memberDays.map(((e,t)=>s.html`
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
    `}get form(){return s.html`
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new o.MDCDataTable(e)}))}getMemberDayOfWeek(e){let t="-";return this._scheduleDays.forEach((n=>{e===n.id&&this._daysOfWeek.forEach((e=>{n.dayId===e.id&&(t=e.day)}))})),t}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-day-multiple-inputs-component").forEach((e=>v(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield(0,y.POST_AttendanceScheduleMemberDayBulk)(t)}))))}))}deleteMemberMeetingAttendanceDay(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,f.DELETE_AttendanceScheduleMemberDay)(t)}))}getMeetingMemberId(){let e=(0,d.urlQueryParamsGet)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return v(this,void 0,void 0,(function*(){const e=yield(0,m.GET_AttendanceScheduleMember)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getAttendanceScheduleMemberDay(){return v(this,void 0,void 0,(function*(){const e=yield(0,p.GET_AttendanceScheduleMemberDay)(null,"?memberId="+this.meetingMemberId+"&length=1000");let t=[];null===e?t.push(new u.MemberMeetingEventDayModel):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>u.MemberMeetingEventDayModel.fromJson(e))));const n=[];n.push(...this._memberDays,...t),this._memberDays=n}))}getDaysOfWeek(){return v(this,void 0,void 0,(function*(){const e=yield(0,l.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return v(this,void 0,void 0,(function*(){const t=yield(0,l.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};_.styles=[s.css`
   :host { display: block; }
  `],g([(0,i.property)({type:Number}),b("design:type",Number)],_.prototype,"CLIENT_ID",void 0),g([(0,i.property)({type:Number}),b("design:type",Number)],_.prototype,"startSearchPage",void 0),g([(0,i.property)({type:Array}),b("design:type",Array)],_.prototype,"_daysOfWeek",void 0),g([(0,i.property)({type:Array}),b("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],_.prototype,"_data",void 0),g([(0,i.property)({type:Object}),b("design:type",Object)],_.prototype,"urlQueryParams",void 0),g([(0,i.property)({type:Number}),b("design:type",Number)],_.prototype,"meetingMemberId",void 0),g([(0,i.property)({type:Number}),b("design:type",Number)],_.prototype,"meetingEventId",void 0),g([(0,i.query)('[show-dayField="all"]'),b("design:type","function"==typeof(a="undefined"!=typeof Element&&Element)?a:Object)],_.prototype,"showDayFieldAllSelector",void 0),_=g([(0,i.customElement)("attendance-setup-form-edit-member-days-content"),b("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_attendance_meeting_event-9c74b9","src_addons_interfaces_attendance_meeting_event_member_member_index_ts-src_addons_widgets_add_-7d4222","shared"],(()=>(59665,e(e.s=59665)))),e.O())])));
//# sourceMappingURL=edit-member-days.js.map