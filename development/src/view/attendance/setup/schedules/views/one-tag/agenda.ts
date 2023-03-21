import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import { GET_AttendanceScheduleAgenda } from '@@addons/network/attendance/setup/agenda';
import { CONSTANTS } from '@@addons/constants';
import { MeetingAgendaModel } from '@@addons/interfaces/attendance/agenda';


@customElement("attendance-setup-view-one-agenda")
export class AttendanceSetupViewOneAgenda extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleAgendas: NetworkCallPaginResponse_I<MeetingAgendaModel> = null;

  public set _scheduleAgendas(value: NetworkCallPaginResponse_I<MeetingAgendaModel>) {
    this.__scheduleAgendas = value;
    this.requestUpdate();
  }

  public get _scheduleAgendas(): NetworkCallPaginResponse_I<MeetingAgendaModel> {
    return this.__scheduleAgendas;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleAgenda();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/agendas?meeting-event-id=${this.meetingEventId}"
        label="Edit Agenda(s)"></link-button>
      ${this.schedule}
    `;
  }

  private get schedule() {
    return html`${this.table}`;
  }

  private get table() {
    return html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Agenda Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private get tableBody() {
    if (this._scheduleAgendas === null) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `;
    }
    if (this._scheduleAgendas === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Agenda </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    return html`
      ${this._scheduleAgendas.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${item.agenda}" target="_blank">Open File ${_index + 1}</a>
              ${(_index + 1) == __lists.length ? "..." : ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() { }

  private async getAttendanceScheduleAgenda() {
    const _networkResponse = await GET_AttendanceScheduleAgenda<MeetingAgendaModel>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleAgendas = undefined;
    } else {
      this._scheduleAgendas = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
