import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement("meeting-location-inputs-component")
export class MeetingLocationInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public locationNameValue?: string;

  @property({ type: String })
  public radiusValue?: string;

  @property({ type: String })
  public latitudeValue?: string;

  @property({ type: String })
  public longitudeValue?: string;

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
    return html`
      <div class="container my-4" id="form_input--${this.inputId}">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Location Name</h4>
            <mwc-textfield name="locationName" type="text" class="w-full"
              id="locationName--${this.inputId}" label="Enter Location Name" outlined required
              @change="${this.handleLocationNameChange}">
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="container px-0">
              <div class="row justify-center">
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Select Radius</h4>
                  <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius--${this.inputId}"
                    label="Enter Radius" outlined required @change="${this.handleRadiusChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Select Latitude</h4>
                  <mwc-textfield name="latitude" type="number" step="0.01" class="w-full"
                    id="latitude--${this.inputId}" label="Enter Latitude" outlined required @change="${this.handleLatitudeChange}">
                  </mwc-textfield>
                </div>
                <div class="col-md-12 col-lg-4">
                  <h4 class="font-semibold my-2">Select Longitude</h4>
                  <mwc-textfield name="longitude" type="number" step="0.01" class="w-full"
                    id="longitude--${this.inputId}" label="Enter Longitude" outlined required @change="${this.handleLongitudeChange}">
                  </mwc-textfield>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleLocationNameChange(event: Event) {
    // @ts-ignore
    const locationNameValue = event.target.value;
    this.locationNameValue = locationNameValue;    

    // console.log({
    //   "handleLocationNameChange.event.target": event,
    //   "handleLocationNameChange.locationValue": this.locationValue,
    //   "handleLocationNameChange.latitudeValue": this.latitudeValue,
    //   "handleLocationNameChange.longitudeValue": this.longitudeValue,
    // });
    
  }

  handleRadiusChange(event: Event) {
    // @ts-ignore
    const radiusValue = event.target.value;
    this.radiusValue = radiusValue;    

    // console.log({
    //   "handleRadiusChange.event.target": event,
    //   "handleRadiusChange.locationValue": this.locationValue,
    //   "handleRadiusChange.latitudeValue": this.latitudeValue,
    //   "handleRadiusChange.longitudeValue": this.longitudeValue,
    // });

  }
  handleLatitudeChange(event: Event) {
    // @ts-ignore
    this.latitudeValue = event.target.value;
    // console.log({
    //   "handleLatitudeChange.event.target": event.target.value,
    //   "handleLatitudeChange.locationValue": this.locationValue,
    //   "handleLatitudeChange.latitudeValue": this.latitudeValue,
    //   "handleLatitudeChange.longitudeValue": this.longitudeValue
    // });
  }

  handleLongitudeChange(event: Event) {
    // @ts-ignore
    this.longitudeValue = event.target.value;
    // console.log({
    //   "handleLongitudeChange.event.target": event.target.value,
    //   "handleLongitudeChange.locationValue": this.locationValue,
    //   "handleLongitudeChange.latitudeValue": this.latitudeValue,
    //   "handleLongitudeChange.longitudeValue": this.longitudeValue
    // });
  }

  firstUpdated() {
  }

  createRenderRoot() {
    return this;
  }
}
