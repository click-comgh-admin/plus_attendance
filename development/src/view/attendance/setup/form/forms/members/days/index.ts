import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button'
import '@material/mwc-icon';;
import './view';
import { MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { MeetingEventScheduleDay_I } from '@@addons/interfaces/attendance/meeting_event/day';
import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';


@customElement("attendance-setup-multiple-member-days-btn-component")
export class AttendanceSetupMultipleMemberDaysBtnComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public selectedAttendanceMembers: MeetingAttendanceMemberModel[] = [];

  @property({ type: Array })
  public meetingDays: MeetingEventScheduleDay_I[] = [];

  @property({ type: Array })
  public daysOfWeek: DayOfWeek_I[] = [];

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
        <attendance-setup-multiple-member-days-form-component multiple-member-events="days" clientId="${this.clientId}"
          .selectedAttendanceMembers="${this.selectedAttendanceMembers}" meetingEventId="${this.meetingEventId}"
          .meetingDays="${this.meetingDays}" .daysOfWeek="${this.daysOfWeek}">
        </attendance-setup-multiple-member-days-form-component>
        <mwc-button class="warning w-full mx-1" label="Set Multiple Days" icon="today" @click="${this.showDialog}"
          outlined open-dialog-btn="multiple-member-events--days">
        </mwc-button>
      </div>
    `;
    // <mwc-icon class="mr-1" > today < /mwc-icon>
    // <small>Set Multiple Days</small>
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
