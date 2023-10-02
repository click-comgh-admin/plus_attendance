/*! For license information please see 6581.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6581],{6951:(e,t,n)=>{n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},101:(e,t,n)=>{n.d(t,{ND:()=>s,X_:()=>l});var o=n(2578),i=n(8020),r=n(8530),c=n(7477);const s=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function a(e,t){let n=null;return n=1===t?(0,i.Z)(e.memberInfo):r.e.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,phone:String(e.phone),email:String(e.email),facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.G)(e.dateJoined),date:(0,o.G)(e.date)}}function l(e){const t=(0,c.e)(e.attendance);return{attendance:t,additionalInfo:a(e.additionalInfo,t.accountType),lastSeen:(0,o.G)(e.lastSeen),status:String(e.status)}}},5069:(e,t,n)=>{function o(e){return{id:Number(e.id),name:e.name}}n.d(t,{w:()=>o})},3437:(e,t,n)=>{n.d(t,{C:()=>i});var o=n(267);function i(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,o.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.d(t,{P:()=>i}),n(2892);var o=n(267);function i(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,o.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},4843:(e,t,n)=>{n.d(t,{S:()=>s});var o=n(771),i=n(7270),r=n(596),c=n(3600);function s(e=null,t=""){return n=this,s=void 0,l=function*(){const n=(0,c.Ie)(),s=o.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,a=yield(0,i.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{r(l.next(e))}catch(e){t(e)}}function i(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}r((l=l.apply(n,s||[])).next())}));var n,s,a,l}},8786:(e,t,n)=>{n.d(t,{s:()=>s});var o=n(771),i=n(7270),r=n(596),c=n(3600);function s(e=null,t=""){return n=this,s=void 0,l=function*(){const n=(0,c.Ie)(),s=o.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,a=yield(0,i.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{r(l.next(e))}catch(e){t(e)}}function i(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}r((l=l.apply(n,s||[])).next())}));var n,s,a,l}},4115:(e,t,n)=>{n.d(t,{d:()=>s});var o=n(771),i=n(7270),r=n(596),c=n(3600);function s(e=null){return t=this,n=void 0,a=function*(){const t=(0,c.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),s=yield(0,i.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function r(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,r)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a}},7933:(e,t,n)=>{var o,i=n(7477),r=n(101),c=(n(1163),n(5862)),s=n(8393),a=n(7052),l=n(6951),d=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=class extends c.oi{constructor(){super(),this.clockingMethodName="???",this.lastSeen=null,this._memberData=null,this.memberProfileBaseUrl="/member/member-profile?view="}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=(0,a.h)(String(this._memberData.id),!0),t=c.dy`<div class="text-center whitespace-nowrap">
      <span class="badge badge-light shadow p-2 m-1">
        <b>Last Seen</b>: ${(0,l.F)(this.lastSeen,{dateStyle:"medium",timeStyle:"short"})}
      </span>
    </div>`;return c.dy`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${e}" type="member"
            url="${this._memberData.profilePicture}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.firstname} ${this._memberData.middlename} ${this._memberData.surname}
          </span>
        </div>
        ${null===this.lastSeen||void 0===this.lastSeen?c.Ld:t}
      </div>`}firstUpdated(){}createRenderRoot(){return this}};f.styles=[c.iv`
   :host { display: block; }
  `],d([(0,s.Cb)({type:String}),u("design:type",String)],f.prototype,"clockingMethodName",void 0),d([(0,s.Cb)({type:Date}),u("design:type","function"==typeof(o="undefined"!=typeof Date&&Date)?o:Object)],f.prototype,"lastSeen",void 0),d([(0,s.Cb)({type:String}),u("design:type",String)],f.prototype,"memberProfileBaseUrl",void 0),f=d([(0,s.Mo)("clocker-table-parts-first-individual"),u("design:paramtypes",[])],f);var h,p=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends c.oi{constructor(){super(),this.clockingMethodName="???",this.lastSeen=null,this._memberData=null}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){(0,a.h)(String(this._memberData.id),!0);const e=c.dy`<div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
        <b>Last Seen</b>: ${(0,l.F)(this.lastSeen,{dateStyle:"medium",timeStyle:"short"})}
        </span>
      </div>`;return c.dy`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded type="member"
            url="${this._memberData.logo}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.organizationName}
          </span>
        </div>
        ${null===this.lastSeen||void 0===this.lastSeen?c.Ld:e}
      </div>`}firstUpdated(){}createRenderRoot(){return this}};m.styles=[c.iv`
   :host { display: block; }
  `],p([(0,s.Cb)({type:String}),g("design:type",String)],m.prototype,"clockingMethodName",void 0),p([(0,s.Cb)({type:Date}),g("design:type","function"==typeof(h="undefined"!=typeof Date&&Date)?h:Object)],m.prototype,"lastSeen",void 0),m=p([(0,s.Mo)("clocker-table-parts-first-organization"),g("design:paramtypes",[])],m);var b=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let k=class extends c.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,r.X_)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const o=e?n.attendance.clockingMethodName:t.clockingMethodName,i=e?n.lastSeen:null;return(e?(0,r.ND)(n.additionalInfo.memberInfo):(0,r.ND)(t.memberId))?c.dy`<clocker-table-parts-first-organization .lastSeen="${i}" clockingMethodName="${o}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-organization>`:c.dy`<clocker-table-parts-first-individual .lastSeen="${i}" clockingMethodName="${o}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-individual>`}return null}firstUpdated(){}createRenderRoot(){return this}};k.styles=[c.iv`
   :host { display: block; }
  `],b([(0,s.Cb)({type:Boolean}),y("design:type",Boolean)],k.prototype,"fullInfo",void 0),b([(0,s.Cb)({type:String}),y("design:type",String)],k.prototype,"clocking_info",void 0),b([(0,s.Cb)({type:String}),y("design:type",String)],k.prototype,"memberProfileBaseUrl",void 0),k=b([(0,s.Mo)("clocker-table-parts-first"),y("design:paramtypes",[])],k)},9987:(e,t,n)=>{n.d(t,{GJ:()=>_,Y8:()=>C});var o=n(6951),i=n(7477),r=n(101),c=n(6455),s=n.n(c),a=n(771),l=n(7270),d=n(596),u=n(8967),f=n(3600),h=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};function p(e,t=null){return h(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,i=null===t?{}:{time:t};return s().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>h(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var g=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};function m(e,t=null){return g(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),o=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,i=null===t?{}:{time:t};return s().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,l.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new d.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var b=n(5862),y=n(8393),k=(n(934),function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c}),v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};const C=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},_=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;if("clockingTime"in e)return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let S=class extends b.oi{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.pageButtonAccess=!1}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback(),console.log({"this.pageButtonAccess":this.pageButtonAccess});const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,r.X_)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const i=(0,o.F)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),r=e?n.attendance.inTime:t.inTime,c=null!==r?(0,o.F)(r,{dateStyle:"medium",timeStyle:"short"}):"--:--",s=e?n.attendance.id:t.id,a=e?n.attendance.inOrOut:t.inOrOut,l=e?n.attendance.startBreak:t.startBreak,d=null!==l?(0,o.F)(l,{dateStyle:"medium",timeStyle:"short"}):"--:--",u=new Date,f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=(e?n.attendance.date.toDateString():t.date.toDateString())===u.toDateString();return b.dy`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?b.dy`
            <input type="checkbox" multi-break-check-in="${s}" name="member_check_in_${s}"
              id="member_check_in_${s}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:b.Ld}
            <label for="member_check_in_${s}">@ ${i}</label>
          </div>
        </div>
        ${this.clocking?b.dy`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${s}" clock-user="in">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-success mx-1">${h?b.dy`Today`:b.dy`Post Clocking`}</span>
          ${a?b.dy`
          <span class="badge badge-success bg-grow-early mx-1">Present</span>`:b.dy`
          <span class="badge badge-danger mx-1">Not Clocked</span>
          `}
        </div>
        `:b.dy`
          <div class="text-center flex justify-evenly whitespace-nowrap">
            <a href="tel://${n.additionalInfo.phone}">
              <mwc-icon-button class="bg-sunny-morning text-white" icon="call"></mwc-icon-button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+${n.additionalInfo.whatsapp}&amp;text=">
              <mwc-icon-button class="bg-grow-early text-white" icon="whatsapp"></mwc-icon-button>
            </a>
          </div>
        `}
        ${a&&null!==r?b.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${c}
          </span>
        </div>`:""}
        ${this.clocking?b.dy`
          ${f?b.dy`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${s}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `:""}
        `:b.Ld}
        ${null!==l?b.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break Start Time</b>: ${d}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=_();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}clockUser(){const e="clock-user";document.querySelectorAll("["+e+"]").forEach((t=>{"in"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.clockInUser(t,e)}))}))}clockInUser(e,t){return w(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield p(t,this.clockingTimeValue):yield p(t)}}))}userBreak(){const e="user-break";document.querySelectorAll("["+e+"]").forEach((t=>{"start"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.startUserBreak(t,e)}))}))}startUserBreak(e,t){return w(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield m(t,this.clockingTimeValue):yield m(t)}}))}createRenderRoot(){return this}};S.styles=[b.iv`
   :host { display: block; }
  `],k([(0,y.Cb)({type:String}),v("design:type",String)],S.prototype,"clockingTimeValue",void 0),k([(0,y.Cb)({type:Boolean}),v("design:type",Boolean)],S.prototype,"clocking",void 0),k([(0,y.Cb)({type:Boolean}),v("design:type",Boolean)],S.prototype,"clockingTime",void 0),k([(0,y.Cb)({type:Boolean}),v("design:type",Boolean)],S.prototype,"fullInfo",void 0),k([(0,y.Cb)({type:String}),v("design:type",String)],S.prototype,"clocking_info",void 0),k([(0,y.Cb)({type:Boolean}),v("design:type",Boolean)],S.prototype,"pageButtonAccess",void 0),S=k([(0,y.Mo)("clocker-table-parts-second"),v("design:paramtypes",[])],S)},5647:(e,t,n)=>{var o=n(7052),i=n(6951),r=n(7477),c=n(101),s=n(6455),a=n.n(s),l=n(771),d=n(7270),u=n(596),f=n(8967),h=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))},g=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};function m(e,t=null){return g(this,void 0,void 0,(function*(){const n=(0,h.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,i=null===t?{}:{time:t};return a().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var b=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};function y(e,t=null){return b(this,void 0,void 0,(function*(){const n=(0,h.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,i=null===t?{}:{time:t};return a().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}var k=n(5862),v=n(8393),w=n(9987),C=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};let B=class extends k.oi{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/clocking/excuse?clocking-id=",this.followUpBaseUrl="/clocking/follow-up?clocking-id=",this.pageButtonAccess=!1}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,c.X_)(e)):(this.fullInfo=!1,this.clockingInfo=(0,r.e)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const r=(0,i.F)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),c=e?n.attendance.outTime:t.outTime,s=null!==c?(0,i.F)(c,{dateStyle:"medium",timeStyle:"short"}):"--:--",a=e?n.attendance.id:t.id,l=e?n.attendance.inOrOut:t.inOrOut,d=e?n.attendance.endBreak:t.endBreak,u=null!==d?(0,i.F)(d,{dateStyle:"medium",timeStyle:"short"}):"--:--",f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=e?n.attendance.justification:t.justification,p=(0,o.h)(String(a),!0);return k.dy`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?k.dy`
            <input type="checkbox" multi-break-check-out="${a}" name="member_check_out_${a}"
              id="member_check_out_${a}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:k.Ld}
            <label for="member_check_out_${a}">@ ${r}</label>
          </div>
        </div>
        ${this.clocking?k.dy`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${a}"
            cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-warning">'X' to Cancel Attendance</span>
        </div>
        `:k.Ld}
        <div class="text-center whitespace-nowrap">
          ${""}
            ${null===h?k.Ld:k.dy`<span class="badge badge-light shadow p-2 m-1">
              <b>Justification</b>: ${h}
            </span>`}
          <a href="${this.followUpBaseUrl}${p}" class="btn btn-primary btn-sm" target="_blank" type="button">Follow-Up</a>
        </div>
        ${l&&null!==c?k.dy`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${s}
          </span>
        </div>`:""}
        ${this.clocking?k.dy`
        ${f?k.dy`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${a}" user-break="end"
            icon="close">
          </mwc-button>
        </div>
        `:""}
        `:k.Ld}
        ${null!==d?k.dy`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${u}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,w.GJ)();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>S(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));yield function(e){return p(this,void 0,void 0,(function*(){const t=(0,h.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,o={};return a().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>p(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new u.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,f.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(a().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}(t)}}))))}))}clockUser(){const e="clock-user";document.querySelectorAll("["+e+"]").forEach((t=>{"out"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.clockOutUser(t,e)}))}))}clockOutUser(e,t){return S(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield m(t,this.clockingTimeValue):yield m(t)}}))}userBreak(){const e="user-break";document.querySelectorAll("["+e+"]").forEach((t=>{"end"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.endUserBreak(t,e)}))}))}endUserBreak(e,t){return S(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield y(n,this.clockingTimeValue):yield y(n)}}))}createRenderRoot(){return this}};B.styles=[k.iv`
   :host { display: block; }
  `],C([(0,v.Cb)({type:Boolean}),_("design:type",Boolean)],B.prototype,"fullInfo",void 0),C([(0,v.Cb)({type:String}),_("design:type",String)],B.prototype,"clocking_info",void 0),C([(0,v.Cb)({type:Boolean}),_("design:type",Boolean)],B.prototype,"clocking",void 0),C([(0,v.Cb)({type:String}),_("design:type",String)],B.prototype,"clockingTimeValue",void 0),C([(0,v.Cb)({type:Boolean}),_("design:type",Boolean)],B.prototype,"clockingTime",void 0),C([(0,v.Cb)({type:String}),_("design:type",String)],B.prototype,"excuseBaseUrl",void 0),C([(0,v.Cb)({type:String}),_("design:type",String)],B.prototype,"followUpBaseUrl",void 0),C([(0,v.Cb)({type:Boolean}),_("design:type",Boolean)],B.prototype,"pageButtonAccess",void 0),B=C([(0,v.Mo)("clocker-table-parts-third"),_("design:paramtypes",[])],B)},5458:(e,t,n)=>{n.d(t,{C:()=>m});var o=n(3692),i=n(4232),r=n(875);const c=(e,t)=>{var n,o;const i=e._$AN;if(void 0===i)return!1;for(const e of i)null===(o=(n=e)._$AO)||void 0===o||o.call(n,t,!1),c(e,t);return!0},s=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},a=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),u(t)}};function l(e){void 0!==this._$AN?(s(this),this._$AM=e,a(this)):this._$AM=e}function d(e,t=!1,n=0){const o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=n;e<o.length;e++)c(o[e],!1),s(o[e]);else null!=o&&(c(o,!1),s(o));else c(this,e)}const u=e=>{var t,n,o,i;e.type==r.pX.CHILD&&(null!==(t=(o=e)._$AP)&&void 0!==t||(o._$AP=d),null!==(n=(i=e)._$AQ)&&void 0!==n||(i._$AQ=l))};class f extends r.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),a(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),t&&(c(this,e),s(this))}setValue(e){if((0,i.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class h{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class p{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;null!==(e=this.Z)&&void 0!==e||(this.Z=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Z=this.q=void 0}}const g=e=>!(0,i.pt)(e)&&"function"==typeof e.then,m=(0,r.XM)(class extends f{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new h(this),this._$CX=new p}render(...e){var t;return null!==(t=e.find((e=>!g(e))))&&void 0!==t?t:o.Jb}update(e,t){const n=this._$Cyt;let i=n.length;this._$Cyt=t;const r=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!g(o))return this._$Cwt=e,o;e<i&&o===n[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(o).then((async e=>{for(;c.get();)await c.get();const t=r.deref();if(void 0!==t){const n=t._$Cyt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}})))}return o.Jb}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}})}}]);
//# sourceMappingURL=6581.js.map