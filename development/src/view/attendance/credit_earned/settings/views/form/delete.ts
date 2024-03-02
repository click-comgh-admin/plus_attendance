import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button'
import '@material/mwc-icon';
import { DELETE_AttendanceDeleteScheduleCreditEarned } from '@@addons/network/attendance/setup/credit_earned/delete';


@customElement("credit-earned-delete-btn-component")
export class CreditEarnedDeleteBtnComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public creditEarnedId: number = 0;

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
        <div class="whitespace-nowrap px-1">
            <mwc-button class="ml-1 danger" raised delete-this-item="${this.creditEarnedId}" @click="${this.removeCreditEarnedAction}">
                <mwc-icon class="mr-1">delete_forever</mwc-icon>
            </mwc-button>
        </div>
    `;
  }

  private async removeCreditEarnedAction(e: PointerEvent) {
    e.preventDefault();

    // @ts-ignore
    const creditEarnedId = e.currentTarget.getAttribute('delete-this-item');
    console.log({creditEarnedId})

    if (!Number.isNaN(creditEarnedId) && Number(creditEarnedId) !== 0) {
      await DELETE_AttendanceDeleteScheduleCreditEarned(Number(creditEarnedId));
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
