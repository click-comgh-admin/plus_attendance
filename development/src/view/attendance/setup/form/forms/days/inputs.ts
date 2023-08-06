import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement("day-inputs-component")
export class DayInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public daysOfWeek: DayOfWeek_I[] = [];

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public dayValue?: string;

  @property({ type: String })
  public startDateValue?: string;

  @property({ type: String })
  public endDateValue?: string;

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

    const daysOfWeek__ = this.daysOfWeek.map((value) => {
      return html`<mwc-list-item value="${value.id}">${value.day}</mwc-list-item>`;
    });

    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId--${this.inputId}" label="Select Day" outlined
              required @change="${this.handleDayChange}">
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${html`${daysOfWeek__}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select Start Date</h4>
                  <mwc-textfield name="startDate" multiple type="date" class="w-full" id="startDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleStartDateChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-6">
                  <h4 class="font-semibold my-2">Select End Date</h4>
                  <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate--${this.inputId}"
                    label="Select Date" outlined required @change="${this.handleEndDateChange}">
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleDayChange(event: Event) {
    // @ts-ignore
    const dayValue = event.target.value;
    this.dayValue = dayValue;

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
