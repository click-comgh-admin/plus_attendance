import '@@assets/styles/views/attendance/setup/form.scss';
import '@@assets/styles/views/widget/simple-table/main.scss';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import '@material/mwc-circular-progress';
import { MDCDataTable } from '@material/data-table';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@@views/attendance/setup/form/edit/links';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';
import { GET_AttendanceScheduleAgenda } from '@@addons/network/attendance/setup/agenda';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingAgendaModel, Convert as mamConvert } from '@@addons/interfaces/attendance/agenda';
import { getDateTime } from '@@addons/functions/date_time';
import { CONSTANTS } from '@@addons/constants';
import "@@addons/widgets/buttons/link-buttons/link-button";

@customElement("attendance-setup-form-view-agenda")
export class AttendanceSetupFormViewAgenda extends LitElement {
  constructor() {
    super();
  }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: String })
  public email?: string;

  @property({ type: Number })
  public mId?: number;

  @property({ type: Number })
  public clientId?: number;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Number })
  private meetingAgendaId?: number = 0;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

  private __scheduleAgenda: MeetingAgendaModel = null;

  public set _scheduleAgenda(value: MeetingAgendaModel) {
    this.__scheduleAgenda = value;
    this.requestUpdate();
  }

  public get _scheduleAgenda(): MeetingAgendaModel {
    return this.__scheduleAgenda;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.getMeetingEventId();
    this.getMeetingAgendaId();
    AppSetup().then(() => this._hasSetup = true);

    await this.getAttendanceScheduleAgenda();
  }

  disconnectedCallback() { }

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.schedule_meeting_event);
      
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.schedule_meeting_event, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <div class="m-1 w-full flex justify-end">
          <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
            href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${this.meetingAgendaId}"
            label="Update"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `;
  }

  private get display() {
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
        ${this.scheduleAgenda}
      `;
    }
  }

  private get scheduleAgenda() {
    const scheduleAgenda = this._scheduleAgenda;
    const meetingDate = getDateTime(scheduleAgenda.meetingDate, { dateStyle: "medium",  });
    return html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting/ Event Agenda">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Meeting/ Event Agenda For ${meetingDate}</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.getMeetingAttendanceAgendas}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private get getMeetingAttendanceAgendas() {
    const scheduleAgenda = this._scheduleAgenda;
    const meetingDate = getDateTime(scheduleAgenda.meetingDate, { dateStyle: "medium",  });
    return html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
          <b>File</b>
        </th>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell !py-1" scope="row">
          ${scheduleAgenda.attachment === null? "No File": html`<a href="${scheduleAgenda.attachment}" target="_blank">Open File</a>`}
        </td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
          <b>Agenda</b>
        </th>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell !py-1" scope="row">
          <div class="whitespace-pre-wrap">${scheduleAgenda.agenda}</div>
        </td>
      </tr>
    `;
  }

  firstUpdated() {
    this.querySelectorAll('[mdc-data-table="data-table"]').forEach((selector) => {
      const dataTable = new MDCDataTable(selector);

      // console.log({ dataTable: dataTable })
    });
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


