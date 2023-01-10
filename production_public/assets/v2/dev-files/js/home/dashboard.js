"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["home/dashboard"],{6660:(e,t,s)=>{s.r(t)},8034:(e,t,s)=>{s.r(t)},8207:(e,t,s)=>{s.r(t)},6190:(e,t,s)=>{s.r(t),s.d(t,{Convert:()=>r,typeMap:()=>p});class r{static toClientUserDashboardAttendanceMetricModel(e){return o(JSON.parse(e),d("ClientUserDashboardAttendanceMetricModel"),a)}static clientUserDashboardAttendanceMetricModelToJson(e){return JSON.stringify(o(e,d("ClientUserDashboardAttendanceMetricModel"),i),null,2)}}function n(e,t,s=""){s&&console.error(`Invalid value for key "${s}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function a(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function o(e,t,s,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:n(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let n=0;n<r;n++){const r=e[n];try{return o(t,r,s)}catch(e){}}return n(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>o(t,e,s))):n("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return n("object",r);const a={};return Object.getOwnPropertyNames(e).forEach((t=>{const n=e[t],i=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;a[n.key]=o(i,n.typ,s,n.key)})),Object.getOwnPropertyNames(r).forEach((n=>{Object.prototype.hasOwnProperty.call(e,n)||(a[n]=o(r[n],t,s,n))})),a}(s(t),t.additional,e):n(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?n("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:n(e,t,r)}(t,e)}}function c(...e){return{unionMembers:e}}function l(e,t){return{props:e,additional:t}}function d(e){return{ref:e}}const p={ClientUserDashboardAttendanceMetricModel:l([{json:"scheduledMeetings",js:"scheduledMeetings",typ:c(null,0)},{json:"scheduledEvents",js:"scheduledEvents",typ:c(null,0)},{json:"subscription_amount",js:"subscriptionAmount",typ:c(null,3.14)},{json:"branch",js:"branch",typ:c(null,d("Branch"))},{json:"on_going",js:"onGoing",typ:c(null,d("OnGoing"))},{json:"previous",js:"previous",typ:c(null,d("OnGoing"))},{json:"expiration_date",js:"expirationDate",typ:c(null,Date)}],!1),Branch:l([{json:"id",js:"id",typ:c(null,0)},{json:"name",js:"name",typ:c(null,"")}],!1),OnGoing:l([{json:"meeting_id",js:"meetingID",typ:c(null,0)},{json:"meeting_name",js:"meetingName",typ:c(null,"")},{json:"attendees",js:"attendees",typ:c(null,0)},{json:"absentees",js:"absentees",typ:c(null,0)},{json:"males",js:"males",typ:c(null,0)},{json:"females",js:"females",typ:c(null,0)},{json:"late",js:"late",typ:c(null,0)}],!1)}},2457:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientUserDashboardAttendanceMetrics:()=>c});var r=s(8485),n=s(7270),a=s(4492),i=s(3600),o=s(7725);function c(){return e=this,t=void 0,c=function*(){const e=(0,i.getUserLoginInfoCookie)();let t=0;try{t=(0,o.getActiveBranchIdCookie)().id}catch(e){console.log({getActiveBranchIdCookie:e})}const s=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/dashboard-statistics/attendance?currentBranchId="+t,c=yield(0,n.http)(s,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(r,n){function a(e){try{o(c.next(e))}catch(e){n(e)}}function i(e){try{o(c.throw(e))}catch(e){n(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,i)}o((c=c.apply(e,t||[])).next())}));var e,t,s,c}},6656:(e,t,s)=>{s.r(t),s.d(t,{GET_MembershipUsers:()=>o});var r=s(8485),n=s(7270),a=s(4492),i=s(3600);function o(e=null,t="",s=!1){return o=this,c=void 0,d=function*(){const o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,l=(0,i.getUserLoginInfoCookie)(),d=s?c:o,p=yield(0,n.http)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new a.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{n(d.next(e))}catch(e){t(e)}}function r(e){try{n(d.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,r)}n((d=d.apply(o,c||[])).next())}));var o,c,l,d}},8763:(e,t,s)=>{s.r(t),s.d(t,{AlertCard:()=>o}),s(8034);var r=s(5862),n=s(9662),a=(s(8207),function(e,t,s,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(a<3?n(i):a>3?n(t,s,i):n(t,s))||i);return a>3&&i&&Object.defineProperty(t,s,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:r.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.html`<header class="header">${this.header}</header>`:r.nothing}
              ${null!==this.content?r.html`<main class="main">${this.content}</main>`:r.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};o.styles=[r.css`
   :host { display: block; }
  `],a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"loading",void 0),a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"success",void 0),a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"info",void 0),a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"warning",void 0),a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"danger",void 0),a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"default",void 0),a([(0,n.property)({type:Boolean}),i("design:type",Boolean)],o.prototype,"primary",void 0),a([(0,n.property)({type:String}),i("design:type",String)],o.prototype,"extra_class",void 0),o=a([(0,n.customElement)("alert-card"),i("design:paramtypes",[])],o)},278:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardIndex:()=>m}),s(7255),s(6660);var r=s(5862),n=s(9662),a=(s(3283),s(1511),s(2715),s(8281),s(6190)),i=(s(4505),s(3118),s(3594),s(8485)),o=s(7712),c=(s(3683),s(1354)),l=(s(4657),s(1302)),d=s(2457),p=function(e,t,s,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(a<3?n(i):a>3?n(t,s,i):n(t,s))||i);return a>3&&i&&Object.defineProperty(t,s,i),i},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,s,r){return new(s||(s=Promise))((function(n,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))};let m=class extends r.LitElement{constructor(){super(),this._dashboardMetricsCalled=!1,this._dashboardMetrics=[],this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield(0,o.AppSetup)(),yield this.getDashboardMetrics()}))}disconnectedCallback(){}render(){var e;return(null===(e=(0,c.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)?r.html`<account-expired-component></account-expired-component>`:(0,l.AppSettingsExtraUserAccess)({pageId:0,viewType:"View"},!0)?r.html`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${i.CONSTANTS.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
            </div>
          </div>
        </div>
      </div>
    `:r.html`<no-page-entry-component></no-page-entry-component>`}get metricsSection(){return!1===this._dashboardMetricsCalled?r.html`
        <div class="main-container">
          <!-- <div class="flex justify-center"> -->
          <pdb-dashboard-loading-user></pdb-dashboard-loading-user>
          <!-- </div> -->
        </div>
      `:this._dashboardMetrics.length<1?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Metrics </span>: Error!</h4>
          </div>
        </div>
      `:r.html`<pdb-dashboard-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-user>`}firstUpdated(){}getDashboardMetrics(){return u(this,void 0,void 0,(function*(){const e=yield(0,d.GET_ClientUserDashboardAttendanceMetrics)();if(this._dashboardMetricsCalled=!0,null===e)this._dashboardMetrics=[];else if(e.response.success&&"scheduledMeetings"in e.response.data){const t=a.Convert.toClientUserDashboardAttendanceMetricModel(JSON.stringify(e.response.data));this._dashboardMetrics=[t],console.log({_dashboardMetrics:t,"this._dashboardMetrics":this._dashboardMetrics})}else this._dashboardMetrics=[]}))}createRenderRoot(){return this}};m.styles=[r.css`
   :host { display: block; }
  `],p([(0,n.property)({type:Boolean}),h("design:type",Boolean)],m.prototype,"_dashboardMetricsCalled",void 0),p([(0,n.property)({type:Array}),h("design:type",Array)],m.prototype,"_dashboardMetrics",void 0),m=p([(0,n.customElement)("pdb-dashboard-index"),h("design:paramtypes",[])],m)},3594:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardLoadingUser:()=>i}),s(8034);var r=s(5862),n=s(9662),a=(s(8763),function(e,t,s,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(a<3?n(i):a>3?n(t,s,i):n(t,s))||i);return a>3&&i&&Object.defineProperty(t,s,i),i});let i=class extends r.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,n=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function o(e){try{c(n.throw(e))}catch(e){a(e)}}function c(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(i,o)}c((n=n.apply(t,s||[])).next())}));var t,s,r,n}disconnectedCallback(){}render(){return r.html`
        <div class="!max-w-full d-none"></div>
        ${this.headers()}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
        </div>
        ${this.headers()}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
        </div>
        ${this.headers()}
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pb-5">
          ${this.metric()}
          ${this.metric()}
          <!-- -->
        </div>
      `}headers(){return r.html`<alert-card loading extra_class="!max-w-full"></alert-card>`}metric(){return r.html`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4 placeholder--load-wrapper">
            <div class="rounded p-3 placeholder--activity">
              <i class="p-2"></i>
            </div>
          </div>
          <div class="ml-2 flex-1 placeholder--load-wrapper">
            <div class="placeholder--activity p-2"></div>
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};i.styles=[r.css`
   :host { display: block; }
  `],i=a([(0,n.customElement)("pdb-dashboard-loading-user"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],i)},3118:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardMainUser:()=>o}),s(7255),s(6660);var r=s(5862),n=s(9662),a=(s(3283),s(6883),s(8763),s(367),s(2715),function(e,t,s,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(a<3?n(i):a>3?n(t,s,i):n(t,s))||i);return a>3&&i&&Object.defineProperty(t,s,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends r.LitElement{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,n=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function o(e){try{c(n.throw(e))}catch(e){a(e)}}function c(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(i,o)}c((n=n.apply(t,s||[])).next())}));var t,s,r,n}disconnectedCallback(){}render(){return this.dashboardMetrics.map((e=>{var t,s,n,a,i,o;return r.html`
        <div class="!max-w-full d-none"></div>
        ${this.headers(e.branch.name+" Attendance Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("All Events","fa-table","bg-midnight-bloom",e.scheduledEvents)}
          ${this.metric("All Meetings","fa-table","bg-midnight-bloom",e.scheduledMeetings)}
        </div>
        ${this.headers(`On-Going Meeting ->-> ${(null===(s=null===(t=e.onGoing)||void 0===t?void 0:t.meetingName)||void 0===s?void 0:s.length)>0?null===(n=e.onGoing)||void 0===n?void 0:n.meetingName:"??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees","fa-users","bg-night-sky",e.onGoing.attendees)}
          ${this.metric("Absentees","fa-users","bg-night-sky",e.onGoing.absentees)}
          ${this.metric("Late","fa-user-clock","bg-night-sky",e.onGoing.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males","fa-male","bg-night-sky",e.onGoing.males)}
          ${this.metric("Females","fa-female","bg-night-sky",e.onGoing.females)}
        </div>
        ${this.headers(`Previous Meeting ->-> ${(null===(i=null===(a=e.previous)||void 0===a?void 0:a.meetingName)||void 0===i?void 0:i.length)>0?null===(o=e.previous)||void 0===o?void 0:o.meetingName:"??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees","fa-users","bg-royal",e.previous.attendees)}
          ${this.metric("Absentees","fa-users","bg-royal",e.previous.absentees)}
          ${this.metric("Late","fa-user-clock","bg-royal",e.previous.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males","fa-male","bg-royal",e.previous.males)}
          ${this.metric("Females","fa-female","bg-royal",e.previous.females)}
        </div>
        ${this.headers("Subscription Info")}
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pb-5">
          ${this.metric("Subscription Amount","pe-7s-cash py-2","bg-vicious-stance",e.subscriptionAmount,"p-3")}
          <div class="bg-white border border-gray-200 rounded shadow-sm p-0">
            <div class="flex flex-row items-center h-full">
              <div class="flex-shrink pr-2 contents">
                <div class="rounded py-2 px-3 bg-vicious-stance">
                  <i class="fa fa-clock fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="grid grid-cols-1 sm:grid-cols-1 grid-flow-row gap-1 p-1">
                      <div class="text-muted flex justify-end items-center content-center">
                        <input type="hidden" getClock__="${this.getDate(e.expirationDate)}" name="">
                        <h5 class="font-bold uppercase text-gray-400 pr-2">Subscription Ends In</h5>
                      </div>
                      <ul class="countdown px-1 pt-1 flex justify-center items-center content-center">
                        <li> <span style="background-color: #eee" class="days p-1">00</span>
                          <p class="days_ref">days</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="hours p-1">00</span>
                          <p class="hours_ref">hours</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="minutes p-1">00</span>
                          <p class="minutes_ref">minutes</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="seconds p-1">00</span>
                          <p class="seconds_ref">seconds</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->
        </div>
      `}))}headers(e){const t=r.html`<h4 class="text-gray-600">${e}</h4>`,s=r.nothing;return r.html`<alert-card info .header="${t}" .content="${s}" extra_class="!max-w-full"></alert-card>`}metric(e,t,s,n,a="py-2 px-3"){return r.html`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${a} bg-green-600 ${s}">
              <i class="fa ${t} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${e}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${n} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};o.styles=[r.css`
   :host { display: block; }
  `],a([(0,n.property)({type:Array}),i("design:type",Array)],o.prototype,"dashboardMetrics",void 0),o=a([(0,n.customElement)("pdb-dashboard-user"),i("design:paramtypes",[])],o)},4505:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardMembers:()=>p}),s(7255),s(6660);var r=s(5862),n=s(9662),a=(s(3283),s(6883),s(367),s(1511),s(2715),s(7725)),i=s(6656),o=(s(8281),s(7052)),c=function(e,t,s,r){var n,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(i=(a<3?n(i):a>3?n(t,s,i):n(t,s))||i);return a>3&&i&&Object.defineProperty(t,s,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,s,r){return new(s||(s=Promise))((function(n,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
      ${this.table}
    `}get table(){return r.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
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
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,o.base64Encode)(String(e.id),!0);return r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"
                  url="${e.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1">${e.firstname} ${e.middlename} ${e.surname}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.memberProfileBaseUrl}${t}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):r.html``}firstUpdated(){}getMembers(){return d(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,i.GET_MembershipUsers)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],c([(0,n.property)({type:String}),l("design:type",String)],p.prototype,"memberProfileBaseUrl",void 0),c([(0,n.property)({type:Array}),l("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=c([(0,n.customElement)("pdb-dashboard-members"),l("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts","src_assets_styles_views_datatable_main_scss-src_assets_styles_views_home_dashboard_scss","shared"],(()=>(278,e(e.s=278)))),e.O())])));
//# sourceMappingURL=dashboard.js.map