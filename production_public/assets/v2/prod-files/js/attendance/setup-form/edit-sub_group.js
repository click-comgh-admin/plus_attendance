"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6342],{8786:(e,t,n)=>{n.d(t,{s:()=>d});var s=n(771),r=n(7270),o=n(596),i=n(3600);function d(e=null,t=""){return n=this,d=void 0,l=function*(){const n=(0,i.Ie)(),d=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,c=yield(0,r.d)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,r)}o((l=l.apply(n,d||[])).next())}));var n,d,c,l}},8914:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditSubGroup:()=>F}),n(3683),n(4657);var s,r,o=n(4108),i=n(5862),d=n(8393),c=n(5458),l=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),u=n(8786),a=n(2218),p=n(4672),h=n(1257),b=(n(5866),n(6455)),m=n.n(b),g=n(771),f=n(7270),v=n(596),y=n(8967),_=n(3600),w=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function d(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((s=s.apply(e,t||[])).next())}))},S=n(9605),A=n(2892),G=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function d(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((s=s.apply(e,t||[])).next())}))};let k=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__subgroupUser=null,this.__schedule=null,this.__scheduleSubGroups=null,this._groups=[],this._subgroups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _subgroupUser(e){this.__subgroupUser=e,this.requestUpdate()}get _subgroupUser(){return this.__subgroupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSubGroups(e){this.__scheduleSubGroups=e,this.requestUpdate()}get _scheduleSubGroups(){return this.__scheduleSubGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,p.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSubGroup(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return i.dy`${this.schedule}`}get schedule(){return null===this._schedule?i.dy`
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
              ${(0,c.C)(this.getSubGroup(e.subGroupId),i.dy`<span>Loading...</span>`)}
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SubGroup</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SubGroup!</h3>
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
                      <mwc-button label="Add SubGroup" raised class="button" @click="${this.submitForm}">
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
      </mwc-list-item>`));return console.log({subgroups__:e}),i.dy`
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
    `}addSubGroupField(){const e=this.showSubGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSubGroupFieldAllSelector.children[e-1].getAttribute("subgroupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("subgroupField-id",String(t)),this.showSubGroupFieldAllSelector.append(n);const s=this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+t+'"]'),r=this.subgroupField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return w(this,void 0,void 0,(function*(){const e=(0,_.Ie)(),t=g.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup",n=document.querySelector('[make-general-posts="add-schedule-subgroup"]'),s=new FormData(n);return m().fire({title:"Add SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>w(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new v.H("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,y.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceSubGroup(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.h)(t)}))}getMeetingEventId(){let e=(0,p.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return C(this,void 0,void 0,(function*(){const e=yield(0,a.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSubGroup(){return C(this,void 0,void 0,(function*(){const e=yield(0,u.s)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleSubGroups=null===e?void 0:e.paginResponse}))}getGroups(){return C(this,void 0,void 0,(function*(){const e=yield(0,A.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._groups,...t),this._groups=n}))}getGroup(e){return C(this,void 0,void 0,(function*(){const t=yield(0,A.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}getSubGroups(){return C(this,void 0,void 0,(function*(){const e=yield(0,S.U)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._subgroups,...t),this._subgroups=n}))}getSubGroup(e){return C(this,void 0,void 0,(function*(){const t=yield(0,S.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};k.styles=[i.iv`
   :host { display: block; }
  `],G([(0,d.Cb)({type:Number}),x("design:type",Number)],k.prototype,"CLIENT_ID",void 0),G([(0,d.Cb)({type:Number}),x("design:type",Number)],k.prototype,"startSearchPage",void 0),G([(0,d.Cb)({type:Array}),x("design:type",Array)],k.prototype,"_groups",void 0),G([(0,d.Cb)({type:Array}),x("design:type",Array)],k.prototype,"_subgroups",void 0),G([(0,d.Cb)({type:Array}),x("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],k.prototype,"_data",void 0),G([(0,d.Cb)({type:Object}),x("design:type",Object)],k.prototype,"urlQueryParams",void 0),G([(0,d.Cb)({type:Number}),x("design:type",Number)],k.prototype,"meetingEventId",void 0),G([(0,d.IO)('[show-subgroupField="all"]'),x("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],k.prototype,"showSubGroupFieldAllSelector",void 0),k=G([(0,d.Mo)("attendance-setup-form-subgroup"),x("design:paramtypes",[])],k),n(8693);var E=n(9665),I=n(8092),N=n(1302),j=n(7108),O=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let F=class extends i.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,E.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function d(e){try{c(r.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,d)}c((r=r.apply(t,n||[])).next())}));var t,n,s,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,I.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.OR)(j.W.schedule_meeting_event),!(0,N.H)({pageId:j.W.schedule_meeting_event,viewType:"Edit"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-subgroup CLIENT_ID="${this.clientId}"></attendance-setup-form-subgroup>
      </div>
    `}firstUpsubgroupd(){}createRenderRoot(){return this}};O([(0,d.Cb)({type:String}),$("design:type",String)],F.prototype,"email",void 0),O([(0,d.Cb)({type:Number}),$("design:type",Number)],F.prototype,"mId",void 0),O([(0,d.Cb)({type:Number}),$("design:type",Number)],F.prototype,"clientId",void 0),O([(0,d.Cb)({type:Boolean}),$("design:type",Boolean)],F.prototype,"_hasSetup",void 0),O([(0,d.Cb)({type:Boolean}),$("design:type",Boolean)],F.prototype,"_pageButtonAccess",void 0),F=O([(0,d.Mo)("attendance-setup-form-edit-subgroup"),$("design:paramtypes",[])],F)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,129,1109,6236,6069,7719,214,3901,1901,3712],(()=>(8914,e(e.s=8914)))),e.O())])));
//# sourceMappingURL=edit-sub_group.js.map