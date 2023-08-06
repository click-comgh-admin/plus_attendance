import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement("member-col-five-component")
export class MemberColFiveComponent extends LitElement {
  constructor() { super(); }



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
    return html``;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
