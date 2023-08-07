import { PUT_AttendanceUpdateScheduleLocation } from '@@addons/network/attendance/setup/location/put';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export class MeetingLocationFormInputValues {
  public locationId: number;
  public locationNameValue?: string;
  public radiusValue?: string;
  public latitudeValue?: string;
  public longitudeValue?: string;

  public static setValues(inputs: {
    locationId: number,
    locationNameValue?: string,
    radiusValue?: string,
    latitudeValue?: string,
    longitudeValue?: string,
  }) {
    const inputValues = new MeetingLocationFormInputValues();
    inputValues.locationId = inputs.locationId;
    inputValues.locationNameValue = inputs.locationNameValue;
    inputValues.radiusValue = inputs.radiusValue;
    inputValues.latitudeValue = inputs.latitudeValue;
    inputValues.longitudeValue = inputs.longitudeValue;
    return inputValues;
  }

  public getValues() {
    const inputValues = new MeetingLocationFormInputValues();
    inputValues.locationId = this.locationId;
    inputValues.locationNameValue = this.locationNameValue;
    inputValues.radiusValue = this.radiusValue;
    inputValues.latitudeValue = this.latitudeValue;
    inputValues.longitudeValue = this.longitudeValue;
    return inputValues;
  }

  public toString() {
    return `MeetingLocationFormInputValues(locationId:${this.locationId},locationNameValue:${this.locationNameValue}, radiusValue:${this.radiusValue}, latitudeValue:${this.latitudeValue}, longitudeValue:${this.longitudeValue})`;
  }
}

@customElement("meeting-location-edit-component")
export class MeetingLocationEditComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ attribute: false })
  public inputValues?: MeetingLocationFormInputValues = null;

  @property({ type: Number })
  public CLIENT_ID?: number;

  @property({ type: Number })
  public meetingEventId?: number;

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
    // console.log({
    //   "this.inputValues": this.inputValues
    // })
    if (this.isEmpty(this.inputValues)) {
      // console.log({ "________": this })
      return nothing;
    }
    return html`
      <div class="p-1">
        <div class="block">
          <div class="flex justify-end">
              <mwc-icon-button class="ml-1 danger" icon="close" @click="${this.empty}"></mwc-icon-button>
          </div>
        </div>
        ${this.getLocationForm}
      </div>
    `;
  }

  private isEmpty(value: any): boolean {
    return value === null || value === undefined || value.length < 1;
  }

  private empty(e: Event): void {
    this.inputValues = null;
  }

  get getLocationForm() {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Update Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="update-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  <div class="container my-4" id="form_input--${this.inputId}">
                    <div class="row justify-center">
                      <div class="col-md-6 col-lg-4">
                        <h4 class="font-semibold my-2">Enter Location Name</h4>
                        <mwc-textfield name="locationName" type="text" class="w-full"
                          id="locationName--${this.inputId}" label="Enter Location Name" outlined required
                          value="${this.inputValues.locationNameValue}">
                        </mwc-textfield>
                      </div>
                      <div class="col-md-6 col-lg-8">
                        <div class="container px-0">
                          <div class="row justify-center">
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Radius  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius--${this.inputId}"
                                label="Enter Radius" outlined required value="${this.inputValues.radiusValue}">
                              </mwc-textfield>
                            </div>
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Latitude  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="latitude" type="number" step="0.01" class="w-full"
                                id="latitude--${this.inputId}" label="Enter Latitude" outlined required
                                value="${this.inputValues.latitudeValue}">
                              </mwc-textfield>
                            </div>
                            <div class="col-md-12 col-lg-4">
                              <h4 class="font-semibold my-2">Enter Longitude  <small><span class="text-yellow-600 text-xs">Kilometers</span></small></h4>
                              <mwc-textfield name="longitude" type="number" step="0.01" class="w-full"
                                id="longitude--${this.inputId}" label="Enter Longitude" outlined required
                                value="${this.inputValues.longitudeValue}">
                              </mwc-textfield>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update Location" raised class="button" @click="${this.submitForm}">
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

  async submitForm(e: Event) {
    await PUT_AttendanceUpdateScheduleLocation(this.inputValues.locationId);
  }

  createRenderRoot() {
    return this;
  }
}
