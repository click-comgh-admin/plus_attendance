"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7552],{6182:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentEdit:()=>S});var s=n(5862),o=n(8393),i=(n(1239),n(9261),n(5248),n(3313),n(2935),n(5866),n(3600)),a=n(7725),r=n(6224),c=n(7052),l=n(4672),d=n(9339),u=n(771),m=n(7270),h=n(596),p=n(6455),f=n.n(p),y=n(8967),g=function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function a(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((s=s.apply(e,t||[])).next())}))};n(3683),n(4657);var b=n(9665),v=n(8092),w=n(1302),_=n(7108),I=function(e,t,n,s){var o,i=arguments.length,a=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function a(e){try{c(s.next(e))}catch(e){i(e)}}function r(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((s=s.apply(e,t||[])).next())}))};let S=class extends s.oi{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.assignmentId=0,this.assignmentIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._statuses=[],this._assignments=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,b.f)().then((()=>this._hasSetup=!0));const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,i.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getAssignmentId(),this.getAssignment(this.assignmentId),yield this.getBranches()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,v.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(!(0,w.H)({pageId:_.W.absent_leave_assignment,viewType:"Edit"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}if(this._assignments.length<1)return s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._assignments)return s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const t=this._assignments[0];let n=" - ";return n=1===t.memberInfo.accountType?t.memberInfo.middlename.length<1?`${t.memberInfo.firstname} ${t.memberInfo.surname}`:`${t.memberInfo.firstname} ${t.memberInfo.middlename} ${t.memberInfo.surname}`:`${t.memberInfo.organizationName}`,s.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Assignment</h1>
                    <h3 class="h3">Update Assignment!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment"
                  enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch" name="_branchId_" id="_branchId_"
                        outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>{if(e.id===t.statusID.branchID)return s.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Status</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Status" name="statusId" id="statusId"
                        outlined required>
                        <mwc-list-item value="${t.statusID.id}" selected>
                          ${t.statusID.status}
                        </mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">From - Date</h4>
                      <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                        value="${this.getDate(t.fromDate)}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">To - Date</h4>
                      <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                        value="${this.getDate(t.toDate)}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">Member</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Member" name="__memberId__" id="__memberId__"
                        outlined required>
                        <mwc-list-item value="${t.memberID}" selected>
                          ${n}
                        </mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">
                        Reason <span class="text-yellow-400">[optional]</span>
                      </h4>
                      <mwc-textarea class="h-96" outlined name="reason" id="reason" label="Enter Reason [optional]"
                        placeholder="Enter Reason [optional]" value="${t.reason}">
                      </mwc-textarea>
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
    `}getDate(e){return e.toLocaleString("default",{year:"numeric"})+"-"+e.toLocaleString("default",{month:"2-digit"})+"-"+e.toLocaleString("default",{day:"2-digit"})}firstUpdated(){}getAssignmentId(){let e=(0,l.Jx)("view-assignment"),t=null!==e?(0,c.t)(e):null;this.assignmentId=Number.isNaN(t)?null:Number(t),this.assignmentIdEnc=(0,c.h)(String(this.assignmentId),!0)}getAssignment(e){return x(this,void 0,void 0,(function*(){const t=yield function(e=null,t=""){return n=this,s=void 0,a=function*(){const n=(0,i.Ie)(),s=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment"+(null===e?"":"/"+e)+t,o=yield(0,m.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new h.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new h.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{c(a.next(e))}catch(e){t(e)}}function r(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,r)}c((a=a.apply(n,s||[])).next())}));var n,s,o,a}(e);null!==t&&t.response.success&&"statusId"in t.response.data?this._assignments=[d.e.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(t.response.data))]:this._assignments=null}))}getBranches(){return x(this,void 0,void 0,(function*(){const e=yield(0,r.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,i.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/"+e,s=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),o=new FormData(s);return f().fire({title:"Update Assignment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"PATCH",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new h.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,y.T)(e);f().showValidationMessage(`${t}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.assignmentId)}))}createRenderRoot(){return this}};S.styles=[s.iv`
   :host { display: block; }
  `],I([(0,o.Cb)({type:Number}),A("design:type",Number)],S.prototype,"startSearchPage",void 0),I([(0,o.Cb)({type:Number}),A("design:type",Number)],S.prototype,"accountType",void 0),I([(0,o.Cb)({type:Number}),A("design:type",Number)],S.prototype,"selectedBranch",void 0),I([(0,o.Cb)({type:Number}),A("design:type",Number)],S.prototype,"assignmentId",void 0),I([(0,o.Cb)({type:String}),A("design:type",String)],S.prototype,"assignmentIdEnc",void 0),I([(0,o.Cb)({type:Array}),A("design:type",Array)],S.prototype,"_userLoginInfo",void 0),I([(0,o.Cb)({type:Array}),A("design:type",Array)],S.prototype,"_activeBranchId",void 0),I([(0,o.Cb)({type:Array}),A("design:type",Array)],S.prototype,"_memberCategories",void 0),I([(0,o.Cb)({type:Array}),A("design:type",Array)],S.prototype,"_branches",void 0),I([(0,o.Cb)({type:Array}),A("design:type",Array)],S.prototype,"_statuses",void 0),I([(0,o.Cb)({type:Array}),A("design:type",Array)],S.prototype,"_assignments",void 0),I([(0,o.Cb)({type:Boolean}),A("design:type",Boolean)],S.prototype,"_hasSetup",void 0),S=I([(0,o.Mo)("attendance-absent-leave-assignment-edit"),A("design:paramtypes",[])],S)}},e=>(e.O(0,[5744,2185,9674,8820,1828,4351,1109,6236,6069,7719,2482,2921,6399,3712],(()=>(6182,e(e.s=6182)))),e.O())])));
//# sourceMappingURL=edit.js.map