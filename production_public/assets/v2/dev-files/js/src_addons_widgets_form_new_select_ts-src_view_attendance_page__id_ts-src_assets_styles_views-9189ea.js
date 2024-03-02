"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea"],{93036:(e,t,s)=>{s.r(t)},75866:(e,t,s)=>{s.r(t),s.d(t,{SelectInput:()=>l});var o=s(19755),r=s(85862),i=s(59662),a=(s(40686),s(93036),function(e,t,s,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(i<3?r(a):i>3?r(t,s,a):r(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let s=!1;return this.value.forEach((e=>{const o=e.id;s=t===o})),e.selected=s,e}))}render(){return this.multiple?this.required?r.html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.html`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.html`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.html`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.html`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?r.html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.html`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.html`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.html`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.html`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:o(this.value.map((t=>{const s=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+s+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const s=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(s.selectSelector).empty(),s.startSearchPage=0})),s.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,s=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{o(e).select2({closeOnSelect:!1,placeholder:this.label}),o(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((i=>{o(i).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const i=function(r,i){return s=isNaN(r.page)?0:r.page,s=0===s?s:s*t,o(".select2-search__field").on("keyup",(function(r){o(e.selectSelector).empty(),s=0,t=0})),s}(r),a=function(s,r){let i=isNaN(s.page)?1:s.page+1;return i=0===i?1:i,o(".select2-search__field").on("keyup",(function(s){o(e.selectSelector).empty(),i=0,t=0})),i}(r);let n={search:r.term,start:i,page:a};return e.ajaxFetchUrlParams.forEach((e=>{n[e.param]=e.value})),n},headers:r,processResults:(e,s)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,s):this.ajaxFetchProcessResponse(e,s);return t+=o.results.length,{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{s=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const s=e;t.page=t.page||0;let o=[];if(!1===s.error){var r=s.data;for(let e=0;e<r.length;e++){const t=r[e],s={id:t.id,text:t.fullName};o.includes(s)||o.push(s)}}return this.totalShowing+=o.length,{results:o,total:s.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let s=[];for(const e of t){let t=e;const o=Number.isNaN(t.value)?0:Number(t.value);s.includes(o)||s.push(o)}this.currentValue=s,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",s)}createRenderRoot(){return this}};l.styles=[r.css`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,i.property)({type:String}),n("design:type",String)],l.prototype,"name",void 0),a([(0,i.property)({type:String}),n("design:type",String)],l.prototype,"label",void 0),a([(0,i.property)({type:Array}),n("design:type",Array)],l.prototype,"value",void 0),a([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"randomID",void 0),a([(0,i.property)({type:String}),n("design:type",String)],l.prototype,"input_id",void 0),a([(0,i.property)({type:Array}),n("design:type",Array)],l.prototype,"options",void 0),a([(0,i.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"required",void 0),a([(0,i.property)({type:String}),n("design:type",String)],l.prototype,"ajaxFetchToken",void 0),a([(0,i.property)({type:String}),n("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),a([(0,i.property)({attribute:!1}),n("design:type",Object)],l.prototype,"currentValue",void 0),a([(0,i.property)({type:Object}),n("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),a([(0,i.property)({type:Array}),n("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),a([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"startSearchPage",void 0),a([(0,i.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"multiple",void 0),a([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"startNumber",void 0),a([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"rowsPerPage",void 0),a([(0,i.property)({type:Number}),n("design:type",Number)],l.prototype,"totalShowing",void 0),a([(0,i.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=a([(0,i.customElement)("select-input")],l)},17108:(e,t,s)=>{s.r(t),s.d(t,{PAGE__IDS:()=>o});const o={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}}}]);
//# sourceMappingURL=src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea.js.map