"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_setup_form_forms_members_dates_ts"],{28322:(e,t,n)=>{n.r(t),n.d(t,{DateIdModel:()=>d,MemberMeetingEventDateFormInputModel:()=>l,MemberMeetingEventDateModel:()=>o});var r=n(69474),i=n(17189),a=n(19345),s=n(84676);class o{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dateId:this.dateId.toJson(),memberId:this.memberId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson()}}static fromJson(e){const t=new o;return t.id=e.id,t.meetingEventId=r.MeetingEventIDModel.fromJson(e.meetingEventId),t.dateId=d.fromJson(e.dateId),t.memberId=s.MeetingAttendanceMemberModel.fromJson(e.memberId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?a.OrganizationMemberModel.fromJson(e.memberInfo):i.IndividualMemberModel.fromJson(e.memberInfo),t}toString(){return JSON.stringify(this.toJson())}}class d{toJson(){return{id:this.id,meetingEventId:this.meetingEventId,date:this.date.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),creationDate:this.creationDate.toISOString()}}static fromJson(e){const t=new d;return t.id=e.id,t.meetingEventId=e.meetingEventId,t.date=new Date(e.date),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.creationDate=new Date(e.creationDate),t}toString(){return JSON.stringify(this.toJson())}}class l{toJson(){return{meetingEventId:this.meetingEventId,dateId:this.dateId,memberId:this.memberId}}static fromJson(e){const t=new l;return t.meetingEventId=e.meetingEventId,t.dateId=e.dateId,t.memberId=e.memberId,t}toString(){return`MemberMeetingEventDateFormInputModel(meetingEventId=${this.meetingEventId}, dateId=${this.dateId}, memberId=${this.memberId})`}}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>o});var r=n(48485),i=n(87270),a=n(14492),s=n(33600);function o(e=null,t=""){return n=this,o=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,d=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(l.next(e))}catch(e){t(e)}}function i(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,i)}a((l=l.apply(n,o||[])).next())}));var n,o,d,l}},14302:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceScheduleMemberDate:()=>m});var r=n(86455),i=n.n(r),a=n(48485),s=n(87270),o=n(14492),d=n(8967),l=n(33600),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{d(r.next(e))}catch(e){a(e)}}function o(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}d((r=r.apply(e,t||[])).next())}))};function m(e){return c(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date/"+e,r={};return i().fire({title:"Remove Member Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,d.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new o.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},68466:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMemberDate:()=>o});var r=n(48485),i=n(87270),a=n(14492),s=n(33600);function o(e=null,t=""){return n=this,o=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date"+(null===e?"":"/"+e)+t,d=yield(0,i.http)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(l.next(e))}catch(e){t(e)}}function i(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,i)}a((l=l.apply(n,o||[])).next())}));var n,o,d,l}},13930:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceScheduleMemberDateBulk:()=>m});var r=n(86455),i=n.n(r),a=n(48485),s=n(87270),o=n(14492),d=n(8967),l=n(33600),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{d(r.next(e))}catch(e){a(e)}}function o(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}d((r=r.apply(e,t||[])).next())}))};function m(e){return c(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=a.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date/bulk",r=document.querySelector('[make-general-posts="add-schedule-member-date"]'),m=JSON.stringify(e);return i().fire({title:"Add Member Date(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"POST",body:m,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new o.NetWorkCallResponses("post",e,!1,r),n=t.multipleResponse;let a=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{a.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{a.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),a.length>0){const e=(0,d.https_swal_error_format)(a);return i().showValidationMessage(`${e}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},60033:(e,t,n)=>{n.r(t),n.d(t,{MemberDateInputsComponent:()=>o});var r=n(85862),i=n(59662),a=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends r.LitElement{constructor(){super(),this.meetingDates=[],this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.meetingDates.map((e=>r.html`<mwc-list-item value="${e.id}">${e.date}</mwc-list-item>`));return r.html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-select name="dateId" class="w-full" id="dateId--${this.inputId}" label="Select Date" outlined
              required @change="${this.handleDateChange}">
              <mwc-list-item value="">Select Date</mwc-list-item>
              ${r.html`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}getMeetingDate(e){let t={id:0,date:new Date};return this.meetingDates.forEach((n=>{n.id===e&&(t=n)})),t}handleDateChange(e){const t=e.target.value;this.dateValue=t}firstUpdated(){}createRenderRoot(){return this}};o.styles=[r.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Array}),s("design:type",Array)],o.prototype,"meetingDates",void 0),a([(0,i.property)({type:String}),s("design:type",Object)],o.prototype,"inputId",void 0),a([(0,i.property)({type:String}),s("design:type",String)],o.prototype,"dateValue",void 0),o=a([(0,i.customElement)("member-date-inputs-component"),s("design:paramtypes",[])],o)},90002:(e,t,n)=>{n.r(t),n.d(t,{MemberDateMultipleInputsComponent:()=>d});var r=n(85862),i=n(59662),a=(n(60033),n(23283),n(51511),n(28322)),s=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleDateObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.meetingDatesCalled=!1,this.loading=!0,this.meetingDates=[],this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.meetingDatesCalled&&this.meetingDates.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.meetingDatesCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=r.html`<member-date-inputs-component date-inputs-component--object="${this.currentObjectCount}" 
      .meetingDates="${this.meetingDates}" >
    </member-date-inputs-component>`,n=this.inputs;n.push(t);let i=this.addedInputIndex;i.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=i,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?r.html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:r.html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>r.html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Date Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?r.html`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:r.nothing}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Date</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDateObjects=t.map((e=>Array.from(document.querySelectorAll('[date-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t;let n=new a.MemberMeetingEventDateFormInputModel;return n.meetingEventId=this.meetingEventId,n.dateId=Number(null!==(t=e.dateValue)&&void 0!==t?t:0),n.memberId=this.meetingMemberId,n}))[0]))}firstUpdated(){}createRenderRoot(){return this}};d.styles=[r.css`
   :host { display: block; }
  `],s([(0,i.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingEventId",void 0),s([(0,i.property)({type:Number}),o("design:type",Number)],d.prototype,"meetingMemberId",void 0),s([(0,i.property)({type:Number}),o("design:type",Number)],d.prototype,"currentObjectCount",void 0),s([(0,i.property)({type:Array}),o("design:type",Array)],d.prototype,"multipleDateObjects",void 0),s([(0,i.property)({type:Array}),o("design:type",Array)],d.prototype,"removedInputIndex",void 0),s([(0,i.property)({type:Array}),o("design:type",Array)],d.prototype,"addedInputIndex",void 0),s([(0,i.property)({type:Boolean}),o("design:type",Boolean)],d.prototype,"meetingDatesCalled",void 0),s([(0,i.property)({type:Boolean}),o("design:type",Boolean)],d.prototype,"loading",void 0),s([(0,i.property)({type:Array}),o("design:type",Array)],d.prototype,"meetingDates",void 0),d=s([(0,i.customElement)("member-date-multiple-inputs-component"),o("design:paramtypes",[])],d)},50047:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDatesContent:()=>v}),n(45501);var r,i=n(85862),a=n(59662),s=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),o=n(44672),d=(n(75866),n(24173)),l=n(55524),c=(n(90002),n(28322)),m=n(8698),u=n(13930),h=n(14302),p=n(68466),b=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{d(r.next(e))}catch(e){a(e)}}function o(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}d((r=r.apply(e,t||[])).next())}))};let v=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dateUser=null,this.__scheduleDates=[],this.__meetingMember=null,this.__memberDates=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dateUser(e){this.__dateUser=e,this.requestUpdate()}get _dateUser(){return this.__dateUser}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDates(e){this.__memberDates=e,this.requestUpdate()}get _memberDates(){return this.__memberDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingMemberId(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDate(),yield this.getAttendanceScheduleMemberDate()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._meetingMember?i.html`
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
      `:!0===this._meetingMember.success?i.html`${this.memberDate}`:i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDate(){return null===this._memberDates?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDates?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.html`${this.table}`}get table(){return this._memberDates.length>0?i.html`
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
      `:i.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDates(){return i.html`
      ${this._memberDates.map(((e,t)=>i.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,d.getDate)(e.dateId.date,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDate}"></mwc-icon-button>
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new s.MDCDataTable(e)}))}submitForm(e){return f(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-date-multiple-inputs-component").forEach((e=>f(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDateObjects;yield(0,u.POST_AttendanceScheduleMemberDateBulk)(t)}))))}))}deleteMemberMeetingAttendanceDate(e){return f(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_AttendanceScheduleMemberDate)(t)}))}getMeetingMemberId(){let e=(0,o.urlQueryParamsGet)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return f(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleMember)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDate(){return f(this,void 0,void 0,(function*(){const e=yield(0,m.GET_AttendanceScheduleDate)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,date:new Date}):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results);const n=[];n.push(...this._scheduleDates,...t),this._scheduleDates=n}))}getAttendanceScheduleMemberDate(){return f(this,void 0,void 0,(function*(){const e=yield(0,p.GET_AttendanceScheduleMemberDate)(null,"?memberId="+this.meetingMemberId+"&length=1000");let t=[];null===e?t.push(new c.MemberMeetingEventDateModel):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>c.MemberMeetingEventDateModel.fromJson(e))));const n=[];n.push(...this._memberDates,...t),this._memberDates=n}))}createRenderRoot(){return this}};v.styles=[i.css`
   :host { display: block; }
  `],b([(0,a.property)({type:Number}),g("design:type",Number)],v.prototype,"CLIENT_ID",void 0),b([(0,a.property)({type:Number}),g("design:type",Number)],v.prototype,"startSearchPage",void 0),b([(0,a.property)({type:Array}),g("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],v.prototype,"_data",void 0),b([(0,a.property)({type:Object}),g("design:type",Object)],v.prototype,"urlQueryParams",void 0),b([(0,a.property)({type:Number}),g("design:type",Number)],v.prototype,"meetingMemberId",void 0),b([(0,a.property)({type:Number}),g("design:type",Number)],v.prototype,"meetingEventId",void 0),v=b([(0,a.customElement)("attendance-setup-form-edit-member-dates-content"),g("design:paramtypes",[])],v)}}]);
//# sourceMappingURL=src_view_attendance_setup_form_forms_members_dates_ts.js.map