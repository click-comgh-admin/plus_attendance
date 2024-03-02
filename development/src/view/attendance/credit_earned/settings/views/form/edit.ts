import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button'
import '@material/mwc-icon';
import "../edit";
import {base64Decode} from '@@addons/functions/base64';
import { MeetingEventTimeModel, Convert as metConvert } from '@@addons/interfaces/attendance/meeting_event/schedules/times';


@customElement("credit-earned-edit-btn-component")
export class CreditEarnedEditBtnComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public creditEarnedData: string = "{}";

  @property({ type: Number })
  public clientId: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  connectedCallback() {
    super.connectedCallback();
    // console.log({"this.creditEarnedData--_1--this.creditEarnedData": base64Decode(this.creditEarnedData)})
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    const time: MeetingEventTimeModel = metConvert.toMeetingEventTimeModel(String(base64Decode(this.creditEarnedData)));

    // console.log({"this.creditEarnedData--_2--this.creditEarnedData": time})
    return html`
      <div class="whitespace-nowrap px-1">
        <mwc-button class="warning w-full mx-1" icon="edit" @click="${this.showDialog}"
            raised open-dialog-btn="multiple-meeting-events--times---${time.id}">
        </mwc-button>
        <edit-times multiple-meeting-events="times---${time.id}" clientId="${this.clientId}"
          .creditEarnedData="${[time]}" meetingEventId="${this.meetingEventId}">
        </edit-times>
      </div>
    `;
  }

  firstUpdated() { }

  private showDialog(event: any) {
    event.preventDefault();
    // console.log({event})

    // @ts-ignore
    window['editCreditData'] = this.creditEarnedData;

    // const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    // const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    // dialog.setAttribute('open', "true");
  }

  createRenderRoot() {
    return this;
  }
}
