import { LitElement, html, css } from "./lit-element.js";

export class MathCard extends LitElement {
  static get properties() {
    return {
      number: { type: Number },
      style: { type: String }
    };
  }

  static get styles() {
    return css`
      .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 150px;
        height: 250px;
        border-radius: 8px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

        font-size: 100px;
      }

      .plain {
        background-color: white;
      }

      .red {
        background-color: #b22222;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper ${this.style === "red" ? "red" : "plain"}">
        ${this.number}
      </div>
    `;
  }
}

customElements.define("m-card", MathCard);
