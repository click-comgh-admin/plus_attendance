"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6084],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>c});var i=n(771),o=n(7270),r=n(7052),s=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,o.d)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,r.h)(String(e.jsonData.token));(0,s.Ad)(l,t,10),(0,s.vh)(l+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=(0,r.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,s.Hl)(d)?yield l(e,c,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,s.Hl)(d),p=JSON.stringify({token:(0,r.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.Hl)(d+"_date"))))return u;yield(0,o.d)(c,{method:"POST",body:p},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,r.h)(String(i.jsonData.token));(0,s.Ad)(d,e,10),(0,s.vh)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})))(e,c,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>o,O1:()=>i,Vc:()=>r,W3:()=>s});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},r=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},4843:(e,t,n)=>{n.d(t,{S:()=>a});var i=n(771),o=n(7270),r=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{n.d(t,{u:()=>a});var i=n(771),o=n(7270),r=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2892:(e,t,n)=>{n.d(t,{c:()=>a});var i=n(771),o=n(7270),r=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,a||[])).next())}));var n,a,l,c}},1854:(e,t,n)=>{var i=n(9392),o=n(1936),r=(n(5248),n(934),n(9261),n(3504),n(4277),n(3313),function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let l=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};r([(0,o.Cb)({type:Number}),s("design:type",Number)],l.prototype,"index",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"no_delete",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"single",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],l.prototype,"_single",void 0),l=r([(0,o.Mo)("multiple-widgets"),s("design:paramtypes",[])],l)},2461:(e,t,n)=>{var i=n(9392),o=n(1936),r=(n(5185),n(5248),function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"id",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),r([(0,o.Cb)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=r([(0,o.Mo)("file-input")],a)},5866:(e,t,n)=>{var i=n(9755),o=n(9392),r=n(1936),s=(n(686),function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((r=>{i(r).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const r=function(o,r){return n=isNaN(o.page)?0:o.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(o){i(e.selectSelector).empty(),n=0,t=0})),n}(o),s=function(n,o){let r=isNaN(n.page)?1:n.page+1;return r=0===r?1:r,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),r=0,t=0})),r}(o);let a={search:o.term,start:r,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:o,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var o=n.data;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);n.includes(i)||n.push(i)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};l.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),s([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),s([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,r.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,r.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,r.Mo)("select-input")],l)},3690:(e,t,n)=>{var i=n(9392),o=n(1936),r=(n(5185),n(5142),function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
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
    `],r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"selected",void 0),r([(0,o.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),r([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"isSelected",void 0),a=r([(0,o.Mo)("switch-input")],a)},7108:(e,t,n)=>{n.d(t,{W:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},9358:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditGroup:()=>P}),n(3683),n(4657);var i=n(4108),o=n(9392),r=n(1936),s=n(5458),a=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),l=n(4843),c=n(2218),d=n(4672),u=n(6455),p=n.n(u),h=n(771),m=n(7270),f=n(596),g=n(8967),y=n(3600),b=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};n(5866);var v,w,_=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))},S=n(2892),C=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let A=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return o.dy`${this.schedule}`}get schedule(){return null===this._schedule?o.dy`
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
      `:!0===this._schedule.success?o.dy`${this.scheduleGroup}`:o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.dy`${this.table}`}get table(){return this._scheduleGroups.results.length>0?o.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Group
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
                ${this.getMeetingAttendanceGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return o.dy`
      ${this._scheduleGroups.results.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,s.C)(this.getGroup(e.groupId),o.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Group</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Group!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-group">
                <div class="p-0 m-0" show-groupField="all">
                  ${this.groupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Group" raised class="button" @click="${this.submitForm}">
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
    `}get groupField(){const e=this._groups.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return o.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${o.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return o.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(n);const i=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),o=this.groupField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.T(e)}))}submitForm(e){return k(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return _(this,void 0,void 0,(function*(){const e=(0,y.Ie)(),t=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group",n=document.querySelector('[make-general-posts="add-schedule-group"]'),i=new FormData(n);return p().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>_(this,void 0,void 0,(function*(){return yield(0,m.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new f.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&p().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return k(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return b(this,void 0,void 0,(function*(){const t=(0,y.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/"+e,i={};return p().fire({title:"Remove Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new f.H("delete",n,!0);return i.postForm,i}})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}p().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return k(this,void 0,void 0,(function*(){const e=yield(0,c.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return k(this,void 0,void 0,(function*(){const e=yield(0,l.S)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return k(this,void 0,void 0,(function*(){const e=yield(0,S.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._groups,...t),this._groups=n}))}getGroup(e){return k(this,void 0,void 0,(function*(){const t=yield(0,S.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};A.styles=[o.iv`
   :host { display: block; }
  `],C([(0,r.Cb)({type:Number}),$("design:type",Number)],A.prototype,"CLIENT_ID",void 0),C([(0,r.Cb)({type:Number}),$("design:type",Number)],A.prototype,"startSearchPage",void 0),C([(0,r.Cb)({type:Array}),$("design:type",Array)],A.prototype,"_groups",void 0),C([(0,r.Cb)({type:Array}),$("design:type","function"==typeof(v="undefined"!=typeof Array&&Array)?v:Object)],A.prototype,"_data",void 0),C([(0,r.Cb)({type:Object}),$("design:type",Object)],A.prototype,"urlQueryParams",void 0),C([(0,r.Cb)({type:Number}),$("design:type",Number)],A.prototype,"meetingEventId",void 0),C([(0,r.IO)('[show-groupField="all"]'),$("design:type","function"==typeof(w="undefined"!=typeof Element&&Element)?w:Object)],A.prototype,"showGroupFieldAllSelector",void 0),A=C([(0,r.Mo)("attendance-setup-form-group"),$("design:paramtypes",[])],A),n(8693);var x=n(9665),E=n(8092),R=n(1302),N=n(7108),j=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let P=class extends o.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,x.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}l((r=r.apply(t,n||[])).next())}));var t,n,o,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,E.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,R.OR)(N.W.schedule_meeting_event),!(0,R.H)({pageId:N.W.schedule_meeting_event,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-group CLIENT_ID="${this.clientId}"></attendance-setup-form-group>
      </div>
    `}firstUpgroupd(){}createRenderRoot(){return this}};j([(0,r.Cb)({type:String}),I("design:type",String)],P.prototype,"email",void 0),j([(0,r.Cb)({type:Number}),I("design:type",Number)],P.prototype,"mId",void 0),j([(0,r.Cb)({type:Number}),I("design:type",Number)],P.prototype,"clientId",void 0),j([(0,r.Cb)({type:Boolean}),I("design:type",Boolean)],P.prototype,"_hasSetup",void 0),j([(0,r.Cb)({type:Boolean}),I("design:type",Boolean)],P.prototype,"_pageButtonAccess",void 0),P=j([(0,r.Mo)("attendance-setup-form-edit-group"),I("design:paramtypes",[])],P)},8693:(e,t,n)=>{var i=n(9392),o=n(1936),r=(n(2715),n(771)),s=n(4672),a=function(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${r.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,s.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],a([(0,o.Cb)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,o.Mo)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,129,1109,6236,6069,214,3901,3712],(()=>(9358,e(e.s=9358)))),e.O())])));
//# sourceMappingURL=edit-group.js.map