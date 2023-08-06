"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_generic_meeting_event_clocking_type_index_ts-src_addons_interfaces_memb-fc9f1e"],{96951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>o,getDateTime:()=>i});const o=(e="")=>{let t=new Date,n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate(),r=t.getHours(),c=t.getMinutes(),a=t.getSeconds(),s=n+"-"+o+"-"+i,l=r+":"+c+":"+a;return{dateTime:new Date(n,o,i,r,c,a),__string__:s+" "+l,__code__:n+o+i+r+c+a}},i=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},80101:(e,t,n)=>{n.r(t),n.d(t,{InstanceOfOrganizationMember:()=>a,MemberClockingAdditionalInfo_S:()=>s,MemberClockingInfoFull_S:()=>l});var o=n(22578),i=n(96246),r=n(18530),c=n(27325);const a=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function s(e,t){let n=null;return n=1===t?(0,i.MembershipUser_S)(e.memberInfo):r.Convert.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,phone:String(e.phone),email:String(e.email),facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.Date_I)(e.dateJoined),date:(0,o.Date_I)(e.date)}}function l(e){const t=(0,c.MemberClockingInfo_S)(e.attendance);return{attendance:t,additionalInfo:s(e.additionalInfo,t.accountType),lastSeen:(0,o.Date_I)(e.lastSeen),status:String(e.status)}}},45069:(e,t,n)=>{function o(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericMeetingEventClockingTypeInfo_S:()=>o})},33437:(e,t,n)=>{n.r(t),n.d(t,{GroupingsGroup_S:()=>i});var o=n(50267);function i(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,o.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.r(t),n.d(t,{GroupingsSubGroup_S:()=>i}),n(2892);var o=n(50267);function i(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,o.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},84707:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceCancelClocking:()=>u});var o=n(86455),i=n.n(o),r=n(48485),c=n(87270),a=n(14492),s=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,o={};return i().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},56232:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockIn:()=>u});var o=n(86455),i=n.n(o),r=n(48485),c=n(87270),a=n(14492),s=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,u=null===t?{}:{time:t};return i().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(o,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},68572:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockOut:()=>u});var o=n(86455),i=n.n(o),r=n(48485),c=n(87270),a=n(14492),s=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,u=null===t?{}:{time:t};return i().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(o,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},61184:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingEndBreak:()=>u});var o=n(86455),i=n.n(o),r=n(48485),c=n(87270),a=n(14492),s=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,u=null===t?{}:{time:t};return i().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(o,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},66719:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingStartBreak:()=>u});var o=n(86455),i=n.n(o),r=n(48485),c=n(87270),a=n(14492),s=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,u=null===t?{}:{time:t};return i().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(o,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new a.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},34843:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>a});var o=n(48485),i=n(87270),r=n(14492),c=n(33600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,c.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,s=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function o(e){try{r(l.next(e))}catch(e){t(e)}}function i(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,i)}r((l=l.apply(n,a||[])).next())}));var n,a,s,l}},14115:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMeetingEventClockingType:()=>a});var o=n(48485),i=n(87270),r=n(14492),c=n(33600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),a=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function r(e){try{c(s.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,r)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},47546:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirst:()=>l});var o=n(27325),i=n(80101),r=(n(38281),n(85862)),c=n(59662),a=(n(61984),n(32846),function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,i.MemberClockingInfoFull_S)(e)):(this.fullInfo=!1,this.clockingInfo=(0,o.MemberClockingInfo_S)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const o=e?n.attendance.clockingMethodName:t.clockingMethodName,c=e?n.lastSeen:null;return(e?(0,i.InstanceOfOrganizationMember)(n.additionalInfo.memberInfo):(0,i.InstanceOfOrganizationMember)(t.memberId))?r.html`<clocker-table-parts-first-organization .lastSeen="${c}" clockingMethodName="${o}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-organization>`:r.html`<clocker-table-parts-first-individual .lastSeen="${c}" clockingMethodName="${o}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-individual>`}return null}firstUpdated(){}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],a([(0,c.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"fullInfo",void 0),a([(0,c.property)({type:String}),s("design:type",String)],l.prototype,"clocking_info",void 0),a([(0,c.property)({type:String}),s("design:type",String)],l.prototype,"memberProfileBaseUrl",void 0),l=a([(0,c.customElement)("clocker-table-parts-first"),s("design:paramtypes",[])],l)},61984:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirstIndividual:()=>d});var o,i=n(67052),r=n(96951),c=(n(38281),n(85862)),a=n(59662),s=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends c.LitElement{constructor(){super(),this.clockingMethodName="???",this.lastSeen=null,this._memberData=null,this.memberProfileBaseUrl="/member/member-profile?view="}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=(0,i.base64Encode)(String(this._memberData.id),!0),t=c.html`<div class="text-center whitespace-nowrap">
      <span class="badge badge-light shadow p-2 m-1">
        <b>Last Seen</b>: ${(0,r.getDateTime)(this.lastSeen,{dateStyle:"medium",timeStyle:"short"})}
      </span>
    </div>`;return c.html`<div class="flex flex-col whitespace-normal justify-between content-between">
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
        ${null===this.lastSeen||void 0===this.lastSeen?c.nothing:t}
      </div>`}firstUpdated(){}createRenderRoot(){return this}};d.styles=[c.css`
   :host { display: block; }
  `],s([(0,a.property)({type:String}),l("design:type",String)],d.prototype,"clockingMethodName",void 0),s([(0,a.property)({type:Date}),l("design:type","function"==typeof(o="undefined"!=typeof Date&&Date)?o:Object)],d.prototype,"lastSeen",void 0),s([(0,a.property)({type:String}),l("design:type",String)],d.prototype,"memberProfileBaseUrl",void 0),d=s([(0,a.customElement)("clocker-table-parts-first-individual"),l("design:paramtypes",[])],d)},32846:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirstOrganization:()=>d});var o,i=n(67052),r=n(96951),c=(n(38281),n(85862)),a=n(59662),s=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends c.LitElement{constructor(){super(),this.clockingMethodName="???",this.lastSeen=null,this._memberData=null}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){(0,i.base64Encode)(String(this._memberData.id),!0);const e=c.html`<div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
        <b>Last Seen</b>: ${(0,r.getDateTime)(this.lastSeen,{dateStyle:"medium",timeStyle:"short"})}
        </span>
      </div>`;return c.html`<div class="flex flex-col whitespace-normal justify-between content-between">
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
        ${null===this.lastSeen||void 0===this.lastSeen?c.nothing:e}
      </div>`}firstUpdated(){}createRenderRoot(){return this}};d.styles=[c.css`
   :host { display: block; }
  `],s([(0,a.property)({type:String}),l("design:type",String)],d.prototype,"clockingMethodName",void 0),s([(0,a.property)({type:Date}),l("design:type","function"==typeof(o="undefined"!=typeof Date&&Date)?o:Object)],d.prototype,"lastSeen",void 0),d=s([(0,a.customElement)("clocker-table-parts-first-organization"),l("design:paramtypes",[])],d)},97601:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsSecond:()=>g,getClockingTimeInfo:()=>h,setClockingTimeInfo:()=>f});var o=n(96951),i=n(27325),r=n(80101),c=n(56232),a=n(66719),s=n(85862),l=n(59662),d=(n(16413),function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c}),u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};const f=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},h=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;if("clockingTime"in e)return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let g=class extends s.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.pageButtonAccess=!1}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback(),console.log({"this.pageButtonAccess":this.pageButtonAccess});const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,r.MemberClockingInfoFull_S)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.MemberClockingInfo_S)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const i=(0,o.getDateTime)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),r=e?n.attendance.inTime:t.inTime,c=null!==r?(0,o.getDateTime)(r,{dateStyle:"medium",timeStyle:"short"}):"--:--",a=e?n.attendance.id:t.id,l=e?n.attendance.inOrOut:t.inOrOut,d=e?n.attendance.startBreak:t.startBreak,u=null!==d?(0,o.getDateTime)(d,{dateStyle:"medium",timeStyle:"short"}):"--:--",p=new Date,f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=(e?n.attendance.date.toDateString():t.date.toDateString())===p.toDateString();return s.html`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?s.html`
            <input type="checkbox" multi-break-check-in="${a}" name="member_check_in_${a}"
              id="member_check_in_${a}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:s.nothing}
            <label for="member_check_in_${a}">@ ${i}</label>
          </div>
        </div>
        ${this.clocking?s.html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${a}" clock-user="in">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-success mx-1">${h?s.html`Today`:s.html`Post Clocking`}</span>
          ${l?s.html`
          <span class="badge badge-success bg-grow-early mx-1">Present</span>`:s.html`
          <span class="badge badge-danger mx-1">Not Clocked</span>
          `}
        </div>
        `:s.html`
          <div class="text-center flex justify-evenly whitespace-nowrap">
            <a href="tel://${n.additionalInfo.phone}">
              <mwc-icon-button class="bg-sunny-morning text-white" icon="call"></mwc-icon-button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+${n.additionalInfo.whatsapp}&amp;text=">
              <mwc-icon-button class="bg-grow-early text-white" icon="whatsapp"></mwc-icon-button>
            </a>
          </div>
        `}
        ${l&&null!==r?s.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${c}
          </span>
        </div>`:""}
        ${this.clocking?s.html`
          ${f?s.html`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${a}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `:""}
        `:s.nothing}
        ${null!==d?s.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break Start Time</b>: ${u}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=h();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}clockUser(){const e="clock-user";document.querySelectorAll("["+e+"]").forEach((t=>{"in"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.clockInUser(t,e)}))}))}clockInUser(e,t){return p(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,c.PATCH_AttendanceClockingClockIn)(t,this.clockingTimeValue):yield(0,c.PATCH_AttendanceClockingClockIn)(t)}}))}userBreak(){const e="user-break";document.querySelectorAll("["+e+"]").forEach((t=>{"start"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.startUserBreak(t,e)}))}))}startUserBreak(e,t){return p(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,a.PATCH_AttendanceClockingStartBreak)(t,this.clockingTimeValue):yield(0,a.PATCH_AttendanceClockingStartBreak)(t)}}))}createRenderRoot(){return this}};g.styles=[s.css`
   :host { display: block; }
  `],d([(0,l.property)({type:String}),u("design:type",String)],g.prototype,"clockingTimeValue",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"clocking",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"clockingTime",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"fullInfo",void 0),d([(0,l.property)({type:String}),u("design:type",String)],g.prototype,"clocking_info",void 0),d([(0,l.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"pageButtonAccess",void 0),g=d([(0,l.customElement)("clocker-table-parts-second"),u("design:paramtypes",[])],g)},21694:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsThird:()=>m});var o=n(67052),i=n(96951),r=n(27325),c=n(80101),a=n(84707),s=n(68572),l=n(61184),d=n(85862),u=n(59662),p=n(97601),f=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};let m=class extends d.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/clocking/excuse?clocking-id=",this.followUpBaseUrl="/clocking/follow-up?clocking-id=",this.pageButtonAccess=!1}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,c.MemberClockingInfoFull_S)(e)):(this.fullInfo=!1,this.clockingInfo=(0,r.MemberClockingInfo_S)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const r=(0,i.getDateTime)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),c=e?n.attendance.outTime:t.outTime,a=null!==c?(0,i.getDateTime)(c,{dateStyle:"medium",timeStyle:"short"}):"--:--",s=e?n.attendance.id:t.id,l=e?n.attendance.inOrOut:t.inOrOut,u=e?n.attendance.endBreak:t.endBreak,p=null!==u?(0,i.getDateTime)(u,{dateStyle:"medium",timeStyle:"short"}):"--:--",f=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,h=e?n.attendance.justification:t.justification,g=(0,o.base64Encode)(String(s),!0);return d.html`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?d.html`
            <input type="checkbox" multi-break-check-out="${s}" name="member_check_out_${s}"
              id="member_check_out_${s}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:d.nothing}
            <label for="member_check_out_${s}">@ ${r}</label>
          </div>
        </div>
        ${this.clocking?d.html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${s}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${s}"
            cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-warning">'X' to Cancel Attendance</span>
        </div>
        `:d.nothing}
        <div class="text-center whitespace-nowrap">
          ${""}
            ${null===h?d.nothing:d.html`<span class="badge badge-light shadow p-2 m-1">
              <b>Justification</b>: ${h}
            </span>`}
          <a href="${this.followUpBaseUrl}${g}" class="btn btn-primary btn-sm" target="_blank" type="button">Follow-Up</a>
        </div>
        ${l&&null!==c?d.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${a}
          </span>
        </div>`:""}
        ${this.clocking?d.html`
        ${f?d.html`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${s}" user-break="end"
            icon="close">
          </mwc-button>
        </div>
        `:""}
        `:d.nothing}
        ${null!==u?d.html`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${p}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,p.getClockingTimeInfo)();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>g(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));yield(0,a.PATCH_AttendanceCancelClocking)(t)}}))))}))}clockUser(){const e="clock-user";document.querySelectorAll("["+e+"]").forEach((t=>{"out"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.clockOutUser(t,e)}))}))}clockOutUser(e,t){return g(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,s.PATCH_AttendanceClockingClockOut)(t,this.clockingTimeValue):yield(0,s.PATCH_AttendanceClockingClockOut)(t)}}))}userBreak(){const e="user-break";document.querySelectorAll("["+e+"]").forEach((t=>{"end"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.endUserBreak(t,e)}))}))}endUserBreak(e,t){return g(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield(0,l.PATCH_AttendanceClockingEndBreak)(n,this.clockingTimeValue):yield(0,l.PATCH_AttendanceClockingEndBreak)(n)}}))}createRenderRoot(){return this}};m.styles=[d.css`
   :host { display: block; }
  `],f([(0,u.property)({type:Boolean}),h("design:type",Boolean)],m.prototype,"fullInfo",void 0),f([(0,u.property)({type:String}),h("design:type",String)],m.prototype,"clocking_info",void 0),f([(0,u.property)({type:Boolean}),h("design:type",Boolean)],m.prototype,"clocking",void 0),f([(0,u.property)({type:String}),h("design:type",String)],m.prototype,"clockingTimeValue",void 0),f([(0,u.property)({type:Boolean}),h("design:type",Boolean)],m.prototype,"clockingTime",void 0),f([(0,u.property)({type:String}),h("design:type",String)],m.prototype,"excuseBaseUrl",void 0),f([(0,u.property)({type:String}),h("design:type",String)],m.prototype,"followUpBaseUrl",void 0),f([(0,u.property)({type:Boolean}),h("design:type",Boolean)],m.prototype,"pageButtonAccess",void 0),m=f([(0,u.customElement)("clocker-table-parts-third"),h("design:paramtypes",[])],m)}}]);
//# sourceMappingURL=src_addons_interfaces_generic_meeting_event_clocking_type_index_ts-src_addons_interfaces_memb-fc9f1e.js.map