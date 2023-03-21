/*! For license information please see edit-date.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6579],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),a=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),f=Symbol(),m=Symbol(),p=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,l)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[f](e);if(!n.length)return void this[d](i,r,t);let a=n.length-1,l=i.length-1;for(;a>0&&l>0&&n[a]===i[l];)a--,l--;n[a]!==i[l]&&this[c](n[a],i[l]),a>0&&this[u](n.slice(0,a)),l>0&&this[d](i.slice(0,l),r,null)}[c](e,t){const n=e[r];this[m](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[a]=e[a],t[r]=n,e[a]=void 0,e[r]=void 0}[u](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const r=o[e];r===i||!this[m](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const l=new MutationObserver(this[p].bind(this));i[a]=l;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[p](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],a=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[m](t)&&(n&&t.inert?n.add(t):(t.inert=!0,a.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[f](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new b})()},8967:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{"use strict";n.d(t,{B:()=>c});var i=n(771),o=n(7270),s=n(7052),r=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,o.d)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,s.h)(String(e.jsonData.token));(0,r.Ad)(l,t,10),(0,r.vh)(l+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=(0,s.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,r.Hl)(d)?yield l(e,c,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.Hl)(d),h=JSON.stringify({token:(0,s.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.Hl)(d+"_date"))))return u;yield(0,o.d)(c,{method:"POST",body:h},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,s.h)(String(i.jsonData.token));(0,r.Ad)(d,e,10),(0,r.vh)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})))(e,c,n)}))},4672:(e,t,n)=>{"use strict";n.d(t,{Jx:()=>o,O1:()=>i,Vc:()=>s,W3:()=>r});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},8698:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},1854:(e,t,n)=>{"use strict";var i=n(9392),o=n(1936),s=(n(5248),n(934),n(9261),n(3504),n(4277),n(3313),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let l=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?i.Ld:i.dy`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"index",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"no_delete",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"single",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"_single",void 0),l=s([(0,o.Mo)("multiple-widgets"),r("design:paramtypes",[])],l)},3690:(e,t,n)=>{"use strict";var i=n(9392),o=n(1936),s=(n(5185),n(5142),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[i.iv`
      :host {
        display: block;
      }
    `],s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"selected",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"isSelected",void 0),a=s([(0,o.Mo)("switch-input")],a)},7108:(e,t,n)=>{"use strict";n.d(t,{W:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},2458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditDate:()=>$}),n(3683),n(4657);var i,o,s=n(4108),r=n(9392),a=n(1936),l=(n(5248),n(9261),n(2935),n(3313),n(6811),n(3690),n(1854),n(2262)),c=n(8698),d=n(2218),u=n(4672),h=n(6455),f=n.n(h),m=n(771),p=n(7270),b=n(596),v=n(8967),g=n(3600),y=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},w=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},_=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},E=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let S=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.__schedule=null,this.__scheduleDates=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
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
      `:!0===this._schedule.success?r.dy`${this.scheduleDate}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleDate(){return null===this._scheduleDates?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleDates?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleDates.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Date">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Date
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
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceDates(){return r.dy`
      ${this._scheduleDates.results.map((e=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.dy`
      <div class="form-container">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-date">
                <div class="container">
                  <div class="row justify-content-center" show-dateField="all">
                    ${this.dateFieldDefault(1)}
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDateField}">
                      </mwc-icon-button>
                      <mwc-button label="Set Date" raised class="button" @click="${this.submitForm}">
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
    `}get dateField(){return r.dy`
      <h4 class="font-semibold my-2">Select Date</h4> 
      <mwc-textfield name="date[]" multiple type="date" class="w-full" id="date"
        label="Select Date" outlined required>
      </mwc-textfield>
    `}dateFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-6 col-lg-4 mb-3" .widget=${this.dateField}
        dateField-id="${e}"></multiple-widgets>
    `}addDateField(){const e=this.showDateFieldAllSelector.children.length,t=(0===e?-1:Number(this.showDateFieldAllSelector.children[e-1].index))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-6 col-lg-4 mb-3"),n.setAttribute("dateField-id",String(t)),this.showDateFieldAllSelector.append(n);const i=this.showDateFieldAllSelector.querySelectorAll('multiple-widgets[dateField-id="'+t+'"]'),o=this.dateField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),this._scheduleDates.count>0?yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/multiple/"+e,i=document.querySelector('[make-general-posts="add-schedule-date"]'),o=new FormData(i);return f().fire({title:"Update Setup Date(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new b.H("post",e,!1,i),n=t.multipleResponse;let o=[];if(null!==n&&n.forEach((e=>{"nameError"in e&&"unknownError"in e&&e.unknownError.length>0&&e.unknownError.forEach((e=>{e.errors.forEach((e=>{o.push({error:e})}))}))})),o.length>0){const e=(0,v.T)(o);return f().showValidationMessage(`${e}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.meetingEventId):yield function(){return y(this,void 0,void 0,(function*(){const e=(0,g.Ie)(),t=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/multiple",n=document.querySelector('[make-general-posts="add-schedule-date"]'),i=new FormData(n);return f().fire({title:"Setup Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>y(this,void 0,void 0,(function*(){return yield(0,p.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new b.H("post",e,!1,n),i=t.multipleResponse;let o=[];if(null!==i&&i.forEach((e=>{"nameError"in e&&"unknownError"in e&&e.unknownError.length>0&&e.unknownError.forEach((e=>{e.errors.forEach((e=>{o.push({error:e})}))}))})),o.length>0){const e=(0,v.T)(o);return f().showValidationMessage(`${e}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceDate(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return _(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date/"+e,i={};return f().fire({title:"Remove Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new b.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,v.T)(e);f().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new b.H("delete",n,!0);return i.postForm,i}})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}f().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,u.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return C(this,void 0,void 0,(function*(){const e=yield(0,d.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleDate(){return C(this,void 0,void 0,(function*(){const e=yield(0,c.R)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};S.styles=[r.iv`
   :host { display: block; }
  `],E([(0,a.Cb)({type:Number}),k("design:type",Number)],S.prototype,"CLIENT_ID",void 0),E([(0,a.Cb)({type:Array}),k("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],S.prototype,"_data",void 0),E([(0,a.Cb)({type:Object}),k("design:type",Object)],S.prototype,"urlQueryParams",void 0),E([(0,a.Cb)({type:Number}),k("design:type",Number)],S.prototype,"meetingEventId",void 0),E([(0,a.IO)('[show-dateField="all"]'),k("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],S.prototype,"showDateFieldAllSelector",void 0),S=E([(0,a.Mo)("attendance-setup-form-date"),k("design:paramtypes",[])],S),n(8693);var A=n(9665),R=n(8092),D=n(1302),x=n(7108),I=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,A.f)().then((()=>this._hasSetup=!0)),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,R.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,D.OR)(x.W.schedule_meeting_event),!(0,D.H)({pageId:x.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-date CLIENT_ID="${this.clientId}"></attendance-setup-form-date>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};I([(0,a.Cb)({type:String}),B("design:type",String)],$.prototype,"email",void 0),I([(0,a.Cb)({type:Number}),B("design:type",Number)],$.prototype,"mId",void 0),I([(0,a.Cb)({type:Number}),B("design:type",Number)],$.prototype,"clientId",void 0),I([(0,a.Cb)({type:Boolean}),B("design:type",Boolean)],$.prototype,"_hasSetup",void 0),I([(0,a.Cb)({type:Boolean}),B("design:type",Boolean)],$.prototype,"_pageButtonAccess",void 0),$=I([(0,a.Mo)("attendance-setup-form-edit-date"),B("design:paramtypes",[])],$)},8693:(e,t,n)=>{"use strict";var i=n(9392),o=n(1936),s=(n(2715),n(771)),r=n(4672),a=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],a([(0,o.Cb)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,o.Mo)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)},4232:(e,t,n)=>{"use strict";n.d(t,{OR:()=>r,hl:()=>l,pt:()=>s});var i=n(3692);const{I:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(3692),o=n(875),s=n(4232);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,r=e.name;if(e.type===o.pX.PROPERTY){if(t===n[r])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,9564,7708,1109,6236,6069,214,3901,3712],(()=>(2458,e(e.s=2458)))),e.O())])));
//# sourceMappingURL=edit-date.js.map