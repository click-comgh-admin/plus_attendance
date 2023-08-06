"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts-src_vie-415405"],{69579:(e,t,i)=>{i.r(t)},91243:(e,t,i)=>{i.r(t)},8967:(e,t,i)=>{i.r(t),i.d(t,{__swalStyle:()=>n,https_swal_error_format:()=>o});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?n:"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},14108:(e,t,i)=>{i.r(t),i.d(t,{tokenLogin:()=>d,verifyToken:()=>c});var n=i(48485),o=i(87270),l=i(67052),s=i(21942),r=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};const c=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=i,m=(0,s.get_cookie)(d),u=JSON.stringify({token:(0,l.base64Decode)(m)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return m;yield(0,o.http)(c,{method:"POST",body:u},!0).then((n=>r(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,l.base64Encode)(String(n.jsonData.token));(0,s.set_cookies)(d,e,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield a(e,t,i)}))))})),a=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=i,a=JSON.stringify({email:e,id:t});yield(0,o.http)(r,{method:"POST",body:a},!0).then((e=>{if(e.jsonData.token){const t=(0,l.base64Encode)(String(e.jsonData.token));(0,s.set_cookies)(c,t,10),(0,s.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const n=(0,l.base64Encode)(String(t)),o=i;window.supersecret={unknowable:{ops:{email:e,id:n,cookieName:o}}},""==(0,s.get_cookie)(o)?yield a(e,n,i):yield c(e,n,i)}))},35663:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventLinkTypes:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),r=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},96404:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventLocations:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),r=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},47790:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventMemberTypes:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),r=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},40028:(e,t,i)=>{i.r(t),i.d(t,{GET_MeetingEventTypes:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),r=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},52218:(e,t,i)=>{i.r(t),i.d(t,{GET_AttendanceSchedule:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null,t=""){return i=this,r=void 0,a=function*(){const i=(0,s.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new l.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{l(a.next(e))}catch(e){t(e)}}function o(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(n,o)}l((a=a.apply(i,r||[])).next())}));var i,r,c,a}},41125:(e,t,i)=>{i.r(t),i.d(t,{POST_AttendanceAddSchedule:()=>m});var n=i(86455),o=i.n(n),l=i(48485),s=i(87270),r=i(14492),c=i(8967),a=i(33600),d=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule",i=document.querySelector('[make-general-posts="add-schedule"]'),n=new FormData(i);return o().fire({title:"Set Meeting/Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:l=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&o().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{if(n instanceof Object){const e=n.response;window.location.href=l.CONSTANTS.URLS.PDB_CLIENT+"settings/schedule?meeting-event-id="+e.data.id}else window.location.reload()}),500)}}))}))}},64609:(e,t,i)=>{i.r(t),i.d(t,{PUT_AttendanceEditSchedule:()=>m});var n=i(86455),o=i.n(n),l=i(48485),s=i(87270),r=i(14492),c=i(8967),a=i(33600),d=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),i=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n=document.querySelector('[make-general-posts="add-schedule"]'),m=new FormData(n);return o().fire({title:"Update Schedule?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(i,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&o().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26224:(e,t,i)=>{i.r(t),i.d(t,{GET_ClientBranches:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),r=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},90072:(e,t,i)=>{i.r(t),i.d(t,{GET_MemberGroupingsMemberCategories:()=>r});var n=i(48485),o=i(87270),l=i(14492),s=i(33600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),r=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},37725:(e,t,i)=>{i.r(t),i.d(t,{FileInput:()=>r});var n=i(85862),o=i(59662),l=(i(29975),i(23283),i(91243),function(e,t,i,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,i,s):o(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"name",void 0),l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"label",void 0),l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"value",void 0),l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"accept",void 0),l([(0,o.property)({type:Number}),s("design:type",Number)],r.prototype,"randomID",void 0),l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"id",void 0),l([(0,o.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"required",void 0),l([(0,o.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"hasLabel",void 0),l([(0,o.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"multiple",void 0),l([(0,o.property)({type:Number}),s("design:type",Number)],r.prototype,"startNumber",void 0),l([(0,o.property)({type:Number}),s("design:type",Number)],r.prototype,"rowsPerPage",void 0),l([(0,o.property)({type:Number}),s("design:type",Number)],r.prototype,"totalShowing",void 0),l([(0,o.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"showSelectorLoaded",void 0),r=l([(0,o.customElement)("file-input")],r)},43690:(e,t,i)=>{i.r(t),i.d(t,{SwitchInput:()=>r});var n=i(85862),o=i(59662),l=(i(29975),i(16788),function(e,t,i,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,i,s):o(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};r.styles=[n.css`
      :host {
        display: block;
      }
    `],l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"name",void 0),l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"label",void 0),l([(0,o.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"selected",void 0),l([(0,o.property)({type:String}),s("design:type",String)],r.prototype,"value",void 0),l([(0,o.property)({type:Boolean}),s("design:type",Boolean)],r.prototype,"isSelected",void 0),r=l([(0,o.customElement)("switch-input")],r)},17108:(e,t,i)=>{i.r(t),i.d(t,{PAGE__IDS:()=>n});const n={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},83979:(e,t,i)=>{i.r(t),i.d(t,{AttendanceSetupFormSchedule:()=>b});var n,o=i(85862),l=i(59662),s=(i(63313),i(40789),i(36034),i(23283),i(43690),i(37725),i(40028)),r=i(26224),c=i(90072),a=i(96404),d=i(35663),m=i(41125),u=i(52218),h=i(64609),p=i(47790),y=i(33600),f=i(17725),v=function(e,t,i,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,i,s):o(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};let b=class extends o.LitElement{constructor(){super(),this.__schedule=null,this.CLIENT_ID=0,this.meetingEventId=0,this.isEdit=!1,this._type=[],this._memberType=[],this.selectedBranchId=0,this._branches=[],this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._meetingEventLinkTypes=[],this._meetingEventLocations=[],this._data=[]}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,f.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,y.getUserLoginInfoCookie)()],yield this.getTypes(),yield this.getBranches(),yield this.getMemberTypes(),yield this.getMemberCategories(),yield this.getAttendanceSchedule(),yield this.getMeetingEventLinkTypes(),yield this.getMeetingEventLocations()}))}disconnectedCallback(){}render(){let e=null;e=null!==this._schedule&&void 0!==this._schedule.data?Array.isArray(this._schedule.data)?this._schedule.data.length>0?this._schedule.data[0]:{}:this._schedule.data:{};let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),void 0===e.meetingLocation||e.meetingLocation,o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Schedule</h1>
                  <h3 class="h3">Create New Meeting/ Event Schedule!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="add-schedule" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Schedule Type</h4>
                    ${void 0===e.type?o.html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((e=>o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((t=>e.type===t.id?o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Type</h4>
                    ${void 0===e.memberType?o.html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((e=>o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((t=>e.memberType===t.id?o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Meeting/ Event</h4> 
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter Meeting/ Event" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${1===t?o.html`
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>void 0===e.branchId?o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`:e.branchId.id===t.id?o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      `:o.html`
                        ${this._branches.map((e=>{if(e.id===t)return o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      `}
                    </mwc-select>
                    <!-- ${void 0===e.branchId?o.html`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.html`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>e.branchId.id===t.id?o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `} -->
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Memeber Category</h4>
                    ${void 0===e.memberCategoryId?o.html`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((e=>o.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.html`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((t=>e.memberCategoryId.id===t.id?o.html`<mwc-list-item value="${t.id}" selected>${t.category}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.category}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Span (in days) <span class="text-xs text-akwaaba-orange-light">How long the meeting/ event will last (default is 1 day)</span></h4> 
                    <mwc-textfield name="meetingSpan" type="number" min="1" class="w-full" id="meetingSpan" value="${void 0===e.id?"1":String(e.meetingSpan)}" label="Select Meeting Span" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Start Time</h4> 
                    <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" value="${void 0===e.id?"":String(e.startTime)}" label="Select Start Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Close Time</h4> 
                    <mwc-textfield name="closeTime" type="time" class="w-full" id="closeTime" value="${void 0===e.id?"":String(e.closeTime)}" label="Select Close Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Lateness Time</h4> 
                    <mwc-textfield name="latenessTime" type="time" class="w-full" id="latenessTime" value="${void 0===e.id?"":String(e.latenessTime)}" label="Select Lateness Time" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Is It Recuring?</h4> 
                    <switch-input name="isRecuring" class="w-full" id="isRecuring" .selected="${void 0!==e.id&&e.isRecuring}" label="Is It Recuring?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Break-Time?</h4> 
                    <switch-input name="hasBreakTime" class="w-full" id="hasBreakTime" .selected="${void 0!==e.id&&e.hasBreakTime}" label="Any Break-Time?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Duty/ Work Reporting?</h4> 
                    <switch-input name="hasDuty" class="w-full" id="hasDuty" .selected="${void 0!==e.id&&e.hasDuty}" label="Any Duty/ Work Reporting?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Overtime?</h4> 
                    <switch-input name="hasOvertime" class="w-full" id="hasOvertime" .selected="${void 0!==e.id&&e.hasOvertime}" label="Any Overtime?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Location</h4>
                    ${void 0===e.meetingLocation?o.html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((e=>o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((t=>e.meetingLocation===t.id?o.html`<mwc-list-item value="${t.id}" selected activated aria-selected="true">${t.name}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Virtual Meeting Link</h4> 
                    <mwc-textfield name="virtualMeetingLink" type="url" class="w-full" id="virtualMeetingLink" value="${e.virtualMeetingLink}" label="Enter Virtual Meeting Link" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Virtual Meeting Type</h4>
                    <mwc-select name="virtualMeetingType" class="w-full" id="virtualMeetingType" label="Select Virtual Meeting Type" outlined>
                      <mwc-list-item value="0">Select Virtual Meeting Type</mwc-list-item>
                      ${this._meetingEventLinkTypes.map((t=>e.virtualMeetingType===t.id?o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Expected Monthly Attendance</h4> 
                    <mwc-textfield name="expectedMonthlyAttendance" type="number" class="w-full" id="expectedMonthlyAttendance"
                      value="${void 0===e.id?0:e.expectedMonthlyAttendance}" label="Enter Expected Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Active Monthly Attendance</h4>
                    <mwc-textfield name="activeMonthlyAttendance" type="number" class="w-full" id="activeMonthlyAttendance"
                      value="${void 0===e.id?0:e.activeMonthlyAttendance}" label="Enter Active Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${void 0===e.id?"":e.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="agendaFile" name="agendaFile" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="${void 0===e.id?"Create":"Update"} Schedule" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),void 0!==this._schedule&&!0===this.isEdit?yield(0,h.PUT_AttendanceEditSchedule)(this.meetingEventId):yield(0,m.POST_AttendanceAddSchedule)()}))}getAttendanceSchedule(){return w(this,void 0,void 0,(function*(){const e=yield(0,u.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,s.GET_MeetingEventTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._type,...t),this._type=i}))}getMemberTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,p.GET_MeetingEventMemberTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberType,...t),this._memberType=i}))}getMeetingEventLinkTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,d.GET_MeetingEventLinkTypes)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._meetingEventLinkTypes,...t),this._meetingEventLinkTypes=i}))}getMeetingEventLocations(){return w(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MeetingEventLocations)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._meetingEventLocations,...t),this._meetingEventLocations=i}))}getBranches(){return w(this,void 0,void 0,(function*(){const e=yield(0,r.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._branches,...t),this._branches=i}))}getMemberCategories(){return w(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}createRenderRoot(){return this}};b.styles=[o.css`
   :host { display: block; }
  `],v([(0,l.property)({type:Number}),g("design:type",Number)],b.prototype,"CLIENT_ID",void 0),v([(0,l.property)({type:Number}),g("design:type",Number)],b.prototype,"meetingEventId",void 0),v([(0,l.property)({type:Boolean}),g("design:type",Boolean)],b.prototype,"isEdit",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_type",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_memberType",void 0),v([(0,l.property)({type:Number}),g("design:type",Number)],b.prototype,"selectedBranchId",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_branches",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_userLoginInfo",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_activeBranchId",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_memberCategories",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_meetingEventLinkTypes",void 0),v([(0,l.property)({type:Array}),g("design:type",Array)],b.prototype,"_meetingEventLocations",void 0),v([(0,l.property)({type:Array}),g("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],b.prototype,"_data",void 0),b=v([(0,l.customElement)("attendance-setup-form-schedule"),g("design:paramtypes",[])],b)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts-src_vie-415405.js.map