import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/file-select';
import { GET_AttendanceScheduleAgenda } from '@@addons/network/attendance/setup/agenda';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { MeetingAgendaModel, Convert as mamConvert } from '@@addons/interfaces/attendance/agenda';
import { PUT_AttendanceUpdateScheduleAgenda } from '@@addons/network/attendance/setup/agenda/put';


@customElement("attendance-setup-form-agenda-edit")
export class AttendanceSetupFormAgendaEdit extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  // @property({ type: Array })
  // private _agendaUser: ClientUsers_I[] = [];

  private __agendaUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _agendaUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__agendaUser = value;
    this.requestUpdate();
  }

  public get _agendaUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__agendaUser;
  }

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  // @property({ type: Object })
  // private _schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  private __scheduleAgenda: MeetingAgendaModel = null;

  public set _scheduleAgenda(value: MeetingAgendaModel) {
    this.__scheduleAgenda = value;
    this.requestUpdate();
  }

  public get _scheduleAgenda(): MeetingAgendaModel {
    return this.__scheduleAgenda;
  }

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingAgendaId?: number = 0;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();
    this.getMeetingAgendaId();

    // await this.getAgendaUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleAgenda();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`${this.schedule}`;
  }

  private get schedule() {
    // console.log({ "this._schedule": this._schedule });
    if (this._schedule === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._schedule === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else if (this._schedule.success === true) {
      return html`${this.scheduleAgenda}`;
    } else {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `;
    }
  }

  private get scheduleAgenda() {
    // console.log({ "this._scheduleAgenda": this._scheduleAgenda });

    if (this._scheduleAgenda === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleAgenda === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Agenda</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.form}
      `;
    }
  }

  private get form() {
    const agenda = this.__scheduleAgenda;
    let meetingDate = "";
    if (agenda.meetingDate) {
      const _meetingDate = new Date(agenda.meetingDate),
        __TO_DATE = _meetingDate.toLocaleDateString('en-US', {
          day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
          // @ts-ignore
        }).split('/');
      meetingDate = [__TO_DATE[2], __TO_DATE[0], __TO_DATE[1]].join('-');
    }
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Meeting/ Event Scheduled Agenda</h1>
                  <h3 class="h3">Update Meeting/ Event Scheduled Agenda!</h3>
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
                    <mwc-textfield name="" type="date" class="w-full" id="" disabled
                      .value="${meetingDate }" label="Select Meeting Date" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${agenda?.id === undefined ? "": agenda?.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId??0}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update Agenda" raised class="button" @click="${this.submitForm}">
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
    `;
  }

  firstUpdated() {
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await PUT_AttendanceUpdateScheduleAgenda(this.meetingAgendaId);
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  private getMeetingAgendaId() {
    let meetingAgendaId = urlQueryParamsGet('meeting-agenda-id');
    let _meetingAgendaId = meetingAgendaId !== null ? Number(meetingAgendaId) : null;
    this.meetingAgendaId = Number.isNaN(_meetingAgendaId) ? null : _meetingAgendaId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingAgendaId": this.meetingAgendaId });
  }

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  private async getAttendanceScheduleAgenda() {
    const _networkResponse = await GET_AttendanceScheduleAgenda<MeetingAgendaModel>(
      this.meetingAgendaId, "?meetingEventId=" + this.meetingEventId
    );   
    // console.log({_networkResponse});
    

    if (_networkResponse === null || _networkResponse.response.success === false) {
      this._scheduleAgenda = undefined;
    } else {
      if (_networkResponse.response.success && 'data' in _networkResponse.response) {
        const _data = _networkResponse.response.data;
        const data = Array.isArray(_data) && _data.length > 0 ? _data[0] : _data; 
        this._scheduleAgenda = mamConvert.toMeetingAgendaModel(JSON.stringify(data));
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
