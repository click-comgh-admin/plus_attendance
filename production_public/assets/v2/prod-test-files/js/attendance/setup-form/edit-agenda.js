/*! For license information please see edit-agenda.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8005],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>d});var i=n(771),s=n(7270),o=n(7052),a=n(1942),l=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{r(i.next(e))}catch(e){o(e)}}function l(e){try{r(i.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};const r=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const l=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",r=n,d=JSON.stringify({email:e,id:t});yield(0,s.d)(l,{method:"POST",body:d},!0).then((e=>{if(e.jsonData.token){const t=(0,o.h)(String(e.jsonData.token));(0,a.Ad)(r,t,10),(0,a.vh)(r+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const d=(0,o.h)(String(t)),c=n;window.supersecret={unknowable:{ops:{email:e,id:d,cookieName:c}}},""==(0,a.Hl)(c)?yield r(e,d,n):yield((e,t,n)=>l(void 0,void 0,void 0,(function*(){const d=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",c=n,u=(0,a.Hl)(c),p=JSON.stringify({token:(0,o.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.Hl)(c+"_date"))))return u;yield(0,s.d)(d,{method:"POST",body:p},!0).then((i=>l(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,o.h)(String(i.jsonData.token));(0,a.Ad)(c,e,10),(0,a.vh)(c+"_date",(new Date).toUTCString(),10)}else yield r(e,t,n)}))))})))(e,d,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>s,O1:()=>i,Vc:()=>o,W3:()=>a});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},7234:(e,t,n)=>{n.d(t,{e:()=>i});class i{static toMeetingAgendaModel(e){return l(JSON.parse(e),c("MeetingAgendaModel"),o)}static meetingAgendaModelToJson(e){return JSON.stringify(l(e,c("MeetingAgendaModel"),a),null,2)}}function s(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,n,i=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:s(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const i=e.length;for(let s=0;s<i;s++){const i=e[s];try{return l(t,i,n)}catch(e){}}return s(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,n))):s("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,i){if(null===i||"object"!=typeof i||Array.isArray(i))return s("object",i);const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(i,t)?i[t]:void 0;o[s.key]=l(a,s.typ,n,s.key)})),Object.getOwnPropertyNames(i).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=l(i[s],t,n,s))})),o}(n(t),t.additional,e):s(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?s("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:s(e,t,i)}(t,e)}}function r(...e){return{unionMembers:e}}function d(e,t){return{props:e,additional:t}}function c(e){return{ref:e}}const u={MeetingAgendaModel:d([{json:"id",js:"id",typ:r(null,0)},{json:"meetingEventId",js:"meetingEventID",typ:r(null,c("MeetingEventID"))},{json:"agenda",js:"agenda",typ:r(null,"")},{json:"attachment",js:"attachment",typ:r(null,r(null,""))},{json:"meetingDate",js:"meetingDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"date",js:"date",typ:r(null,Date)}],!1),MeetingEventID:d([{json:"id",js:"id",typ:r(null,0)},{json:"type",js:"type",typ:r(null,0)},{json:"memberType",js:"memberType",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"clientId",js:"clientID",typ:r(null,c("ClientID"))},{json:"branchId",js:"branchID",typ:r(null,c("BranchID"))},{json:"memberCategoryId",js:"memberCategoryID",typ:r(null,c("MemberCategoryID"))},{json:"meetingSpan",js:"meetingSpan",typ:r(null,0)},{json:"startTime",js:"startTime",typ:r(null,"")},{json:"closeTime",js:"closeTime",typ:r(null,"")},{json:"latenessTime",js:"latenessTime",typ:r(null,"")},{json:"isRecuring",js:"isRecuring",typ:r(null,!0)},{json:"hasBreakTime",js:"hasBreakTime",typ:r(null,!0)},{json:"hasDuty",js:"hasDuty",typ:r(null,!0)},{json:"hasOvertime",js:"hasOvertime",typ:r(null,!0)},{json:"virtualMeetingLink",js:"virtualMeetingLink",typ:r(null,"")},{json:"virtualMeetingType",js:"virtualMeetingType",typ:r(null,0)},{json:"meetingLocation",js:"meetingLocation",typ:r(null,0)},{json:"expectedMonthlyAttendance",js:"expectedMonthlyAttendance",typ:r(null,0)},{json:"activeMonthlyAttendance",js:"activeMonthlyAttendance",typ:r(null,0)},{json:"agenda",js:"agenda",typ:r(null,"")},{json:"agendaFile",js:"agendaFile",typ:r(null,"")},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"date",js:"date",typ:r(null,Date)}],!1),BranchID:d([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"accountId",js:"accountID",typ:r(null,0)},{json:"createdBy",js:"createdBy",typ:r(null,0)},{json:"creationDate",js:"creationDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)}],!1),ClientID:d([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"accountType",js:"accountType",typ:r(null,0)},{json:"country",js:"country",typ:r(null,"")},{json:"stateProvince",js:"stateProvince",typ:r(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:r(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:r(null,"")},{json:"applicantGender",js:"applicantGender",typ:r(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:r(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:r(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:r(null,0)},{json:"region",js:"region",typ:r(null,0)},{json:"district",js:"district",typ:r(null,0)},{json:"constituency",js:"constituency",typ:r(null,0)},{json:"community",js:"community",typ:r(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:r(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:r(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:r(null,"")},{json:"logo",js:"logo",typ:r(null,"")},{json:"status",js:"status",typ:r(null,0)},{json:"archive",js:"archive",typ:r(null,0)},{json:"accountCategory",js:"accountCategory",typ:r(null,c("MemberCategoryID"))},{json:"website",js:"website",typ:r(null,"")},{json:"creationDate",js:"creationDate",typ:r(null,Date)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,Date)},{json:"subscriptionInfo",js:"subscriptionInfo",typ:r(null,c("SubscriptionInfo"))},{json:"countryInfo",js:"countryInfo",typ:r(null,(p=c("CountryInfo"),{arrayItems:p}))}],!1),MemberCategoryID:d([{json:"id",js:"id",typ:r(null,0)},{json:"clientId",js:"clientID",typ:r(null,0)},{json:"category",js:"category",typ:r(null,"")},{json:"createdBy",js:"createdBy",typ:r(null,0)},{json:"updatedBy",js:"updatedBy",typ:r(null,0)},{json:"updateDate",js:"updateDate",typ:r(null,r(Date,null))},{json:"date",js:"date",typ:r(null,r(Date,null))}],!1),CountryInfo:d([{json:"id",js:"id",typ:r(null,0)},{json:"name",js:"name",typ:r(null,"")},{json:"short",js:"short",typ:r(null,"")},{json:"code",js:"code",typ:r(null,"")}],!1),SubscriptionInfo:d([{json:"id",js:"id",typ:r(null,0)},{json:"client",js:"client",typ:r(null,"")},{json:"client_id",js:"clientID",typ:r(null,"")},{json:"subscription_id",js:"subscriptionID",typ:r(null,"")},{json:"subscribed_modules",js:"subscribedModules",typ:r(null,c("SubscribedModules"))},{json:"date_created",js:"dateCreated",typ:r(null,Date)}],!1),SubscribedModules:d([{json:"Module 1",js:"module1",typ:r(null,c("Module"))},{json:"Module 2",js:"module2",typ:r(null,c("Module"))},{json:"Module 3",js:"module3",typ:r(null,c("Module"))}],!1),Module:d([{json:"module name",js:"moduleName",typ:r(null,"")},{json:"expires_on",js:"expiresOn",typ:r(null,"")}],!1)};var p},540:(e,t,n)=>{n.d(t,{p:()=>l});var i=n(771),s=n(7270),o=n(596),a=n(3600);function l(e=null,t=""){return n=this,l=void 0,d=function*(){const n=(0,a.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda"+(null===e?"":"/"+e)+t,r=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{o(d.next(e))}catch(e){t(e)}}function s(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}o((d=d.apply(n,l||[])).next())}));var n,l,r,d}},2218:(e,t,n)=>{n.d(t,{u:()=>l});var i=n(771),s=n(7270),o=n(596),a=n(3600);function l(e=null,t=""){return n=this,l=void 0,d=function*(){const n=(0,a.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,r=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{o(d.next(e))}catch(e){t(e)}}function s(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}o((d=d.apply(n,l||[])).next())}));var n,l,r,d}},2461:(e,t,n)=>{var i=n(5862),s=n(8393),o=(n(5185),n(5248),function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:i.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:i.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:i.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:i.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"value",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"accept",void 0),o([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"id",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"hasLabel",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),o([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),o([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),o([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=o([(0,s.Mo)("file-input")],l)},7108:(e,t,n)=>{n.d(t,{W:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},6048:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAgenda:()=>S}),n(3683),n(4657);var i,s=n(4108),o=n(5862),a=n(8393),l=(n(5248),n(2935),n(3313),n(934),n(6811),n(2461),n(540)),r=n(2218),d=n(4672),c=n(7234),u=n(6455),p=n.n(u),y=n(771),h=n(7270),f=n(596),m=n(8967),g=n(3600),b=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{r(i.next(e))}catch(e){o(e)}}function l(e){try{r(i.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))},v=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{r(i.next(e))}catch(e){o(e)}}function l(e){try{r(i.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};let A=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.__agendaUser=null,this.__schedule=null,this.__scheduleAgenda=null,this._data=[],this.urlQueryParams=void 0,this.meetingAgendaId=0,this.meetingEventId=0}set _agendaUser(e){this.__agendaUser=e,this.requestUpdate()}get _agendaUser(){return this.__agendaUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),this.getMeetingAgendaId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.dy`${this.scheduleAgenda}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAgenda(){return null===this._scheduleAgenda?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgenda?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}
      `}get form(){var e;const t=this.__scheduleAgenda;let n="";if(t.meetingDate){const e=new Date(t.meetingDate).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");n=[e[2],e[0],e[1]].join("-")}return o.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Meeting/ Event Scheduled Agenda</h1>
                  <h3 class="h3">Update Meeting/ Event Scheduled Agenda!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-agenda">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="attachment" name="attachment" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Meeting Date</h4>
                    <mwc-textfield name="" type="date" class="w-full" id="" disabled
                      .value="${n}" label="Select Meeting Date" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${void 0===(null==t?void 0:t.id)?"":null==t?void 0:t.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${null!==(e=this.meetingEventId)&&void 0!==e?e:0}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update Agenda" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return b(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=y.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda/"+e,i=document.querySelector('[make-general-posts="add-schedule-agenda"]'),s=new FormData(i);return p().fire({title:"Update Meeting Date Agenda?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,h.d)(n,{method:"PATCH",body:s,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new f.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,m.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&p().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.meetingAgendaId)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,d.Jx)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return w(this,void 0,void 0,(function*(){const e=yield(0,r.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAgenda(){return w(this,void 0,void 0,(function*(){const e=yield(0,l.p)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,n=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=c.e.toMeetingAgendaModel(JSON.stringify(n))}}))}createRenderRoot(){return this}};A.styles=[o.iv`
   :host { display: block; }
  `],v([(0,a.Cb)({type:Number}),j("design:type",Number)],A.prototype,"CLIENT_ID",void 0),v([(0,a.Cb)({type:Array}),j("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],A.prototype,"_data",void 0),v([(0,a.Cb)({type:Object}),j("design:type",Object)],A.prototype,"urlQueryParams",void 0),v([(0,a.Cb)({type:Number}),j("design:type",Number)],A.prototype,"meetingAgendaId",void 0),v([(0,a.Cb)({type:Number}),j("design:type",Number)],A.prototype,"meetingEventId",void 0),A=v([(0,a.Mo)("attendance-setup-form-agenda-edit"),j("design:paramtypes",[])],A),n(8693);var I=n(9665),C=n(8092),_=n(1302),E=n(7108),k=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},D=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let S=class extends o.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,I.f)().then((()=>this._hasSetup=!0)),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function l(e){try{r(o.throw(e))}catch(e){s(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,l)}r((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,_.OR)(E.W.schedule_meeting_event),!(0,_.H)({pageId:E.W.schedule_meeting_event,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-agenda-edit CLIENT_ID="${this.clientId}"></attendance-setup-form-agenda-edit>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};k([(0,a.Cb)({type:String}),D("design:type",String)],S.prototype,"email",void 0),k([(0,a.Cb)({type:Number}),D("design:type",Number)],S.prototype,"mId",void 0),k([(0,a.Cb)({type:Number}),D("design:type",Number)],S.prototype,"clientId",void 0),k([(0,a.Cb)({type:Boolean}),D("design:type",Boolean)],S.prototype,"_hasSetup",void 0),k([(0,a.Cb)({type:Boolean}),D("design:type",Boolean)],S.prototype,"_pageButtonAccess",void 0),S=k([(0,a.Mo)("attendance-setup-form-edit-agenda"),D("design:paramtypes",[])],S)},8693:(e,t,n)=>{var i=n(5862),s=n(8393),o=(n(2715),n(771)),a=n(4672),l=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};d.styles=[i.iv`
   :host { display: block; }
  `],l([(0,s.Cb)({type:Number}),r("design:type",Number)],d.prototype,"meetingEventId",void 0),d=l([(0,s.Mo)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],d)},4232:(e,t,n)=>{n.d(t,{OR:()=>a,hl:()=>r,pt:()=>o});var i=n(3692);const{I:s}=i.Al,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=e=>void 0===e.strings,l={},r=(e,t=l)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(3692),s=n(875),o=n(4232);const a=(0,s.XM)(class extends s.Xe{constructor(e){if(super(e),e.type!==s.pX.PROPERTY&&e.type!==s.pX.ATTRIBUTE&&e.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,a=e.name;if(e.type===s.pX.PROPERTY){if(t===n[a])return i.Jb}else if(e.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(a))return i.Jb}else if(e.type===s.pX.ATTRIBUTE&&n.getAttribute(a)===t+"")return i.Jb;return(0,o.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,4351,1109,6236,6069,214,3901,3712],(()=>(6048,e(e.s=6048)))),e.O())])));
//# sourceMappingURL=edit-agenda.js.map