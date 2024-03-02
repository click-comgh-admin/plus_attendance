import { MeetingEventTimeModel } from '@@addons/interfaces/attendance/meeting_event/schedules/times';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement("time-inputs-component")
export class TimeInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public startTimeValue?: string;

  @property({ type: String })
  public endTimeValue?: string;

  @property({ type: Array })
  public meetingTime: Array<MeetingEventTimeModel> = [];

  private defaultTimes?: MeetingEventTimeModel = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.meetingTime == undefined) this.meetingTime = [];

  

    this.defaultTimes = this.meetingTime.length < 0 ? null: this.meetingTime[0] == undefined? null: this.meetingTime[0];

    if(this.defaultTimes !== null) {
      this.startTimeValue = this.defaultTimes.startTime;
  
      this.endTimeValue = this.defaultTimes.endTime;

    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" @change="${this.handleStartTimeChange}" value="${String(this.defaultTimes == null? "": this.defaultTimes.startTime)}" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Close Time</h4> 
            <mwc-textfield name="closeTime" type="time" class="w-full" id="endTime" @change="${this.handleEndTimeChange}" value="${String(this.defaultTimes == null? "": this.defaultTimes.endTime)}" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  handleStartTimeChange(event: Event) {
    // @ts-ignore
    this.startTimeValue = event.target.value;
  }

  handleEndTimeChange(event: Event) {
    // @ts-ignore
    this.endTimeValue = event.target.value;
  }

  firstUpdated() { 
  }

  createRenderRoot() {
    return this;
  }
}
