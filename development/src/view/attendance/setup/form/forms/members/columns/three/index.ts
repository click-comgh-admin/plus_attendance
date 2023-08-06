import { AttendanceMemberStatus, MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement("member-col-three-component")
export class MemberColThreeComponent extends LitElement {
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
      return html`<b class="text-red-500">UNKOWN MEMBER</b>`;
    } else {
      const member = this.attendanceMember!.memberInfo;
      const meetingCategoryId = this.attendanceMember!.meetingCategoryId;
      const meetingGroupId = this.attendanceMember!.meetingGroupId;
      const meetingSubgroupId = this.attendanceMember!.meetingSubgroupId;
  
      return html`
        <table class="table striped hover w-full shadow-md border">
          <thead>
            <tr>
              <th class="text-left">Grouping</th>
              <th class="text-left">Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category</td>
              <td>${meetingCategoryId == null? html`<p class="text-red-400">Not Assigned</p>`: meetingCategoryId.memberCategoryId.category}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>${meetingGroupId == null? html`<p class="text-red-400">Not Assigned</p>`: meetingGroupId.groupInfo.group}</td>
            </tr>
            <tr>
              <td>Subgroup</td>
              <td>${meetingSubgroupId == null? html`<p class="text-red-400">Not Assigned</p>`: meetingSubgroupId.subGroupInfo.subgroup}</td>
            </tr>
          </tbody>
        </table>
      `;
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
