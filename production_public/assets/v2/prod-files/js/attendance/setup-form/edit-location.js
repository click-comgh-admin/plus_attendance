/*! For license information please see edit-location.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2607],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),l=Symbol(),a=Symbol(),r=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),p=Symbol(),m=Symbol(),f=Symbol();class g{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[r](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[r](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,r)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const l=this[p](e);if(!n.length)return void this[d](i,l,t);let a=n.length-1,r=i.length-1;for(;a>0&&r>0&&n[a]===i[r];)a--,r--;n[a]!==i[r]&&this[c](n[a],i[r]),a>0&&this[u](n.slice(0,a)),r>0&&this[d](i.slice(0,r),l,null)}[c](e,t){const n=e[l];this[m](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[a]=e[a],t[l]=n,e[a]=void 0,e[l]=void 0}[u](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[l];for(const t of e)t.inert=!1;t[l]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const l=o[e];l===i||!this[m](l)||t&&t.has(l)||(n&&l.inert?n.add(l):(l.inert=!0,s.add(l)))}i[l]=s;const r=new MutationObserver(this[f].bind(this));i[a]=r;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),r.observe(c,{childList:!0})}}[f](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],a=s[l];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[m](t)&&(n&&t.inert?n.add(t):(t.inert=!0,a.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[p](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const l=t.querySelectorAll("slot");if(l.length&&l[0].assignedNodes)for(i=0;i<l.length;i++)for(s=l[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new g})()},8967:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{"use strict";n.d(t,{B:()=>c});var i=n(771),o=n(7270),s=n(7052),l=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{r(i.next(e))}catch(e){s(e)}}function a(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}r((i=i.apply(e,t||[])).next())}))};const r=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",r=n,c=JSON.stringify({email:e,id:t});yield(0,o.d)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,s.h)(String(e.jsonData.token));(0,l.Ad)(r,t,10),(0,l.vh)(r+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=(0,s.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,l.Hl)(d)?yield r(e,c,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,l.Hl)(d),h=JSON.stringify({token:(0,s.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,l.Hl)(d+"_date"))))return u;yield(0,o.d)(c,{method:"POST",body:h},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,s.h)(String(i.jsonData.token));(0,l.Ad)(d,e,10),(0,l.vh)(d+"_date",(new Date).toUTCString(),10)}else yield r(e,t,n)}))))})))(e,c,n)}))},4672:(e,t,n)=>{"use strict";n.d(t,{Jx:()=>o,O1:()=>i,Vc:()=>s,W3:()=>l});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),l=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},606:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var i=n(771),o=n(7270),s=n(596),l=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,l.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,r=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,r,c}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>a});var i=n(771),o=n(7270),s=n(596),l=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,l.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,r=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,r,c}},1854:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5248),n(934),n(9261),n(3504),n(9132),n(3313),function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{r(i.next(e))}catch(e){s(e)}}function a(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}r((i=i.apply(e,t||[])).next())}))};let r=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.Cb)({type:Number}),l("design:type",Number)],r.prototype,"index",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"no_delete",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"single",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],r.prototype,"_single",void 0),r=s([(0,o.Mo)("multiple-widgets"),l("design:paramtypes",[])],r)},2461:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5185),n(5248),function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"name",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"label",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"value",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"accept",void 0),s([(0,o.Cb)({type:Number}),l("design:type",Number)],a.prototype,"randomID",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"id",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],a.prototype,"required",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],a.prototype,"hasLabel",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,o.Cb)({type:Number}),l("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,o.Cb)({type:Number}),l("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,o.Cb)({type:Number}),l("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,o.Mo)("file-input")],a)},3690:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5185),n(5142),function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[i.iv`
      :host {
        display: block;
      }
    `],s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"name",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"label",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],a.prototype,"selected",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],a.prototype,"value",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],a.prototype,"isSelected",void 0),a=s([(0,o.Mo)("switch-input")],a)},8693:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(2715),n(771)),l=n(4672),a=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.t.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],a([(0,o.Cb)({type:Number}),r("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,o.Mo)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],c)},1394:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditLocation:()=>H}),n(3683),n(4657);var i=n(4108),o=n(5862),s=n(8393),l=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),a=n(606),r=n(2218),c=n(4672),d=n(6455),u=n.n(d),h=n(771),p=n(7270),m=n(596),f=n(8967),g=n(3600),b=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{r(i.next(e))}catch(e){s(e)}}function a(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}r((i=i.apply(e,t||[])).next())}))},v=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{r(i.next(e))}catch(e){s(e)}}function a(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}r((i=i.apply(e,t||[])).next())}))};n(5866);var y=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let C=class extends o.oi{constructor(){super(),this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Enter Location Name</h4>
            <mwc-textfield name="locationName" type="text" class="w-full"
              id="locationName--${this.inputId}" label="Enter Location Name" outlined required
              @change="${this.handleLocationNameChange}">
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Enter Radius <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                  <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius--${this.inputId}"
                    label="Enter Radius" outlined required @change="${this.handleRadiusChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Enter Latitude <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                  <mwc-textfield name="latitude" type="number" step="0.01" class="w-full"
                    id="latitude--${this.inputId}" label="Enter Latitude" outlined required @change="${this.handleLatitudeChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Enter Longitude <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                  <mwc-textfield name="longitude" type="number" step="0.01" class="w-full"
                    id="longitude--${this.inputId}" label="Enter Longitude" outlined required @change="${this.handleLongitudeChange}">
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}handleLocationNameChange(e){const t=e.target.value;this.locationNameValue=t}handleRadiusChange(e){const t=e.target.value;this.radiusValue=t}handleLatitudeChange(e){this.latitudeValue=e.target.value}handleLongitudeChange(e){this.longitudeValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};C.styles=[o.iv`
   :host { display: block; }
  `],y([(0,s.Cb)({type:String}),w("design:type",Object)],C.prototype,"inputId",void 0),y([(0,s.Cb)({type:String}),w("design:type",String)],C.prototype,"locationNameValue",void 0),y([(0,s.Cb)({type:String}),w("design:type",String)],C.prototype,"radiusValue",void 0),y([(0,s.Cb)({type:String}),w("design:type",String)],C.prototype,"latitudeValue",void 0),y([(0,s.Cb)({type:String}),w("design:type",String)],C.prototype,"longitudeValue",void 0),C=y([(0,s.Mo)("meeting-location-inputs-component"),w("design:paramtypes",[])],C);class _{toJson(){return{meetingEventId:this.meetingEventId,locationName:this.locationName,latitude:this.latitude,longitude:this.longitude,radius:this.radius}}static fromJson(e){const t=new _;return t.meetingEventId=e.meetingEventId,t.locationName=e.locationName,t.latitude=e.latitude,t.longitude=e.longitude,t.radius=e.radius,t}toString(){return`MeetingEventScheduleLocationFormInputModel(meetingEventId=${this.meetingEventId}, locationName=${this.locationName}, latitude=${this.latitude}, longitude=${this.longitude}, radius=${this.radius})`}}var E=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends o.oi{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.firstInputAddedCalled=!1,this.loading=!0,this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.firstInputAddedCalled&&(this.addInput(new Event("click")),this.loading=!1,this.firstInputAddedCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=o.dy`<meeting-location-inputs-component 
      meeting-location-inputs-component--object="${this.currentObjectCount}">
    </meeting-location-inputs-component>`,n=this.inputs;n.push(t);let i=this.addedInputIndex;i.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=i,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?o.dy`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:o.dy`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>o.dy`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Location Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?o.dy`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:o.Ld}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Location</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[meeting-location-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[meeting-location-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t,n,i,o;let s=new _;return s.meetingEventId=this.meetingEventId,s.locationName=String(null!==(t=e.locationNameValue)&&void 0!==t?t:""),s.radius=String(null!==(n=e.radiusValue)&&void 0!==n?n:""),s.latitude=String(null!==(i=e.latitudeValue)&&void 0!==i?i:""),s.longitude=String(null!==(o=e.longitudeValue)&&void 0!==o?o:""),s}))[0]))}firstUpdated(){}createRenderRoot(){return this}};I.styles=[o.iv`
   :host { display: block; }
  `],E([(0,s.Cb)({type:Number}),x("design:type",Number)],I.prototype,"meetingEventId",void 0),E([(0,s.Cb)({type:Number}),x("design:type",Number)],I.prototype,"currentObjectCount",void 0),E([(0,s.Cb)({type:Array}),x("design:type",Array)],I.prototype,"multipleDayObjects",void 0),E([(0,s.Cb)({type:Array}),x("design:type",Array)],I.prototype,"removedInputIndex",void 0),E([(0,s.Cb)({type:Array}),x("design:type",Array)],I.prototype,"addedInputIndex",void 0),E([(0,s.Cb)({type:Boolean}),x("design:type",Boolean)],I.prototype,"firstInputAddedCalled",void 0),E([(0,s.Cb)({type:Boolean}),x("design:type",Boolean)],I.prototype,"loading",void 0),I=E([(0,s.Mo)("meeting-location-multiple-inputs-component"),x("design:paramtypes",[])],I);var S=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{r(i.next(e))}catch(e){s(e)}}function a(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}r((i=i.apply(e,t||[])).next())}))},$=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class L{static setValues(e){const t=new L;return t.locationId=e.locationId,t.locationNameValue=e.locationNameValue,t.radiusValue=e.radiusValue,t.latitudeValue=e.latitudeValue,t.longitudeValue=e.longitudeValue,t}getValues(){const e=new L;return e.locationId=this.locationId,e.locationNameValue=this.locationNameValue,e.radiusValue=this.radiusValue,e.latitudeValue=this.latitudeValue,e.longitudeValue=this.longitudeValue,e}toString(){return`MeetingLocationFormInputValues(locationId:${this.locationId},locationNameValue:${this.locationNameValue}, radiusValue:${this.radiusValue}, latitudeValue:${this.latitudeValue}, longitudeValue:${this.longitudeValue})`}}let R=class extends o.oi{constructor(){super(),this.inputId=Math.random().toString(36).substring(2,22),this.inputValues=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.isEmpty(this.inputValues)?o.Ld:o.dy`
      <div class="p-1">
        <div class="block">
          <div class="flex justify-end">
              <mwc-icon-button class="ml-1 danger" icon="close" @click="${this.empty}"></mwc-icon-button>
          </div>
        </div>
        ${this.getLocationForm}
      </div>
    `}isEmpty(e){return null==e||e.length<1}empty(e){this.inputValues=null}get getLocationForm(){return o.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Update Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="update-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  <div class="container my-4" id="form_input--${this.inputId}">
                    <div class="row justify-center">
                      <div class="col-md-6 col-lg-4">
                        <h4 class="font-semibold my-2">Enter Location Name</h4>
                        <mwc-textfield name="locationName" type="text" class="w-full"
                          id="locationName--${this.inputId}" label="Enter Location Name" outlined required
                          value="${this.inputValues.locationNameValue}">
                        </mwc-textfield>
                      </div>
                      <div class="col-md-6 col-lg-8">
                        <div class="container px-0">
                          <div class="row justify-center">
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Radius  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius--${this.inputId}"
                                label="Enter Radius" outlined required value="${this.inputValues.radiusValue}">
                              </mwc-textfield>
                            </div>
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Latitude  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="latitude" type="number" step="0.01" class="w-full"
                                id="latitude--${this.inputId}" label="Enter Latitude" outlined required
                                value="${this.inputValues.latitudeValue}">
                              </mwc-textfield>
                            </div>
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Longitude  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="longitude" type="number" step="0.01" class="w-full"
                                id="longitude--${this.inputId}" label="Enter Longitude" outlined required
                                value="${this.inputValues.longitudeValue}">
                              </mwc-textfield>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update Location" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return t=this,n=void 0,o=function*(){yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,i=document.querySelector('[make-general-posts="update-schedule-location"]'),o=new FormData(i);return u().fire({title:"Update Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new m.H("put",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,f.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&u().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.inputValues.locationId)},new((i=void 0)||(i=Promise))((function(e,s){function l(e){try{r(o.next(e))}catch(e){s(e)}}function a(e){try{r(o.throw(e))}catch(e){s(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(l,a)}r((o=o.apply(t,n||[])).next())}));var t,n,i,o}createRenderRoot(){return this}};R.styles=[o.iv`
   :host { display: block; }
  `],$([(0,s.Cb)({type:String}),k("design:type",Object)],R.prototype,"inputId",void 0),$([(0,s.Cb)({attribute:!1}),k("design:type",L)],R.prototype,"inputValues",void 0),$([(0,s.Cb)({type:Number}),k("design:type",Number)],R.prototype,"CLIENT_ID",void 0),$([(0,s.Cb)({type:Number}),k("design:type",Number)],R.prototype,"meetingEventId",void 0),R=$([(0,s.Mo)("meeting-location-edit-component"),k("design:paramtypes",[])],R);var N,A,j,B=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function l(e){try{r(i.next(e))}catch(e){s(e)}}function a(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}r((i=i.apply(e,t||[])).next())}))};let P=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this.inputValues=null}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return T(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
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
      `:!0===this._schedule.success?o.dy`${this.scheduleLocation}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.dy`${this.table}`}get table(){return this._scheduleLocations.results.length>0?o.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Location">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Location Name
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Latitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
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
                ${this.getMeetingAttendanceLocations}
              </tbody>
            </table>
          </div>
        </div>
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return o.dy`
      ${this._scheduleLocations.results.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.locationName}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude} <small><span class="text-yellow-600 text-xs">Kilometers</span></small>
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude} <small><span class="text-yellow-600 text-xs">Kilometers</span></small>
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius} <small><span class="text-yellow-600 text-xs">Kilometers</span></small>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 success" icon="edit" @click="${t=>this.editThisLocation(t,e)}"></mwc-icon-button>
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceLocation}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  <meeting-location-multiple-inputs-component meetingEventId="${this.meetingEventId}">
                  </meeting-location-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Location" raised class="button" @click="${this.submitForm}">
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
      <div class="p-2 block">
        <meeting-location-edit-component .inputValues="${this.inputValues}"></meeting-location-edit-component>
      </div>
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}editThisLocation(e,t){return T(this,void 0,void 0,(function*(){e.preventDefault(),this.inputValues=L.setValues({locationId:t.id,locationNameValue:t.locationName,radiusValue:String(t.radius),latitudeValue:String(t.latitude),longitudeValue:String(t.longitude)})}))}submitForm(e){return T(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("meeting-location-multiple-inputs-component").forEach((e=>T(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/bulk",i=document.querySelector('[make-general-posts="add-schedule-location"]'),o=JSON.stringify(e);return u().fire({title:"Add Meeting Location(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"POST",body:o,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new m.H("post",e,!1,i),n=t.multipleResponse;let o=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{o.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{o.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),o.length>0){const e=(0,f.T)(o);return u().showValidationMessage(`${e}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&u().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))))}))}deleteQuestionnaireMeetingAttendanceLocation(e){return T(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return b(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,i={};return u().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new m.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,f.T)(e);u().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new m.H("delete",n,!0);return i.postForm,i}})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}u().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="location"]');let s=[];if(n>0){var l=i;for(let e=0;e<l.length;e++){const t=l[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,c.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return T(this,void 0,void 0,(function*(){const e=yield(0,r.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return T(this,void 0,void 0,(function*(){const e=yield(0,a.I)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};P.styles=[o.iv`
   :host { display: block; }
  `],B([(0,s.Cb)({type:Number}),O("design:type",Number)],P.prototype,"CLIENT_ID",void 0),B([(0,s.Cb)({type:Number}),O("design:type",Number)],P.prototype,"startSearchPage",void 0),B([(0,s.Cb)({type:Array}),O("design:type","function"==typeof(N="undefined"!=typeof Array&&Array)?N:Object)],P.prototype,"_data",void 0),B([(0,s.Cb)({type:Object}),O("design:type",Object)],P.prototype,"urlQueryParams",void 0),B([(0,s.Cb)({type:Number}),O("design:type",Number)],P.prototype,"meetingEventId",void 0),B([(0,s.IO)('[show-locationField="all"]'),O("design:type","function"==typeof(A="undefined"!=typeof Element&&Element)?A:Object)],P.prototype,"showLocationFieldAllSelector",void 0),B([(0,s.Cb)({attribute:!1}),O("design:type","function"==typeof(j=void 0!==L&&L)?j:Object)],P.prototype,"inputValues",void 0),P=B([(0,s.Mo)("attendance-setup-form-location"),O("design:paramtypes",[])],P),n(8693);var V=n(9665),U=n(8092),D=n(1302),M=n(7108),q=function(e,t,n,i){var o,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(s<3?o(l):s>3?o(t,n,l):o(t,n))||l);return s>3&&l&&Object.defineProperty(t,n,l),l},F=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let H=class extends o.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,V.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,i){function l(e){try{r(s.next(e))}catch(e){i(e)}}function a(e){try{r(s.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(l,a)}r((s=s.apply(t,n||[])).next())}));var t,n,o,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,U.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,D.OR)(M.W.schedule_meeting_event),!(0,D.H)({pageId:M.W.schedule_meeting_event,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
      </div>
    `}firstUplocationd(){}createRenderRoot(){return this}};q([(0,s.Cb)({type:String}),F("design:type",String)],H.prototype,"email",void 0),q([(0,s.Cb)({type:Number}),F("design:type",Number)],H.prototype,"mId",void 0),q([(0,s.Cb)({type:Number}),F("design:type",Number)],H.prototype,"clientId",void 0),q([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],H.prototype,"_hasSetup",void 0),q([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],H.prototype,"_pageButtonAccess",void 0),H=q([(0,s.Mo)("attendance-setup-form-edit-location"),F("design:paramtypes",[])],H)},4232:(e,t,n)=>{"use strict";n.d(t,{OR:()=>l,hl:()=>r,pt:()=>s});var i=n(3692);const{I:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,l=e=>void 0===e.strings,a={},r=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>l});var i=n(3692),o=n(875),s=n(4232);const l=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,l=e.name;if(e.type===o.pX.PROPERTY){if(t===n[l])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(l))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(l)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,7719,214,3901,3712],(()=>(1394,e(e.s=1394)))),e.O())])));
//# sourceMappingURL=edit-location.js.map