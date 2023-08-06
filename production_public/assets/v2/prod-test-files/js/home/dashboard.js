"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4633],{6656:(e,t,i)=>{i.d(t,{E:()=>d});var r=i(771),s=i(7270),a=i(596),o=i(3600);function d(e=null,t="",i=!1){return d=this,n=void 0,l=function*(){const d=r.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,n=r.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,c=(0,o.Ie)(),l=i?n:d,p=yield(0,s.d)(l,{method:"GET",headers:{Authorization:"Token "+c.token}},!0);try{return new a.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new a.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(l.next(e))}catch(e){t(e)}}function r(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof c?s:new c((function(e){e(s)}))).then(i,r)}s((l=l.apply(d,n||[])).next())}));var d,n,c,l}},8763:(e,t,i)=>{var r=i(5862),s=i(8393),a=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends r.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.dy`
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
      `:r.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.dy`<header class="header">${this.header}</header>`:r.Ld}
              ${null!==this.content?r.dy`<main class="main">${this.content}</main>`:r.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.dy`<mwc-icon>warning</mwc-icon>`:this.danger?r.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?r.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.dy`<mwc-icon>star_outline</mwc-icon>`:r.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};d.styles=[r.iv`
   :host { display: block; }
  `],a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"loading",void 0),a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"success",void 0),a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"info",void 0),a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"warning",void 0),a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"danger",void 0),a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"default",void 0),a([(0,s.Cb)({type:Boolean}),o("design:type",Boolean)],d.prototype,"primary",void 0),a([(0,s.Cb)({type:String}),o("design:type",String)],d.prototype,"extra_class",void 0),d=a([(0,s.Mo)("alert-card"),o("design:paramtypes",[])],d)},6883:(e,t,i)=>{var r,s=i(5862),a=i(8393),o=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends s.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return s.dy`
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
  `}thead(){return s.dy`
      ${this.dt_head.map((e=>s.dy`<th>${e.title}</th>`))}
    `}tbody(){return s.dy`
      ${this.dt_body.map((e=>s.dy`<tr>${e.map((e=>s.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return s.dy`
    ${this.dt_foot.map((e=>s.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const i=this.ajaxHeader[e];t[e]=i}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};n.styles=[s.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],o([(0,a.Cb)({type:Number}),d("design:type",Number)],n.prototype,"randomID1",void 0),o([(0,a.Cb)({type:Number}),d("design:type",Number)],n.prototype,"randomID2",void 0),o([(0,a.Cb)({type:String}),d("design:type",String)],n.prototype,"ID",void 0),o([(0,a.Cb)({type:Object}),d("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],n.prototype,"datatable",void 0),o([(0,a.Cb)({type:Array}),d("design:type",Array)],n.prototype,"dt_head",void 0),o([(0,a.Cb)({type:Array}),d("design:type",Array)],n.prototype,"dt_foot",void 0),o([(0,a.Cb)({type:Array}),d("design:type",Array)],n.prototype,"dt_body",void 0),o([(0,a.Cb)(),d("design:type",Object)],n.prototype,"ajaxHeader",void 0),n=o([(0,a.Mo)("datatables-new"),d("design:paramtypes",[])],n)},1163:(e,t,i)=>{var r=i(771),s=i(3600),a=i(7052),o=i(5862),d=i(8393),n=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 hidden"></div>
      <div class="w-32 h-32 hidden"></div>
      <div class="w-16 h-16 hidden"></div>
    `}openProfile(e){if(e.preventDefault(),"false"!==this["click-to-open"]){const e=(e=>{const t=(0,s.Ie)().token,i=(0,a.h)(t,!0),o=(0,a.h)(e,!0);return`${r.t.URLS.PDB_DATABASE}app-reroute?permission-key=${i}&access-page-key=${o}`})(this["click-to-open"]);window.location.href=e}}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[o.iv`
   :host { display: block; }
  `],n([(0,d.Cb)({type:String}),c("design:type",String)],l.prototype,"url",void 0),n([(0,d.Cb)({type:String}),c("design:type",String)],l.prototype,"type",void 0),n([(0,d.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"rounded",void 0),n([(0,d.Cb)({type:String}),c("design:type",String)],l.prototype,"click-to-open",void 0),n([(0,d.Cb)({type:Number}),c("design:type",Number)],l.prototype,"size",void 0),l=n([(0,d.Mo)("user-profile-photo"),c("design:paramtypes",[])],l)},1872:(e,t,i)=>{i.r(t),i.d(t,{PdbDashboardIndex:()=>C});var r=i(5862),s=i(8393),a=(i(5248),i(6811),i(2715),i(1163),i(6190)),o=(i(6883),i(7725)),d=i(6656),n=i(7052),c=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,i,r){return new(i||(i=Promise))((function(s,a){function o(e){try{n(r.next(e))}catch(e){a(e)}}function d(e){try{n(r.throw(e))}catch(e){a(e)}}function n(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,d)}n((r=r.apply(e,t||[])).next())}))};let h=class extends r.oi{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return p(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,o.hk)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
      ${this.table}
    `}get table(){return r.dy`
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
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,n.h)(String(e.id),!0);return r.dy`
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
        `})):r.dy``}firstUpdated(){}getMembers(){return p(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,d.E)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};h.styles=[r.iv`
   :host { display: block; }
  `],c([(0,s.Cb)({type:String}),l("design:type",String)],h.prototype,"memberProfileBaseUrl",void 0),c([(0,s.Cb)({type:Array}),l("design:type",Array)],h.prototype,"_activeBranchId",void 0),h=c([(0,s.Mo)("pdb-dashboard-members"),l("design:paramtypes",[])],h),i(8763);var u=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=class extends r.oi{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,i=void 0,s=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,a){function o(e){try{n(s.next(e))}catch(e){a(e)}}function d(e){try{n(s.throw(e))}catch(e){a(e)}}function n(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,d)}n((s=s.apply(t,i||[])).next())}));var t,i,r,s}disconnectedCallback(){}render(){return this.dashboardMetrics.map((e=>{var t,i,s,a,o,d;return r.dy`
        <div class="!max-w-full d-none"></div>
        ${this.headers(e.branch.name+" Attendance Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("All Events","fa-table","bg-midnight-bloom",e.scheduledEvents)}
          ${this.metric("All Meetings","fa-table","bg-midnight-bloom",e.scheduledMeetings)}
        </div>
        ${this.headers(`On-Going Meeting ->-> ${(null===(i=null===(t=e.onGoing)||void 0===t?void 0:t.meetingName)||void 0===i?void 0:i.length)>0?null===(s=e.onGoing)||void 0===s?void 0:s.meetingName:"??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees","fa-users","bg-night-sky",e.onGoing.attendees)}
          ${this.metric("Absentees","fa-users","bg-night-sky",e.onGoing.absentees)}
          ${this.metric("Late","fa-user-clock","bg-night-sky",e.onGoing.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males","fa-male","bg-night-sky",e.onGoing.males)}
          ${this.metric("Females","fa-female","bg-night-sky",e.onGoing.females)}
        </div>
        ${this.headers(`Previous Meeting ->-> ${(null===(o=null===(a=e.previous)||void 0===a?void 0:a.meetingName)||void 0===o?void 0:o.length)>0?null===(d=e.previous)||void 0===d?void 0:d.meetingName:"??"}`)}
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
      `}))}headers(e){const t=r.dy`<h4 class="text-gray-600">${e}</h4>`,i=r.Ld;return r.dy`<alert-card info .header="${t}" .content="${i}" extra_class="!max-w-full"></alert-card>`}metric(e,t,i,s,a="py-2 px-3"){return r.dy`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${a} bg-green-600 ${i}">
              <i class="fa ${t} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${e}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${s} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};f.styles=[r.iv`
   :host { display: block; }
  `],u([(0,s.Cb)({type:Array}),b("design:type",Array)],f.prototype,"dashboardMetrics",void 0),f=u([(0,s.Mo)("pdb-dashboard-user"),b("design:paramtypes",[])],f);let m=class extends r.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,i=void 0,s=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,a){function o(e){try{n(s.next(e))}catch(e){a(e)}}function d(e){try{n(s.throw(e))}catch(e){a(e)}}function n(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,d)}n((s=s.apply(t,i||[])).next())}));var t,i,r,s}disconnectedCallback(){}render(){return r.dy`
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
      `}headers(){return r.dy`<alert-card loading extra_class="!max-w-full"></alert-card>`}metric(){return r.dy`
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
    `}createRenderRoot(){return this}};m.styles=[r.iv`
   :host { display: block; }
  `],m=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}([(0,s.Mo)("pdb-dashboard-loading-user"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],m);var y=i(771),g=i(9665),v=(i(3683),i(8092)),w=(i(4657),i(1302)),_=i(2457),x=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,i,r){return new(i||(i=Promise))((function(s,a){function o(e){try{n(r.next(e))}catch(e){a(e)}}function d(e){try{n(r.throw(e))}catch(e){a(e)}}function n(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,d)}n((r=r.apply(e,t||[])).next())}))};let C=class extends r.oi{constructor(){super(),this._dashboardMetricsCalled=!1,this._dashboardMetrics=[],this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield(0,g.f)(),yield this.getDashboardMetrics()}))}disconnectedCallback(){}render(){var e;return(null===(e=(0,v.H)())||void 0===e?void 0:e.expiration_date.expired)?r.dy`<account-expired-component></account-expired-component>`:(0,w.H)({pageId:0,viewType:"View"},!0)?r.dy`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${y.t.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
            </div>
          </div>
        </div>
      </div>
    `:r.dy`<no-page-entry-component></no-page-entry-component>`}get metricsSection(){return!1===this._dashboardMetricsCalled?r.dy`
        <div class="main-container">
          <!-- <div class="flex justify-center"> -->
          <pdb-dashboard-loading-user></pdb-dashboard-loading-user>
          <!-- </div> -->
        </div>
      `:this._dashboardMetrics.length<1?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Metrics </span>: Error!</h4>
          </div>
        </div>
      `:r.dy`<pdb-dashboard-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-user>`}firstUpdated(){}getDashboardMetrics(){return k(this,void 0,void 0,(function*(){const e=yield(0,_.C)();if(this._dashboardMetricsCalled=!0,null===e)this._dashboardMetrics=[];else if(e.response.success&&"scheduledMeetings"in e.response.data){const t=a.e.toClientUserDashboardAttendanceMetricModel(JSON.stringify(e.response.data));this._dashboardMetrics=[t],console.log({_dashboardMetrics:t,"this._dashboardMetrics":this._dashboardMetrics})}else this._dashboardMetrics=[]}))}createRenderRoot(){return this}};C.styles=[r.iv`
   :host { display: block; }
  `],x([(0,s.Cb)({type:Boolean}),$("design:type",Boolean)],C.prototype,"_dashboardMetricsCalled",void 0),x([(0,s.Cb)({type:Array}),$("design:type",Array)],C.prototype,"_dashboardMetrics",void 0),C=x([(0,s.Mo)("pdb-dashboard-index"),$("design:paramtypes",[])],C)}},e=>(e.O(0,[5744,2185,4351,1109,6236,6069,751,3712],(()=>(1872,e(e.s=1872)))),e.O())])));
//# sourceMappingURL=dashboard.js.map