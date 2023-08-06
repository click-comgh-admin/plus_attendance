/*! For license information please see edit-sms.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6184],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),l=Symbol(),c=Symbol(),a=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),m=Symbol(),f=Symbol(),p=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[c](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[c](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,c)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[m](e);if(!n.length)return void this[d](i,r,t);let l=n.length-1,c=i.length-1;for(;l>0&&c>0&&n[l]===i[c];)l--,c--;n[l]!==i[c]&&this[a](n[l],i[c]),l>0&&this[u](n.slice(0,l)),c>0&&this[d](i.slice(0,c),r,null)}[a](e,t){const n=e[r];this[f](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[l]=e[l],t[r]=n,e[l]=void 0,e[r]=void 0}[u](e){for(const t of e){t[l].disconnect(),t[l]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const r=o[e];r===i||!this[f](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const c=new MutationObserver(this[p].bind(this));i[l]=c;let a=e;const d=a;d.__shady&&d.host&&(a=d.host),c.observe(a,{childList:!0})}}[p](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],l=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();l.has(t)&&(t.inert=!1,l.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[f](t)&&(n&&t.inert?n.add(t):(t.inert=!0,l.add(t)))}}}[f](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[m](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new b})()},8967:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{"use strict";n.d(t,{B:()=>a});var i=n(771),o=n(7270),s=n(7052),r=n(1942),l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};const c=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const l=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=n,a=JSON.stringify({email:e,id:t});yield(0,o.d)(l,{method:"POST",body:a},!0).then((e=>{if(e.jsonData.token){const t=(0,s.h)(String(e.jsonData.token));(0,r.Ad)(c,t,10),(0,r.vh)(c+"_date",(new Date).toUTCString(),10)}}))})),a=(e,t,n)=>l(void 0,void 0,void 0,(function*(){const a=(0,s.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:a,cookieName:d}}},""==(0,r.Hl)(d)?yield c(e,a,n):yield((e,t,n)=>l(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.Hl)(d),h=JSON.stringify({token:(0,s.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.Hl)(d+"_date"))))return u;yield(0,o.d)(a,{method:"POST",body:h},!0).then((i=>l(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,s.h)(String(i.jsonData.token));(0,r.Ad)(d,e,10),(0,r.vh)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,n)}))))})))(e,a,n)}))},4672:(e,t,n)=>{"use strict";n.d(t,{Jx:()=>o,O1:()=>i,Vc:()=>s,W3:()=>r});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},2482:(e,t,n)=>{"use strict";n.d(t,{p:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},1854:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5248),n(934),n(9261),n(3504),n(9132),n(3313),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};let c=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?i.Ld:i.dy`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.Cb)({type:Number}),r("design:type",Number)],c.prototype,"index",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],c.prototype,"no_delete",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],c.prototype,"single",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],c.prototype,"_single",void 0),c=s([(0,o.Mo)("multiple-widgets"),r("design:paramtypes",[])],c)},2461:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5185),n(5248),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:i.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:i.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:i.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:i.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"name",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"label",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"value",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"accept",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"randomID",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"id",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"required",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"hasLabel",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.Mo)("file-input")],l)},3690:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5185),n(5142),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[i.iv`
      :host {
        display: block;
      }
    `],s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"name",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"label",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"value",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,o.Mo)("switch-input")],l)},8693:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(2715),n(771)),r=n(4672),l=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};a.styles=[i.iv`
   :host { display: block; }
  `],l([(0,o.Cb)({type:Number}),c("design:type",Number)],a.prototype,"meetingEventId",void 0),a=l([(0,o.Mo)("attendance-setup-form-edit-links"),c("design:paramtypes",[])],a)},9171:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditSMS:()=>N}),n(3683),n(4657);var i=n(4108),o=n(5862),s=n(8393),r=(n(5248),n(2935),n(3313),n(6811),n(3690),n(1854),n(2461),n(2262)),l=n(2482),c=n(2218),a=n(4672),d=n(6455),u=n.n(d),h=n(771),m=n(7270),f=n(596),p=n(8967),b=n(3600),y=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};n(5866);var g,v,w=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))},S=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))},E=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};let A=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__smsUser=null,this.__schedule=null,this.__scheduleSMSs=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _smsUser(e){this.__smsUser=e,this.requestUpdate()}get _smsUser(){return this.__smsUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSMSs(e){this.__scheduleSMSs=e,this.requestUpdate()}get _scheduleSMSs(){return this.__scheduleSMSs}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSMS()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.dy`${this.scheduleSMS}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSMS(){return null===this._scheduleSMSs?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSMSs?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SMS</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}
      `}get getMeetingAttendanceSMSs(){return o.dy`
      ${this._scheduleSMSs.results.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${h.t.URLS.FILE_BUCKET_BASE_URL}files${e.id}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSMS}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){let e=null;return e=this._scheduleSMSs.count>0?this._scheduleSMSs.results[0]:{},o.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SMS</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SMS!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-sms">
                <div class="p-0 m-0" show-smsField="all">
                  ${this.smsFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      ${void 0===e.id?"":o.dy`<mwc-button class="mr-2 danger" label="Delete " icon="delete_forever" 
                        delete-this-item="${e.id}" raised class="button" @click="${this.deleteQuestionnaireMeetingAttendanceSMS}"></mwc-button>`}
                      <mwc-button label="${void 0===e.id?"Add":"Edit"} SMS" raised class="button" @click="${this.submitForm}">
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
    `}get smsField(){let e=null;e=this._scheduleSMSs.count>0?this._scheduleSMSs.results[0]:{};const t=void 0===e.alertDate?"":e.alertDate.join(", ");return o.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Event Message</h4>
            <mwc-textarea id="eventMessage" name="eventMessage" label="Enter Event Message" value="${e.eventMessage}" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Alert Time</h4>
            <mwc-textfield type="time" id="alertTime" name="alertTime" label="Enter Alert Time" value="${String(e.alertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Alert Date <span class="text-xs italic font-serif text-yellow-600">i.e (YYYY-MM-DD) - [eg. 2022-09-12, 2022-10-12]</span></h4>
            <mwc-textarea id="alertDate" name="alertDate" label="Enter Alert Date(s) Separated by commas(,)" value="${t}" outlined required>
            </mwc-textarea>
            <!-- <mwc-textfield type="date" id="alertDate" name="alertDate" label="Enter Alert Date" outlined required>
            </mwc-textfield> -->
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Notify Parent</h4>
            <switch-input name="notifyParent" class="w-full" id="notifyParent" label="Notify Parent" .selected="${e.notifyParent}" outlined required>
            </switch-input>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Notify Member</h4>
            <switch-input name="notifyMember" class="w-full" id="notifyMember" label="Notify Member" .selected="${e.notifyMember}" outlined required>
            </switch-input>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Attendee Alert Time</h4>
            <mwc-textfield type="time" id="attendeeAlertTime" name="attendeeAlertTime" label="Enter Attendee Alert Time" value="${String(e.attendeeAlertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Absentee Alert Time</h4>
            <mwc-textfield type="time" id="absenteeAlertTime" name="absenteeAlertTime" label="Enter Absentee Alert Time" value="${String(e.absenteeAlertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Absentee Alert Message</h4>
            <mwc-textarea id="absenteeAlertMessage" name="absenteeAlertMessage" label="Enter Absentee Alert Message" value="${e.absenteeAlertMessage}" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Date</h4>
            <mwc-textfield type="date" id="date" name="date" label="Enter Date" value="${String(e.date)}" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}smsFieldDefault(e){return o.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.smsField}
        smsField-id="${e}" no_delete></multiple-widgets>
    `}addSMSField(){const e=this.showSMSFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSMSFieldAllSelector.children[e-1].getAttribute("smsField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("smsField-id",String(t)),this.showSMSFieldAllSelector.append(n);const i=this.showSMSFieldAllSelector.querySelectorAll('multiple-widgets[smsField-id="'+t+'"]'),o=this.smsField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new r.T(e)}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),this._scheduleSMSs.count>0?yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms/"+e,i=document.querySelector('[make-general-posts="add-schedule-sms"]'),o=new FormData(i);return u().fire({title:"Update SMS?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new f.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,p.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&u().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this._scheduleSMSs.results[0].id):yield function(){return w(this,void 0,void 0,(function*(){const e=(0,b.Ie)(),t=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms",n=document.querySelector('[make-general-posts="add-schedule-sms"]'),i=new FormData(n);return u().fire({title:"Setup SMS?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>w(this,void 0,void 0,(function*(){return yield(0,m.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new f.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,p.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&u().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceSMS(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return y(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms/"+e,i={};return u().fire({title:"Remove SMS?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>y(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,p.T)(e);u().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new f.H("delete",n,!0);return i.postForm,i}})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}u().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return C(this,void 0,void 0,(function*(){const e=yield(0,c.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSMS(){return C(this,void 0,void 0,(function*(){const e=yield(0,l.p)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleSMSs=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};A.styles=[o.iv`
   :host { display: block; }
  `],E([(0,s.Cb)({type:Number}),_("design:type",Number)],A.prototype,"CLIENT_ID",void 0),E([(0,s.Cb)({type:Number}),_("design:type",Number)],A.prototype,"startSearchPage",void 0),E([(0,s.Cb)({type:Array}),_("design:type","function"==typeof(g="undefined"!=typeof Array&&Array)?g:Object)],A.prototype,"_data",void 0),E([(0,s.Cb)({type:Object}),_("design:type",Object)],A.prototype,"urlQueryParams",void 0),E([(0,s.Cb)({type:Number}),_("design:type",Number)],A.prototype,"meetingEventId",void 0),E([(0,s.IO)('[show-smsField="all"]'),_("design:type","function"==typeof(v="undefined"!=typeof Element&&Element)?v:Object)],A.prototype,"showSMSFieldAllSelector",void 0),A=E([(0,s.Mo)("attendance-setup-form-sms"),_("design:paramtypes",[])],A),n(8693);var k=n(9665),$=n(8092),x=n(1302),R=n(7108),M=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let N=class extends o.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,k.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{c(s.next(e))}catch(e){i(e)}}function l(e){try{c(s.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}c((s=s.apply(t,n||[])).next())}));var t,n,o,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,$.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,x.OR)(R.W.schedule_meeting_event),!(0,x.H)({pageId:R.W.schedule_meeting_event,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-sms CLIENT_ID="${this.clientId}"></attendance-setup-form-sms>
      </div>
    `}firstUpsmsd(){}createRenderRoot(){return this}};M([(0,s.Cb)({type:String}),T("design:type",String)],N.prototype,"email",void 0),M([(0,s.Cb)({type:Number}),T("design:type",Number)],N.prototype,"mId",void 0),M([(0,s.Cb)({type:Number}),T("design:type",Number)],N.prototype,"clientId",void 0),M([(0,s.Cb)({type:Boolean}),T("design:type",Boolean)],N.prototype,"_hasSetup",void 0),M([(0,s.Cb)({type:Boolean}),T("design:type",Boolean)],N.prototype,"_pageButtonAccess",void 0),N=M([(0,s.Mo)("attendance-setup-form-edit-sms"),T("design:paramtypes",[])],N)},4232:(e,t,n)=>{"use strict";n.d(t,{OR:()=>r,hl:()=>c,pt:()=>s});var i=n(3692);const{I:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,l={},c=(e,t=l)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(3692),o=n(875),s=n(4232);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,r=e.name;if(e.type===o.pX.PROPERTY){if(t===n[r])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,214,7719,3901,3712],(()=>(9171,e(e.s=9171)))),e.O())])));
//# sourceMappingURL=edit-sms.js.map