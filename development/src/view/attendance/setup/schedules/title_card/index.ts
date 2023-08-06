import "@material/mwc-button"
// @ts-ignore
import { QueryOptions } from 'select2';
import '@@addons/widgets/form/new/select';
import { LitElement, html, css } from 'lit';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';


@customElement("schedule-title-card")
export class ScheduleTitleCard extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public currentMeetingEventName?: string;

  @property({ type: Number })
  public meetingEventId: number = 0;

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  private startSearchPage: number = 0;

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceSchedule();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <div class="flex justify-end">
        <div class="col-md-6 col-lg-4 px-0 my-2">
          <div class="m-1 border rounded-md">
            <div class="p-2 shadow-sm border rounded-md">
              <h4 class="text-lg font-bold">${
                // @ts-ignore
                `${this.currentMeetingEventName ?? this._schedule == null? "...": this._schedule.data.name}`.replace(/\b\w/g, (match) => match.toUpperCase())
              }</h4>
            </div>
            <div class="p-2">
              ${this.meetingEventField}
            </div>
            <div class="p-2 shadow-sm border rounded-md">
              <div class="flex justify-end ">
                <mwc-button raised class="button success" @click="${this.changeCurrentSchedule}">
                  Change Meeting/ Event
                </mwc-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() { }

  private get meetingEventField() {
    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    // ajaxHeader.Authorization = "Token " + _get_cookie;
    // console.log({ajaxHeader: ajaxHeader});
    // console.log({ "this._meetingEvents": this._meetingEvents });
    return html`
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-12">
            <h4 class="font-semibold my-2">Select Meeting/ Event</h4>
            <select-input class="w-100" id="change_schedule_input_box" name="change_schedule_input_box" label="Select Schedule"
              .ajaxFetchProcessResponse="${this.processClientScheduleSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}attendance/meeting-event/schedule"></select-input>
          </div>
        </div>
      </div>
    `;
  }

  private processClientScheduleSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="change_schedule_input_box"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const id = item['id'];
        const fullName = item['name'];
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});



    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "isRecuring", value: "both" },
      { param: "branchId", value: String(getUserLoginInfoCookie().user.branchId) }
    ]
  }

  private changeCurrentSchedule(event: Event) {
    event.preventDefault();
    this.querySelectorAll('[id="change_schedule_input_box"][name="change_schedule_input_box"]').forEach((input) => {

      // @ts-ignore
      if (input.value.length > 0) {
        // Get the current URL.
        const currentUrl = window.location.href;

        // Create a new URL with the meeting-event-id query parameter set to the new value.
        const newUrl = new URL(currentUrl);

        // @ts-ignore
        newUrl.searchParams.set("meeting-event-id", input.value);

        // Reload the page with the new URL.
        // @ts-ignore
        window.location.href = newUrl;

      }
    });
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
