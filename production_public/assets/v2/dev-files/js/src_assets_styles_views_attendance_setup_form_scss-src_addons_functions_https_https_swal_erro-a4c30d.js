"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d"],{69579:(t,e,i)=>{i.r(e)},91243:(t,e,i)=>{i.r(e)},8967:(t,e,i)=>{i.r(e),i.d(e,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(t,e=!0)=>{if(Array.isArray(t)){let i=(e?o:"")+"<ul>";return t.forEach((t=>{i+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},14108:(t,e,i)=>{i.r(e),i.d(e,{tokenLogin:()=>d,verifyToken:()=>l});var o=i(48485),r=i(87270),n=i(67052),s=i(21942),a=function(t,e,i,o){return new(i||(i=Promise))((function(r,n){function s(t){try{l(o.next(t))}catch(t){n(t)}}function a(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};const l=(t,e,i)=>a(void 0,void 0,void 0,(function*(){const l=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=i,c=(0,s.get_cookie)(d),h=JSON.stringify({token:(0,n.base64Decode)(c)});if((t=>{const e=new Date;return Math.abs(t.getTime()-e.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return c;yield(0,r.http)(l,{method:"POST",body:h},!0).then((o=>a(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const t=(0,n.base64Encode)(String(o.jsonData.token));(0,s.set_cookies)(d,t,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield p(t,e,i)}))))})),p=(t,e,i)=>a(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=i,p=JSON.stringify({email:t,id:e});yield(0,r.http)(a,{method:"POST",body:p},!0).then((t=>{if(t.jsonData.token){const e=(0,n.base64Encode)(String(t.jsonData.token));(0,s.set_cookies)(l,e,10),(0,s.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}}))})),d=(t,e,i)=>a(void 0,void 0,void 0,(function*(){const o=(0,n.base64Encode)(String(e)),r=i;window.supersecret={unknowable:{ops:{email:t,id:o,cookieName:r}}},""==(0,s.get_cookie)(r)?yield p(t,o,i):yield l(t,o,i)}))},37725:(t,e,i)=>{i.r(e),i.d(e,{FileInput:()=>a});var o=i(85862),r=i(59662),n=(i(29975),i(23283),i(91243),function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}),s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"name",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"value",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"id",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=n([(0,r.customElement)("file-input")],a)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d.js.map