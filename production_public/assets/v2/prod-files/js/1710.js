"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1710],{8304:(e,t,n)=>{n.d(t,{g:()=>u});var o=n(6455),r=n.n(o),i=n(771),a=n(7270),s=n(596),c=n(8967),d=n(3600),l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};function u(e){return l(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,o={};return r().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>l(this,void 0,void 0,(function*(){return yield(0,a.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new s.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.T)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new s.H("delete",n,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}r().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},3512:(e,t,n)=>{n.d(t,{T:()=>u});var o=n(6455),r=n.n(o),i=n(771),a=n(7270),s=n(596),c=n(8967),d=n(3600),l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};function u(){return l(this,void 0,void 0,(function*(){const e=(0,d.Ie)(),t=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",n=document.querySelector('[make-general-posts="add-schedule-member"]'),o=new FormData(n);return r().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>l(this,void 0,void 0,(function*(){return yield(0,a.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new s.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.T)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2218:(e,t,n)=>{n.d(t,{u:()=>s});var o=n(771),r=n(7270),i=n(596),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,d=function*(){const n=(0,a.Ie)(),s=o.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{i(d.next(e))}catch(e){t(e)}}function r(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,r)}i((d=d.apply(n,s||[])).next())}));var n,s,c,d}},6883:(e,t,n)=>{var o,r=n(5862),i=n(8393),a=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.dy`
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
  `}thead(){return r.dy`
      ${this.dt_head.map((e=>r.dy`<th>${e.title}</th>`))}
    `}tbody(){return r.dy`
      ${this.dt_body.map((e=>r.dy`<tr>${e.map((e=>r.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return r.dy`
    ${this.dt_foot.map((e=>r.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const n=this.ajaxHeader[e];t[e]=n}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[r.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"randomID1",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"randomID2",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],c.prototype,"ID",void 0),a([(0,i.Cb)({type:Object}),s("design:type","function"==typeof(o="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?o:Object)],c.prototype,"datatable",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],c.prototype,"dt_head",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],c.prototype,"dt_foot",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],c.prototype,"dt_body",void 0),a([(0,i.Cb)(),s("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=a([(0,i.Mo)("datatables-new"),s("design:paramtypes",[])],c)},1725:(e,t,n)=>{n(5248),n(5866);var o=n(5862),r=n(771),i=n(3600),a=n(8393),s=n(2218),c=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let u=class extends o.oi{constructor(){super(),this.meetingEventId=0,this.CLIENT_ID=0,this.startSearchPage=0,this.__schedule=null}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){var e;return o.dy`
      <div class="flex justify-end">
        <div class="col-md-6 col-lg-4 px-0 my-2">
          <div class="m-1 border rounded-md">
            <div class="p-2 shadow-sm border rounded-md">
              <h4 class="text-lg font-bold">${`${(null!==(e=this.currentMeetingEventName)&&void 0!==e?e:null==this._schedule)?"...":this._schedule.data.name}`.replace(/\b\w/g,(e=>e.toUpperCase()))}</h4>
            </div>
            <div class="p-2">
              ${this.meetingEventField}
            </div>
            <div class="p-2 shadow-sm border rounded-md">
              <div class="flex justify-end ">
                <mwc-button raised class="button success" @click="${this.changeCurrentSchedule}">
                  Change Meeting/ Event
                </mwc-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}get meetingEventField(){let e={};const t=(0,i.Ie)();return e.Authorization="Token "+t.token,o.dy`
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-12">
            <h4 class="font-semibold my-2">Select Meeting/ Event</h4>
            <select-input class="w-100" id="change_schedule_input_box" name="change_schedule_input_box" label="Select Schedule"
              .ajaxFetchProcessResponse="${this.processClientScheduleSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${r.t.URLS.AKWAABA_API_BASE_URL}attendance/meeting-event/schedule"></select-input>
          </div>
        </div>
      </div>
    `}processClientScheduleSearch(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="change_schedule_input_box"]');let i=[];if(n>0){var a=o;for(let e=0;e<a.length;e++){const t=a[e],n={id:t.id,text:t.name};i.includes(n)||i.push(n)}}return{results:i,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"isRecuring",value:"both"},{param:"branchId",value:String((0,i.Ie)().user.branchId)}]}changeCurrentSchedule(e){e.preventDefault(),this.querySelectorAll('[id="change_schedule_input_box"][name="change_schedule_input_box"]').forEach((e=>{if(e.value.length>0){const t=window.location.href,n=new URL(t);n.searchParams.set("meeting-event-id",e.value),window.location.href=n}}))}getAttendanceSchedule(){return l(this,void 0,void 0,(function*(){const e=yield(0,s.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}createRenderRoot(){return this}};u.styles=[o.iv`
   :host { display: block; }
  `],c([(0,a.Cb)({type:String}),d("design:type",String)],u.prototype,"currentMeetingEventName",void 0),c([(0,a.Cb)({type:Number}),d("design:type",Number)],u.prototype,"meetingEventId",void 0),c([(0,a.Cb)({type:Number}),d("design:type",Number)],u.prototype,"CLIENT_ID",void 0),c([(0,a.Cb)({type:Number}),d("design:type",Number)],u.prototype,"startSearchPage",void 0),u=c([(0,a.Mo)("schedule-title-card"),d("design:paramtypes",[])],u)}}]);
//# sourceMappingURL=1710.js.map