"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3670],{2368:(e,t,n)=>{n.d(t,{L:()=>r});var i=n(4672);class r{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{var t,n;e.preventDefault();const i=window.FilterFieldBox.form,r=new FormData(i),o=null===(t=this.unmutableInputNames)||void 0===t?void 0:t.map((e=>e.name));null==r||r.forEach(((e,t)=>{var n;(null==o?void 0:o.includes(t))||null===(n=document.querySelectorAll('[name="'+t+'"]'))||void 0===n||n.forEach((e=>{e.value=""}))})),null===(n=this.unmutableInputNames)||void 0===n||n.map((e=>{var t;const n=e.name,i=e.value;void 0!==i&&(null===(t=document.querySelectorAll('[name="'+n+'"]'))||void 0===t||t.forEach((e=>{e.value=i})))})),i.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},89:(e,t,n)=>{n.d(t,{D:()=>r});var i=n(771);class r{constructor(){}static push(e,t={baseUrl:i.t.URLS.PDB_CLIENT}){const n=`${t.baseUrl}${e}`;window.location.href=n}}r.baseUrl=i.t.URLS.PDB_CLIENT},5049:(e,t,n)=>{n.d(t,{L:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,d=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/members"+(null===e?"":"/"+e)+t,c=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{o(d.next(e))}catch(e){t(e)}}function r(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}o((d=d.apply(n,a||[])).next())}));var n,a,c,d}},1245:(e,t,n)=>{n.d(t,{c:()=>a});var i=n(771),r=n(7270),o=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,d=function*(){const n=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/members"+(null===e?"":"/"+e)+t,c=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{o(d.next(e))}catch(e){t(e)}}function r(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}o((d=d.apply(n,a||[])).next())}));var n,a,c,d}},1163:(e,t,n)=>{var i=n(771),r=n(3600),o=n(7052),s=n(5862),a=n(8393),c=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return s.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 hidden"></div>
      <div class="w-32 h-32 hidden"></div>
      <div class="w-16 h-16 hidden"></div>
    `}openProfile(e){if(e.preventDefault(),"false"!==this["click-to-open"]){const e=(e=>{const t=(0,r.Ie)().token,n=(0,o.h)(t,!0),s=(0,o.h)(e,!0);return`${i.t.URLS.PDB_DATABASE}app-reroute?permission-key=${n}&access-page-key=${s}`})(this["click-to-open"]);window.location.href=e}}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[s.iv`
   :host { display: block; }
  `],c([(0,a.Cb)({type:String}),d("design:type",String)],l.prototype,"url",void 0),c([(0,a.Cb)({type:String}),d("design:type",String)],l.prototype,"type",void 0),c([(0,a.Cb)({type:Boolean}),d("design:type",Boolean)],l.prototype,"rounded",void 0),c([(0,a.Cb)({type:String}),d("design:type",String)],l.prototype,"click-to-open",void 0),c([(0,a.Cb)({type:Number}),d("design:type",Number)],l.prototype,"size",void 0),l=c([(0,a.Mo)("user-profile-photo"),d("design:paramtypes",[])],l)},9443:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditMember:()=>Ie}),n(3683),n(4657);var i,r,o=n(4108),s=n(5862),a=n(8393),c=(n(1877),n(5248)),d=(n(2169),n(6811),n(3690),n(1854),n(2461),n(6883),n(2218)),l=n(4672),u=n(8304),m=(n(5866),n(3512)),p=n(771),f=n(3600),b=(n(1725),n(89)),h=n(2368),g=n(7270),y=n(596),v=n(9474),w=n(5049),S=n(4676),_=n(2126),x=n(701),k=n(1245),C=(n(1163),function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}),A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends s.oi{constructor(){super(),this.activeStatus=S.rG.None}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=this.attendanceMember.memberInfo;return s.dy`
      <!-- <div class="flex flex-col items-center whitespace-normal mb-0"> -->
      <div class="whitespace-normal mb-0">
        <div class="flex flex-col items-center">
          <input id="meeting_member_info" name="meeting_member_info" type="checkbox" value="${this.attendanceMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 flex flex-col items-start justify-start">
          <!-- <user-profile-photo class="w-16 h-16 mb-1 justify-center" rounded 'click-to-open'="" click-to-open="" type="member"
            url="${e.logo}" size="16"></user-profile-photo> -->
          <p class="ml-1 mb-2 text-xs w-[130px] whitespace-[normal]">
            ${e.organizationName}
          </p>
        </div>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};I.styles=[s.iv`
   :host { display: block; }
  `],C([(0,a.Cb)({attribute:!1}),A("design:type","function"==typeof(i=void 0!==S.rG&&S.rG)?i:Object)],I.prototype,"activeStatus",void 0),C([(0,a.Cb)({attribute:!1}),A("design:type","function"==typeof(r=void 0!==S.rB&&S.rB)?r:Object)],I.prototype,"attendanceMember",void 0),I=C([(0,a.Mo)("member-col-one-org-component"),A("design:paramtypes",[])],I);var B,R,$=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let M=class extends s.oi{constructor(){super(),this.activeStatus=S.rG.None}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){var e;const t=this.attendanceMember.memberInfo;return s.dy`
      <!-- <div class="flex flex-col items-center whitespace-normal mb-0"> -->
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="meeting_member_info" name="meeting_member_info" type="checkbox" value="${this.attendanceMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start">
          <!-- <user-profile-photo class="w-16 h-16 mb-1 justify-center" rounded 'click-to-open'="" click-to-open="" type="member"
            url="${t.profilePicture}" size="16"></user-profile-photo> -->
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${t.firstname} ${null!==(e=t.middlename)&&void 0!==e?e:""} ${t.surname}
          </p>
        </div>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};M.styles=[s.iv`
   :host { display: block; }
  `],$([(0,a.Cb)({attribute:!1}),O("design:type","function"==typeof(B=void 0!==S.rG&&S.rG)?B:Object)],M.prototype,"activeStatus",void 0),$([(0,a.Cb)({attribute:!1}),O("design:type","function"==typeof(R=void 0!==S.rB&&S.rB)?R:Object)],M.prototype,"attendanceMember",void 0),M=$([(0,a.Mo)("member-col-one-ind-component"),O("design:paramtypes",[])],M);var E,j,N=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let D=class extends s.oi{constructor(){super(),this.activeStatus=S.rG.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=S.rB.fromJson(JSON.parse(this.attendanceMemberString))}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){if(null===this.attendanceMember)return s.dy`<b class="text-red-500">UNKOWN MEMBER</b>`;{const e=this.attendanceMember.memberInfo;return null===e?s.dy`<b class="text-red-500">UNKOWN MEMBER</b>`:1===e.accountType?s.dy`
            <member-col-one-ind-component activeStatus="${this.activeStatus}" .attendanceMember="${this.attendanceMember}"></member-col-one-ind-component>
          `:s.dy`
            <member-col-one-org-component activeStatus="${this.activeStatus}" .attendanceMember="${this.attendanceMember}"></member-col-one-org-component>
          `}}firstUpdated(){}createRenderRoot(){return this}};D.styles=[s.iv`
   :host { display: block; }
  `],N([(0,a.Cb)({attribute:!1}),G("design:type","function"==typeof(E=void 0!==S.rG&&S.rG)?E:Object)],D.prototype,"activeStatus",void 0),N([(0,a.Cb)({type:String}),G("design:type",String)],D.prototype,"attendanceMemberString",void 0),N([(0,a.Cb)({attribute:!1}),G("design:type","function"==typeof(j=void 0!==S.rB&&S.rB)?j:Object)],D.prototype,"attendanceMember",void 0),D=N([(0,a.Mo)("member-col-one-component"),G("design:paramtypes",[])],D),n(1239);var P,U,T,F=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let W=class extends s.oi{constructor(){super(),this.activeStatus=S.rG.None,this.memberActiveStatus=S.rG.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=S.rB.fromJson(JSON.parse(this.attendanceMemberString));for(const e in S.rG)if(Object.prototype.hasOwnProperty.call(S.rG,e)){const t=S.rG[e];this.attendanceMember.statusId.id.toString()===t.toString()&&(this.memberActiveStatus=Number(t))}}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){if(null===this.attendanceMember)return s.dy`<b class="text-red-500">UNKOWN MEMBER</b><b class="w-1/6"></b>`;{const e=this.attendanceMember.statusId;return s.dy`
        <div class="ml-1 mb-2 whitespace-normal"><b class="w-100"></b>
          <p class="ml-1 mb-2 text-xs whitespace-normal flex flex-col items-start justify-start">
            <mwc-icon class="${this.textIconColor} flex flex-col items-center justify-center">${this.iconType}</mwc-icon>
            <b class="${this.textIconColor}">${e.status}</b>
          </p>
        </div>
      `}}get iconType(){return this.memberActiveStatus===S.rG.Assigned?"check_circle":this.memberActiveStatus===S.rG.Pending?"timer":"circle"}get textIconColor(){return this.memberActiveStatus===S.rG.Assigned?"text-green-500":this.memberActiveStatus===S.rG.Pending?"text-purple-500":"text-red-500"}firstUpdated(){}createRenderRoot(){return this}};W.styles=[s.iv`
   :host { display: block; }
  `],F([(0,a.Cb)({attribute:!1}),L("design:type","function"==typeof(P=void 0!==S.rG&&S.rG)?P:Object)],W.prototype,"activeStatus",void 0),F([(0,a.Cb)({attribute:!1}),L("design:type","function"==typeof(U=void 0!==S.rG&&S.rG)?U:Object)],W.prototype,"memberActiveStatus",void 0),F([(0,a.Cb)({type:String}),L("design:type",String)],W.prototype,"attendanceMemberString",void 0),F([(0,a.Cb)({attribute:!1}),L("design:type","function"==typeof(T=void 0!==S.rB&&S.rB)?T:Object)],W.prototype,"attendanceMember",void 0),W=F([(0,a.Mo)("member-col-two-component"),L("design:paramtypes",[])],W);var z,J,Q=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},H=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let V=class extends s.oi{constructor(){super(),this.activeStatus=S.rG.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=S.rB.fromJson(JSON.parse(this.attendanceMemberString))}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){if(null===this.attendanceMember)return s.dy`<b class="text-red-500">UNKOWN MEMBER</b>`;{this.attendanceMember.memberInfo;const e=this.attendanceMember.meetingCategoryId,t=this.attendanceMember.meetingGroupId,n=this.attendanceMember.meetingSubgroupId;return s.dy`
        <table class="table striped hover w-full shadow-md border">
          <thead>
            <tr>
              <th class="text-left">Grouping</th>
              <th class="text-left">Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category</td>
              <td>${null==e?s.dy`<p class="text-red-400">Not Assigned</p>`:e.memberCategoryId.category}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>${null==t?s.dy`<p class="text-red-400">Not Assigned</p>`:t.groupInfo.group}</td>
            </tr>
            <tr>
              <td>Subgroup</td>
              <td>${null==n?s.dy`<p class="text-red-400">Not Assigned</p>`:n.subGroupInfo.subgroup}</td>
            </tr>
          </tbody>
        </table>
      `}}firstUpdated(){}createRenderRoot(){return this}};V.styles=[s.iv`
   :host { display: block; }
  `],Q([(0,a.Cb)({attribute:!1}),H("design:type","function"==typeof(z=void 0!==S.rG&&S.rG)?z:Object)],V.prototype,"activeStatus",void 0),Q([(0,a.Cb)({type:String}),H("design:type",String)],V.prototype,"attendanceMemberString",void 0),Q([(0,a.Cb)({attribute:!1}),H("design:type","function"==typeof(J=void 0!==S.rB&&S.rB)?J:Object)],V.prototype,"attendanceMember",void 0),V=Q([(0,a.Mo)("member-col-three-component"),H("design:paramtypes",[])],V);var K,q,Y,X=n(6455),Z=n.n(X),ee=n(8967),te=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))},ne=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},ie=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let re=class extends s.oi{constructor(){super(),this.activeStatus=S.rG.None,this.memberActiveStatus=S.rG.None,this.attendanceMemberString=""}connectedCallback(){super.connectedCallback();try{this.attendanceMember=S.rB.fromJson(JSON.parse(this.attendanceMemberString));for(const e in S.rG)if(Object.prototype.hasOwnProperty.call(S.rG,e)){const t=S.rG[e];this.attendanceMember.statusId.id.toString()===t.toString()&&(this.memberActiveStatus=Number(t))}}catch(e){this.attendanceMember=null}}disconnectedCallback(){}render(){return null===this.attendanceMember?s.dy`<b class="text-red-500">UNKOWN MEMBER</b>`:this.memberActiveStatus===S.rG.Assigned?s.dy`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.unassignButton}
            <div class="mx-1"></div>
            ${this.pendingButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `:this.memberActiveStatus===S.rG.Pending?s.dy`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.assignButton}
            <div class="mx-1"></div>
            ${this.unassignButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `:s.dy`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.assignButton}
            <div class="mx-1"></div>
            ${this.pendingButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `}get pendingButton(){return s.dy`
      <div class="block">
        <mwc-button class="button info text-xs" label="Set Pending" status-id="3" outlined @click="${this.submitStatus}">
          <mwc-icon>timer</mwc-icon>
        </mwc-button>
      </div>
    `}get assignButton(){return s.dy`
      <div class="block">
        <mwc-button class="button success text-xs" label="Assign" status-id="1" outlined @click="${this.submitStatus}">
          <mwc-icon>check_circle</mwc-icon>
        </mwc-button>
      </div>
    `}get unassignButton(){return s.dy`
      <div class="block">
        <mwc-button class="button danger text-xs" label="Unassign" status-id="2" outlined @click="${this.submitStatus}">
          <mwc-icon>circle</mwc-icon>
        </mwc-button>
      </div>
    `}get showDayDateButtons(){return this.attendanceMember.meetingEventId.isRecuring?s.dy`
        <mwc-button class="button warning text-xs" label="Set Meeting Days" raised @click="${()=>b.D.push("settings/edit/member-days?member-id="+this.attendanceMember.id)}">
          <mwc-icon>today</mwc-icon>
        </mwc-button>`:s.dy`
        <mwc-button class="button warning text-xs" label="Set Meeting Dates" raised @click="${()=>b.D.push("settings/edit/member-dates?member-id="+this.attendanceMember.id)}">
          <mwc-icon>today</mwc-icon>
        </mwc-button>`}submitStatus(e){return t=this,n=void 0,r=function*(){if(null!==this.attendanceMember){const t=e.target.getAttribute("status-id"),n=Number.isNaN(t)?0:t;yield function(e,t){return te(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),i=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,r={statusId:t};return Z().fire({title:"Update Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>te(this,void 0,void 0,(function*(){return yield(0,g.d)(i,{method:"PUT",body:JSON.stringify(r),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new y.H("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,ee.T)(e);Z().showValidationMessage(`${t}`)}return t})).catch((e=>{Z().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!Z().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&Z().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.attendanceMember.id,n)}},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}c((r=r.apply(t,n||[])).next())}));var t,n,i,r}firstUpdated(){}createRenderRoot(){return this}};re.styles=[s.iv`
   :host { display: block; }
  `],ne([(0,a.Cb)({attribute:!1}),ie("design:type","function"==typeof(K=void 0!==S.rG&&S.rG)?K:Object)],re.prototype,"activeStatus",void 0),ne([(0,a.Cb)({attribute:!1}),ie("design:type","function"==typeof(q=void 0!==S.rG&&S.rG)?q:Object)],re.prototype,"memberActiveStatus",void 0),ne([(0,a.Cb)({type:String}),ie("design:type",String)],re.prototype,"attendanceMemberString",void 0),ne([(0,a.Cb)({attribute:!1}),ie("design:type","function"==typeof(Y=void 0!==S.rB&&S.rB)?Y:Object)],re.prototype,"attendanceMember",void 0),re=ne([(0,a.Mo)("member-col-four-component"),ie("design:paramtypes",[])],re);var oe,se,ae,ce,de,le,ue,me,pe,fe,be,he=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))},ge=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},ye=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ve=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};let we=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.statusDisplay=1,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this.activeStatus=S.rG.None,this._isLoading=!1,this.firstLoad=!0,this.renderView=s.dy``,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0,this._categories=[],this._groups=[],this._subgroups=[]}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return ve(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,l.O1)(),this.getMeetingEventId(),this.filterBox=new h.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),document.onreadystatechange=e=>{"complete"==document.readyState&&this.handleQueryParam()},yield this.getAttendanceSchedule(),yield this.getCategories(),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return s.dy`
      <span class="flex flex-row md:flex-col w-100">
      </span>
      <div class="mt-1 mb-2 border border-y-2 rounded shadow-sm">
        <div class="block my-1 p-2">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
          <schedule-title-card meetingEventId="${this.meetingEventId}" CLIENT_ID="${this.CLIENT_ID}">
          </schedule-title-card>
        </div>
      </div>
      <div class="block my-2">
        ${this.firstLoad?this.mainRender:s.Ld}
        ${this._isLoading?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:this.renderView}
      </div>
    `}get getCurrentTabFromQueryParam(){return new URLSearchParams(window.location.search).get("status-view")}get currentIndex(){return this.getCurrentTabFromQueryParam===S.rG.None.valueOf().toString()?S.rG.None:this.getCurrentTabFromQueryParam===S.rG.Assigned.valueOf().toString()?S.rG.Assigned:this.getCurrentTabFromQueryParam===S.rG.Unassigned.valueOf().toString()?S.rG.Unassigned:S.rG.Pending}handleQueryParam(){const e=this.getCurrentTabFromQueryParam;e===S.rG.None.valueOf().toString()?this.displayAllStatus(new Event("click")):e===S.rG.Assigned.valueOf().toString()?this.displayAssignedStatus(new Event("click")):e===S.rG.Unassigned.valueOf().toString()?this.displayUnassignedStatus(new Event("click")):this.displayPendingStatus(new Event("click")),this.pageRenderFirstView()}updateQueryParam(e){const t=new URLSearchParams(window.location.search);t.set("status-view",e);const n=`${window.location.pathname}?${t.toString()}`;window.history.replaceState(null,"",n),this.reloadRenderView(new Event("click"))}displayAllStatus(e){e.preventDefault(),this.statusDisplay=1,this.updateQueryParam(S.rG.None.valueOf().toString())}displayAssignedStatus(e){e.preventDefault(),this.statusDisplay=2,this.updateQueryParam(S.rG.Assigned.valueOf().toString())}displayUnassignedStatus(e){e.preventDefault(),this.statusDisplay=3,this.updateQueryParam(S.rG.Unassigned.valueOf().toString())}displayPendingStatus(e){e.preventDefault(),this.statusDisplay=4,this.updateQueryParam(S.rG.Pending.valueOf().toString())}pageRenderView(){this.firstLoad=!1,this._isLoading=!0,this.renderView=s.dy``,setTimeout((()=>{this.renderView=this.mainRender,this._isLoading=!1}),100)}pageRenderFirstView(){setTimeout((()=>{this.firstLoad=!0,this._isLoading=!1,this.renderView=s.dy``}),100)}get mainRender(){return s.dy`
      <!-- <mwc-button icon="refresh" label="Reload" raised class="primary mt-1"
        @click="${""}">
      </mwc-button> -->
      <div>
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="album" id="allStatusDisplayBtn"
                label="All" @click="${this.displayAllStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedStatusDisplayBtn"
                label="Assigned" @click="${this.displayAssignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedStatusDisplayBtn"
                label="Unassigned" @click="${this.displayUnassignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timer" id="pendingStatusDisplayBtn"
                label="Pending" @click="${this.displayPendingStatus}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="album" id="allStatusDisplayBtn"
                label="All" @click="${this.displayAllStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedStatusDisplayBtn"
                label="Assigned" @click="${this.displayAssignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedStatusDisplayBtn"
                label="Unassigned" @click="${this.displayUnassignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timer" id="pendingStatusDisplayBtn"
                label="Pending" @click="${this.displayPendingStatus}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${""}
          </div>
        </div>
      </div>
      ${this.schedule}
    `}reloadRenderView(e){e.preventDefault(),this.pageRenderView()}get schedule(){return null===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.dy`
        <div>
          ${this.groupsAndSubgroups}
          ${this.table}
        </div>
      `:s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get groupsAndSubgroups(){return s.dy`
      <div class="main-container mt-2 mb-4">
        <div class="flex justify-end">
          <div class="flex flex-col md:flex-row justify-evenly">
            <mwc-button raised class="button info" type="button" @click="${()=>b.D.push("settings/edit/member-groups?meeting-event-id="+this.meetingEventId)}">
              Assign Group(s)
            </mwc-button>
            <div class="m-1"></div>
            <mwc-button raised class="button warning" type="button" @click="${()=>b.D.push("settings/edit/member-subgroups?meeting-event-id="+this.meetingEventId)}">
              Assign Sub-Group(s)
            </mwc-button>
          </div>
        </div>
      </div>
    `}get __tableHeaders(){return[{title:"Member(s)"},{title:"Status"},{title:"Grouping"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Status"},{title:"Grouping"},{title:"Action"}]}get table(){const e=0===this.currentIndex?"":`&statusId=${this.currentIndex}`;let t=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member?datatable_plugin&meetingEventId="+this.meetingEventId+e;t+=this.urlQueryString;const n=this.__dataTable(t);let i={};const r=(0,f.Ie)();return i.Authorization="Token "+r.token,s.dy`
      ${this.table_header}
      <datatables-new .datatable="${n}" .ajaxHeader="${i}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){this.filterBox=new h.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:String(this.meetingEventId)}]})}get filterForm(){let e=s.dy``;const t=(0,l.O1)(),n="meetingGroupId",i="meetingSubgroupId",r="meetingCategoryId";let o=null,a=null,c=null;for(const e in t){let s=String(t[e]);s=""===s?null:s,e===n&&(a=s),e===i&&(c=s),e===r&&(o=s)}const d=Number.isNaN(a)?0:Number(a),u=Number.isNaN(c)?0:Number(c),m=Number.isNaN(o)?0:Number(o),p=this.groupsSubgroupsCategories(d,u,m),f=s.dy`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${n}" class="w-full" id="${n}" label="Select Group"
            .options="${p.groups}" outlined required>
          </select-input>
        </div>
      </div>`,b=s.dy`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${i}" class="w-full" id="${i}" label="Select Sub-Group"
            .options="${p.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`,h=s.dy`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Category</h4>
          <select-input name="${r}" class="w-full" id="${r}" label="Select Category"
            .options="${p.categories}" outlined required>
          </select-input>
        </div>
      </div>`;return e=s.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container pb-2">
            <div class="row">
              ${h} ${f} ${b}
              <div class="col-xl-12 col-md-12">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" id="meeting-event-id" value="${this.meetingEventId}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}groupsSubgroupsCategories(e,t,n){let i=[{id:0,name:"Select Group Status",isSelected:"false",selected:!1}],r=[{id:0,name:"Select Sub-Group Status",isSelected:"false",selected:!1}],o=[{id:0,name:"Select Category Status",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let n=!1,r="false";e===t.id&&(n=!0,r="true");const o={id:t.id,name:t.groupInfo.group,isSelected:r,selected:n};i.includes(o)||i.push(o)})),this._subgroups.forEach((e=>{let n=!1,i="false";t===e.id&&(n=!0,i="true");const o={id:e.id,name:`${e.subGroupInfo.groupId.group} => ${e.subGroupInfo.subgroup}`,isSelected:i,selected:n};r.includes(o)||r.push(o)})),this._categories.forEach((e=>{let n=!1,i="false";t===e.id&&(n=!0,i="true");const r={id:e.id,name:`${e.memberCategoryId.category}`,isSelected:i,selected:n};o.includes(r)||o.push(r)})),{groups:i,subgroups:r,categories:o}}get urlQueryString(){const e=(0,l.O1)(),t="meetingGroupId",n="meetingSubgroupId",i="meetingCategoryId";let r={};for(const o in e){let s=String(e[o]);o!==t&&o!==n&&o!==i||(r[o]=s,o!==t&&o!==n&&o!==i||"0"===s&&(r[o]=""))}let o=(0,l.W3)(r);return 0===o.length?o:"&"+o}get table_header(){return s.dy`
      <div class="p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-stretch px-4 my-2">
            <b>CHECK ALL: </b>
            <input id="meeting_member_info_all" name="meeting_member_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_meeting_members}" />
          </label>
        </div>
        ${this.table_header_buttons}
      </div>
    `}get table_header_buttons(){const e=this.getCurrentTabFromQueryParam;return e===S.rG.None.valueOf().toString()?s.dy``:e===S.rG.Assigned.valueOf().toString()?s.dy`
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
          <mwc-button class="danger" raised meeting_member_info_all="unassign"
            @click="${e=>this.updateBulkStatusID(e,2)}">Unassign Selected</mwc-button>
          <div class="w-4 h-4"></div>
          <mwc-button class="info" raised meeting_member_info_all="pending"
            @click="${e=>this.updateBulkStatusID(e,3)}">Set Pending To Selected</mwc-button>  
        </div>
      `:e===S.rG.Unassigned.valueOf().toString()?s.dy`
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
          <mwc-button class="success" raised meeting_member_info_all="assign"
            @click="${e=>this.updateBulkStatusID(e,1)}">Assign Selected</mwc-button>
          <div class="w-4 h-4"></div>
          <mwc-button class="info" raised meeting_member_info_all="unassign"
            @click="${e=>this.updateBulkStatusID(e,3)}">Set Pending To Selected</mwc-button>  
        </div>
      `:s.dy`
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
          <mwc-button class="success" raised meeting_member_info_all="assign"
            @click="${e=>this.updateBulkStatusID(e,1)}">Assign Selected</mwc-button>
          <div class="w-4 h-4"></div>
          <mwc-button class="danger" raised meeting_member_info_all="pending"
            @click="${e=>this.updateBulkStatusID(e,2)}">Unassign Selected</mwc-button>  
        </div>
      `}rowOneRender(e){const t=S.rB.fromJson(e);return`\n      <member-col-one-component activeStatus="${this.activeStatus}"\n        attendanceMemberString='${t.toString()}'>\n      </member-col-one-component>\n    `}rowTwoRender(e){const t=S.rB.fromJson(e);return`\n      <member-col-two-component activeStatus="${this.activeStatus}"\n      attendanceMemberString='${t.toString()}'>\n    </member-col-two-component>\n    `}rowThreeRender(e){const t=S.rB.fromJson(e);return`\n      <member-col-three-component activeStatus="${this.activeStatus}"\n      attendanceMemberString='${t.toString()}'>\n    </member-col-three-component>\n    `}rowFourRender(e){const t=S.rB.fromJson(e);return`\n      <member-col-four-component activeStatus="${this.activeStatus}"\n      attendanceMemberString='${t.toString()}'>\n    </member-col-four-component>\n    `}__dataTable(e){const t=this;let n={order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.rowOneRender(i),orderable:!0,className:"w-1/6"},{data:"memberId",render:(e,n,i)=>t.rowTwoRender(i),orderable:!0,className:"w-20"},{data:"meetingEventId",render:(e,n,i)=>t.rowThreeRender(i),orderable:!0,className:"w-full sm:w-1/4"},{data:"statusId",render:(e,n,i)=>t.rowFourRender(i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return ve(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0};return n}submitForm(e){return ve(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.T)()}))}deleteQuestionnaireMeetingAttendanceMember(e){return ve(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.g)(t)}))}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return ve(this,void 0,void 0,(function*(){const e=yield(0,d.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getCategories(){return ve(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,i=void 0,o=function*(){const n=(0,f.Ie)(),i=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/category"+(null===e?"":"/"+e)+t,r=yield(0,g.d)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new y.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new y.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(o.next(e))}catch(e){t(e)}}function a(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((o=o.apply(n,i||[])).next())}));var n,i,r,o}(null,"?length=10000&meetingEventId="+this.meetingEventId);if(null===e)this._categories=[];else{const t=e.paginResponse.results;Array.isArray(t)?this._categories=t.map((e=>v.wB.fromJson(e))):this._categories=[v.wB.fromJson(t)]}}))}getGroups(){return ve(this,void 0,void 0,(function*(){const e=yield(0,w.L)(null,"?length=10000&meetingEventId="+this.meetingEventId);if(null===e)this._groups=[];else{const t=e.paginResponse.results;Array.isArray(t)?this._groups=t.map((e=>_.aU.fromJson(e))):this._groups=[_.aU.fromJson(t)]}}))}getSubGroups(){return ve(this,void 0,void 0,(function*(){const e=yield(0,k.c)(null,"?length=10000&meetingEventId="+this.meetingEventId);if(null===e)this._subgroups=[];else{const t=e.paginResponse.results;Array.isArray(t)?this._subgroups=t.map((e=>x.b.fromJson(e))):this._subgroups=[x.b.fromJson(t)]}}))}check_all_meeting_members(e){return ve(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="meeting_member_info_all"][name="meeting_member_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((e=>{e.checked=!1}))}))}))}updateBulkStatusID(e,t){return ve(this,void 0,void 0,(function*(){e.preventDefault();let n=[];document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const t=Number(e.value);n.includes(t)||n.push(t)}}));let i=n.map((e=>({id:e})));yield function(e,t){return he(this,void 0,void 0,(function*(){const n=(0,f.Ie)(),i=p.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/bulk-status/"+t,r=JSON.stringify(e);return Z().fire({title:"Add Member Status(es)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>he(this,void 0,void 0,(function*(){return yield(0,g.d)(i,{method:"PUT",body:r,headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new y.H("post",e,!1),n=t.multipleResponse;let i=[];if(null!==n&&n.forEach(((e,t)=>{"nameError"in e&&"unknownError"in e&&(e.unknownError.length>0?e.unknownError.forEach((e=>{e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${e}`})}))})):e.nameError.length>0&&e.nameError.forEach((e=>{const n=e.id;e.errors.forEach((e=>{i.push({error:`[${"Entry".toUpperCase()} ${t+1}] - ${n.toUpperCase()} :: ${e}`})}))})))})),i.length>0){const e=(0,ee.T)(i);return Z().showValidationMessage(`${e}`)}return t})).catch((e=>{Z().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!Z().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}n&&Z().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(i,t)}))}createRenderRoot(){return this}};we.styles=[s.iv`
   :host { display: block; }
  `],ge([(0,a.Cb)({type:Number}),ye("design:type",Number)],we.prototype,"CLIENT_ID",void 0),ge([(0,a.Cb)({type:Number}),ye("design:type",Number)],we.prototype,"startSearchPage",void 0),ge([(0,a.IO)('[filter-section-context="btn"]'),ye("design:type","function"==typeof(oe=void 0!==c.z&&c.z)?oe:Object)],we.prototype,"filterSectionContextBtn",void 0),ge([(0,a.IO)('[filter-section-context="container"]'),ye("design:type","function"==typeof(se="undefined"!=typeof Element&&Element)?se:Object)],we.prototype,"filterSectionContextContainer",void 0),ge([(0,a.IO)('[make-general-posts="submit_filter_form"]'),ye("design:type","function"==typeof(ae="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?ae:Object)],we.prototype,"filterSectionContextForm",void 0),ge([(0,a.IO)("#allStatusDisplayBtn"),ye("design:type","function"==typeof(ce=void 0!==c.z&&c.z)?ce:Object)],we.prototype,"allStatusDisplayBtn",void 0),ge([(0,a.IO)("#assignedStatusDisplayBtn"),ye("design:type","function"==typeof(de=void 0!==c.z&&c.z)?de:Object)],we.prototype,"assignedStatusDisplayBtn",void 0),ge([(0,a.IO)("#unassignedStatusDisplayBtn"),ye("design:type","function"==typeof(le=void 0!==c.z&&c.z)?le:Object)],we.prototype,"unassignedStatusDisplayBtn",void 0),ge([(0,a.IO)("#pendingStatusDisplayBtn"),ye("design:type","function"==typeof(ue=void 0!==c.z&&c.z)?ue:Object)],we.prototype,"pendingStatusDisplayBtn",void 0),ge([(0,a.Cb)({type:Number}),ye("design:type",Number)],we.prototype,"statusDisplay",void 0),ge([(0,a.Cb)({type:Number}),ye("design:type","function"==typeof(me=void 0!==S.rG&&S.rG)?me:Object)],we.prototype,"activeStatus",void 0),ge([(0,a.Cb)({type:Boolean}),ye("design:type",Boolean)],we.prototype,"_isLoading",void 0),ge([(0,a.Cb)({type:Boolean}),ye("design:type",Boolean)],we.prototype,"firstLoad",void 0),ge([(0,a.Cb)({type:Object}),ye("design:type","function"==typeof(pe=void 0!==s.TemplateResult&&s.TemplateResult)?pe:Object)],we.prototype,"renderView",void 0),ge([(0,a.Cb)({type:Array}),ye("design:type",Array)],we.prototype,"_members",void 0),ge([(0,a.Cb)({type:Array}),ye("design:type","function"==typeof(fe="undefined"!=typeof Array&&Array)?fe:Object)],we.prototype,"_data",void 0),ge([(0,a.Cb)({type:Object}),ye("design:type",Object)],we.prototype,"urlQueryParams",void 0),ge([(0,a.Cb)({type:Number}),ye("design:type",Number)],we.prototype,"meetingEventId",void 0),ge([(0,a.Cb)({type:Array}),ye("design:type",Array)],we.prototype,"_categories",void 0),ge([(0,a.Cb)({type:Array}),ye("design:type",Array)],we.prototype,"_groups",void 0),ge([(0,a.Cb)({type:Array}),ye("design:type",Array)],we.prototype,"_subgroups",void 0),ge([(0,a.IO)('[show-memberField="all"]'),ye("design:type","function"==typeof(be="undefined"!=typeof Element&&Element)?be:Object)],we.prototype,"showMemberFieldAllSelector",void 0),we=ge([(0,a.Mo)("attendance-setup-form-member"),ye("design:paramtypes",[])],we),n(8693);var Se=n(9665),_e=n(8092),xe=n(1302),ke=n(7108),Ce=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},Ae=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ie=class extends s.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,Se.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}c((r=r.apply(t,n||[])).next())}));var t,n,i,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,_e.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,xe.OR)(ke.W.schedule_meeting_event),!(0,xe.H)({pageId:ke.W.schedule_meeting_event,viewType:"Edit"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}return s.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};Ce([(0,a.Cb)({type:String}),Ae("design:type",String)],Ie.prototype,"email",void 0),Ce([(0,a.Cb)({type:Number}),Ae("design:type",Number)],Ie.prototype,"mId",void 0),Ce([(0,a.Cb)({type:Number}),Ae("design:type",Number)],Ie.prototype,"clientId",void 0),Ce([(0,a.Cb)({type:Boolean}),Ae("design:type",Boolean)],Ie.prototype,"_hasSetup",void 0),Ce([(0,a.Cb)({type:Boolean}),Ae("design:type",Boolean)],Ie.prototype,"_pageButtonAccess",void 0),Ie=Ce([(0,a.Mo)("attendance-setup-form-edit-member"),Ae("design:paramtypes",[])],Ie)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,4351,1109,6236,6069,214,7719,751,1952,1710,3712],(()=>(9443,e(e.s=9443)))),e.O())])));
//# sourceMappingURL=edit-member.js.map