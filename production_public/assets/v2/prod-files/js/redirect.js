"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[5626],{4672:(e,t,n)=>{n.d(t,{Jx:()=>o,O1:()=>i,W3:()=>s});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},s=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},7725:(e,t,n)=>{n.d(t,{U8:()=>a,eF:()=>c,hk:()=>l});var i=n(7052),o=n(1942),s=n(1489);const r="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,o.Ad)(r,"",-1),(0,o.Ad)(r,(0,i.h)(t),3500)};function a(){(0,o.Ad)(r,"",-1)}const l=()=>{if(""===(0,o.Hl)(r))return null;{const e=(0,i.t)((0,o.Hl)(r)),t=JSON.parse(e);return(0,s.N)(t)}}},6224:(e,t,n)=>{n.d(t,{p:()=>c});var i=n(771),o=n(7270),s=n(596),r=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,r.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,i){function o(e){try{r(a.next(e))}catch(e){i(e)}}function s(e){try{r(a.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,s)}r((a=a.apply(t,n||[])).next())}));var t,n,c,a}},147:(e,t,n)=>{n.r(t),n.d(t,{PdbRedirection:()=>v});var i=n(771),o=n(9392),s=n(1936),r=(n(6811),n(4672)),c=n(7052),a=n(3600),l=n(7725),d=n(1566),u=n(6224),h=n(596),g=n(7270),f=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{a(i.next(e))}catch(e){s(e)}}function c(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((i=i.apply(e,t||[])).next())}))};let v=class extends o.oi{constructor(){super(),this.token=null,this.redirectPage="",this.message="Checking Permission",this.loading=!1,this.verifyingToken=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getToken(),this.getRedirectPage(),setInterval((()=>y(this,void 0,void 0,(function*(){console.log({"this.token":this.token,"this.verifyingToken":this.verifyingToken}),null!==this.token&&!1===this.verifyingToken&&(this.verifyingToken=!0,yield this.verifyToken())}))),100)}))}render(){return o.dy`
      <div class="mx-12 my-24 md:mx-12 md:my-24 xl:m-24 shadow p-2">
        <section class="background-radial-gradient">
          <div class="px-6 py-12 md:px-12 text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="flex justify-center items-center">
                <div class="mt-12 lg:mt-0">
                  <h5 class="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">
                    ${this.message}
                  </h5>
                  <div class="flex justify-center items-center">
                    ${this.loading?o.dy`
                      <div class="flex justify-center">
                        <mwc-circular-progress indeterminate></mwc-circular-progress>
                      </div>`:o.Ld}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `}firstUpdated(){}getToken(){this.loading=!0,setTimeout((()=>{this.message="Getting Token"}),100);let e=(0,r.Jx)("permission-key");console.log({permissionKey:e});let t=null!==e?(0,c.t)(e):null;null===t?(setTimeout((()=>{this.loading=!1,this.message="No Token Found.",(0,a.y4)(),(0,l.U8)()}),100),window.location.href=i.t.URLS.LOGIN_PAGE_BASE_URL):(setTimeout((()=>{this.loading=!1,this.message="Token Obtained"}),100),this.token=t)}getRedirectPage(){this.loading=!0,setTimeout((()=>{this.message="Getting Redirect Page"}),100);let e=(0,r.Jx)("access-page-key");console.log({accessPageKey:e});let t=null!==e?(0,c.t)(e):null;null===t?(setTimeout((()=>{this.loading=!1,this.message="No Redirect Page Found.",(0,a.y4)(),(0,l.U8)()}),100),window.location.href=i.t.URLS.LOGIN_PAGE_BASE_URL):(setTimeout((()=>{this.loading=!1,this.message="Redirect Page Obtained"}),100),this.redirectPage=t)}redirectToPage(){this.loading=!0,this.message="Redirecting ...",window.location.href=i.t.URLS.PDB_CLIENT+this.redirectPage}verifyToken(){return y(this,void 0,void 0,(function*(){this.loading=!0;const e=yield function(e){return t=this,n=void 0,s=function*(){const t=i.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",n={token:e};return yield(0,g.d)(t,{method:"POST",body:JSON.stringify(n)},!0).then((e=>new h.H("post",e,!1))).catch((e=>{console.log({error:e})}))},new((o=void 0)||(o=Promise))((function(e,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function c(e){try{a(s.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,c)}a((s=s.apply(t,n||[])).next())}));var t,n,o,s}(this.token);if(null!==e){console.log({_networkResponse:e});const t=e.response;if(console.log({RESPONSE:t}),t.success&&t.success&&"expiry"in t.data&&"token"in t.data&&"user"in t.data){this.loading=!1,this.message="Logging In";const e=(0,d.Y)(t.data);(0,a.bK)(e),(0,l.U8)();try{this.loading=!0;const t=yield(0,u.p)(e.user.branchId);Array.isArray(t.response.data)||(0,l.eF)(t.response.data),this.loading=!1}catch(e){console.error({error:e})}return void this.redirectToPage()}}this.loading=!1}))}createRenderRoot(){return this}};v.styles=[o.iv`
      :host {
        display: block;
      }
    `],f([(0,s.Cb)({type:String}),p("design:type",String)],v.prototype,"token",void 0),f([(0,s.Cb)({type:String}),p("design:type",String)],v.prototype,"redirectPage",void 0),f([(0,s.Cb)({type:String}),p("design:type",String)],v.prototype,"message",void 0),f([(0,s.Cb)({type:Boolean}),p("design:type",Boolean)],v.prototype,"loading",void 0),f([(0,s.Cb)({type:Boolean}),p("design:type",Boolean)],v.prototype,"verifyingToken",void 0),v=f([(0,s.Mo)("pdb-redirection"),p("design:paramtypes",[])],v)}},e=>(e.O(0,[5744,2185,7708,1109,5563,3712],(()=>(147,e(e.s=147)))),e.O())])));
//# sourceMappingURL=redirect.js.map