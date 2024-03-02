import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { POST_AttendanceAddScheduleCreditEarned } from '@@addons/network/attendance/setup/credit_earned/post';


@customElement("create-times")
export class CreateCreditEarned extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return this.form;
  }

  private get form() {
    // <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDayField}">
    // </mwc-icon-button>
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
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-credit-earned">
                <credit-earned-inputs-component ></credit-earned-inputs-component>
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
      await POST_AttendanceAddScheduleCreditEarned();
  }

  createRenderRoot() {
    return this;
  }
}
