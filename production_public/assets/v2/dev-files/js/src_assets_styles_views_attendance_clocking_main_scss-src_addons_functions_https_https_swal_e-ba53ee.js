"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_https_https_swal_e-ba53ee"],{73794:(e,t,n)=>{n.r(t)},38034:(e,t,n)=>{n.r(t)},28207:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>i,https_swal_error_format:()=>r});const i="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?i:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},27653:(e,t,n)=>{n.r(t),n.d(t,{MeetingEventSchedule_S:()=>s});var i=n(82486),r=n(67468),o=n(61489),a=n(18894),c=n(50267);function s(e){return{id:Number(e.id),type:Number(e.type),memberType:Number(e.memberType),name:String(e.name),clientId:(0,r.ClientInfo_S)(e.clientId),branchId:(0,o.ClientBranch_S)(e.branchId),memberCategoryId:(0,c.GroupingsMemberCategories_S)(e.memberCategoryId),meetingSpan:Number(e.meetingSpan),startTime:(0,a.Time_I)(e.startTime),closeTime:(0,a.Time_I)(e.closeTime),latenessTime:(0,a.Time_I)(e.latenessTime),isRecuring:(0,i.Boolean_I)(e.isRecuring),hasBreakTime:(0,i.Boolean_I)(e.hasBreakTime),hasDuty:(0,i.Boolean_I)(e.hasDuty),hasOvertime:(0,i.Boolean_I)(e.hasOvertime),agenda:String(e.agenda),agendaFile:String(e.agendaFile),virtualMeetingLink:String(e.virtualMeetingLink),virtualMeetingType:Number(e.virtualMeetingType),meetingLocation:Number(e.meetingLocation),expectedMonthlyAttendance:Number(e.expectedMonthlyAttendance),activeMonthlyAttendance:Number(e.activeMonthlyAttendance),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate),date:new Date(e.date)}}},27325:(e,t,n)=>{n.r(t),n.d(t,{MemberClockingInfo_S:()=>s});var i=n(82486),r=n(22578),o=n(96246),a=n(18530),c=n(27653);function s(e){let t=null;return t=1===e.memberId.accountType?(0,o.MembershipUser_S)(e.memberId):a.Convert.toMembershipOrganizationUserModel(JSON.stringify(e.memberId)),{id:Number(e.id),meetingEventId:(0,c.MeetingEventSchedule_S)(e.meetingEventId),memberId:t,accountType:Number(e.accountType),inOrOut:(0,i.Boolean_I)(e.inOrOut),inTime:(0,r.Date_I)(e.inTime),outTime:(0,r.Date_I)(e.outTime),startBreak:(0,r.Date_I)(e.startBreak),endBreak:(0,r.Date_I)(e.endBreak),clockedBy:Number(e.clockedBy),clockingMethod:Number(e.clockingMethod),clockingMethodName:String(e.clockingMethodName),date:new Date(e.date),justification:e.justification}}},82486:(e,t,n)=>{n.r(t),n.d(t,{Boolean_I:()=>i});const i=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e}},67468:(e,t,n)=>{n.r(t),n.d(t,{ClientInfo_S:()=>c});var i=n(71801),r=n(29492),o=n(86909),a=n(77202);function c(e){return{id:Number(e.id),name:String(e.name),accountType:Number(e.accountType),country:String(e.country),stateProvince:String(e.stateProvince),applicantFirstname:String(e.applicantFirstname),applicantSurname:String(e.applicantSurname),applicantGender:Number(e.applicantGender),applicantPhone:String(e.applicantPhone),applicantEmail:String(e.applicantEmail),applicantDesignationRole:Number(e.applicantDesignationRole),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),community:String(e.community),subscriptionDuration:Number(e.subscriptionDuration),subscriptionDate:new Date(e.updateDate),subscriptionFee:String(e.subscriptionFee),logo:String(e.logo),status:Number(e.status),archive:Number(e.archive),accountCategory:Number(e.accountCategory),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate),countryInfo:"countryInfo"in e?(0,r.Country_S)(e.countryInfo):(0,r._Country_D)(),regionInfo:"regionInfo"in e?(0,a.Region_S)(e.regionInfo):(0,a._Region_D)(),districtInfo:"districtInfo"in e?(0,o.District_S)(e.districtInfo):(0,o._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,i.Constituency_S)(e.constituencyInfo):(0,i._Constituency_D)()}}},22578:(e,t,n)=>{function i(e){return"null"===e||null===e?null:new Date(e)}n.r(t),n.d(t,{Date_I:()=>i})},18894:(e,t,n)=>{function i(e){const t=String(e).toLocaleLowerCase().split("T");let n="00:00:00";if(t.length>1?n=t[1]:1===t.length&&(n=t[0]),"null"===n)return null;let i=new Date;const r=n.split(":");return void 0!==r[0]&&i.setHours(Number(r[0])),void 0!==r[1]&&i.setMinutes(Number(r[1])),void 0!==r[2]&&i.setSeconds(Number(r[2])),i}n.r(t),n.d(t,{Time_I:()=>i})},71801:(e,t,n)=>{n.r(t),n.d(t,{Constituency_S:()=>o,_Constituency_D:()=>a});var i=n(86909),r=n(77202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),districtId:"districtId"in e?(0,i.District_S)(e.districtId):(0,i._District_D)(),location:String(e.location)}}function a(){return{id:0,regionId:(0,r._Region_D)(),districtId:(0,i._District_D)(),location:"-"}}},29492:(e,t,n)=>{function i(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function r(){return{id:0,name:"-",short:"-",code:"-"}}n.r(t),n.d(t,{Country_S:()=>i,_Country_D:()=>r})},86909:(e,t,n)=>{n.r(t),n.d(t,{District_S:()=>r,_District_D:()=>o});var i=n(77202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,i.Region_S)(e.regionId):(0,i._Region_D)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,i._Region_D)(),location:"-"}}},58769:(e,t,n)=>{n.r(t),n.d(t,{ElectoralArea_S:()=>o,_ElectoralArea_D:()=>a});var i=n(86909),r=n(77202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),districtId:"districtId"in e?(0,i.District_S)(e.districtId):(0,i._District_D)(),location:String(e.location)}}function a(){return{id:0,regionId:(0,r._Region_D)(),districtId:(0,i._District_D)(),location:"-"}}},77202:(e,t,n)=>{function i(e){return{id:Number(e.id),location:String(e.location)}}function r(){return{id:0,location:"-"}}n.r(t),n.d(t,{Region_S:()=>i,_Region_D:()=>r})},50267:(e,t,n)=>{function i(e){return{id:"number"==typeof e?e:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}n.r(t),n.d(t,{GroupingsMemberCategories_S:()=>i})},96246:(e,t,n)=>{n.r(t),n.d(t,{MembershipUser_S:()=>l});var i=n(82486),r=n(71801),o=n(29492),a=n(86909),c=n(58769),s=n(77202);function d(e,t=""){return String(null===e?t:e)}function l(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:d(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:d(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),editable:(0,i.Boolean_I)(e.editable),profileResume:String(e.profileResume),profileIdentification:String(e.profileIdentification),archived:(0,i.Boolean_I)(e.archived),identification:String(e.identification),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,o.Country_S)(e.countryInfo):(0,o._Country_D)(),regionInfo:"regionInfo"in e?(0,s.Region_S)(e.regionInfo):(0,s._Region_D)(),districtInfo:"districtInfo"in e?(0,a.District_S)(e.districtInfo):(0,a._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,r.Constituency_S)(e.constituencyInfo):(0,r._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,c.ElectoralArea_S)(e.electoralareaInfo):(0,c._ElectoralArea_D)()}}},48763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>c}),n(38034);var i=n(85862),r=n(59662),o=(n(28207),function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?i.html`
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
      `:i.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?i.html`<header class="header">${this.header}</header>`:i.nothing}
              ${null!==this.content?i.html`<main class="main">${this.content}</main>`:i.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?i.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?i.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?i.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?i.html`<mwc-icon>warning</mwc-icon>`:this.danger?i.html`<mwc-icon>error_outline</mwc-icon>`:this.default?i.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?i.html`<mwc-icon>star_outline</mwc-icon>`:i.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"loading",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"success",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"info",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"warning",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"danger",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"default",void 0),o([(0,r.property)({type:Boolean}),a("design:type",Boolean)],c.prototype,"primary",void 0),o([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"extra_class",void 0),c=o([(0,r.customElement)("alert-card"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_https_https_swal_e-ba53ee.js.map