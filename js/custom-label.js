class CustomLabel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("div");
    template.innerHTML = `
      <style>
        :host {
          --font-family: ${this.fonte};
          --font-size: ${this.tamanhofonte}pt;
          --font-weight: ${this.fontweight};

          display: inline-block;

          width: ${this.tamanho}cm;
          height: ${this.tamanho * 0.405}cm;
          position: relative;

          background: url("${this.imagem}");
          background-size: contain;
          background-repeat: no-repeat;

          margin-bottom: 6px;
          margin-left: 6px;
        }

        @media print {
          :host {
            /* A4 size */
            width: ${this.tamanho}cm;
            height: ${this.tamanho * 0.405}cm;
          }
        }

        :host > div {
          display: flex;
          width: 100%;
          height: 100%;
          text-align: center;
          align-items: center;
          place-items: center;
        }

        img {
          width: 100%;
        }

        p {
          text-transform: uppercase;
          font-family: var(--font-family);
          font-size: var(--font-size);
          font-weight: var(--font-weight);
          margin: 0;

          width: 100%;
          padding: 0px ${this.margemfonte}px;
          text-align: center;
        }
      </style>
      <!-- <img src="${this.imagem}" alt="Etiqueta" /> -->
      <p>${this.texto}</p>
    `;

    shadowRoot.appendChild(template);
  }

  get imagem() {
    return this.getAttribute("imagem") || "";
  }
  get texto() {
    return this.getAttribute("texto") || "";
  }
  get tamanho() {
    const tamanhos = new Map([
      ["grande", 9.9 * this.escala],
      ["medio", 6.6 * this.escala],
      ["pequeno", 4.95 * this.escala]
    ]);
    return tamanhos.get(this.getAttribute("tamanho")) || "";
  }
  get escala() {
    return parseInt(this.getAttribute("escala") || 1);
  }

  get margemfonte() {
    const tamanhos = new Map([
      ["grande", 60],
      ["medio", 44],
      ["pequeno", 34]
    ]);
    return this.getAttribute("margemfonte") || tamanhos.get(this.getAttribute("tamanho")) || "";
  }

  get tamanhofonte() {
    const tamanhos = new Map([
      ["grande", 24],
      ["medio", 14],
      ["pequeno", 11]
    ]);
    return this.getAttribute("tamanhofonte") || tamanhos.get(this.getAttribute("tamanho")) || "";
  }

  get fonte() {
    return this.getAttribute("fonte") || "Algerian";
  }

  get fontweight() {
    return this.getAttribute("fontweight") || "800";
  }
}


customElements.define('custom-label', CustomLabel);