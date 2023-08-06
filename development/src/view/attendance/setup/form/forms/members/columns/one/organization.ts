import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { AttendanceMemberStatus, MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import '@@addons/widgets/profile_photo';
import { OrganizationMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member/org';


@customElement("member-col-one-org-component")
export class MemberColOneOrgComponent extends LitElement {
  constructor() { super(); }

  @property({ attribute: false })
  public activeStatus: AttendanceMemberStatus = AttendanceMemberStatus.None;

  @property({ attribute: false })
  public attendanceMember?: MeetingAttendanceMemberModel;

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
    // @ts-ignore
    const member: OrganizationMemberModel = this.attendanceMember.memberInfo;
    // console.log({ "memberOrg---memberOrg": member });
    return html`
      <!-- <div class="flex flex-col items-center whitespace-normal mb-0"> -->
      <div class="whitespace-normal mb-0">
        <div class="flex flex-col items-center">
          <input id="meeting_member_info" name="meeting_member_info" type="checkbox" value="${this.attendanceMember.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 flex flex-col items-start justify-start">
          <!-- <user-profile-photo class="w-16 h-16 mb-1 justify-center" rounded 'click-to-open'="" click-to-open="" type="member"
            url="${member.logo}" size="16"></user-profile-photo> -->
          <p class="ml-1 mb-2 text-xs w-[130px] whitespace-[normal]">
            ${member.organizationName}
          </p>
        </div>
      </div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
