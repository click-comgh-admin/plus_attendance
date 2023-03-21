"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_network_attendance_meeting_event_link-types_index_ts-src_addons_network_attendance-a286a6"],{5663:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventLinkTypes:()=>c});var o=n(8485),r=n(7270),i=n(4492),s=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),c=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,o){function r(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,i)}s((a=a.apply(t,n||[])).next())}));var t,n,c,a}},6404:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventLocations:()=>c});var o=n(8485),r=n(7270),i=n(4492),s=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),c=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,o){function r(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,i)}s((a=a.apply(t,n||[])).next())}));var t,n,c,a}},7790:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventMemberTypes:()=>c});var o=n(8485),r=n(7270),i=n(4492),s=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),c=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,o){function r(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,i)}s((a=a.apply(t,n||[])).next())}));var t,n,c,a}},28:(e,t,n)=>{n.r(t),n.d(t,{GET_MeetingEventTypes:()=>c});var o=n(8485),r=n(7270),i=n(4492),s=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),c=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,o){function r(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,i)}s((a=a.apply(t,n||[])).next())}));var t,n,c,a}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>c});var o=n(5862),r=n(9662),i=(n(9975),n(6788),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};c.styles=[o.css`
      :host {
        display: block;
      }
    `],i([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"name",void 0),i([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"label",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"selected",void 0),i([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"value",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"isSelected",void 0),c=i([(0,r.customElement)("switch-input")],c)},7108:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>o});const o={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}}}]);
//# sourceMappingURL=src_addons_network_attendance_meeting_event_link-types_index_ts-src_addons_network_attendance-a286a6.js.map