import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AttendanceMemberStatus, MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import './organization';
import './individual';


@customElement("member-col-one-component")
export class MemberColOneComponent extends LitElement {
  constructor() { super(); }

  @property({ attribute: false })
  public activeStatus: AttendanceMemberStatus = AttendanceMemberStatus.None;

  @property({ type: String })
  public attendanceMemberString: string = "";

  @property({ attribute: false })
  private attendanceMember?: MeetingAttendanceMemberModel;

  connectedCallback() {
    super.connectedCallback();

    try {
      this.attendanceMember = MeetingAttendanceMemberModel.fromJson(JSON.parse(this.attendanceMemberString));
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
      return html`<b class="text-red-500">UNKNOWN MEMBER</b>`;
    } else {
      const member = this.attendanceMember!.memberInfo;
  
      if (member === null) {
        return html`<b class="text-red-500">UNKNOWN MEMBER</b>`;
      } else {
        if (member.accountType === 1) {
          return html`
            <member-col-one-ind-component activeStatus="${this.activeStatus}" .attendanceMember="${this.attendanceMember}"></member-col-one-ind-component>
          `;
        } else {
          return html`
            <member-col-one-org-component activeStatus="${this.activeStatus}" .attendanceMember="${this.attendanceMember}"></member-col-one-org-component>
          `;
        }
      }
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
