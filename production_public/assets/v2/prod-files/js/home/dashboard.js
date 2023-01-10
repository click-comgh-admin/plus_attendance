"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4633],{6656:(e,t,r)=>{r.d(t,{E:()=>o});var s=r(771),i=r(7270),a=r(596),n=r(3600);function o(e=null,t="",r=!1){return o=this,c=void 0,d=function*(){const o=s.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,c=s.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,l=(0,n.Ie)(),d=r?c:o,p=yield(0,i.d)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new a.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new a.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{i(d.next(e))}catch(e){t(e)}}function s(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(r,s)}i((d=d.apply(o,c||[])).next())}));var o,c,l,d}},8763:(e,t,r)=>{var s=r(9392),i=r(1936),a=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends s.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?s.dy`
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
      `:s.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?s.dy`<header class="header">${this.header}</header>`:s.Ld}
              ${null!==this.content?s.dy`<main class="main">${this.content}</main>`:s.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?s.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?s.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?s.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?s.dy`<mwc-icon>warning</mwc-icon>`:this.danger?s.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?s.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?s.dy`<mwc-icon>star_outline</mwc-icon>`:s.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};o.styles=[s.iv`
   :host { display: block; }
  `],a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"loading",void 0),a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"success",void 0),a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"info",void 0),a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"warning",void 0),a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"danger",void 0),a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"default",void 0),a([(0,i.Cb)({type:Boolean}),n("design:type",Boolean)],o.prototype,"primary",void 0),a([(0,i.Cb)({type:String}),n("design:type",String)],o.prototype,"extra_class",void 0),o=a([(0,i.Mo)("alert-card"),n("design:paramtypes",[])],o)},6883:(e,t,r)=>{var s,i=r(9392),a=r(1936),n=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return i.dy`
      ${this.dt_head.map((e=>i.dy`<th>${e.title}</th>`))}
    `}tbody(){return i.dy`
      ${this.dt_body.map((e=>i.dy`<tr>${e.map((e=>i.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return i.dy`
    ${this.dt_foot.map((e=>i.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const r=this.ajaxHeader[e];t[e]=r}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[i.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],n([(0,a.Cb)({type:Number}),o("design:type",Number)],c.prototype,"randomID1",void 0),n([(0,a.Cb)({type:Number}),o("design:type",Number)],c.prototype,"randomID2",void 0),n([(0,a.Cb)({type:String}),o("design:type",String)],c.prototype,"ID",void 0),n([(0,a.Cb)({type:Object}),o("design:type","function"==typeof(s="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?s:Object)],c.prototype,"datatable",void 0),n([(0,a.Cb)({type:Array}),o("design:type",Array)],c.prototype,"dt_head",void 0),n([(0,a.Cb)({type:Array}),o("design:type",Array)],c.prototype,"dt_foot",void 0),n([(0,a.Cb)({type:Array}),o("design:type",Array)],c.prototype,"dt_body",void 0),n([(0,a.Cb)(),o("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=n([(0,a.Mo)("datatables-new"),o("design:paramtypes",[])],c)},1163:(e,t,r)=>{var s=r(771),i=r(3600),a=r(7052),n=r(9392),o=r(1936),c=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends n.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return n.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 hidden"></div>
      <div class="w-32 h-32 hidden"></div>
      <div class="w-16 h-16 hidden"></div>
    `}openProfile(e){if(e.preventDefault(),"false"!==this["click-to-open"]){const e=(e=>{const t=(0,i.Ie)().token,r=(0,a.h)(t,!0),n=(0,a.h)(e,!0);return`${s.t.URLS.PDB_DATABASE}app-reroute?permission-key=${r}&access-page-key=${n}`})(this["click-to-open"]);window.location.href=e}}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};d.styles=[n.iv`
   :host { display: block; }
  `],c([(0,o.Cb)({type:String}),l("design:type",String)],d.prototype,"url",void 0),c([(0,o.Cb)({type:String}),l("design:type",String)],d.prototype,"type",void 0),c([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],d.prototype,"rounded",void 0),c([(0,o.Cb)({type:String}),l("design:type",String)],d.prototype,"click-to-open",void 0),c([(0,o.Cb)({type:Number}),l("design:type",Number)],d.prototype,"size",void 0),d=c([(0,o.Mo)("user-profile-photo"),l("design:paramtypes",[])],d)},1099:(e,t,r)=>{r.r(t),r.d(t,{PdbDashboardIndex:()=>P});var s=r(9392),i=r(1936);r(5248),r(6811),r(2715),r(1163);class a{static toClientUserDashboardAttendanceMetricModel(e){return l(JSON.parse(e),u("ClientUserDashboardAttendanceMetricModel"),o)}static clientUserDashboardAttendanceMetricModelToJson(e){return JSON.stringify(l(e,u("ClientUserDashboardAttendanceMetricModel"),c),null,2)}}function n(e,t,r=""){r&&console.error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,r,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=h[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:n(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let i=0;i<s;i++){const s=e[i];try{return l(t,s,r)}catch(e){}}return n(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,r))):n("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return n("object",s);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const a=e[t],n=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;i[a.key]=l(n,a.typ,r,a.key)})),Object.getOwnPropertyNames(s).forEach((a=>{Object.prototype.hasOwnProperty.call(e,a)||(i[a]=l(s[a],t,r,a))})),i}(r(t),t.additional,e):n(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?n("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:n(e,t,s)}(t,e)}}function d(...e){return{unionMembers:e}}function p(e,t){return{props:e,additional:t}}function u(e){return{ref:e}}const h={ClientUserDashboardAttendanceMetricModel:p([{json:"scheduledMeetings",js:"scheduledMeetings",typ:d(null,0)},{json:"scheduledEvents",js:"scheduledEvents",typ:d(null,0)},{json:"subscription_amount",js:"subscriptionAmount",typ:d(null,3.14)},{json:"branch",js:"branch",typ:d(null,u("Branch"))},{json:"on_going",js:"onGoing",typ:d(null,u("OnGoing"))},{json:"previous",js:"previous",typ:d(null,u("OnGoing"))},{json:"expiration_date",js:"expirationDate",typ:d(null,Date)}],!1),Branch:p([{json:"id",js:"id",typ:d(null,0)},{json:"name",js:"name",typ:d(null,"")}],!1),OnGoing:p([{json:"meeting_id",js:"meetingID",typ:d(null,0)},{json:"meeting_name",js:"meetingName",typ:d(null,"")},{json:"attendees",js:"attendees",typ:d(null,0)},{json:"absentees",js:"absentees",typ:d(null,0)},{json:"males",js:"males",typ:d(null,0)},{json:"females",js:"females",typ:d(null,0)},{json:"late",js:"late",typ:d(null,0)}],!1)};r(6883);var f=r(7725),b=r(6656),y=r(7052),m=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,r,s){return new(r||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};let w=class extends s.oi{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,f.hk)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:s.dy`
      ${this.table}
    `}get table(){return s.dy`
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
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,y.h)(String(e.id),!0);return s.dy`
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
        `})):s.dy``}firstUpdated(){}getMembers(){return v(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.E)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};w.styles=[s.iv`
   :host { display: block; }
  `],m([(0,i.Cb)({type:String}),g("design:type",String)],w.prototype,"memberProfileBaseUrl",void 0),m([(0,i.Cb)({type:Array}),g("design:type",Array)],w.prototype,"_activeBranchId",void 0),w=m([(0,i.Mo)("pdb-dashboard-members"),g("design:paramtypes",[])],w),r(8763);var _=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let x=class extends s.oi{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,i=function*(){e.connectedCallback.call(this)},new((s=void 0)||(s=Promise))((function(e,a){function n(e){try{c(i.next(e))}catch(e){a(e)}}function o(e){try{c(i.throw(e))}catch(e){a(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,o)}c((i=i.apply(t,r||[])).next())}));var t,r,s,i}disconnectedCallback(){}render(){return this.dashboardMetrics.map((e=>{var t,r,i,a,n,o;return s.dy`
        <div class="!max-w-full d-none"></div>
        ${this.headers(e.branch.name+" Attendance Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("All Events","fa-table","bg-midnight-bloom",e.scheduledEvents)}
          ${this.metric("All Meetings","fa-table","bg-midnight-bloom",e.scheduledMeetings)}
        </div>
        ${this.headers(`On-Going Meeting ->-> ${(null===(r=null===(t=e.onGoing)||void 0===t?void 0:t.meetingName)||void 0===r?void 0:r.length)>0?null===(i=e.onGoing)||void 0===i?void 0:i.meetingName:"??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees","fa-users","bg-night-sky",e.onGoing.attendees)}
          ${this.metric("Absentees","fa-users","bg-night-sky",e.onGoing.absentees)}
          ${this.metric("Late","fa-user-clock","bg-night-sky",e.onGoing.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males","fa-male","bg-night-sky",e.onGoing.males)}
          ${this.metric("Females","fa-female","bg-night-sky",e.onGoing.females)}
        </div>
        ${this.headers(`Previous Meeting ->-> ${(null===(n=null===(a=e.previous)||void 0===a?void 0:a.meetingName)||void 0===n?void 0:n.length)>0?null===(o=e.previous)||void 0===o?void 0:o.meetingName:"??"}`)}
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
      `}))}headers(e){const t=s.dy`<h4 class="text-gray-600">${e}</h4>`,r=s.Ld;return s.dy`<alert-card info .header="${t}" .content="${r}" extra_class="!max-w-full"></alert-card>`}metric(e,t,r,i,a="py-2 px-3"){return s.dy`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${a} bg-green-600 ${r}">
              <i class="fa ${t} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${e}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${i} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};x.styles=[s.iv`
   :host { display: block; }
  `],_([(0,i.Cb)({type:Array}),j("design:type",Array)],x.prototype,"dashboardMetrics",void 0),x=_([(0,i.Mo)("pdb-dashboard-user"),j("design:paramtypes",[])],x);let $=class extends s.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,i=function*(){e.connectedCallback.call(this)},new((s=void 0)||(s=Promise))((function(e,a){function n(e){try{c(i.next(e))}catch(e){a(e)}}function o(e){try{c(i.throw(e))}catch(e){a(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,o)}c((i=i.apply(t,r||[])).next())}));var t,r,s,i}disconnectedCallback(){}render(){return s.dy`
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
      `}headers(){return s.dy`<alert-card loading extra_class="!max-w-full"></alert-card>`}metric(){return s.dy`
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
    `}createRenderRoot(){return this}};$.styles=[s.iv`
   :host { display: block; }
  `],$=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n}([(0,i.Mo)("pdb-dashboard-loading-user"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],$);var k=r(771),C=r(9665),R=(r(3683),r(7012)),A=(r(4657),r(1302)),M=r(7270),O=r(596),S=r(3600),B=function(e,t,r,s){var i,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n},D=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,r,s){return new(r||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};let P=class extends s.oi{constructor(){super(),this._dashboardMetricsCalled=!1,this._dashboardMetrics=[],this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield(0,C.f)(),yield this.getDashboardMetrics()}))}disconnectedCallback(){}render(){var e;return(null===(e=(0,R.H)())||void 0===e?void 0:e.expiration_date.expired)?s.dy`<account-expired-component></account-expired-component>`:(0,A.H)({pageId:0,viewType:"View"},!0)?s.dy`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${k.t.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
            </div>
          </div>
        </div>
      </div>
    `:s.dy`<no-page-entry-component></no-page-entry-component>`}get metricsSection(){return!1===this._dashboardMetricsCalled?s.dy`
        <div class="main-container">
          <!-- <div class="flex justify-center"> -->
          <pdb-dashboard-loading-user></pdb-dashboard-loading-user>
          <!-- </div> -->
        </div>
      `:this._dashboardMetrics.length<1?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Metrics </span>: Error!</h4>
          </div>
        </div>
      `:s.dy`<pdb-dashboard-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-user>`}firstUpdated(){}getDashboardMetrics(){return I(this,void 0,void 0,(function*(){const e=yield function(){return e=this,t=void 0,s=function*(){const e=(0,S.Ie)();let t=0;try{t=(0,f.hk)().id}catch(e){console.log({getActiveBranchIdCookie:e})}const r=k.t.URLS.AKWAABA_API_BASE_URL+"clients/dashboard-statistics/attendance?currentBranchId="+t,s=yield(0,M.d)(r,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new O.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new O.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(i,a){function n(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}));var e,t,r,s}();if(this._dashboardMetricsCalled=!0,null===e)this._dashboardMetrics=[];else if(e.response.success&&"scheduledMeetings"in e.response.data){const t=a.toClientUserDashboardAttendanceMetricModel(JSON.stringify(e.response.data));this._dashboardMetrics=[t],console.log({_dashboardMetrics:t,"this._dashboardMetrics":this._dashboardMetrics})}else this._dashboardMetrics=[]}))}createRenderRoot(){return this}};P.styles=[s.iv`
   :host { display: block; }
  `],B([(0,i.Cb)({type:Boolean}),D("design:type",Boolean)],P.prototype,"_dashboardMetricsCalled",void 0),B([(0,i.Cb)({type:Array}),D("design:type",Array)],P.prototype,"_dashboardMetrics",void 0),P=B([(0,i.Mo)("pdb-dashboard-index"),D("design:paramtypes",[])],P)}},e=>(e.O(0,[5744,2185,7708,1109,6236,6069,751,3712],(()=>(1099,e(e.s=1099)))),e.O())])));
//# sourceMappingURL=dashboard.js.map