"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_url_query_params_i-94fb2f"],{3794:(e,t,i)=>{i.r(t)},8034:(e,t,i)=>{i.r(t)},8207:(e,t,i)=>{i.r(t)},4672:(e,t,i)=>{i.r(t),i.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>r,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>a});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),i=Object.fromEntries(t.entries());let n=null;for(const t in i)t===e&&(n=i[t]);return n},o=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",i=0;for(const n in e)i+=1,t+=`${i>1?"&":""}${n}=${e[n]}`;return t}},2486:(e,t,i)=>{i.r(t),i.d(t,{Boolean_I:()=>n});const n=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e}},1801:(e,t,i)=>{i.r(t),i.d(t,{Constituency_S:()=>o,_Constituency_D:()=>a});var n=i(6909),r=i(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),districtId:"districtId"in e?(0,n.District_S)(e.districtId):(0,n._District_D)(),location:String(e.location)}}function a(){return{id:0,regionId:(0,r._Region_D)(),districtId:(0,n._District_D)(),location:"-"}}},9492:(e,t,i)=>{function n(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function r(){return{id:0,name:"-",short:"-",code:"-"}}i.r(t),i.d(t,{Country_S:()=>n,_Country_D:()=>r})},6909:(e,t,i)=>{i.r(t),i.d(t,{District_S:()=>r,_District_D:()=>o});var n=i(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,n.Region_S)(e.regionId):(0,n._Region_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,n._Region_D)(),location:"-"}}},8769:(e,t,i)=>{i.r(t),i.d(t,{ElectoralArea_S:()=>o,_ElectoralArea_D:()=>a});var n=i(6909),r=i(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),districtId:"districtId"in e?(0,n.District_S)(e.districtId):(0,n._District_D)(),location:String(e.location)}}function a(){return{id:0,regionId:(0,r._Region_D)(),districtId:(0,n._District_D)(),location:"-"}}},7202:(e,t,i)=>{function n(e){return{id:Number(e.id),location:String(e.location)}}function r(){return{id:0,location:"-"}}i.r(t),i.d(t,{Region_S:()=>n,_Region_D:()=>r})},267:(e,t,i)=>{function n(e){return{id:"number"==typeof e?e:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}i.r(t),i.d(t,{GroupingsMemberCategories_S:()=>n})},6246:(e,t,i)=>{i.r(t),i.d(t,{MembershipUser_S:()=>l});var n=i(2486),r=i(1801),o=i(9492),a=i(6909),c=i(8769),s=i(7202);function d(e,t=""){return String(null===e?t:e)}function l(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:d(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:d(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),editable:(0,n.Boolean_I)(e.editable),profileResume:String(e.profileResume),profileIdentification:String(e.profileIdentification),archived:(0,n.Boolean_I)(e.archived),identification:String(e.identification),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,o.Country_S)(e.countryInfo):(0,o._Country_D)(),regionInfo:"regionInfo"in e?(0,s.Region_S)(e.regionInfo):(0,s._Region_D)(),districtInfo:"districtInfo"in e?(0,a.District_S)(e.districtInfo):(0,a._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,r.Constituency_S)(e.constituencyInfo):(0,r._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,c.ElectoralArea_S)(e.electoralareaInfo):(0,c._ElectoralArea_D)()}}},8763:(e,t,i)=>{i.r(t),i.d(t,{AlertCard:()=>c}),i(8034);var n=i(5862),r=i(9662),o=(i(8207),function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?n.html`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:n.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?n.html`<header class="header">${this.header}</header>`:n.nothing}
              ${null!==this.content?n.html`<main class="main">${this.content}</main>`:n.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?n.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?n.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?n.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?n.html`<mwc-icon>warning</mwc-icon>`:this.danger?n.html`<mwc-icon>error_outline</mwc-icon>`:this.default?n.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?n.html`<mwc-icon>star_outline</mwc-icon>`:n.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[n.css`
   :host { display: block; }
  `],o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"loading",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"success",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"info",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"warning",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"danger",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"default",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"primary",void 0),o([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"extra_class",void 0),c=o([(0,r.customElement)("alert-card"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_url_query_params_i-94fb2f.js.map