(function() {
  function getParams(param) {
    return new URLSearchParams(location.search).get(param);
  }

  const texto = getParams("texto");
  const main = document.querySelector("main");

  if (!main || !texto) return console.warn("not found", main, texto);

  const imagem = getParams("imagem") || "static/label.jpg";
  const tamanho = getParams("tamanho") || 60;

  main.innerHTML = `
    <custom-label imagem="${imagem}" texto="${texto}" tamanho=${tamanho}></custom-label>
    <custom-label imagem="${imagem}" texto="${"açucar"}" tamanho=${tamanho}></custom-label>
    <custom-label imagem="${imagem}" texto="semente de abóbora" tamanho=${tamanho}></custom-label>
    <custom-label imagem="${imagem}" texto="${texto}" tamanho=${tamanho}></custom-label>
  `;
})();