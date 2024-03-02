"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/credit_earned/members"],{986:(e,t,i)=>{i.r(t),i.d(t,{AttendanceCreditEarnedMembers:()=>y}),i(69579),i(43683),i(15474);var n,s,r=i(23283),o=(i(66163),i(74657),i(14108)),a=i(85862),c=i(59662),l=(i(824),i(45),i(59),i(27712)),d=i(91354),m=i(41302),u=i(17108),p=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let y=class extends a.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonCatess=!1,this.formId=1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,i=void 0,s=function*(){e.connectedCallback.call(this),(0,l.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin"),document.onreadystatechange=e=>{"complete"==document.readyState&&this.handleQueryParam()}},new((n=void 0)||(n=Promise))((function(e,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(o,a)}c((s=s.apply(t,i||[])).next())}));var t,i,n,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return a.html`<account-expired-component></account-expired-component>`;if(this._pageButtonCatess=(0,m.PageButtonUserAccess)(u.PAGE__IDS.schedule_meeting_event),!(0,m.AppSettingsExtraUserAccess)({pageId:u.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return a.html`<no-page-entry-component></no-page-entry-component>`}return a.html`
      <div class="shadow bg-white p-2 my-2">
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${"assigned"==this.getCurrentTabFromQueryParam?0:1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="viewTimesBtn"
                label="Times" @click="${this.displayViewTimes}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="edit" id="createTimesBtn"
                label="Times" @click="${this.displayAddTimes}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${"assigned"==this.getCurrentTabFromQueryParam?0:1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="viewTimesBtn"
                label="View Times" @click="${this.displayViewTimes}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="edit" id="createTimesBtn"
                label="Create Times" @click="${this.displayAddTimes}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${this.getDisplay}
          </div>
        </div>
      </div>
    `}get getCurrentTabFromQueryParam(){return new URLSearchParams(window.location.search).get("view")}handleQueryParam(){const e=this.getCurrentTabFromQueryParam;"view"===e?this.displayViewTimes(new Event("click")):"create"===e?this.displayAddTimes(new Event("click")):(this.displayViewTimes(new Event("click")),this.updateQueryParam("view"))}updateQueryParam(e){const t=new URLSearchParams(window.location.search);t.set("view",e);const i=`${window.location.pathname}?${t.toString()}`;window.history.replaceState(null,"",i)}displayViewTimes(e){e.preventDefault(),this.formId=1,this.viewTimesBtn.click(),this.createTimesBtn.removeAttribute("raised"),this.createTimesBtn.removeAttribute("active"),this.updateQueryParam("view")}displayAddTimes(e){e.preventDefault(),this.formId=2,this.createTimesBtn.click(),this.viewTimesBtn.removeAttribute("raised"),this.viewTimesBtn.removeAttribute("active"),console.log({"this.createTimesBtn":this.createTimesBtn}),this.updateQueryParam("create")}get getDisplay(){return 1===this.formId?a.html`
        <view-times class="mt-2" form-id="1"></view-times>
      `:a.html`
        <create-times class="mt-2" form-id="2" ></create-times>
      `}firstUpdated(){}createRenderRoot(){return this}};p([(0,c.property)({type:String}),h("design:type",String)],y.prototype,"email",void 0),p([(0,c.property)({type:Number}),h("design:type",Number)],y.prototype,"mId",void 0),p([(0,c.property)({type:Number}),h("design:type",Number)],y.prototype,"clientId",void 0),p([(0,c.property)({type:Boolean}),h("design:type",Boolean)],y.prototype,"_hasSetup",void 0),p([(0,c.property)({type:Boolean}),h("design:type",Boolean)],y.prototype,"_pageButtonCatess",void 0),p([(0,c.query)("#viewTimesBtn"),h("design:type","function"==typeof(n=void 0!==r.Button&&r.Button)?n:Object)],y.prototype,"viewTimesBtn",void 0),p([(0,c.query)("#createTimesBtn"),h("design:type","function"==typeof(s=void 0!==r.Button&&r.Button)?s:Object)],y.prototype,"createTimesBtn",void 0),p([(0,c.property)({type:Number}),h("design:type",Number)],y.prototype,"formId",void 0),y=p([(0,c.customElement)("attendance-credit-earned-members"),h("design:paramtypes",[])],y)},59:(e,t,i)=>{i.r(t),i.d(t,{CreateTimes:()=>m}),i(45501);var n,s=i(85862),r=i(59662),o=(i(23283),i(16413),i(51511),i(16883),i(30367),i(44672)),a=(i(75866),i(582),i(54633)),c=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))};let m=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingEventId()}))}disconnectedCallback(){}render(){return this.form}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Time(s)</h1>
                  <h3 class="h3">Create New Meeting/ Event Time(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-day">
                <div class="p-0 m-0" show-dayField="all">
                  <time-multiple-inputs-component .meetingEventId="${this.meetingEventId}"></time-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Extra Time(s)" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,o.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("time-multiple-inputs-component").forEach((e=>d(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleTimeObjects;yield(0,a.POST_AttendanceAddScheduleTimesBulk)(t[0])}))))}))}createRenderRoot(){return this}};m.styles=[s.css`
   :host { display: block; }
  `],c([(0,r.property)({type:Number}),l("design:type",Number)],m.prototype,"CLIENT_ID",void 0),c([(0,r.property)({type:Array}),l("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],m.prototype,"_data",void 0),c([(0,r.property)({type:Object}),l("design:type",Object)],m.prototype,"urlQueryParams",void 0),c([(0,r.property)({type:Number}),l("design:type",Number)],m.prototype,"meetingEventId",void 0),m=c([(0,r.customElement)("create-times"),l("design:paramtypes",[])],m)},45:(e,t,i)=>{i.r(t),i.d(t,{EditTimes:()=>m}),i(45501);var n,s=i(85862),r=i(59662),o=(i(23283),i(16413),i(51511),i(16883),i(30367),i(76948),i(44672)),a=(i(75866),i(28385)),c=(i(34),function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))};let m=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.timeData=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this.timeID=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,o.urlQueryParams)(),this.getMeetingEventId(),this.timeID=this.timeData.length>0&&void 0!==this.timeData[0]?this.timeData[0].id:0,console.log({"this.timeData--this.timeData":this.timeData})}))}disconnectedCallback(){}render(){return s.html`
      <mwc-dialog open-this-dialog="multiple-meeting-events--times---${this.timeID}" heading="Set Multiple Days">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          ${this.form}
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Update Meeting/ Event Time</h1>
                  <h3 class="h3">Edit Meeting/ Event Time!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="edit-schedule-time">
                <time-inputs-component id="${this.timeID}" .meetingTime="${this.timeData}"></time-inputs-component>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
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
    `}firstUpdated(){}showDialog(){const e=document.querySelector(`[open-this-dialog="multiple-meeting-events--times---${this.timeID}"]`);e.setAttribute("open","true"),e.open=!0}closeDialog(){const e=document.querySelector(`[open-this-dialog="multiple-meeting-events--times---${this.timeID}"]`);e.setAttribute("open","false"),e.open=!1}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),this.closeDialog();const t=document.querySelector(`time-inputs-component[id="${this.timeID}"]`),i=t.startTimeValue,n=t.endTimeValue;console.log({timeInputsComponent:t,startTime:i,closeTime:n}),yield(0,a.PATCH_AttendanceAddScheduleTime)(this.timeID,i,n),this.showDialog()}))}getMeetingEventId(){let e=(0,o.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};m.styles=[s.css`
   :host { display: block; }
  `],c([(0,r.property)({type:Number}),l("design:type",Number)],m.prototype,"CLIENT_ID",void 0),c([(0,r.property)({type:Array}),l("design:type",Array)],m.prototype,"timeData",void 0),c([(0,r.property)({type:Array}),l("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],m.prototype,"_data",void 0),c([(0,r.property)({type:Object}),l("design:type",Object)],m.prototype,"urlQueryParams",void 0),c([(0,r.property)({type:Number}),l("design:type",Number)],m.prototype,"meetingEventId",void 0),c([(0,r.property)({type:Number}),l("design:type",Number)],m.prototype,"timeID",void 0),m=c([(0,r.customElement)("edit-times"),l("design:paramtypes",[])],m)},101:(e,t,i)=>{i.r(t),i.d(t,{TimeEditBtnComponent:()=>l});var n=i(85862),s=i(59662),r=(i(76948),i(23283),i(33590),i(45),i(67052)),o=i(83263),a=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(),this.timeData="{}",this.clientId=0,this.meetingEventId=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=o.Convert.toMeetingEventTimeModel(String((0,r.base64Decode)(this.timeData)));return n.html`
      <div class="whitespace-nowrap px-1">
        <mwc-button class="warning w-full mx-1" icon="edit" @click="${this.showDialog}"
            raised open-dialog-btn="multiple-meeting-events--times---${e.id}">
        </mwc-button>
        <edit-times multiple-meeting-events="times---${e.id}" clientId="${this.clientId}"
          .timeData="${[e]}" meetingEventId="${this.meetingEventId}">
        </edit-times>
      </div>
    `}firstUpdated(){}showDialog(e){e.preventDefault();const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}createRenderRoot(){return this}};l.styles=[n.css`
   :host { display: block; }
  `],a([(0,s.property)({type:String}),c("design:type",String)],l.prototype,"timeData",void 0),a([(0,s.property)({type:Number}),c("design:type",Number)],l.prototype,"clientId",void 0),a([(0,s.property)({type:Number}),c("design:type",Number)],l.prototype,"meetingEventId",void 0),l=a([(0,s.customElement)("time-edit-btn-component"),c("design:paramtypes",[])],l)},34:(e,t,i)=>{i.r(t),i.d(t,{TimeInputsComponent:()=>c});var n,s=i(85862),r=i(59662),o=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.LitElement{constructor(){super(),this.inputId=Math.random().toString(36).substring(2,22),this.meetingTime=[],this.defaultTimes=null}connectedCallback(){super.connectedCallback(),null==this.meetingTime&&(this.meetingTime=[]),this.defaultTimes=this.meetingTime.length<0||null==this.meetingTime[0]?null:this.meetingTime[0],null!==this.defaultTimes&&(this.startTimeValue=this.defaultTimes.startTime,this.endTimeValue=this.defaultTimes.endTime)}disconnectedCallback(){}render(){return s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" @change="${this.handleStartTimeChange}" value="${String(null==this.defaultTimes?"":this.defaultTimes.startTime)}" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Close Time</h4> 
            <mwc-textfield name="closeTime" type="time" class="w-full" id="endTime" @change="${this.handleEndTimeChange}" value="${String(null==this.defaultTimes?"":this.defaultTimes.endTime)}" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}handleStartTimeChange(e){this.startTimeValue=e.target.value}handleEndTimeChange(e){this.endTimeValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};c.styles=[s.css`
   :host { display: block; }
  `],o([(0,r.property)({type:String}),a("design:type",Object)],c.prototype,"inputId",void 0),o([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"startTimeValue",void 0),o([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"endTimeValue",void 0),o([(0,r.property)({type:Array}),a("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],c.prototype,"meetingTime",void 0),c=o([(0,r.customElement)("time-inputs-component"),a("design:paramtypes",[])],c)},582:(e,t,i)=>{i.r(t),i.d(t,{TimeMultipleInputsComponent:()=>a});var n=i(85862),s=i(59662),r=(i(34),i(23283),i(63313),i(51511),function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends n.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleTimeObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.loading=!0,this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{this.loading=!1}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=n.html`<time-inputs-component time-inputs-component--object="${this.currentObjectCount}">
    </time-inputs-component>`,i=this.inputs;i.push(t);let s=this.addedInputIndex;s.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=i,this.addedInputIndex=s,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?n.html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:n.html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>n.html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Day Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?n.html`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:n.nothing}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Meeting/ Event Day</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[time-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleTimeObjects[0]={meetingEventId:String(this.meetingEventId),times:t.map((e=>Array.from(document.querySelectorAll('[time-inputs-component--object="'+(e+1)+'"]')).map((e=>({startTime:e.startTimeValue,endTime:e.endTimeValue})))[0]))}}firstUpdated(){}createRenderRoot(){return this}};a.styles=[n.css`
   :host { display: block; }
  `],r([(0,s.property)({type:Number}),o("design:type",Number)],a.prototype,"meetingEventId",void 0),r([(0,s.property)({type:Number}),o("design:type",Number)],a.prototype,"currentObjectCount",void 0),r([(0,s.property)({type:Array}),o("design:type",Array)],a.prototype,"multipleTimeObjects",void 0),r([(0,s.property)({type:Array}),o("design:type",Array)],a.prototype,"removedInputIndex",void 0),r([(0,s.property)({type:Array}),o("design:type",Array)],a.prototype,"addedInputIndex",void 0),r([(0,s.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"loading",void 0),a=r([(0,s.customElement)("time-multiple-inputs-component"),o("design:paramtypes",[])],a)},824:(e,t,i)=>{i.r(t),i.d(t,{ViewTimes:()=>v}),i(45501);var n,s,r=i(85862),o=i(59662),a=(i(23283),i(16413),i(51511),i(16883),i(30367),i(44672)),c=(i(75866),i(48485)),l=i(33600),d=i(83263),m=i(98343),u=i(92831),p=(i(101),i(67052)),h=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))};let v=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.urlQueryParams)(),this.getMeetingEventId()}))}disconnectedCallback(){}render(){return r.html`${this.schedule}`}get schedule(){return r.html`${this.table}`}firstUpdated(){}get __tableHeaders(){return[{title:"Time"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Time"},{title:"Action"}]}get table(){const e=this.__dataTable();let t={};const i=(0,l.getUserLoginInfoCookie)();return t.Authorization="Token "+i.token,r.html`
      <datatables-new .datatable="${e}" .ajaxHeader="${t}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}__dataTable(){const e=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/time?datatable_plugin&meetingEventId="+this.meetingEventId,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(t,i,n)=>e.renderRow1Info(t,i,n),orderable:!0},{data:"meetingEventId",render:(t,i,n)=>e.renderRow2Info(t,i,n),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(t){return f(this,void 0,void 0,(function*(){t.aoData,e.removeTimeBtns()}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}renderRow1Info(e,t,i){return console.log({"row-row":i}),`\n      <div>\n        <span class="text-1xl font-bold">${(0,u.getTime)(i.startTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}</span> \n        <small class="-bold">TO</small>\n        <span class="text-1xl font-bold">${(0,u.getTime)(i.endTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}</span>\n      </div>\n    `}renderRow2Info(e,t,i){const n=d.Convert.toMeetingEventTimeModel(JSON.stringify(i));return console.log({"time-time":n}),`\n      <div class="flex align-middle items-center">\n        <time-edit-btn-component timeData=${(0,p.base64Encode)(JSON.stringify(n))}></time-edit-btn-component>\n        <div><mwc-button class="ml-1 danger" raised delete-this-item="${n.id}" >\n        <mwc-icon class="mr-1">delete_forever</mwc-icon>\n      </mwc-button></div>\n      </div>\n    `}removeTimeBtns(){const e="delete-this-item";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(i=>{i.preventDefault(),this.removeTimeAction(t,e,i)}))}))}removeTimeAction(e,t,i){return f(this,void 0,void 0,(function*(){i.preventDefault();const n=e.getAttribute(t);Number.isNaN(n)||0===Number(n)||(yield(0,m.DELETE_AttendanceDeleteScheduleTime)(Number(n)))}))}getMeetingEventId(){let e=(0,a.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};v.styles=[r.css`
   :host { display: block; }
  `],h([(0,o.property)({type:Number}),y("design:type",Number)],v.prototype,"CLIENT_ID",void 0),h([(0,o.property)({type:Array}),y("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],v.prototype,"_data",void 0),h([(0,o.property)({type:Object}),y("design:type",Object)],v.prototype,"urlQueryParams",void 0),h([(0,o.property)({type:Number}),y("design:type",Number)],v.prototype,"meetingEventId",void 0),h([(0,o.query)('[show-adminField="all"]'),y("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],v.prototype,"showAdminFieldAllSelector",void 0),v=h([(0,o.customElement)("view-times"),y("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit","vendors.lit-element","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-70fe00","src_addons_functions_date_time_time_ts-src_addons_network_attendance_setup_time_assign_multip-f2e074","shared"],(()=>(986,e(e.s=986)))),e.O())])));
//# sourceMappingURL=members.js.map