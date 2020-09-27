import { LitElement, html, css } from "./lit-element.js";

export class MathCardRow extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }

      ::slotted(:not(:last-child)) {
        margin-right: 32px;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("m-card-row", MathCardRow);
