!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-view/schedules"],{3076:(e,t,n)=>{"use strict";n.r(t)},9493:(e,t,n)=>{"use strict";n.r(t)},5501:(e,t,n)=>{"use strict";n.r(t)},4108:(e,t,n)=>{"use strict";n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>c});var o=n(8485),r=n(7270),i=n(7052),s=n(1942),a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,p=(0,s.get_cookie)(d),u=JSON.stringify({token:(0,i.base64Decode)(p)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return p;yield(0,r.http)(c,{method:"POST",body:u},!0).then((o=>a(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,i.base64Encode)(String(o.jsonData.token));(0,s.set_cookies)(d,e,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})),l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=n,l=JSON.stringify({email:e,id:t});yield(0,r.http)(a,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,i.base64Encode)(String(e.jsonData.token));(0,s.set_cookies)(c,t,10),(0,s.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const o=(0,i.base64Encode)(String(t)),r=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:r}}},""==(0,s.get_cookie)(r)?yield l(e,o,n):yield c(e,o,n)}))},4672:(e,t,n)=>{"use strict";n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},i=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},367:()=>{},1854:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MultipleWidgets:()=>c});var o=n(5862),r=n(9662),i=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let c=class extends o.LitElement{constructor(){super(),this.index=0,this._widget=o.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return o.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?o.nothing:o.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};i([(0,r.property)({type:Number}),s("design:type",Number)],c.prototype,"index",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"no_delete",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"single",void 0),i([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"_single",void 0),c=i([(0,r.customElement)("multiple-widgets"),s("design:paramtypes",[])],c)},6883:(e,t,n)=>{"use strict";n.r(t),n.d(t,{_DATATABLES_:()=>c});var o,r=n(5862),i=n(9662),s=(n(367),n(9493),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.html`
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
    `],s([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"randomID1",void 0),s([(0,i.property)({type:Number}),a("design:type",Number)],c.prototype,"randomID2",void 0),s([(0,i.property)({type:String}),a("design:type",String)],c.prototype,"ID",void 0),s([(0,i.property)({type:Object}),a("design:type","function"==typeof(o="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?o:Object)],c.prototype,"datatable",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],c.prototype,"dt_head",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],c.prototype,"dt_foot",void 0),s([(0,i.property)({type:Array}),a("design:type",Array)],c.prototype,"dt_body",void 0),s([(0,i.property)(),a("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=s([(0,i.customElement)("datatables-new"),a("design:paramtypes",[])],c)},3690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SwitchInput:()=>a});var o=n(5862),r=n(9662),i=(n(9975),n(6788),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[o.css`
      :host {
        display: block;
      }
    `],i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"name",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"selected",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"value",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"isSelected",void 0),a=i([(0,r.customElement)("switch-input")],a)},1704:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupViewSchedules:()=>u}),n(3076),n(3683),n(4657);var o=n(4108),r=n(5862),i=n(9662),s=(n(7688),n(7712)),a=n(1354),c=n(1302),l=n(7108),d=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends r.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,s.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(l.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.schedule_meeting_event,viewType:"View"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return r.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-view-all CLIENT_ID="${this.clientId}"></attendance-setup-view-all>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,i.property)({type:String}),p("design:type",String)],u.prototype,"email",void 0),d([(0,i.property)({type:Number}),p("design:type",Number)],u.prototype,"mId",void 0),d([(0,i.property)({type:Number}),p("design:type",Number)],u.prototype,"clientId",void 0),d([(0,i.property)({type:Boolean}),p("design:type",Boolean)],u.prototype,"_hasSetup",void 0),d([(0,i.property)({type:Boolean}),p("design:type",Boolean)],u.prototype,"_pageButtonAccess",void 0),u=d([(0,i.customElement)("attendance-setup-view-schedules"),p("design:paramtypes",[])],u)},7688:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupViewAll:()=>h}),n(5501);var o,r,i=n(5862),s=n(9662),a=(n(3283),n(1511),n(3690),n(1854),n(6883),n(367),n(4672)),c=(n(5866),n(8485)),l=n(3600),d=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let h=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.urlQueryParams)()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return i.html`${this.table}`}firstUpdated(){}get __tableHeaders(){return[{title:"Schedule"},{title:"Type"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Schedule"},{title:"Type"}]}get table(){const e=this.__dataTable();let t={};const n=(0,l.getUserLoginInfoCookie)();return t.Authorization="Token "+n.token,i.html`
      <datatables-new .datatable="${e}" .ajaxHeader="${t}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}__dataTable(){return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule?datatable_plugin",dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,t,n){return`${n.name} <a href="${c.CONSTANTS.URLS.PDB_CLIENT}settings/schedule?meeting-event-id=${n.id}"> Open </a>`},orderable:!0},{data:"type",render:function(e,t,n){return 1===n.type?"Meeting":"Event"},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return u(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};h.styles=[i.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Number}),p("design:type",Number)],h.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Array}),p("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],h.prototype,"_data",void 0),d([(0,s.property)({type:Object}),p("design:type",Object)],h.prototype,"urlQueryParams",void 0),d([(0,s.property)({type:Number}),p("design:type",Number)],h.prototype,"meetingEventId",void 0),d([(0,s.query)('[show-adminField="all"]'),p("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],h.prototype,"showAdminFieldAllSelector",void 0),h=d([(0,s.customElement)("attendance-setup-view-all"),p("design:paramtypes",[])],h)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","shared"],(()=>(1704,e(e.s=1704)))),e.O())])));
//# sourceMappingURL=schedules.js.map