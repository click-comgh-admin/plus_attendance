import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-tab-bar';
import '@@views/no_access/no_page_entry';
import { tokenLogin } from "@@addons/functions/login/main";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import './views/view';
import './views/edit';
import './views/create';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';
import { Button } from '@material/mwc-button';


@customElement("attendance-credit-earned-settings")
export class AttendanceCreditEarnedSettings extends LitElement {
  constructor() {
    super();
  }

  @property({ type: String })
  public email?: string;

  @property({ type: Number })
  public mId?: number;

  @property({ type: Number })
  public clientId?: number;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonCatess: boolean = false;

  @query('#viewCreditEarnedBtn')
  private viewCreditEarnedBtn: Button;

  @query('#createCreditEarnedBtn')
  private createCreditEarnedBtn: Button;

  @property({ type: Number })
  private formId: number = 1;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);
    await tokenLogin(this.email, this.mId, "client_tokenLogin");
  }

  disconnectedCallback() { }

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      this._pageButtonCatess = PageButtonUserAccess(PAGE__IDS.schedule_meeting_event);

      if (!AppSettingsExtraUserAccess({ pageId: PAGE__IDS.schedule_meeting_event, viewType: "View" }, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2 my-2">
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${this.getCurrentTabFromQueryParam == "assigned" ? 0 : 1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="viewCreditEarnedBtn"
                label="Credit Earned" @click="${this.displayViewCreditEarned}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="edit" id="createCreditEarnedBtn"
                label="Credit Earned" @click="${this.displayAddCreditEarned}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.getCurrentTabFromQueryParam == "assigned" ? 0 : 1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="viewCreditEarnedBtn"
                label="View Credit Earned" @click="${this.displayViewCreditEarned}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="edit" id="createCreditEarnedBtn"
                label="Create Credit Earned" @click="${this.displayAddCreditEarned}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${this.getDisplay}
          </div>
        </div>
      </div>
    `;
  }

  private get getCurrentTabFromQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('page');
    return viewParam;
  }

  private handleQueryParam() {
    const viewParam = this.getCurrentTabFromQueryParam;
    if (viewParam === 'view') {
      this.displayViewCreditEarned(new Event('click'));
    } else if (viewParam === 'create') {
      this.displayAddCreditEarned(new Event('click'));
    } else {
      this.displayViewCreditEarned(new Event('click'));
      this.updateQueryParam('view');
    }
  }

  private updateQueryParam(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('page', param);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }

  private displayViewCreditEarned(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.viewCreditEarnedBtn.click();
    // this.viewCreditEarnedBtn.setAttribute('raised', "true");
    // this.viewCreditEarnedBtn.setAttribute('active', "true");
    this.createCreditEarnedBtn.removeAttribute('raised');
    this.createCreditEarnedBtn.removeAttribute('active');
    // this.createCreditEarnedBtn.click();
    this.updateQueryParam('view');
  }

  private displayAddCreditEarned(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.createCreditEarnedBtn.click();
    // this.createCreditEarnedBtn.setAttribute('raised', "true");
    // this.createCreditEarnedBtn.setAttribute('active', "true");
    this.viewCreditEarnedBtn.removeAttribute('raised');
    this.viewCreditEarnedBtn.removeAttribute('active');
    // console.log({ "this.createCreditEarnedBtn": this.createCreditEarnedBtn });

    // this.createCreditEarnedBtn.click();
    this.updateQueryParam('create');
  }

  private get getDisplay() {
    if (this.formId === 1) {
      return html`
        <view-times class="mt-2" form-id="1"></view-times>
      `;
    } else {
      return html`
        <create-times class="mt-2" form-id="2" ></create-times>
      `;
    }
  }

  firstUpdated() { 


    document.onreadystatechange = (event) => {
      // console.log({"document.readyState--document.readyState": document.readyState})
      if (document.readyState == "complete") this.handleQueryParam();
    }}

  createRenderRoot() {
    return this;
  }
}


