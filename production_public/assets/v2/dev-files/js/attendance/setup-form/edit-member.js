"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-member"],{5501:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>o});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},s=e=>new URLSearchParams(window.location.search).getAll(e),o=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},2486:(e,t,n)=>{n.r(t),n.d(t,{Boolean_I:()=>r});const r=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e}},1801:(e,t,n)=>{n.r(t),n.d(t,{Constituency_S:()=>s,_Constituency_D:()=>o});var r=n(6909),i=n(7202);function s(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),districtId:"districtId"in e?(0,r.District_S)(e.districtId):(0,r._District_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,i._Region_D)(),districtId:(0,r._District_D)(),location:"-"}}},9492:(e,t,n)=>{function r(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function i(){return{id:0,name:"-",short:"-",code:"-"}}n.r(t),n.d(t,{Country_S:()=>r,_Country_D:()=>i})},6909:(e,t,n)=>{n.r(t),n.d(t,{District_S:()=>i,_District_D:()=>s});var r=n(7202);function i(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,r._Region_D)(),location:"-"}}},8769:(e,t,n)=>{n.r(t),n.d(t,{ElectoralArea_S:()=>s,_ElectoralArea_D:()=>o});var r=n(6909),i=n(7202);function s(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),districtId:"districtId"in e?(0,r.District_S)(e.districtId):(0,r._District_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,i._Region_D)(),districtId:(0,r._District_D)(),location:"-"}}},7202:(e,t,n)=>{function r(e){return{id:Number(e.id),location:String(e.location)}}function i(){return{id:0,location:"-"}}n.r(t),n.d(t,{Region_S:()=>r,_Region_D:()=>i})},6246:(e,t,n)=>{n.r(t),n.d(t,{MembershipUser_S:()=>d});var r=n(2486),i=n(1801),s=n(9492),o=n(6909),l=n(8769),a=n(7202);function c(e,t=""){return String(null===e?t:e)}function d(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:c(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:c(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),editable:(0,r.Boolean_I)(e.editable),profileResume:String(e.profileResume),profileIdentification:String(e.profileIdentification),archived:(0,r.Boolean_I)(e.archived),identification:String(e.identification),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,s.Country_S)(e.countryInfo):(0,s._Country_D)(),regionInfo:"regionInfo"in e?(0,a.Region_S)(e.regionInfo):(0,a._Region_D)(),districtInfo:"districtInfo"in e?(0,o.District_S)(e.districtInfo):(0,o._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,i.Constituency_S)(e.constituencyInfo):(0,i._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,l.ElectoralArea_S)(e.electoralareaInfo):(0,l._ElectoralArea_D)()}}},8304:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleMember:()=>u});var r=n(6455),i=n.n(r),s=n(8485),o=n(7270),l=n(4492),a=n(8967),c=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,r={};return i().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6637:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleMember:()=>l});var r=n(8485),i=n(7270),s=n(4492),o=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{s(c.next(e))}catch(e){t(e)}}function i(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,i)}s((c=c.apply(n,l||[])).next())}));var n,l,a,c}},3512:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleMember:()=>u});var r=n(6455),i=n.n(r),s=n(8485),o=n(7270),l=n(4492),a=n(8967),c=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",n=document.querySelector('[make-general-posts="add-schedule-member"]'),r=new FormData(n);return i().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6656:(e,t,n)=>{n.r(t),n.d(t,{GET_MembershipUsers:()=>l});var r=n(8485),i=n(7270),s=n(4492),o=n(3600);function l(e=null,t="",n=!1){return l=this,a=void 0,d=function*(){const l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,c=(0,o.getUserLoginInfoCookie)(),d=n?a:l,u=yield(0,i.http)(d,{method:"GET",headers:{Authorization:"Token "+c.token}},!0);try{return new s.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{i(d.next(e))}catch(e){t(e)}}function r(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(n,r)}i((d=d.apply(l,a||[])).next())}));var l,a,c,d}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>a});var r=n(5862),i=n(9662),s=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((r=r.apply(e,t||[])).next())}))};let a=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?r.nothing:r.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,i.property)({type:Number}),o("design:type",Number)],a.prototype,"index",void 0),s([(0,i.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"no_delete",void 0),s([(0,i.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"single",void 0),s([(0,i.property)({type:String}),o("design:type",String)],a.prototype,"_single",void 0),a=s([(0,i.customElement)("multiple-widgets"),o("design:paramtypes",[])],a)},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var r=n(5862),i=n(9662),s=(n(9975),n(6788),function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return r.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?r.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:r.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[r.css`
      :host {
        display: block;
      }
    `],s([(0,i.property)({type:String}),o("design:type",String)],l.prototype,"name",void 0),s([(0,i.property)({type:String}),o("design:type",String)],l.prototype,"label",void 0),s([(0,i.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,i.property)({type:String}),o("design:type",String)],l.prototype,"value",void 0),s([(0,i.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,i.customElement)("switch-input")],l)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var r=n(5862),i=n(9662),s=(n(2715),n(8485)),o=n(4672),l=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return r.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,o.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],l([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"meetingEventId",void 0),c=l([(0,i.customElement)("attendance-setup-form-edit-links"),a("design:paramtypes",[])],c)},6692:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>m}),n(3076),n(3683),n(4657);var r=n(4108),i=n(5862),s=n(9662),o=(n(6945),n(8693),n(7712)),l=n(1354),a=n(1302),c=n(7108),d=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,o.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{a(s.next(e))}catch(e){r(e)}}function l(e){try{a(s.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,l)}a((s=s.apply(t,n||[])).next())}));var t,n,i,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,a.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,a.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};d([(0,s.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=d([(0,s.customElement)("attendance-setup-form-edit-member"),u("design:paramtypes",[])],m)},6945:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormMember:()=>S}),n(5501);var r,i,s=n(5862),o=n(9662),l=n(8881),a=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),c=n(6637),d=n(2218),u=n(4672),m=n(8304),h=(n(5866),n(3512)),p=n(6246),f=n(6656),b=n(8485),g=n(3600),_=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}a((r=r.apply(e,t||[])).next())}))};let S=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.html`${this.scheduleMember}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._scheduleMembers.results.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return s.html`
      ${this._scheduleMembers.results.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getMember(e.memberId),s.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
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
    `}get memberField(){let e={};const t=(0,g.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${b.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return s.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(n);const r=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),i=this.memberField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,i=document.querySelector('[id="memberId"]');let s=[];if(s[0]={id:"all",text:"All Members"},n>0){var o=r;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleMember)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleMember)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return y(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return y(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleMember)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return y(this,void 0,void 0,(function*(){const e=yield(0,f.GET_MembershipUsers)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._members,...t),this._members=n}))}getMember(e){return y(this,void 0,void 0,(function*(){const t=yield(0,f.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,p.MembershipUser_S)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};S.styles=[s.css`
   :host { display: block; }
  `],_([(0,o.property)({type:Number}),v("design:type",Number)],S.prototype,"CLIENT_ID",void 0),_([(0,o.property)({type:Number}),v("design:type",Number)],S.prototype,"startSearchPage",void 0),_([(0,o.property)({type:Array}),v("design:type",Array)],S.prototype,"_members",void 0),_([(0,o.property)({type:Array}),v("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],S.prototype,"_data",void 0),_([(0,o.property)({type:Object}),v("design:type",Object)],S.prototype,"urlQueryParams",void 0),_([(0,o.property)({type:Number}),v("design:type",Number)],S.prototype,"meetingEventId",void 0),_([(0,o.query)('[show-memberField="all"]'),v("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],S.prototype,"showMemberFieldAllSelector",void 0),S=_([(0,o.customElement)("attendance-setup-form-member"),v("design:paramtypes",[])],S)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-231986","shared"],(()=>(6692,e(e.s=6692)))),e.O())])));
//# sourceMappingURL=edit-member.js.map