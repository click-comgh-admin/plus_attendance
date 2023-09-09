"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4742],{4173:(e,t,n)=>{n.d(t,{_:()=>a});const a=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},6637:(e,t,n)=>{n.d(t,{n:()=>d});var a=n(771),r=n(7270),i=n(596),s=n(3600);function d(e=null,t=""){return n=this,d=void 0,o=function*(){const n=(0,s.Ie)(),d=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,c=yield(0,r.d)(d,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function a(e){try{i(o.next(e))}catch(e){t(e)}}function r(e){try{i(o.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(a,r)}i((o=o.apply(n,d||[])).next())}));var n,d,c,o}},8993:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDays:()=>R}),n(3683),n(4657);var a=n(4108),r=n(5862),i=n(8393),s=(n(8693),n(9665)),d=n(8092),c=n(1302),o=n(7108),l=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),m=n(4672),u=(n(5866),n(1148)),h=n(4173),p=n(7149),y=n(6637),b=n(771),f=n(7270),v=n(596),g=n(3600),_=n(7824),w=n(7067),D=n(6455),M=n.n(D),I=n(8967),k=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{c(a.next(e))}catch(e){i(e)}}function d(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}c((a=a.apply(e,t||[])).next())}))};n(2150);var A,E,x=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{c(a.next(e))}catch(e){i(e)}}function d(e){try{c(a.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,d)}c((a=a.apply(e,t||[])).next())}))};let N=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__scheduleDays=[],this.__meetingMember=null,this.__memberDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDays(e){this.__memberDays=e,this.requestUpdate()}get _memberDays(){return this.__memberDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return O(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,m.O1)(),this.getMeetingMemberId(),yield this.getDaysOfWeek(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDay(),yield this.getAttendanceScheduleMemberDay()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._meetingMember?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?r.dy`${this.memberDay}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDay(){return null===this._memberDays?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDays?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._memberDays.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Member Meeting Day">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Member
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Day
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Date
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Date
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
                ${this.getMeetingAttendanceDays}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDays(){return r.dy`
      ${this._memberDays.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${""}
              ${this.getMemberDayOfWeek(e.dayId.id)}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h._)(e.dayId.startDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h._)(e.dayId.endDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDay}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Day</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Day!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-day">
                <div class="p-0 m-0" show-dayField="all">
                  <member-day-multiple-inputs-component .meetingDays="${this._scheduleDays}" 
                    .daysOfWeek="${this._daysOfWeek}" meetingMemberId="${this.meetingMemberId}"
                    meetingEventId="${this.meetingEventId}">
                  </member-day-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="${this.meetingMemberId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Day(s)" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}getMemberDayOfWeek(e){let t="-";return this._scheduleDays.forEach((n=>{e===n.id&&this._daysOfWeek.forEach((e=>{n.dayId===e.id&&(t=e.day)}))})),t}submitForm(e){return O(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-day-multiple-inputs-component").forEach((e=>O(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield(0,w.T)(t)}))))}))}deleteMemberMeetingAttendanceDay(e){return O(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return k(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day/"+e,a={};return M().fire({title:"Remove Member Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>k(this,void 0,void 0,(function*(){return yield(0,f.d)(n,{method:"DELETE",body:JSON.stringify(a),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new v.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,I.T)(e);M().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const a=new v.H("delete",n,!0);return a.postForm,a}})).catch((e=>{M().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!M().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const a=e.value;if(a instanceof Object){const e=a.response;t=String(e.message),n=a.response.success}M().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingMemberId(){let e=(0,m.Jx)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return O(this,void 0,void 0,(function*(){const e=yield(0,y.n)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDay(){return O(this,void 0,void 0,(function*(){const e=yield(0,_.E)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getAttendanceScheduleMemberDay(){return O(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,a=void 0,i=function*(){const n=(0,g.Ie)(),a=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-day"+(null===e?"":"/"+e)+t,r=yield(0,f.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new v.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new v.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function d(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,d)}c((i=i.apply(n,a||[])).next())}));var n,a,r,i}(null,"?memberId="+this.meetingMemberId+"&meetingEventId="+this.meetingEventId+"&dayId__meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push(new p.Ue):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>p.Ue.fromJson(e))));const n=[];n.push(...this._memberDays,...t),this._memberDays=n}))}getDaysOfWeek(){return O(this,void 0,void 0,(function*(){const e=yield(0,u.e)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return O(this,void 0,void 0,(function*(){const t=yield(0,u.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};N.styles=[r.iv`
   :host { display: block; }
  `],x([(0,i.Cb)({type:Number}),C("design:type",Number)],N.prototype,"CLIENT_ID",void 0),x([(0,i.Cb)({type:Number}),C("design:type",Number)],N.prototype,"startSearchPage",void 0),x([(0,i.Cb)({type:Array}),C("design:type",Array)],N.prototype,"_daysOfWeek",void 0),x([(0,i.Cb)({type:Array}),C("design:type","function"==typeof(A="undefined"!=typeof Array&&Array)?A:Object)],N.prototype,"_data",void 0),x([(0,i.Cb)({type:Object}),C("design:type",Object)],N.prototype,"urlQueryParams",void 0),x([(0,i.Cb)({type:Number}),C("design:type",Number)],N.prototype,"meetingMemberId",void 0),x([(0,i.Cb)({type:Number}),C("design:type",Number)],N.prototype,"meetingEventId",void 0),x([(0,i.IO)('[show-dayField="all"]'),C("design:type","function"==typeof(E="undefined"!=typeof Element&&Element)?E:Object)],N.prototype,"showDayFieldAllSelector",void 0),N=x([(0,i.Mo)("attendance-setup-form-edit-member-days-content"),C("design:paramtypes",[])],N);var S=function(e,t,n,a){var r,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,a);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let R=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,s.f)().then((()=>this._hasSetup=!0)),yield(0,a.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,a){function s(e){try{c(i.next(e))}catch(e){a(e)}}function d(e){try{c(i.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,d)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.OR)(o.W.schedule_meeting_event),!(0,c.H)({pageId:o.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-days-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-days-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};S([(0,i.Cb)({type:String}),$("design:type",String)],R.prototype,"email",void 0),S([(0,i.Cb)({type:Number}),$("design:type",Number)],R.prototype,"mId",void 0),S([(0,i.Cb)({type:Number}),$("design:type",Number)],R.prototype,"clientId",void 0),S([(0,i.Cb)({type:Number}),$("design:type",Number)],R.prototype,"meetingEventId",void 0),S([(0,i.Cb)({type:Boolean}),$("design:type",Boolean)],R.prototype,"_hasSetup",void 0),S([(0,i.Cb)({type:Boolean}),$("design:type",Boolean)],R.prototype,"_pageButtonAccess",void 0),R=S([(0,i.Mo)("attendance-setup-form-edit-member-days"),$("design:paramtypes",[])],R)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,7719,214,3901,1952,6680,3712],(()=>(8993,e(e.s=8993)))),e.O())])));
//# sourceMappingURL=edit-member-days.js.map