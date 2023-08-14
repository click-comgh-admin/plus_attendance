import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-icon';
import '@material/mwc-button';
import '../../../edit/member/dates/multiple';
import { MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { POST_AttendanceScheduleMemberDateBulk } from '@@addons/network/attendance/setup/member/date/post_multiple';
import { MeetingEventScheduleDate_I } from '@@addons/interfaces/attendance/meeting_event/dates';
import { MemberMeetingEventDateFormInputModel } from '@@addons/interfaces/attendance/meeting_event/member/member/date';


@customElement("attendance-setup-multiple-member-dates-form-component")
export class AttendanceSetupMultipleMemberDatesFormComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public selectedAttendanceMembers: MeetingAttendanceMemberModel[] = [];

  @property({ type: Array })
  public meetingDates: MeetingEventScheduleDate_I[] = [];

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
      <mwc-dialog class="w-full" open-this-dialog="multiple-member-events--dates" heading="Set Multiple Dates">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            ${this.selectedMembers}
          </div>
          <div class="flex flex-col m-1 justify-evenly">
            ${this.form}
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `;
  }

  get selectedMembers() {
    return html`
      <div class="flex flex-col justify-between content-between">
        <h6 class="whitespace-nowrap text-base font-bold mr-1">Selected Members</h6>
        <select class="form-control">
          <option>Selected Members</option>
          ${this.selectedAttendanceMembers.map(attendanceMember => {
      const member = attendanceMember.memberInfo;
      let memberName = "-";

      if (member === null) {
        memberName = "-";
      } else {
        if (member.accountType === 1) {
          // @ts-ignore
          memberName = html`${member.firstname} ${member.middlename ?? ""} ${member.surname}`;
        } else {
          // @ts-ignore
          memberName = html`${member.organizationName}`;
        }
      }
      // console.log({memberName});

      return html`<option>${memberName}</option>`;
    })}
        </select>
      </div>
    `;
  }

  private get form() {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-date">
                <div class="p-0 m-0" show-dateField="all">
                  <member-date-multiple-inputs-component .meetingDates="${this.meetingDates}" 
                    meetingMemberId="0" meetingEventId="${this.meetingEventId}">
                  </member-date-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.clientId}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="0"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Date(s)" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() { }

  private showDialog() {
    const dialog = document.querySelector('[open-this-dialog="multiple-member-events--dates"]');
    // console.log({dialog})
    dialog.setAttribute('open', "true");

    // @ts-ignore
    dialog.open = true;
  }

  private closeDialog() {
    const dialog = document.querySelector('[open-this-dialog="multiple-member-events--dates"]');
    // console.log({dialog})
    dialog.setAttribute('open', "false");

    // @ts-ignore
    dialog.open = false;
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    document.querySelectorAll("member-date-multiple-inputs-component").forEach(async selector => {
      // console.log({ "selector--selector": selector });
      this.closeDialog();

      // @ts-ignore
      const multipleDateObjects = selector.multipleDateObjects;
      // console.log({ "selector--multipleDateObjects": multipleDateObjects });
      const final_data =  this.getSubmitData(multipleDateObjects);
      await POST_AttendanceScheduleMemberDateBulk(final_data);
      this.showDialog();
    });
  }

  getSubmitData(multipleDateObjects: Array<MemberMeetingEventDateFormInputModel>) {
    const dateObjects: Array<MemberMeetingEventDateFormInputModel> = [];
    this.selectedAttendanceMembers.forEach(attendanceMember => {      

      for (let i = 0; i < multipleDateObjects.length; i++) {
        const dateObject = multipleDateObjects[i];
        const this_dateObject = new MemberMeetingEventDateFormInputModel();
        this_dateObject.dateId = dateObject.dateId;
        this_dateObject.memberId = attendanceMember.id;
        this_dateObject.meetingEventId = dateObject.meetingEventId;
        
        // console.log({this_dateObject});

        if (!dateObjects.includes(this_dateObject)) {
          dateObjects.push(this_dateObject);
        }
      }
    });

    // console.log({ dateObjects });

    return dateObjects;
  }

  createRenderRoot() {
    return this;
  }
}
