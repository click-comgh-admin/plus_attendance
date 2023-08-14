/*! For license information please see view.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1703],{6173:()=>{(()=>{var e,t,n;const o=Symbol(),i=Symbol(),s=Symbol(),r=Symbol(),l=Symbol(),a=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),m=Symbol(),h=Symbol(),p=Symbol(),f=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[s]);const e=this;e[o]=null,e[s]=null,e[i]=null}get top(){const e=this[o];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[a](e),this[o].push(e))}remove(e){const t=this[o].indexOf(e);return-1!==t&&(this[o].splice(t,1),t===this[o].length&&this[a](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[o].indexOf(e)}[(e=o,t=s,n=i,a)](e){const t=this[i],n=this[s];if(!e)return this[u](n),t.clear(),void(this[s]=[]);const o=this[m](e);if(o[o.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=o;const r=this[h](e);if(!n.length)return void this[d](o,r,t);let l=n.length-1,a=o.length-1;for(;l>0&&a>0&&n[l]===o[a];)l--,a--;n[l]!==o[a]&&this[c](n[l],o[a]),l>0&&this[u](n.slice(0,l)),a>0&&this[d](o.slice(0,a),r,null)}[c](e,t){const n=e[r];this[p](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[l]=e[l],t[r]=n,e[l]=void 0,e[r]=void 0}[u](e){for(const t of e){t[l].disconnect(),t[l]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,n){for(const o of e){const e=o.parentNode,i=e.children,s=new Set;for(let e=0;e<i.length;e++){const r=i[e];r===o||!this[p](r)||t&&t.has(r)||(n&&r.inert?n.add(r):(r.inert=!0,s.add(r)))}o[r]=s;const a=new MutationObserver(this[f].bind(this));o[l]=a;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),a.observe(c,{childList:!0})}}[f](e){const t=this[s],n=this[i];for(const o of e){const e=o.target.host||o.target,i=e===document.body?t.length:t.indexOf(e),s=t[i-1],l=s[r];for(let e=0;e<o.removedNodes.length;e++){const t=o.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();l.has(t)&&(t.inert=!1,l.delete(t))}for(let e=0;e<o.addedNodes.length;e++){const t=o.addedNodes[e];this[p](t)&&(n&&t.inert?n.add(t):(t.inert=!0,l.add(t)))}}}[p](e){return!1===/^(style|template|script)$/.test(e.localName)}[m](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[h](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let o,i,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(o=0;o<r.length;o++)for(s=r[o].assignedNodes({flatten:!0}),i=0;i<s.length;i++)s[i].nodeType===Node.ELEMENT_NODE&&n.add(s[i]);return n}}document.$blockingElements=new b})()},4173:(e,t,n)=>{"use strict";n.d(t,{_:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},6951:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},2892:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var o=n(771),i=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,r.Ie)(),l=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,a=yield(0,i.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function i(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}s((c=c.apply(n,l||[])).next())}));var n,l,a,c}},9605:(e,t,n)=>{"use strict";n.d(t,{U:()=>l});var o=n(771),i=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,r.Ie)(),l=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,a=yield(0,i.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function i(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}s((c=c.apply(n,l||[])).next())}));var n,l,a,c}},3849:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentView:()=>R});var o=n(4173),i=n(5862),s=n(8393),r=n(7052),l=n(5248),a=(n(1239),n(9261),n(3313),n(6883),n(1163),n(9132),n(6811),n(771)),c=n(3600),d=n(7725),u=n(4672),m=n(2368),h=n(6224),p=(n(2715),n(9339)),f=n(6951),b=n(2892),g=n(9605),v=(n(3683),n(4657),n(9665)),w=n(8092),y=n(1302),_=n(7108),x=n(6455),$=n.n(x),S=n(7270),A=n(596),k=n(8967),C=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))},B=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};function I(e,t){return B(this,void 0,void 0,(function*(){const n=(0,c.Ie)(),o=Array(e.length).fill(t);let i="Unassign";1===t?i="Approve":2===t&&(i="Cancel");const s=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/bulk-approvals",r={assignmentIds:e,states:o};return $().fire({title:`${i} Assignment(s)?`,icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>B(this,void 0,void 0,(function*(){return yield(0,S.d)(s,{method:"POST",body:JSON.stringify(r),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{try{const t=new A.H("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,k.T)(e);$().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new A.H("post",n,!0);return o.postForm,o}})).catch((e=>{$().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!$().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}$().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}var N,E,L,T=n(8276),D=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},F=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function l(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}a((o=o.apply(e,t||[])).next())}))};let P={},j={},R=class extends i.oi{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._memberCategories=[],this._activeBranchId=null,this.selectedBranch=1,this._memberType=1,this._branches=[],this._groups=[],this._subgroups=[],this._userLoginInfo=null,this.selectedGroup=0,this.datatablePathUrl="attendance/absent-leave/assignment/members",this.downloadingFilePdf=!1,this.downloadingFileExcel=!1,this.filterBoxStarted=!1,this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return O(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,v.f)().then((()=>this._hasSetup=!0));const t=(0,d.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,c.Ie)()],this.filterBox=new m.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGroups(),yield this.getSubGroups(),yield this.getBranches()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,w.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,y.OR)(_.W.absent_leave_assignment),!(0,y.H)({pageId:_.W.absent_leave_assignment,viewType:"View"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
        <span class="text-yellow-500">
          <span class="text-green-500">
            <span class="text-red-500"></span>
          </span>
        </span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}<br />
        </div>
        <div class="block my-1">
          ${this.downloadBtns}
          ${this.table}
        </div>
      </div>
    `}renderColOne(e,t,n){const o=p.e.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(n)),i=(0,r.h)(String(o.memberID),!0),s=o.id;return 1===o.memberInfo.accountType?`\n        <div class="flex items-center whitespace-normal mb-0">\n          <input id="assignment_info" name="assignment_info" type="checkbox" value="${s}"\n            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />\n          <div class="flex flex-col whitespace-normal justify-between content-between">\n            <div class="flex m-1 justify-evenly">\n              <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""\n                click-to-open="${this.memberProfileBaseUrl}${i}" type="member"\n                url="${o.memberInfo.profilePicture}" size="32"></user-profile-photo>\n            </div>\n            <div class="block m-1">\n              <span class="shadow p-1 block bg-white rounded text-dark">\n                <b>Name</b>: ${o.memberInfo.firstname} ${o.memberInfo.middlename} ${o.memberInfo.surname}\n              </span>\n            </div>\n          </div>\n        </div>`:`\n        <div class="flex items-center whitespace-normal mb-0">\n          <input id="assignment_info" name="assignment_info" type="checkbox" value="${s}"\n            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />\n          <div class="flex flex-col whitespace-normal justify-between content-between">\n            <div class="flex m-1 justify-evenly">\n              <user-profile-photo class="w-32 h-32 mr-1" rounded type="member"\n                url="${o.memberInfo.logo}" size="32"></user-profile-photo>\n            </div>\n            <div class="block m-1">\n              <span class="shadow p-1 block bg-white rounded text-dark">\n                <b>Name</b>: ${o.memberInfo.organizationName}\n              </span>\n            </div>\n          </div>\n      </div>`}renderColThree(e,t,n){const i=p.e.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(n)),s=i.id;let r="";return r=0===n.state.id?"text-yellow-500":1===n.state.id?"text-green-500":"text-red-500",`<div class="flex flex-col whitespace-normal justify-between content-between">\n      <div class="block m-1 shadow p-1 bg-white rounded text-dark">\n        <h6 class="whitespace-nowrap text-base font-bold mr-1">Leave Type</h6>\n        <p class="text-sm ml-1">On ${i.statusID.status} for ${this.get_days(i.totalDays)}</p>\n      </div>\n      <div class="block m-1 shadow p-1 bg-white rounded ${r}">\n        <h6 class="whitespace-nowrap text-base font-bold mr-1">State</h6>\n        <p class="text-sm ml-1">${i.state.name}</p>\n      </div>\n      <div class="block m-1 shadow p-1 bg-white rounded text-dark">\n        <h6 class="whitespace-nowrap text-base font-bold mr-1">Period:</h6>\n        <p class="text-sm ml-1">From: ${(0,o._)(i.fromDate)} To: ${(0,o._)(i.toDate)}</p>\n      </div>\n      <div class="whitespace-nowrap my-1">\n        ${this.view_assignment_details(i)}\n        <mwc-button class="w-full button info" outlined open-dialog-btn="assignment-details-${s}">\n          <mwc-icon class="mr-1">info</mwc-icon> Details\n        </mwc-button>\n      </div>\n      ${null===i.reason?"":`<div class="whitespace-nowrap my-1">\n        ${this.view_assignment_reason(i)}\n        <mwc-button class="w-full button warning" outlined open-dialog-btn="assignment-reason-${s}">\n          <mwc-icon class="mr-1">note</mwc-icon> Reason\n        </mwc-button>\n      </div>`}\n    </div>`}renderColTwo(e,t,n){const o=p.e.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(n)).id,i=(0,r.h)(String(o),!0),s=this._pageButtonAccess?`<mwc-button class="w-full button danger" outlined delete-this-item="${o}" onclick="${e=>console.log({e})}">\n      <mwc-icon class="mr-1">delete_forever</mwc-icon> Delete\n    </mwc-button>`:"",l=`<mwc-button class="w-full button success my-1" outlined approve-this-item="${o}" onclick="${e=>console.log({e})}">\n      <mwc-icon class="mr-1">check_circle_outline</mwc-icon> Approve\n    </mwc-button>`,c=`<mwc-button class="w-full button warning my-1" outlined cancel-this-item="${o}" onclick="${e=>console.log({e})}">\n      <mwc-icon class="mr-1">cancel</mwc-icon> Cancel\n    </mwc-button>`;let d="";return d=0===n.state.id?`${l} ${c}`:1===n.state.id?`${c}`:`${l}`,`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        ${d}\n        ${s}\n        <link-button isblockcontent="false" aClass="" raised bClass="w-full button warning mr-2 my-1" href="${a.t.URLS.PDB_CLIENT}absent-leave/edit-al-assignment?view-assignment=${i}"\n          label="Update">\n        </link-button>\n      </div>\n    `}get urlQueryString(){const e=(0,u.O1)(),t="branchId",n="groupId",o="subgroupId",i="search_field",s="reason",r="fromDate",l="toDate";let a={};for(const c in e){let d=String(e[c]);c!==t&&c!==n&&c!==o&&c!==i&&c!==s&&c!==r&&c!==l&&"state"!==c||(a[c]=d)}if(!(t in a)){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),a[t]=e}n in a?(a[n].length<1||0===a[n])&&delete a[n]:this._groups.length>0&&(a[n]=this._groups[0].id),o in a?(a[o].length<1||0===a[o])&&delete a[o]:this._subgroups.length>0&&(a[o]=this._subgroups[0].id),i in a&&(a[i].length<1||""===a[i])&&delete a[i],s in a&&(a[s].length<1||""===a[s])&&delete a[s],r in a&&l in a&&(void 0!==a[r]&&""!==a[r]||(delete a[r],delete a[l]),void 0!==a[l]&&""!==a[l]||(delete a[r],delete a[l]));let c=(0,u.W3)(a);return 0===c.length?c:"&"+c}get filterForm(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=i.dy``;const n=(0,u.O1)(),o="branchId",s="groupId",r="subgroupId",l="search_field",a="reason",c="fromDate",d="toDate",m="state";let h=e,p=null,f=null,b=null,g=null,v=null,w=null,y=null;for(const e in n){let t=String(n[e]);t=""===t?null:t,e===o&&(h=Number(t)),e===s&&(p=Number(t)),e===r&&(f=Number(t)),e===m&&(y=Number(t)),e===l&&(b=String(t),"null"===b&&(b="")),e===a&&(g=String(t),"null"===g&&(g="")),e===c&&null!==t&&(v=new Date(t)),e===d&&null!==t&&(w=new Date(t))}const _=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${o}" id="${o}"
            outlined required @change="${this.branchChange}">
            ${1===e?i.dy`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((e=>h===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
            `:i.dy`
              ${this._branches.map((t=>{if(t.id===e)return i.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
            `}
          </mwc-select>
        </div>
      </div>`,x=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <mwc-select class="w-full" setSelectedGroupId label="Select Group"
            name="${s}" id="${s}"
            outlined required @change="${this.groupChange}" value="${p}">
            <mwc-list-item value="">Select Group</mwc-list-item>
            ${this._groups.map((e=>p===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.group}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,$=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <mwc-select class="w-full" label="Select Sub-Group"
            name="${r}" id="${r}"
            outlined required value="${f}">
            <mwc-list-item value="">Select Sub-Group</mwc-list-item>
            ${this._subgroups.map((e=>f===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.subgroup}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.subgroup}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,S=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select State</h4>
          <mwc-select class="w-full" label="Select State"
            name="${m}" id="${m}"
            outlined required value="${y}">
            <mwc-list-item value="null">Select State</mwc-list-item>
            ${[{id:0,name:"Unpproved"},{id:1,name:"Approved"},{id:2,name:"Canceled"}].map((e=>y===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,A=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search <span class="text-yellow-400 uppercase">[name/ ref-id/ id/ phone/ email]</span></h4>
          <mwc-textfield name="${l}" id="${l}" label="Enter Search Term"
            outlined required value="${null===b?"":b}">
          </mwc-textfield>
        </div>
      </div>`,k=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search <span class="text-yellow-400 uppercase">[Reason]</span></h4>
          <mwc-textfield name="${a}" id="${a}" label="Enter Search Reason"
            outlined required value="${null===g?"":g}">
          </mwc-textfield>
        </div>
      </div>`,C=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="row">
          <div class="col-md-6">
            <div class="form-input-container !block">
              <h4 class="font-semibold my-2">From <span class="text-yellow-500 uppercase">Pick Date</span></h4>
              <mwc-textfield type="date" name="${c}" id="${c}"
                value="${this.getDate(v)}" outlined required></mwc-textfield>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-input-container !block">
              <h4 class="font-semibold my-2">To <span class="text-yellow-500 uppercase">Pick Date</span></h4>
              <mwc-textfield type="date" name="${d}" id="${d}"
                value="${this.getDate(w)}" outlined required></mwc-textfield>
            </div>
          </div>
        </div>
      </div>`;return t=i.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${_} ${x} ${$} ${A} ${k} ${S} ${C}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,t}branchChange(e){return O(this,void 0,void 0,(function*(){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);this.selectedBranch=t,yield this.getGroups("?branchId="+t,t)}))}groupChange(e){return O(this,void 0,void 0,(function*(){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);yield this.getSubGroups("?groupId="+t+"&branchId="+this.selectedBranch,t)}))}get table_header(){return i.dy`
      <div class="flex flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="assignment_info_all" name="assignment_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_assignment}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="success" raised assignment_info_all="approve" @click="${this.approveMultipleMemberAction}">
            Approve All Selected</mwc-button>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="danger" raised assignment_info_all="cancel"
            @click="${this.cancelMultipleMemberAction}">Cancel All Selected</mwc-button>
        </div>
      </div>
    `}get __tableHeaders(){return[{title:"Member"},{title:"Info"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Info"},{title:"Action"}]}get table(){let e=a.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,c.Ie)();return n.Authorization="Token "+o.token,i.dy`
      ${this.table_header}
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new m.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0,this.dialog(),this.deleteMemberFx()))}))}get downloadBtns(){return i.dy`
      <div class="flex mb-4">
        <div class="flex flex-col justify-center items-center mb-4">
          <mwc-button icon="download" class="danger mr-2" 
            label="Download Pdf File" raised @click="${this.downloadAssignmentPdf}">
          </mwc-button> 
          ${this.downloadingFilePdf?i.dy`<mwc-circular-progress indeterminate></mwc-circular-progress>`:i.Ld}
        </div>
        <div class="flex flex-col justify-center items-center mb-4">
          <mwc-button icon="download" class="success mr-2" 
            label="Download Excel File" raised @click="${this.downloadAssignmentExcel}">
          </mwc-button> 
          ${this.downloadingFileExcel?i.dy`<mwc-circular-progress indeterminate></mwc-circular-progress>`:i.Ld}
        </div>
      </div>
    `}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderColOne(e,n,o),orderable:!0},{data:"memberId",render:(e,n,o)=>t.renderColThree(e,n,o),orderable:!0},{data:"statusId",render:(e,n,o)=>t.renderColTwo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return O(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberFx(),t.approveMemberFx(),t.cancelMemberFx(),t.dialog()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells"],select:!0}}deleteMemberFx(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteItemFromList(e)}))}))}approveMemberFx(){document.querySelectorAll("[approve-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.approveItemFromList(e)}))}))}cancelMemberFx(){document.querySelectorAll("[cancel-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.cancelItemFromList(e)}))}))}view_assignment_details(e){var t,n;let i=null===(t=e.memberAdditionalInfo)||void 0===t?void 0:t.phone,s=null===(n=e.memberAdditionalInfo)||void 0===n?void 0:n.whatsapp;return`\n      <mwc-dialog open-this-dialog="assignment-details-${e.id}" heading="Assignment Details">\n        <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n          <div class="flex flex-col m-1 justify-evenly">\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Leave Type</h6>\n              <p class="text-sm ml-1">On ${e.statusID.status} for ${this.get_days(e.totalDays)}</p>\n              <hr/ >\n            </div>\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Period:</h6>\n              <p class="text-sm ml-1">From: ${(0,o._)(e.fromDate)} To: ${(0,o._)(e.toDate)}</p>\n              <hr/ >\n            </div>\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Days Left:</h6>\n              <p class="text-sm ml-1">${this.get_days(e.totalDaysLeft)}</p>\n              <hr/ >\n            </div>\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Branch:</h6>\n              <p class="text-sm ml-1">${this.get_branch(e.statusID.branchID)}</p>\n              <hr/ >\n            </div>\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Group:</h6>\n              <p class="text-sm ml-1">${this.get_group}</p>\n              <hr/ >\n            </div>\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Contact:</h6>\n              <p class="text-sm ml-1">\n                <a class="text-yellow-600" href="tel://${i}">Call</a>/\n                <a class="text-green-600" href="https://api.whatsapp.com/send?phone=+${s}&amp;text=">Whatsapp</a>\n              </p>\n              <hr/ >\n            </div>\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Last Update:</h6>\n              <p class="text-sm ml-1">\n                ${null===e.updatedByInfo?"-":`${e.updatedByInfo.firstname} ${e.updatedByInfo.surname}`}</p>\n              <p class="text-sm ml-1">By: ${(0,f.F)(e.updateDate)}</p>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          dialogAction="close">\n          Cancel\n        </mwc-button>\n      </mwc-dialog>\n    `}view_assignment_reason(e){return`\n      <mwc-dialog open-this-dialog="assignment-reason-${e.id}" heading="Assignment Reason">\n        <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n          <div class="flex flex-col m-1 justify-evenly">\n            <div class="flex flex-col justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Reason</h6>\n              <p class="text-sm ml-1 whitespace-pre-line">${e.reason}</p>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          dialogAction="close">\n          Cancel\n        </mwc-button>\n      </mwc-dialog>\n    `}get_branch(e){let t="";return this._branches.forEach((n=>{n.id===e&&(t=n.name)})),t}get get_group(){let e="";for(const t in P)P[t].forEach((t=>{t.id===this.selectedGroup&&(e=t.group)}));return e}getDate(e){return console.log({date_date_date:e}),null===e?"":e.toLocaleString("default",{year:"numeric"})+"-"+e.toLocaleString("default",{month:"2-digit"})+"-"+e.toLocaleString("default",{day:"2-digit"})}get_days(e){return null===e?"0 days":1===e?"1 day":`${e} days`}check_all_assignment(e){return O(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="assignment_info_all"][name="assignment_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="assignment_info"][name="assignment_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="assignment_info"][name="assignment_info"]').forEach((e=>{e.checked=!1}))}))}))}deleteItemFromList(e){return O(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("delete-this-item"),n=Number.isNaN(t)?0:Number(t);yield function(e){return C(this,void 0,void 0,(function*(){const t=(0,c.Ie)(),n=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/"+e,o={};return $().fire({title:"Remove Assignment?",text:"You may have members assigned to this assignment. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>C(this,void 0,void 0,(function*(){return yield(0,S.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new A.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,k.T)(e);$().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new A.H("delete",n,!0);return o.postForm,o}})).catch((e=>{$().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!$().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}$().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(n)}))}approveMultipleMemberAction(e){return O(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="assignment_info"][name="assignment_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}})),yield I(t,1)}))}cancelMultipleMemberAction(e){return O(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="assignment_info"][name="assignment_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}})),yield I(t,2)}))}approveItemFromList(e){return O(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("approve-this-item"),n=Number.isNaN(t)?0:Number(t);yield I([n],1)}))}cancelItemFromList(e){return O(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("cancel-this-item"),n=Number.isNaN(t)?0:Number(t);yield I([n],2)}))}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}getBranches(){return O(this,void 0,void 0,(function*(){const e=yield(0,h.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getGroups(e="",t=null){return O(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._groups=[],n in P)return void setTimeout((()=>{this._groups=P[n]}),500);const o=yield(0,b.c)(null,e);let i=[];null===o?i.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===o.response.success&&"length"in o.response.data&&(i=o.response.data);const s=[];s.push(...this._groups,...i),this._groups=s,P[n]=this._groups}))}getSubGroups(e="",t=null){return O(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(console.log({_branchSubGroups:j}),this._subgroups=[],n in j)return void setTimeout((()=>{this._subgroups=j[n]}),500);const o=yield(0,g.U)(null,e);let i=[];null===o?i.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===o.response.success&&"length"in o.response.data&&(i=o.response.data);const s=[];s.push(...this._subgroups,...i),this._subgroups=s,j[n]=this._subgroups}))}downloadAssignmentPdf(){return O(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="?branchId="+e+"&order__by=firstname";t+=this.urlQueryString,this.downloadingFilePdf=!0,setTimeout((()=>{this.downloadingFilePdf=!1}),2e3),yield function(e=""){return t=this,n=void 0,i=function*(){const t=(0,c.Ie)(),n=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/download-pdf"+e,o=yield(0,T.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return o}catch(e){let t=o;return t.error=e,new A.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}a((i=i.apply(t,n||[])).next())}));var t,n,o,i}(t),this.downloadingFilePdf=!1}))}downloadAssignmentExcel(){return O(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="?branchId="+e+"&order__by=firstname";t+=this.urlQueryString,this.downloadingFileExcel=!0,yield function(e=""){return t=this,n=void 0,i=function*(){const t=(0,c.Ie)(),n=a.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/download-excel"+e,o=yield(0,T.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return o}catch(e){let t=o;return t.error=e,new A.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function l(e){try{a(i.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,l)}a((i=i.apply(t,n||[])).next())}));var t,n,o,i}(t),this.downloadingFileExcel=!1}))}createRenderRoot(){return this}};R.styles=[i.iv`
   :host { display: block; }
  `],D([(0,s.IO)('[filter-section-context="btn"]'),F("design:type","function"==typeof(N=void 0!==l.z&&l.z)?N:Object)],R.prototype,"filterSectionContextBtn",void 0),D([(0,s.IO)('[filter-section-context="container"]'),F("design:type","function"==typeof(E="undefined"!=typeof Element&&Element)?E:Object)],R.prototype,"filterSectionContextContainer",void 0),D([(0,s.IO)('[make-general-posts="submit_filter_form"]'),F("design:type","function"==typeof(L="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?L:Object)],R.prototype,"filterSectionContextForm",void 0),D([(0,s.Cb)({type:String}),F("design:type",String)],R.prototype,"memberProfileBaseUrl",void 0),D([(0,s.Cb)({type:Array}),F("design:type",Array)],R.prototype,"_memberCategories",void 0),D([(0,s.Cb)({type:Array}),F("design:type",Array)],R.prototype,"_activeBranchId",void 0),D([(0,s.Cb)({type:Number}),F("design:type",Number)],R.prototype,"selectedBranch",void 0),D([(0,s.Cb)({type:Number}),F("design:type",Number)],R.prototype,"_memberType",void 0),D([(0,s.Cb)({type:Array}),F("design:type",Array)],R.prototype,"_branches",void 0),D([(0,s.Cb)({type:Array}),F("design:type",Array)],R.prototype,"_groups",void 0),D([(0,s.Cb)({type:Array}),F("design:type",Array)],R.prototype,"_subgroups",void 0),D([(0,s.Cb)({type:Array}),F("design:type",Array)],R.prototype,"_userLoginInfo",void 0),D([(0,s.Cb)({type:Number}),F("design:type",Number)],R.prototype,"selectedGroup",void 0),D([(0,s.Cb)({type:String}),F("design:type",String)],R.prototype,"datatablePathUrl",void 0),D([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],R.prototype,"downloadingFilePdf",void 0),D([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],R.prototype,"downloadingFileExcel",void 0),D([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],R.prototype,"filterBoxStarted",void 0),D([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],R.prototype,"_hasSetup",void 0),D([(0,s.Cb)({type:Boolean}),F("design:type",Boolean)],R.prototype,"_pageButtonAccess",void 0),R=D([(0,s.Mo)("attendance-absent-leave-assignment-view"),F("design:paramtypes",[])],R)},7108:(e,t,n)=>{"use strict";n.d(t,{W:()=>o});const o={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}}},e=>(e.O(0,[5744,2185,9674,9564,4351,1109,6236,6069,2585,9450,2921,6399,3712],(()=>(3849,e(e.s=3849)))),e.O())])));
//# sourceMappingURL=view.js.map