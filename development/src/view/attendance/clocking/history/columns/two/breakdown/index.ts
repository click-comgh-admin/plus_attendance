import '@material/mwc-button';
import { MeetingAttendanceHistoryModel, Convert as mahmConvert } from '@@addons/interfaces/attendance/history';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import './meeting';
// import "@@addons/widgets/accordion/main";
import "@@addons/widgets/accordion/component/item";
import "@@addons/widgets/accordion/component/main";


@customElement("pdb-attendance-clocking-history-col-2-content-breakdown")
export class PdbAttendanceClockingHistoryColTwoContentBreakdown extends LitElement {
  constructor() { super(); }

  private _historyData: MeetingAttendanceHistoryModel = null;

  public set historyData(value: MeetingAttendanceHistoryModel) {
    this._historyData = value;
    this.requestUpdate();
  }

  public get historyData(): MeetingAttendanceHistoryModel {
    return this._historyData;
  }

  @property({ type: String })
  public dialog_prefix: string = "member-attendance-history";

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
    // const contents: Array<TemplateResult> = this.historyData?.history?.meetings?.map(meetingData => {
    //   return html`<app-accordion-item accordion_class_name="meeting-history-${this.historyData?.history?.member?.id}" class="w-100"
    //     .buttonHtml="${html`<b>${this.meetingName(meetingData.meeting.name)}</b>`}"
    //     .contentHtml="${html`
    //       <pdb-attendance-clocking-history-col-2-content-breakdown-meeting
    //         .meetingData="${meetingData}">
    //       </pdb-attendance-clocking-history-col-2-content-breakdown-meeting>`}">
    //     </app-accordion-item>
    //   `;
    // });
    return html`
      <mwc-dialog open-this-dialog="${this.dialog_prefix}-${this.historyData?.history?.member?.id}" heading="History Breakdown">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            ${"" /** <app-accordion accordionName="meeting-history-${this.historyData?.history?.member?.id}" .contents=${contents} class="w-100"></app-accordion> */ }
            <accordion-component class="my-2">
              ${this.historyData?.history?.meetings?.map(meetingData => {
                return html`
                  <accordion-item breakdown title="${this.meetingName(meetingData.meeting.name)}">
                    <pdb-attendance-clocking-history-col-2-content-breakdown-meeting
                      .meetingData="${meetingData}">
                    </pdb-attendance-clocking-history-col-2-content-breakdown-meeting>
                  </accordion-item>
                `;
              })}
            </accordion-component>
            --
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

  firstUpdated() {}

  meetingName(name: string) {
    return name.split(" ").map(part => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(" ");
  }

  createRenderRoot() {
    return this;
  }
}