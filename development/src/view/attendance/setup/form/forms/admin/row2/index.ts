import { MeetingEventScheduleAdminMemberModel } from '@@addons/interfaces/attendance/meeting_event/admin/member';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import './assigned';
import './unassigned';


@customElement("admin-member-row2-component")
export class AdminMemberRow2Component extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  public isAssigned: boolean;

  @property({ type: String })
  public adminMemberString: string = "";

  @property({ attribute: false })
  private adminMember?: MeetingEventScheduleAdminMemberModel;

  connectedCallback() {
    super.connectedCallback();

    try {
      this.adminMember = MeetingEventScheduleAdminMemberModel.fromJson(JSON.parse(this.adminMemberString));
    } catch (error) {
      this.adminMember = null;
    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.adminMember === null) {
      return html`<b class="text-red-500">UNKOWN MEMBER</b>`;
    } else {
      const member = this.adminMember!.memberInfo;

      if (member === null) {
        return html`<b class="text-red-500">UNKOWN MEMBER</b>`;
      } else {
        // console.log({ "this.isAssigned--this.isAssigned": this.isAssigned });
        if (this.isAssigned === true) {
          return html`
            <admin-member-row2-assigned-component .adminMember="${this.adminMember}"></admin-member-row2-assigned-component>
          `;
        } else {
          return html`
            <admin-member-row2-unassigned-component .adminMember="${this.adminMember}"></admin-member-row2-unassigned-component>
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
