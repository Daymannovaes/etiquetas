(function() {
  function getParams(param) {
    return new URLSearchParams(location.search).get(param) || "";
  }

  const texto = getParams("texto");
  const main = document.querySelector("main");

  if (!main || !texto) return console.warn("not found", main, texto);

  const imagem = getParams("imagem") || "static/label.jpg";
  const tamanho = getParams("tamanho") || "medio";
  const margemfonte = getParams("margemfonte");
  const tamanhofonte = getParams("tamanhofonte");
  const fonte = getParams("fonte");
  const fontweight = getParams("fontweight");
  const escala = getParams("escala");

  const items = texto.trim().split(",").map(tx => `
    <custom-label
      imagem="${imagem}"
      texto="${tx.trim()}"
      tamanho="${tamanho}"
      margemfonte="${margemfonte}"
      tamanhofonte="${tamanhofonte}"
      fonte="${fonte}"
      fontweight="${fontweight}"
      escala="${escala}"
    ></custom-label>
  `).join("\n");

  main.innerHTML = items;
})();