import { MeetingAttendanceHistoryModel, Convert as mahmConvert } from '@@addons/interfaces/attendance/history';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import './content';


@customElement("pdb-attendance-clocking-history-col-2")
export class PdbAttendanceClockingHistoryColTwo extends LitElement {
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
    return html`<pdb-attendance-clocking-history-col-2-content
      .historyData="${this.historyData}">
      </pdb-attendance-clocking-history-col-2-content>`;
  }

  firstUpdated() {}

  format_str_history_data() {
    if (this.historyData === null && this.historyDataStr !== null) {
      this.historyData = mahmConvert.toMeetingAttendanceHistoryModel(this.historyDataStr);
    }
  }

  createRenderRoot() {
    return this;
  }
}
