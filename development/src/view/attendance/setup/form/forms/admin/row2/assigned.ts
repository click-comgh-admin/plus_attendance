import { MeetingEventScheduleAdminMemberModel } from '@@addons/interfaces/attendance/meeting_event/admin/member';
import { DELETE_AttendanceScheduleAdminMembers } from '@@addons/network/attendance/setup/admin/member/delete';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement("admin-member-row2-assigned-component")
export class AdminMemberRow2AssignedComponent extends LitElement {
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
          <mwc-button class="button warning text-xs" label="Unassign" outlined @click="${this.submitMember}">
            <mwc-icon>circle</mwc-icon>
          </mwc-button>
        </div>
      </div>
    `;
  }

  async submitMember(event: Event) {
    event.preventDefault();
    if (this.adminMember !== null) {
      await DELETE_AttendanceScheduleAdminMembers([{
        id: this.adminMember.id,
      }]);
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
