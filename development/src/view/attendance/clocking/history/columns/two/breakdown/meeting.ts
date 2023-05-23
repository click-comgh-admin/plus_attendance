import '@@addons/widgets/profile_photo';
import '@material/mwc-button';
import { MeetingElement as MeetingElementModel } from '@@addons/interfaces/attendance/history';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/mwc-dialog';


@customElement("pdb-attendance-clocking-history-col-2-content-breakdown-meeting")
export class PdbAttendanceClockingHistoryColTwoContentBreakdownMeeting extends LitElement {
  constructor() { super(); }

  private _meetingData: MeetingElementModel = null;

  public set meetingData(value: MeetingElementModel) {
    this._meetingData = value;
    this.requestUpdate();
  }

  public get meetingData(): MeetingElementModel {
    return this._meetingData;
  }

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
    return html`
      <div class="mt-1 mb-2">
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Status</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.status.name}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Attendance</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.totalAttendance}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Lateness:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.lateness}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Break Overstay:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.breakOverstay}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Productive Hours:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.productiveHours}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Over-time:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.overtime}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Under-time:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.undertime}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">On Time:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.onTime}</p>
        </div>
        <div class="flex justify-between content-between">
          <h6 class="whitespace-nowrap text-base font-bold mr-1">Overtime:</h6>
          <p class="whitespace-nowrap text-sm ml-1">${this.meetingData?.overtime}</p>
        </div>
      </div>
    `;
  }

  firstUpdated() {}

  createRenderRoot() {
    return this;
  }
}