(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_widget_simple-table_main_scss-src_addons_network_attendance_setup_gro-cada03"],{45501:(e,t,n)=>{"use strict";n.r(t)},44672:(e,t,n)=>{"use strict";n.r(t),n.d(t,{urlQueryParams:()=>i,urlQueryParamsGet:()=>o,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>r});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},77128:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleGroup:()=>u});var i=n(86455),o=n.n(i),s=n(48485),r=n(87270),l=n(14492),c=n(8967),a=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/"+e,i={};return o().fire({title:"Remove Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new l.NetWorkCallResponses("delete",n,!0);return i.postForm,i}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},52218:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_AttendanceSchedule:()=>c});var i=n(48485),o=n(87270),s=n(14492),r=n(33600),l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};function c(e=null,t=""){return l(this,void 0,void 0,(function*(){const n=(0,r.getUserLoginInfoCookie)(),l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},2892:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>c});var i=n(48485),o=n(87270),s=n(14492),r=n(33600),l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};function c(e=null,t=""){return l(this,void 0,void 0,(function*(){const n=(0,r.getUserLoginInfoCookie)(),l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}}))}},71854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MultipleWidgets:()=>c});var i=n(85862),o=n(59662),s=(n(23283),n(16413),n(40789),n(33830),n(76948),n(63313),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};let c=class extends i.LitElement{constructor(){super(),this.index=0,this._widget=i.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.property)({type:Number}),r("design:type",Number)],c.prototype,"index",void 0),s([(0,o.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"no_delete",void 0),s([(0,o.property)({type:Boolean}),r("design:type",Boolean)],c.prototype,"single",void 0),s([(0,o.property)({type:String}),r("design:type",String)],c.prototype,"_single",void 0),c=s([(0,o.customElement)("multiple-widgets"),r("design:paramtypes",[])],c)},43690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SwitchInput:()=>l});var i=n(85862),o=n(59662),s=(n(29975),n(16788),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[i.css`
      :host {
        display: block;
      }
    `],s([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,o.property)({type:String}),r("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,o.customElement)("switch-input")],l)},8693:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>a});var i=n(85862),o=n(59662),s=(n(92715),n(48485)),r=n(44672),l=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
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
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};a.styles=[i.css`
   :host { display: block; }
  `],l([(0,o.property)({type:Number}),c("design:type",Number)],a.prototype,"meetingEventId",void 0),a=l([(0,o.customElement)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],a)},46848:()=>{throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\AMG\\plus_db\\client_dashboards\\version_one\\plus_attendance\\development\\node_modules\\lit-html\\development\\directives\\until.js'")}}]);
//# sourceMappingURL=src_assets_styles_views_widget_simple-table_main_scss-src_addons_network_attendance_setup_gro-cada03.js.map