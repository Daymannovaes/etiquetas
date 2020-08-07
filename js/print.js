(function() {
  function getParams(param) {
    return new URLSearchParams(location.search).get(param);
  }

  const texto = getParams("texto");
  const main = document.querySelector("main");

  if (!main || !texto) return console.warn("not found", main, texto);

  const imagem = getParams("imagem") || "static/label.jpg";
  const tamanho = getParams("tamanho") || "medio";

  const items = texto.trim().split(",").map(tx => `
    <custom-label imagem="${imagem}" texto="${tx.trim()}" tamanho=${tamanho}></custom-label>
  `).join("\n");

  main.innerHTML = items;
})();