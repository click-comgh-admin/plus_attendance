import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, } from 'lit';
import { customElement, property, query, } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/file-select';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { POST_AttendanceAddScheduleAgenda } from '@@addons/network/attendance/setup/agenda/post';
import { MeetingAgendaModel, Convert as mamConvert } from '@@addons/interfaces/attendance/agenda';


@customElement("attendance-setup-form-agenda-add")
export class AttendanceSetupFormAgendaAdd extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

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

  private __scheduleAgendas: NetworkCallPaginResponse_I<MeetingAgendaModel> = null;

  public set _scheduleAgendas(value: NetworkCallPaginResponse_I<MeetingAgendaModel>) {
    this.__scheduleAgendas = value;
    this.requestUpdate();
  }

  public get _scheduleAgendas(): NetworkCallPaginResponse_I<MeetingAgendaModel> {
    return this.__scheduleAgendas;
  }

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getAgendaUsers();  

    await this.getAttendanceSchedule();
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
    return html`
      ${this.form}
    `;
  }

  private get form() {
    // <!-- <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addAgendaField}">
    // </mwc-icon-button> -->
    return html`
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
    `;
  }

  firstUpdated() {
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await POST_AttendanceAddScheduleAgenda();
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  createRenderRoot() {
    return this;
  }
}
