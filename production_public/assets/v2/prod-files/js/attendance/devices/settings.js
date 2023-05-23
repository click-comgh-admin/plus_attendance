"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2529],{2702:(e,t,n)=>{n.r(t),n.d(t,{AttendanceDeviceSettings:()=>j});var o,i,r,s=n(5862),c=n(8393),l=n(5248),a=(n(6811),n(3690),n(1854),n(9132),n(6883),n(5866),n(1163),n(3683),n(4657),n(4672)),d=n(771),u=n(3600),f=n(2368),p=n(6277),m=n(5372),h=n(2813),v=n(6455),b=n.n(v),y=n(7270),g=n(596),w=n(8967),x=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((o=o.apply(e,t||[])).next())}))},S=n(6951),_=n(9665),C=n(8092),B=n(1302),$=n(7108),k=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((o=o.apply(e,t||[])).next())}))};let j=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this._userDeviceSettings=[],this.startSearchPage=0,this.filterBoxStarted=!1,this.memberProfileBaseUrl="/member/member-profile?view=",this.datatablePathUrl="attendance/clocking-device/settings",this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,_.f)().then((()=>this._hasSetup=!0)),this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,B.OR)($.W.device_request_approval),!(0,B.H)({pageId:$.W.device_request_approval,viewType:"Both"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}return null===this._userDeviceSettings?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._userDeviceSettings?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Device Settings </span>: undefined error</h4>
          </div>
        </div>
      `:s.dy`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1" filter-section-context="btn"
              @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2" />
            ${this.table}
          </div>
      </div>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0))}))}get filterForm(){let e=s.dy``;const t=(0,a.O1)(),n="memberId";let o=null,i={};const r=(0,u.Ie)();i.Authorization="Token "+r.token;for(const e in t){let i=String(t[e]);i=""===i?null:i,e===n&&(o=i)}const c=s.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${(0,m.x)(Number(o))}
        <select-input class="w-100" id="${n}" name="${n}"
          label="Select Member" .ajaxFetchProcessResponse="${this.processClientUserSearch}"
          startSearchPage="${this.startSearchPage}" .ajaxHeader="${i}"
          .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${d.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=s.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${c}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch(e,t){var n;t.page=t.page||0;const o=e.count,i=e.results,r=document.querySelector('[id="memberId"]');let s=[];if(o>0){var c=i;for(let e=0;e<c.length;e++){const t=c[e],o=h.e.toMembershipUserModel(JSON.stringify(t)),i={id:o.id,text:`${o.firstname} ${null!==(n=o.middlename)&&void 0!==n?n:""} ${o.surname}`};s.includes(i)||s.push(i)}}return{results:s,total:o,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"User"},{title:"Device Info"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"User"},{title:"Device Info"}]}get table(){let e=d.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,u.Ie)();return n.Authorization="Token "+o.token,s.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,i=n.memberInfo;return this.dialog(),`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex items-center whitespace-normal">\n            <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${o}" type="member"\n              url="${i.profilePicture}" size="16"></user-profile-photo>\n            <p class="ml-1">${i.firstname} ${i.middlename} ${i.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderDeviceInfo(e,t,n){const o=(0,S.F)(n.creationDate,{dateStyle:"medium",timeStyle:"short"});return`\n      <div class="justify-center content-center">\n        ${this._pageButtonAccess?`<mwc-icon-button class="ml-1 danger" icon="delete_forever" \n        delete-this-item="${n.id}" >\n      </mwc-icon-button>`:""}\n        <div class="whitespace-nowrap my-1">\n          ${this.view_device_info(n)}\n          <mwc-button class="button info" outlined open-dialog-btn="summary-records-${n.id}">\n            <mwc-icon>devices_other</mwc-icon> Info\n          </mwc-button>\n        </div>\n        <div class="whitespace-nowrap my-1">\n          ${o}\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,a.O1)();let t={};for(const n in e){let o=String(e[n]);"memberId"!==n&&"connectionId"!==n||(t[n]=o)}let n=(0,a.W3)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderDeviceInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return I(this,void 0,void 0,(function*(){e.aoData,t.deleteUserDeviceInfo()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteUserDeviceInfo(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteDeviceInfo(e)}))}))}view_device_info(e){const t=e.memberId,n=e.memberInfo;return`\n      <mwc-dialog open-this-dialog="summary-records-${e.id}" heading="Summary Records">\n        <div class="flex flex-col m-1 justify-evenly whitespace-normal">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"\n              url="${n.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="flex flex-col m-1 justify-evenly">\n            <h3 class="whitespace-nowrap font-bold text-lg">${n.firstname} ${n.middlename} ${n.surname}</h3>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">System</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${(0,p.LK)(e.systemDevice)}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device ID:</h6>\n              <p class="whitespace-nowrap text-sm ml-1" style="text-overflow: ellipsis;overflow: hidden;width: 115px;">${e.deviceId}</p>\n            </div>\n            <div class="flex justify-between content-between">\n              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device Type:</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${e.deviceType}</p>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          dialogAction="close">\n          Cancel\n        </mwc-button>\n      </mwc-dialog>\n    `}deleteDeviceInfo(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return x(this,void 0,void 0,(function*(){const t=(0,u.Ie)(),n=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/clocking-device/settings/"+e,o={};return b().fire({title:"Remove User Device?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>x(this,void 0,void 0,(function*(){return yield(0,y.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new g.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,w.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new g.H("delete",n,!0);return o.postForm,o}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}b().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}createRenderRoot(){return this}};j.styles=[s.iv`
   :host { display: block; }
  `],k([(0,c.Cb)({type:Number}),A("design:type",Number)],j.prototype,"CLIENT_ID",void 0),k([(0,c.IO)('[filter-section-context="btn"]'),A("design:type","function"==typeof(o=void 0!==l.z&&l.z)?o:Object)],j.prototype,"filterSectionContextBtn",void 0),k([(0,c.IO)('[filter-section-context="container"]'),A("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],j.prototype,"filterSectionContextContainer",void 0),k([(0,c.IO)('[make-general-posts="submit_filter_form"]'),A("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],j.prototype,"filterSectionContextForm",void 0),k([(0,c.Cb)({type:Array}),A("design:type",Array)],j.prototype,"_userDeviceSettings",void 0),k([(0,c.Cb)({type:Number}),A("design:type",Number)],j.prototype,"startSearchPage",void 0),k([(0,c.Cb)({type:Boolean}),A("design:type",Boolean)],j.prototype,"filterBoxStarted",void 0),k([(0,c.Cb)({type:String}),A("design:type",String)],j.prototype,"memberProfileBaseUrl",void 0),k([(0,c.Cb)({type:String}),A("design:type",String)],j.prototype,"datatablePathUrl",void 0),k([(0,c.Cb)({type:Boolean}),A("design:type",Boolean)],j.prototype,"_hasSetup",void 0),k([(0,c.Cb)({type:Boolean}),A("design:type",Boolean)],j.prototype,"_pageButtonAccess",void 0),j=k([(0,c.Mo)("attendance-device-settings"),A("design:paramtypes",[])],j)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,8644,1109,6236,6069,3901,751,9701,3712],(()=>(2702,e(e.s=2702)))),e.O())])));
//# sourceMappingURL=settings.js.map