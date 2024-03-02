"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-35ad44"],{26660:(e,t,i)=>{i.r(t)},52218:(e,t,i)=>{i.r(t),i.d(t,{GET_AttendanceSchedule:()=>a});var s=i(48485),l=i(87270),r=i(14492),n=i(33600),o=function(e,t,i,s){return new(i||(i=Promise))((function(l,r){function n(e){try{a(s.next(e))}catch(e){r(e)}}function o(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,o)}a((s=s.apply(e,t||[])).next())}))};function a(e=null,t=""){return o(this,void 0,void 0,(function*(){const i=(0,n.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,a=yield(0,l.http)(o,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}}))}},90072:(e,t,i)=>{i.r(t),i.d(t,{GET_MemberGroupingsMemberCategories:()=>a});var s=i(48485),l=i(87270),r=i(14492),n=i(33600),o=function(e,t,i,s){return new(i||(i=Promise))((function(l,r){function n(e){try{a(s.next(e))}catch(e){r(e)}}function o(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,o)}a((s=s.apply(e,t||[])).next())}))};function a(e=null){return o(this,void 0,void 0,(function*(){const t=(0,n.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),o=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}}))}},43690:(e,t,i)=>{i.r(t),i.d(t,{SwitchInput:()=>o});var s=i(85862),l=i(59662),r=(i(29975),i(16788),function(e,t,i,s){var l,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(n=(r<3?l(n):r>3?l(t,i,n):l(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends s.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return s.html`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};o.styles=[s.css`
      :host {
        display: block;
      }
    `],r([(0,l.property)({type:String}),n("design:type",String)],o.prototype,"name",void 0),r([(0,l.property)({type:String}),n("design:type",String)],o.prototype,"label",void 0),r([(0,l.property)({type:Boolean}),n("design:type",Boolean)],o.prototype,"selected",void 0),r([(0,l.property)({type:String}),n("design:type",String)],o.prototype,"value",void 0),r([(0,l.property)({type:Boolean}),n("design:type",Boolean)],o.prototype,"isSelected",void 0),o=r([(0,l.customElement)("switch-input")],o)},43629:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipSelectMemberType:()=>p}),i(26660);var s,l,r=i(85862),n=i(59662),o=i(90072),a=(i(75866),function(e,t,i,s){var l,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(n=(r<3?l(n):r>3?l(t,i,n):l(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,i,s){return new(i||(i=Promise))((function(l,r){function n(e){try{a(s.next(e))}catch(e){r(e)}}function o(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,o)}a((s=s.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?r.html`
        ${this.materialSelectField}
      `:r.html`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?r.html`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:r.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?r.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let i=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(i=!0)}));let s=!1,l="false";i&&(s=!0,l="true");const r={id:t.id,name:t.category,isSelected:l,selected:s};e.includes(r)||e.push(r)}));let t=r.html`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return r.html`${t}`}get selectField(){let e=r.html``;return e=this.setDefaultValues.length<1?r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>r.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?r.html`<option value="${e.id}" selected>${e.category}</option>`:r.html`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,r.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return u(this,void 0,void 0,(function*(){const e=yield(0,o.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],a([(0,n.property)({type:String}),c("design:type",String)],p.prototype,"material",void 0),a([(0,n.property)({type:Number}),c("design:type",Number)],p.prototype,"defaultValue",void 0),a([(0,n.property)({type:Array}),c("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],p.prototype,"defaultValues",void 0),a([(0,n.property)({type:Array}),c("design:type","function"==typeof(l="undefined"!=typeof Array&&Array)?l:Object)],p.prototype,"setDefaultValues",void 0),a([(0,n.property)({type:Number}),c("design:type",Number)],p.prototype,"selectedCategory",void 0),a([(0,n.property)({type:Boolean}),c("design:type",Boolean)],p.prototype,"multiple",void 0),a([(0,n.property)({type:Boolean}),c("design:type",Boolean)],p.prototype,"required",void 0),a([(0,n.property)({type:String}),c("design:type",String)],p.prototype,"label",void 0),a([(0,n.property)({type:String}),c("design:type",String)],p.prototype,"name",void 0),a([(0,n.property)({type:String}),c("design:type",String)],p.prototype,"id",void 0),a([(0,n.property)({type:String}),c("design:type",String)],p.prototype,"tag_class",void 0),a([(0,n.property)({type:String}),c("design:type",String)],p.prototype,"css_style",void 0),a([(0,n.property)({type:Array}),c("design:type",Array)],p.prototype,"_memberCategories",void 0),p=a([(0,n.customElement)("pdb-membership-select-member-type"),c("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=src_addons_network_attendance_setup_schedule_index_ts-src_addons_widgets_form_new_switch_ts-s-35ad44.js.map