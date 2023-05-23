"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["home/dashboard"],{6660:(e,t,s)=>{s.r(t)},1136:(e,t,s)=>{s.r(t)},8207:(e,t,s)=>{s.r(t)},6656:(e,t,s)=>{s.r(t),s.d(t,{GET_MembershipUsers:()=>n});var r=s(8485),a=s(7270),i=s(4492),c=s(3600);function n(e=null,t="",s=!1){return n=this,o=void 0,d=function*(){const n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,l=(0,c.getUserLoginInfoCookie)(),d=s?o:n,p=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new i.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{a(d.next(e))}catch(e){t(e)}}function r(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(s,r)}a((d=d.apply(n,o||[])).next())}));var n,o,l,d}},8763:(e,t,s)=>{s.r(t),s.d(t,{AlertCard:()=>n}),s(1136);var r=s(5862),a=s(9662),i=(s(8207),function(e,t,s,r){var a,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(i<3?a(c):i>3?a(t,s,c):a(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
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
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};n.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"loading",void 0),i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"success",void 0),i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"info",void 0),i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"warning",void 0),i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"danger",void 0),i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"default",void 0),i([(0,a.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"primary",void 0),i([(0,a.property)({type:String}),c("design:type",String)],n.prototype,"extra_class",void 0),n=i([(0,a.customElement)("alert-card"),c("design:paramtypes",[])],n)},278:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardIndex:()=>u}),s(7255),s(6660);var r=s(5862),a=s(9662),i=(s(3283),s(1511),s(2715),s(8281),s(6190)),c=(s(4505),s(3118),s(3594),s(8485)),n=s(7712),o=(s(3683),s(1354)),l=(s(4657),s(1302)),d=s(2457),p=function(e,t,s,r){var a,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(i<3?a(c):i>3?a(t,s,c):a(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function c(e){try{o(r.next(e))}catch(e){i(e)}}function n(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(c,n)}o((r=r.apply(e,t||[])).next())}))};let u=class extends r.LitElement{constructor(){super(),this._dashboardMetricsCalled=!1,this._dashboardMetrics=[],this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield(0,n.AppSetup)(),yield this.getDashboardMetrics()}))}disconnectedCallback(){}render(){var e;return(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)?r.html`<account-expired-component></account-expired-component>`:(0,l.AppSettingsExtraUserAccess)({pageId:0,viewType:"View"},!0)?r.html`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${c.CONSTANTS.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
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
      `:r.html`<pdb-dashboard-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-user>`}firstUpdated(){}getDashboardMetrics(){return m(this,void 0,void 0,(function*(){const e=yield(0,d.GET_ClientUserDashboardAttendanceMetrics)();if(this._dashboardMetricsCalled=!0,null===e)this._dashboardMetrics=[];else if(e.response.success&&"scheduledMeetings"in e.response.data){const t=i.Convert.toClientUserDashboardAttendanceMetricModel(JSON.stringify(e.response.data));this._dashboardMetrics=[t],console.log({_dashboardMetrics:t,"this._dashboardMetrics":this._dashboardMetrics})}else this._dashboardMetrics=[]}))}createRenderRoot(){return this}};u.styles=[r.css`
   :host { display: block; }
  `],p([(0,a.property)({type:Boolean}),h("design:type",Boolean)],u.prototype,"_dashboardMetricsCalled",void 0),p([(0,a.property)({type:Array}),h("design:type",Array)],u.prototype,"_dashboardMetrics",void 0),u=p([(0,a.customElement)("pdb-dashboard-index"),h("design:paramtypes",[])],u)},3594:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardLoadingUser:()=>c}),s(1136);var r=s(5862),a=s(9662),i=(s(8763),function(e,t,s,r){var a,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(i<3?a(c):i>3?a(t,s,c):a(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c});let c=class extends r.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,i){function c(e){try{o(a.next(e))}catch(e){i(e)}}function n(e){try{o(a.throw(e))}catch(e){i(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(c,n)}o((a=a.apply(t,s||[])).next())}));var t,s,r,a}disconnectedCallback(){}render(){return r.html`
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
    `}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],c=i([(0,a.customElement)("pdb-dashboard-loading-user"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],c)},3118:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardMainUser:()=>n}),s(7255),s(6660);var r=s(5862),a=s(9662),i=(s(3283),s(6883),s(8763),s(367),s(2715),function(e,t,s,r){var a,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(i<3?a(c):i>3?a(t,s,c):a(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends r.LitElement{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,i){function c(e){try{o(a.next(e))}catch(e){i(e)}}function n(e){try{o(a.throw(e))}catch(e){i(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(c,n)}o((a=a.apply(t,s||[])).next())}));var t,s,r,a}disconnectedCallback(){}render(){return this.dashboardMetrics.map((e=>{var t,s,a,i,c,n;return r.html`
        <div class="!max-w-full d-none"></div>
        ${this.headers(e.branch.name+" Attendance Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("All Events","fa-table","bg-midnight-bloom",e.scheduledEvents)}
          ${this.metric("All Meetings","fa-table","bg-midnight-bloom",e.scheduledMeetings)}
        </div>
        ${this.headers(`On-Going Meeting ->-> ${(null===(s=null===(t=e.onGoing)||void 0===t?void 0:t.meetingName)||void 0===s?void 0:s.length)>0?null===(a=e.onGoing)||void 0===a?void 0:a.meetingName:"??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees","fa-users","bg-night-sky",e.onGoing.attendees)}
          ${this.metric("Absentees","fa-users","bg-night-sky",e.onGoing.absentees)}
          ${this.metric("Late","fa-user-clock","bg-night-sky",e.onGoing.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males","fa-male","bg-night-sky",e.onGoing.males)}
          ${this.metric("Females","fa-female","bg-night-sky",e.onGoing.females)}
        </div>
        ${this.headers(`Previous Meeting ->-> ${(null===(c=null===(i=e.previous)||void 0===i?void 0:i.meetingName)||void 0===c?void 0:c.length)>0?null===(n=e.previous)||void 0===n?void 0:n.meetingName:"??"}`)}
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
      `}))}headers(e){const t=r.html`<h4 class="text-gray-600">${e}</h4>`,s=r.nothing;return r.html`<alert-card info .header="${t}" .content="${s}" extra_class="!max-w-full"></alert-card>`}metric(e,t,s,a,i="py-2 px-3"){return r.html`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${i} bg-green-600 ${s}">
              <i class="fa ${t} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${e}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${a} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};n.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Array}),c("design:type",Array)],n.prototype,"dashboardMetrics",void 0),n=i([(0,a.customElement)("pdb-dashboard-user"),c("design:paramtypes",[])],n)},4505:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardMembers:()=>p}),s(7255),s(6660);var r=s(5862),a=s(9662),i=(s(3283),s(6883),s(367),s(1511),s(2715),s(7725)),c=s(6656),n=(s(8281),s(7052)),o=function(e,t,s,r){var a,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(i<3?a(c):i>3?a(t,s,c):a(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function c(e){try{o(r.next(e))}catch(e){i(e)}}function n(e){try{o(r.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(c,n)}o((r=r.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?r.html`
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
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,n.base64Encode)(String(e.id),!0);return r.html`
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
        `})):r.html``}firstUpdated(){}getMembers(){return d(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,c.GET_MembershipUsers)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],o([(0,a.property)({type:String}),l("design:type",String)],p.prototype,"memberProfileBaseUrl",void 0),o([(0,a.property)({type:Array}),l("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=o([(0,a.customElement)("pdb-dashboard-members"),l("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts","src_assets_styles_views_datatable_main_scss-src_assets_styles_views_home_dashboard_scss","shared"],(()=>(278,e(e.s=278)))),e.O())])));
//# sourceMappingURL=dashboard.js.map