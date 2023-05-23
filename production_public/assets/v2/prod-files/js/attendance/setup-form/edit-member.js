"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3670],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>c});var i=n(771),r=n(7270),o=n(7052),s=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,r.d)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,o.h)(String(e.jsonData.token));(0,s.Ad)(l,t,10),(0,s.vh)(l+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=(0,o.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,s.Hl)(d)?yield l(e,c,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,s.Hl)(d),h=JSON.stringify({token:(0,o.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.Hl)(d+"_date"))))return u;yield(0,r.d)(c,{method:"POST",body:h},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,o.h)(String(i.jsonData.token));(0,s.Ad)(d,e,10),(0,s.vh)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})))(e,c,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>r,O1:()=>i,Vc:()=>o,W3:()=>s});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},2486:(e,t,n)=>{n.d(t,{N:()=>i});const i=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e}},1801:(e,t,n)=>{n.d(t,{a:()=>o,w:()=>s});var i=n(6909),r=n(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.J)(e.regionId):(0,r.A)(),districtId:"districtId"in e?(0,i.A)(e.districtId):(0,i.W)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,r.A)(),districtId:(0,i.W)(),location:"-"}}},9492:(e,t,n)=>{function i(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function r(){return{id:0,name:"-",short:"-",code:"-"}}n.d(t,{Q:()=>r,V:()=>i})},6909:(e,t,n)=>{n.d(t,{A:()=>r,W:()=>o});var i=n(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.J)(e.regionId):(0,i.A)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,i.A)(),location:"-"}}},7202:(e,t,n)=>{function i(e){return{id:Number(e.id),location:String(e.location)}}function r(){return{id:0,location:"-"}}n.d(t,{A:()=>r,J:()=>i})},1551:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(2486),r=n(1801),o=n(9492),s=n(6909),a=n(7202);function l(e){return{id:Number(e.id),regionId:"regionId"in e?(0,a.J)(e.regionId):(0,a.A)(),districtId:"districtId"in e?(0,s.A)(e.districtId):(0,s.W)(),location:String(e.location)}}function c(e,t=""){return String(null===e?t:e)}function d(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:c(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:c(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),editable:(0,i.N)(e.editable),profileResume:String(e.profileResume),profileIdentification:String(e.profileIdentification),archived:(0,i.N)(e.archived),identification:String(e.identification),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,o.V)(e.countryInfo):(0,o.Q)(),regionInfo:"regionInfo"in e?(0,a.J)(e.regionInfo):(0,a.A)(),districtInfo:"districtInfo"in e?(0,s.A)(e.districtInfo):(0,s.W)(),constituencyInfo:"constituencyInfo"in e?(0,r.a)(e.constituencyInfo):(0,r.w)(),electoralareaInfo:"electoralareaInfo"in e?l(e.electoralareaInfo):{id:0,regionId:(0,a.A)(),districtId:(0,s.W)(),location:"-"}}}},6637:(e,t,n)=>{n.d(t,{n:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2218:(e,t,n)=>{n.d(t,{u:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},6656:(e,t,n)=>{n.d(t,{E:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t="",n=!1){return a=this,l=void 0,d=function*(){const a=i.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=i.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,c=(0,s.Ie)(),d=n?l:a,u=yield(0,r.d)(d,{method:"GET",headers:{Authorization:"Token "+c.token}},!0);try{return new o.H("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new o.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{r(d.next(e))}catch(e){t(e)}}function i(e){try{r(d.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(n,i)}r((d=d.apply(a,l||[])).next())}));var a,l,c,d}},1854:(e,t,n)=>{var i=n(5862),r=n(8393),o=(n(5248),n(934),n(9261),n(3504),n(9132),n(3313),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let l=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};o([(0,r.Cb)({type:Number}),s("design:type",Number)],l.prototype,"index",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"no_delete",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"single",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],l.prototype,"_single",void 0),l=o([(0,r.Mo)("multiple-widgets"),s("design:paramtypes",[])],l)},2461:(e,t,n)=>{var i=n(5862),r=n(8393),o=(n(5185),n(5248),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"id",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=o([(0,r.Mo)("file-input")],a)},5866:(e,t,n)=>{var i=n(9755),r=n(5862),o=n(8393),s=(n(686),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{i(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const o=function(r,o){return n=isNaN(r.page)?0:r.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(r){i(e.selectSelector).empty(),n=0,t=0})),n}(r),s=function(n,r){let o=isNaN(n.page)?1:n.page+1;return o=0===o?1:o,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),o=0,t=0})),o}(r);let a={search:r.term,start:o,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:r,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var r=n.data;for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);n.includes(i)||n.push(i)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};l.styles=[r.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,o.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),s([(0,o.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),s([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,o.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,o.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,o.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.Mo)("select-input")],l)},3690:(e,t,n)=>{var i=n(5862),r=n(8393),o=(n(5185),n(5142),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
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
    `],o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"selected",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"isSelected",void 0),a=o([(0,r.Mo)("switch-input")],a)},7108:(e,t,n)=>{n.d(t,{W:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},8693:(e,t,n)=>{var i=n(5862),r=n(8393),o=(n(2715),n(771)),s=n(4672),a=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,s.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],a([(0,r.Cb)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,r.Mo)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)},3591:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>B}),n(3683),n(4657);var i=n(4108),r=n(5862),o=n(8393),s=n(5458),a=(n(5248),n(6811),n(3690),n(1854),n(2461),n(2262)),l=n(6637),c=n(2218),d=n(4672),u=n(6455),h=n.n(u),p=n(771),m=n(7270),f=n(596),b=n(8967),y=n(3600),g=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};n(5866);var v,w,S=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))},_=n(1551),C=n(6656),A=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let k=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
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
      `:!0===this._schedule.success?r.dy`${this.scheduleMember}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleMembers.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return r.dy`
      ${this._scheduleMembers.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,s.C)(this.getMember(e.memberId),r.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
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
    `}get memberField(){let e={};const t=(0,y.Ie)();return e.Authorization="Token "+t.token,r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${p.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(n);const i=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),r=this.memberField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,r=document.querySelector('[id="memberId"]');let o=[];if(o[0]={id:"all",text:"All Members"},n>0){var s=i;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return{results:o,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.T(e)}))}submitForm(e){return I(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return S(this,void 0,void 0,(function*(){const e=(0,y.Ie)(),t=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",n=document.querySelector('[make-general-posts="add-schedule-member"]'),i=new FormData(n);return h().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>S(this,void 0,void 0,(function*(){return yield(0,m.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new f.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,b.T)(e);h().showValidationMessage(`${t}`)}return t})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&h().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceMember(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,y.Ie)(),n=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,i={};return h().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,b.T)(e);h().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new f.H("delete",n,!0);return i.postForm,i}})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}h().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return I(this,void 0,void 0,(function*(){const e=yield(0,c.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return I(this,void 0,void 0,(function*(){const e=yield(0,l.n)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return I(this,void 0,void 0,(function*(){const e=yield(0,C.E)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._members,...t),this._members=n}))}getMember(e){return I(this,void 0,void 0,(function*(){const t=yield(0,C.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,_.Z)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};k.styles=[r.iv`
   :host { display: block; }
  `],A([(0,o.Cb)({type:Number}),$("design:type",Number)],k.prototype,"CLIENT_ID",void 0),A([(0,o.Cb)({type:Number}),$("design:type",Number)],k.prototype,"startSearchPage",void 0),A([(0,o.Cb)({type:Array}),$("design:type",Array)],k.prototype,"_members",void 0),A([(0,o.Cb)({type:Array}),$("design:type","function"==typeof(v="undefined"!=typeof Array&&Array)?v:Object)],k.prototype,"_data",void 0),A([(0,o.Cb)({type:Object}),$("design:type",Object)],k.prototype,"urlQueryParams",void 0),A([(0,o.Cb)({type:Number}),$("design:type",Number)],k.prototype,"meetingEventId",void 0),A([(0,o.IO)('[show-memberField="all"]'),$("design:type","function"==typeof(w="undefined"!=typeof Element&&Element)?w:Object)],k.prototype,"showMemberFieldAllSelector",void 0),k=A([(0,o.Mo)("attendance-setup-form-member"),$("design:paramtypes",[])],k),n(8693);var x=n(9665),N=n(8092),E=n(1302),R=n(7108),j=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let B=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,x.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,N.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,E.OR)(R.W.schedule_meeting_event),!(0,E.H)({pageId:R.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};j([(0,o.Cb)({type:String}),P("design:type",String)],B.prototype,"email",void 0),j([(0,o.Cb)({type:Number}),P("design:type",Number)],B.prototype,"mId",void 0),j([(0,o.Cb)({type:Number}),P("design:type",Number)],B.prototype,"clientId",void 0),j([(0,o.Cb)({type:Boolean}),P("design:type",Boolean)],B.prototype,"_hasSetup",void 0),j([(0,o.Cb)({type:Boolean}),P("design:type",Boolean)],B.prototype,"_pageButtonAccess",void 0),B=j([(0,o.Mo)("attendance-setup-form-edit-member"),P("design:paramtypes",[])],B)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,7597,1109,6236,6069,214,3901,3712],(()=>(3591,e(e.s=3591)))),e.O())])));
//# sourceMappingURL=edit-member.js.map