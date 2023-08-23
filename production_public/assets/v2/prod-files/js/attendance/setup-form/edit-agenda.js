/*! For license information please see edit-agenda.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8005],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>l});var i=n(771),o=n(7270),r=n(7052),s=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{d(i.next(e))}catch(e){r(e)}}function a(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))};const d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",d=n,l=JSON.stringify({email:e,id:t});yield(0,o.d)(a,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,r.h)(String(e.jsonData.token));(0,s.Ad)(d,t,10),(0,s.vh)(d+"_date",(new Date).toUTCString(),10)}}))})),l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const l=(0,r.h)(String(t)),c=n;window.supersecret={unknowable:{ops:{email:e,id:l,cookieName:c}}},""==(0,s.Hl)(c)?yield d(e,l,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const l=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",c=n,u=(0,s.Hl)(c),p=JSON.stringify({token:(0,r.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.Hl)(c+"_date"))))return u;yield(0,o.d)(l,{method:"POST",body:p},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,r.h)(String(i.jsonData.token));(0,s.Ad)(c,e,10),(0,s.vh)(c+"_date",(new Date).toUTCString(),10)}else yield d(e,t,n)}))))})))(e,l,n)}))},2218:(e,t,n)=>{n.d(t,{u:()=>a});var i=n(771),o=n(7270),r=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,d=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function i(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(i,o)}r((l=l.apply(n,a||[])).next())}));var n,a,d,l}},2461:(e,t,n)=>{var i=n(5862),o=n(8393),r=(n(5185),n(5248),function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"id",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=r([(0,o.Mo)("file-input")],a)},6048:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAgenda:()=>N}),n(3683),n(4657);var i,o=n(4108),r=n(5862),s=n(8393),a=(n(5248),n(2935),n(3313),n(934),n(6811),n(2461),n(540)),d=n(2218),l=n(4672),c=n(7234),u=n(6455),p=n.n(u),h=n(771),f=n(7270),g=n(596),m=n(8967),y=n(3600),v=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{d(i.next(e))}catch(e){r(e)}}function a(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))},b=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{d(i.next(e))}catch(e){r(e)}}function a(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))};let _=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.__agendaUser=null,this.__schedule=null,this.__scheduleAgenda=null,this._data=[],this.urlQueryParams=void 0,this.meetingAgendaId=0,this.meetingEventId=0}set _agendaUser(e){this.__agendaUser=e,this.requestUpdate()}get _agendaUser(){return this.__agendaUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAgenda(e){this.__scheduleAgenda=e,this.requestUpdate()}get _scheduleAgenda(){return this.__scheduleAgenda}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),this.getMeetingEventId(),this.getMeetingAgendaId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAgenda()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.dy`${this.scheduleAgenda}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAgenda(){return null===this._scheduleAgenda?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgenda?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}
      `}get form(){var e;const t=this.__scheduleAgenda;let n="";if(t.meetingDate){const e=new Date(t.meetingDate).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");n=[e[2],e[0],e[1]].join("-")}return r.dy`
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
    `}firstUpdated(){}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,y.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/agenda/"+e,i=document.querySelector('[make-general-posts="add-schedule-agenda"]'),o=new FormData(i);return p().fire({title:"Update Meeting Date Agenda?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,f.d)(n,{method:"PATCH",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new g.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,m.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&p().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.meetingAgendaId)}))}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAgendaId(){let e=(0,l.Jx)("meeting-agenda-id"),t=null!==e?Number(e):null;this.meetingAgendaId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return A(this,void 0,void 0,(function*(){const e=yield(0,d.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAgenda(){return A(this,void 0,void 0,(function*(){const e=yield(0,a.p)(this.meetingAgendaId,"?meetingEventId="+this.meetingEventId);if(null===e||!1===e.response.success)this._scheduleAgenda=void 0;else if(e.response.success&&"data"in e.response){const t=e.response.data,n=Array.isArray(t)&&t.length>0?t[0]:t;this._scheduleAgenda=c.e.toMeetingAgendaModel(JSON.stringify(n))}}))}createRenderRoot(){return this}};_.styles=[r.iv`
   :host { display: block; }
  `],b([(0,s.Cb)({type:Number}),w("design:type",Number)],_.prototype,"CLIENT_ID",void 0),b([(0,s.Cb)({type:Array}),w("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],_.prototype,"_data",void 0),b([(0,s.Cb)({type:Object}),w("design:type",Object)],_.prototype,"urlQueryParams",void 0),b([(0,s.Cb)({type:Number}),w("design:type",Number)],_.prototype,"meetingAgendaId",void 0),b([(0,s.Cb)({type:Number}),w("design:type",Number)],_.prototype,"meetingEventId",void 0),_=b([(0,s.Mo)("attendance-setup-form-agenda-edit"),w("design:paramtypes",[])],_),n(8693);var x=n(9665),S=n(8092),C=n(1302),E=n(7108),I=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let N=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,x.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{d(r.next(e))}catch(e){o(e)}}function a(e){try{d(r.throw(e))}catch(e){o(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}d((r=r.apply(t,n||[])).next())}));var t,n,i,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,S.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,C.OR)(E.W.schedule_meeting_event),!(0,C.H)({pageId:E.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-agenda-edit CLIENT_ID="${this.clientId}"></attendance-setup-form-agenda-edit>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};I([(0,s.Cb)({type:String}),k("design:type",String)],N.prototype,"email",void 0),I([(0,s.Cb)({type:Number}),k("design:type",Number)],N.prototype,"mId",void 0),I([(0,s.Cb)({type:Number}),k("design:type",Number)],N.prototype,"clientId",void 0),I([(0,s.Cb)({type:Boolean}),k("design:type",Boolean)],N.prototype,"_hasSetup",void 0),I([(0,s.Cb)({type:Boolean}),k("design:type",Boolean)],N.prototype,"_pageButtonAccess",void 0),N=I([(0,s.Mo)("attendance-setup-form-edit-agenda"),k("design:paramtypes",[])],N)},4232:(e,t,n)=>{n.d(t,{OR:()=>s,hl:()=>d,pt:()=>r});var i=n(3692);const{I:o}=i.Al,r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,a={},d=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>s});var i=n(3692),o=n(875),r=n(4232);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,s=e.name;if(e.type===o.pX.PROPERTY){if(t===n[s])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(s)===t+"")return i.Jb;return(0,r.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,4351,1109,6236,6069,214,3901,4735,3712],(()=>(6048,e(e.s=6048)))),e.O())])));
//# sourceMappingURL=edit-agenda.js.map