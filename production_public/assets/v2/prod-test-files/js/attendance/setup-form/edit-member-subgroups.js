"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8816],{1245:(e,t,s)=>{s.d(t,{c:()=>c});var n=s(771),r=s(7270),o=s(596),i=s(3600);function c(e=null,t=""){return s=this,c=void 0,l=function*(){const s=(0,i.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/members"+(null===e?"":"/"+e)+t,d=yield(0,r.d)(c,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new o.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new o.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof d?s:new d((function(e){e(s)}))).then(n,r)}o((l=l.apply(s,c||[])).next())}));var s,c,d,l}},8087:(e,t,s)=>{s.r(t),s.d(t,{AttendanceSetupFormEditMemberSubgroups:()=>F}),s(3683),s(4657);var n,r,o=s(4108),i=s(5862),c=s(8393),d=s(5458),l=(s(5248),s(6811),s(3690),s(1854),s(2461),s(2262)),u=s(2218),a=s(4672),p=s(1257),h=(s(5866),s(9605)),b=s(2892),m=s(1245),g=s(6455),f=s.n(g),v=s(771),y=s(7270),_=s(596),w=s(8967),S=s(3600),A=function(e,t,s,n){return new(s||(s=Promise))((function(r,o){function i(e){try{d(n.next(e))}catch(e){o(e)}}function c(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,c)}d((n=n.apply(e,t||[])).next())}))},G=function(e,t,s,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,s,n){return new(s||(s=Promise))((function(r,o){function i(e){try{d(n.next(e))}catch(e){o(e)}}function c(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,c)}d((n=n.apply(e,t||[])).next())}))};let k=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__subgroupUser=null,this.__schedule=null,this.__scheduleSubGroups=null,this._groups=[],this._subgroups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _subgroupUser(e){this.__subgroupUser=e,this.requestUpdate()}get _subgroupUser(){return this.__subgroupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSubGroups(e){this.__scheduleSubGroups=e,this.requestUpdate()}get _scheduleSubGroups(){return this.__scheduleSubGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSubGroup(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return i.dy`${this.schedule}`}get schedule(){return null===this._schedule?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?i.dy`${this.scheduleSubGroup}`:i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSubGroup(){return null===this._scheduleSubGroups?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSubGroups?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SubGroup</span>: undefined error</h4>
          </div>
        </div>
      `:i.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.dy`${this.table}`}get table(){return this._scheduleSubGroups.results.length>0?i.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting SubGroup">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting SubGroup
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
                ${this.getMeetingAttendanceSubGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:i.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceSubGroups(){return i.dy`
      ${this._scheduleSubGroups.results.map(((e,t)=>i.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,d.C)(this.getSubGroup(e.subGroupId),i.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSubGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return i.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member SubGroups</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member SubGroups!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-subgroup">
                <div class="p-0 m-0" show-subgroupField="all">
                  ${this.subgroupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member SubGroups" raised class="button" @click="${this.submitForm}">
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
    `}get subgroupField(){const e=this._subgroups.map((e=>i.dy`<mwc-list-item value="${e.id}">
        ${e.groupId.group} >> 
        ${e.subgroup}
      </mwc-list-item>`));return i.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select SubGroup</h4>
            <mwc-select name="subGroupId" class="w-full" id="subGroupId" label="Select SubGroup" outlined required>
              <mwc-list-item value="">Select SubGroup</mwc-list-item>
              <mwc-list-item value="all">All SubGroups</mwc-list-item>
              ${i.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}subgroupFieldDefault(e){return i.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.subgroupField}
        subgroupField-id="${e}" no_delete></multiple-widgets>
    `}addSubGroupField(){const e=this.showSubGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSubGroupFieldAllSelector.children[e-1].getAttribute("subgroupField-id")))+1,s=document.createElement("multiple-widgets");s.setAttribute("class","col-md-12 col-lg-12 mb-3"),s.setAttribute("subgroupField-id",String(t)),this.showSubGroupFieldAllSelector.append(s);const n=this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+t+'"]'),r=this.subgroupField.strings.join("");setTimeout((()=>{n.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return A(this,void 0,void 0,(function*(){const e=(0,S.Ie)(),t=v.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/member",s=document.querySelector('[make-general-posts="add-schedule-subgroup"]'),n=new FormData(s);return f().fire({title:"Add SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>A(this,void 0,void 0,(function*(){return yield(0,y.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new _.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((s=>{let n={error:t.id+": "+s};"non_field_errors"===t.id&&(n={error:s}),e.push(n)}))}));const t=(0,w.T)(e);f().showValidationMessage(`${t}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),s=n.response.success}s&&f().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceSubGroup(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.h)(t)}))}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return C(this,void 0,void 0,(function*(){const e=yield(0,u.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSubGroup(){return C(this,void 0,void 0,(function*(){const e=yield(0,m.c)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleSubGroups=null===e?void 0:e.paginResponse}))}getGroups(){return C(this,void 0,void 0,(function*(){const e=yield(0,b.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const s=[];s.push(...this._groups,...t),this._groups=s}))}getGroup(e){return C(this,void 0,void 0,(function*(){const t=yield(0,b.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}getSubGroups(){return C(this,void 0,void 0,(function*(){const e=yield(0,h.U)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const s=[];s.push(...this._subgroups,...t),this._subgroups=s}))}getSubGroup(e){return C(this,void 0,void 0,(function*(){const t=yield(0,h.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};k.styles=[i.iv`
   :host { display: block; }
  `],G([(0,c.Cb)({type:Number}),x("design:type",Number)],k.prototype,"CLIENT_ID",void 0),G([(0,c.Cb)({type:Number}),x("design:type",Number)],k.prototype,"startSearchPage",void 0),G([(0,c.Cb)({type:Array}),x("design:type",Array)],k.prototype,"_groups",void 0),G([(0,c.Cb)({type:Array}),x("design:type",Array)],k.prototype,"_subgroups",void 0),G([(0,c.Cb)({type:Array}),x("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],k.prototype,"_data",void 0),G([(0,c.Cb)({type:Object}),x("design:type",Object)],k.prototype,"urlQueryParams",void 0),G([(0,c.Cb)({type:Number}),x("design:type",Number)],k.prototype,"meetingEventId",void 0),G([(0,c.IO)('[show-subgroupField="all"]'),x("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],k.prototype,"showSubGroupFieldAllSelector",void 0),k=G([(0,c.Mo)("attendance-setup-form-member-subgroups"),x("design:paramtypes",[])],k),s(8693);var E=s(9665),I=s(8092),N=s(1302),j=s(7108),O=function(e,t,s,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let F=class extends i.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,r=function*(){e.connectedCallback.call(this),(0,E.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,o){function i(e){try{d(r.next(e))}catch(e){o(e)}}function c(e){try{d(r.throw(e))}catch(e){o(e)}}function d(t){var s;t.done?e(t.value):(s=t.value,s instanceof n?s:new n((function(e){e(s)}))).then(i,c)}d((r=r.apply(t,s||[])).next())}));var t,s,n,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,I.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.OR)(j.W.schedule_meeting_event),!(0,N.H)({pageId:j.W.schedule_meeting_event,viewType:"Edit"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member-subgroups CLIENT_ID="${this.clientId}"></attendance-setup-form-member-subgroups>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};O([(0,c.Cb)({type:String}),$("design:type",String)],F.prototype,"email",void 0),O([(0,c.Cb)({type:Number}),$("design:type",Number)],F.prototype,"mId",void 0),O([(0,c.Cb)({type:Number}),$("design:type",Number)],F.prototype,"clientId",void 0),O([(0,c.Cb)({type:Boolean}),$("design:type",Boolean)],F.prototype,"_hasSetup",void 0),O([(0,c.Cb)({type:Boolean}),$("design:type",Boolean)],F.prototype,"_pageButtonAccess",void 0),F=O([(0,c.Mo)("attendance-setup-form-edit-member-subgroups"),$("design:paramtypes",[])],F)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,129,1109,6236,6069,214,7719,3901,1901,3712],(()=>(8087,e(e.s=8087)))),e.O())])));
//# sourceMappingURL=edit-member-subgroups.js.map