import '@@addons/widgets/profile_photo';
import '@material/mwc-button';
import { MeetingAttendanceHistoryModel, Convert as mahmConvert } from '@@addons/interfaces/attendance/history';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import './breakdown';


@customElement("pdb-attendance-clocking-history-col-2-content")
export class PdbAttendanceClockingHistoryColTwoContent extends LitElement {
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
  private dialog_prefix: string = "member-attendance-history";

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
    const MEETINGS_LENGTH = this.historyData.history.meetings.length;
    let breakdown = html``;
    if (MEETINGS_LENGTH > 0) {
      breakdown = html`
        <mwc-button class="my-2 success" @click="${this.showDialog}" raised 
          open-dialog-btn="${this.dialog_prefix}-${this.historyData.history.member.id}">
          Show Breakdown
        </mwc-button>
        <pdb-attendance-clocking-history-col-2-content-breakdown
          .historyData="${this.historyData}" dialog_prefix="${this.dialog_prefix}">
        </pdb-attendance-clocking-history-col-2-content-breakdown>
      `;
    }
    
    return html`
      <!-- <div class="mb-0">
        <div> -->
          <p class="flex justify-between"><b>Total Attendance:</b><span> ${this.totalAttendance}</span></p>
          <p class="flex justify-between"><b>On Time:</b><span class="text-green-600"> ${this.historyData.onTime}</span></p>
          <p class="flex justify-between"><b>Lateness:</b><span class="text-red-600"> ${this.historyData.lateness}</span></p>
          ${breakdown}
        <!-- </div>
      </div> -->
    `;
  }

  get totalAttendance() {
    const parts = this.historyData.totalAttendance.split("/");
    if (parts.length === 2) {
      return html`<span class="text-green-600">${parts[0]}</span>/ <span class="text-red-600">${parts[1]}</span>`;
    }
    return this.historyData.totalAttendance;
  }

  private showDialog(event: any) {
    // event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  firstUpdated() {
    // document.onreadystatechange = (event)=> {
    //   // console.log({ "document.readyState": document.readyState })
    //   if (document.readyState == "complete") this.dialog(event);
    // }  
  }

  createRenderRoot() {
    return this;
  }
}