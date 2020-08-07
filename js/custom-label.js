class CustomLabel extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("div");
    template.innerHTML = `
      <style>
        :host {
          --font-size: ${this.tamanho}pt;

          display: block;
          position: relative;
        }

        img {
          width: 100%;
        }

        p {
          font-family: Arial;
          text-transform: uppercase;
          font-size: var(--font-size);
          margin: 0;

          width: 100%;
          text-align: center;
          position: absolute;
          top: calc(50% - 10px - var(--font-size) / 2);
        }
      </style>
      <img src="${this.imagem}" alt="Etiqueta" />
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
      ["grande", 60],
      ["medio", 40],
      ["pequeno", 25],
    ]);
    return tamanhos.get(this.getAttribute("tamanho")) || this.getAttribute("tamanho") || "";
  }
}


customElements.define('custom-label', CustomLabel);