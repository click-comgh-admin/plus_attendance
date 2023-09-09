"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2829],{4173:(e,t,n)=>{n.d(t,{_:()=>r});const r=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},6637:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(771),i=n(7270),a=n(596),s=n(3600);function o(e=null,t=""){return n=this,o=void 0,c=function*(){const n=(0,s.Ie)(),o=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,d=yield(0,i.d)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(c.next(e))}catch(e){t(e)}}function i(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,i)}a((c=c.apply(n,o||[])).next())}));var n,o,d,c}},1551:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMemberDates:()=>S}),n(3683),n(4657);var r,i=n(4108),a=n(5862),s=n(8393),o=(n(8693),n(9665)),d=n(8092),c=n(1302),l=n(7108),m=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),u=n(4672),h=(n(5866),n(4173)),p=n(6637),b=(n(254),n(8322)),f=n(8698),v=n(3930),g=n(6455),y=n.n(g),_=n(771),w=n(7270),M=n(596),D=n(8967),I=n(3600),x=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{d(r.next(e))}catch(e){a(e)}}function o(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}d((r=r.apply(e,t||[])).next())}))},A=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{d(r.next(e))}catch(e){a(e)}}function o(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}d((r=r.apply(e,t||[])).next())}))};let E=class extends a.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dateUser=null,this.__scheduleDates=[],this.__meetingMember=null,this.__memberDates=[],this._data=[],this.urlQueryParams=void 0,this.meetingMemberId=0,this.meetingEventId=0}set _dateUser(e){this.__dateUser=e,this.requestUpdate()}get _dateUser(){return this.__dateUser}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}set _meetingMember(e){this.__meetingMember=e,this.requestUpdate()}get _meetingMember(){return this.__meetingMember}set _memberDates(e){this.__memberDates=e,this.requestUpdate()}get _memberDates(){return this.__memberDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingMemberId(),yield this.getAttendanceScheduleMember(),yield this.getAttendanceScheduleDate(),yield this.getAttendanceScheduleMemberDate()}))}disconnectedCallback(){}render(){return a.dy`${this.schedule}`}get schedule(){return null===this._meetingMember?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._meetingMember?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._meetingMember.success?a.dy`${this.memberDate}`:a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `}get memberDate(){return null===this._memberDates?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberDates?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.dy`${this.table}`}get table(){return this._memberDates.length>0?a.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Member Meeting Date">
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
                        Meeting Date
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
      `:a.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}getMemberName(e){var t;if(null!==e){if(1===e.accountType){const n=e;return`${n.firstname} ${null!==(t=n.middlename)&&void 0!==t?t:""} ${n.surname}`}return e.organizationName}}get getMeetingAttendanceDates(){return a.dy`
      ${this._memberDates.map(((e,t)=>a.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(e.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,h._)(e.dateId.date,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteMemberMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return a.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-date">
                <div class="p-0 m-0" show-dateField="all">
                  <member-date-multiple-inputs-component .meetingDates="${this._scheduleDates}" 
                    meetingMemberId="${this.meetingMemberId}"
                    meetingEventId="${this.meetingEventId}">
                  </member-date-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="${this.meetingMemberId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Date(s)" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new m.T(e)}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("member-date-multiple-inputs-component").forEach((e=>C(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDateObjects;yield(0,v.u)(t)}))))}))}deleteMemberMeetingAttendanceDate(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return x(this,void 0,void 0,(function*(){const t=(0,I.Ie)(),n=_.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date/"+e,r={};return y().fire({title:"Remove Member Date?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>x(this,void 0,void 0,(function*(){return yield(0,w.d)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new M.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,D.T)(e);y().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new M.H("delete",n,!0);return r.postForm,r}})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}y().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingMemberId(){let e=(0,u.Jx)("member-id"),t=null!==e?Number(e):null;this.meetingMemberId=Number.isNaN(t)?null:t}getAttendanceScheduleMember(){return C(this,void 0,void 0,(function*(){const e=yield(0,p.n)(this.meetingMemberId);null===e?this._meetingMember=void 0:(this._meetingMember=e.response,this.meetingEventId=Array.isArray(this._meetingMember.data)?this._meetingMember.data[0].meetingEventId.id:this._meetingMember.data.meetingEventId.id)}))}getAttendanceScheduleDate(){return C(this,void 0,void 0,(function*(){const e=yield(0,f.R)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,date:new Date}):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results);const n=[];n.push(...this._scheduleDates,...t),this._scheduleDates=n}))}getAttendanceScheduleMemberDate(){return C(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,r=void 0,a=function*(){const n=(0,I.Ie)(),r=_.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member-date"+(null===e?"":"/"+e)+t,i=yield(0,w.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new M.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new M.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function s(e){try{d(a.next(e))}catch(e){t(e)}}function o(e){try{d(a.throw(e))}catch(e){t(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,o)}d((a=a.apply(n,r||[])).next())}));var n,r,i,a}(null,"?memberId="+this.meetingMemberId+"&meetingEventId="+this.meetingEventId+"&dayId__meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push(new b.ks):e.paginResponse.count>0&&"results"in e.paginResponse&&(t=e.paginResponse.results.map((e=>b.ks.fromJson(e))));const n=[];n.push(...this._memberDates,...t),this._memberDates=n}))}createRenderRoot(){return this}};E.styles=[a.iv`
   :host { display: block; }
  `],A([(0,s.Cb)({type:Number}),k("design:type",Number)],E.prototype,"CLIENT_ID",void 0),A([(0,s.Cb)({type:Number}),k("design:type",Number)],E.prototype,"startSearchPage",void 0),A([(0,s.Cb)({type:Array}),k("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],E.prototype,"_data",void 0),A([(0,s.Cb)({type:Object}),k("design:type",Object)],E.prototype,"urlQueryParams",void 0),A([(0,s.Cb)({type:Number}),k("design:type",Number)],E.prototype,"meetingMemberId",void 0),A([(0,s.Cb)({type:Number}),k("design:type",Number)],E.prototype,"meetingEventId",void 0),E=A([(0,s.Mo)("attendance-setup-form-edit-member-dates-content"),k("design:paramtypes",[])],E);var N=function(e,t,n,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,n,s):i(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let S=class extends a.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,a=function*(){e.connectedCallback.call(this),(0,o.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{d(a.next(e))}catch(e){i(e)}}function o(e){try{d(a.throw(e))}catch(e){i(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,o)}d((a=a.apply(t,n||[])).next())}));var t,n,r,a}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.H)())||void 0===e?void 0:e.expiration_date.expired)return a.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.OR)(l.W.schedule_meeting_event),!(0,c.H)({pageId:l.W.schedule_meeting_event,viewType:"Edit"},!1))return a.dy`<no-page-entry-component></no-page-entry-component>`}return a.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-edit-member-dates-content CLIENT_ID="${this.clientId}">
        </attendance-setup-form-edit-member-dates-content>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};N([(0,s.Cb)({type:String}),R("design:type",String)],S.prototype,"email",void 0),N([(0,s.Cb)({type:Number}),R("design:type",Number)],S.prototype,"mId",void 0),N([(0,s.Cb)({type:Number}),R("design:type",Number)],S.prototype,"clientId",void 0),N([(0,s.Cb)({type:Number}),R("design:type",Number)],S.prototype,"meetingEventId",void 0),N([(0,s.Cb)({type:Boolean}),R("design:type",Boolean)],S.prototype,"_hasSetup",void 0),N([(0,s.Cb)({type:Boolean}),R("design:type",Boolean)],S.prototype,"_pageButtonAccess",void 0),S=N([(0,s.Mo)("attendance-setup-form-edit-member-dates"),R("design:paramtypes",[])],S)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,7719,214,3901,1952,2617,3712],(()=>(1551,e(e.s=1551)))),e.O())])));
//# sourceMappingURL=edit-member-dates.js.map