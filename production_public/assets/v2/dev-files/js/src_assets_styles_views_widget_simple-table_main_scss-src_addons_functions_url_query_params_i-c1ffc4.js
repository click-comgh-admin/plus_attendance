"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_url_query_params_i-c1ffc4"],{5501:(t,e,n)=>{n.r(e)},4672:(t,e,n)=>{n.r(e),n.d(e,{urlQueryParams:()=>i,urlQueryParamsGet:()=>a,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>o});const i=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},a=t=>{const e=new URLSearchParams(window.location.search),n=Object.fromEntries(e.entries());let i=null;for(const e in n)e===t&&(i=n[e]);return i},s=t=>new URLSearchParams(window.location.search).getAll(t),o=t=>{let e="",n=0;for(const i in t)n+=1,e+=`${n>1?"&":""}${i}=${t[i]}`;return e}},9474:(t,e,n)=>{n.r(e),n.d(e,{BranchIDModel:()=>s,ClientIDModel:()=>o,CountryInfoModel:()=>d,MeetingCategoryModel:()=>m,MeetingEventCategoryModel:()=>i,MeetingEventIDModel:()=>a,MemberCategoryIDModel:()=>r,ModuleModel:()=>l,SubscribedModulesModel:()=>u,SubscriptionInfoModel:()=>c});class i{static fromJson(t){const e=new i;return e.id=t.id,e.meetingEventId=a.fromJson(t.meetingEventId),e.memberCategoryId=r.fromJson(t.memberCategoryId),e.updatedBy=t.updatedBy,e.updateDate=new Date(t.updateDate),e.date=new Date(t.date),e}toJson(){return{id:this.id,meetingEventId:this.meetingEventId.toJson(),memberCategoryId:this.memberCategoryId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}toString(){return JSON.stringify(this.toJson(),null,2)}}class a{static fromJson(t){const e=new a;return e.id=t.id,e.type=t.type,e.memberType=t.memberType,e.name=t.name,e.clientId=o.fromJson(t.clientId),e.branchId=s.fromJson(t.branchId),e.memberCategoryId=r.fromJson(t.memberCategoryId),e.meetingSpan=t.meetingSpan,e.startTime=t.startTime,e.closeTime=t.closeTime,e.latenessTime=t.latenessTime,e.isRecuring=t.isRecuring,e.hasBreakTime=t.hasBreakTime,e.hasDuty=t.hasDuty,e.hasOvertime=t.hasOvertime,e.virtualMeetingLink=t.virtualMeetingLink,e.virtualMeetingType=t.virtualMeetingType,e.meetingLocation=t.meetingLocation,e.expectedMonthlyAttendance=t.expectedMonthlyAttendance,e.activeMonthlyAttendance=t.activeMonthlyAttendance,e.agenda=t.agenda,e.agendaFile=t.agendaFile,e.updatedBy=t.updatedBy,e.updateDate=new Date(t.updateDate),e.date=new Date(t.date),e.meetingCategories=t.meetingCategories.map((t=>m.fromJson(t))),e}toJson(){return{id:this.id,type:this.type,memberType:this.memberType,name:this.name,clientId:this.clientId.toJson(),branchId:this.branchId.toJson(),memberCategoryId:this.memberCategoryId.toJson(),meetingSpan:this.meetingSpan,startTime:this.startTime,closeTime:this.closeTime,latenessTime:this.latenessTime,isRecuring:this.isRecuring,hasBreakTime:this.hasBreakTime,hasDuty:this.hasDuty,hasOvertime:this.hasOvertime,virtualMeetingLink:this.virtualMeetingLink,virtualMeetingType:this.virtualMeetingType,meetingLocation:this.meetingLocation,expectedMonthlyAttendance:this.expectedMonthlyAttendance,activeMonthlyAttendance:this.activeMonthlyAttendance,agenda:this.agenda,agendaFile:this.agendaFile,updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString(),meetingCategories:this.meetingCategories.map((t=>t.toJson()))}}toString(){return JSON.stringify(this.toJson(),null,2)}}class s{static fromJson(t){const e=new s;return e.id=t.id,e.name=t.name,e.accountId=t.accountId,e.createdBy=t.createdBy,e.creationDate=new Date(t.creationDate),e.updatedBy=t.updatedBy,e.updateDate=new Date(t.updateDate),e}toJson(){return{id:this.id,name:this.name,accountId:this.accountId,createdBy:this.createdBy,creationDate:this.creationDate.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString()}}toString(){return JSON.stringify(this.toJson(),null,2)}}class o{static fromJson(t){const e=new o;return e.id=t.id,e.name=t.name,e.accountType=t.accountType,e.country=t.country,e.stateProvince=t.stateProvince,e.applicantFirstname=t.applicantFirstname,e.applicantSurname=t.applicantSurname,e.applicantGender=t.applicantGender,e.applicantPhone=t.applicantPhone,e.applicantEmail=t.applicantEmail,e.applicantDesignationRole=t.applicantDesignationRole,e.region=t.region,e.district=t.district,e.constituency=t.constituency,e.community=t.community,e.subscriptionDuration=t.subscriptionDuration,e.subscriptionDate=new Date(t.subscriptionDate),e.subscriptionFee=t.subscriptionFee,e.logo=t.logo,e.status=t.status,e.archive=t.archive,e.accountCategory=r.fromJson(t.accountCategory),e.website=t.website,e.creationDate=new Date(t.creationDate),e.updatedBy=t.updatedBy,e.updateDate=new Date(t.updateDate),e.subscriptionInfo=c.fromJson(t.subscriptionInfo),e.countryInfo=t.countryInfo.map((t=>d.fromJson(t))),e}toJson(){return{id:this.id,name:this.name,accountType:this.accountType,country:this.country,stateProvince:this.stateProvince,applicantFirstname:this.applicantFirstname,applicantSurname:this.applicantSurname,applicantGender:this.applicantGender,applicantPhone:this.applicantPhone,applicantEmail:this.applicantEmail,applicantDesignationRole:this.applicantDesignationRole,region:this.region,district:this.district,constituency:this.constituency,community:this.community,subscriptionDuration:this.subscriptionDuration,subscriptionDate:this.subscriptionDate.toISOString(),subscriptionFee:this.subscriptionFee,logo:this.logo,status:this.status,archive:this.archive,accountCategory:this.accountCategory.toJson(),website:this.website,creationDate:this.creationDate.toISOString(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),subscriptionInfo:this.subscriptionInfo.toJson(),countryInfo:this.countryInfo.map((t=>t.toJson()))}}toString(){return JSON.stringify(this.toJson(),null,2)}}class r{static fromJson(t){const e=new r;return e.id=t.id,e.clientId=Number.isNaN(t.clientId)?o.fromJson(t.clientId):Number(t.clientId),e.category=t.category,e.createdBy=t.createdBy,e.updatedBy=t.updatedBy,e.updateDate=t.updateDate?new Date(t.updateDate):null,e.date=t.date?new Date(t.date):null,e}toJson(){return{id:this.id,clientId:Number.isNaN(this.clientId)?this.clientId.toJson():this.clientId,category:this.category,createdBy:this.createdBy,updatedBy:this.updatedBy,updateDate:this.updateDate?this.updateDate.toISOString():null,date:this.date?this.date.toISOString():null}}toString(){return JSON.stringify(this.toJson(),null,2)}}class d{static fromJson(t){const e=new d;return e.id=t.id,e.name=t.name,e.short=t.short,e.code=t.code,e}toJson(){return{id:this.id,name:this.name,short:this.short,code:this.code}}toString(){return JSON.stringify(this.toJson(),null,2)}}class c{static fromJson(t){const e=new c;return e.id=t.id,e.client=t.client,e.client_id=t.client_id,e.subscription_id=t.subscription_id,e.subscribed_modules=u.fromJson(t.subscribed_modules),e.date_created=new Date(t.date_created),e}toJson(){return{id:this.id,client:this.client,client_id:this.client_id,subscription_id:this.subscription_id,subscribed_modules:this.subscribed_modules.toJson(),date_created:this.date_created.toISOString()}}toString(){return JSON.stringify(this.toJson(),null,2)}}class u{static fromJson(t){const e=new u;return e["Module 1"]=l.fromJson(t["Module 1"]),e["Module 2"]=l.fromJson(t["Module 2"]),e}toJson(){return{"Module 1":this["Module 1"].toJson(),"Module 2":this["Module 2"].toJson()}}toString(){return JSON.stringify(this.toJson(),null,2)}}class l{static fromJson(t){const e=new l;return e.module_id=t.module_id,e.module_name=t.module_name,e.expires_on=new Date(t.expires_on),e.amount_paid=t.amount_paid,e}toJson(){return{module_id:this.module_id,module_name:this.module_name,expires_on:this.expires_on.toISOString(),amount_paid:this.amount_paid}}toString(){return JSON.stringify(this.toJson(),null,2)}}class m{static fromJson(t){const e=new m;return e.id=t.id,e.meetingEventId=t.meetingEventId,e.memberCategoryId=r.fromJson(t.memberCategoryId),e.updatedBy=t.updatedBy,e.updateDate=new Date(t.updateDate),e.date=new Date(t.date),e}toJson(){return{id:this.id,meetingEventId:this.meetingEventId,memberCategoryId:this.memberCategoryId.toJson(),updatedBy:this.updatedBy,updateDate:this.updateDate.toISOString(),date:this.date.toISOString()}}toString(){return JSON.stringify(this.toJson(),null,2)}}}}]);
//# sourceMappingURL=src_assets_styles_views_widget_simple-table_main_scss-src_addons_functions_url_query_params_i-c1ffc4.js.map