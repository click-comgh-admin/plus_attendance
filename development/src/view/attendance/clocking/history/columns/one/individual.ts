import '@@addons/widgets/profile_photo';
import '@material/mwc-button';
import { MeetingAttendanceHistoryModel, Convert as mahmConvert } from '@@addons/interfaces/attendance/history';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { base64Encode } from '@@addons/functions/base64';
import { getDate } from '@@addons/functions/date_time/date';


@customElement("pdb-attendance-clocking-history-col-1-ind-profile")
export class PdbAttendanceClockingHistoryColOneIndProfile extends LitElement {
  constructor() { super(); }

  private _historyData: MeetingAttendanceHistoryModel = null;

  public set historyData(value: MeetingAttendanceHistoryModel) {
    this._historyData = value;
    this.requestUpdate();
  }

  public get historyData(): MeetingAttendanceHistoryModel {
    return this._historyData;
  }

  @property({ type: String })
  public filter_start_date_val?: string = null;

  @property({ type: String })
  public filter_end_date_val?: string = null;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    const MEMBER_ID = base64Encode(String(this.historyData?.history?.member?.id), true),
      MEETINGS_LENGTH = this.historyData?.history?.meetings?.length;
    return html`
      <div class="flex whitespace-normal mb-0 flex-col">
        <div class="flex items-center justify-center">
          <user-profile-photo class="w-24 h-24 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
            url="${this.historyData?.history?.member?.profilePicture}" size="24">
          </user-profile-photo>
          <mwc-button class="my-2 ${this.historyData?.status.id === 1? "success": "danger"}" outlined>
            ${this.historyData?.status.name}
          </mwc-button>
        </div>
        <div class="shadow p-2 md:p-4 bg-white rounded text-black">
          <h3 class="font-semibold text-base md:text-lg whitespace-nowrap">${this.historyData?.history?.member?.firstname} ${this.historyData?.history?.member?.middlename} ${this.historyData?.history?.member?.surname}</h3>
          ${
            this.filter_start_date_val.length == 0 || this.filter_end_date_val.length == 0 ? html``:
              html`<p class="text-sm md:text-base">${getDate(new Date(this.filter_start_date_val), { dateStyle: "medium" })} - ${getDate(new Date(this.filter_end_date_val), { dateStyle: "medium" })}</p>`
          }
          <p class="font-bold text-sm md:text-base">${MEETINGS_LENGTH} Meeting${MEETINGS_LENGTH > 1 ? "s" : ""}</p>
          <div class="flex flex-row justify-between mt-2 md:mt-4">
            <span class="text-sm md:text-base">Over-Time</span>
            <b class="text-sm md:text-base">: ${this.historyData?.overtime}</b>
          </div>
          <div class="flex flex-row justify-between mt-2 md:mt-4">
            <span class="text-sm md:text-base">Under-Time</span>
            <b class="text-sm md:text-base">: ${this.historyData?.undertime}</b>
          </div>
        </div>

      </div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}