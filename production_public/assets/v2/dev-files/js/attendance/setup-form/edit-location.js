"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-location"],{45501:(e,t,n)=>{n.r(t)},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>i,urlQueryParamsGet:()=>o,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>a});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},42091:(e,t,n)=>{n.r(t),n.d(t,{MeetingEventScheduleLocationFormInputModel:()=>i});class i{toJson(){return{meetingEventId:this.meetingEventId,locationName:this.locationName,latitude:this.latitude,longitude:this.longitude,radius:this.radius}}static fromJson(e){const t=new i;return t.meetingEventId=e.meetingEventId,t.locationName=e.locationName,t.latitude=e.latitude,t.longitude=e.longitude,t.radius=e.radius,t}toString(){return`MeetingEventScheduleLocationFormInputModel(meetingEventId=${this.meetingEventId}, locationName=${this.locationName}, latitude=${this.latitude}, longitude=${this.longitude}, radius=${this.radius})`}}},7427:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleLocation:()=>u});var i=n(86455),o=n.n(i),s=n(48485),a=n(87270),l=n(14492),r=n(8967),c=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,i={};return o().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,r.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new l.NetWorkCallResponses("delete",n,!0);return i.postForm,i}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},606:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleLocation:()=>l});var i=n(48485),o=n(87270),s=n(14492),a=n(33600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,r=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,l||[])).next())}));var n,l,r,c}},84452:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleLocationBulk:()=>u});var i=n(86455),o=n.n(i),s=n(48485),a=n(87270),l=n(14492),r=n(8967),c=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/bulk",i=document.querySelector('[make-general-posts="add-schedule-location"]'),u=JSON.stringify(e);return o().fire({title:"Add Meeting Location(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"POST",body:u,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,i),n=t.multipleResponse;let s=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{s.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{s.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),s.length>0){const e=(0,r.https_swal_error_format)(s);return o().showValidationMessage(`${e}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},9313:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceUpdateScheduleLocation:()=>u});var i=n(86455),o=n.n(i),s=n(48485),a=n(87270),l=n(14492),r=n(8967),c=n(33600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,i=document.querySelector('[make-general-posts="update-schedule-location"]'),u=new FormData(i);return o().fire({title:"Update Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"PUT",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("put",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,r.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},52218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>l});var i=n(48485),o=n(87270),s=n(14492),a=n(33600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,r=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,o)}s((c=c.apply(n,l||[])).next())}));var n,l,r,c}},71854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>r});var i=n(85862),o=n(59662),s=(n(23283),n(16413),n(40789),n(33830),n(76948),n(63313),function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};let r=class extends i.LitElement{constructor(){super(),this.index=0,this._widget=i.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return i.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?i.nothing:i.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.property)({type:Number}),a("design:type",Number)],r.prototype,"index",void 0),s([(0,o.property)({type:Boolean}),a("design:type",Boolean)],r.prototype,"no_delete",void 0),s([(0,o.property)({type:Boolean}),a("design:type",Boolean)],r.prototype,"single",void 0),s([(0,o.property)({type:String}),a("design:type",String)],r.prototype,"_single",void 0),r=s([(0,o.customElement)("multiple-widgets"),a("design:paramtypes",[])],r)},43690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var i=n(85862),o=n(59662),s=(n(29975),n(16788),function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[i.css`
      :host {
        display: block;
      }
    `],s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:Boolean}),a("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:Boolean}),a("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,o.customElement)("switch-input")],l)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var i=n(85862),o=n(59662),s=(n(92715),n(48485)),a=n(44672),l=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agendas?meeting-event-id=${this.meetingEventId}"
        label="Agenda(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${s.CONSTANTS.URLS.PDB_CLIENT}settings/categories?meeting-event-id=${this.meetingEventId}"
        label="Edit Categories"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],l([(0,o.property)({type:Number}),r("design:type",Number)],c.prototype,"meetingEventId",void 0),c=l([(0,o.customElement)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],c)},25448:(e,t,n)=>{n.r(t),n.d(t,{MeetingLocationEditComponent:()=>c,MeetingLocationFormInputValues:()=>r});var i=n(9313),o=n(85862),s=n(59662),a=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class r{static setValues(e){const t=new r;return t.locationId=e.locationId,t.locationNameValue=e.locationNameValue,t.radiusValue=e.radiusValue,t.latitudeValue=e.latitudeValue,t.longitudeValue=e.longitudeValue,t}getValues(){const e=new r;return e.locationId=this.locationId,e.locationNameValue=this.locationNameValue,e.radiusValue=this.radiusValue,e.latitudeValue=this.latitudeValue,e.longitudeValue=this.longitudeValue,e}toString(){return`MeetingLocationFormInputValues(locationId:${this.locationId},locationNameValue:${this.locationNameValue}, radiusValue:${this.radiusValue}, latitudeValue:${this.latitudeValue}, longitudeValue:${this.longitudeValue})`}}let c=class extends o.LitElement{constructor(){super(),this.inputId=Math.random().toString(36).substring(2,22),this.inputValues=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.isEmpty(this.inputValues)?o.nothing:o.html`
      <div class="p-1">
        <div class="block">
          <div class="flex justify-end">
              <mwc-icon-button class="ml-1 danger" icon="close" @click="${this.empty}"></mwc-icon-button>
          </div>
        </div>
        ${this.getLocationForm}
      </div>
    `}isEmpty(e){return null==e||e.length<1}empty(e){this.inputValues=null}get getLocationForm(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Update Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="update-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  <div class="container my-4" id="form_input--${this.inputId}">
                    <div class="row justify-center">
                      <div class="col-md-6 col-lg-4">
                        <h4 class="font-semibold my-2">Enter Location Name</h4>
                        <mwc-textfield name="locationName" type="text" class="w-full"
                          id="locationName--${this.inputId}" label="Enter Location Name" outlined required
                          value="${this.inputValues.locationNameValue}">
                        </mwc-textfield>
                      </div>
                      <div class="col-md-6 col-lg-8">
                        <div class="container px-0">
                          <div class="row justify-center">
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Radius  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius--${this.inputId}"
                                label="Enter Radius" outlined required value="${this.inputValues.radiusValue}">
                              </mwc-textfield>
                            </div>
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Latitude  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="latitude" type="number" step="0.01" class="w-full"
                                id="latitude--${this.inputId}" label="Enter Latitude" outlined required
                                value="${this.inputValues.latitudeValue}">
                              </mwc-textfield>
                            </div>
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Longitude  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="longitude" type="number" step="0.01" class="w-full"
                                id="longitude--${this.inputId}" label="Enter Longitude" outlined required
                                value="${this.inputValues.longitudeValue}">
                              </mwc-textfield>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update Location" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return t=this,n=void 0,s=function*(){yield(0,i.PUT_AttendanceUpdateScheduleLocation)(this.inputValues.locationId)},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{r(s.next(e))}catch(e){i(e)}}function l(e){try{r(s.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,l)}r((s=s.apply(t,n||[])).next())}));var t,n,o,s}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],a([(0,s.property)({type:String}),l("design:type",Object)],c.prototype,"inputId",void 0),a([(0,s.property)({attribute:!1}),l("design:type",r)],c.prototype,"inputValues",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,s.customElement)("meeting-location-edit-component"),l("design:paramtypes",[])],c)},62166:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLocation:()=>p}),n(69579),n(43683),n(74657);var i=n(14108),o=n(85862),s=n(59662),a=(n(95744),n(8693),n(27712)),l=n(91354),r=n(41302),c=n(17108),d=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends o.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,a.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,i.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{r(s.next(e))}catch(e){i(e)}}function l(e){try{r(s.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,l)}r((s=s.apply(t,n||[])).next())}));var t,n,o,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return o.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,r.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,r.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return o.html`<no-page-entry-component></no-page-entry-component>`}return o.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
      </div>
    `}firstUplocationd(){}createRenderRoot(){return this}};d([(0,s.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=d([(0,s.customElement)("attendance-setup-form-edit-location"),u("design:paramtypes",[])],p)},76833:(e,t,n)=>{n.r(t),n.d(t,{MeetingLocationInputsComponent:()=>l});var i=n(85862),o=n(59662),s=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.LitElement{constructor(){super(),this.inputId=Math.random().toString(36).substring(2,22)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Enter Location Name</h4>
            <mwc-textfield name="locationName" type="text" class="w-full"
              id="locationName--${this.inputId}" label="Enter Location Name" outlined required
              @change="${this.handleLocationNameChange}">
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Enter Radius <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                  <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius--${this.inputId}"
                    label="Enter Radius" outlined required @change="${this.handleRadiusChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Enter Latitude <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                  <mwc-textfield name="latitude" type="number" step="0.01" class="w-full"
                    id="latitude--${this.inputId}" label="Enter Latitude" outlined required @change="${this.handleLatitudeChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Enter Longitude <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                  <mwc-textfield name="longitude" type="number" step="0.01" class="w-full"
                    id="longitude--${this.inputId}" label="Enter Longitude" outlined required @change="${this.handleLongitudeChange}">
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}handleLocationNameChange(e){const t=e.target.value;this.locationNameValue=t}handleRadiusChange(e){const t=e.target.value;this.radiusValue=t}handleLatitudeChange(e){this.latitudeValue=e.target.value}handleLongitudeChange(e){this.longitudeValue=e.target.value}firstUpdated(){}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],s([(0,o.property)({type:String}),a("design:type",Object)],l.prototype,"inputId",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"locationNameValue",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"radiusValue",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"latitudeValue",void 0),s([(0,o.property)({type:String}),a("design:type",String)],l.prototype,"longitudeValue",void 0),l=s([(0,o.customElement)("meeting-location-inputs-component"),a("design:paramtypes",[])],l)},99139:(e,t,n)=>{n.r(t),n.d(t,{MeetingLocationMultipleInputsComponent:()=>r});var i=n(85862),o=n(59662),s=(n(76833),n(23283),n(51511),n(42091)),a=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends i.LitElement{constructor(){super(),this.currentObjectCount=0,this.multipleDayObjects=[],this.removedInputIndex=[],this.addedInputIndex=[],this.firstInputAddedCalled=!1,this.loading=!0,this._inputs=[]}set inputs(e){this._inputs=e,this.requestUpdate()}get inputs(){return this._inputs}connectedCallback(){super.connectedCallback(),setInterval((()=>{0==this.firstInputAddedCalled&&(this.addInput(new Event("click")),this.loading=!1,this.firstInputAddedCalled=!0)}),1)}disconnectedCallback(){}addInput(e){this.currentObjectCount=this.currentObjectCount+1;let t=i.html`<meeting-location-inputs-component 
      meeting-location-inputs-component--object="${this.currentObjectCount}">
    </meeting-location-inputs-component>`,n=this.inputs;n.push(t);let o=this.addedInputIndex;o.push(this.currentObjectCount-1),setTimeout((()=>{this.inputs=n,this.addedInputIndex=o,this.multipleInputsHaveChanged(new Event("change"))}),10)}removeInput(e){if(this.currentInputList.length-1>0){let t=this.inputs;this.removedInputIndex.push(e),delete t[e],setTimeout((()=>{this.inputs=t,this.multipleInputsHaveChanged(new Event("change"))}),10)}}get currentInputList(){let e=[];return this.inputs.join("-").split("-").forEach((t=>0==t.length?null:e.push(t))),e}render(){return this.loading?i.html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>`:i.html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map(((e,t)=>i.html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Location Info ${t+1}</h3>
                <!-- ${""} -->
                ${e}
                ${this.currentInputList.length-1>0?i.html`<div class="flex justify-end">
                  <mwc-button @click=${()=>this.removeInput(t)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>`:i.nothing}
              </div>
            `))}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Location</mwc-button>
        </div>
      </div>
    `}multipleInputsHaveChanged(e){this.addedInputIndex,Array.from(document.querySelectorAll("[meeting-location-inputs-component--object]"));const t=[];this.addedInputIndex.forEach((e=>{this.removedInputIndex.includes(e)||t.includes(e)||t.push(e)})),this.multipleDayObjects=t.map((e=>Array.from(document.querySelectorAll('[meeting-location-inputs-component--object="'+(e+1)+'"]')).map((e=>{var t,n,i,o;let a=new s.MeetingEventScheduleLocationFormInputModel;return a.meetingEventId=this.meetingEventId,a.locationName=String(null!==(t=e.locationNameValue)&&void 0!==t?t:""),a.radius=String(null!==(n=e.radiusValue)&&void 0!==n?n:""),a.latitude=String(null!==(i=e.latitudeValue)&&void 0!==i?i:""),a.longitude=String(null!==(o=e.longitudeValue)&&void 0!==o?o:""),a}))[0]))}firstUpdated(){}createRenderRoot(){return this}};r.styles=[i.css`
   :host { display: block; }
  `],a([(0,o.property)({type:Number}),l("design:type",Number)],r.prototype,"meetingEventId",void 0),a([(0,o.property)({type:Number}),l("design:type",Number)],r.prototype,"currentObjectCount",void 0),a([(0,o.property)({type:Array}),l("design:type",Array)],r.prototype,"multipleDayObjects",void 0),a([(0,o.property)({type:Array}),l("design:type",Array)],r.prototype,"removedInputIndex",void 0),a([(0,o.property)({type:Array}),l("design:type",Array)],r.prototype,"addedInputIndex",void 0),a([(0,o.property)({type:Boolean}),l("design:type",Boolean)],r.prototype,"firstInputAddedCalled",void 0),a([(0,o.property)({type:Boolean}),l("design:type",Boolean)],r.prototype,"loading",void 0),r=a([(0,o.customElement)("meeting-location-multiple-inputs-component"),l("design:paramtypes",[])],r)},95744:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormLocation:()=>y}),n(45501);var i,o,s,a=n(85862),l=n(59662),r=(n(23283),n(51511),n(43690),n(71854),n(37725),n(29068)),c=n(606),d=n(52218),u=n(44672),p=n(7427),h=n(84452),m=(n(75866),n(99139),n(25448)),f=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{r(i.next(e))}catch(e){s(e)}}function l(e){try{r(i.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};let y=class extends a.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this.inputValues=null}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return a.html`${this.schedule}`}get schedule(){return null===this._schedule?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?a.html`${this.scheduleLocation}`:a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?a.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:a.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return a.html`${this.table}`}get table(){return this._scheduleLocations.results.length>0?a.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Location">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Location Name
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Latitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.getMeetingAttendanceLocations}
              </tbody>
            </table>
          </div>
        </div>
      `:a.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return a.html`
      ${this._scheduleLocations.results.map(((e,t)=>a.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.locationName}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude} <small><span class="text-yellow-600 text-xs">Kilometers</span></small>
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude} <small><span class="text-yellow-600 text-xs">Kilometers</span></small>
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius} <small><span class="text-yellow-600 text-xs">Kilometers</span></small>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 success" icon="edit" @click="${t=>this.editThisLocation(t,e)}"></mwc-icon-button>
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceLocation}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return a.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  <meeting-location-multiple-inputs-component meetingEventId="${this.meetingEventId}">
                  </meeting-location-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Location" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 block">
        <meeting-location-edit-component .inputValues="${this.inputValues}"></meeting-location-edit-component>
      </div>
    `}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new r.MDCDataTable(e)}))}editThisLocation(e,t){return v(this,void 0,void 0,(function*(){e.preventDefault(),this.inputValues=m.MeetingLocationFormInputValues.setValues({locationId:t.id,locationNameValue:t.locationName,radiusValue:String(t.radius),latitudeValue:String(t.latitude),longitudeValue:String(t.longitude)})}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll("meeting-location-multiple-inputs-component").forEach((e=>v(this,void 0,void 0,(function*(){console.log({"selector--selector":e});const t=e.multipleDayObjects;yield(0,h.POST_AttendanceAddScheduleLocationBulk)(t)}))))}))}deleteQuestionnaireMeetingAttendanceLocation(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleLocation)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,i=e.results,o=document.querySelector('[id="location"]');let s=[];if(n>0){var a=i;for(let e=0;e<a.length;e++){const t=a[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return v(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleLocation)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};y.styles=[a.css`
   :host { display: block; }
  `],f([(0,l.property)({type:Number}),g("design:type",Number)],y.prototype,"CLIENT_ID",void 0),f([(0,l.property)({type:Number}),g("design:type",Number)],y.prototype,"startSearchPage",void 0),f([(0,l.property)({type:Array}),g("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],y.prototype,"_data",void 0),f([(0,l.property)({type:Object}),g("design:type",Object)],y.prototype,"urlQueryParams",void 0),f([(0,l.property)({type:Number}),g("design:type",Number)],y.prototype,"meetingEventId",void 0),f([(0,l.query)('[show-locationField="all"]'),g("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],y.prototype,"showLocationFieldAllSelector",void 0),f([(0,l.property)({attribute:!1}),g("design:type","function"==typeof(s=void 0!==m.MeetingLocationFormInputValues&&m.MeetingLocationFormInputValues)?s:Object)],y.prototype,"inputValues",void 0),y=f([(0,l.customElement)("attendance-setup-form-location"),g("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.lit-element","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-d8a919","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-a4c30d","shared"],(()=>(62166,e(e.s=62166)))),e.O())])));
//# sourceMappingURL=edit-location.js.map