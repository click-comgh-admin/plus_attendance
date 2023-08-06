"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4742],{4173:(e,t,n)=>{n.d(t,{_:()=>a});const a=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},1148:(e,t,n)=>{n.d(t,{e:()=>d});var a=n(771),r=n(7270),i=n(596),s=n(3600);function d(e=null){return t=this,n=void 0,o=function*(){const t=(0,s.Ie)(),n=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),d=yield(0,r.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new i.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,a){function r(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,i)}s((o=o.apply(t,n||[])).next())}));var t,n,d,o}},7824:(e,t,n)=>{n.d(t,{E:()=>d});var a=n(771),r=n(7270),i=n(596),s=n(3600);function d(e=null,t=""){return n=this,d=void 0,c=function*(){const n=(0,s.Ie)(),d=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,o=yield(0,r.d)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,r)}i((c=c.apply(n,d||[])).next())}));var n,d,o,c}},6637:(e,t,n)=>{n.d(t,{n:()=>d});var a=n(771),r=n(7270),i=n(596),s=n(3600);function d(e=null,t=""){return n=this,d=void 0,c=function*(){const n=(0,s.Ie)(),d=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,o=yield(0,r.d)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new i.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,r)}i((c=c.apply(n,d||[])).next())}));var n,d,o,c}},4266:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDays:()=>F}),n(3683),n(4657);var a=n(4108),r=n(5862),i=n(8393),s=(n(8693),n(9665)),d=n(8092),o=n(1302),c=n(7108),l=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),u=n(4672),m=(n(5866),n(1148)),h=n(4173),p=n(9474),y=n(7189),f=n(9345),b=n(4676);class g{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId.toJson(),memberId:this.memberId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson()}}static fromJson(e){const t=new g;return t.id=e.id,t.meetingEventId=p.Pu.fromJson(e.meetingEventId),t.dayId=v.fromJson(e.dayId),t.memberId=b.rB.fromJson(e.memberId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?f.k.fromJson(e.memberInfo):y.f.fromJson(e.memberInfo),t}toString(){return JSON.stringify(this.toJson())}}class v{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId,startDate:this.startDate.toISOString(),endDate:this.endDate.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}static fromJson(e){const t=new v;return t.id=e.id,t.meetingEventId=p.Pu.fromJson(e.meetingEventId),t.dayId=e.dayId,t.startDate=new Date(e.startDate),t.endDate=new Date(e.endDate),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class _{toJson(){return{meetingEventId:this.meetingEventId,dayId:this.dayId,memberId:this.memberId}}static fromJson(e){const t=new _;return t.meetingEventId=e.meetingEventId,t.dayId=e.dayId,t.memberId=e.memberId,t}toString(){return`MemberMeetingEventDayFormInputModel(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, memberId=${this.memberId})`}}var I=n(6637),w=n(771),D=n(7270),C=n(596),A=n(3600),E=n(7824),k=n(6455),S=n.n(k),M=n(8967),O=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{o(a.next(e))}catch(e){i(e)}}function d(e){try{o(a.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}o((a=a.apply(e,t||[])).next())}))},x=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{o(a.next(e))}catch(e){i(e)}}function d(e){try{o(a.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}o((a=a.apply(e,t||[])).next())}))},$=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let N=class extends r.oi{constructor(){super(),this.daysOfWeek=[],this.meetingDays=[],this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.meetingDays.map((e=>r.dy`<mwc-list-item value="${e.id}">${this.getDayOfWeek(e.dayId).day}</mwc-list-item>`));return r.dy`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId--${this.inputId}" label="Select Day" outlined
              required @change="${this.handleDayChange}">
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${r.dy`${e}`}
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
    `}getDayOfWeek(e){let t={id:0,date:new Date,day:"-"};return this.daysOfWeek.forEach((n=>{n.id===e&&(t=n)})),t}getMeetingDay(e){let t={id:0,date:new Date};return this.meetingDays.forEach((n=>{n.id===e&&(t=n)})),t}handleDayChange(e){const t=e.target.value;this.dayValue=t,Array.from(this.querySelectorAll(`[id="startDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).startDate,this.startDateValue=e.value})),Array.from(this.querySelectorAll(`[id="endDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).endDate,this.endDateValue=e.value}))}handleStartDateChange(e){this.startDateValue=e.target.value}handleEndDateChange(e){this.endDateValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};N.styles=[r.iv`
   :host { display: block; }
  `],$([(0,i.Cb)({type:Array}),j("design:type",Array)],N.prototype,"daysOfWeek",void 0),$([(0,i.Cb)({type:Array}),j("design:type",Array)],N.prototype,"meetingDays",void 0),$([(0,i.Cb)({type:String}),j("design:type",Object)],N.prototype,"inputId",void 0),$([(0,i.Cb)({type:String}),j("design:type",String)],N.prototype,"dayValue",void 0),$([(0,i.Cb)({type:String}),j("design:type",String)],N.prototype,"startDateValue",void 0),$([(0,i.Cb)({type:String}),j("design:type",String)],N.prototype,"endDateValue",void 0),N=$([(0,i.Mo)("member-day-inputs-component"),j("design:paramtypes",[])],N);var R=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let T=class extends r.oi{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.meetingDaysCalled=!1,this.loading=!0,this.meetingDays=[],this.daysOfWeek=[],this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.meetingDaysCalled&&this.meetingDays.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.meetingDaysCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=r.dy`<member-day-inputs-component day-inputs-component--object="${this.currentObjectCount}" 
      .meetingDays="${this.meetingDays}" .daysOfWeek="${this.daysOfWeek}" >
    </member-day-inputs-component>`,n=this.inputs;n.push(t);let a=this.addedInputIndex;a.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=a,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?r.dy`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:r.dy`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>r.dy`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Day Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?r.dy`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:r.Ld}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Day</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[day-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t;let n=new _;return n.meetingEventId=this.meetingEventId,n.dayId=Number(null!==(t=e.dayValue)&&void 0!==t?t:0),n.memberId=this.meetingMemberId,n}))[0]))}firstUpdated(){}createRenderRoot(){return this}};T.styles=[r.iv`
   :host { display: block; }
  `],R([(0,i.Cb)({type:Number}),B("design:type",Number)],T.prototype,"meetingEventId",void 0),R([(0,i.Cb)({type:Number}),B("design:type",Number)],T.prototype,"meetingMemberId",void 0),R([(0,i.Cb)({type:Number}),B("design:type",Number)],T.prototype,"currentObjectCount",void 0),R([(0,i.Cb)({type:Array}),B("design:type",Array)],T.prototype,"multipleDayObjects",void 0),R([(0,i.Cb)({type:Array}),B("design:type",Array)],T.prototype,"removedInputIndex",void 0),R([(0,i.Cb)({type:Array}),B("design:type",Array)],T.prototype,"addedInputIndex",void 0),R([(0,i.Cb)({type:Boolean}),B("design:type",Boolean)],T.prototype,"meetingDaysCalled",void 0),R([(0,i.Cb)({type:Boolean}),B("design:type",Boolean)],T.prototype,"loading",void 0),R([(0,i.Cb)({type:Array}),B("design:type",Array)],T.prototype,"meetingDays",void 0),R([(0,i.Cb)({type:Array}),B("design:type",Array)],T.prototype,"daysOfWeek",void 0),T=R([(0,i.Mo)("member-day-multiple-inputs-component"),B("design:paramtypes",[])],T);var U,P,W=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},J=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{o(a.next(e))}catch(e){i(e)}}function d(e){try{o(a.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}o((a=a.apply(e,t||[])).next())}))};let H=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__scheduleDays=[],this.__meetingMember=null,this.__memberDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDays(e){this.__memberDays=e,this.requestUpdate()}get _memberDays(){return this.__memberDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return J(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingMemberId(),yield this.getDaysOfWeek(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDay(),yield this.getAttendanceScheduleMemberDay()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._meetingMember?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?r.dy`${this.memberDay}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDay(){return null===this._memberDays?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDays?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._memberDays.length>0?r.dy`
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
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDays(){return r.dy`
      ${this._memberDays.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${""}
              ${this.getMemberDayOfWeek(e.dayId.id)}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h._)(e.dayId.startDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h._)(e.dayId.endDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDay}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.dy`
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}getMemberDayOfWeek(e){let t="-";return this._scheduleDays.forEach((n=>{e===n.id&&this._daysOfWeek.forEach((e=>{n.dayId===e.id&&(t=e.day)}))})),t}submitForm(e){return J(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-day-multiple-inputs-component").forEach((e=>J(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield function(e){return O(this,void 0,void 0,(function*(){const t=(0,A.Ie)(),n=w.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/bulk",a=document.querySelector('[make-general-posts="add-schedule-member-day"]'),r=JSON.stringify(e);return S().fire({title:"Add Member Day(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>O(this,void 0,void 0,(function*(){return yield(0,D.d)(n,{method:"POST",body:r,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new C.H("post",e,!1,a),n=t.multipleResponse;let r=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{r.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{r.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),r.length>0){const e=(0,M.T)(r);return S().showValidationMessage(`${e}`)}return t})).catch((e=>{S().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!S().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const a=e.value;if(a instanceof Object){const e=a.response;t=String(e.message),n=a.response.success}n&&S().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))))}))}deleteMemberMeetingAttendanceDay(e){return J(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return x(this,void 0,void 0,(function*(){const t=(0,A.Ie)(),n=w.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/"+e,a={};return S().fire({title:"Remove Member Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>x(this,void 0,void 0,(function*(){return yield(0,D.d)(n,{method:"DELETE",body:JSON.stringify(a),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new C.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,M.T)(e);S().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const a=new C.H("delete",n,!0);return a.postForm,a}})).catch((e=>{S().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!S().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const a=e.value;if(a instanceof Object){const e=a.response;t=String(e.message),n=a.response.success}S().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingMemberId(){let e=(0,u.Jx)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return J(this,void 0,void 0,(function*(){const e=yield(0,I.n)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDay(){return J(this,void 0,void 0,(function*(){const e=yield(0,E.E)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getAttendanceScheduleMemberDay(){return J(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,a=void 0,i=function*(){const n=(0,A.Ie)(),a=w.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day"+(null===e?"":"/"+e)+t,r=yield(0,D.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new C.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new C.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{o(i.next(e))}catch(e){t(e)}}function d(e){try{o(i.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,d)}o((i=i.apply(n,a||[])).next())}));var n,a,r,i}(null,"?memberId="+this.meetingMemberId+"&length=1000");let t=[];null===e?t.push(new g):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>g.fromJson(e))));const n=[];n.push(...this._memberDays,...t),this._memberDays=n}))}getDaysOfWeek(){return J(this,void 0,void 0,(function*(){const e=yield(0,m.e)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return J(this,void 0,void 0,(function*(){const t=yield(0,m.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};H.styles=[r.iv`
   :host { display: block; }
  `],W([(0,i.Cb)({type:Number}),L("design:type",Number)],H.prototype,"CLIENT_ID",void 0),W([(0,i.Cb)({type:Number}),L("design:type",Number)],H.prototype,"startSearchPage",void 0),W([(0,i.Cb)({type:Array}),L("design:type",Array)],H.prototype,"_daysOfWeek",void 0),W([(0,i.Cb)({type:Array}),L("design:type","function"==typeof(U="undefined"!=typeof Array&&Array)?U:Object)],H.prototype,"_data",void 0),W([(0,i.Cb)({type:Object}),L("design:type",Object)],H.prototype,"urlQueryParams",void 0),W([(0,i.Cb)({type:Number}),L("design:type",Number)],H.prototype,"meetingMemberId",void 0),W([(0,i.Cb)({type:Number}),L("design:type",Number)],H.prototype,"meetingEventId",void 0),W([(0,i.IO)('[show-dayField="all"]'),L("design:type","function"==typeof(P="undefined"!=typeof Element&&Element)?P:Object)],H.prototype,"showDayFieldAllSelector",void 0),H=W([(0,i.Mo)("attendance-setup-form-edit-member-days-content"),L("design:paramtypes",[])],H);var V=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},q=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let F=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,s.f)().then((()=>this._hasSetup=!0)),yield(0,a.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,a){function s(e){try{o(i.next(e))}catch(e){a(e)}}function d(e){try{o(i.throw(e))}catch(e){a(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,d)}o((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,o.OR)(c.W.schedule_meeting_event),!(0,o.H)({pageId:c.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-days-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-days-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};V([(0,i.Cb)({type:String}),q("design:type",String)],F.prototype,"email",void 0),V([(0,i.Cb)({type:Number}),q("design:type",Number)],F.prototype,"mId",void 0),V([(0,i.Cb)({type:Number}),q("design:type",Number)],F.prototype,"clientId",void 0),V([(0,i.Cb)({type:Number}),q("design:type",Number)],F.prototype,"meetingEventId",void 0),V([(0,i.Cb)({type:Boolean}),q("design:type",Boolean)],F.prototype,"_hasSetup",void 0),V([(0,i.Cb)({type:Boolean}),q("design:type",Boolean)],F.prototype,"_pageButtonAccess",void 0),F=V([(0,i.Mo)("attendance-setup-form-edit-member-days"),q("design:paramtypes",[])],F)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,214,7719,3901,1952,3712],(()=>(4266,e(e.s=4266)))),e.O())])));
//# sourceMappingURL=edit-member-days.js.map