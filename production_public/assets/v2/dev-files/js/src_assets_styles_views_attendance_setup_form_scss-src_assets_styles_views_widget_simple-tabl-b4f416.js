(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-b4f416"],{69579:(t,e,o)=>{"use strict";o.r(e)},99493:(t,e,o)=>{"use strict";o.r(e)},45501:(t,e,o)=>{"use strict";o.r(e)},8967:(t,e,o)=>{"use strict";o.r(e),o.d(e,{__swalStyle:()=>n,https_swal_error_format:()=>r});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(t,e=!0)=>{if(Array.isArray(t)){let o=(e?n:"")+"<ul>";return t.forEach((t=>{o+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),o+="</ul>"}throw new Error("Unknown error response format")}},14108:(t,e,o)=>{"use strict";o.r(e),o.d(e,{tokenLogin:()=>d,verifyToken:()=>c});var n=o(48485),r=o(87270),i=o(67052),s=o(21942),a=function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};const c=(t,e,o)=>a(void 0,void 0,void 0,(function*(){const c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=o,u=(0,s.get_cookie)(d),f=JSON.stringify({token:(0,i.base64Decode)(u)});if((t=>{const e=new Date;return Math.abs(t.getTime()-e.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return u;yield(0,r.http)(c,{method:"POST",body:f},!0).then((n=>a(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const t=(0,i.base64Encode)(String(n.jsonData.token));(0,s.set_cookies)(d,t,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(t,e,o)}))))})),l=(t,e,o)=>a(void 0,void 0,void 0,(function*(){const a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=o,l=JSON.stringify({email:t,id:e});yield(0,r.http)(a,{method:"POST",body:l},!0).then((t=>{if(t.jsonData.token){const e=(0,i.base64Encode)(String(t.jsonData.token));(0,s.set_cookies)(c,e,10),(0,s.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(t,e,o)=>a(void 0,void 0,void 0,(function*(){const n=(0,i.base64Encode)(String(e)),r=o;window.supersecret={unknowable:{ops:{email:t,id:n,cookieName:r}}},""==(0,s.get_cookie)(r)?yield l(t,n,o):yield c(t,n,o)}))},30367:()=>{},36106:(t,e,o)=>{"use strict";o.r(e),o.d(e,{POST_AttendanceAddScheduleCategory:()=>u});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),a=o(14492),c=o(8967),l=o(33600),d=function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};function u(t,e){return d(this,void 0,void 0,(function*(){const o=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category",u={meetingEventId:t,memberCategoryId:e};return r().fire({title:"Add Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"POST",body:JSON.stringify(u),headers:{Authorization:"Token "+o.token}},!0).then((t=>{try{const e=new a.NetWorkCallResponses("post",t,!1),o=e.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let t=[];o.unknownError.forEach((e=>{e.errors.forEach((e=>{t.push({error:e})}))}));const e=(0,c.https_swal_error_format)(t);r().showValidationMessage(`${e}`)}return e}catch(e){console.error({error:e});let o=t;o.error=e;const n=new a.NetWorkCallResponses("delete",o,!0);return n.postForm,n}})).catch((t=>{r().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",o=!1;const n=t.value;if(n instanceof Object){const t=n.response;e=String(t.message),o=n.response.success}r().fire({title:e,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5322:(t,e,o)=>{"use strict";o.r(e),o.d(e,{POST_AttendanceAddScheduleCategoryBulk:()=>u});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),a=o(14492),c=o(8967),l=o(33600),d=function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};function u(t,e){return d(this,void 0,void 0,(function*(){const o=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category/bulk",u=e.map((e=>({meetingEventId:t,memberCategoryId:e})));return r().fire({title:"Add Categories?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"POST",body:JSON.stringify(u),headers:{Authorization:"Token "+o.token}},!0,!1).then((t=>{try{const e=new a.NetWorkCallResponses("post",t,!1),o=e.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let t=[];o.unknownError.forEach((e=>{e.errors.forEach((e=>{t.push({error:e})}))}));const e=(0,c.https_swal_error_format)(t);r().showValidationMessage(`${e}`)}return e}catch(e){console.error({error:e});let o=t;o.error=e;const n=new a.NetWorkCallResponses("post",o,!0);return n.postForm,n}})).catch((t=>{r().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",o=!1;const n=t.value;if(n instanceof Object){const t=n.response;e=String(t.message),o=n.response.success}r().fire({title:e,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},67539:(t,e,o)=>{"use strict";o.r(e),o.d(e,{DELETE_AttendanceDeleteScheduleCategory:()=>u});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),a=o(14492),c=o(8967),l=o(33600),d=function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};function u(t){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),o=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category/"+t,n={};return r().fire({title:"Remove Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(o,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+e.token}},!1).then((t=>{try{const e=new a.NetWorkCallResponses("delete",t,!1),o=e.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let t=[];o.unknownError.forEach((e=>{e.errors.forEach((e=>{t.push({error:e})}))}));const e=(0,c.https_swal_error_format)(t);r().showValidationMessage(`${e}`)}return e}catch(e){console.error({error:e});let o=t;o.error=e;const n=new a.NetWorkCallResponses("delete",o,!0);return n.postForm,n}})).catch((t=>{r().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",o=!1;const n=t.value;if(n instanceof Object){const t=n.response;e=String(t.message),o=n.response.success}r().fire({title:e,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},16883:(t,e,o)=>{"use strict";o.r(e),o.d(e,{_DATATABLES_:()=>c});var n,r=o(85862),i=o(59662),s=(o(30367),o(99493),function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s}),a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends r.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.html`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return r.html`
      ${this.dt_head.map((t=>r.html`<th>${t.title}</th>`))}
    `}tbody(){return r.html`
      ${this.dt_body.map((t=>r.html`<tr>${t.map((t=>r.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return r.html`
    ${this.dt_foot.map((t=>r.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const o=this.ajaxHeader[t];e[t]=o}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[r.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"randomID1",void 0),s([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"randomID2",void 0),s([(0,i.property)({type:String}),a("design:type",String)],c.prototype,"ID",void 0),s([(0,i.property)({type:Object}),a("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],c.prototype,"datatable",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],c.prototype,"dt_head",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],c.prototype,"dt_foot",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],c.prototype,"dt_body",void 0),s([(0,i.property)(),a("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=s([(0,i.customElement)("datatables-new"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-b4f416.js.map