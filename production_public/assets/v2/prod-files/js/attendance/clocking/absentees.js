"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9368],{4429:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingAbsentees:()=>F});var i,l,r,o=n(5862),s=n(8393),c=n(5248),a=(n(9261),n(3313),n(6883),n(3683),n(4657),n(7725)),d=(n(3690),n(7052)),u=n(771),m=n(3600),p=n(4672),b=n(7553),h=n(2869),f=n(2368),y=(n(5517),n(72)),g=n(4115),v=n(5069),_=n(2892),w=(n(3629),n(4843)),$=n(5458),k=n(3437),x=n(660),S=n(8786),C=n(9605),I=(n(7933),n(9987),n(5647),n(8276)),A=n(596),B=n(9665),E=n(8092),N=n(1302),T=n(7108),O=function(e,t,n,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(o=(r<3?l(o):r>3?l(t,n,o):l(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},M=function(e,t,n,i){return new(n||(n=Promise))((function(l,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((i=i.apply(e,t||[])).next())}))};let F=class extends o.oi{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.datatablePathUrl="attendance/meeting-event/attendance/absentees",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.__members=null,this._hasSetup=!1,this._pageButtonAccess=!1}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return M(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,B.f)().then((()=>this._hasSetup=!0)),this.getMeetingEventId();const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,E.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.OR)(T.W.absentees),!(0,N.H)({pageId:T.W.absentees,viewType:"Both"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?o.dy`
        <div class="shadow bg-white p-2">
          <pdb-attendance-clocking-meeting-picker
            openContentBaseUrl="/clocking/absentees?meeting-event-id=">
          </pdb-attendance-clocking-meeting-picker>
        </div>
      `:o.dy`
        <div class="shadow bg-white p-2">
          <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
              filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2"/>
            ${this.downloadBtns}
            ${this.table}
          </div>
        </div>
      `}get downloadBtns(){return o.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadAbsenteesExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadAbsenteesPdf}">
        </mwc-button>
      </div>
    `}firstUpdated(){this.filterBox=new f.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]})}getMeetingEventId(){let e=(0,p.Jx)("meeting-event-id"),t=null!==e?(0,d.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,d.h)(String(this.meetingEventId),!0)}get filterForm(){let e=o.dy``;const t=(0,p.O1)(),n="filter_date",i="filter_gender",l="filter_name",r="filter_identity",s="filter_member_category",c="filter_group",a="filter_subgroup",d="filter_from_age",u="filter_to_age";let m=null,b=null,h=null,f=null,y=null,g=null,v=null,_=null,w=null;for(const e in t){let o=String(t[e]);if(o=""===o?null:o,e===n)if(null===o)m="";else{const e=new Date(o).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");m=[e[2],e[0],e[1]].join("-")}e===i&&(b=o),e===l&&(h=o),e===r&&(f=o),e===s&&(y=Number(o)),e===c&&(g=Number(o)),e===a&&(v=Number(o)),e===d&&(_=Number(o)),e===u&&(w=Number(o))}const k=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${l}" id="${l}" label="Search By Name" 
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,x=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${d}" id="${d}" label="Pick From Age" 
              value="${null===_?"":_}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick To Age" 
              value="${null===w?"":w}" class="mx-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,S=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${y}" 
            name="${s}" id="${s}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,C=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${n}" id="${n}"
            value="${m}" outlined required></mwc-textfield>
        </div>
      </div>`,I=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===b?o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(b)===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,A=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${c}" id="${c}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,n=(0,$.C)(this.getGroup(t),o.dy`<span>Loading...</span>`);return null===g?o.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(g)===t?o.dy`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:o.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,B=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${a}" id="${a}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,n=(0,$.C)(this.getSubGroup(t),o.dy`<span>Loading...</span>`);return null===v?o.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(v)===t?o.dy`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:o.dy`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,E=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${r}" id="${r}" label="Search By Member ID"
            value="${null===f?"":f}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=o.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${S} ${k} ${I} ${x} ${E} ${A} ${B} ${C}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" value="${this.meetingEventIdEnc}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=u.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=this.__dataTable(n);let l={};const r=(0,m.Ie)();return l.Authorization="Token "+r.token,o.dy`
      <datatables-new .datatable="${i}" .ajaxHeader="${l}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){return`<clocker-table-parts-first data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' ></clocker-table-parts-first>`}renderClockInInfo(e,t,n){return this._pageButtonAccess?`<clocker-table-parts-second data="${e}" pageButtonAccess type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n        </clocker-table-parts-second>`:`<clocker-table-parts-second data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n        </clocker-table-parts-second>`}renderClockOutInfo(e,t,n){return this._pageButtonAccess?`<clocker-table-parts-third data="${e}" pageButtonAccess type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n        </clocker-table-parts-third>`:`<clocker-table-parts-third data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}' >\n        </clocker-table-parts-third>`}get urlQueryString(){const e=(0,p.O1)(),t="filter_from_age",n="filter_to_age";let i={};for(const l in e){let r=String(e[l]);"filter_date"!==l&&"filter_gender"!==l&&"filter_name"!==l&&"filter_identity"!==l&&"filter_member_category"!==l&&"filter_group"!==l&&"filter_subgroup"!==l&&l!==t&&l!==n||(i[l]=r,l!==t&&l!==n||"0"===r&&delete i[l])}let l=(0,p.W3)(i);return 0===l.length?l:"&"+l}getGenders(){return M(this,void 0,void 0,(function*(){const e=yield(0,b.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.y)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}downloadAbsenteesPdf(){return M(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString,yield function(e=""){return t=this,n=void 0,l=function*(){const t=(0,m.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/download-absentees-pdf"+e,i=yield(0,I.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new A.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{c(l.next(e))}catch(e){r(e)}}function s(e){try{c(l.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,s)}c((l=l.apply(t,n||[])).next())}));var t,n,i,l}(n)}))}downloadAbsenteesExcel(){return M(this,void 0,void 0,(function*(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n="?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString,yield function(e=""){return t=this,n=void 0,l=function*(){const t=(0,m.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/download-absentees-excel"+e,i=yield(0,I.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new A.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{c(l.next(e))}catch(e){r(e)}}function s(e){try{c(l.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,s)}c((l=l.apply(t,n||[])).next())}));var t,n,i,l}(n)}))}getClockingType(){return M(this,void 0,void 0,(function*(){const e=yield(0,g.d)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,v.w)(e))));const n=[];n.push(...this._clockingTypes,...t),this._clockingTypes=n}))}getAttendanceScheduleGroup(){return M(this,void 0,void 0,(function*(){const e=yield(0,w.S)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return M(this,void 0,void 0,(function*(){const t=yield(0,_.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,k.C)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return M(this,void 0,void 0,(function*(){const e=yield(0,S.s)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return M(this,void 0,void 0,(function*(){const t=yield(0,C.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,x.P)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return M(this,void 0,void 0,(function*(){const e=yield(0,y.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.renderMemberInfo(e,n,i),orderable:!0},{data:"inTime",render:(e,n,i)=>t.renderClockInInfo(e,n,i),orderable:!0},{data:"outTime",render:(e,n,i)=>t.renderClockOutInfo(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return M(this,void 0,void 0,(function*(){e.aoData}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};F.styles=[o.iv`
   :host { display: block; }
  `],O([(0,s.IO)('[filter-section-context="btn"]'),G("design:type","function"==typeof(i=void 0!==c.z&&c.z)?i:Object)],F.prototype,"filterSectionContextBtn",void 0),O([(0,s.IO)('[filter-section-context="container"]'),G("design:type","function"==typeof(l="undefined"!=typeof Element&&Element)?l:Object)],F.prototype,"filterSectionContextContainer",void 0),O([(0,s.IO)('[make-general-posts="submit_filter_form"]'),G("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],F.prototype,"filterSectionContextForm",void 0),O([(0,s.Cb)({type:Number}),G("design:type",Number)],F.prototype,"meetingEventId",void 0),O([(0,s.Cb)({type:String}),G("design:type",String)],F.prototype,"meetingEventIdEnc",void 0),O([(0,s.Cb)({type:String}),G("design:type",String)],F.prototype,"datatablePathUrl",void 0),O([(0,s.Cb)({type:Array}),G("design:type",Array)],F.prototype,"_genders",void 0),O([(0,s.Cb)({type:Array}),G("design:type",Array)],F.prototype,"_clockingTypes",void 0),O([(0,s.Cb)({type:Array}),G("design:type",Array)],F.prototype,"_memberCategories",void 0),O([(0,s.Cb)({type:Array}),G("design:type",Array)],F.prototype,"_scheduleGroups",void 0),O([(0,s.Cb)({type:Array}),G("design:type",Array)],F.prototype,"_scheduleSubGroups",void 0),O([(0,s.Cb)({type:Array}),G("design:type",Array)],F.prototype,"_activeBranchId",void 0),O([(0,s.Cb)({type:Number}),G("design:type",Number)],F.prototype,"_memberType",void 0),O([(0,s.Cb)({type:Boolean}),G("design:type",Boolean)],F.prototype,"_hasSetup",void 0),O([(0,s.Cb)({type:Boolean}),G("design:type",Boolean)],F.prototype,"_pageButtonAccess",void 0),F=O([(0,s.Mo)("pdb-attendance-clocking-absentees"),G("design:paramtypes",[])],F)}},e=>(e.O(0,[5744,2185,9674,8820,1828,4351,1109,6236,6069,7719,6553,2585,5593,3934,9450,3283,6581,3712],(()=>(4429,e(e.s=4429)))),e.O())])));
//# sourceMappingURL=absentees.js.map