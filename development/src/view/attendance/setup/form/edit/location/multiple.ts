import { LitElement, html, css, nothing, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'
import './inputs';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import { MeetingEventScheduleLocationFormInputModel } from '@@addons/interfaces/attendance/meeting_event/location';

@customElement("meeting-location-multiple-inputs-component")
export class MeetingLocationMultipleInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public meetingEventId: number;

  @property({ type: Number })
  public currentObjectCount: number = 0;

  @property({ type: Array })
  public multipleDayObjects: MeetingEventScheduleLocationFormInputModel[] = [];

  @property({ type: Array })
  private removedInputIndex: number[] = [];

  @property({ type: Array })
  private addedInputIndex: number[] = [];

  @property({ type: Boolean })
  private firstInputAddedCalled: boolean = false;

  @property({ type: Boolean })
  private loading: boolean = true;

  private _inputs: Array<TemplateResult> = [];

  private set inputs(value: Array<TemplateResult>) {
    this._inputs = value;
    this.requestUpdate();
  }

  private get inputs(): Array<TemplateResult> {
    return this._inputs;
  }

  connectedCallback() {
    super.connectedCallback();

    setInterval(() => {
      if (this.firstInputAddedCalled == false) {
        this.addInput(new Event('click'));

        this.loading = false;
        this.firstInputAddedCalled = true;
      }
    }, 1);
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  addInput(event: Event) {
    this.currentObjectCount = this.currentObjectCount + 1;
    let newInput = html`<meeting-location-inputs-component 
      meeting-location-inputs-component--object="${this.currentObjectCount}">
    </meeting-location-inputs-component>`;
    // console.log({ "newInput-newInput": newInput });

    let inputs = this.inputs;
    inputs.push(newInput);

    let addedInputIndex = this.addedInputIndex;
    addedInputIndex.push(this.currentObjectCount - 1);

    setTimeout(() => {
      this.inputs = inputs;
      this.addedInputIndex = addedInputIndex;
      this.multipleInputsHaveChanged(new Event("change"))
    }, 10);
    // console.log({ "newInput-this.inputs": this.inputs });
  }

  removeInput(index: number) {
    // console.log({ "this.inputs": this.inputs });


    if (this.currentInputList.length - 1 > 0) {
      let inputs = this.inputs;

      this.removedInputIndex.push(index);

      delete inputs[index];
      // inputs.splice(index, 1);

      setTimeout(() => {
        this.inputs = inputs;

        this.multipleInputsHaveChanged(new Event("change"))
      }, 10);
    }
  }

  get currentInputList() {
    let currentList: Array<any> = [];

    const inputs = this.inputs;

    inputs.join("-").split("-").forEach(_ => _.length == 0 ? null : currentList.push(_));

    return currentList;
  }

  render() {
    // console.log({ "inputs-inputs.inputs": this.inputs });
    return this.loading ? html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>` : html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map((input, index) => html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Location Info ${index + 1}</h3>
                <!-- ${"" /** input.render()  */} -->
                ${input}
                ${(this.currentInputList.length - 1 > 0) ? html`<div class="flex justify-end">
                  <mwc-button @click=${() => this.removeInput(index)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>` : nothing}
              </div>
            `,)}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Location</mwc-button>
        </div>
      </div>
    `;
  }

  multipleInputsHaveChanged(event: Event) {

    this.addedInputIndex

    const inputComponents = Array.from(document.querySelectorAll('[meeting-location-inputs-component--object]'));
    // console.log({ inputComponents, "this.removedInputIndex": this.removedInputIndex });

    const notRemovedComponents: Array<any> = [];

    this.addedInputIndex.forEach((inputIndex) => {

      if (!this.removedInputIndex.includes(inputIndex)) {

        if (!notRemovedComponents.includes(inputIndex)) {
          notRemovedComponents.push(inputIndex);
        }
      }
    });

    // console.log({notRemovedComponents});


    this.multipleDayObjects = notRemovedComponents.map((input) => {
      const inputComponent = Array.from(document.querySelectorAll('[meeting-location-inputs-component--object="' + (input + 1) + '"]'));
      // console.log({ "inputComponent---inputComponent": inputComponent, input });

      return inputComponent.map(inputElement => {
        // console.log({ "inputElement---inputElement": inputElement });
        // locationNameValue
        // radiusValue
        // latitudeValue
        // longitudeValue
        let newObject = new MeetingEventScheduleLocationFormInputModel();
        newObject.meetingEventId = this.meetingEventId;
        // @ts-ignore
        newObject.locationName = String(inputElement.locationNameValue ?? "");
        // @ts-ignore
        newObject.radius = String(inputElement.radiusValue ?? "");
        // @ts-ignore
        newObject.latitude = String(inputElement.latitudeValue ?? "");
        // @ts-ignore
        newObject.longitude = String(inputElement.longitudeValue ?? "");
        return newObject;
      })[0];
    });
 

    // console.log({ "multiple_day_objects": this.multipleDayObjects });

  }

  firstUpdated() {

  }

  createRenderRoot() {
    return this;
  }
}
