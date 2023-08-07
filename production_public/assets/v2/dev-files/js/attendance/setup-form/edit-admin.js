"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-admin"],{69579:(e,t,n)=>{n.r(t)},45501:(e,t,n)=>{n.r(t)},60089:(e,t,n)=>{n.r(t),n.d(t,{NavigatorRouter:()=>s});var i=n(48485);class s{constructor(){}static push(e,t={baseUrl:i.CONSTANTS.URLS.PDB_CLIENT}){const n=`${t.baseUrl}${e}`;window.location.href=n}}s.baseUrl=i.CONSTANTS.URLS.PDB_CLIENT},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>i,https_swal_error_format:()=>s});const i="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",s=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?i:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},14108:(e,t,n)=>{n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>l});var i=n(48485),s=n(87270),o=n(67052),r=n(21942),a=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.get_cookie)(d),m=JSON.stringify({token:(0,o.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.get_cookie)(d+"_date"))))return u;yield(0,s.http)(l,{method:"POST",body:m},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,o.base64Encode)(String(i.jsonData.token));(0,r.set_cookies)(d,e,10),(0,r.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,n)}))))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,s.http)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,o.base64Encode)(String(e.jsonData.token));(0,r.set_cookies)(l,t,10),(0,r.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const i=(0,o.base64Encode)(String(t)),s=n;window.supersecret={unknowable:{ops:{email:e,id:i,cookieName:s}}},""==(0,r.get_cookie)(s)?yield c(e,i,n):yield l(e,i,n)}))},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>i,urlQueryParamsGet:()=>s,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>r});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},83471:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAdmin:()=>u});var i=n(86455),s=n.n(i),o=n(48485),r=n(87270),a=n(14492),l=n(8967),c=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin/"+e,i={};return s().fire({title:"Remove Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new a.NetWorkCallResponses("delete",n,!0);return i.postForm,i}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},14331:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAdmin:()=>a});var i=n(48485),s=n(87270),o=n(14492),r=n(33600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,l=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},96435:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAdmin:()=>u});var i=n(86455),s=n.n(i),o=n(48485),r=n(87270),a=n(14492),l=n(8967),c=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin",n=document.querySelector('[make-general-posts="add-schedule-admin"]'),i=new FormData(n);return s().fire({title:"Setup Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,l.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let i=e;i.error=t;const s=new a.NetWorkCallResponses("post",i,!0,n);return s.postForm,s}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(s().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n.response.success&&setTimeout((()=>{window.location.reload()}),500))}}))}))}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>a});var i=n(48485),s=n(87270),o=n(14492),r=n(33600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},46262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>a});var i=n(48485),s=n(87270),o=n(14492),r=n(33600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},71854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>l});var i=n(85862),s=n(59662),o=(n(23283),n(16413),n(40789),n(33830),n(76948),n(63313),function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let l=class extends i.LitElement{constructor(){super(),this.index=0,this._widget=i.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?i.nothing:i.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};o([(0,s.property)({type:Number}),r("design:type",Number)],l.prototype,"index",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"no_delete",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"single",void 0),o([(0,s.property)({type:String}),r("design:type",String)],l.prototype,"_single",void 0),l=o([(0,s.customElement)("multiple-widgets"),r("design:paramtypes",[])],l)},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>a});var i=n(85862),s=n(59662),o=(n(29975),n(16788),function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[i.css`
      :host {
        display: block;
      }
    `],o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"name",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"label",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"selected",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"value",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"isSelected",void 0),a=o([(0,s.customElement)("switch-input")],a)},25048:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAdmin:()=>m}),n(69579),n(43683),n(74657);var i=n(14108),s=n(85862),o=n(59662),r=(n(40452),n(8693),n(27712)),a=n(91354),l=n(41302),c=n(17108),d=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,i){function r(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-admin CLIENT_ID="${this.clientId}"></attendance-setup-form-admin>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,o.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=d([(0,o.customElement)("attendance-setup-form-edit-admin"),u("design:paramtypes",[])],m)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var i=n(85862),s=n(59662),o=(n(92715),n(48485)),r=n(44672),a=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,s.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)},40452:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAdmin:()=>w}),n(45501);var i,s,o=n(85862),r=n(59662),a=n(58881),l=(n(23283),n(51511),n(43690),n(71854),n(29068)),c=n(14331),d=n(52218),u=n(44672),m=n(83471),h=n(46262),p=(n(75866),n(48485)),f=n(96435),g=n(33600),v=n(60089),b=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let w=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__adminUser=null,this.__schedule=null,this.__scheduleAdmins=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _adminUser(e){this.__adminUser=e,this.requestUpdate()}get _adminUser(){return this.__adminUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.html`${this.scheduleAdmin}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAdmin(){return null===this._scheduleAdmins?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAdmins?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Admin</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleAdmins.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Admin">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Admin
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Agenda Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Clocking Admin
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
                ${this.getMeetingAttendanceAdmins}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAdmins(){return o.html`
      ${this._scheduleAdmins.results.map((e=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <p class="py-2">${(0,a.until)(this.getAdminUser(e.adminId),o.html`<span>Loading...</span>`)}</p>
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?o.html`<mwc-icon class="text-green-600">check</mwc-icon>`:o.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?o.html`<mwc-icon class="text-green-600">check</mwc-icon>`:o.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?o.html`<mwc-icon class="text-green-600">check</mwc-icon>`:o.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <a href="${v.NavigatorRouter.baseUrl}settings/edit/admin-members?meeting-event-id=${this.meetingEventId}&meeting-admin-id=${e.id}">
                <mwc-button raised class="ml-1 py-2 info" icon="people" label="Members" delete-this-item="${e.id}">
                </mwc-button>
              </a>
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAdmin}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Admin</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Admin!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-admin">
                <div class="p-0 m-0" show-adminField="all">
                  ${this.adminFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Admin" raised class="button" @click="${this.submitForm}">
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
    `}get adminField(){let e={};const t=(0,g.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Admin User</h4>
            <select-input class="w-100" id="adminId" name="adminId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${p.CONSTANTS.URLS.AKWAABA_API_BASE_URL}clients/user/search"></select-input>
          </div><div class="col-md-12 col-lg-12"></div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Meeting Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="meetingEditor" id="meetingEditor" label="Is Meeting Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Agenda Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="agendaEditor" id="agendaEditor" label="Is Agenda Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Clocking Admin?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="clockingAdmin" id="clockingAdmin" label="Is Clocking Admin?"></switch-input>
            </div>
          </div>
        </div>
      </div>
    `}adminFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.adminField}
        adminField-id="${e}" no_delete></multiple-widgets>
    `}addAdminField(){const e=this.showAdminFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAdminFieldAllSelector.children[e-1].getAttribute("adminField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("adminField-id",String(t)),this.showAdminFieldAllSelector.append(n);const i=this.showAdminFieldAllSelector.querySelectorAll('multiple-widgets[adminField-id="'+t+'"]'),s=this.adminField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.MDCDataTable(e)}))}getAdminUsers(){return y(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUsers)();this._adminUser=null===e?void 0:e.paginResponse}))}getAdminUser(e){return y(this,void 0,void 0,(function*(){const t=yield(0,h.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,f.POST_AttendanceAddScheduleAdmin)()}))}deleteQuestionnaireMeetingAttendanceAdmin(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleAdmin)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,s=document.querySelector('[id="adminId"]');let o=[];if(n>0){var r=i;for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return{results:o,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return y(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAdmin(){return y(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleAdmin)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};w.styles=[o.css`
   :host { display: block; }
  `],b([(0,r.property)({type:Number}),_("design:type",Number)],w.prototype,"CLIENT_ID",void 0),b([(0,r.property)({type:Number}),_("design:type",Number)],w.prototype,"startSearchPage",void 0),b([(0,r.property)({type:Array}),_("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],w.prototype,"_data",void 0),b([(0,r.property)({type:Object}),_("design:type",Object)],w.prototype,"urlQueryParams",void 0),b([(0,r.property)({type:Number}),_("design:type",Number)],w.prototype,"meetingEventId",void 0),b([(0,r.query)('[show-adminField="all"]'),_("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],w.prototype,"showAdminFieldAllSelector",void 0),w=b([(0,r.customElement)("attendance-setup-form-admin"),_("design:paramtypes",[])],w)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(25048,e(e.s=25048)))),e.O())])));
//# sourceMappingURL=edit-admin.js.map