import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button'
import '@material/mwc-icon';;
import './view';
import { MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { MeetingEventScheduleDate_I } from '@@addons/interfaces/attendance/meeting_event/dates';


@customElement("attendance-setup-multiple-member-dates-btn-component")
export class AttendanceSetupMultipleMemberDatesBtnComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public selectedAttendanceMembers: MeetingAttendanceMemberModel[] = [];

  @property({ type: Array })
  public meetingDates: MeetingEventScheduleDate_I[] = [];

  @property({ type: Number })
  public clientId: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

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
      <div class="whitespace-nowrap my-1">
        <attendance-setup-multiple-member-dates-form-component multiple-member-events="dates" clientId="${this.clientId}"
          .selectedAttendanceMembers="${this.selectedAttendanceMembers}" meetingEventId="${this.meetingEventId}"
          .meetingDates="${this.meetingDates}">
        </attendance-setup-multiple-member-dates-form-component>
        <mwc-button class="warning w-full mx-1" label="Set Multiple Dates" icon="today" @click="${this.showDialog}"
          outlined open-dialog-btn="multiple-member-events--dates"> 
        </mwc-button>
      </div>
    `;
  //   <mwc-icon class="mr-1 block">today</mwc-icon> 
  //   <small class="block">Set Multiple Dates</small>
  }

  firstUpdated() { }

  private showDialog(event: any) {
    event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  createRenderRoot() {
    return this;
  }
}
