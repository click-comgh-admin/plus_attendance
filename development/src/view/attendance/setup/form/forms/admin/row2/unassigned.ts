import { MeetingEventScheduleAdminMemberModel } from '@@addons/interfaces/attendance/meeting_event/admin/member';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { POST_AttendanceScheduleAdminMembers } from "@@addons/network/attendance/setup/admin/member/post_multiple";


@customElement("admin-member-row2-unassigned-component")
export class AdminMemberRow2UnssignedComponent extends LitElement {
  constructor() { super(); }

  @property({ attribute: false })
  public adminMember?: MeetingEventScheduleAdminMemberModel;

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
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="block">
          <mwc-button class="button success text-xs" label="Assign" outlined @click="${this.submitMember}">
            <mwc-icon>check_circle</mwc-icon>
          </mwc-button>
        </div>
      </div>
    `;
  }

  async submitMember(event: Event) {
    event.preventDefault();
    if (this.adminMember !== null) {
      await POST_AttendanceScheduleAdminMembers([{
        adminId: this.adminMember.adminId.id,
        memberId: this.adminMember.memberId.id,
        // memberId: this.adminMember.memberInfo.id,
        meetingEventId: this.adminMember.meetingEventId.id,
      }]);
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
