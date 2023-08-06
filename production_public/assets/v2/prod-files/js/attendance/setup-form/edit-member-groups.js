"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2479],{5049:(e,t,n)=>{n.d(t,{L:()=>c});var r=n(771),i=n(7270),o=n(596),s=n(3600);function c(e=null,t=""){return n=this,c=void 0,d=function*(){const n=(0,s.Ie)(),c=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/members"+(null===e?"":"/"+e)+t,l=yield(0,i.d)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{o(d.next(e))}catch(e){t(e)}}function i(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,i)}o((d=d.apply(n,c||[])).next())}));var n,c,l,d}},8547:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberGroups:()=>O}),n(3683),n(4657);var r,i,o=n(4108),s=n(5862),c=n(8393),l=n(5458),d=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),a=n(2218),u=n(4672),p=n(7128),h=(n(5866),n(2892)),m=n(5049),f=n(6455),g=n.n(f),v=n(771),y=n(7270),b=n(596),_=n(8967),w=n(3600),A=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((r=r.apply(e,t||[])).next())}))},x=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((r=r.apply(e,t||[])).next())}))};let k=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return s.dy`${this.schedule}`}get schedule(){return null===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.dy`${this.scheduleGroup}`:s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:s.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.dy`${this.table}`}get table(){return this._scheduleGroups.results.length>0?s.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Group
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
                ${this.getMeetingAttendanceGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:s.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return s.dy`
      ${this._scheduleGroups.results.map(((e,t)=>s.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.C)(this.getGroup(e.groupId),s.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member Groups</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member Groups!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-group">
                <div class="p-0 m-0" show-groupField="all">
                  ${this.groupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member Groups" raised class="button" @click="${this.submitForm}">
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
    `}get groupField(){const e=this._groups.map((e=>s.dy`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return s.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${s.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return s.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(n);const r=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),i=this.groupField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new d.T(e)}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return A(this,void 0,void 0,(function*(){const e=(0,w.Ie)(),t=v.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/member",n=document.querySelector('[make-general-posts="add-schedule-group"]'),r=new FormData(n);return g().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>A(this,void 0,void 0,(function*(){return yield(0,y.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new b.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,_.T)(e);g().showValidationMessage(`${t}`)}return t})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&g().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.j)(t)}))}getMeetingEventId(){let e=(0,u.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return C(this,void 0,void 0,(function*(){const e=yield(0,a.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return C(this,void 0,void 0,(function*(){const e=yield(0,m.L)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return C(this,void 0,void 0,(function*(){const e=yield(0,h.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._groups,...t),this._groups=n}))}getGroup(e){return C(this,void 0,void 0,(function*(){const t=yield(0,h.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};k.styles=[s.iv`
   :host { display: block; }
  `],x([(0,c.Cb)({type:Number}),G("design:type",Number)],k.prototype,"CLIENT_ID",void 0),x([(0,c.Cb)({type:Number}),G("design:type",Number)],k.prototype,"startSearchPage",void 0),x([(0,c.Cb)({type:Array}),G("design:type",Array)],k.prototype,"_groups",void 0),x([(0,c.Cb)({type:Array}),G("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],k.prototype,"_data",void 0),x([(0,c.Cb)({type:Object}),G("design:type",Object)],k.prototype,"urlQueryParams",void 0),x([(0,c.Cb)({type:Number}),G("design:type",Number)],k.prototype,"meetingEventId",void 0),x([(0,c.IO)('[show-groupField="all"]'),G("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],k.prototype,"showGroupFieldAllSelector",void 0),k=x([(0,c.Mo)("attendance-setup-form-member-groups"),G("design:paramtypes",[])],k),n(8693);var E=n(9665),S=n(8092),I=n(1302),N=n(7108),j=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let O=class extends s.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,E.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function c(e){try{l(i.throw(e))}catch(e){o(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,c)}l((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,S.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,I.OR)(N.W.schedule_meeting_event),!(0,I.H)({pageId:N.W.schedule_meeting_event,viewType:"Edit"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}return s.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member-groups CLIENT_ID="${this.clientId}"></attendance-setup-form-member-groups>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};j([(0,c.Cb)({type:String}),$("design:type",String)],O.prototype,"email",void 0),j([(0,c.Cb)({type:Number}),$("design:type",Number)],O.prototype,"mId",void 0),j([(0,c.Cb)({type:Number}),$("design:type",Number)],O.prototype,"clientId",void 0),j([(0,c.Cb)({type:Boolean}),$("design:type",Boolean)],O.prototype,"_hasSetup",void 0),j([(0,c.Cb)({type:Boolean}),$("design:type",Boolean)],O.prototype,"_pageButtonAccess",void 0),O=j([(0,c.Mo)("attendance-setup-form-edit-member-groups"),$("design:paramtypes",[])],O)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,6031,1109,6236,6069,214,7719,3901,4213,3712],(()=>(8547,e(e.s=8547)))),e.O())])));
//# sourceMappingURL=edit-member-groups.js.map