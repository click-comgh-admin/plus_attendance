import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-tab-bar';
import '@@views/no_access/no_page_entry';
import { tokenLogin } from "@@addons/functions/login/main";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import './views/assigned';
import './views/unassigned';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';
import { Button } from '@material/mwc-button';


@customElement("attendance-setup-view-categories")
export class AttendanceSetupViewCategories extends LitElement {
  constructor() {
    super();
  }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

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

  @query('#assignedCatBtn')
  private assignedCatBtn: Button;

  @query('#unassignedCatBtn')
  private unassignedCatBtn: Button;

  @property({ type: Number })
  private formId: number = 1;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);
    await tokenLogin(this.email, this.mId, "client_tokenLogin");


    document.onreadystatechange = (event) => {
      if (document.readyState == "complete") this.handleQueryParam();
    }
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
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="assignedCatBtn"
                label="Categories" @click="${this.displayAssignedCategories}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="close" id="unassignedCatBtn"
                label="Categories" @click="${this.displayUnassignedCategories}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.getCurrentTabFromQueryParam == "assigned" ? 0 : 1}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check" id="assignedCatBtn"
                label="Assigned Categories" @click="${this.displayAssignedCategories}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="close" id="unassignedCatBtn"
                label="Unassigned Categories" @click="${this.displayUnassignedCategories}"></mwc-tab>
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
    const viewParam = urlParams.get('view');
    return viewParam;
  }

  private handleQueryParam() {
    const viewParam = this.getCurrentTabFromQueryParam;
    if (viewParam === 'assigned') {
      this.displayAssignedCategories(new Event('click'));
    } else if (viewParam === 'unassigned') {
      this.displayUnassignedCategories(new Event('click'));
    }
  }

  private updateQueryParam(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('view', param);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }

  private displayAssignedCategories(e: any) {
    e.preventDefault();
    this.formId = 1;
    // this.assignedCatBtn.setAttribute('raised', "true");
    // this.assignedCatBtn.setAttribute('active', "true");
    this.unassignedCatBtn.removeAttribute('raised');
    this.unassignedCatBtn.removeAttribute('active');
    // this.unassignedCatBtn.click();
    this.updateQueryParam('assigned');
  }

  private displayUnassignedCategories(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.unassignedCatBtn.click();
    // this.unassignedCatBtn.setAttribute('raised', "true");
    // this.unassignedCatBtn.setAttribute('active', "true");
    this.assignedCatBtn.removeAttribute('raised');
    this.assignedCatBtn.removeAttribute('active');
    console.log({ "this.unassignedCatBtn": this.unassignedCatBtn });

    // this.unassignedCatBtn.click();
    this.updateQueryParam('unassigned');
  }

  private get getDisplay() {
    if (this.formId === 1) {
      return html`
        <assigned-categories class="mt-2" form-id="1"></assigned-categories>
      `;
    } else {
      return html`
        <unassigned-categories class="mt-2" form-id="2" ></unassigned-categories>
      `;
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}


