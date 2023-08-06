"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_admin_register_main_scss-src_addons_functions_https_https_swal_error_-6d1a04"],{95358:(t,e,n)=>{n.r(e)},8967:(t,e,n)=>{n.r(e),n.d(e,{__swalStyle:()=>r,https_swal_error_format:()=>o});const r="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(t,e=!0)=>{if(Array.isArray(t)){let n=(e?r:"")+"<ul>";return t.forEach((t=>{n+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},37141:(t,e,n)=>{n.r(e),n.d(e,{Convert:()=>r,typeMap:()=>c});class r{static toAttendanceAbsentLeaveStatusModel(t){return a(JSON.parse(t),l("AttendanceAbsentLeaveStatusModel"),o)}static attendanceAbsentLeaveStatusModelToJson(t){return JSON.stringify(a(t,l("AttendanceAbsentLeaveStatusModel"),s),null,2)}}function o(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function s(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function a(t,e,n,r=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=c[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const r=t.length;for(let o=0;o<r;o++){const r=t[o];try{return a(e,r,n)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>a(e,t,n)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(t).forEach((e=>{const s=t[e],i=Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;o[s.key]=a(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(r).forEach((s=>{Object.prototype.hasOwnProperty.call(t,s)||(o[s]=a(r[s],e,n,s))})),o}(n(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function i(...t){return{unionMembers:t}}function l(t){return{ref:t}}const c={AttendanceAbsentLeaveStatusModel:(u=[{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"status",js:"status",typ:i(null,"")},{json:"date",js:"date",typ:i(null,Date)}],!1,{props:u,additional:false})};var u},45524:(t,e,n)=>{n.r(e),n.d(e,{GET_AttendanceAbsentLeaveStatus:()=>i});var r=n(48485),o=n(87270),s=n(33600),a=n(14492);function i(t=null,e=""){return n=this,i=void 0,c=function*(){const n=(0,s.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status"+(null===t?"":"/"+t)+e,l=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(t){console.error({error:t});let e=l;return e.error=t,new a.NetWorkCallResponses("get",e,!0)}},new((l=void 0)||(l=Promise))((function(t,e){function r(t){try{s(c.next(t))}catch(t){e(t)}}function o(t){try{s(c.throw(t))}catch(t){e(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof l?n:new l((function(t){t(n)}))).then(r,o)}s((c=c.apply(n,i||[])).next())}));var n,i,l,c}},26224:(t,e,n)=>{n.r(e),n.d(e,{GET_ClientBranches:()=>i});var r=n(48485),o=n(87270),s=n(14492),a=n(33600);function i(t=null){return e=this,n=void 0,l=function*(){const e=(0,a.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===t?"":"/"+t),i=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new s.NetWorkCallResponses("get",i)}catch(t){console.error({error:t});let e=i;return e.error=t,new s.NetWorkCallResponses("get",e,!0)}},new((i=void 0)||(i=Promise))((function(t,r){function o(t){try{a(l.next(t))}catch(t){r(t)}}function s(t){try{a(l.throw(t))}catch(t){r(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,s)}a((l=l.apply(e,n||[])).next())}));var e,n,i,l}},17108:(t,e,n)=>{n.r(e),n.d(e,{PAGE__IDS:()=>r});const r={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}}}]);
//# sourceMappingURL=src_assets_styles_views_admin_register_main_scss-src_addons_functions_https_https_swal_error_-6d1a04.js.map