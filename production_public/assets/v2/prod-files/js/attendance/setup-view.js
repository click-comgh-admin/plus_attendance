"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6520,5759],{6558:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupForm:()=>l}),n(3683),n(4657);var o=n(4108),c=n(9392),i=n(1936),r=(n(4978),n(9665)),a=n(8092),p=n(1302),s=n(7108),d=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends c.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,r.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((c=void 0)||(c=Promise))((function(e,o){function r(e){try{p(i.next(e))}catch(e){o(e)}}function a(e){try{p(i.throw(e))}catch(e){o(e)}}function p(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,a)}p((i=i.apply(t,n||[])).next())}));var t,n,c,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.H)())||void 0===e?void 0:e.expiration_date.expired)return c.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,p.OR)(s.W.schedule_meeting_event),!(0,p.H)({pageId:s.W.schedule_meeting_event,viewType:"Edit"},!1))return c.dy`<no-page-entry-component></no-page-entry-component>`}return c.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-schedule CLIENT_ID="${this.clientId}"></attendance-setup-form-schedule>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,i.Cb)({type:String}),u("design:type",String)],l.prototype,"email",void 0),d([(0,i.Cb)({type:Number}),u("design:type",Number)],l.prototype,"mId",void 0),d([(0,i.Cb)({type:Number}),u("design:type",Number)],l.prototype,"clientId",void 0),d([(0,i.Cb)({type:Boolean}),u("design:type",Boolean)],l.prototype,"_hasSetup",void 0),d([(0,i.Cb)({type:Boolean}),u("design:type",Boolean)],l.prototype,"_pageButtonAccess",void 0),l=d([(0,i.Mo)("attendance-setup-form"),u("design:paramtypes",[])],l)}},e=>(e.O(0,[5744,2185,9674,7708,1109,6236,6069,214,1354,3712],(()=>(6558,e(e.s=6558)))),e.O())])));
//# sourceMappingURL=setup-view.js.map