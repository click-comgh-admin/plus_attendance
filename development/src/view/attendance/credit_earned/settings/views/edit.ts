import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-dialog';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@addons/widgets/form/new/select';
import { PATCH_AttendanceAddScheduleCreditEarned } from '@@addons/network/attendance/setup/credit_earned/patch';
import './form/inputs';


@customElement("edit-times")
export class EditCreditEarned extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public creditEarnedData: any[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Number })
  private timeID?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();

    this.getMeetingEventId();
    this.timeID = this.creditEarnedData.length>0&&this.creditEarnedData[0]!==undefined?this.creditEarnedData[0].id: 0;

    console.log({"this.creditEarnedData--this.creditEarnedData": this.creditEarnedData})
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <mwc-dialog open-this-dialog="multiple-meeting-events--times---${this.timeID}" heading="Set Multiple Days">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          ${this.form}
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
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
                  <h1 class="h1 !text-red-400">Update Credit Earned</h1>
                  <h3 class="h3">Edit Credit Earned!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="edit-schedule-credit-earned">
                <credit-earned-inputs-component id="${this.timeID}" .meetingCreditEarned="${this.creditEarnedData}"></credit-earned-inputs-component>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <div class="form-input-container">
                      <mwc-button label="Submit Credit Data" raised class="button" @click="${this.submitForm}">
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

  firstUpdated() {

  }

  private showDialog() {
    const dialog = document.querySelector(`[open-this-dialog="multiple-meeting-events--times---${this.timeID}"]`);
    // console.log({dialog})
    dialog.setAttribute('open', "true");

    // @ts-ignore
    dialog.open = true;
  }

  private closeDialog() {
    const dialog = document.querySelector(`[open-this-dialog="multiple-meeting-events--times---${this.timeID}"]`);
    // console.log({dialog})
    dialog.setAttribute('open', "false");

    // @ts-ignore
    dialog.open = false;
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
      this.closeDialog();
      
      const timeInputsComponent = document.querySelector(`time-inputs-component[id="${this.timeID}"]`);
      // @ts-ignore
      const startTime = timeInputsComponent.startTimeValue;
      // @ts-ignore
      const closeTime = timeInputsComponent.endTimeValue;
      console.log({timeInputsComponent, startTime, closeTime})
      await PATCH_AttendanceAddScheduleCreditEarned(this.timeID, startTime, closeTime);
      this.showDialog();
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  createRenderRoot() {
    return this;
  }
}
