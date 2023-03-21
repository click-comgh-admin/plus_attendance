"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4748],{2651:(e,t,i)=>{i.r(t),i.d(t,{PdbAttendanceClockingClocker:()=>V});var n=i(9392),o=i(1936),l=i(5248),c=(i(9261),i(3313),i(6883),i(3683),i(4657),i(7725)),r=(i(3690),i(7052)),s=i(771),a=i(3600),d=i(4672),u=i(7553),m=i(2869),p=i(2368),g=(i(5517),i(72)),f=i(7477),h=i(6455),b=i.n(h),y=i(7270),v=i(596),k=i(8967),_=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function c(e){try{s(n.next(e))}catch(e){l(e)}}function r(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,r)}s((n=n.apply(e,t||[])).next())}))},C=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function c(e){try{s(n.next(e))}catch(e){l(e)}}function r(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,r)}s((n=n.apply(e,t||[])).next())}))};function w(e,t,i,n,o){return C(this,void 0,void 0,(function*(){const l=(0,a.Ie)();let c=0;o.forEach((e=>{e.name===i&&(c=e.id)}));const r=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/bulk-clocking/"+e,d={clockingType:c,clockingIds:n};return b().fire({title:`${t} multiple action?`,icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>C(this,void 0,void 0,(function*(){return yield(0,y.d)(r,{method:"PATCH",body:JSON.stringify(d),headers:{Authorization:"Token "+l.token}},!0).then((e=>{const t=new v.H("patch",e,!1),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,k.T)(e);b().showValidationMessage(`${t}`)}return t})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const i=e.value;if(i instanceof Object&&null!==i.response){const e=i.response;t=String(e.message)}i instanceof Object&&null!==i.response&&(b().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var S,x,$,B=i(4115),T=i(5069),A=i(2892),E=(i(3629),i(4843)),I=i(5458),O=i(3437),N=i(660),L=i(8786),F=i(9605),G=(i(7933),i(9987)),M=(i(5647),i(9665)),q=i(8092),U=i(1302),R=i(7108),D=function(e,t,i,n){var o,l=arguments.length,c=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(l<3?o(c):l>3?o(t,i,c):o(t,i))||c);return l>3&&c&&Object.defineProperty(t,i,c),c},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function c(e){try{s(n.next(e))}catch(e){l(e)}}function r(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,r)}s((n=n.apply(e,t||[])).next())}))};let V=class extends n.oi{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.datatablePathUrl="attendance/meeting-event/attendance",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.clockingTimeValue="",this.clockingTime=!1,this.meetingEventForToday=!1,this.__members=null,this._hasSetup=!1,this._pageButtonAccess=!1}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return P(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,M.f)().then((()=>this._hasSetup=!0)),this.getMeetingEventId();const t=(0,c.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new p.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,q.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,U.OR)(R.W.clocking),!(0,U.H)({pageId:R.W.clocking,viewType:"Both"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?n.dy`
        <div class="shadow bg-white p-2">
          <pdb-attendance-clocking-meeting-picker
            openContentBaseUrl="/clocking/clocker?meeting-event-id=">
          </pdb-attendance-clocking-meeting-picker>
        </div>
      `:n.dy`
        <div class="shadow bg-white p-2">
          <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
              filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2"/>
            <div class="my-2 flex flex-col items-end">
              <div class="col-md-6 col-lg-4 flex flex-col items-end">
                <h4 class="font-semibold my-2 capitalize">Override Clocking Time</h4>
                <switch-input class="capitalize" ?isSelected="${this.clockingTime}" name="clockingTimeSwitchAction"
                  label="Override Clocking Time"></switch-input>
              </div>
              <hr />
            </div>
            ${this.clockingTimeField}
            ${this.table}
          </div>
        </div>
      `}get clockingTimeField(){return this.clockingTime?n.dy`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-textfield name="setClockingTimeBtn" type="datetime-local" step="1" class="w-full" label="Select Clocking Time"
              value="${this.clockingTimeValue}" outlined required>
            </mwc-textfield><br>
            <mwc-button raised label="Set Clocking Time" @click="${this.setClockingTimeBtn}"></mwc-button>
          </div>
        </div>
      `:n.Ld}get resetClockingList(){return n.dy`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <mwc-button raised label="Refresh Clocking List" class="success" @click="${this.UpdateClockingList}"></mwc-button>
          </div>
        </div>
      `}setClockingTimeBtn(e){document.querySelectorAll('mwc-textfield[name="setClockingTimeBtn"]').forEach((e=>{this.clockingTimeValue=e.value}))}clockingTimeSwitchAction(){const e=this;document.querySelectorAll('[name="clockingTimeSwitchAction"]').forEach((t=>{t.addEventListener("click",(i=>{e.clockingTime=t.isSelected}))}))}firstUpdated(){this.filterBox=new p.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]}),this.clockingTimeSwitchAction(),setInterval((()=>(0,G.Y8)(this.clockingTime,this.clockingTimeValue)))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?(0,r.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,r.h)(String(this.meetingEventId),!0)}get filterForm(){let e=n.dy``;const t=(0,d.O1)(),i="filter_date",o="filter_gender",l="filter_name",c="filter_identity",r="filter_member_category",s="filter_group",a="filter_subgroup",u="filter_from_age",m="filter_to_age";let p=null,g=null,f=null,h=null,b=null,y=null,v=null,k=null,_=null;for(const e in t){let n=String(t[e]);if(n=""===n?null:n,e===i)if(null===n)p="";else{const e=new Date(n).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");p=[e[2],e[0],e[1]].join("-")}e===o&&(g=n),e===l&&(f=n),e===c&&(h=n),e===r&&(b=Number(n)),e===s&&(y=Number(n)),e===a&&(v=Number(n)),e===u&&(k=Number(n)),e===m&&(_=Number(n))}const C=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${l}" id="${l}" label="Search By Name" 
            value="${null===f?"":f}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,w=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick From Age" 
              value="${null===k?"":k}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${m}" id="${m}" label="Pick To Age" 
              value="${null===_?"":_}" class="mx-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,S=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${b}" 
            name="${r}" id="${r}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,x=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${i}" id="${i}"
            value="${p}" outlined required></mwc-textfield>
        </div>
      </div>`,$=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${o}" id="${o}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===g?n.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(g)===e.id?n.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,B=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${s}" id="${s}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,i=(0,I.C)(this.getGroup(t),n.dy`<span>Loading...</span>`);return null===y?n.dy`<mwc-list-item value="${t}">${i}</mwc-list-item>`:Number(y)===t?n.dy`<mwc-list-item value="${t}" selected>${i}</mwc-list-item>`:n.dy`<mwc-list-item value="${t}">${i}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,T=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${a}" id="${a}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,i=(0,I.C)(this.getSubGroup(t),n.dy`<span>Loading...</span>`);return null===v?n.dy`<mwc-list-item value="${t}">${i}</mwc-list-item>`:Number(v)===t?n.dy`<mwc-list-item value="${t}" selected>${i}</mwc-list-item>`:n.dy`<mwc-list-item value="${t}">${i}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,A=n.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${c}" id="${c}" label="Search By Member ID"
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=n.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${S} ${C} ${$} ${w} ${A} ${B} ${T} ${x}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" value="${this.meetingEventIdEnc}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let i=s.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";i+=this.urlQueryString;const o=this.__dataTable(i);let l={};const c=(0,a.Ie)();return l.Authorization="Token "+c.token,n.dy`
      ${this._pageButtonAccess?this.resetClockingList:n.Ld}
      <form>
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="outTime">Clock Out Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="inTime">Clock In Selected</button>
          </div>
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="endBreak">End Break For Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="startBreak">Start Break For Selected</button>
          </div>
        </div>
        <datatables-new .datatable="${o}" .ajaxHeader="${l}" .dt_body="${this.__tableBody}"
          .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
      </form>
    `}renderMemberInfo(e,t,i){const n=(0,f.e)(i),o=new Date;return this.meetingEventForToday=n.date.toDateString()===o.toDateString(),`<clocker-table-parts-first data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' ></clocker-table-parts-first>`}renderClockInInfo(e,t,i){return console.log({"--this._pageButtonAccess--":this._pageButtonAccess}),this._pageButtonAccess?`<clocker-table-parts-second clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(i).replaceAll("'","&rsquo;")}'\n          ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >\n        </clocker-table-parts-second>`:`<clocker-table-parts-second clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(i).replaceAll("'","&rsquo;")}'\n          ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >\n        </clocker-table-parts-second>`}renderClockOutInfo(e,t,i){return this._pageButtonAccess?`<clocker-table-parts-third clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(i).replaceAll("'","&rsquo;")}'\n        ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >\n      </clocker-table-parts-third>`:`<clocker-table-parts-third clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(i).replaceAll("'","&rsquo;")}'\n        ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >\n      </clocker-table-parts-third>`}multiBreakClocking(){const e="multi-break-clocking";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(i=>{i.preventDefault(),this.multiBreakClockingSubmit(t,e,i)}))}))}multiBreakClockingSubmit(e,t,i){return P(this,void 0,void 0,(function*(){i.preventDefault();const n=e.getAttribute(t),o=document.querySelectorAll('input[type="checkbox"][multi-break-check-in]'),l=document.querySelectorAll('input[type="checkbox"][multi-break-check-out]');let c=[],r=[];if(o.forEach((e=>{if(e.checked){const t=Number(e.getAttribute("multi-break-check-in"));c.includes(t)||c.push(t)}})),l.forEach((e=>{if(e.checked){const t=Number(e.getAttribute("multi-break-check-out"));r.includes(t)||r.push(t)}})),"inTime"===n||"startBreak"===n){let e="Initiate";"inTime"===n&&(e="Clock In"),"startBreak"===n&&(e="Start Break"),yield w(this.meetingEventId,e,n,c,this._clockingTypes)}else if("outTime"===n||"endBreak"===n){let e="Initiate";"outTime"===n&&(e="Clock Out"),"endBreak"===n&&(e="End Break"),yield w(this.meetingEventId,e,n,r,this._clockingTypes)}}))}UpdateClockingList(e){return P(this,void 0,void 0,(function*(){e.preventDefault();let t=new Date,i=t.toLocaleString("default",{year:"numeric"})+"-"+t.toLocaleString("default",{month:"2-digit"})+"-"+t.toLocaleString("default",{day:"2-digit"});const n=(0,d.O1)();for(const e in n){let t=String(n[e]);"filter_date"===e&&(i=t)}yield function(e,t){return _(this,void 0,void 0,(function*(){const i=(0,a.Ie)(),n=s.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/reset-clocking-list/"+e,o={time:t};return b().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return b().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,y.d)(n,{method:"POST",body:JSON.stringify(o),headers:{Authorization:"Token "+i.token}},!0,!1).then((e=>{const t=new v.H("post",e,!1),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,k.T)(e);b().showValidationMessage(`${t}`)}return t})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const i=e.value;if(i instanceof Object&&null!==i.response){const e=i.response;t=String(e.message)}i instanceof Object&&null!==i.response&&(b().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))})),allowOutsideClick:()=>!b().isLoading()})}))}(this.meetingEventId,i)}))}get urlQueryString(){const e=(0,d.O1)();let t={};for(const i in e){let n=String(e[i]);"filter_date"!==i&&"filter_gender"!==i&&"filter_name"!==i&&"filter_identity"!==i&&"filter_member_category"!==i&&"filter_group"!==i&&"filter_subgroup"!==i&&"filter_from_age"!==i&&"filter_to_age"!==i||(t[i]=n)}let i=(0,d.W3)(t);return 0===i.length?i:"&"+i}getGenders(){return P(this,void 0,void 0,(function*(){const e=yield(0,u.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,m.y)(e))));const i=[];i.push(...this._genders,...t),this._genders=i}))}getClockingType(){return P(this,void 0,void 0,(function*(){const e=yield(0,B.d)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,T.w)(e))));const i=[];i.push(...this._clockingTypes,...t),this._clockingTypes=i}))}getAttendanceScheduleGroup(){return P(this,void 0,void 0,(function*(){if(0===this.meetingEventId)return;const e=yield(0,E.S)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return P(this,void 0,void 0,(function*(){const t=yield(0,A.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,O.C)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return P(this,void 0,void 0,(function*(){if(0===this.meetingEventId)return;const e=yield(0,L.s)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return P(this,void 0,void 0,(function*(){const t=yield(0,F.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,N.P)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return P(this,void 0,void 0,(function*(){const e=yield(0,g.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,i,n)=>t.renderMemberInfo(e,i,n),orderable:!0},{data:"inTime",render:(e,i,n)=>t.renderClockInInfo(e,i,n),orderable:!0},{data:"outTime",render:(e,i,n)=>t.renderClockOutInfo(e,i,n),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return P(this,void 0,void 0,(function*(){e.aoData,t.multiBreakClocking()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};V.styles=[n.iv`
   :host { display: block; }
  `],D([(0,o.IO)('[filter-section-context="btn"]'),j("design:type","function"==typeof(S=void 0!==l.z&&l.z)?S:Object)],V.prototype,"filterSectionContextBtn",void 0),D([(0,o.IO)('[filter-section-context="container"]'),j("design:type","function"==typeof(x="undefined"!=typeof Element&&Element)?x:Object)],V.prototype,"filterSectionContextContainer",void 0),D([(0,o.IO)('[make-general-posts="submit_filter_form"]'),j("design:type","function"==typeof($="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?$:Object)],V.prototype,"filterSectionContextForm",void 0),D([(0,o.Cb)({type:Number}),j("design:type",Number)],V.prototype,"meetingEventId",void 0),D([(0,o.Cb)({type:String}),j("design:type",String)],V.prototype,"meetingEventIdEnc",void 0),D([(0,o.Cb)({type:String}),j("design:type",String)],V.prototype,"datatablePathUrl",void 0),D([(0,o.Cb)({type:Array}),j("design:type",Array)],V.prototype,"_genders",void 0),D([(0,o.Cb)({type:Array}),j("design:type",Array)],V.prototype,"_clockingTypes",void 0),D([(0,o.Cb)({type:Array}),j("design:type",Array)],V.prototype,"_memberCategories",void 0),D([(0,o.Cb)({type:Array}),j("design:type",Array)],V.prototype,"_scheduleGroups",void 0),D([(0,o.Cb)({type:Array}),j("design:type",Array)],V.prototype,"_scheduleSubGroups",void 0),D([(0,o.Cb)({type:Array}),j("design:type",Array)],V.prototype,"_activeBranchId",void 0),D([(0,o.Cb)({type:Number}),j("design:type",Number)],V.prototype,"_memberType",void 0),D([(0,o.Cb)({type:String}),j("design:type",String)],V.prototype,"clockingTimeValue",void 0),D([(0,o.Cb)({type:Boolean}),j("design:type",Boolean)],V.prototype,"clockingTime",void 0),D([(0,o.Cb)({type:Boolean}),j("design:type",Boolean)],V.prototype,"meetingEventForToday",void 0),D([(0,o.Cb)({type:Boolean}),j("design:type",Boolean)],V.prototype,"_hasSetup",void 0),D([(0,o.Cb)({type:Boolean}),j("design:type",Boolean)],V.prototype,"_pageButtonAccess",void 0),V=D([(0,o.Mo)("pdb-attendance-clocking-clocker"),j("design:paramtypes",[])],V)}},e=>(e.O(0,[5744,2185,9674,8820,1828,7708,1109,6236,6069,2585,751,3934,5104,6581,3712],(()=>(2651,e(e.s=2651)))),e.O())])));
//# sourceMappingURL=clocker.js.map