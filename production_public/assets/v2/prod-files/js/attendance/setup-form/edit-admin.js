"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9487],{8967:(e,t,n)=>{n.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>c});var i=n(771),s=n(7270),o=n(7052),a=n(1942),r=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>r(void 0,void 0,void 0,(function*(){const r=i.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,s.d)(r,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,o.h)(String(e.jsonData.token));(0,a.Ad)(l,t,10),(0,a.vh)(l+"_date",(new Date).toUTCString(),10)}}))})),c=(e,t,n)=>r(void 0,void 0,void 0,(function*(){const c=(0,o.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:c,cookieName:d}}},""==(0,a.Hl)(d)?yield l(e,c,n):yield((e,t,n)=>r(void 0,void 0,void 0,(function*(){const c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,a.Hl)(d),h=JSON.stringify({token:(0,o.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.Hl)(d+"_date"))))return u;yield(0,s.d)(c,{method:"POST",body:h},!0).then((i=>r(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,o.h)(String(i.jsonData.token));(0,a.Ad)(d,e,10),(0,a.vh)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})))(e,c,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>s,O1:()=>i,Vc:()=>o,W3:()=>a});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},4331:(e,t,n)=>{n.d(t,{v:()=>r});var i=n(771),s=n(7270),o=n(596),a=n(3600);function r(e=null,t=""){return n=this,r=void 0,c=function*(){const n=(0,a.Ie)(),r=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,l=yield(0,s.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,r||[])).next())}));var n,r,l,c}},2218:(e,t,n)=>{n.d(t,{u:()=>r});var i=n(771),s=n(7270),o=n(596),a=n(3600);function r(e=null,t=""){return n=this,r=void 0,c=function*(){const n=(0,a.Ie)(),r=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,s.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,r||[])).next())}));var n,r,l,c}},6262:(e,t,n)=>{n.d(t,{a:()=>r});var i=n(771),s=n(7270),o=n(596),a=n(3600);function r(e=null,t=""){return n=this,r=void 0,c=function*(){const n=(0,a.Ie)(),r=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,s.d)(r,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,r||[])).next())}));var n,r,l,c}},1854:(e,t,n)=>{var i=n(9392),s=n(1936),o=(n(5248),n(934),n(9261),n(3504),n(4277),n(3313),function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};let l=class extends i.oi{constructor(){super(),this.index=0,this._widget=i.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return r(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.dy`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return r(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};o([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"index",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"no_delete",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"single",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"_single",void 0),l=o([(0,s.Mo)("multiple-widgets"),a("design:paramtypes",[])],l)},5866:(e,t,n)=>{var i=n(9755),s=n(9392),o=n(1936),a=(n(686),function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const i=e.id;n=t===i})),e.selected=n,e}))}render(){return this.multiple?this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let s={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)s[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{i(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(s){const o=function(s,o){return n=isNaN(s.page)?0:s.page,n=0===n?n:n*t,i(".select2-search__field").on("keyup",(function(s){i(e.selectSelector).empty(),n=0,t=0})),n}(s),a=function(n,s){let o=isNaN(n.page)?1:n.page+1;return o=0===o?1:o,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),o=0,t=0})),o}(s);let r={search:s.term,start:o,page:a};return e.ajaxFetchUrlParams.forEach((e=>{r[e.param]=e.value})),r},headers:s,processResults:(e,n)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let i=[];if(!1===n.error){var s=n.data;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.fullName};i.includes(n)||i.push(n)}}return this.totalShowing+=i.length,{results:i,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);n.includes(i)||n.push(i)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};l.styles=[s.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"name",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"label",void 0),a([(0,o.Cb)({type:Array}),r("design:type",Array)],l.prototype,"value",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"randomID",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"input_id",void 0),a([(0,o.Cb)({type:Array}),r("design:type",Array)],l.prototype,"options",void 0),a([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"required",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"ajaxFetchToken",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),a([(0,o.Cb)({attribute:!1}),r("design:type",Object)],l.prototype,"currentValue",void 0),a([(0,o.Cb)({type:Object}),r("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),a([(0,o.Cb)({type:Array}),r("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"startSearchPage",void 0),a([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"multiple",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"startNumber",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"rowsPerPage",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"totalShowing",void 0),a([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=a([(0,o.Mo)("select-input")],l)},3690:(e,t,n)=>{var i=n(9392),s=n(1936),o=(n(5185),n(5142),function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.dy`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};r.styles=[i.iv`
      :host {
        display: block;
      }
    `],o([(0,s.Cb)({type:String}),a("design:type",String)],r.prototype,"name",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],r.prototype,"label",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],r.prototype,"selected",void 0),o([(0,s.Cb)({type:String}),a("design:type",String)],r.prototype,"value",void 0),o([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],r.prototype,"isSelected",void 0),r=o([(0,s.Mo)("switch-input")],r)},7108:(e,t,n)=>{n.d(t,{W:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},1899:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAdmin:()=>N}),n(3683),n(4657);var i,s,o=n(4108),a=n(9392),r=n(1936),l=n(5458),c=(n(5248),n(6811),n(3690),n(1854),n(2262)),d=n(4331),u=n(2218),h=n(4672),p=n(6455),m=n.n(p),f=n(771),g=n(7270),v=n(596),y=n(8967),b=n(3600),w=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))},_=n(6262),A=(n(5866),function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))}),S=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};let E=class extends a.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__adminUser=null,this.__schedule=null,this.__scheduleAdmins=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _adminUser(e){this.__adminUser=e,this.requestUpdate()}get _adminUser(){return this.__adminUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,h.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return a.dy`${this.schedule}`}get schedule(){return null===this._schedule?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?a.dy`${this.scheduleAdmin}`:a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAdmin(){return null===this._scheduleAdmins?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAdmins?a.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Admin</span>: undefined error</h4>
          </div>
        </div>
      `:a.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.dy`${this.table}`}get table(){return this._scheduleAdmins.results.length>0?a.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Admin">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Admin
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Agenda Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Clocking Admin
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
                ${this.getMeetingAttendanceAdmins}
              </tbody>
            </table>
          </div>
        </div>
      `:a.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAdmins(){return a.dy`
      ${this._scheduleAdmins.results.map((e=>a.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.C)(this.getAdminUser(e.adminId),a.dy`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?a.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:a.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?a.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:a.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?a.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:a.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAdmin}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return a.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Admin</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Admin!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-admin">
                <div class="p-0 m-0" show-adminField="all">
                  ${this.adminFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Admin" raised class="button" @click="${this.submitForm}">
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
    `}get adminField(){let e={};const t=(0,b.Ie)();return e.Authorization="Token "+t.token,a.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Admin User</h4>
            <select-input class="w-100" id="adminId" name="adminId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${f.t.URLS.AKWAABA_API_BASE_URL}clients/user/search"></select-input>
          </div><div class="col-md-12 col-lg-12"></div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Meeting Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="meetingEditor" id="meetingEditor" label="Is Meeting Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Agenda Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="agendaEditor" id="agendaEditor" label="Is Agenda Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Clocking Admin?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="clockingAdmin" id="clockingAdmin" label="Is Clocking Admin?"></switch-input>
            </div>
          </div>
        </div>
      </div>
    `}adminFieldDefault(e){return a.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.adminField}
        adminField-id="${e}" no_delete></multiple-widgets>
    `}addAdminField(){const e=this.showAdminFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAdminFieldAllSelector.children[e-1].getAttribute("adminField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("adminField-id",String(t)),this.showAdminFieldAllSelector.append(n);const i=this.showAdminFieldAllSelector.querySelectorAll('multiple-widgets[adminField-id="'+t+'"]'),s=this.adminField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.T(e)}))}getAdminUsers(){return k(this,void 0,void 0,(function*(){const e=yield(0,_.a)();this._adminUser=null===e?void 0:e.paginResponse}))}getAdminUser(e){return k(this,void 0,void 0,(function*(){const t=yield(0,_.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return k(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return A(this,void 0,void 0,(function*(){const e=(0,b.Ie)(),t=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin",n=document.querySelector('[make-general-posts="add-schedule-admin"]'),i=new FormData(n);return m().fire({title:"Setup Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>A(this,void 0,void 0,(function*(){return yield(0,g.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new v.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,y.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let i=e;i.error=t;const s=new v.H("post",i,!0,n);return s.postForm,s}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(m().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n.response.success&&setTimeout((()=>{window.location.reload()}),500))}}))}))}()}))}deleteQuestionnaireMeetingAttendanceAdmin(e){return k(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),n=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin/"+e,i={};return m().fire({title:"Remove Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,g.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new v.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,y.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new v.H("delete",n,!0);return i.postForm,i}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}m().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,s=document.querySelector('[id="adminId"]');let o=[];if(n>0){var a=i;for(let e=0;e<a.length;e++){const t=a[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return{results:o,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,h.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return k(this,void 0,void 0,(function*(){const e=yield(0,u.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAdmin(){return k(this,void 0,void 0,(function*(){const e=yield(0,d.v)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};E.styles=[a.iv`
   :host { display: block; }
  `],S([(0,r.Cb)({type:Number}),C("design:type",Number)],E.prototype,"CLIENT_ID",void 0),S([(0,r.Cb)({type:Number}),C("design:type",Number)],E.prototype,"startSearchPage",void 0),S([(0,r.Cb)({type:Array}),C("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],E.prototype,"_data",void 0),S([(0,r.Cb)({type:Object}),C("design:type",Object)],E.prototype,"urlQueryParams",void 0),S([(0,r.Cb)({type:Number}),C("design:type",Number)],E.prototype,"meetingEventId",void 0),S([(0,r.IO)('[show-adminField="all"]'),C("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],E.prototype,"showAdminFieldAllSelector",void 0),E=S([(0,r.Mo)("attendance-setup-form-admin"),C("design:paramtypes",[])],E),n(8693);var $=n(9665),x=n(8092),R=n(1302),j=n(7108),I=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let N=class extends a.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,$.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function r(e){try{l(s.throw(e))}catch(e){o(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(a,r)}l((s=s.apply(t,n||[])).next())}));var t,n,i,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,x.H)())||void 0===e?void 0:e.expiration_date.expired)return a.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,R.OR)(j.W.schedule_meeting_event),!(0,R.H)({pageId:j.W.schedule_meeting_event,viewType:"Edit"},!1))return a.dy`<no-page-entry-component></no-page-entry-component>`}return a.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-admin CLIENT_ID="${this.clientId}"></attendance-setup-form-admin>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};I([(0,r.Cb)({type:String}),P("design:type",String)],N.prototype,"email",void 0),I([(0,r.Cb)({type:Number}),P("design:type",Number)],N.prototype,"mId",void 0),I([(0,r.Cb)({type:Number}),P("design:type",Number)],N.prototype,"clientId",void 0),I([(0,r.Cb)({type:Boolean}),P("design:type",Boolean)],N.prototype,"_hasSetup",void 0),I([(0,r.Cb)({type:Boolean}),P("design:type",Boolean)],N.prototype,"_pageButtonAccess",void 0),N=I([(0,r.Mo)("attendance-setup-form-edit-admin"),P("design:paramtypes",[])],N)},8693:(e,t,n)=>{var i=n(9392),s=n(1936),o=(n(2715),n(771)),a=n(4672),r=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
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
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],r([(0,s.Cb)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=r([(0,s.Mo)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,712,1109,6236,6069,214,3901,3712],(()=>(1899,e(e.s=1899)))),e.O())])));
//# sourceMappingURL=edit-admin.js.map