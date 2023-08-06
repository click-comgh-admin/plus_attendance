import { MeetingEventScheduleDate_I } from '@@addons/interfaces/attendance/meeting_event/dates';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement("member-date-inputs-component")
export class MemberDateInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public meetingDates: MeetingEventScheduleDate_I[] = [];

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public dateValue?: string;

  connectedCallback() {
    super.connectedCallback();

    // console.log({"this.meetingDates": this.meetingDates});
    
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    const meetingDates__ = this.meetingDates.map((value) => {
      return html`<mwc-list-item value="${value.id}">${value.date}</mwc-list-item>`;
    });

    return html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-select name="dateId" class="w-full" id="dateId--${this.inputId}" label="Select Date" outlined
              required @change="${this.handleDateChange}">
              <mwc-list-item value="">Select Date</mwc-list-item>
              ${html`${meetingDates__}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `;
  }

  getMeetingDate(value: Number): MeetingEventScheduleDate_I {
    let date: MeetingEventScheduleDate_I = {id:0, date: new Date(),};
    this.meetingDates.forEach(meetingDate => {
      if (meetingDate.id === value) {
        date = meetingDate;
      }
    });

    return date;
  }

  handleDateChange(event: Event) {
    // @ts-ignore
    const dateValue = event.target.value;
    this.dateValue = dateValue;
    

    // console.log({
    //   "handleDayChange.event.target": event,
    //   "handleDayChange.dayValue": this.dayValue,
    //   "handleDayChange.startDateValue": this.startDateValue,
    //   "handleDayChange.endDateValue": this.endDateValue,
    // });

  }

  firstUpdated() {
  }

  createRenderRoot() {
    return this;
  }
}
