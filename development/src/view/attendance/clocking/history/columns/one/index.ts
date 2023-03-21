import { MeetingAttendanceHistoryModel, Convert as mahmConvert } from '@@addons/interfaces/attendance/history';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import './individual';
import './organization';


@customElement("pdb-attendance-clocking-history-col-1")
export class PdbAttendanceClockingHistoryColOne extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public historyDataStr?: string = null;

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

  connectedCallback() {
    super.connectedCallback();

    this.format_str_history_data()
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    let profile = html``;
    if (this.historyData.history.member.accountType === 1) {
      profile = html`<pdb-attendance-clocking-history-col-1-ind-profile filter_start_date_val="${this.filter_start_date_val}"
        filter_end_date_val="${this.filter_end_date_val}" .historyData="${this.historyData}">
        </pdb-attendance-clocking-history-col-1-ind-profile>
      `;
    } else {
      profile = html`<pdb-attendance-clocking-history-col-1-org-profile filter_start_date_val="${this.filter_start_date_val}"
        filter_end_date_val="${this.filter_end_date_val}" .historyData="${this.historyData}">
        </pdb-attendance-clocking-history-col-1-org-profile>
      `;
    }
    return html`<div>${profile}</div>`;
  }

  firstUpdated() { }

  format_str_history_data() {
    if (this.historyData === null && this.historyDataStr !== null) {
      this.historyData = mahmConvert.toMeetingAttendanceHistoryModel(this.historyDataStr);
    }
  }

  createRenderRoot() {
    return this;
  }
}
