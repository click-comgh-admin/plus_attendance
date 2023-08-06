"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2829],{4173:(e,t,n)=>{n.d(t,{_:()=>r});const r=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},8698:(e,t,n)=>{n.d(t,{R:()=>s});var r=n(771),i=n(7270),a=n(596),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.Ie)(),s=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,d=yield(0,i.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(c.next(e))}catch(e){t(e)}}function i(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,i)}a((c=c.apply(n,s||[])).next())}));var n,s,d,c}},6637:(e,t,n)=>{n.d(t,{n:()=>s});var r=n(771),i=n(7270),a=n(596),o=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,o.Ie)(),s=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,d=yield(0,i.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(c.next(e))}catch(e){t(e)}}function i(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,i)}a((c=c.apply(n,s||[])).next())}));var n,s,d,c}},1781:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDates:()=>V}),n(3683),n(4657);var r=n(4108),i=n(5862),a=n(8393),o=(n(8693),n(9665)),s=n(8092),d=n(1302),c=n(7108),l=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),u=n(4672),m=(n(5866),n(4173)),p=n(6637),h=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=class extends i.oi{constructor(){super(),this.meetingDates=[],this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.meetingDates.map((e=>i.dy`<mwc-list-item value="${e.id}">${e.date}</mwc-list-item>`));return i.dy`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-select name="dateId" class="w-full" id="dateId--${this.inputId}" label="Select Date" outlined
              required @change="${this.handleDateChange}">
              <mwc-list-item value="">Select Date</mwc-list-item>
              ${i.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}getMeetingDate(e){let t={id:0,date:new Date};return this.meetingDates.forEach((n=>{n.id===e&&(t=n)})),t}handleDateChange(e){const t=e.target.value;this.dateValue=t}firstUpdated(){}createRenderRoot(){return this}};f.styles=[i.iv`
   :host { display: block; }
  `],h([(0,a.Cb)({type:Array}),b("design:type",Array)],f.prototype,"meetingDates",void 0),h([(0,a.Cb)({type:String}),b("design:type",Object)],f.prototype,"inputId",void 0),h([(0,a.Cb)({type:String}),b("design:type",String)],f.prototype,"dateValue",void 0),f=h([(0,a.Mo)("member-date-inputs-component"),b("design:paramtypes",[])],f);var g=n(9474),v=n(7189),y=n(9345),I=n(4676);class _{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dateId:this.dateId.toJson(),memberId:this.memberId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson()}}static fromJson(e){const t=new _;return t.id=e.id,t.meetingEventId=g.Pu.fromJson(e.meetingEventId),t.dateId=w.fromJson(e.dateId),t.memberId=I.rB.fromJson(e.memberId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?y.k.fromJson(e.memberInfo):v.f.fromJson(e.memberInfo),t}toString(){return JSON.stringify(this.toJson())}}class w{toJson(){return{id:this.id,meetingEventId:this.meetingEventId,date:this.date.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),creationDate:this.creationDate.toISOString()}}static fromJson(e){const t=new w;return t.id=e.id,t.meetingEventId=e.meetingEventId,t.date=new Date(e.date),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.creationDate=new Date(e.creationDate),t}toString(){return JSON.stringify(this.toJson())}}class D{toJson(){return{meetingEventId:this.meetingEventId,dateId:this.dateId,memberId:this.memberId}}static fromJson(e){const t=new D;return t.meetingEventId=e.meetingEventId,t.dateId=e.dateId,t.memberId=e.memberId,t}toString(){return`MemberMeetingEventDateFormInputModel(meetingEventId=${this.meetingEventId}, dateId=${this.dateId}, memberId=${this.memberId})`}}var C=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},E=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let A=class extends i.oi{constructor(){super(),this.currentObjectCount=0,this.multipleDateObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.meetingDatesCalled=!1,this.loading=!0,this.meetingDates=[],this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.meetingDatesCalled&&this.meetingDates.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.meetingDatesCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=i.dy`<member-date-inputs-component date-inputs-component--object="${this.currentObjectCount}" 
      .meetingDates="${this.meetingDates}" >
    </member-date-inputs-component>`,n=this.inputs;n.push(t);let r=this.addedInputIndex;r.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=r,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?i.dy`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:i.dy`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>i.dy`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Date Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?i.dy`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:i.Ld}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Date</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDateObjects=t.map((e=>Array.from(document.querySelectorAll('[date-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t;let n=new D;return n.meetingEventId=this.meetingEventId,n.dateId=Number(null!==(t=e.dateValue)&&void 0!==t?t:0),n.memberId=this.meetingMemberId,n}))[0]))}firstUpdated(){}createRenderRoot(){return this}};A.styles=[i.iv`
   :host { display: block; }
  `],C([(0,a.Cb)({type:Number}),E("design:type",Number)],A.prototype,"meetingEventId",void 0),C([(0,a.Cb)({type:Number}),E("design:type",Number)],A.prototype,"meetingMemberId",void 0),C([(0,a.Cb)({type:Number}),E("design:type",Number)],A.prototype,"currentObjectCount",void 0),C([(0,a.Cb)({type:Array}),E("design:type",Array)],A.prototype,"multipleDateObjects",void 0),C([(0,a.Cb)({type:Array}),E("design:type",Array)],A.prototype,"removedInputIndex",void 0),C([(0,a.Cb)({type:Array}),E("design:type",Array)],A.prototype,"addedInputIndex",void 0),C([(0,a.Cb)({type:Boolean}),E("design:type",Boolean)],A.prototype,"meetingDatesCalled",void 0),C([(0,a.Cb)({type:Boolean}),E("design:type",Boolean)],A.prototype,"loading",void 0),C([(0,a.Cb)({type:Array}),E("design:type",Array)],A.prototype,"meetingDates",void 0),A=C([(0,a.Mo)("member-date-multiple-inputs-component"),E("design:paramtypes",[])],A);var M,x=n(8698),S=n(6455),k=n.n(S),R=n(771),$=n(7270),j=n(596),O=n(8967),B=n(3600),N=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(e){a(e)}}function s(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}d((r=r.apply(e,t||[])).next())}))},T=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(e){a(e)}}function s(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}d((r=r.apply(e,t||[])).next())}))},U=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(e){a(e)}}function s(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}d((r=r.apply(e,t||[])).next())}))};let J=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dateUser=null,this.__scheduleDates=[],this.__meetingMember=null,this.__memberDates=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dateUser(e){this.__dateUser=e,this.requestUpdate()}get _dateUser(){return this.__dateUser}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDates(e){this.__memberDates=e,this.requestUpdate()}get _memberDates(){return this.__memberDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return L(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingMemberId(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDate(),yield this.getAttendanceScheduleMemberDate()}))}disconnectedCallback(){}render(){return i.dy`${this.schedule}`}get schedule(){return null===this._meetingMember?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?i.dy`${this.memberDate}`:i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDate(){return null===this._memberDates?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDates?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:i.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.dy`${this.table}`}get table(){return this._memberDates.length>0?i.dy`
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
      `:i.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDates(){return i.dy`
      ${this._memberDates.map(((e,t)=>i.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,m._)(e.dateId.date,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return i.dy`
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}submitForm(e){return L(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-date-multiple-inputs-component").forEach((e=>L(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDateObjects;yield function(e){return N(this,void 0,void 0,(function*(){const t=(0,B.Ie)(),n=R.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date/bulk",r=document.querySelector('[make-general-posts="add-schedule-member-date"]'),i=JSON.stringify(e);return k().fire({title:"Add Member Date(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>N(this,void 0,void 0,(function*(){return yield(0,$.d)(n,{method:"POST",body:i,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new j.H("post",e,!1,r),n=t.multipleResponse;let i=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),i.length>0){const e=(0,O.T)(i);return k().showValidationMessage(`${e}`)}return t})).catch((e=>{k().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!k().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&k().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))))}))}deleteMemberMeetingAttendanceDate(e){return L(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return T(this,void 0,void 0,(function*(){const t=(0,B.Ie)(),n=R.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date/"+e,r={};return k().fire({title:"Remove Member Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>T(this,void 0,void 0,(function*(){return yield(0,$.d)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new j.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,O.T)(e);k().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new j.H("delete",n,!0);return r.postForm,r}})).catch((e=>{k().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!k().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}k().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingMemberId(){let e=(0,u.Jx)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return L(this,void 0,void 0,(function*(){const e=yield(0,p.n)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDate(){return L(this,void 0,void 0,(function*(){const e=yield(0,x.R)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,date:new Date}):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results);const n=[];n.push(...this._scheduleDates,...t),this._scheduleDates=n}))}getAttendanceScheduleMemberDate(){return L(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,r=void 0,a=function*(){const n=(0,B.Ie)(),r=R.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date"+(null===e?"":"/"+e)+t,i=yield(0,$.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new j.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new j.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function o(e){try{d(a.next(e))}catch(e){t(e)}}function s(e){try{d(a.throw(e))}catch(e){t(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,s)}d((a=a.apply(n,r||[])).next())}));var n,r,i,a}(null,"?memberId="+this.meetingMemberId+"&length=1000");let t=[];null===e?t.push(new _):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>_.fromJson(e))));const n=[];n.push(...this._memberDates,...t),this._memberDates=n}))}createRenderRoot(){return this}};J.styles=[i.iv`
   :host { display: block; }
  `],U([(0,a.Cb)({type:Number}),P("design:type",Number)],J.prototype,"CLIENT_ID",void 0),U([(0,a.Cb)({type:Number}),P("design:type",Number)],J.prototype,"startSearchPage",void 0),U([(0,a.Cb)({type:Array}),P("design:type","function"==typeof(M="undefined"!=typeof Array&&Array)?M:Object)],J.prototype,"_data",void 0),U([(0,a.Cb)({type:Object}),P("design:type",Object)],J.prototype,"urlQueryParams",void 0),U([(0,a.Cb)({type:Number}),P("design:type",Number)],J.prototype,"meetingMemberId",void 0),U([(0,a.Cb)({type:Number}),P("design:type",Number)],J.prototype,"meetingEventId",void 0),J=U([(0,a.Mo)("attendance-setup-form-edit-member-dates-content"),P("design:paramtypes",[])],J);var H=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},q=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let V=class extends i.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,o.f)().then((()=>this._hasSetup=!0)),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{d(a.next(e))}catch(e){r(e)}}function s(e){try{d(a.throw(e))}catch(e){r(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,s)}d((a=a.apply(t,n||[])).next())}));var t,n,i,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,s.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,d.OR)(c.W.schedule_meeting_event),!(0,d.H)({pageId:c.W.schedule_meeting_event,viewType:"Edit"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-dates-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-dates-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};H([(0,a.Cb)({type:String}),q("design:type",String)],V.prototype,"email",void 0),H([(0,a.Cb)({type:Number}),q("design:type",Number)],V.prototype,"mId",void 0),H([(0,a.Cb)({type:Number}),q("design:type",Number)],V.prototype,"clientId",void 0),H([(0,a.Cb)({type:Number}),q("design:type",Number)],V.prototype,"meetingEventId",void 0),H([(0,a.Cb)({type:Boolean}),q("design:type",Boolean)],V.prototype,"_hasSetup",void 0),H([(0,a.Cb)({type:Boolean}),q("design:type",Boolean)],V.prototype,"_pageButtonAccess",void 0),V=H([(0,a.Mo)("attendance-setup-form-edit-member-dates"),q("design:paramtypes",[])],V)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,214,7719,3901,1952,3712],(()=>(1781,e(e.s=1781)))),e.O())])));
//# sourceMappingURL=edit-member-dates.js.map