import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button'
import '@material/mwc-icon';
import "../edit";
import {base64Decode} from '@@addons/functions/base64';
import { MeetingEventTimeModel, Convert as metConvert } from '@@addons/interfaces/attendance/meeting_event/schedules/times';


@customElement("time-edit-btn-component")
export class TimeEditBtnComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public timeData: string = "{}";

  @property({ type: Number })
  public clientId: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  connectedCallback() {
    super.connectedCallback();
    // console.log({"this.timeData--_1--this.timeData": base64Decode(this.timeData)})
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    const time: MeetingEventTimeModel = metConvert.toMeetingEventTimeModel(String(base64Decode(this.timeData)));

    // console.log({"this.timeData--_2--this.timeData": time})
    return html`
      <div class="whitespace-nowrap px-1">
        <mwc-button class="warning w-full mx-1" icon="edit" @click="${this.showDialog}"
            raised open-dialog-btn="multiple-meeting-events--times---${time.id}">
        </mwc-button>
        <edit-times multiple-meeting-events="times---${time.id}" clientId="${this.clientId}"
          .timeData="${[time]}" meetingEventId="${this.meetingEventId}">
        </edit-times>
      </div>
    `;
  }

  firstUpdated() { }

  private showDialog(event: any) {
    event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  createRenderRoot() {
    return this;
  }
}
