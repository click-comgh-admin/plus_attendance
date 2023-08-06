"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[453],{8490:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAdminMembers:()=>ue}),n(3683),n(4657);var i=n(4108),r=n(5862),o=n(8393),s=(n(1877),n(5248)),a=(n(2169),n(6811),n(3690),n(1854),n(2461),n(6883),n(2218)),d=n(4672),c=n(8304),m=(n(5866),n(3512)),l=n(771),u=n(3600),b=(n(1725),n(9474)),p=n(7189),f=n(9345),h=n(4676);class g{toJson(){return{id:this.id,meetingEventId:Number.isNaN(this.meetingEventId)?this.meetingEventId.toJson():this.meetingEventId,adminId:this.adminId,meetingEditor:this.meetingEditor,agendaEditor:this.agendaEditor,clockingAdmin:this.clockingAdmin,updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}static fromJson(e){const t=new g;return t.id=e.id,t.meetingEventId=b.Pu.fromJson(e.meetingEventId),t.adminId=Number(e.adminId),t.meetingEditor=Boolean(e.meetingEditor),t.agendaEditor=Boolean(e.agendaEditor),t.clockingAdmin=Boolean(e.clockingAdmin),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toString(){return JSON.stringify(this.toJson())}}class y{static fromJson(e){const t=new y;return t.id=e.id,t.meetingEventId=b.Pu.fromJson(e.meetingEventId),t.memberId=h.rB.fromJson(e.memberId),t.memberInfo=null===e.memberInfo||void 0===e.memberInfo?null:"certificates"in e.memberInfo?f.k.fromJson(e.memberInfo):p.f.fromJson(e.memberInfo),t.adminId=g.fromJson(e.adminId),t.updatedBy=e.updatedBy,t.updateDate=new Date(e.updateDate),t.date=new Date(e.date),t}toJson(){try{return{id:this.id,meetingEventId:this.meetingEventId.toJson(),memberId:this.memberId,memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson(),adminId:this.adminId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}catch(e){return{id:this.id,meetingEventId:this.meetingEventId,memberId:this.memberId,memberInfo:null===this.memberInfo||void 0===this.memberInfo?null:this.memberInfo.toJson(),adminId:this.adminId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}}toString(){return JSON.stringify(this.toJson())}}var v,w=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="admin_member_info" name="admin_member_info" type="checkbox" value="${this.adminMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start border-b border-b-blue-400">
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${this.memberName}
          </p>
        </div>
      </div>
    `}get memberName(){return 1===this.adminMember.memberInfo.accountType?r.dy`${this.individualMember}`:r.dy`${this.organizationMember}`}get individualMember(){var e;const t=this.adminMember.memberInfo;return`${t.firstname} ${null!==(e=t.middlename)&&void 0!==e?e:""} ${t.surname}`}get organizationMember(){return`${this.adminMember.memberInfo.organizationName}`}firstUpdated(){}createRenderRoot(){return this}};I.styles=[r.iv`
   :host { display: block; }
  `],w([(0,o.Cb)({attribute:!1}),_("design:type","function"==typeof(v=void 0!==y&&y)?v:Object)],I.prototype,"adminMember",void 0),I=w([(0,o.Mo)("admin-member-row1-assigned-component"),_("design:paramtypes",[])],I);var M,k=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let C=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="admin_member_info" name="admin_member_info" type="checkbox" value="${this.adminMember.memberId.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start border-b border-b-red-400">
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${this.memberName}
          </p>
        </div>
      </div>
    `}get memberName(){return 1===this.adminMember.memberInfo.accountType?r.dy`${this.individualMember}`:r.dy`${this.organizationMember}`}get individualMember(){var e;const t=this.adminMember.memberInfo;return`${t.firstname} ${null!==(e=t.middlename)&&void 0!==e?e:""} ${t.surname}`}get organizationMember(){return`${this.adminMember.memberInfo.organizationName}`}firstUpdated(){}createRenderRoot(){return this}};C.styles=[r.iv`
   :host { display: block; }
  `],k([(0,o.Cb)({attribute:!1}),R("design:type","function"==typeof(M=void 0!==y&&y)?M:Object)],C.prototype,"adminMember",void 0),C=k([(0,o.Mo)("admin-member-row1-unassigned-component"),R("design:paramtypes",[])],C);var x,E=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let S=class extends r.oi{constructor(){super(),this.adminMemberString=""}connectedCallback(){super.connectedCallback();try{this.adminMember=y.fromJson(JSON.parse(this.adminMemberString))}catch(e){this.adminMember=null}}disconnectedCallback(){}render(){return null===this.adminMember||null===this.adminMember.memberInfo?r.dy`<b class="text-red-500">UNKOWN MEMBER</b>`:this.isAssigned?r.dy`
            <admin-member-row1-assigned-component .adminMember="${this.adminMember}"></admin-member-row1-assigned-component>
          `:r.dy`
            <admin-member-row1-unassigned-component .adminMember="${this.adminMember}"></admin-member-row1-unassigned-component>
          `}firstUpdated(){}createRenderRoot(){return this}};S.styles=[r.iv`
   :host { display: block; }
  `],E([(0,o.Cb)({type:Boolean}),A("design:type",Boolean)],S.prototype,"isAssigned",void 0),E([(0,o.Cb)({type:String}),A("design:type",String)],S.prototype,"adminMemberString",void 0),E([(0,o.Cb)({attribute:!1}),A("design:type","function"==typeof(x=void 0!==y&&y)?x:Object)],S.prototype,"adminMember",void 0),S=E([(0,o.Mo)("admin-member-row1-component"),A("design:paramtypes",[])],S);var $=n(6455),O=n.n($),j=n(7270),B=n(596),N=n(8967),D=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))};function P(e){return D(this,void 0,void 0,(function*(){const t=(0,u.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin-member/delete-bulk",i=JSON.stringify(e);return O().fire({title:"Remove Admin Member(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>D(this,void 0,void 0,(function*(){return yield(0,j.d)(n,{method:"DELETE",body:i,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new B.H("delete",e,!1),n=t.multipleResponse;let i=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),i.length>0){const e=(0,N.T)(i);return O().showValidationMessage(`${e}`)}return t})).catch((e=>{O().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!O().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&O().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}var U,T=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let J=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="block">
          <mwc-button class="button warning text-xs" label="Unassign" outlined @click="${this.submitMember}">
            <mwc-icon>circle</mwc-icon>
          </mwc-button>
        </div>
      </div>
    `}submitMember(e){return t=this,n=void 0,r=function*(){e.preventDefault(),null!==this.adminMember&&(yield P([{id:this.adminMember.id}]))},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{d(r.next(e))}catch(e){o(e)}}function a(e){try{d(r.throw(e))}catch(e){o(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}d((r=r.apply(t,n||[])).next())}));var t,n,i,r}firstUpdated(){}createRenderRoot(){return this}};J.styles=[r.iv`
   :host { display: block; }
  `],T([(0,o.Cb)({attribute:!1}),L("design:type","function"==typeof(U=void 0!==y&&y)?U:Object)],J.prototype,"adminMember",void 0),J=T([(0,o.Mo)("admin-member-row2-assigned-component"),L("design:paramtypes",[])],J);var V=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))};function W(e){return V(this,void 0,void 0,(function*(){const t=(0,u.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin-member/bulk",i=JSON.stringify(e);return O().fire({title:"Add Admin Member(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>V(this,void 0,void 0,(function*(){return yield(0,j.d)(n,{method:"POST",body:i,headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new B.H("post",e,!1),n=t.multipleResponse;let i=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),i.length>0){const e=(0,N.T)(i);return O().showValidationMessage(`${e}`)}return t})).catch((e=>{O().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!O().isLoading()}).then((e=>{if(console.log({result:e}),e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&O().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}var z,F=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Q=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let q=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="block">
          <mwc-button class="button success text-xs" label="Assign" outlined @click="${this.submitMember}">
            <mwc-icon>check_circle</mwc-icon>
          </mwc-button>
        </div>
      </div>
    `}submitMember(e){return t=this,n=void 0,r=function*(){e.preventDefault(),null!==this.adminMember&&(yield W([{adminId:this.adminMember.adminId.id,memberId:this.adminMember.memberId.id,meetingEventId:this.adminMember.meetingEventId.id}]))},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{d(r.next(e))}catch(e){o(e)}}function a(e){try{d(r.throw(e))}catch(e){o(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}d((r=r.apply(t,n||[])).next())}));var t,n,i,r}firstUpdated(){}createRenderRoot(){return this}};q.styles=[r.iv`
   :host { display: block; }
  `],F([(0,o.Cb)({attribute:!1}),Q("design:type","function"==typeof(z=void 0!==y&&y)?z:Object)],q.prototype,"adminMember",void 0),q=F([(0,o.Mo)("admin-member-row2-unassigned-component"),Q("design:paramtypes",[])],q);var H,K=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let G=class extends r.oi{constructor(){super(),this.adminMemberString=""}connectedCallback(){super.connectedCallback();try{this.adminMember=y.fromJson(JSON.parse(this.adminMemberString))}catch(e){this.adminMember=null}}disconnectedCallback(){}render(){return null===this.adminMember||null===this.adminMember.memberInfo?r.dy`<b class="text-red-500">UNKOWN MEMBER</b>`:!0===this.isAssigned?r.dy`
            <admin-member-row2-assigned-component .adminMember="${this.adminMember}"></admin-member-row2-assigned-component>
          `:r.dy`
            <admin-member-row2-unassigned-component .adminMember="${this.adminMember}"></admin-member-row2-unassigned-component>
          `}firstUpdated(){}createRenderRoot(){return this}};G.styles=[r.iv`
   :host { display: block; }
  `],K([(0,o.Cb)({type:Boolean}),Y("design:type",Boolean)],G.prototype,"isAssigned",void 0),K([(0,o.Cb)({type:String}),Y("design:type",String)],G.prototype,"adminMemberString",void 0),K([(0,o.Cb)({attribute:!1}),Y("design:type","function"==typeof(H=void 0!==y&&y)?H:Object)],G.prototype,"adminMember",void 0),G=K([(0,o.Mo)("admin-member-row2-component"),Y("design:paramtypes",[])],G);var X,Z,ee,te,ne=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},ie=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},re=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))};let oe=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.statusDisplay=1,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._isLoading=!1,this.firstLoad=!0,this.renderView=r.dy``,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this.meetingAdminId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return re(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),this.getMeetingAdminId(),document.onreadystatechange=e=>{"complete"==document.readyState&&this.handleQueryParam()},yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return r.dy`
      <span class="flex flex-row md:flex-col w-100">
      </span>
      <div class="mt-1 mb-2 border border-y-2 rounded shadow-sm">
        <div class="block my-1">
          <schedule-title-card meetingEventId="${this.meetingEventId}" CLIENT_ID="${this.CLIENT_ID}">
          </schedule-title-card>
        </div>
      </div>
      <div class="block my-2">
        ${this.firstLoad?this.mainRender:r.Ld}
        ${this._isLoading?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:this.renderView}
      </div>
    `}get getCurrentTabFromQueryParam(){return new URLSearchParams(window.location.search).get("member-view")}get currentIndex(){return"unassigned"===this.getCurrentTabFromQueryParam?1:0}handleQueryParam(){"unassigned"===this.getCurrentTabFromQueryParam?this.displayUnassignedMembers(new Event("click")):this.displayAssignedMembers(new Event("click")),this.pageRenderFirstView()}updateQueryParam(e){const t=new URLSearchParams(window.location.search);t.set("member-view",e);const n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState("","",n),this.reloadRenderView(new Event("click"))}displayUnassignedMembers(e){e.preventDefault(),this.statusDisplay=1,this.updateQueryParam("unassigned")}displayAssignedMembers(e){e.preventDefault(),this.statusDisplay=2,this.updateQueryParam("assigned")}pageRenderView(){this.firstLoad=!1,this._isLoading=!0,this.renderView=r.dy``,setTimeout((()=>{this.renderView=this.mainRender,this._isLoading=!1}),100)}pageRenderFirstView(){setTimeout((()=>{this.firstLoad=!0,this._isLoading=!1,this.renderView=r.dy``}),100)}get mainRender(){return r.dy`
      <!-- <mwc-button icon="refresh" label="Reload" raised class="primary mt-1"
        @click="${""}">
      </mwc-button> -->
      <div>
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedMemberDisplayBtn"
                label="Member" @click="${this.displayAssignedMembers}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedMemberDisplayBtn"
                label="Member" @click="${this.displayUnassignedMembers}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedMemberDisplayBtn"
                label="Member :: Assigned" @click="${this.displayAssignedMembers}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedMemberDisplayBtn"
                label="Member :: Unassigned" @click="${this.displayUnassignedMembers}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${""}
          </div>
        </div>
      </div>
      ${this.schedule}
    `}reloadRenderView(e){e.preventDefault(),this.pageRenderView()}get schedule(){return null===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.dy`
        <div class="flex items-center justify-center ">
          <div class="w-full md:w-[40rem] items-center justify-center">
            ${this.table_header}
          </div>
        </div>
        <div class="flex items-center justify-center ">
          <div class="w-full md:w-[30rem]">
            ${this.table}
          </div>
        </div>
      `:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get table_header(){return r.dy`
      <div class="p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-stretch px-4 my-2">
            <b>CHECK ALL: </b>
            <input id="admin_member_info_all" name="admin_member_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_admin_members}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2 flex justify-center items-center">
          ${0===this.currentIndex?r.dy`
            <mwc-button class="danger" raised admin_member_info_all="unassign"
              @click="${this.unassignMultipleMemberAction}">Unassign All Selected</mwc-button>
              `:r.dy`<mwc-button class="success" raised admin_member_info_all="assign" @click="${this.assignMultipleMemberAction}">
            Assign All Selected</mwc-button>`}
        </div>
      </div>
    `}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=l.t.URLS.AKWAABA_API_BASE_URL;console.log({"this.currentIndex--this.currentIndex":this.currentIndex}),0===this.currentIndex?e+="attendance/meeting-event/admin-member?datatable_plugin&meetingEventId="+this.meetingEventId+"&adminId="+this.meetingAdminId:e+="attendance/meeting-event/admin-member/unassigned/"+this.meetingEventId+"/"+this.meetingAdminId+"?datatable_plugin";const t=this.__dataTable(e);let n={};const i=(0,u.Ie)();return n.Authorization="Token "+i.token,r.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){}rowOneRender(e){const t=y.fromJson(e);return 0==this.currentIndex?`\n        <admin-member-row1-component isAssigned class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row1-component>\n      `:`\n        <admin-member-row1-component class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row1-component>\n      `}rowTwoRender(e){const t=y.fromJson(e);return 0==this.currentIndex?`\n        <admin-member-row2-component isAssigned class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row2-component>\n      `:`\n        <admin-member-row2-component class="p-0 m-0"\n          adminMemberString='${t.toString()}'>\n        </admin-member-row2-component>\n      `}__dataTable(e){const t=this;let n={order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.rowOneRender(i),orderable:!0},{data:"memberId",render:(e,n,i)=>t.rowTwoRender(i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return re(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0};return n}submitForm(e){return re(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.T)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return re(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,c.g)(t)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getMeetingAdminId(){let e=(0,d.Jx)("meeting-admin-id"),t=null!==e?Number(e):null;this.meetingAdminId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return re(this,void 0,void 0,(function*(){const e=yield(0,a.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}check_all_admin_members(e){return re(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="admin_member_info_all"][name="admin_member_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{e.checked=!1}))}))}))}assignMultipleMemberAction(e){return re(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}}));let n=t.map((e=>({memberId:e,adminId:this.meetingAdminId,meetingEventId:this.meetingEventId})));yield W(n)}))}unassignMultipleMemberAction(e){return re(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}}));let n=t.map((e=>({id:e})));yield P(n)}))}createRenderRoot(){return this}};oe.styles=[r.iv`
   :host { display: block; }
  `],ne([(0,o.Cb)({type:Number}),ie("design:type",Number)],oe.prototype,"CLIENT_ID",void 0),ne([(0,o.IO)("#assignedMemberDisplayBtn"),ie("design:type","function"==typeof(X=void 0!==s.z&&s.z)?X:Object)],oe.prototype,"assignedMemberDisplayBtn",void 0),ne([(0,o.IO)("#unassignedMemberDisplayBtn"),ie("design:type","function"==typeof(Z=void 0!==s.z&&s.z)?Z:Object)],oe.prototype,"unassignedMemberDisplayBtn",void 0),ne([(0,o.Cb)({type:Number}),ie("design:type",Number)],oe.prototype,"statusDisplay",void 0),ne([(0,o.Cb)({type:Boolean}),ie("design:type",Boolean)],oe.prototype,"_isLoading",void 0),ne([(0,o.Cb)({type:Boolean}),ie("design:type",Boolean)],oe.prototype,"firstLoad",void 0),ne([(0,o.Cb)({type:Object}),ie("design:type","function"==typeof(ee=void 0!==r.TemplateResult&&r.TemplateResult)?ee:Object)],oe.prototype,"renderView",void 0),ne([(0,o.Cb)({type:Array}),ie("design:type","function"==typeof(te="undefined"!=typeof Array&&Array)?te:Object)],oe.prototype,"_data",void 0),ne([(0,o.Cb)({type:Object}),ie("design:type",Object)],oe.prototype,"urlQueryParams",void 0),ne([(0,o.Cb)({type:Number}),ie("design:type",Number)],oe.prototype,"meetingEventId",void 0),ne([(0,o.Cb)({type:Number}),ie("design:type",Number)],oe.prototype,"meetingAdminId",void 0),oe=ne([(0,o.Mo)("attendance-setup-form-admin-member"),ie("design:paramtypes",[])],oe),n(8693);var se=n(9665),ae=n(8092),de=n(1302),ce=n(7108),me=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ue=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,se.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{d(o.next(e))}catch(e){i(e)}}function a(e){try{d(o.throw(e))}catch(e){i(e)}}function d(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}d((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,ae.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,de.OR)(ce.W.schedule_meeting_event),!(0,de.H)({pageId:ce.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-admin-member CLIENT_ID="${this.clientId}"></attendance-setup-form-admin-member>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};me([(0,o.Cb)({type:String}),le("design:type",String)],ue.prototype,"email",void 0),me([(0,o.Cb)({type:Number}),le("design:type",Number)],ue.prototype,"mId",void 0),me([(0,o.Cb)({type:Number}),le("design:type",Number)],ue.prototype,"clientId",void 0),me([(0,o.Cb)({type:Boolean}),le("design:type",Boolean)],ue.prototype,"_hasSetup",void 0),me([(0,o.Cb)({type:Boolean}),le("design:type",Boolean)],ue.prototype,"_pageButtonAccess",void 0),ue=me([(0,o.Mo)("attendance-setup-form-edit-admin-members"),le("design:paramtypes",[])],ue)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,214,7719,751,1952,1710,3712],(()=>(8490,e(e.s=8490)))),e.O())])));
//# sourceMappingURL=edit-admin-members.js.map