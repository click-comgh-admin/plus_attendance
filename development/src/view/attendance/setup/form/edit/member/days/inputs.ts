import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';
import { MeetingEventScheduleDay_I } from '@@addons/interfaces/attendance/meeting_event/day';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement("member-day-inputs-component")
export class MemberDayInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public daysOfWeek: DayOfWeek_I[] = [];

  @property({ type: Array })
  public meetingDays: MeetingEventScheduleDay_I[] = [];

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public dayValue?: string;

  @property({ type: String })
  public startDateValue?: string;

  @property({ type: String })
  public endDateValue?: string;

  @property({ type: Boolean })
  public smallView: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    // console.log({"this.meetingDays": this.meetingDays, "this.daysOfWeek": this.daysOfWeek});
    
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    const meetingDays__ = this.meetingDays.map((value) => {
      return html`<mwc-list-item value="${value.id}">${this.getDayOfWeek(value.dayId).day}</mwc-list-item>`;
    });

    return html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="${this.smallView? 'col-md-12': 'col-md-6 col-lg-4'}">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId--${this.inputId}" label="Select Day" outlined
              required @change="${this.handleDayChange}">
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${html`${meetingDays__}`}
            </mwc-select>
          </div>
          <div class="${this.smallView? 'col-md-12': 'col-md-6 col-lg-8'}">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="${this.smallView? 'col-md-12': 'col-md-12 col-lg-6'}">
                  <h4 class="font-semibold my-2">Select Start Date</h4>
                  <mwc-textfield name="startDate" multiple type="date" class="w-full" id="startDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleStartDateChange}" disabled>
                  </mwc-textfield>
                </div>
                <div class="${this.smallView? 'col-md-12': 'col-md-12 col-lg-6'}">
                  <h4 class="font-semibold my-2">Select End Date</h4>
                  <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleEndDateChange}" disabled>
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  getDayOfWeek(dayId: Number): DayOfWeek_I {
    let day: DayOfWeek_I = {id:0, date: new Date(), day: "-"};
    this.daysOfWeek.forEach(dayOfWeek => {
      if (dayOfWeek.id === dayId) {
        day = dayOfWeek;
      }
    });

    return day;
  }

  getMeetingDay(value: Number): MeetingEventScheduleDay_I {
    let day: MeetingEventScheduleDay_I = {id:0, date: new Date(),};
    this.meetingDays.forEach(meetingDay => {
      if (meetingDay.id === value) {
        day = meetingDay;
      }
    });

    return day;
  }

  handleDayChange(event: Event) {
    // @ts-ignore
    const dayValue = event.target.value;
    this.dayValue = dayValue;

    Array.from(this.querySelectorAll(`[id="startDate--${this.inputId}"]`)).forEach(element => {
      // @ts-ignore
      element.value = this.getMeetingDay(Number.isNaN(this.dayValue)? 0: Number(this.dayValue)).startDate;

      // @ts-ignore
      this.startDateValue = element.value;
    });
    Array.from(this.querySelectorAll(`[id="endDate--${this.inputId}"]`)).forEach(element => {
      // @ts-ignore
      element.value = this.getMeetingDay(Number.isNaN(this.dayValue)? 0: Number(this.dayValue)).endDate;

      // @ts-ignore
      this.endDateValue = element.value;
    });
    

    // console.log({
    //   "handleDayChange.event.target": event,
    //   "handleDayChange.dayValue": this.dayValue,
    //   "handleDayChange.startDateValue": this.startDateValue,
    //   "handleDayChange.endDateValue": this.endDateValue,
    // });

  }

  handleStartDateChange(event: Event) {
    // @ts-ignore
    this.startDateValue = event.target.value;
    // console.log({
    //   "handleStartDateChange.event.target": event.target.value,
    //   "handleStartDateChange.dayValue": this.dayValue,
    //   "handleStartDateChange.startDateValue": this.startDateValue,
    //   "handleStartDateChange.endDateValue": this.endDateValue
    // });
  }

  handleEndDateChange(event: Event) {
    // @ts-ignore
    this.endDateValue = event.target.value;
    // console.log({
    //   "handleEndDateChange.event.target": event.target.value,
    //   "handleEndDateChange.dayValue": this.dayValue,
    //   "handleEndDateChange.startDateValue": this.startDateValue,
    //   "handleEndDateChange.endDateValue": this.endDateValue
    // });
  }

  firstUpdated() {
  }

  createRenderRoot() {
    return this;
  }
}
