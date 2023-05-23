"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-a983e8"],{6660:(e,t,n)=>{n.r(t)},2368:(e,t,n)=>{n.r(t),n.d(t,{FilterFieldBox:()=>o});var i=n(4672);class o{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{var t,n;e.preventDefault();const i=window.FilterFieldBox.form,o=new FormData(i),r=null===(t=this.unmutableInputNames)||void 0===t?void 0:t.map((e=>e.name));null==o||o.forEach(((e,t)=>{var n;(null==r?void 0:r.includes(t))||null===(n=document.querySelectorAll('[name="'+t+'"]'))||void 0===n||n.forEach((e=>{e.value=""}))})),null===(n=this.unmutableInputNames)||void 0===n||n.map((e=>{var t;const n=e.name,i=e.value;void 0!==i&&(null===(t=document.querySelectorAll('[name="'+n+'"]'))||void 0===t||t.forEach((e=>{e.value=i})))})),i.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},6951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>i,getDateTime:()=>o});const i=(e="")=>{let t=new Date,n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),r=t.getHours(),a=t.getMinutes(),s=t.getSeconds(),l=n+"-"+i+"-"+o,c=r+":"+a+":"+s;return{dateTime:new Date(n,i,o,r,a,s),__string__:l+" "+c,__code__:n+i+o+r+a+s}},o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},101:(e,t,n)=>{n.r(t),n.d(t,{InstanceOfOrganizationMember:()=>s,MemberClockingAdditionalInfo_S:()=>l,MemberClockingInfoFull_S:()=>c});var i=n(2578),o=n(6246),r=n(8530),a=n(7325);const s=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function l(e,t){let n=null;return n=1===t?(0,o.MembershipUser_S)(e.memberInfo):r.Convert.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,phone:String(e.phone),email:String(e.email),facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,i.Date_I)(e.dateJoined),date:(0,i.Date_I)(e.date)}}function c(e){const t=(0,a.MemberClockingInfo_S)(e.attendance);return{attendance:t,additionalInfo:l(e.additionalInfo,t.accountType),lastSeen:(0,i.Date_I)(e.lastSeen),status:String(e.status)}}},3464:(e,t,n)=>{function i(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>i})},2583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>o});var i=n(3464);function o(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},2869:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>i})},5069:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericMeetingEventClockingTypeInfo_S:()=>i})},3437:(e,t,n)=>{n.r(t),n.d(t,{GroupingsGroup_S:()=>o});var i=n(267);function o(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.r(t),n.d(t,{GroupingsSubGroup_S:()=>o}),n(2892);var i=n(267);function o(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},4707:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceCancelClocking:()=>u});var i=n(6455),o=n.n(i),r=n(8485),a=n(7270),s=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/cancel-clocking/"+e,i={};return o().fire({title:"Cancel Clocking?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"PATCH",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!0).then((e=>{const t=new s.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},6232:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockIn:()=>u});var i=n(6455),o=n.n(i),r=n(8485),a=n(7270),s=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,c.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-in/"+e,u=null===t?{}:{time:t};return o().fire({title:"Clock In?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new s.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},8572:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingClockOut:()=>u});var i=n(6455),o=n.n(i),r=n(8485),a=n(7270),s=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,c.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/clock-out/"+e,u=null===t?{}:{time:t};return o().fire({title:"Clock Out?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new s.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},1184:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingEndBreak:()=>u});var i=n(6455),o=n.n(i),r=n(8485),a=n(7270),s=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,c.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/end-break/"+e,u=null===t?{}:{time:t};return o().fire({title:"End Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new s.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},6719:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingStartBreak:()=>u});var i=n(6455),o=n.n(i),r=n(8485),a=n(7270),s=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};function u(e,t=null){return d(this,void 0,void 0,(function*(){const n=(0,c.getUserLoginInfoCookie)(),i=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/start-break/"+e,u=null===t?{}:{time:t};return o().fire({title:"Start Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(i,{method:"PATCH",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{const t=new s.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},1148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},7824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},4843:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},2734:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},1694:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=""){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},7435:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=""){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},6972:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=""){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},2218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},8786:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},7553:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericGender:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},4115:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMeetingEventClockingType:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},72:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),s=yield(0,o.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function o(e){try{a(l.next(e))}catch(e){i(e)}}function r(e){try{a(l.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,r)}a((l=l.apply(t,n||[])).next())}));var t,n,s,l}},9605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>s});var i=n(8485),o=n(7270),r=n(4492),a=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,l=yield(0,o.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function o(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,o)}r((c=c.apply(n,s||[])).next())}));var n,s,l,c}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>s});var i=n(5862),o=n(9662),r=(n(9975),n(6788),function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};s.styles=[i.css`
      :host {
        display: block;
      }
    `],r([(0,o.property)({type:String}),a("design:type",String)],s.prototype,"name",void 0),r([(0,o.property)({type:String}),a("design:type",String)],s.prototype,"label",void 0),r([(0,o.property)({type:Boolean}),a("design:type",Boolean)],s.prototype,"selected",void 0),r([(0,o.property)({type:String}),a("design:type",String)],s.prototype,"value",void 0),r([(0,o.property)({type:Boolean}),a("design:type",Boolean)],s.prototype,"isSelected",void 0),s=r([(0,o.customElement)("switch-input")],s)},7546:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirst:()=>c});var i=n(7325),o=n(101),r=(n(8281),n(5862)),a=n(9662),s=(n(1984),n(2846),function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.memberProfileBaseUrl="/member/member-profile?view="}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,o.MemberClockingInfoFull_S)(e)):(this.fullInfo=!1,this.clockingInfo=(0,i.MemberClockingInfo_S)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const i=e?n.attendance.clockingMethodName:t.clockingMethodName,a=e?n.lastSeen:null;return(e?(0,o.InstanceOfOrganizationMember)(n.additionalInfo.memberInfo):(0,o.InstanceOfOrganizationMember)(t.memberId))?r.html`<clocker-table-parts-first-organization .lastSeen="${a}" clockingMethodName="${i}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-organization>`:r.html`<clocker-table-parts-first-individual .lastSeen="${a}" clockingMethodName="${i}" .memberData=${e?n.additionalInfo.memberInfo:t.memberId}></clocker-table-parts-first-individual>`}return null}firstUpdated(){}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],s([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"fullInfo",void 0),s([(0,a.property)({type:String}),l("design:type",String)],c.prototype,"clocking_info",void 0),s([(0,a.property)({type:String}),l("design:type",String)],c.prototype,"memberProfileBaseUrl",void 0),c=s([(0,a.customElement)("clocker-table-parts-first"),l("design:paramtypes",[])],c)},1984:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirstIndividual:()=>d});var i,o=n(7052),r=n(6951),a=(n(8281),n(5862)),s=n(9662),l=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends a.LitElement{constructor(){super(),this.clockingMethodName="???",this.lastSeen=null,this._memberData=null,this.memberProfileBaseUrl="/member/member-profile?view="}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){const e=(0,o.base64Encode)(String(this._memberData.id),!0),t=a.html`<div class="text-center whitespace-nowrap">
      <span class="badge badge-light shadow p-2 m-1">
        <b>Last Seen</b>: ${(0,r.getDateTime)(this.lastSeen,{dateStyle:"medium",timeStyle:"short"})}
      </span>
    </div>`;return a.html`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${e}" type="member"
            url="${this._memberData.profilePicture}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.firstname} ${this._memberData.middlename} ${this._memberData.surname}
          </span>
        </div>
        ${null===this.lastSeen||void 0===this.lastSeen?a.nothing:t}
      </div>`}firstUpdated(){}createRenderRoot(){return this}};d.styles=[a.css`
   :host { display: block; }
  `],l([(0,s.property)({type:String}),c("design:type",String)],d.prototype,"clockingMethodName",void 0),l([(0,s.property)({type:Date}),c("design:type","function"==typeof(i="undefined"!=typeof Date&&Date)?i:Object)],d.prototype,"lastSeen",void 0),l([(0,s.property)({type:String}),c("design:type",String)],d.prototype,"memberProfileBaseUrl",void 0),d=l([(0,s.customElement)("clocker-table-parts-first-individual"),c("design:paramtypes",[])],d)},2846:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsFirstOrganization:()=>d});var i,o=n(7052),r=n(6951),a=(n(8281),n(5862)),s=n(9662),l=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends a.LitElement{constructor(){super(),this.clockingMethodName="???",this.lastSeen=null,this._memberData=null}set memberData(e){this._memberData=e,this.requestUpdate()}get memberData(){return this._memberData}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){(0,o.base64Encode)(String(this._memberData.id),!0);const e=a.html`<div class="text-center whitespace-nowrap">
        <span class="badge badge-light shadow p-2 m-1">
        <b>Last Seen</b>: ${(0,r.getDateTime)(this.lastSeen,{dateStyle:"medium",timeStyle:"short"})}
        </span>
      </div>`;return a.html`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded type="member"
            url="${this._memberData.logo}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.organizationName}
          </span>
        </div>
        ${null===this.lastSeen||void 0===this.lastSeen?a.nothing:e}
      </div>`}firstUpdated(){}createRenderRoot(){return this}};d.styles=[a.css`
   :host { display: block; }
  `],l([(0,s.property)({type:String}),c("design:type",String)],d.prototype,"clockingMethodName",void 0),l([(0,s.property)({type:Date}),c("design:type","function"==typeof(i="undefined"!=typeof Date&&Date)?i:Object)],d.prototype,"lastSeen",void 0),d=l([(0,s.customElement)("clocker-table-parts-first-organization"),c("design:paramtypes",[])],d)},7601:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsSecond:()=>g,getClockingTimeInfo:()=>m,setClockingTimeInfo:()=>p});var i=n(6951),o=n(7325),r=n(101),a=n(6232),s=n(6719),l=n(5862),c=n(9662),d=(n(6413),function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}),u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};const p=(e,t)=>{window.clocker={clockingTimeInfo:{clockingTime:e,clockingTimeValue:t}}},m=()=>{if("clocker"in window){const e=window.clocker.clockingTimeInfo;if("clockingTime"in e)return{clockingTime:e.clockingTime,clockingTimeValue:e.clockingTimeValue}}return null};let g=class extends l.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingTimeValue="",this.clocking=!1,this.clockingTime=!1,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.pageButtonAccess=!1}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback(),console.log({"this.pageButtonAccess":this.pageButtonAccess});const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,r.MemberClockingInfoFull_S)(e)):(this.fullInfo=!1,this.clockingInfo=(0,o.MemberClockingInfo_S)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const o=(0,i.getDateTime)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),r=e?n.attendance.inTime:t.inTime,a=null!==r?(0,i.getDateTime)(r,{dateStyle:"medium",timeStyle:"short"}):"--:--",s=e?n.attendance.id:t.id,c=e?n.attendance.inOrOut:t.inOrOut,d=e?n.attendance.startBreak:t.startBreak,u=null!==d?(0,i.getDateTime)(d,{dateStyle:"medium",timeStyle:"short"}):"--:--",h=new Date,p=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,m=(e?n.attendance.date.toDateString():t.date.toDateString())===h.toDateString();return l.html`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?l.html`
            <input type="checkbox" multi-break-check-in="${s}" name="member_check_in_${s}"
              id="member_check_in_${s}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:l.nothing}
            <label for="member_check_in_${s}">@ ${o}</label>
          </div>
        </div>
        ${this.clocking?l.html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${s}" clock-user="in">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-success mx-1">${m?l.html`Today`:l.html`Post Clocking`}</span>
          ${c?l.html`
          <span class="badge badge-success bg-grow-early mx-1">Present</span>`:l.html`
          <span class="badge badge-danger mx-1">Not Clocked</span>
          `}
        </div>
        `:l.html`
          <div class="text-center flex justify-evenly whitespace-nowrap">
            <a href="tel://${n.additionalInfo.phone}">
              <mwc-icon-button class="bg-sunny-morning text-white" icon="call"></mwc-icon-button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+${n.additionalInfo.whatsapp}&amp;text=">
              <mwc-icon-button class="bg-grow-early text-white" icon="whatsapp"></mwc-icon-button>
            </a>
          </div>
        `}
        ${c&&null!==r?l.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${a}
          </span>
        </div>`:""}
        ${this.clocking?l.html`
          ${p?l.html`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${s}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `:""}
        `:l.nothing}
        ${null!==d?l.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break Start Time</b>: ${u}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),setInterval((()=>{const e=m();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}clockUser(){const e="clock-user";document.querySelectorAll("["+e+"]").forEach((t=>{"in"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.clockInUser(t,e)}))}))}clockInUser(e,t){return h(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,a.PATCH_AttendanceClockingClockIn)(t,this.clockingTimeValue):yield(0,a.PATCH_AttendanceClockingClockIn)(t)}}))}userBreak(){const e="user-break";document.querySelectorAll("["+e+"]").forEach((t=>{"start"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.startUserBreak(t,e)}))}))}startUserBreak(e,t){return h(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,s.PATCH_AttendanceClockingStartBreak)(t,this.clockingTimeValue):yield(0,s.PATCH_AttendanceClockingStartBreak)(t)}}))}createRenderRoot(){return this}};g.styles=[l.css`
   :host { display: block; }
  `],d([(0,c.property)({type:String}),u("design:type",String)],g.prototype,"clockingTimeValue",void 0),d([(0,c.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"clocking",void 0),d([(0,c.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"clockingTime",void 0),d([(0,c.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"fullInfo",void 0),d([(0,c.property)({type:String}),u("design:type",String)],g.prototype,"clocking_info",void 0),d([(0,c.property)({type:Boolean}),u("design:type",Boolean)],g.prototype,"pageButtonAccess",void 0),g=d([(0,c.customElement)("clocker-table-parts-second"),u("design:paramtypes",[])],g)},3961:(e,t,n)=>{n.r(t),n.d(t,{ClockerTablePartsThird:()=>f});var i=n(7052),o=n(6951),r=n(7325),a=n(101),s=n(4707),l=n(8572),c=n(1184),d=n(5862),u=n(9662),h=n(7601),p=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};let f=class extends d.LitElement{constructor(){super(),this._data=null,this._type=null,this.clockingInfo=null,this.fullInfo=!1,this.clocking_info="",this.clocking=!1,this.clockingTimeValue="",this.clockingTime=!1,this.excuseBaseUrl="/clocking/excuse?clocking-id=",this.followUpBaseUrl="/clocking/follow-up?clocking-id=",this.pageButtonAccess=!1}set data(e){this._data=e,this.requestUpdate()}get data(){return this._data}set type(e){this._type=e,this.requestUpdate()}get type(){return this._type}connectedCallback(){super.connectedCallback();const e=JSON.parse(this.clocking_info);null!==e&&("attendance"in e&&"additionalInfo"in e&&"lastSeen"in e&&"status"in e?(this.fullInfo=!0,this.clockingInfo=(0,a.MemberClockingInfoFull_S)(e)):(this.fullInfo=!1,this.clockingInfo=(0,r.MemberClockingInfo_S)(e)))}disconnectedCallback(){}get getClockingInfo(){return this.clockingInfo}get getClockingInfoFull(){return this.clockingInfo}render(){const e=this.fullInfo,t=this.getClockingInfo,n=this.getClockingInfoFull;if(null!==t&&null!==n){const r=(0,o.getDateTime)(e?n.attendance.date:t.date,{dateStyle:"medium",timeStyle:"short"}),a=e?n.attendance.outTime:t.outTime,s=null!==a?(0,o.getDateTime)(a,{dateStyle:"medium",timeStyle:"short"}):"--:--",l=e?n.attendance.id:t.id,c=e?n.attendance.inOrOut:t.inOrOut,u=e?n.attendance.endBreak:t.endBreak,h=null!==u?(0,o.getDateTime)(u,{dateStyle:"medium",timeStyle:"short"}):"--:--",p=e?n.attendance.meetingEventId.hasBreakTime:t.meetingEventId.hasBreakTime,m=e?n.attendance.justification:t.justification,g=(0,i.base64Encode)(String(l),!0);return d.html`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking?d.html`
            <input type="checkbox" multi-break-check-out="${l}" name="member_check_out_${l}"
              id="member_check_out_${l}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `:d.nothing}
            <label for="member_check_out_${l}">@ ${r}</label>
          </div>
        </div>
        ${this.clocking?d.html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${l}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${l}"
            cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-warning">'X' to Cancel Attendance</span>
        </div>
        `:d.nothing}
        <div class="text-center whitespace-nowrap">
          ${""}
            ${null===m?d.nothing:d.html`<span class="badge badge-light shadow p-2 m-1">
              <b>Justification</b>: ${m}
            </span>`}
          <a href="${this.followUpBaseUrl}${g}" class="btn btn-primary btn-sm" target="_blank" type="button">Follow-Up</a>
        </div>
        ${c&&null!==a?d.html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${s}
          </span>
        </div>`:""}
        ${this.clocking?d.html`
        ${p?d.html`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${l}" user-break="end"
            icon="close">
          </mwc-button>
        </div>
        `:""}
        `:d.nothing}
        ${null!==u?d.html`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${h}
          </span>
        </div>`:""}
      `}return null}firstUpdated(){this.clockUser(),this.userBreak(),this.cancelClocking(),setInterval((()=>{const e=(0,h.getClockingTimeInfo)();null!==e&&(this.clockingTime=e.clockingTime,this.clockingTimeValue=e.clockingTimeValue)}))}cancelClocking(){document.querySelectorAll('[cancel-user-clock="true"]').forEach((e=>{e.addEventListener("click",(t=>g(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));yield(0,s.PATCH_AttendanceCancelClocking)(t)}}))))}))}clockUser(){const e="clock-user";document.querySelectorAll("["+e+"]").forEach((t=>{"out"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.clockOutUser(t,e)}))}))}clockOutUser(e,t){return g(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const t=Number(e.getAttribute("clock-id"));this.clockingTime?yield(0,l.PATCH_AttendanceClockingClockOut)(t,this.clockingTimeValue):yield(0,l.PATCH_AttendanceClockingClockOut)(t)}}))}userBreak(){const e="user-break";document.querySelectorAll("["+e+"]").forEach((t=>{"end"===t.getAttribute(e)&&t.addEventListener("click",(e=>{this.endUserBreak(t,e)}))}))}endUserBreak(e,t){return g(this,void 0,void 0,(function*(){if(t.preventDefault(),this.pageButtonAccess){const n=Number(e.getAttribute("clock-id"));console.log({e:t,element:e,CLOCK_ID:n}),this.clockingTime?yield(0,c.PATCH_AttendanceClockingEndBreak)(n,this.clockingTimeValue):yield(0,c.PATCH_AttendanceClockingEndBreak)(n)}}))}createRenderRoot(){return this}};f.styles=[d.css`
   :host { display: block; }
  `],p([(0,u.property)({type:Boolean}),m("design:type",Boolean)],f.prototype,"fullInfo",void 0),p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"clocking_info",void 0),p([(0,u.property)({type:Boolean}),m("design:type",Boolean)],f.prototype,"clocking",void 0),p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"clockingTimeValue",void 0),p([(0,u.property)({type:Boolean}),m("design:type",Boolean)],f.prototype,"clockingTime",void 0),p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"excuseBaseUrl",void 0),p([(0,u.property)({type:String}),m("design:type",String)],f.prototype,"followUpBaseUrl",void 0),p([(0,u.property)({type:Boolean}),m("design:type",Boolean)],f.prototype,"pageButtonAccess",void 0),f=p([(0,u.customElement)("clocker-table-parts-third"),m("design:paramtypes",[])],f)},997:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>E}),n(3794);var i,o,r,a,s,l=n(5862),c=n(9662),d=n(7725),u=n(7052),h=n(4672),p=(n(1511),n(2715),n(8763),n(5474),n(6163),n(2583)),m=n(2506),g=n(3600),f=n(3283),y=n(1694),v=n(7435),b=n(2734),_=n(6972),w=(n(3690),n(1148)),k=n(8698),S=n(7824),A=n(8881),C=n(2218),B=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};let E=class extends l.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return T(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,g.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return l.html`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?l.html`
        ${this.nowSectionData}
      `:2===this.formId?l.html`
        ${this.todaySectionData}
      `:3===this.formId?l.html`
        ${this.upcomingSectionData}
      `:4===this.formId?l.html`
        ${this.dateSectionData}
      `:l.html`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=l.html`<h4 class="text-white">Empty</h4>`,t=l.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return l.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:l.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:l.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:l.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=l.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return l.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?l.html`${e}${this.notFound}`:l.html`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return l.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return l.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):l.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,u.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),o=this.getTime(String(e.closeTime));return l.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${o} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,A.until)(this.getAttendanceScheduleDay(t),l.html`<span>Loading...</span>`):(0,A.until)(this.getAttendanceScheduleDate(t),l.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,h.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,u.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,m.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,p.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceAllSchedules(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,C.GET_AttendanceSchedule)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,y.GET_AttendanceScheduleNow)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,v.GET_AttendanceScheduleToday)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return T(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return T(this,void 0,void 0,(function*(){const t=yield(0,S.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return l.html`<li class="border p-1">Every ${(0,A.until)(this.getDayOfWeek(t),l.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return l.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return T(this,void 0,void 0,(function*(){const t=yield(0,w.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return T(this,void 0,void 0,(function*(){const t=yield(0,k.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e+"&length=1000");if(null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return l.html`<li class="border p-1">On ${t}</li>`}));return l.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};E.styles=[l.css`
   :host { display: block; }
  `],B([(0,c.query)("#getNowMeetingsBtn"),I("design:type","function"==typeof(i=void 0!==f.Button&&f.Button)?i:Object)],E.prototype,"getNowMeetingsBtn",void 0),B([(0,c.query)("#getAllMeetingsBtn"),I("design:type","function"==typeof(o=void 0!==f.Button&&f.Button)?o:Object)],E.prototype,"getAllMeetingsBtn",void 0),B([(0,c.query)("#getTodayMeetingsBtn"),I("design:type","function"==typeof(r=void 0!==f.Button&&f.Button)?r:Object)],E.prototype,"getTodayMeetingsBtn",void 0),B([(0,c.query)("#getUpcomingMeetingsBtn"),I("design:type","function"==typeof(a=void 0!==f.Button&&f.Button)?a:Object)],E.prototype,"getUpcomingMeetingsBtn",void 0),B([(0,c.query)("#getDateMeetingsBtn"),I("design:type","function"==typeof(s=void 0!==f.Button&&f.Button)?s:Object)],E.prototype,"getDateMeetingsBtn",void 0),B([(0,c.property)({type:String}),I("design:type",String)],E.prototype,"todayDate",void 0),B([(0,c.property)({type:Number}),I("design:type",Number)],E.prototype,"meetingEventId",void 0),B([(0,c.property)({type:Number}),I("design:type",Number)],E.prototype,"loggedUserId",void 0),B([(0,c.property)({type:Number}),I("design:type",Number)],E.prototype,"formId",void 0),B([(0,c.property)({type:Boolean}),I("design:type",Boolean)],E.prototype,"allowFetch",void 0),B([(0,c.property)({type:Boolean}),I("design:type",Boolean)],E.prototype,"recurring",void 0),B([(0,c.property)({type:String}),I("design:type",String)],E.prototype,"openContentBaseUrl",void 0),B([(0,c.property)({type:String}),I("design:type",String)],E.prototype,"openMeetingEventBaseUrl",void 0),B([(0,c.property)({type:Array}),I("design:type",Array)],E.prototype,"_pageAccesses",void 0),B([(0,c.property)({type:Array}),I("design:type",Array)],E.prototype,"_activeBranchId",void 0),B([(0,c.property)({type:Array}),I("design:type",Array)],E.prototype,"_userLoginInfo",void 0),E=B([(0,c.customElement)("pdb-attendance-clocking-meeting-picker"),I("design:paramtypes",[])],E)},3629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>u}),n(6660);var i,o,r=n(5862),a=n(9662),s=n(72),l=(n(5866),function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((i=i.apply(e,t||[])).next())}))};let u=class extends r.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?r.html`
        ${this.materialSelectField}
      `:r.html`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?r.html`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:r.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((n=>{n===e.id&&(t=!0)})),t?r.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let n=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(n=!0)}));let i=!1,o="false";n&&(i=!0,o="true");const r={id:t.id,name:t.category,isSelected:o,selected:i};e.includes(r)||e.push(r)}));let t=r.html`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return r.html`${t}`}get selectField(){let e=r.html``;return e=this.setDefaultValues.length<1?r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>r.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((n=>{n===e.id&&(t=!0)})),t?r.html`<option value="${e.id}" selected>${e.category}</option>`:r.html`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,r.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return d(this,void 0,void 0,(function*(){const e=yield(0,s.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};u.styles=[r.css`
   :host { display: block; }
  `],l([(0,a.property)({type:String}),c("design:type",String)],u.prototype,"material",void 0),l([(0,a.property)({type:Number}),c("design:type",Number)],u.prototype,"defaultValue",void 0),l([(0,a.property)({type:Array}),c("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],u.prototype,"defaultValues",void 0),l([(0,a.property)({type:Array}),c("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],u.prototype,"setDefaultValues",void 0),l([(0,a.property)({type:Number}),c("design:type",Number)],u.prototype,"selectedCategory",void 0),l([(0,a.property)({type:Boolean}),c("design:type",Boolean)],u.prototype,"multiple",void 0),l([(0,a.property)({type:Boolean}),c("design:type",Boolean)],u.prototype,"required",void 0),l([(0,a.property)({type:String}),c("design:type",String)],u.prototype,"label",void 0),l([(0,a.property)({type:String}),c("design:type",String)],u.prototype,"name",void 0),l([(0,a.property)({type:String}),c("design:type",String)],u.prototype,"id",void 0),l([(0,a.property)({type:String}),c("design:type",String)],u.prototype,"tag_class",void 0),l([(0,a.property)({type:String}),c("design:type",String)],u.prototype,"css_style",void 0),l([(0,a.property)({type:Array}),c("design:type",Array)],u.prototype,"_memberCategories",void 0),u=l([(0,a.customElement)("pdb-membership-select-member-type"),c("design:paramtypes",[])],u)}}]);
//# sourceMappingURL=src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-a983e8.js.map