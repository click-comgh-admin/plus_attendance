import { MeetingEventScheduleAdminMemberModel } from '@@addons/interfaces/attendance/meeting_event/admin/member';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement("admin-member-row1-unassigned-component")
export class AdminMemberRow1UnssignedComponent extends LitElement {
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
      <div class="whitespace-normal mb-0">
        <div class="items-start justify-start">
          <input id="admin_member_info" name="admin_member_info" type="checkbox" value="${this.adminMember.memberId.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div class="mt-3 items-start justify-start border-b border-b-red-400">
          <p class="ml-1 mb-2 text-xs whitespace-[normal]">
            ${this.memberName}
          </p>
        </div>
      </div>
    `;
  }

  get memberName() {
    const member = this.adminMember!.memberInfo;
    // console.log({ "member--member": member });

    if (member.accountType === 1) {
      return html`${this.individualMember}`;
    } else {
      return html`${this.organizationMember}`;
    }

  }

  get individualMember() {
    // @ts-ignore
    const member: IndividualMemberModel = this.adminMember.memberInfo;
    return `${member.firstname} ${member.middlename ?? ""} ${member.surname}`;
  }

  get organizationMember() {
    // @ts-ignore
    const member: OrganizationMemberModel = this.adminMember.memberInfo;
    return `${member.organizationName}`;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
