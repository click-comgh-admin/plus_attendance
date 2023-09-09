/*! For license information please see edit-attachment.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6183],{6173:()=>{(()=>{var e,t,n;const i=Symbol(),o=Symbol(),s=Symbol(),r=Symbol(),a=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),m=Symbol(),p=Symbol(),f=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[o]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,n=o,l)](e){const t=this[o],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[m](e);if(!n.length)return void this[d](i,r,t);let a=n.length-1,l=i.length-1;for(;a>0&&l>0&&n[a]===i[l];)a--,l--;n[a]!==i[l]&&this[c](n[a],i[l]),a>0&&this[u](n.slice(0,a)),l>0&&this[d](i.slice(0,l),r,null)}[c](e,t){const n=e[r];this[p](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[a]=e[a],t[r]=n,e[a]=void 0,e[r]=void 0}[u](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const i of e){const e=i.parentNode,o=e.children,s=new Set;for(let e=0;e<o.length;e++){const r=o[e];r===i||!this[p](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const l=new MutationObserver(this[f].bind(this));i[a]=l;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[f](e){const t=this[s],n=this[o];for(const i of e){const e=i.target.host||i.target,o=e===document.body?t.length:t.indexOf(e),s=t[o-1],a=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[p](t)&&(n&&t.inert?n.add(t):(t.inert=!0,a.add(t)))}}}[p](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[m](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let i,o,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),o=0;o<s.length;o++)s[o].nodeType===Node.ELEMENT_NODE&&n.add(s[o]);return n}}document.$blockingElements=new b})()},8967:(e,t,n)=>{"use strict";n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{"use strict";n.d(t,{B:()=>c});var i=n(771),o=n(7270),s=n(7052),r=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,o.d)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,s.h)(String(e.jsonData.token));(0,r.Ad)(l,t,10),(0,r.vh)(l+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=(0,s.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,r.Hl)(d)?yield l(e,c,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.Hl)(d),h=JSON.stringify({token:(0,s.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.Hl)(d+"_date"))))return u;yield(0,o.d)(c,{method:"POST",body:h},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,s.h)(String(i.jsonData.token));(0,r.Ad)(d,e,10),(0,r.vh)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})))(e,c,n)}))},4672:(e,t,n)=>{"use strict";n.d(t,{Jx:()=>o,O1:()=>i,Vc:()=>s,W3:()=>r});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},2404:(e,t,n)=>{"use strict";n.d(t,{f:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{"use strict";n.d(t,{u:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},6262:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});var i=n(771),o=n(7270),s=n(596),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},1854:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5248),n(934),n(9261),n(3504),n(9132),n(3313),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let l=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"index",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"no_delete",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"single",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"_single",void 0),l=s([(0,o.Mo)("multiple-widgets"),r("design:paramtypes",[])],l)},2461:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5185),n(5248),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"accept",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],a.prototype,"randomID",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"id",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"required",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"hasLabel",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,o.Cb)({type:Number}),r("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,o.Mo)("file-input")],a)},3690:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(5185),n(5142),function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
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
    `],s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"selected",void 0),s([(0,o.Cb)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"isSelected",void 0),a=s([(0,o.Mo)("switch-input")],a)},2883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditAttachment:()=>L}),n(3683),n(4657);var i,o,s=n(4108),r=n(5862),a=n(8393),l=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),c=n(2404),d=n(2218),u=n(4672),h=n(6455),m=n.n(h),p=n(771),f=n(7270),b=n(596),y=n(8967),g=n(3600),v=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},w=n(6262),_=(n(5866),function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))}),A=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let E=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__attachmentUser=null,this.__schedule=null,this.__scheduleAttachments=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _attachmentUser(e){this.__attachmentUser=e,this.requestUpdate()}get _attachmentUser(){return this.__attachmentUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.dy`${this.scheduleAttachment}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAttachment(){return null===this._scheduleAttachments?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAttachments?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Attachment</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleAttachments.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Attachment">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Attachment
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
                ${this.getMeetingAttendanceAttachments}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAttachments(){return r.dy`
      ${this._scheduleAttachments.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${e.attachment}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAttachment}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Attachment</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Attachment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-attachment">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Attachment" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return(0,g.Ie)().token,r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="attachment" name="attachment" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}attachmentFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.attachmentField}
        attachmentField-id="${e}" no_delete></multiple-widgets>
    `}addAttachmentField(){const e=this.showAttachmentFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAttachmentFieldAllSelector.children[e-1].getAttribute("attachmentField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("attachmentField-id",String(t)),this.showAttachmentFieldAllSelector.append(n);const i=this.showAttachmentFieldAllSelector.querySelectorAll('multiple-widgets[attachmentField-id="'+t+'"]'),o=this.attachmentField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}getAttachmentUsers(){return C(this,void 0,void 0,(function*(){const e=yield(0,w.a)();this._attachmentUser=null===e?void 0:e.paginResponse}))}getAttachmentUser(e){return C(this,void 0,void 0,(function*(){const t=yield(0,w.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return _(this,void 0,void 0,(function*(){const e=(0,g.Ie)(),t=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment",n=document.querySelector('[make-general-posts="add-schedule-attachment"]'),i=new FormData(n);return m().fire({title:"Add Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>_(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new b.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,y.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceAttachment(e){return C(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment/"+e,i={};return m().fire({title:"Remove Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,f.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new b.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,y.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new b.H("delete",n,!0);return i.postForm,i}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}m().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="attachment"]');let s=[];if(n>0){var r=i;for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return C(this,void 0,void 0,(function*(){const e=yield(0,d.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAttachment(){return C(this,void 0,void 0,(function*(){const e=yield(0,c.f)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};E.styles=[r.iv`
   :host { display: block; }
  `],A([(0,a.Cb)({type:Number}),S("design:type",Number)],E.prototype,"CLIENT_ID",void 0),A([(0,a.Cb)({type:Number}),S("design:type",Number)],E.prototype,"startSearchPage",void 0),A([(0,a.Cb)({type:Array}),S("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],E.prototype,"_data",void 0),A([(0,a.Cb)({type:Object}),S("design:type",Object)],E.prototype,"urlQueryParams",void 0),A([(0,a.Cb)({type:Number}),S("design:type",Number)],E.prototype,"meetingEventId",void 0),A([(0,a.IO)('[show-attachmentField="all"]'),S("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],E.prototype,"showAttachmentFieldAllSelector",void 0),E=A([(0,a.Mo)("attendance-setup-form-attachment"),S("design:paramtypes",[])],E),n(8693);var k=n(9665),$=n(8092),R=n(1302),x=n(7108),N=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let L=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,k.f)().then((()=>this._hasSetup=!0)),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,$.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,R.OR)(x.W.schedule_meeting_event),!(0,R.H)({pageId:x.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-attachment CLIENT_ID="${this.clientId}"></attendance-setup-form-attachment>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};N([(0,a.Cb)({type:String}),I("design:type",String)],L.prototype,"email",void 0),N([(0,a.Cb)({type:Number}),I("design:type",Number)],L.prototype,"mId",void 0),N([(0,a.Cb)({type:Number}),I("design:type",Number)],L.prototype,"clientId",void 0),N([(0,a.Cb)({type:Boolean}),I("design:type",Boolean)],L.prototype,"_hasSetup",void 0),N([(0,a.Cb)({type:Boolean}),I("design:type",Boolean)],L.prototype,"_pageButtonAccess",void 0),L=N([(0,a.Mo)("attendance-setup-form-edit-attachment"),I("design:paramtypes",[])],L)},8693:(e,t,n)=>{"use strict";var i=n(5862),o=n(8393),s=(n(2715),n(771)),r=n(4672),a=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],a([(0,o.Cb)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,o.Mo)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)},4232:(e,t,n)=>{"use strict";n.d(t,{OR:()=>r,hl:()=>l,pt:()=>s});var i=n(3692);const{I:o}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(3692),o=n(875),s=n(4232);const r=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const n=e.element,r=e.name;if(e.type===o.pX.PROPERTY){if(t===n[r])return i.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return i.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,7719,214,3901,3712],(()=>(2883,e(e.s=2883)))),e.O())])));
//# sourceMappingURL=edit-attachment.js.map