import '@@assets/styles/views/widget/simple-table/main.scss';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { getDateTime } from '@@addons/functions/date_time';
import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { MDCDataTable } from '@material/data-table';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { MeetingAgendaModel } from '@@addons/interfaces/attendance/agenda';
import { DELETE_AttendanceDeleteScheduleAgenda } from '@@addons/network/attendance/setup/agenda/delete';
import '@@views/attendance/setup/form/edit/links';
import { GET_AttendanceScheduleAgenda } from '@@addons/network/attendance/setup/agenda';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { CONSTANTS } from '@@addons/constants';
import "@@addons/widgets/buttons/link-buttons/link-button";

@customElement("attendance-setup-form-view-agendas")
export class AttendanceSetupFormViewAgendas extends LitElement {
  constructor() {
    super();
  }

  @property({ type: String })
  public email?: string;

  @property({ type: Number })
  public mId?: number;

  @property({ type: Number })
  public clientId?: number;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

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
    this.getMeetingEventId();
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
          <link-button isblockcontent="false" aClass="" bClass="button info mr-2" raised
            href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda-add?meeting-event-id=${this.meetingEventId}"
            label="Add Agenda"></link-button>
        </div>
        <div class="mt-2">${this.display}</div>
      </div>
    `;
  }

  private get display() {
    return html`${this.table}`;
  }

  private get table(): TemplateResult {
    if (this._scheduleAgendas?.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Agenda">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Agenda
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
                ${this.getMeetingAttendanceAgendas}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } if (this._scheduleAgendas === null) {
      return html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `;
    } else {
      return html`
        <div class="flex justify-center shadow bg-white">
          <h3 class="font-bold">No Agenda(s) Found!</h3>
        </div>
      `;
    }
  }

  private get getMeetingAttendanceAgendas() {
    return html`
      ${this._scheduleAgendas.results.map((item: MeetingAgendaModel, i) => {
        const meetingDate = getDateTime(item.meetingDate, { dateStyle: "medium",  });
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              Agenda for <b>${meetingDate}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="flex flex-col md:flex-row justify-end whitespace-normal">
                <div class="m-1">
                  <link-button isblockcontent="false" aClass="" bClass="button success mr-2" raised
                    href="${CONSTANTS.URLS.PDB_CLIENT}settings/meeting-agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${item.id}"
                    label="Open"></link-button>
                </div>
                <div class="m-1">
                  <link-button isblockcontent="false" aClass="" bClass="button warning mr-2" raised
                    href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/agenda?meeting-event-id=${this.meetingEventId}&meeting-agenda-id=${item.id}"
                    label="Update"></link-button>
                </div>
                <div class="m-1">
                  <mwc-icon-button class="ml-1 danger rounded-full" icon="delete_forever" delete-this-item="${item.id}" 
                    @click="${this.deleteQuestionnaireMeetingAttendanceAgenda}">
                  </mwc-icon-button>
                </div>
              </div>
            </td>
          </tr>
        `;
      })}
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

  private async getAttendanceScheduleAgenda() {
    const _networkResponse = await GET_AttendanceScheduleAgenda<MeetingAgendaModel>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleAgendas = undefined;
    } else {
      this._scheduleAgendas = _networkResponse.paginResponse;
    }
  }

    async deleteQuestionnaireMeetingAttendanceAgenda(e: PointerEvent) {
      e.preventDefault();
      // console.log({ e });
      
      // @ts-ignore
      const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
      
      await DELETE_AttendanceDeleteScheduleAgenda(meetingEventId);
    }

  createRenderRoot() {
    return this;
  }
}


