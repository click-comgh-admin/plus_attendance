/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9850],{8967:(t,e,n)=>{n.d(e,{T:()=>r});const r=(t,e=!0)=>{if(Array.isArray(t)){let n=(e?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return t.forEach((t=>{n+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(t,e,n)=>{n.d(e,{Jx:()=>s,O1:()=>r,Vc:()=>o,W3:()=>a});const r=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},s=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let r=null;for(const e in n)e===t&&(r=n[e]);return r},o=t=>new URLSearchParams(window.location.search).getAll(t),a=t=>{let e="",n=0;for(const r in t)n+=1,e+=`${n>1?"&":""}${r}=${t[r]}`;return e}},7141:(t,e,n)=>{n.d(e,{Y:()=>l,e:()=>r});class r{static toAttendanceAbsentLeaveStatusModel(t){return a(JSON.parse(t),c("AttendanceAbsentLeaveStatusModel"),s)}static attendanceAbsentLeaveStatusModelToJson(t){return JSON.stringify(a(t,c("AttendanceAbsentLeaveStatusModel"),o),null,2)}}function s(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function o(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function a(t,e,n,r=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=l[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const r=t.length;for(let s=0;s<r;s++){const r=t[s];try{return a(e,r,n)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>a(e,t,n)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const s={};return Object.getOwnPropertyNames(t).forEach((e=>{const o=t[e],i=Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;s[o.key]=a(i,o.typ,n,o.key)})),Object.getOwnPropertyNames(r).forEach((o=>{Object.prototype.hasOwnProperty.call(t,o)||(s[o]=a(r[o],e,n,o))})),s}(n(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function i(...t){return{unionMembers:t}}function c(t){return{ref:t}}const l={AttendanceAbsentLeaveStatusModel:(u=[{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"status",js:"status",typ:i(null,"")},{json:"date",js:"date",typ:i(null,Date)}],!1,{props:u,additional:false})};var u},5524:(t,e,n)=>{n.d(e,{K:()=>i});var r=n(771),s=n(7270),o=n(3600),a=n(596);function i(t=null,e=""){return n=this,i=void 0,l=function*(){const n=(0,o.Ie)(),i=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status"+(null===t?"":"/"+t)+e,c=yield(0,s.d)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.H("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new a.H("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function r(t){try{o(l.next(t))}catch(t){e(t)}}function s(t){try{o(l.throw(t))}catch(t){e(t)}}function o(e){var n;e.done?t(e.value):(n=e.value,n instanceof c?n:new c((function(t){t(n)}))).then(r,s)}o((l=l.apply(n,i||[])).next())}));var n,i,c,l}},6224:(t,e,n)=>{n.d(e,{p:()=>i});var r=n(771),s=n(7270),o=n(596),a=n(3600);function i(t=null){return e=this,n=void 0,c=function*(){const e=(0,a.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===t?"":"/"+t),i=yield(0,s.d)(n,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new o.H("get",i)}catch(t){console.error({error:t});let e=i;return e.error=t,new o.H("get",e,!0)}},new((i=void 0)||(i=Promise))((function(t,r){function s(t){try{a(c.next(t))}catch(t){r(t)}}function o(t){try{a(c.throw(t))}catch(t){r(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(s,o)}a((c=c.apply(e,n||[])).next())}));var e,n,i,c}},4408:(t,e,n)=>{n.r(e),n.d(e,{AttendanceAbsentLeaveStatusEdit:()=>O}),n(1239),n(9261),n(5248),n(3313);var r=n(9392),s=n(1936),o=n(3600),a=n(6224),i=n(7052),c=n(4672),l=n(7725),u=n(5524),d=n(6455),p=n.n(d),f=n(771),h=n(7270),y=n(596),m=n(8967),v=function(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function i(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((r=r.apply(t,e||[])).next())}))},b=n(7141),w=(n(3683),n(4657),n(9665)),g=n(8092),A=n(1302),_=n(7108),S=function(t,e,n,r){var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(a=(o<3?s(a):o>3?s(e,n,a):s(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},j=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},I=function(t,e,n,r){return new(n||(n=Promise))((function(s,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function i(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((r=r.apply(t,e||[])).next())}))};let O=class extends r.oi{constructor(){super(),this.accountType=0,this.selectedBranch=1,this.statusId=0,this.statusIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[],this._statuses=[],this._hasSetup=!1}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){t.connectedCallback.call(this),(0,w.f)().then((()=>this._hasSetup=!0));const e=(0,l.hk)();this._activeBranchId=null===e?null:[e],this._userLoginInfo=[(0,o.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getStatusId(),this.getStatus(this.statusId),yield this.getBranches()}))}disconnectedCallback(){}render(){var t;if(this._hasSetup){if(null===(t=(0,g.H)())||void 0===t?void 0:t.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,A.H)({pageId:_.W.absent_leave_status,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}if(this._statuses.length<1)return r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._statuses)return r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const e=this._statuses[0];return r.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Status</h1>
                    <h3 class="h3">Update Status!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-status" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="_branchId_" id="_branchId_"  outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>{if(t.id===e.branchID)return r.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Status</h4>
                      <mwc-textfield name="status" id="status" label="Enter Status"
                        outlined required value="${e.status}">
                      </mwc-textfield>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getStatusId(){let t=(0,c.Jx)("view-status"),e=null!==t?(0,i.t)(t):null;this.statusId=Number.isNaN(e)?null:Number(e),this.statusIdEnc=(0,i.h)(String(this.statusId),!0)}getStatus(t){return I(this,void 0,void 0,(function*(){const e=yield(0,u.K)(t);if(null!==e&&e.response.success&&"status"in e.response.data){const t=b.e.toAttendanceAbsentLeaveStatusModel(JSON.stringify(e.response.data));this._statuses=[t]}else this._statuses=null}))}getBranches(){return I(this,void 0,void 0,(function*(){const t=yield(0,a.p)();let e=[];null===t?e.push({id:0,name:"**NOT FOUND**"}):!0===t.response.success&&"length"in t.response.data&&(e=t.response.data);const n=[];n.push(...this._branches,...e),this._branches=n}))}submitForm(t){return I(this,void 0,void 0,(function*(){t.preventDefault(),yield function(t){return v(this,void 0,void 0,(function*(){const e=(0,o.Ie)(),n=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status/"+t,r=document.querySelector('[make-general-posts="attendance-absent-leave-status"]'),s=new FormData(r);return p().fire({title:"Update Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>v(this,void 0,void 0,(function*(){return yield(0,h.d)(n,{method:"PATCH",body:s,headers:{Authorization:"Token "+e.token}},!1).then((t=>{const e=new y.H("post",t,!1,r),n=e.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let t=[];n.unknownError.forEach((e=>{e.errors.forEach((n=>{let r={error:e.id+": "+n};"non_field_errors"===e.id&&(r={error:n}),t.push(r)}))}));const e=(0,m.T)(t);p().showValidationMessage(`${e}`)}return e})).catch((t=>{p().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",n=!1;const r=t.value;if(r instanceof Object){const t=r.response;e=String(t.message),n=r.response.success}n&&p().fire({title:e,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.statusId)}))}createRenderRoot(){return this}};O.styles=[r.iv`
   :host { display: block; }
  `],S([(0,s.Cb)({type:Number}),j("design:type",Number)],O.prototype,"accountType",void 0),S([(0,s.Cb)({type:Number}),j("design:type",Number)],O.prototype,"selectedBranch",void 0),S([(0,s.Cb)({type:Number}),j("design:type",Number)],O.prototype,"statusId",void 0),S([(0,s.Cb)({type:String}),j("design:type",String)],O.prototype,"statusIdEnc",void 0),S([(0,s.Cb)({type:Array}),j("design:type",Array)],O.prototype,"_userLoginInfo",void 0),S([(0,s.Cb)({type:Array}),j("design:type",Array)],O.prototype,"_activeBranchId",void 0),S([(0,s.Cb)({type:Array}),j("design:type",Array)],O.prototype,"_branches",void 0),S([(0,s.Cb)({type:Array}),j("design:type",Array)],O.prototype,"_statuses",void 0),S([(0,s.Cb)({type:Boolean}),j("design:type",Boolean)],O.prototype,"_hasSetup",void 0),O=S([(0,s.Mo)("attendance-absent-leave-status-edit"),j("design:paramtypes",[])],O)},7108:(t,e,n)=>{n.d(e,{W:()=>r});const r={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},4232:(t,e,n)=>{n.d(e,{OR:()=>a,hl:()=>c,pt:()=>o});var r=n(3692);const{I:s}=r.Al,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=t=>void 0===t.strings,i={},c=(t,e=i)=>t._$AH=e},8082:(t,e,n)=>{n.d(e,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=n(875)},3669:(t,e,n)=>{n.d(e,{a:()=>a});var r=n(3692),s=n(875),o=n(4232);const a=(0,s.XM)(class extends s.Xe{constructor(t){if(super(t),t.type!==s.pX.PROPERTY&&t.type!==s.pX.ATTRIBUTE&&t.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.OR)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===r.Jb||e===r.Ld)return e;const n=t.element,a=t.name;if(t.type===s.pX.PROPERTY){if(e===n[a])return r.Jb}else if(t.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(a))return r.Jb}else if(t.type===s.pX.ATTRIBUTE&&n.getAttribute(a)===e+"")return r.Jb;return(0,o.hl)(t),e}})}},t=>(t.O(0,[5744,2185,9674,7708,1109,6236,6069,2482,3712],(()=>(4408,t(t.s=4408)))),t.O())])));
//# sourceMappingURL=edit.js.map