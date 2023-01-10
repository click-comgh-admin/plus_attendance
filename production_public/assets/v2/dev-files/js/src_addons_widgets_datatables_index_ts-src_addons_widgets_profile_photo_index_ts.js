(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts"],{9493:(t,e,r)=>{"use strict";r.r(e)},68:(t,e,r)=>{"use strict";r.r(e),r.d(e,{change_app_by_link:()=>a});var o=r(3600),i=r(7052),s=r(8485);const a=t=>{const e=(0,o.getUserLoginInfoCookie)().token,r=(0,i.base64Encode)(e,!0),a=(0,i.base64Encode)(t,!0);return`${s.CONSTANTS.URLS.PDB_DATABASE}app-reroute?permission-key=${r}&access-page-key=${a}`}},367:()=>{},6883:(t,e,r)=>{"use strict";r.r(e),r.d(e,{_DATATABLES_:()=>l});var o,i=r(5862),s=r(9662),a=(r(367),r(9493),function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a}),n=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.html`
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
  `}thead(){return i.html`
      ${this.dt_head.map((t=>i.html`<th>${t.title}</th>`))}
    `}tbody(){return i.html`
      ${this.dt_body.map((t=>i.html`<tr>${t.map((t=>i.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return i.html`
    ${this.dt_foot.map((t=>i.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[i.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],a([(0,s.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID1",void 0),a([(0,s.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID2",void 0),a([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"ID",void 0),a([(0,s.property)({type:Object}),n("design:type","function"==typeof(o="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?o:Object)],l.prototype,"datatable",void 0),a([(0,s.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_head",void 0),a([(0,s.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_foot",void 0),a([(0,s.property)({type:Array}),n("design:type",Array)],l.prototype,"dt_body",void 0),a([(0,s.property)(),n("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=a([(0,s.customElement)("datatables-new"),n("design:paramtypes",[])],l)},8281:(t,e,r)=>{"use strict";r.r(e),r.d(e,{UserProfilePhoto:()=>p});var o=r(8485),i=r(68),s=r(5862),a=r(9662),n=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let p=class extends s.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return s.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 hidden"></div>
      <div class="w-32 h-32 hidden"></div>
      <div class="w-16 h-16 hidden"></div>
    `}openProfile(t){if(t.preventDefault(),"false"!==this["click-to-open"]){const t=(0,i.change_app_by_link)(this["click-to-open"]);window.location.href=t}}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};p.styles=[s.css`
   :host { display: block; }
  `],n([(0,a.property)({type:String}),l("design:type",String)],p.prototype,"url",void 0),n([(0,a.property)({type:String}),l("design:type",String)],p.prototype,"type",void 0),n([(0,a.property)({type:Boolean}),l("design:type",Boolean)],p.prototype,"rounded",void 0),n([(0,a.property)({type:String}),l("design:type",String)],p.prototype,"click-to-open",void 0),n([(0,a.property)({type:Number}),l("design:type",Number)],p.prototype,"size",void 0),p=n([(0,a.customElement)("user-profile-photo"),l("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts.js.map