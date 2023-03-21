"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_attendance_setup_form_forms_agenda_add_ts"],{1862:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAgendaAdd:()=>h}),n(5501);var s,d=n(5862),a=n(9662),l=(n(3283),n(6034),n(3313),n(6413),n(1511),n(2461),n(2218)),i=n(4672),c=(n(5866),n(4183)),r=function(e,t,n,s){var d,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(d=e[i])&&(l=(a<3?d(l):a>3?d(t,n,l):d(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,n,s){return new(n||(n=Promise))((function(d,a){function l(e){try{c(s.next(e))}catch(e){a(e)}}function i(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?d(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((s=s.apply(e,t||[])).next())}))};let h=class extends d.LitElement{constructor(){super(),this.CLIENT_ID=0,this.__agendaUser=null,this.__schedule=null,this.__scheduleAgendas=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _agendaUser(e){this.__agendaUser=e,this.requestUpdate()}get _agendaUser(){return this.__agendaUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAgendas(e){this.__scheduleAgendas=e,this.requestUpdate()}get _scheduleAgendas(){return this.__scheduleAgendas}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,i.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return d.html`${this.schedule}`}get schedule(){return null===this._schedule?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?d.html`${this.scheduleAgenda}`:d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAgenda(){return null===this._scheduleAgendas?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAgendas?d.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `:d.html`
        ${this.form}
      `}get form(){return d.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Agenda</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Agenda!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-agenda">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="attachment" name="attachment" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Meeting Date</h4>
                    <mwc-textfield name="meetingDate" type="date" class="w-full" id="meetingDate"
                      value="" label="Select Meeting Date" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="" outlined required>
                    </mwc-textarea>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Agenda" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return u(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.POST_AttendanceAddScheduleAgenda)()}))}getMeetingEventId(){let e=(0,i.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return u(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}createRenderRoot(){return this}};h.styles=[d.css`
   :host { display: block; }
  `],r([(0,a.property)({type:Number}),o("design:type",Number)],h.prototype,"CLIENT_ID",void 0),r([(0,a.property)({type:Array}),o("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],h.prototype,"_data",void 0),r([(0,a.property)({type:Object}),o("design:type",Object)],h.prototype,"urlQueryParams",void 0),r([(0,a.property)({type:Number}),o("design:type",Number)],h.prototype,"meetingEventId",void 0),h=r([(0,a.customElement)("attendance-setup-form-agenda-add"),o("design:paramtypes",[])],h)}}]);
//# sourceMappingURL=src_view_attendance_setup_form_forms_agenda_add_ts.js.map