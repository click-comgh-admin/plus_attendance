import { AttendanceMemberStatus, MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "@material/mwc-icon";
import "@material/mwc-button";
import { PUT_AttendanceUpdateScheduleMemberStatus } from '@@addons/network/attendance/setup/member/update_status';
import { NavigatorRouter } from '@@addons/classes/navigator';


@customElement("member-col-four-component")
export class MemberColFourComponent extends LitElement {
  constructor() { super(); }

  @property({ attribute: false })
  public activeStatus: AttendanceMemberStatus = AttendanceMemberStatus.None;

  @property({ attribute: false })
  public memberActiveStatus: AttendanceMemberStatus = AttendanceMemberStatus.None;

  @property({ type: String })
  public attendanceMemberString: string = "";

  @property({ attribute: false })
  private attendanceMember?: MeetingAttendanceMemberModel;

  connectedCallback() {
    super.connectedCallback();

    try {
      this.attendanceMember = MeetingAttendanceMemberModel.fromJson(JSON.parse(this.attendanceMemberString));

      for (const key in AttendanceMemberStatus) {
        if (Object.prototype.hasOwnProperty.call(AttendanceMemberStatus, key)) {
          const activeStatus = AttendanceMemberStatus[key];
          const statusId = this.attendanceMember!.statusId;
          if (statusId.id.toString() === activeStatus.toString()) {
            this.memberActiveStatus = Number(activeStatus);
          }
        }
      }
    } catch (error) {
      this.attendanceMember = null;
    }

    // console.log({
    //   "activeStatus": this.activeStatus,
    //   "attendanceMember": this.attendanceMember,
    //   "attendanceMemberString": this.attendanceMemberString
    // })
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.attendanceMember === null) {
      return html`<b class="text-red-500">UNKOWN MEMBER</b>`;
    } else {
      if (this.memberActiveStatus === AttendanceMemberStatus.Assigned) {
        return html`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.unassignButton}
            <div class="mx-1"></div>
            ${this.pendingButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `;
      } else if (this.memberActiveStatus === AttendanceMemberStatus.Pending) {
        return html`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.assignButton}
            <div class="mx-1"></div>
            ${this.unassignButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `;
      } else {
        return html`
          <div class="flex flex-col lg:flex-row items-center justify-center">
            ${this.assignButton}
            <div class="mx-1"></div>
            ${this.pendingButton}            
          </div>
          <div class="flex justify-center items-center">
            ${this.showDayDateButtons}
          </div>
        `;
      }
    }
  }

  get pendingButton() {
    // album
    // check_circle
    // circle
    // timer
    return html`
      <div class="block">
        <mwc-button class="button info text-xs" label="Set Pending" status-id="3" outlined @click="${this.submitStatus}">
          <mwc-icon>timer</mwc-icon>
        </mwc-button>
      </div>
    `;
  }

  get assignButton() {
    return html`
      <div class="block">
        <mwc-button class="button success text-xs" label="Assign" status-id="1" outlined @click="${this.submitStatus}">
          <mwc-icon>check_circle</mwc-icon>
        </mwc-button>
      </div>
    `;
  }

  get unassignButton() {
    return html`
      <div class="block">
        <mwc-button class="button danger text-xs" label="Unassign" status-id="2" outlined @click="${this.submitStatus}">
          <mwc-icon>circle</mwc-icon>
        </mwc-button>
      </div>
    `;
  }

  get showDayDateButtons() {
    if (this.attendanceMember.meetingEventId.isRecuring) {
      return html`
        <mwc-button class="button warning text-xs" label="Set Meeting Days" raised @click="${() => NavigatorRouter.push("settings/edit/member-days?member-id="+this.attendanceMember.id)}">
          <mwc-icon>today</mwc-icon>
        </mwc-button>`;
    } else {
      return html`
        <mwc-button class="button warning text-xs" label="Set Meeting Dates" raised @click="${() => NavigatorRouter.push("settings/edit/member-dates?member-id="+this.attendanceMember.id)}">
          <mwc-icon>today</mwc-icon>
        </mwc-button>`;
    }
  }

  async submitStatus(event: Event) {
    if (this.attendanceMember !== null) {
      // @ts-ignore
      const status_id = event.target.getAttribute("status-id"),
        statusId = Number.isNaN(status_id)?0 : status_id;
      await PUT_AttendanceUpdateScheduleMemberStatus(this.attendanceMember.id, statusId);
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
