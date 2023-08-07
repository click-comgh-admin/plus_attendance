"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_members_user_model_index2_ts-src_addons_widgets_form_new_switch_ts"],{42813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>c});class s{static toMembershipUserModel(e){return i(JSON.parse(e),a("MembershipUserModel"),o)}static membershipUserModelToJson(e){return JSON.stringify(i(e,a("MembershipUserModel"),r),null,2)}}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function r(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let o=0;o<s;o++){const s=e[o];try{return i(t,s,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],l=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;o[r.key]=i(l,r.typ,n,r.key)})),Object.getOwnPropertyNames(s).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(o[r]=i(s[r],t,n,r))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function a(e){return{ref:e}}const c={MembershipUserModel:(p=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"firstname",js:"firstname",typ:l(null,"")},{json:"middlename",js:"middlename",typ:l(null,"")},{json:"surname",js:"surname",typ:l(null,"")},{json:"gender",js:"gender",typ:l(null,0)},{json:"profilePicture",js:"profilePicture",typ:l(null,"")},{json:"phone",js:"phone",typ:l(null,"")},{json:"email",js:"email",typ:l(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:l(null,Date)},{json:"religion",js:"religion",typ:l(null,0)},{json:"nationality",js:"nationality",typ:l(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:l(null,"")},{json:"stateProvince",js:"stateProvince",typ:l(null,"")},{json:"region",js:"region",typ:l(null,0)},{json:"district",js:"district",typ:l(null,0)},{json:"constituency",js:"constituency",typ:l(null,0)},{json:"electoralArea",js:"electoralArea",typ:l(null,0)},{json:"community",js:"community",typ:l(null,"")},{json:"hometown",js:"hometown",typ:l(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:l(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:l(null,"")},{json:"level",js:"level",typ:l(null,0)},{json:"status",js:"status",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)},{json:"memberType",js:"memberType",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"last_login",js:"lastLogin",typ:l(null,Date)},{json:"referenceId",js:"referenceID",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"editable",js:"editable",typ:l(null,!0)},{json:"profileResume",js:"profileResume",typ:l(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:l(null,"")},{json:"archived",js:"archived",typ:l(null,!0)},{json:"identification",js:"identification",typ:l(null,"")}],!1,{props:p,additional:false})};var p},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var s=n(85862),o=n(59662),r=(n(29975),n(16788),function(e,t,n,s){var o,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return s.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?s.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:s.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[s.css`
      :host {
        display: block;
      }
    `],r([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),r([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),r([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"selected",void 0),r([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),r([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"isSelected",void 0),l=r([(0,o.customElement)("switch-input")],l)}}]);
//# sourceMappingURL=src_addons_interfaces_members_user_model_index2_ts-src_addons_widgets_form_new_switch_ts.js.map