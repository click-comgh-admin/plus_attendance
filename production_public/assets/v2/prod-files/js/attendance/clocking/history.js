/*! For license information please see history.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1205],{4173:(e,t,n)=>{n.d(t,{_:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},2813:(e,t,n)=>{n.d(t,{e:()=>o});class o{static toMembershipUserModel(e){return r(JSON.parse(e),a("MembershipUserModel"),s)}static membershipUserModelToJson(e){return JSON.stringify(r(e,a("MembershipUserModel"),i),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function r(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return r(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>r(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],l=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[i.key]=r(l,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(s[i]=r(o[i],t,n,i))})),s}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function a(e){return{ref:e}}const c={MembershipUserModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"firstname",js:"firstname",typ:l(null,"")},{json:"middlename",js:"middlename",typ:l(null,"")},{json:"surname",js:"surname",typ:l(null,"")},{json:"gender",js:"gender",typ:l(null,0)},{json:"profilePicture",js:"profilePicture",typ:l(null,"")},{json:"phone",js:"phone",typ:l(null,"")},{json:"email",js:"email",typ:l(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:l(null,Date)},{json:"religion",js:"religion",typ:l(null,0)},{json:"nationality",js:"nationality",typ:l(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:l(null,"")},{json:"stateProvince",js:"stateProvince",typ:l(null,"")},{json:"region",js:"region",typ:l(null,0)},{json:"district",js:"district",typ:l(null,0)},{json:"constituency",js:"constituency",typ:l(null,0)},{json:"electoralArea",js:"electoralArea",typ:l(null,0)},{json:"community",js:"community",typ:l(null,"")},{json:"hometown",js:"hometown",typ:l(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:l(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:l(null,"")},{json:"level",js:"level",typ:l(null,0)},{json:"status",js:"status",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)},{json:"memberType",js:"memberType",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"last_login",js:"lastLogin",typ:l(null,Date)},{json:"referenceId",js:"referenceID",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"editable",js:"editable",typ:l(null,!0)},{json:"profileResume",js:"profileResume",typ:l(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:l(null,"")},{json:"archived",js:"archived",typ:l(null,!0)},{json:"identification",js:"identification",typ:l(null,"")}],!1,{props:d,additional:false})};var d},8530:(e,t,n)=>{n.d(t,{e:()=>o});class o{static toMembershipOrganizationUserModel(e){return l(JSON.parse(e),d("MembershipOrganizationUserModel"),i)}static membershipOrganizationUserModelToJson(e){return JSON.stringify(l(e,d("MembershipOrganizationUserModel"),r),null,2)}}function s(e,t,n=""){n&&console.log(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.log(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function r(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:s(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return l(t,o,n)}catch(e){}}return s(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>l(t,e,n))):s("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return s("object",o);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],r=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;i[s.key]=l(r,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(i[s]=l(o[s],t,n,s))})),i}(n(t),t.additional,e):s(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?s("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:s(e,t,o)}(t,e)}}function a(...e){return{unionMembers:e}}function c(e,t){return{props:e,additional:t}}function d(e){return{ref:e}}const u={MembershipOrganizationUserModel:c([{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"organizationName",js:"organizationName",typ:a(null,"")},{json:"contactPersonName",js:"contactPersonName",typ:a(null,"")},{json:"organizationType",js:"organizationType",typ:a(null,d("OrganizationType"))},{json:"businessRegistered",js:"businessRegistered",typ:a(null,!0)},{json:"organizationPhone",js:"organizationPhone",typ:a(null,"")},{json:"organizationEmail",js:"organizationEmail",typ:a(null,"")},{json:"contactPersonGender",js:"contactPersonGender",typ:a(null,0)},{json:"contactPersonPhoto",js:"contactPersonPhoto",typ:a(null,"")},{json:"dateOfIncorporation",js:"dateOfIncorporation",typ:a(null,Date)},{json:"logo",js:"logo",typ:a(null,"")},{json:"contactPersonPhone",js:"contactPersonPhone",typ:a(null,"")},{json:"contactPersonEmail",js:"contactPersonEmail",typ:a(null,"")},{json:"countryOfBusiness",js:"countryOfBusiness",typ:a(null,"")},{json:"stateProvince",js:"stateProvince",typ:a(null,"")},{json:"region",js:"region",typ:a(null,0)},{json:"district",js:"district",typ:a(null,0)},{json:"constituency",js:"constituency",typ:a(null,0)},{json:"electoralArea",js:"electoralArea",typ:a(null,0)},{json:"community",js:"community",typ:a(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:a(null,"")},{json:"level",js:"level",typ:a(null,0)},{json:"status",js:"status",typ:a(null,0)},{json:"accountType",js:"accountType",typ:a(null,0)},{json:"memberType",js:"memberType",typ:a(null,0)},{json:"date",js:"date",typ:a(null,Date)},{json:"last_login",js:"lastLogin",typ:a(null,Date)},{json:"referenceId",js:"referenceID",typ:a(null,"")},{json:"branchId",js:"branchID",typ:a(null,0)},{json:"certificates",js:"certificates",typ:a(null,(p=d("Certificate"),{arrayItems:p}))}],!1),Certificate:c([{json:"id",js:"id",typ:a(null,0)},{json:"memberId",js:"memberID",typ:a(null,0)},{json:"attachment",js:"attachment",typ:a(null,d("Attachment"))},{json:"date",js:"date",typ:a(null,Date)}],!1),Attachment:c([{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"attachment",js:"attachment",typ:a(null,"")},{json:"filename",js:"filename",typ:a(null,"")},{json:"source",js:"source",typ:a(null,"")},{json:"size",js:"size",typ:a(null,"")},{json:"folderId",js:"folderID",typ:a(null,d("FolderID"))},{json:"fileDescription",js:"fileDescription",typ:a(null,"")},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"archived",js:"archived",typ:a(null,!0)},{json:"archivedBy",js:"archivedBy",typ:a(null,0)},{json:"archivedDate",js:"archivedDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1),FolderID:c([{json:"id",js:"id",typ:a(null,0)},{json:"parentFolder",js:"parentFolder",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"branchId",js:"branchID",typ:a(null,0)},{json:"folder",js:"folder",typ:a(null,"")},{json:"folderType",js:"folderType",typ:a(null,0)},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1),OrganizationType:c([{json:"id",js:"id",typ:a(null,0)},{json:"memberId",js:"memberID",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"type",js:"type",typ:a(null,"")},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1)};var p},8763:(e,t,n)=>{var o=n(5862),s=n(8393),i=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?o.dy`
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
      `:o.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?o.dy`<header class="header">${this.header}</header>`:o.Ld}
              ${null!==this.content?o.dy`<main class="main">${this.content}</main>`:o.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?o.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?o.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?o.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?o.dy`<mwc-icon>warning</mwc-icon>`:this.danger?o.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?o.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?o.dy`<mwc-icon>star_outline</mwc-icon>`:o.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};l.styles=[o.iv`
   :host { display: block; }
  `],i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"loading",void 0),i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"success",void 0),i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"info",void 0),i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"warning",void 0),i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"danger",void 0),i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"default",void 0),i([(0,s.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"primary",void 0),i([(0,s.Cb)({type:String}),r("design:type",String)],l.prototype,"extra_class",void 0),l=i([(0,s.Mo)("alert-card"),r("design:paramtypes",[])],l)},8046:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingHistory:()=>qe});var o=n(5862),s=n(8393),i=n(5248),r=(n(1239),n(9261),n(3313),n(6883),n(6811),n(2715),n(3683),n(4657),n(5866),n(1163),n(3629),n(9132),n(7898)),l=n(3692),a=n(8922),c=n(5713);n(7935),n(43),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var d=n(7151),u=n(1677),p=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends a.oi{constructor(){super(),this.title="",this.open=!1}connectedCallback(){super.connectedCallback(),setTimeout((()=>{"complete"==document.readyState&&new u.F(this.shadowRoot.querySelector(".accordion-item-header"))}),1e3)}render(){return l.dy`
      <div class="accordion-item"
        style=${(0,d.V)({borderBottom:this.open?"none":"1px solid #ddd"})}>
        <div class="accordion-item-header" @click=${this.toggleAccordion}>
          <span class="accordion-item-header-title">${this.title}</span>
          <span class="accordion-item-header-icon ${this.open?"open":""}">${this.open?"-":"+"}</span>
        </div>
        ${this.open?l.dy`<div class="accordion-item-content">
          <slot></slot>
        </div>`:""}
      </div>
    `}toggleAccordion(){setTimeout((()=>{this.open=!this.open}),100)}};m.styles=r.iv`
    .accordion-item {
      border: 2px solid #ddd;
      border-top: none;
      padding: 8px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      overflow: hidden;
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    .accordion-item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .accordion-item-header-title {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
    }
    .accordion-item-header-icon {
      margin-right: 8px;
      transition: transform 0.2s ease-in-out;
    }
    .accordion-item-header-icon.open {
      transform: rotate(180deg);
    }
    .accordion-item-content {
      padding: 12px;
      margin-top: 10px;
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-width: 1px;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
  `,p([(0,s.Cb)({type:String}),y("design:type",Object)],m.prototype,"title",void 0),p([(0,s.Cb)({type:Boolean}),y("design:type",Object)],m.prototype,"open",void 0),m=p([(0,s.Mo)("accordion-item"),y("design:paramtypes",[])],m);let h=class extends a.oi{constructor(){super()}render(){return l.dy`
      <slot></slot>
    `}updated(e){super.updated(e),this.initAccordionItems()}initAccordionItems(){this.querySelectorAll("accordion-item").forEach((e=>{e.addEventListener("click",(()=>{}))}))}toggleItem(e){e.open,this.querySelectorAll("accordion-item").forEach((e=>{e.open=!1}))}};h.styles=r.iv`
    :host {
      display: block;
    }
  `,h=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,c.M)("accordion-component"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],h);var f=n(7725),j=n(7052),b=n(771),g=n(3600),v=n(4672),_=n(7553),w=n(2869),D=n(2368),S=n(2892),x=n(72),I=n(9605),O=n(5458),$=(n(5517),n(2218)),k=n(8276),B=n(596),A=n(9665),T=n(8092),C=n(1302),N=n(7108),P=n(7270),M=n(6263),R=n(2813),E=n(8530);class U{static toGroupModel(e){return F(JSON.parse(e),H("GroupModel"),J)}static groupModelToJson(e){return JSON.stringify(F(e,H("GroupModel"),z),null,2)}}function J(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function z(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function F(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=q[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return F(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>F(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],r=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[i.key]=F(r,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(s[i]=F(o[i],t,n,i))})),s}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function L(...e){return{unionMembers:e}}function H(e){return{ref:e}}const q={GroupModel:(G=[{json:"id",js:"id",typ:L(null,0)},{json:"clientId",js:"clientID",typ:L(null,0)},{json:"group",js:"group",typ:L(null,"")},{json:"branchId",js:"branchID",typ:L(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:L(null,0)},{json:"createdBy",js:"createdBy",typ:L(null,0)},{json:"updatedBy",js:"updatedBy",typ:L(null,0)},{json:"updateDate",js:"updateDate",typ:L(null,Date)},{json:"date",js:"date",typ:L(null,Date)}],!1,{props:G,additional:false})};var G;class W{static toSubGroupModel(e){return Q(JSON.parse(e),X("SubGroupModel"),K)}static subGroupModelToJson(e){return JSON.stringify(Q(e,X("SubGroupModel"),V),null,2)}}function K(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function V(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function Q(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=Z[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return Q(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>Q(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],r=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[i.key]=Q(r,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(s[i]=Q(o[i],t,n,i))})),s}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function Y(...e){return{unionMembers:e}}function X(e){return{ref:e}}const Z={SubGroupModel:function(e,t){return{props:e,additional:!1}}([{json:"id",js:"id",typ:Y(null,0)},{json:"clientId",js:"clientID",typ:Y(null,0)},{json:"groupId",js:"groupID",typ:Y(null,X("GroupModel"))},{json:"branchId",js:"branchID",typ:Y(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:Y(null,0)},{json:"subgroup",js:"subgroup",typ:Y(null,"")},{json:"createdBy",js:"createdBy",typ:Y(null,0)},{json:"updatedBy",js:"updatedBy",typ:Y(null,0)},{json:"updateDate",js:"updateDate",typ:Y(null,Date)},{json:"date",js:"date",typ:Y(null,Date)},{json:"group",js:"group",typ:Y(null,"")}]),GroupModel:q.GroupModel};class ee{static toClientBranchModel(e){return se(JSON.parse(e),re("ClientBranchModel"),ne)}static clientBranchModelToJson(e){return JSON.stringify(se(e,re("ClientBranchModel"),oe),null,2)}}function te(e,t,n=""){if(n)throw Error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function ne(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function oe(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function se(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=le[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:te(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return se(t,o,n)}catch(e){}}return te(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>se(t,e,n))):te("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return te("object",o);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],r=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[i.key]=se(r,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(s[i]=se(o[i],t,n,i))})),s}(n(t),t.additional,e):te(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?te("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:te(e,t,o)}(t,e)}}function ie(...e){return{unionMembers:e}}function re(e){return{ref:e}}const le={ClientBranchModel:function(e,t){return{props:e,additional:!1}}([{json:"id",js:"id",typ:ie(null,0)},{json:"name",js:"name",typ:ie(null,"")},{json:"accountId",js:"accountID",typ:ie(null,0)},{json:"createdBy",js:"createdBy",typ:ie(null,0)},{json:"creationDate",js:"creationDate",typ:ie(null,Date)},{json:"updatedBy",js:"updatedBy",typ:ie(null,0)},{json:"updateDate",js:"updateDate",typ:ie(null,Date)}])};var ae=n(6224);class ce{static toMeetingAttendanceHistoryModel(e){return ye(JSON.parse(e),je("MeetingAttendanceHistoryModel"),ue)}static meetingAttendanceHistoryModelToJson(e){return JSON.stringify(ye(e,je("MeetingAttendanceHistoryModel"),pe),null,2)}}function de(e,t,n=""){n&&console.error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`)}function ue(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function pe(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function ye(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=be[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:de(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return ye(t,o,n)}catch(e){}}return de(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>ye(t,e,n))):de("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return de("object",o);const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],r=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[i.key]=ye(r,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(s[i]=ye(o[i],t,n,i))})),s}(n(t),t.additional,e):de(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?de("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:de(e,t,o)}(t,e)}}function me(e){return{arrayItems:e}}function he(...e){return{unionMembers:e}}function fe(e,t){return{props:e,additional:t}}function je(e){return{ref:e}}const be={MeetingAttendanceHistoryModel:fe([{json:"history",js:"history",typ:he(null,je("MeetingAttendanceHistoryModelHistory"))},{json:"status",js:"status",typ:he(null,je("Status"))},{json:"onTime",js:"onTime",typ:he(null,"")},{json:"lateness",js:"lateness",typ:he(null,"")},{json:"overtime",js:"overtime",typ:he(null,"")},{json:"undertime",js:"undertime",typ:he(null,"")},{json:"breakOverstay",js:"breakOverstay",typ:he(null,"")},{json:"productiveHours",js:"productiveHours",typ:he(null,"")},{json:"totalAttendance",js:"totalAttendance",typ:he(null,"")}],!1),MeetingAttendanceHistoryModelHistory:fe([{json:"member",js:"member",typ:he(null,je("Member"))},{json:"meetings",js:"meetings",typ:he(null,me(je("MeetingElement")))}],!1),MeetingElement:fe([{json:"meeting",js:"meeting",typ:he(null,je("MeetingMeeting"))},{json:"history",js:"history",typ:he(null,me(je("HistoryElement")))},{json:"status",js:"status",typ:he(null,je("Status"))},{json:"onTime",js:"onTime",typ:he(null,"")},{json:"lateness",js:"lateness",typ:he(null,"")},{json:"overtime",js:"overtime",typ:he(null,"")},{json:"undertime",js:"undertime",typ:he(null,"")},{json:"breakOverstay",js:"breakOverstay",typ:he(null,"")},{json:"productiveHours",js:"productiveHours",typ:he(null,"")},{json:"totalAttendance",js:"totalAttendance",typ:he(null,"")}],!1),HistoryElement:fe([{json:"id",js:"id",typ:he(null,0)},{json:"meetingEventId",js:"meetingEventID",typ:he(null,0)},{json:"memberId",js:"memberID",typ:he(null,0)},{json:"accountType",js:"accountType",typ:he(null,0)},{json:"inOrOut",js:"inOrOut",typ:he(null,!0)},{json:"justification",js:"justification",typ:he(null,he(null,""))},{json:"inTime",js:"inTime",typ:he(null,he(Date,null))},{json:"outTime",js:"outTime",typ:he(null,he(Date,null))},{json:"startBreak",js:"startBreak",typ:he(null,he(Date,null))},{json:"endBreak",js:"endBreak",typ:he(null,he(Date,null))},{json:"clockedBy",js:"clockedBy",typ:he(null,0)},{json:"clockedByInfo",js:"clockedByInfo",typ:he(null,he(je("EdByInfo"),null))},{json:"clockingMethod",js:"clockingMethod",typ:he(null,0)},{json:"onlineMeeting",js:"onlineMeeting",typ:he(null,!0)},{json:"validate",js:"validate",typ:he(null,je("Status"))},{json:"validationDate",js:"validationDate",typ:he(null,he(Date,null))},{json:"validatedBy",js:"validatedBy",typ:he(null,0)},{json:"validatedByInfo",js:"validatedByInfo",typ:he(null,he(je("EdByInfo"),null))},{json:"date",js:"date",typ:he(null,Date)},{json:"clockingMethodName",js:"clockingMethodName",typ:he(null,"")}],!1),EdByInfo:fe([{json:"id",js:"id",typ:he(null,0)},{json:"firstname",js:"firstname",typ:he(null,"")},{json:"surname",js:"surname",typ:he(null,"")},{json:"gender",js:"gender",typ:he(null,0)},{json:"profilePicture",js:"profilePicture",typ:he(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:he(null,Date)},{json:"phone",js:"phone",typ:he(null,"")},{json:"email",js:"email",typ:he(null,"")},{json:"role",js:"role",typ:he(null,0)},{json:"accountId",js:"accountID",typ:he(null,0)},{json:"branchId",js:"branchID",typ:he(null,0)},{json:"level",js:"level",typ:he(null,0)},{json:"status",js:"status",typ:he(null,0)},{json:"lastUpdatedBy",js:"lastUpdatedBy",typ:he(null,0)},{json:"date",js:"date",typ:he(null,Date)},{json:"last_login",js:"lastLogin",typ:he(null,Date)}],!1),Status:fe([{json:"id",js:"id",typ:he(null,0)},{json:"name",js:"name",typ:he(null,"")}],!1),MeetingMeeting:fe([{json:"id",js:"id",typ:he(null,0)},{json:"type",js:"type",typ:he(null,0)},{json:"memberType",js:"memberType",typ:he(null,0)},{json:"name",js:"name",typ:he(null,"")},{json:"clientId",js:"clientID",typ:he(null,0)},{json:"branchId",js:"branchID",typ:he(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:he(null,0)},{json:"meetingSpan",js:"meetingSpan",typ:he(null,0)},{json:"startTime",js:"startTime",typ:he(null,"")},{json:"closeTime",js:"closeTime",typ:he(null,"")},{json:"latenessTime",js:"latenessTime",typ:he(null,he(null,""))},{json:"isRecuring",js:"isRecuring",typ:he(null,!0)},{json:"hasBreakTime",js:"hasBreakTime",typ:he(null,!0)},{json:"hasDuty",js:"hasDuty",typ:he(null,!0)},{json:"hasOvertime",js:"hasOvertime",typ:he(null,!0)},{json:"virtualMeetingLink",js:"virtualMeetingLink",typ:he(null,"")},{json:"virtualMeetingType",js:"virtualMeetingType",typ:he(null,0)},{json:"meetingLocation",js:"meetingLocation",typ:he(null,0)},{json:"expectedMonthlyAttendance",js:"expectedMonthlyAttendance",typ:he(null,0)},{json:"activeMonthlyAttendance",js:"activeMonthlyAttendance",typ:he(null,0)},{json:"agenda",js:"agenda",typ:he(null,"")},{json:"agendaFile",js:"agendaFile",typ:he(null,"")},{json:"updatedBy",js:"updatedBy",typ:he(null,0)},{json:"updateDate",js:"updateDate",typ:he(null,Date)},{json:"date",js:"date",typ:he(null,Date)}],!1),Member:fe([{json:"id",js:"id",typ:he(null,0)},{json:"clientId",js:"clientID",typ:he(null,0)},{json:"firstname",js:"firstname",typ:he(null,"")},{json:"middlename",js:"middlename",typ:he(null,"")},{json:"surname",js:"surname",typ:he(null,"")},{json:"gender",js:"gender",typ:he(null,0)},{json:"profilePicture",js:"profilePicture",typ:he(null,"")},{json:"phone",js:"phone",typ:he(null,"")},{json:"email",js:"email",typ:he(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:he(null,Date)},{json:"religion",js:"religion",typ:he(null,0)},{json:"nationality",js:"nationality",typ:he(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:he(null,"")},{json:"stateProvince",js:"stateProvince",typ:he(null,"")},{json:"region",js:"region",typ:he(null,0)},{json:"district",js:"district",typ:he(null,0)},{json:"constituency",js:"constituency",typ:he(null,0)},{json:"electoralArea",js:"electoralArea",typ:he(null,0)},{json:"community",js:"community",typ:he(null,"")},{json:"hometown",js:"hometown",typ:he(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:he(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:he(null,"")},{json:"level",js:"level",typ:he(null,0)},{json:"status",js:"status",typ:he(null,0)},{json:"accountType",js:"accountType",typ:he(null,0)},{json:"memberType",js:"memberType",typ:he(null,0)},{json:"date",js:"date",typ:he(null,Date)},{json:"last_login",js:"lastLogin",typ:he(null,Date)},{json:"referenceId",js:"referenceID",typ:he(null,"")},{json:"branchId",js:"branchID",typ:he(null,0)},{json:"editable",js:"editable",typ:he(null,!0)},{json:"profileResume",js:"profileResume",typ:he(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:he(null,he(null,""))},{json:"archived",js:"archived",typ:he(null,!0)},{json:"updatedBy",js:"updatedBy",typ:he(null,0)},{json:"updateDate",js:"updateDate",typ:he(null,Date)},{json:"updatedByInfo",js:"updatedByInfo",typ:he(null,je("EdByInfo"))},{json:"branchInfo",js:"branchInfo",typ:he(null,je("BranchInfo"))},{json:"categoryInfo",js:"categoryInfo",typ:he(null,je("CategoryInfo"))},{json:"countryInfo",js:"countryInfo",typ:he(null,me(je("CountryInfo")))},{json:"regionInfo",js:"regionInfo",typ:he(null,je("RegionI"))},{json:"districtInfo",js:"districtInfo",typ:he(null,je("ConstituencyInfo"))},{json:"identification",js:"identification",typ:he(null,"")},{json:"organizationName",js:"organizationName",typ:he(null,"")},{json:"contactPersonName",js:"contactPersonName",typ:he(null,"")},{json:"organizationType",js:"organizationType",typ:he(null,je("CategoryInfo"))},{json:"businessRegistered",js:"businessRegistered",typ:he(null,!0)},{json:"organizationPhone",js:"organizationPhone",typ:he(null,"")},{json:"organizationEmail",js:"organizationEmail",typ:he(null,"")},{json:"contactPersonGender",js:"contactPersonGender",typ:he(null,0)},{json:"contactPersonPhoto",js:"contactPersonPhoto",typ:he(null,"")},{json:"dateOfIncorporation",js:"dateOfIncorporation",typ:he(null,Date)},{json:"logo",js:"logo",typ:he(null,"")},{json:"contactPersonPhone",js:"contactPersonPhone",typ:he(null,"")},{json:"contactPersonEmail",js:"contactPersonEmail",typ:he(null,"")},{json:"countryOfBusiness",js:"countryOfBusiness",typ:he(null,"")},{json:"constituencyInfo",js:"constituencyInfo",typ:he(null,je("ConstituencyInfo"))},{json:"electoralareaInfo",js:"electoralareaInfo",typ:he(null,je("ConstituencyInfo"))},{json:"certificates",js:"certificates",typ:he(null,me(je("Certificate")))}],!1),BranchInfo:fe([{json:"id",js:"id",typ:he(null,0)},{json:"name",js:"name",typ:he(null,"")},{json:"accountId",js:"accountID",typ:he(null,0)},{json:"createdBy",js:"createdBy",typ:he(null,0)},{json:"creationDate",js:"creationDate",typ:he(null,Date)},{json:"updatedBy",js:"updatedBy",typ:he(null,0)},{json:"updateDate",js:"updateDate",typ:he(null,Date)}],!1),CategoryInfo:fe([{json:"id",js:"id",typ:he(null,0)},{json:"clientId",js:"clientID",typ:he(null,0)},{json:"category",js:"category",typ:he(null,"")},{json:"createdBy",js:"createdBy",typ:he(null,0)},{json:"updatedBy",js:"updatedBy",typ:he(null,0)},{json:"updateDate",js:"updateDate",typ:he(null,Date)},{json:"date",js:"date",typ:he(null,Date)},{json:"memberId",js:"memberID",typ:he(null,0)},{json:"type",js:"type",typ:he(null,"")}],!1),Certificate:fe([{json:"id",js:"id",typ:he(null,0)},{json:"memberId",js:"memberID",typ:he(null,0)},{json:"attachment",js:"attachment",typ:he(null,je("Attachment"))},{json:"date",js:"date",typ:he(null,Date)}],!1),Attachment:fe([{json:"id",js:"id",typ:he(null,0)},{json:"clientId",js:"clientID",typ:he(null,0)},{json:"attachment",js:"attachment",typ:he(null,"")},{json:"filename",js:"filename",typ:he(null,"")},{json:"source",js:"source",typ:he(null,"")},{json:"size",js:"size",typ:he(null,"")},{json:"folderId",js:"folderID",typ:he(null,je("FolderID"))},{json:"fileDescription",js:"fileDescription",typ:he(null,"")},{json:"createdBy",js:"createdBy",typ:he(null,0)},{json:"updatedBy",js:"updatedBy",typ:he(null,0)},{json:"updateDate",js:"updateDate",typ:he(null,Date)},{json:"archived",js:"archived",typ:he(null,!0)},{json:"archivedBy",js:"archivedBy",typ:he(null,0)},{json:"archivedDate",js:"archivedDate",typ:he(null,Date)},{json:"date",js:"date",typ:he(null,Date)}],!1),FolderID:fe([{json:"id",js:"id",typ:he(null,0)},{json:"parentFolder",js:"parentFolder",typ:he(null,he(0,null))},{json:"clientId",js:"clientID",typ:he(null,0)},{json:"branchId",js:"branchID",typ:he(null,0)},{json:"folder",js:"folder",typ:he(null,"")},{json:"folderType",js:"folderType",typ:he(null,0)},{json:"createdBy",js:"createdBy",typ:he(null,0)},{json:"updatedBy",js:"updatedBy",typ:he(null,0)},{json:"updateDate",js:"updateDate",typ:he(null,Date)},{json:"date",js:"date",typ:he(null,Date)}],!1),ConstituencyInfo:fe([{json:"id",js:"id",typ:he(null,0)},{json:"regionId",js:"regionID",typ:he(null,je("RegionI"))},{json:"districtId",js:"districtID",typ:he(null,je("ConstituencyInfo"))},{json:"location",js:"location",typ:he(null,"")}],!1),RegionI:fe([{json:"id",js:"id",typ:he(null,0)},{json:"location",js:"location",typ:he(null,"")}],!1),CountryInfo:fe([{json:"id",js:"id",typ:he(null,0)},{json:"name",js:"name",typ:he(null,"")},{json:"short",js:"short",typ:he(null,"")},{json:"code",js:"code",typ:he(null,"")}],!1)};var ge=n(4173),ve=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let we=class extends o.oi{constructor(){super(),this._historyData=null,this.filter_start_date_val=null,this.filter_end_date_val=null,this.memberProfileBaseUrl="/member/member-profile?view="}set historyData(e){this._historyData=e,this.requestUpdate()}get historyData(){return this._historyData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e,t,n,s,i,r,l,a,c,d,u,p,y,m,h,f,b,g,v,_,w,D;const S=(0,j.h)(String(null===(n=null===(t=null===(e=this.historyData)||void 0===e?void 0:e.history)||void 0===t?void 0:t.member)||void 0===n?void 0:n.id),!0),x=null===(r=null===(i=null===(s=this.historyData)||void 0===s?void 0:s.history)||void 0===i?void 0:i.meetings)||void 0===r?void 0:r.length;return o.dy`
      <div class="flex whitespace-normal mb-0 flex-col">
        <div class="flex items-center justify-center">
          <user-profile-photo class="w-24 h-24 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${S}" type="member"
            url="${null===(c=null===(a=null===(l=this.historyData)||void 0===l?void 0:l.history)||void 0===a?void 0:a.member)||void 0===c?void 0:c.profilePicture}" size="24">
          </user-profile-photo>
          <mwc-button class="my-2 ${1===(null===(d=this.historyData)||void 0===d?void 0:d.status.id)?"success":"danger"}" outlined>
            ${null===(u=this.historyData)||void 0===u?void 0:u.status.name}
          </mwc-button>
        </div>
        <div class="shadow p-2 md:p-4 bg-white rounded text-black">
          <h3 class="font-semibold text-base md:text-lg whitespace-nowrap">${null===(m=null===(y=null===(p=this.historyData)||void 0===p?void 0:p.history)||void 0===y?void 0:y.member)||void 0===m?void 0:m.firstname} ${null===(b=null===(f=null===(h=this.historyData)||void 0===h?void 0:h.history)||void 0===f?void 0:f.member)||void 0===b?void 0:b.middlename} ${null===(_=null===(v=null===(g=this.historyData)||void 0===g?void 0:g.history)||void 0===v?void 0:v.member)||void 0===_?void 0:_.surname}</h3>
          ${0==this.filter_start_date_val.length||0==this.filter_end_date_val.length?o.dy``:o.dy`<p class="text-sm md:text-base">${(0,ge._)(new Date(this.filter_start_date_val),{dateStyle:"medium"})} - ${(0,ge._)(new Date(this.filter_end_date_val),{dateStyle:"medium"})}</p>`}
          <p class="font-bold text-sm md:text-base">${x} Meeting${x>1?"s":""}</p>
          <div class="flex flex-row justify-between mt-2 md:mt-4">
            <span class="text-sm md:text-base">Over-Time</span>
            <b class="text-sm md:text-base">: ${null===(w=this.historyData)||void 0===w?void 0:w.overtime}</b>
          </div>
          <div class="flex flex-row justify-between mt-2 md:mt-4">
            <span class="text-sm md:text-base">Under-Time</span>
            <b class="text-sm md:text-base">: ${null===(D=this.historyData)||void 0===D?void 0:D.undertime}</b>
          </div>
        </div>

      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};we.styles=[o.iv`
   :host { display: block; }
  `],ve([(0,s.Cb)({type:String}),_e("design:type",String)],we.prototype,"filter_start_date_val",void 0),ve([(0,s.Cb)({type:String}),_e("design:type",String)],we.prototype,"filter_end_date_val",void 0),ve([(0,s.Cb)({type:String}),_e("design:type",String)],we.prototype,"memberProfileBaseUrl",void 0),we=ve([(0,s.Mo)("pdb-attendance-clocking-history-col-1-ind-profile"),_e("design:paramtypes",[])],we);var De=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},Se=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xe=class extends o.oi{constructor(){super(),this._historyData=null,this.filter_start_date_val=null,this.filter_end_date_val=null,this.memberProfileBaseUrl="/member/organization/member-profile?view="}set historyData(e){this._historyData=e,this.requestUpdate()}get historyData(){return this._historyData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e,t,n,s,i,r,l,a,c,d,u,p,y,m,h,f;const b=(0,j.h)(String(null===(n=null===(t=null===(e=this.historyData)||void 0===e?void 0:e.history)||void 0===t?void 0:t.member)||void 0===n?void 0:n.id),!0),g=null===(r=null===(i=null===(s=this.historyData)||void 0===s?void 0:s.history)||void 0===i?void 0:i.meetings)||void 0===r?void 0:r.length;return o.dy`
      <div class="flex items-center whitespace-normal mb-0 flex-col md:flex-row">
        <div>
          <user-profile-photo class="w-24 h-24 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${b}" type="member"
            url="${null===(c=null===(a=null===(l=this.historyData)||void 0===l?void 0:l.history)||void 0===a?void 0:a.member)||void 0===c?void 0:c.logo}" size="24">
          </user-profile-photo>
          <mwc-button class="mt-2 ${1===(null===(d=this.historyData)||void 0===d?void 0:d.status.id)?"success":"danger"}" outlined>
            ${null===(u=this.historyData)||void 0===u?void 0:u.status.name}
          </mwc-button>
        </div>
        <div class="shadow p-1 block bg-white rounded text-black">
          <h3 class="font-semibold text-2x whitespace-nowrap">${null===(m=null===(y=null===(p=this.historyData)||void 0===p?void 0:p.history)||void 0===y?void 0:y.member)||void 0===m?void 0:m.organizationName}</h3>
          <p>${(0,ge._)(new Date(this.filter_start_date_val),{dateStyle:"medium"})} - ${(0,ge._)(new Date(this.filter_end_date_val),{dateStyle:"medium"})}</p>
          <p class="font-bold">${g} Meeting${g>1?"s":""}</p>
          <div class="flex justify-between"><span>Over-Time</span><b>: ${null===(h=this.historyData)||void 0===h?void 0:h.overtime}</b></div>
          <div class="flex justify-between"><span>Under-Time</span><b>: ${null===(f=this.historyData)||void 0===f?void 0:f.undertime}</b></div>
        </div>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};xe.styles=[o.iv`
   :host { display: block; }
  `],De([(0,s.Cb)({type:String}),Se("design:type",String)],xe.prototype,"filter_start_date_val",void 0),De([(0,s.Cb)({type:String}),Se("design:type",String)],xe.prototype,"filter_end_date_val",void 0),De([(0,s.Cb)({type:String}),Se("design:type",String)],xe.prototype,"memberProfileBaseUrl",void 0),xe=De([(0,s.Mo)("pdb-attendance-clocking-history-col-1-org-profile"),Se("design:paramtypes",[])],xe);var Ie=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},Oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $e=class extends o.oi{constructor(){super(),this.historyDataStr=null,this._historyData=null,this.filter_start_date_val=null,this.filter_end_date_val=null}set historyData(e){this._historyData=e,this.requestUpdate()}get historyData(){return this._historyData}connectedCallback(){super.connectedCallback(),this.format_str_history_data()}disconnectedCallback(){}render(){var e,t,n;let s=o.dy``;return s=1===(null===(n=null===(t=null===(e=this.historyData)||void 0===e?void 0:e.history)||void 0===t?void 0:t.member)||void 0===n?void 0:n.accountType)?o.dy`<pdb-attendance-clocking-history-col-1-ind-profile filter_start_date_val="${this.filter_start_date_val}"
        filter_end_date_val="${this.filter_end_date_val}" .historyData="${this.historyData}">
        </pdb-attendance-clocking-history-col-1-ind-profile>
      `:o.dy`<pdb-attendance-clocking-history-col-1-org-profile filter_start_date_val="${this.filter_start_date_val}"
        filter_end_date_val="${this.filter_end_date_val}" .historyData="${this.historyData}">
        </pdb-attendance-clocking-history-col-1-org-profile>
      `,o.dy`<div>${s}</div>`}firstUpdated(){}format_str_history_data(){null===this.historyData&&null!==this.historyDataStr&&(this.historyData=ce.toMeetingAttendanceHistoryModel(this.historyDataStr))}createRenderRoot(){return this}};$e.styles=[o.iv`
   :host { display: block; }
  `],Ie([(0,s.Cb)({type:String}),Oe("design:type",String)],$e.prototype,"historyDataStr",void 0),Ie([(0,s.Cb)({type:String}),Oe("design:type",String)],$e.prototype,"filter_start_date_val",void 0),Ie([(0,s.Cb)({type:String}),Oe("design:type",String)],$e.prototype,"filter_end_date_val",void 0),$e=Ie([(0,s.Mo)("pdb-attendance-clocking-history-col-1"),Oe("design:paramtypes",[])],$e);let ke=class extends o.oi{constructor(){super(),this._meetingData=null}set meetingData(e){this._meetingData=e,this.requestUpdate()}get meetingData(){return this._meetingData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e,t,n,s,i,r,l,a,c;return o.dy`
      <div class="mt-1 mb-2">
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Status</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(e=this.meetingData)||void 0===e?void 0:e.status.name}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Attendance</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(t=this.meetingData)||void 0===t?void 0:t.totalAttendance}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Lateness:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(n=this.meetingData)||void 0===n?void 0:n.lateness}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Break Overstay:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(s=this.meetingData)||void 0===s?void 0:s.breakOverstay}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Productive Hours:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(i=this.meetingData)||void 0===i?void 0:i.productiveHours}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Over-time:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(r=this.meetingData)||void 0===r?void 0:r.overtime}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Under-time:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(l=this.meetingData)||void 0===l?void 0:l.undertime}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">On Time:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(a=this.meetingData)||void 0===a?void 0:a.onTime}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Overtime:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${null===(c=this.meetingData)||void 0===c?void 0:c.overtime}</p>
        </div>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};ke.styles=[o.iv`
   :host { display: block; }
  `],ke=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r}([(0,s.Mo)("pdb-attendance-clocking-history-col-2-content-breakdown-meeting"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],ke);var Be=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},Ae=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Te=class extends o.oi{constructor(){super(),this._historyData=null,this.dialog_prefix="member-attendance-history"}set historyData(e){this._historyData=e,this.requestUpdate()}get historyData(){return this._historyData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e,t,n,s,i,r;return o.dy`
      <mwc-dialog open-this-dialog="${this.dialog_prefix}-${null===(n=null===(t=null===(e=this.historyData)||void 0===e?void 0:e.history)||void 0===t?void 0:t.member)||void 0===n?void 0:n.id}" heading="History Breakdown">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            ${""}
            <accordion-component class="my-2">
              ${null===(r=null===(i=null===(s=this.historyData)||void 0===s?void 0:s.history)||void 0===i?void 0:i.meetings)||void 0===r?void 0:r.map((e=>o.dy`
                  <accordion-item breakdown title="${this.meetingName(e.meeting.name)}">
                    <pdb-attendance-clocking-history-col-2-content-breakdown-meeting
                      .meetingData="${e}">
                    </pdb-attendance-clocking-history-col-2-content-breakdown-meeting>
                  </accordion-item>
                `))}
            </accordion-component>
            --
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}firstUpdated(){}meetingName(e){return e.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}createRenderRoot(){return this}};Te.styles=[o.iv`
   :host { display: block; }
  `],Be([(0,s.Cb)({type:String}),Ae("design:type",String)],Te.prototype,"dialog_prefix",void 0),Te=Be([(0,s.Mo)("pdb-attendance-clocking-history-col-2-content-breakdown"),Ae("design:paramtypes",[])],Te);var Ce=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},Ne=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Pe=class extends o.oi{constructor(){super(),this._historyData=null,this.dialog_prefix="member-attendance-history"}set historyData(e){this._historyData=e,this.requestUpdate()}get historyData(){return this._historyData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e,t,n,s;const i=null===(e=this.historyData)||void 0===e?void 0:e.history.meetings.length;let r=o.dy``;return i>0&&(r=o.dy`
        <mwc-button class="my-2 success" @click="${this.showDialog}" raised 
          open-dialog-btn="${this.dialog_prefix}-${null===(t=this.historyData)||void 0===t?void 0:t.history.member.id}">
          Show Breakdown
        </mwc-button>
        <pdb-attendance-clocking-history-col-2-content-breakdown
          .historyData="${this.historyData}" dialog_prefix="${this.dialog_prefix}">
        </pdb-attendance-clocking-history-col-2-content-breakdown>
      `),o.dy`
      <!-- <div class="mb-0">
        <div> -->
          <p class="flex justify-between"><b>Total Attendance:</b><span> ${this.totalAttendance}</span></p>
          <p class="flex justify-between"><b>On Time:</b><span class="text-green-600"> ${null===(n=this.historyData)||void 0===n?void 0:n.onTime}</span></p>
          <p class="flex justify-between"><b>Lateness:</b><span class="text-red-600"> ${null===(s=this.historyData)||void 0===s?void 0:s.lateness}</span></p>
          ${r}
        <!-- </div>
      </div> -->
    `}get totalAttendance(){var e,t;const n=null===(e=this.historyData)||void 0===e?void 0:e.totalAttendance.split("/");return 2===(null==n?void 0:n.length)?o.dy`<span class="text-green-600">${n[0]}</span>/ <span class="text-red-600">${n[1]}</span>`:null===(t=this.historyData)||void 0===t?void 0:t.totalAttendance}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}firstUpdated(){}createRenderRoot(){return this}};Pe.styles=[o.iv`
   :host { display: block; }
  `],Ce([(0,s.Cb)({type:String}),Ne("design:type",String)],Pe.prototype,"dialog_prefix",void 0),Pe=Ce([(0,s.Mo)("pdb-attendance-clocking-history-col-2-content"),Ne("design:paramtypes",[])],Pe);var Me=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},Re=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ee=class extends o.oi{constructor(){super(),this.historyDataStr=null,this._historyData=null}set historyData(e){this._historyData=e,this.requestUpdate()}get historyData(){return this._historyData}connectedCallback(){super.connectedCallback(),this.format_str_history_data()}disconnectedCallback(){}render(){return o.dy`<pdb-attendance-clocking-history-col-2-content
      .historyData="${this.historyData}">
      </pdb-attendance-clocking-history-col-2-content>`}firstUpdated(){}format_str_history_data(){null===this.historyData&&null!==this.historyDataStr&&(this.historyData=ce.toMeetingAttendanceHistoryModel(this.historyDataStr))}createRenderRoot(){return this}};Ee.styles=[o.iv`
   :host { display: block; }
  `],Me([(0,s.Cb)({type:String}),Re("design:type",String)],Ee.prototype,"historyDataStr",void 0),Ee=Me([(0,s.Mo)("pdb-attendance-clocking-history-col-2"),Re("design:paramtypes",[])],Ee);var Ue,Je,ze,Fe=function(e,t,n,o){var s,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},Le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},He=function(e,t,n,o){return new(n||(n=Promise))((function(s,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function l(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};let qe=class extends o.oi{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.filter_start_date_val="",this.filter_end_date_val="",this.datatablePathUrl="attendance/meeting-event/member-attendance-history",this.memberProfileBaseUrl="/member/member-profile?view=",this._genders=[],this._schedules=[],this.startSearchPage=0,this.accountType=1,this.accountTypeChanged=!1,this._memberCategories=[],this._activeBranchId=null,this.selectedBranch=1,this._memberType=1,this.__members=null,this.__schedule=null,this.filterBoxStarted=!1,this._hasSetup=!1,this._selectedMembersCalled=!1,this._selectedMembersNames=null,this._groups=[],this._subgroups=[],this._branches=[],this._pageButtonAccess=!1}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return He(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,A.f)().then((()=>this._hasSetup=!0)),this.getMeetingEventId();const t=(0,f.hk)();this._activeBranchId=null===t?null:[t],null!==this._activeBranchId&&(this.selectedBranch=this._activeBranchId[0].id),this.filterBox=new D.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getAttendanceSchedule(),yield this.getGenders(),yield this.getClientMemberCategories(),yield this.getBranches(),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,T.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,C.OR)(N.W.attendance_history),!(0,C.H)({pageId:N.W.attendance_history,viewType:"Both"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
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
        <div class="block my-1">
          ${this.downloadBtns}
          <div class="flex w-full items-center justify-center">
            <div class="block w-full xl:w-[45%]">
              ${this.table}
            </div>
          </div>
        </div>
      </div>
    `}get downloadBtns(){return o.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadHistoryExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadHistoryPdf}">
        </mwc-button>
      </div>
    `}changeActions(){const e=this;document.querySelectorAll('[name="filter_member_category"]').forEach((t=>{t.addEventListener("change",(n=>{const o=t.selectedCategory;o>0&&(e._memberType=o)}))})),document.querySelectorAll('[name="filter_branch"]').forEach((t=>{t.addEventListener("change",(n=>{const o=t.currentValue;o>0&&(e.selectedBranch=o)}))}))}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new D.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]}),this.filterBoxStarted=!0,this.dialog()))})),this.changeActions()}getMeetingEventId(){let e=(0,v.Jx)("meeting-event-id"),t=null!==e?(0,j.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,j.h)(String(this.meetingEventId),!0)}get filterForm(){let e=o.dy``;const t=(0,v.O1)(),n="filter_start_date",s="filter_end_date",i="filter_gender",r="search_member",l="filter_branch",a="filter_member_category",c="filter_group",d="filter_subgroup",u="filter_from_age",p="filter_to_age",y="filter_memberIds",m="filter_meetingIds",h="accountType",f="filter_activeStatus";let j=null,b=null,g=null,_=null,w=this.selectedBranch,D=this._memberType,S=null,x=null,I=null,$=null,k=null,B=this.accountType,A=[],T=[];for(const e in t){let o=String(t[e]);if(o=""===o?null:o,e===n){if(null===o){const e=new Date;let t=e.getDate()-30;t=e.setDate(t);const n=new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");j=[n[2],n[0],n[1]].join("-")}else{const e=new Date(o).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");j=[e[2],e[0],e[1]].join("-")}this.filter_start_date_val=j}if(e===s){if(null===o){const e=(new Date).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");b=[e[2],e[0],e[1]].join("-")}else{const e=new Date(o).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");b=[e[2],e[0],e[1]].join("-")}this.filter_end_date_val=b}e===i&&(g=o),e===r&&(_=o),e===l&&(w=Number(o)),e===a&&(D=Number(o)),e===f&&(k=Number(o)),e===c&&(S=Number(o)),e===d&&(x=Number(o)),e===u&&(I=Number(o)),e===p&&($=Number(o)),e===h&&(B=Number(o),!1===this.accountTypeChanged&&(this.accountType=B)),e===y?A=[String(o)]:e===`${y}[]`&&(A=(0,v.Vc)(`${y}[]`)),e===m?T=[String(o)]:e===`${m}[]`&&(T=(0,v.Vc)(`${m}[]`))}const C=o.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Filter Age In Years</h4>
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick From Age" 
              value="${null===I?"":I}" class="mr-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${p}" id="${p}" label="Pick To Age" 
              value="${null===$?"":$}" class="ml-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,N=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${D}" 
            name="${a}" id="${a}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,P=o.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Pick Dates</h4>
          <div class="flex">
            <mwc-textfield type="date" name="${n}" id="${n}"
            value="${j}" class="mr-1" outlined required></mwc-textfield>
            <mwc-textfield type="date" name="${s}" id="${s}"
            value="${b}" class="ml-1" outlined required></mwc-textfield>
          </div>
        </div>
      </div>`,M=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Gender</h4>
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===g?o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(g)===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,R=["Individual Account","Organization Account"].map(((e,t)=>{const n=t+1;let o=!1,s="false";return B===n&&(o=!0,s="true"),{id:n,name:e,isSelected:s,selected:o}})),E=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Account Type</h4>
          <mwc-select name="${h}" id="${h}" label="Select Account Type" @change="${this.accountTypeChange}" outlined required>
            <mwc-list-item value="">Select Account Type</mwc-list-item>
            ${R.map((e=>Number(B)===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,U=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Active Status</h4>
          <mwc-select name="${f}" id="${f}" label="Select Active Status" outlined required>
            <mwc-list-item value="">Select Active Status</mwc-list-item>
            <mwc-list-item value="1" ?selected="${1===k}">Active</mwc-list-item>
            <mwc-list-item value="2" ?selected="${2===k}">Inactive</mwc-list-item>
          </mwc-select>
        </div>
      </div>`,J=o.dy`
      <div class="col-xl-12 col-md-12">
        <div class="form-input-container !block">
          ${this.memberListField}
          <div class="flex flex-wrap gap-2 p-1 my-2 shadow">
            ${(0,O.C)(this.getMembersByIds(null==A?void 0:A.map((e=>Number.isNaN(e)?0:Number(e)))),o.dy`<span>Loading...</span>`)}
          </div>
        </div>
      </div>`,z=this.groupsSubgroupsBranches([S],[x],[w]),F=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select name="${l}" id="${l}" label="Select Branch"
            @change="${this.branchChange}" outlined required>
            ${z.branches.map((e=>Number(w)===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,L=o.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${c}" id="${c}" class="w-full" label="Select Group"
            .options="${z.groups}" outlined required>
          </select-input>
        </div>
      </div>`,H=o.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${d}" id="${d}" class="w-full" label="Select Sub-Group"
            .options="${z.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`,q=this._schedules.map((e=>{let t="false",n=!1;return T.forEach((o=>{e.id===Number(o)&&(t="true",n=!0)})),{id:e.id,name:e.name,isSelected:t,selected:n}})),G=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name/ ID/ E-mail/ Phone Number</h4>
          <mwc-textfield type="text" name="${r}" id="${r}"
            label="Search By Name/ ID/ E-mail/ Phone Number"
            value="${null===_?"":_}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,W=o.dy`
      <div class="col-xl-12 col-md-12">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Meeting(s)</h4>
          <select-input name="${m}" id="${m}" multiple
            label="Select Meeting(s)" .options="${q}" outlined required>
          </select-input>
        </div>
      </div>`;return e=o.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${F} ${N} ${E} ${W}
            </div>
          </div>
          <div class="container">
            <accordion-component class="my-2">
              <accordion-item title="Member Filter">
                <div class="mt-1 mb-2 row">
                  ${U} ${M} ${G} ${J}
                </div>
              </accordion-item>
              <accordion-item title="Group Filter">
                <div class="mt-1 mb-2 row">
                  ${L} ${H}
                </div>
              </accordion-item>
              <accordion-item title="Age/ Date Filters">
                <div class="mt-1 mb-2 row">
                  ${C} ${P}
                </div>
              </accordion-item>
            </accordion-component>
            ${""}
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
      </form>`,e}groupsSubgroupsBranches(e,t,n){let o=[{id:"",name:"Select Groups",isSelected:"false",selected:!1}],s=[{id:"",name:"Select Sub-Groups",isSelected:"false",selected:!1}],i=[{id:"",name:"Select Branches",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let n=!1;e.forEach((e=>{e===t.id&&(n=!0)}));let s=!1,i="false";n&&(s=!0,i="true");const r={id:t.id,name:t.group,isSelected:i,selected:s};o.includes(r)||o.push(r)})),this._subgroups.forEach((e=>{let n=!1;t.forEach((t=>{t===e.id&&(n=!0)}));let o=!1,i="false";n&&(o=!0,i="true");const r={id:e.id,name:`${e.groupID.group} => ${e.subgroup}`,isSelected:i,selected:o};s.includes(r)||s.push(r)})),this._branches.forEach((e=>{let t=!1;n.forEach((n=>{n===e.id&&(t=!0)}));let o=!1,s="false";t&&(o=!0,s="true");const r={id:e.id,name:`${e.name}`,isSelected:s,selected:o};i.includes(r)||i.push(r)})),{groups:o,subgroups:s,branches:i}}get __tableHeaders(){return[{title:"History"},{title:o.dy`<span class="block">MEETING RECORDS</span>`}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"History"},{title:o.dy`<span class="block">MEETING RECORDS</span>`}]}get table(){const e=this._memberType;let t=this.selectedBranch,n=b.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const s=this.__dataTable(n);let i={};const r=(0,g.Ie)();return i.Authorization="Token "+r.token,o.dy`
      <datatables-new .datatable="${s}" .ajaxHeader="${i}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}" id="attendance-history"></datatables-new>
    `}get urlQueryString(){const e=(0,v.O1)(),t="filter_start_date",n="filter_end_date",o="filter_member_category",s="filter_from_age",i="filter_to_age",r="filter_memberIds",l="filter_meetingIds";let a={},c=[],d=[];for(const u in e){let p=String(e[u]),y=`${r}[]`,m=`${l}[]`;u!==t&&u!==n&&"filter_gender"!==u&&"filter_branch"!==u&&"search_member"!==u&&u!==o&&"filter_group"!==u&&"filter_subgroup"!==u&&u!==s&&u!==i&&u!==r&&u!==l&&"filter_activeStatus"!==u&&u!==m&&u!==y||(u!==s&&u!==i||p<="0"&&delete a[u],u===t||u===n?a[u]=u===t?this.filter_start_date_val:this.filter_end_date_val:(a[u]=p,u!==m&&u!==y||(c=(0,v.Vc)(m),d=(0,v.Vc)(y))))}o in a||(a[o]="1"),s in a&&i in a&&a[s]>1&&a[i]>1||(delete a[s],delete a[i]);let u=(0,v.Jx)(t);const p=this.today_last_month_date;console.log({filter_start_date:u,today_last_month_date:p}),null===u&&(a[t]=p[1]);let y=(0,v.Jx)(n);console.log({filter_end_date:y}),null===y&&(a[n]=p[0]);let m="";c.forEach((e=>m+=`&${l}=${e}`)),d.forEach((e=>m+=`&${r}=${e}`));let h=(0,v.W3)(a),f=0===h.length?h:"&"+h+m;return f=`${f}`,f}get today_last_month_date(){const e=new Date,t=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,n=new Date(e.getFullYear(),e.getMonth()-1,0);return[t,`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`]}get memberListField(){return 1===Number(this.accountType)?this.individualMemberList:2===Number(this.accountType)?this.organizationMemberList:void 0}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,g.Ie)();return e.Authorization="Token "+t.token,o.dy`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="filter_memberIds" name="filter_memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const o=e.count,s=e.results,i=document.querySelector('[id="filter_memberIds"]');let r=[];if(o>0){var l=s;for(let e=0;e<l.length;e++){const t=l[e],o=R.e.toMembershipUserModel(JSON.stringify(t)),s={id:o.id,text:`${o.firstname} ${null!==(n=o.middlename)&&void 0!==n?n:""} ${o.surname}`};r.includes(s)||r.push(s)}}return{results:r,total:o,totalShowing:i.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${b.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,g.Ie)();return e.Authorization="Token "+t.token,o.dy`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="filter_memberIds" name="filter_memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,o=e.results,s=document.querySelector('[id="filter_memberIds"]');let i=[];if(n>0){var r=o;for(let e=0;e<r.length;e++){const t=r[e],n=E.e.toMembershipOrganizationUserModel(JSON.stringify(t)),o={id:n.id,text:`${n.organizationName}`};i.includes(o)||i.push(o)}}return{results:i,total:n,totalShowing:s.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${b.t.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `}get ajaxFetchUrlParams(){let e=this.selectedBranch;return[{param:"branchId",value:String(e)}]}getMembersByIds(e){var t;return He(this,void 0,void 0,(function*(){e=null===e?[]:e;let n=[];if(!1===this._selectedMembersCalled){this._selectedMembersCalled=!0;const s=yield function(e=null,t=1){return n=this,o=void 0,i=function*(){const n=(0,g.Ie)();let o="";o=1===t?b.t.URLS.AKWAABA_API_BASE_URL+"members/user/memberids":b.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/memberids";const s={memberIds:e},i=yield(0,P.d)(o,{method:"POST",body:JSON.stringify(s),headers:{Authorization:"Token "+n.token}},!0,!0);try{return new B.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new B.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,t){function r(e){try{a(i.next(e))}catch(e){t(e)}}function l(e){try{a(i.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,l)}a((i=i.apply(n,o||[])).next())}));var n,o,s,i}(e,this.accountType);if(null!==s&&!0===s.response.success){const e=s.response.data;n=null===(t=e.results)||void 0===t?void 0:t.map((e=>M.e.toMembershipMixedUserModel(JSON.stringify(e))))}const i=null==n?void 0:n.map((e=>{var t;return 1===this.accountType?o.dy`
            <span
              class="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full p-1.5 text-xs">
              <span>${e.firstname} ${null!==(t=e.middlename)&&void 0!==t?t:""} ${e.surname}</span>
            </span>
          `:o.dy`
            <span
              class="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full p-1.5 text-xs">
              <span>${e.organizationName}</span>
            </span>
          `}));this._selectedMembersNames=i}return this._selectedMembersNames}))}accountTypeChange(e){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);t>0&&setTimeout((()=>{this.accountTypeChanged=!0,this.accountType=t}),50)}branchChange(e){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);t>0&&(this.selectedBranch=t)}memberCategoryChange(e){const t=Number.isNaN(e.currentTarget.value)?1:Number(e.currentTarget.value);this._memberType=t}getGenders(){return He(this,void 0,void 0,(function*(){const e=yield(0,_.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,w.y)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}downloadHistoryPdf(){return He(this,void 0,void 0,(function*(){const e=this._memberType;let t="?branchId="+this.selectedBranch+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString,yield function(e=""){return t=this,n=void 0,s=function*(){const t=(0,g.Ie)(),n=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-history/download-pdf"+e,o=yield(0,k.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return o}catch(e){let t=o;return t.error=e,new B.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function l(e){try{a(s.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}a((s=s.apply(t,n||[])).next())}));var t,n,o,s}(t)}))}downloadHistoryExcel(){return He(this,void 0,void 0,(function*(){const e=this._memberType;let t="?branchId="+this.selectedBranch+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString,yield function(e=""){return t=this,n=void 0,s=function*(){const t=(0,g.Ie)(),n=b.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-history/download-excel"+e,o=yield(0,k.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return o}catch(e){let t=o;return t.error=e,new B.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function l(e){try{a(s.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}a((s=s.apply(t,n||[])).next())}));var t,n,o,s}(t)}))}getClientMemberCategories(){return He(this,void 0,void 0,(function*(){const e=yield(0,x.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}renderCol1Info(e,t,n){return`\n      <pdb-attendance-clocking-history-col-1 filter_start_date_val="${this.filter_start_date_val}"\n        filter_end_date_val="${this.filter_end_date_val}" historyDataStr='${JSON.stringify(n).split("'").join("&rsquo;")}'\n        style="display: block; height: 200px; position: relative; top: -75px;">\n      </pdb-attendance-clocking-history-col-1>\n      <div class="whitespace-nowrap block sm:hidden">\n        ${this.renderCol2Info(e,t,n,"block","0","100px")}\n      </div>\n    `}renderCol2Info(e,t,n,o="block w-72",s="-75px",i="150px"){return`\n      <div class="${o}">\n        <pdb-attendance-clocking-history-col-2 historyDataStr='${JSON.stringify(n).split("'").join("&rsquo;")}'\n          style="display: block; height: ${i}; position: relative; top: ${s};">\n        </pdb-attendance-clocking-history-col-2>\n      </div>\n    `}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}getAttendanceSchedule(){return He(this,void 0,void 0,(function*(){let e=this.selectedBranch;const t=yield(0,$.u)(null,"?length=1000000&branchId="+e);null===t?this._schedules=[]:"results"in t.paginResponse&&(this._schedules=t.paginResponse.results)}))}getBranches(){return He(this,void 0,void 0,(function*(){const e=yield(0,ae.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>ee.toClientBranchModel(JSON.stringify(e)))));const n=[];n.push(...this._branches,...t),this._branches=n}))}getGroups(){return He(this,void 0,void 0,(function*(){const e=this._memberType;let t,n=this.selectedBranch;t=null===e||0==e?yield(0,S.c)(null,"?branchId="+n):yield(0,S.c)(null,"?branchId="+n+"&memberCategoryId="+e);let o=[];if(null===t)o.push({id:0,group:"**NOT FOUND**",date:new Date});else if(!0===t.response.success&&"length"in t.response.data){const e=t.response.data.map((e=>U.toGroupModel(JSON.stringify(e))));o=e}const s=[];s.push(...this._groups,...o),this._groups=s}))}getSubGroups(){return He(this,void 0,void 0,(function*(){const e=this._memberType;let t,n=this.selectedBranch;t=null===e||0==e?yield(0,I.U)(null,"?branchId="+n):yield(0,I.U)(null,"?branchId="+n+"&memberCategoryId="+e);let o=[];if(null===t)o.push({id:0,subgroup:"**NOT FOUND**",date:new Date});else if(!0===t.response.success&&"length"in t.response.data){const e=t.response.data.map((e=>W.toSubGroupModel(JSON.stringify(e))));o=e}const s=[];s.push(...this._subgroups,...o),this._subgroups=s}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"breakOverstay",render:(e,n,o)=>t.renderCol1Info(e,n,o),orderable:!0},{data:"history",render:(e,n,o)=>t.renderCol2Info(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",orderable:!1,checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return He(this,void 0,void 0,(function*(){e.aoData,t.dialog(),t.view_breakdown()}))},responsive:{details:!1,breakpoints:[{mame:"mobile",width:480}]},dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}view_breakdown(){const e=document.querySelector("#attendance-history table");console.log({'document.querySelector("#attendance-history table")':e}),e.addEventListener("click",(function(e){var t=e.target;if(console.log({event:e,target:t}),t&&t.matches("[open-dialog-btn]")){const e=t.getAttribute("open-dialog-btn"),n=this.querySelector('[open-this-dialog="'+e+'"]');console.log({dialogId:e,dialog:n}),n.setAttribute("open","true")}if(t&&t.matches("accordion-item[breakdown]")&&console.log({"target-target-target":t}),t&&t.matches('[heading="History Breakdown"] [dialogAction="close"]')){const e=t.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+e+'"]').setAttribute("open","false"),console.log({"close-target":t})}}))}createRenderRoot(){return this}};qe.styles=[o.iv`
   :host { display: block; }
  `],Fe([(0,s.IO)('[filter-section-context="btn"]'),Le("design:type","function"==typeof(Ue=void 0!==i.z&&i.z)?Ue:Object)],qe.prototype,"filterSectionContextBtn",void 0),Fe([(0,s.IO)('[filter-section-context="container"]'),Le("design:type","function"==typeof(Je="undefined"!=typeof Element&&Element)?Je:Object)],qe.prototype,"filterSectionContextContainer",void 0),Fe([(0,s.IO)('[make-general-posts="submit_filter_form"]'),Le("design:type","function"==typeof(ze="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?ze:Object)],qe.prototype,"filterSectionContextForm",void 0),Fe([(0,s.Cb)({type:Number}),Le("design:type",Number)],qe.prototype,"meetingEventId",void 0),Fe([(0,s.Cb)({type:String}),Le("design:type",String)],qe.prototype,"meetingEventIdEnc",void 0),Fe([(0,s.Cb)({type:String}),Le("design:type",String)],qe.prototype,"filter_start_date_val",void 0),Fe([(0,s.Cb)({type:String}),Le("design:type",String)],qe.prototype,"filter_end_date_val",void 0),Fe([(0,s.Cb)({type:String}),Le("design:type",String)],qe.prototype,"datatablePathUrl",void 0),Fe([(0,s.Cb)({type:String}),Le("design:type",String)],qe.prototype,"memberProfileBaseUrl",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_genders",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_schedules",void 0),Fe([(0,s.Cb)({type:Number}),Le("design:type",Number)],qe.prototype,"startSearchPage",void 0),Fe([(0,s.Cb)({type:Number}),Le("design:type",Number)],qe.prototype,"accountType",void 0),Fe([(0,s.Cb)({type:Boolean}),Le("design:type",Boolean)],qe.prototype,"accountTypeChanged",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_memberCategories",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_activeBranchId",void 0),Fe([(0,s.Cb)({type:Number}),Le("design:type",Number)],qe.prototype,"selectedBranch",void 0),Fe([(0,s.Cb)({type:Number}),Le("design:type",Number)],qe.prototype,"_memberType",void 0),Fe([(0,s.Cb)({type:Boolean}),Le("design:type",Boolean)],qe.prototype,"filterBoxStarted",void 0),Fe([(0,s.Cb)({type:Boolean}),Le("design:type",Boolean)],qe.prototype,"_hasSetup",void 0),Fe([(0,s.Cb)({type:Boolean}),Le("design:type",Boolean)],qe.prototype,"_selectedMembersCalled",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_selectedMembersNames",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_groups",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_subgroups",void 0),Fe([(0,s.Cb)({type:Array}),Le("design:type",Array)],qe.prototype,"_branches",void 0),Fe([(0,s.Cb)({type:Boolean}),Le("design:type",Boolean)],qe.prototype,"_pageButtonAccess",void 0),qe=Fe([(0,s.Mo)("pdb-attendance-clocking-history"),Le("design:paramtypes",[])],qe)}},e=>(e.O(0,[5744,2185,8820,1828,9564,4351,8644,1109,6236,6069,7719,6553,2585,5593,9450,3283,2921,3712],(()=>(8046,e(e.s=8046)))),e.O())])));
//# sourceMappingURL=history.js.map