"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["home/branch"],{3076:(e,t,n)=>{n.r(t)},1136:(e,t,n)=>{n.r(t)},8207:(e,t,n)=>{n.r(t)},7725:(e,t,n)=>{n.r(t),n.d(t,{getActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>a,setActiveBranchIdCookie:()=>s});var r=n(7052),o=n(1942),i=n(1489);const c="pdb-active-branch",s=e=>{const t=JSON.stringify(e);(0,o.set_cookies)(c,"",-1),(0,o.set_cookies)(c,(0,r.base64Encode)(t),3500)};function a(){(0,o.set_cookies)(c,"",-1)}const l=()=>{if(""===(0,o.get_cookie)(c))return null;{const e=(0,r.base64Decode)((0,o.get_cookie)(c)),t=JSON.parse(e);return(0,i.clientBranchInfo_S)(t)}}},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>s});var r=n(8485),o=n(7270),i=n(4492),c=n(3600);function s(e=null){return t=this,n=void 0,a=function*(){const t=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function i(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,i)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a}},8763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>s}),n(1136);var r=n(5862),o=n(9662),i=(n(8207),function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:r.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.html`<header class="header">${this.header}</header>`:r.nothing}
              ${null!==this.content?r.html`<main class="main">${this.content}</main>`:r.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};s.styles=[r.css`
   :host { display: block; }
  `],i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"loading",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"success",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"info",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"warning",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"danger",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"default",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"primary",void 0),i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"extra_class",void 0),s=i([(0,o.customElement)("alert-card"),c("design:paramtypes",[])],s)},2715:(e,t,n)=>{n.r(t),n.d(t,{LinkButton:()=>s});var r=n(5862),o=n(9662),i=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?r.html`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:r.html`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"aClass",void 0),i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"bClass",void 0),i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"icon",void 0),i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"href",void 0),i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"label",void 0),i([(0,o.property)({type:String}),c("design:type",String)],s.prototype,"isBlockContent",void 0),i([(0,o.property)({type:Boolean}),c("design:type",Boolean)],s.prototype,"raised",void 0),s=i([(0,o.customElement)("link-button")],s)},928:(e,t,n)=>{n.r(t),n.d(t,{PdbBranchElement:()=>h}),n(3076);var r=n(5862),o=n(9662),i=(n(3283),n(2715),n(789),n(6224)),c=n(3600),s=n(7725),a=(n(8763),function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))};let h=class extends r.LitElement{constructor(){super(),this._myBranchId=0,this._branches=[],this._activeBranchId=null,this._userLoginInfo=null}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getBranches();const t=(0,s.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,c.getUserLoginInfoCookie)()]}))}disconnectedCallback(){}render(){return r.html`
      <div class="mb-4">
        <div class="col-md-12 col-lg-12 my-2">
          ${this.activeBranch}
        </div>
        <div class="col-md-12 col-lg-12 my-2">
          ${this.myBranch}
        </div>
        ${this.branchSelector}
      </div>
    `}get activeBranch(){let e=0;null!==this._activeBranchId&&this._activeBranchId.length>0&&(e=this._activeBranchId[0].id);let t=null;if(this._branches.forEach((n=>{n.id===e&&(t=n)})),null!==t){const e=r.html`<h4 class="text-white">Active Branch</h4>`,n=r.html`<div>
        <h1 class="text-white mb-2 text-xl">${t.name}</h1>
      </div>`;return r.html`<alert-card success .header="${e}" .content="${n}"></alert-card>`}return r.html``}get myBranch(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=null;if(this._branches.forEach((n=>{n.id===e&&(t=n,this._myBranchId=n.id)})),null===t){const e=r.html`<h4 class="text-white">No Branch Found</h4>`,t=r.html`<div>
        <p class="text-white">User Branch Not Found!</p>
      </div>`;return r.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{const e=r.html`<h4 class="text-primary">${t.name}</h4>`,n=r.html`<div>
        <p class="text-black mb-2">Click on the button below to set as active branch</p>
        <mwc-button label="Set Active" id="${t.id}" name="${t.name}"
          accountId="${t.accountId}" raised class="primary"
          setMyBranchAsActive @click="${this.setMyBranchAsActive}"></mwc-button>
      </div>`;return r.html`<alert-card info .header="${e}" .content="${n}"></alert-card>`}}get branchSelector(){return 1===this._myBranchId?r.html`
        <div class="col-md-8 col-lg-6 my-2">
          <h3 class="font-semibold my-2">Select Branch</h3>
          <mwc-select name="branchId" setSelectedBranchAsActiveList class="w-full" id="branchId" label="Select Branch" outlined required>
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>r.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
          <mwc-button label="Set Active" raised class="flex mt-2"
            setSelectedBranchAsActive @click="${this.setSelectedBranchAsActive}"></mwc-button>
        </div>
      `:r.nothing}firstUpdated(){}setMyBranchAsActive(e){e.preventDefault(),this.querySelectorAll("mwc-button[setMyBranchAsActive]").forEach((e=>{const t=e.getAttribute("id"),n=Number(t),r=e.getAttribute("name"),o=String(r),i=e.getAttribute("accountId"),c=Number(i);(0,s.setActiveBranchIdCookie)({id:n,name:o,accountId:c}),window.location.reload()}))}setSelectedBranchAsActive(e){e.preventDefault(),this.querySelectorAll("mwc-select[setSelectedBranchAsActiveList]").forEach((e=>{const t=Number(e.value);let n=null;this._branches.forEach((e=>{e.id===t&&(n=e)})),null!==n&&((0,s.setActiveBranchIdCookie)(n),window.location.reload())}))}getBranches(){return d(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}createRenderRoot(){return this}};h.styles=[r.css`
   :host { display: block; }
  `],a([(0,o.property)({type:Number}),l("design:type",Number)],h.prototype,"_myBranchId",void 0),a([(0,o.property)({type:Array}),l("design:type",Array)],h.prototype,"_branches",void 0),a([(0,o.property)({type:Array}),l("design:type",Array)],h.prototype,"_activeBranchId",void 0),a([(0,o.property)({type:Array}),l("design:type",Array)],h.prototype,"_userLoginInfo",void 0),h=a([(0,o.customElement)("pdb-branch-element"),l("design:paramtypes",[])],h)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_setup_form_scss","shared"],(()=>(928,e(e.s=928)))),e.O())])));
//# sourceMappingURL=branch.js.map