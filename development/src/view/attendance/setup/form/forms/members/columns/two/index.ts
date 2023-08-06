import { AttendanceMemberStatus, MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import "@material/mwc-icon";


@customElement("member-col-two-component")
export class MemberColTwoComponent extends LitElement {
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

      // console.log({
      //   "activeStatus": this.activeStatus,
      //   "attendanceMember": this.attendanceMember,
      //   "attendanceMemberString": this.attendanceMemberString
      // })
    } catch (error) {
      this.attendanceMember = null;
    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    // console.log({"this.attendanceMember": this.attendanceMember});
    if (this.attendanceMember === null) {
      return html`<b class="text-red-500">UNKOWN MEMBER</b><b class="w-1/6"></b>`;
    } else {
      const statusId = this.attendanceMember!.statusId;
      // console.log({"this.memberActiveStatus": this.memberActiveStatus});
      return html`
        <div class="ml-1 mb-2 whitespace-normal"><b class="w-100"></b>
          <p class="ml-1 mb-2 text-xs whitespace-normal flex flex-col items-start justify-start">
            <mwc-icon class="${this.textIconColor} flex flex-col items-center justify-center">${this.iconType}</mwc-icon>
            <b class="${this.textIconColor}">${statusId.status}</b>
          </p>
        </div>
      `;
    }
  }

  get iconType() {
    if (this.memberActiveStatus === AttendanceMemberStatus.Assigned) {
      return "check_circle";
    } else if (this.memberActiveStatus === AttendanceMemberStatus.Pending) {
      return "timer";
    } else {
      return "circle";
    }
    // album
    // check_circle
    // circle
    // timer
  }

  get textIconColor() {
    if (this.memberActiveStatus === AttendanceMemberStatus.Assigned) {
      return "text-green-500";
    } else if (this.memberActiveStatus === AttendanceMemberStatus.Pending) {
      return "text-purple-500";
    } else {
      return "text-red-500";
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
