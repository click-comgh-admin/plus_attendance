"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[412],{771:(t,e,n)=>{let o;n.d(e,{t:()=>m}),o=!!window.location.href.includes(void 0);const r={production:!0,isClientApp:o};let i,a,c,s,l,u,d,p,f,h,b,w;if(r.production){const t=window.location.origin.replace(/^https?:\/\//,"");console.log({DOMAIN_ADDRESS:t,'DOMAIN_ADDRESS.includes("-2.akwaabasoftware.com")':t.includes("-2.akwaabasoftware.com")});const e="akwaabasoftware.com/";a="https://db-api.akwaabasoftware.com/",c=t.includes("-2.akwaabasoftware.com")?"https://db-api-v2-2."+e:"https://db-api-v2."+e,f="https://register."+e,h="akwaabaclients."+e,i="https://"+h,d="https://akwaabaapp."+e,s="https://file-bucket.akwaabasoftware.com/",l=i+"",p=d+"",b=t.includes("-2.akwaabasoftware.com")?"https://clock-2.akwaabasoftware.com/":"https://clock.akwaabasoftware.com/",w=t.includes("-2.akwaabasoftware.com")?"https://database-2.akwaabasoftware.com/":"https://database.akwaabasoftware.com/",u=b+"login"}else{h="akwaaba-forms/";const t="192.168.0.124";i="http://127.0.0.1:9001/",a="http://"+t+"/AMG/plus_db/api/",c=i+"api/",b="http://"+t+":83/",w="http://"+t+":84/",s="http://"+t+"/AMG/plus_db/file_bucket/",l=i+h,p=i+"akwaaba-forms-public/",u=b+"login",f=b+"register-member"}const m={URLS:{BASE_URL:i,API_BASE_URL:a,PDB_CLIENT:b,PDB_DATABASE:w,AKWAABA_API_BASE_URL:c,FILE_BUCKET_BASE_URL:s,HOME_PAGE_BASE_URL:l,PUBLIC_PAGE_BASE_URL:p,LOGIN_PAGE_BASE_URL:u,PUBLIC_LOGIN_PAGE_BASE_URL:void 0,REGISTRATION_BASE_URL:f,FORGOT_PASSWORD_URL:"https://password-reset.akwaabasoftware.com/client-user/forgot-password",PUBLIC_BASE_URL:"https://akwaabasoftware.com/",CLICK_COM_BASE_URL:"https://clickcomgh.com/"},APP_SETTINGS:r,SERVICE_WORKER_TYPES:{postAction:"POST_ACTION",networkStatus:"NETWORK_STATUS"}};window.CONSTANTS=m},7052:(t,e,n)=>{n.d(e,{h:()=>r,t:()=>i});var o=n(8764);const r=(t,e=!1)=>{const n=o.lW.from(t).toString("base64");return e?n.replaceAll("=",""):n},i=t=>o.lW.from(t,"base64").toString()},1942:(t,e,n)=>{function o(t,e,n=1,o="/"){let r=new Date;r.setHours(r.getHours()+3*n);let a="expires="+r.toUTCString();i(t)!=e&&(document.cookie=t+"="+e+"; "+a+"; path="+o)}function r(t,e,n=1,o="/"){let r=new Date;r.setMinutes(r.getMinutes()+n);let a="expires="+r.toUTCString();i(t)!=e&&(document.cookie=t+"="+e+"; "+a+"; path="+o)}function i(t){t+="=";let e=decodeURIComponent(document.cookie).split(";");for(let n=0;n<e.length;n++){let o=e[n];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}n.d(e,{Ad:()=>o,Hl:()=>i,vh:()=>r})},7270:(t,e,n)=>{n.d(e,{d:()=>i});var o=n(7153),r=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((o=o.apply(t,e||[])).next())}))};function i(t,e,n=!0,i=!1){return r(this,void 0,void 0,(function*(){let a=null;e=null==e?{method:"GET"}:e;var c=new Headers;if(c.append("Access-Control-Allow-Origin","*/*"),c.append("Accept","application/json, text/plain, */*"),n&&c.append("Content-Type","application/json"),void 0===e.headers)e.headers=c;else for(const t of c.keys())e.headers[t]=c.get(t);return e.mode="cors",e.redirect="follow",yield(0,o.Z)(t,e,3e5).then((t=>(a=t,t.status>=200&&t.status,Promise.resolve(t)))).then((t=>r(this,void 0,void 0,(function*(){const e=204===t.status?{}:yield t.json();return i?{jsonData:{success:!0,message:"",data:e},response:t,error:""}:{jsonData:e,response:t,error:""}})))).then((t=>r(this,void 0,void 0,(function*(){return t})))).catch((function(t){throw console.error("Request failed",t),t}))}))}},1981:(t,e,n)=>{n.d(e,{R:()=>o});const o=(t,e)=>!0===navigator.onLine?t("online"):e("offline")},7153:(t,e,n)=>{n.d(e,{Z:()=>o});function o(t,e,n=7e3){return o=this,r=void 0,a=function*(){return Promise.race([fetch(t,e),new Promise(((t,e)=>{setTimeout((()=>e(new Error("Connection timeout, check network for internet access"))),n)}))])},new((i=void 0)||(i=Promise))((function(t,e){function n(t){try{s(a.next(t))}catch(t){e(t)}}function c(t){try{s(a.throw(t))}catch(t){e(t)}}function s(e){var o;e.done?t(e.value):(o=e.value,o instanceof i?o:new i((function(t){t(o)}))).then(n,c)}s((a=a.apply(o,r||[])).next())}));var o,r,i,a}},3600:(t,e,n)=>{n.d(e,{Ie:()=>l,bK:()=>c,y4:()=>s});var o=n(1566),r=n(7052),i=n(1942);const a="pdb-client-user",c=t=>{const e=JSON.stringify(t);window.supersecret={unknowable:{ops:{email:t.user.email,id:t.user.id,cookieName:a}}},(0,i.Ad)(a,"",-1),(0,i.Ad)(a,(0,r.h)(e),3500)},s=()=>{(0,i.Ad)(a,"",-1)},l=()=>{if(""===(0,i.Hl)(a))return null;{const t=(0,r.t)((0,i.Hl)(a)),e=JSON.parse(t);return(0,o.Y)(e)}}},7725:(t,e,n)=>{n.d(e,{U8:()=>s,eF:()=>c,hk:()=>l});var o=n(7052),r=n(1942),i=n(1489);const a="pdb-active-branch",c=t=>{const e=JSON.stringify(t);(0,r.Ad)(a,"",-1),(0,r.Ad)(a,(0,o.h)(e),3500)};function s(){(0,r.Ad)(a,"",-1)}const l=()=>{if(""===(0,r.Hl)(a))return null;{const t=(0,o.t)((0,r.Hl)(a)),e=JSON.parse(t);return(0,i.N)(e)}}},1489:(t,e,n)=>{function o(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId),createdBy:Number(t.createdBy),creationDate:new Date(t.creationDate),updatedBy:Number(t.updatedBy),updateDate:new Date(t.updateDate)}}function r(t){return{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}n.d(e,{N:()=>r,j:()=>o})},1566:(t,e,n)=>{function o(t){const e=t.user;return{expiry:new Date(t.expiry),token:String(t.token),user:{id:Number(e.id),accountId:Number(e.accountId),branchId:Number(e.branchId),firstname:String(e.firstname),surname:String(e.surname),phone:String(e.phone),email:String(e.email),profilePicture:String(e.profilePicture)}}}n.d(e,{Y:()=>o})},2715:(t,e,n)=>{var o=n(5862),r=n(8393),i=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends o.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.dy`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.dy`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};i([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"aClass",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"bClass",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"icon",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"href",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"label",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"isBlockContent",void 0),i([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"raised",void 0),c=i([(0,r.Mo)("link-button")],c)},9774:(t,e,n)=>{n.r(e),n.d(e,{PdbBranchButton:()=>f});var o=n(5862),r=n(8393),i=(n(5248),n(2715),n(7725)),a=n(771),c=n(7270),s=n(1981),l=n(3600),u=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((o=o.apply(t,e||[])).next())}))},d=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let f=class extends o.oi{constructor(){super(),this.URL="/account/settings/branch"}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return e=this,n=void 0,r=function*(){t.connectedCallback.call(this);const e=(0,i.hk)();null===e?this.redirect():(0===e.id&&this.redirect(),yield function(t=null){return u(this,void 0,void 0,(function*(){const e=(0,l.Ie)(),n=a.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",o={token:null===t?e.token:t};(0,s.R)((t=>u(this,void 0,void 0,(function*(){return yield(0,c.d)(n,{method:"POST",body:JSON.stringify(o)},!0).then((t=>{const e=t.jsonData;"expiry"in e&&"token"in e&&"user"in e||((0,l.y4)(),window.location.href="/login")}))}))),(t=>{}))}))}())},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}));var e,n,o,r}redirect(){window.location.href.includes(this.URL)||(window.location.href=this.URL)}disconnectedCallback(){}render(){return o.dy`
      <link-button isblockcontent="true" aClass="" raised bClass="button info w-full" href="${this.URL}" icon="call_split"
        label="Change Branch"></link-button>
    `}firstUpdated(){}createRenderRoot(){return this}};f.styles=[o.iv`
   :host { display: block; }
  `],d([(0,r.Cb)({type:String}),p("design:type",Object)],f.prototype,"URL",void 0),f=d([(0,r.Mo)("pdb-branch-button"),p("design:paramtypes",[])],f)}},t=>(t.O(0,[5744,2185,4351,6236,3712],(()=>(9774,t(t.s=9774)))),t.O())])));
//# sourceMappingURL=btn.js.map