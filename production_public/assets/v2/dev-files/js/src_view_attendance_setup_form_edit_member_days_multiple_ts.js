"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_setup_form_edit_member_days_multiple_ts"],{7149:(e,t,n)=>{n.r(t),n.d(t,{DayIdFullModel:()=>l,DayIdModel:()=>o,MemberMeetingEventDayFormInputModel:()=>p,MemberMeetingEventDayModel:()=>r});var i=n(69474),a=n(17189),d=n(19345),s=n(84676);class r{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId.toJson(),memberId:this.memberId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson()}}static fromJson(e){const t=new r;return t.id=e.id,t.meetingEventId=i.MeetingEventIDModel.fromJson(e.meetingEventId),t.dayId=l.fromJson(e.dayId),t.memberId=s.MeetingAttendanceMemberModel.fromJson(e.memberId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?d.OrganizationMemberModel.fromJson(e.memberInfo):a.IndividualMemberModel.fromJson(e.memberInfo),t}toString(){return JSON.stringify(this.toJson())}}class o{toJson(){return{id:this.id,date:this.date.toISOString()}}static fromJson(e){const t=new o;return t.id=e.id,t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class l{toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),dayId:this.dayId,startDate:this.startDate.toISOString(),endDate:this.endDate.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}static fromJson(e){const t=new l;return t.id=e.id,t.meetingEventId=i.MeetingEventIDModel.fromJson(e.meetingEventId),t.dayId=e.dayId,t.startDate=new Date(e.startDate),t.endDate=new Date(e.endDate),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class p{toJson(){return{meetingEventId:this.meetingEventId,dayId:this.dayId,memberId:this.memberId}}static fromJson(e){const t=new p;return t.meetingEventId=e.meetingEventId,t.dayId=e.dayId,t.memberId=e.memberId,t}toString(){return`MemberMeetingEventDayFormInputModel(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, memberId=${this.memberId})`}}},19956:(e,t,n)=>{n.r(t),n.d(t,{MemberDayInputsComponent:()=>r});var i=n(85862),a=n(59662),d=function(e,t,n,i){var a,d=arguments.length,s=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(d<3?a(s):d>3?a(t,n,s):a(t,n))||s);return d>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends i.LitElement{constructor(){super(),this.daysOfWeek=[],this.meetingDays=[],this.inputId=Math.random().toString(36).substring(2,22),this.smallView=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.meetingDays.map((e=>i.html`<mwc-list-item value="${e.id}">${this.getDayOfWeek(e.dayId).day}</mwc-list-item>`));return i.html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="${this.smallView?"col-md-12":"col-md-6 col-lg-4"}">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId--${this.inputId}" label="Select Day" outlined
              required @change="${this.handleDayChange}">
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${i.html`${e}`}
            </mwc-select>
          </div>
          <div class="${this.smallView?"col-md-12":"col-md-6 col-lg-8"}">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="${this.smallView?"col-md-12":"col-md-12 col-lg-6"}">
                  <h4 class="font-semibold my-2">Select Start Date</h4>
                  <mwc-textfield name="startDate" multiple type="date" class="w-full" id="startDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleStartDateChange}" disabled>
                  </mwc-textfield>
                </div>
                <div class="${this.smallView?"col-md-12":"col-md-12 col-lg-6"}">
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
    `}getDayOfWeek(e){let t={id:0,date:new Date,day:"-"};return this.daysOfWeek.forEach((n=>{n.id===e&&(t=n)})),t}getMeetingDay(e){let t={id:0,date:new Date};return this.meetingDays.forEach((n=>{n.id===e&&(t=n)})),t}handleDayChange(e){const t=e.target.value;this.dayValue=t,Array.from(this.querySelectorAll(`[id="startDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).startDate,this.startDateValue=e.value})),Array.from(this.querySelectorAll(`[id="endDate--${this.inputId}"]`)).forEach((e=>{e.value=this.getMeetingDay(Number.isNaN(this.dayValue)?0:Number(this.dayValue)).endDate,this.endDateValue=e.value}))}handleStartDateChange(e){this.startDateValue=e.target.value}handleEndDateChange(e){this.endDateValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};r.styles=[i.css`
   :host { display: block; }
  `],d([(0,a.property)({type:Array}),s("design:type",Array)],r.prototype,"daysOfWeek",void 0),d([(0,a.property)({type:Array}),s("design:type",Array)],r.prototype,"meetingDays",void 0),d([(0,a.property)({type:String}),s("design:type",Object)],r.prototype,"inputId",void 0),d([(0,a.property)({type:String}),s("design:type",String)],r.prototype,"dayValue",void 0),d([(0,a.property)({type:String}),s("design:type",String)],r.prototype,"startDateValue",void 0),d([(0,a.property)({type:String}),s("design:type",String)],r.prototype,"endDateValue",void 0),d([(0,a.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"smallView",void 0),r=d([(0,a.customElement)("member-day-inputs-component"),s("design:paramtypes",[])],r)},62643:(e,t,n)=>{n.r(t),n.d(t,{MemberDayMultipleInputsComponent:()=>o});var i=n(85862),a=n(59662),d=(n(19956),n(23283),n(51511),n(7149)),s=function(e,t,n,i){var a,d=arguments.length,s=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(d<3?a(s):d>3?a(t,n,s):a(t,n))||s);return d>3&&s&&Object.defineProperty(t,n,s),s},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends i.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.meetingDaysCalled=!1,this.loading=!0,this.meetingDays=[],this.daysOfWeek=[],this.smallView=!1,this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.meetingDaysCalled&&this.meetingDays.length>0&&(this.addInput(new Event("click")),this.loading=!1,this.meetingDaysCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=this.smallView?i.html`<member-day-inputs-component day-inputs-component--object="${this.currentObjectCount}" 
      .meetingDays="${this.meetingDays}" .daysOfWeek="${this.daysOfWeek}" smallView>
    </member-day-inputs-component>`:i.html`<member-day-inputs-component day-inputs-component--object="${this.currentObjectCount}" 
      .meetingDays="${this.meetingDays}" .daysOfWeek="${this.daysOfWeek}">
    </member-day-inputs-component>`,n=this.inputs;n.push(t);let a=this.addedInputIndex;a.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=a,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?i.html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:i.html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>i.html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Day Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?i.html`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:i.nothing}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Day</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[day-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[day-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t;let n=new d.MemberMeetingEventDayFormInputModel;return n.meetingEventId=this.meetingEventId,n.dayId=Number(null!==(t=e.dayValue)&&void 0!==t?t:0),n.memberId=this.meetingMemberId,n}))[0]))}firstUpdated(){}createRenderRoot(){return this}};o.styles=[i.css`
   :host { display: block; }
  `],s([(0,a.property)({type:Number}),r("design:type",Number)],o.prototype,"meetingEventId",void 0),s([(0,a.property)({type:Number}),r("design:type",Number)],o.prototype,"meetingMemberId",void 0),s([(0,a.property)({type:Number}),r("design:type",Number)],o.prototype,"currentObjectCount",void 0),s([(0,a.property)({type:Array}),r("design:type",Array)],o.prototype,"multipleDayObjects",void 0),s([(0,a.property)({type:Array}),r("design:type",Array)],o.prototype,"removedInputIndex",void 0),s([(0,a.property)({type:Array}),r("design:type",Array)],o.prototype,"addedInputIndex",void 0),s([(0,a.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"meetingDaysCalled",void 0),s([(0,a.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"loading",void 0),s([(0,a.property)({type:Array}),r("design:type",Array)],o.prototype,"meetingDays",void 0),s([(0,a.property)({type:Array}),r("design:type",Array)],o.prototype,"daysOfWeek",void 0),s([(0,a.property)({type:Boolean}),r("design:type",Boolean)],o.prototype,"smallView",void 0),o=s([(0,a.customElement)("member-day-multiple-inputs-component"),r("design:paramtypes",[])],o)}}]);
//# sourceMappingURL=src_view_attendance_setup_form_edit_member_days_multiple_ts.js.map