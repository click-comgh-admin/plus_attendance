!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-view/categories"],{69579:(e,t,n)=>{"use strict";n.r(t)},99493:(e,t,n)=>{"use strict";n.r(t)},45501:(e,t,n)=>{"use strict";n.r(t)},8967:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},14108:(e,t,n)=>{"use strict";n.r(t),n.d(t,{tokenLogin:()=>l,verifyToken:()=>c});var o=n(48485),r=n(87270),i=n(67052),a=n(21942),s=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};const c=(e,t,n)=>s(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",l=n,u=(0,a.get_cookie)(l),p=JSON.stringify({token:(0,i.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.get_cookie)(l+"_date"))))return u;yield(0,r.http)(c,{method:"POST",body:p},!0).then((o=>s(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,i.base64Encode)(String(o.jsonData.token));(0,a.set_cookies)(l,e,10),(0,a.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}else yield d(e,t,n)}))))})),d=(e,t,n)=>s(void 0,void 0,void 0,(function*(){const s=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=n,d=JSON.stringify({email:e,id:t});yield(0,r.http)(s,{method:"POST",body:d},!0).then((e=>{if(e.jsonData.token){const t=(0,i.base64Encode)(String(e.jsonData.token));(0,a.set_cookies)(c,t,10),(0,a.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),l=(e,t,n)=>s(void 0,void 0,void 0,(function*(){const o=(0,i.base64Encode)(String(t)),r=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:r}}},""==(0,a.get_cookie)(r)?yield d(e,o,n):yield c(e,o,n)}))},30367:()=>{},36106:(e,t,n)=>{"use strict";n.r(t),n.d(t,{POST_AttendanceAddScheduleCategory:()=>u});var o=n(86455),r=n.n(o),i=n(48485),a=n(87270),s=n(14492),c=n(8967),d=n(33600),l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};function u(e,t){return l(this,void 0,void 0,(function*(){const n=(0,d.getUserLoginInfoCookie)(),o=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category",u={meetingEventId:e,memberCategoryId:t};return r().fire({title:"Add Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,a.http)(o,{method:"POST",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{try{const t=new s.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new s.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5322:(e,t,n)=>{"use strict";n.r(t),n.d(t,{POST_AttendanceAddScheduleCategoryBulk:()=>u});var o=n(86455),r=n.n(o),i=n(48485),a=n(87270),s=n(14492),c=n(8967),d=n(33600),l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};function u(e,t){return l(this,void 0,void 0,(function*(){const n=(0,d.getUserLoginInfoCookie)(),o=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category/bulk",u=t.map((t=>({meetingEventId:e,memberCategoryId:t})));return r().fire({title:"Add Categories?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,a.http)(o,{method:"POST",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{try{const t=new s.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new s.NetWorkCallResponses("post",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},67539:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleCategory:()=>u});var o=n(86455),r=n.n(o),i=n(48485),a=n(87270),s=n(14492),c=n(8967),d=n(33600),l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};function u(e){return l(this,void 0,void 0,(function*(){const t=(0,d.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category/"+e,o={};return r().fire({title:"Remove Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new s.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new s.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},16883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{_DATATABLES_:()=>c});var o,r=n(85862),i=n(59662),a=(n(30367),n(99493),function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.html`
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
      ${this.dt_head.map((e=>r.html`<th>${e.title}</th>`))}
    `}tbody(){return r.html`
      ${this.dt_body.map((e=>r.html`<tr>${e.map((e=>r.html`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return r.html`
    ${this.dt_foot.map((e=>r.html`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const n=this.ajaxHeader[e];t[e]=n}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[r.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],a([(0,i.property)({type:Number}),s("design:type",Number)],c.prototype,"randomID1",void 0),a([(0,i.property)({type:Number}),s("design:type",Number)],c.prototype,"randomID2",void 0),a([(0,i.property)({type:String}),s("design:type",String)],c.prototype,"ID",void 0),a([(0,i.property)({type:Object}),s("design:type","function"==typeof(o="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?o:Object)],c.prototype,"datatable",void 0),a([(0,i.property)({type:Array}),s("design:type",Array)],c.prototype,"dt_head",void 0),a([(0,i.property)({type:Array}),s("design:type",Array)],c.prototype,"dt_foot",void 0),a([(0,i.property)({type:Array}),s("design:type",Array)],c.prototype,"dt_body",void 0),a([(0,i.property)(),s("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=a([(0,i.customElement)("datatables-new"),s("design:paramtypes",[])],c)},40896:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupViewCategories:()=>h}),n(69579),n(43683),n(15474);var o,r,i=n(23283),a=(n(66163),n(74657),n(14108)),s=n(85862),c=n(59662),d=(n(86596),n(13819),n(27712)),l=n(91354),u=n(41302),p=n(17108),f=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonCatess=!1,this.formId=1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,d.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,a.tokenLogin)(this.email,this.mId,"client_tokenLogin"),document.onreadystatechange=e=>{"complete"==document.readyState&&this.handleQueryParam()}},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonCatess=(0,u.PageButtonUserAccess)(p.PAGE__IDS.schedule_meeting_event),!(0,u.AppSettingsExtraUserAccess)({pageId:p.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${"assigned"==this.getCurrentTabFromQueryParam?0:1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="assignedCatBtn"
                label="Categories" @click="${this.displayAssignedCategories}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="close" id="unassignedCatBtn"
                label="Categories" @click="${this.displayUnassignedCategories}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${"assigned"==this.getCurrentTabFromQueryParam?0:1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="assignedCatBtn"
                label="Assigned Categories" @click="${this.displayAssignedCategories}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="close" id="unassignedCatBtn"
                label="Unassigned Categories" @click="${this.displayUnassignedCategories}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${this.getDisplay}
          </div>
        </div>
      </div>
    `}get getCurrentTabFromQueryParam(){return new URLSearchParams(window.location.search).get("view")}handleQueryParam(){const e=this.getCurrentTabFromQueryParam;"assigned"===e?this.displayAssignedCategories(new Event("click")):"unassigned"===e?this.displayUnassignedCategories(new Event("click")):this.displayAssignedCategories(new Event("click"))}updateQueryParam(e){const t=new URLSearchParams(window.location.search);t.set("view",e);const n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState(null,"",n)}displayAssignedCategories(e){e.preventDefault(),this.formId=1,this.unassignedCatBtn.removeAttribute("raised"),this.unassignedCatBtn.removeAttribute("active"),this.updateQueryParam("assigned")}displayUnassignedCategories(e){e.preventDefault(),this.formId=2,this.unassignedCatBtn.click(),this.assignedCatBtn.removeAttribute("raised"),this.assignedCatBtn.removeAttribute("active"),console.log({"this.unassignedCatBtn":this.unassignedCatBtn}),this.updateQueryParam("unassigned")}get getDisplay(){return 1===this.formId?s.html`
        <assigned-categories class="mt-2" form-id="1"></assigned-categories>
      `:s.html`
        <unassigned-categories class="mt-2" form-id="2" ></unassigned-categories>
      `}firstUpdated(){}createRenderRoot(){return this}};f([(0,c.property)({type:String}),g("design:type",String)],h.prototype,"email",void 0),f([(0,c.property)({type:Number}),g("design:type",Number)],h.prototype,"mId",void 0),f([(0,c.property)({type:Number}),g("design:type",Number)],h.prototype,"clientId",void 0),f([(0,c.property)({type:Boolean}),g("design:type",Boolean)],h.prototype,"_hasSetup",void 0),f([(0,c.property)({type:Boolean}),g("design:type",Boolean)],h.prototype,"_pageButtonCatess",void 0),f([(0,c.query)("#assignedCatBtn"),g("design:type","function"==typeof(o=void 0!==i.Button&&i.Button)?o:Object)],h.prototype,"assignedCatBtn",void 0),f([(0,c.query)("#unassignedCatBtn"),g("design:type","function"==typeof(r=void 0!==i.Button&&i.Button)?r:Object)],h.prototype,"unassignedCatBtn",void 0),f([(0,c.property)({type:Number}),g("design:type",Number)],h.prototype,"formId",void 0),h=f([(0,c.customElement)("attendance-setup-view-categories"),g("design:paramtypes",[])],h)},86596:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AssignedCategories:()=>h}),n(45501);var o,r,i=n(85862),a=n(59662),s=(n(23283),n(16413),n(51511),n(16883),n(30367),n(44672)),c=(n(75866),n(48485)),d=n(33600),l=n(69474),u=n(67539),p=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let h=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)(),this.getMeetingEventId()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return i.html`${this.table}`}firstUpdated(){}get __tableHeaders(){return[{title:"Category"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Category"},{title:"Action"}]}get table(){const e=this.__dataTable();let t={};const n=(0,d.getUserLoginInfoCookie)();return t.Authorization="Token "+n.token,i.html`
      <datatables-new .datatable="${e}" .ajaxHeader="${t}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}__dataTable(){const e=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category?datatable_plugin&meetingEventId="+this.meetingEventId,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(t,n,o)=>e.renderRow1Info(t,n,o),orderable:!0},{data:"meetingEventId",render:(t,n,o)=>e.renderRow2Info(t,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(t){return g(this,void 0,void 0,(function*(){t.aoData,e.removeCategoryBtns()}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}renderRow1Info(e,t,n){const o=l.MeetingEventCategoryModel.fromJson(n);return`\n      <div>\n        <h2 class="text-1xl font-bold">${o.memberCategoryId.category}</h2>\n        <li>${o.meetingEventId.name}</li>\n      </div>\n    `}renderRow2Info(e,t,n){return`\n      <div>\n        <mwc-button class="ml-1 danger" raised delete-this-item="${l.MeetingEventCategoryModel.fromJson(n).id}" >\n          <mwc-icon class="mr-1">delete_forever</mwc-icon>\n        </mwc-button>\n      </div>\n    `}removeCategoryBtns(){const e="delete-this-item";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),this.removeCategoryAction(t,e,n)}))}))}removeCategoryAction(e,t,n){return g(this,void 0,void 0,(function*(){n.preventDefault();const o=e.getAttribute(t);Number.isNaN(o)||0===Number(o)||(yield(0,u.DELETE_AttendanceDeleteScheduleCategory)(Number(o)))}))}getMeetingEventId(){let e=(0,s.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};h.styles=[i.css`
   :host { display: block; }
  `],p([(0,a.property)({type:Number}),f("design:type",Number)],h.prototype,"CLIENT_ID",void 0),p([(0,a.property)({type:Array}),f("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],h.prototype,"_data",void 0),p([(0,a.property)({type:Object}),f("design:type",Object)],h.prototype,"urlQueryParams",void 0),p([(0,a.property)({type:Number}),f("design:type",Number)],h.prototype,"meetingEventId",void 0),p([(0,a.query)('[show-adminField="all"]'),f("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],h.prototype,"showAdminFieldAllSelector",void 0),h=p([(0,a.customElement)("assigned-categories"),f("design:paramtypes",[])],h)},13819:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UnAssignedCategories:()=>m}),n(45501);var o,r,i=n(85862),a=n(59662),s=(n(23283),n(16413),n(51511),n(16883),n(30367),n(44672)),c=(n(75866),n(48485)),d=n(33600),l=n(69474),u=n(36106),p=n(5322),f=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let m=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)(),this.getMeetingEventId()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return i.html`${this.table}`}firstUpdated(){}get __tableHeaders(){return[{title:"Schedule"},{title:"Type"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Category"},{title:"Action"}]}get table(){const e=this.__dataTable();let t={};const n=(0,d.getUserLoginInfoCookie)();return t.Authorization="Token "+n.token,i.html`
      ${this.table_header}
      <datatables-new .datatable="${e}" .ajaxHeader="${t}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get table_header(){return i.html`
      <div class="flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="add_categories_all" name="add_categories_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_categories}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="success" raised add_categories_all="activate" @click="${this.activateMultipleMemberAction}">
            Add All Selected</mwc-button>
        </div>
      </div>
    `}__dataTable(){const e=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category/unassigned/"+this.meetingEventId+"?datatable_plugin",dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(t,n,o)=>e.renderRow1Info(t,n,o),orderable:!0},{data:"category",render:(t,n,o)=>e.renderRow2Info(t,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(t){return h(this,void 0,void 0,(function*(){t.aoData,e.addCategoryBtns()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}renderRow1Info(e,t,n){const o=l.MemberCategoryIDModel.fromJson(n);return`\n      <div class="flex items-center whitespace-normal mb-0">\n        <div class="pr-3">\n          <input id="category_info" name="category_info" type="checkbox" value="${o.id}"\n            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />\n        </div>\n        <div>\n          <h2 class="text-1xl font-bold">${o.category}</h2>\n          <li>category..name</li>\n        </div>\n      </div>\n    `}renderRow2Info(e,t,n){return`\n      <div>\n        <mwc-button class="ml-1 success text-center" raised add-this-item="${l.MemberCategoryIDModel.fromJson(n).id}" >\n           <mwc-icon class="mr-1 text-center">add</mwc-icon> <span class="text-center">Add</span>\n        </mwc-button>\n      </div>\n    `}check_all_categories(e){return h(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="add_categories_all"][name="add_categories_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="category_info"][name="category_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="category_info"][name="category_info"]').forEach((e=>{e.checked=!1}))}))}))}activateMultipleMemberAction(e){return h(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="category_info"][name="category_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}})),yield(0,p.POST_AttendanceAddScheduleCategoryBulk)(this.meetingEventId,t)}))}addCategoryBtns(){const e="add-this-item";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),this.addCategoryAction(t,e,n)}))}))}addCategoryAction(e,t,n){return h(this,void 0,void 0,(function*(){n.preventDefault();const o=e.getAttribute(t);Number.isNaN(o)||0===Number(o)||(yield(0,u.POST_AttendanceAddScheduleCategory)(this.meetingEventId,Number(o)))}))}getMeetingEventId(){let e=(0,s.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};m.styles=[i.css`
   :host { display: block; }
  `],f([(0,a.property)({type:Number}),g("design:type",Number)],m.prototype,"CLIENT_ID",void 0),f([(0,a.property)({type:Array}),g("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],m.prototype,"_data",void 0),f([(0,a.property)({type:Object}),g("design:type",Object)],m.prototype,"urlQueryParams",void 0),f([(0,a.property)({type:Number}),g("design:type",Number)],m.prototype,"meetingEventId",void 0),f([(0,a.query)('[show-adminField="all"]'),g("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],m.prototype,"showAdminFieldAllSelector",void 0),m=f([(0,a.customElement)("unassigned-categories"),g("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.material","vendors.lit","vendors.lit-element","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_attendance_meeting_event-9c74b9","shared"],(()=>(40896,e(e.s=40896)))),e.O())])));
//# sourceMappingURL=categories.js.map