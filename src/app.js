import { LitElement, html, css } from "./lit-element.js";
import { randrange } from "./random.js";
import "./card.js";
import "./card-row.js";

export class MathApp extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: #dcdcdc;
        padding: 32px;
        flex: 1 1 0;
        align-self: stretch;
        display: flex;

        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    `;
  }

  constructor() {
    super();

    this.target = randrange(50, 99);
    this.cards = [
      randrange(1, 5),
      randrange(1, 10),
      randrange(1, 10),
      randrange(1, 10) * 2,
      randrange(0, 9) * 2 + 1
    ];
  }

  render() {
    return html`
      <m-card-row>
        <m-card number=${this.target} style="red"></m-card>
      </m-card-row>

      <m-card-row>
        ${this.cards.map(
          card =>
            html`
              <m-card number=${card}></m-card>
            `
        )}
      </m-card-row>
    `;
  }
}

customElements.define("m-app", MathApp);
