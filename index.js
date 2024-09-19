const fs = require("fs");
const { parseStringPromise } = require("xml2js");

const xml = fs.readFileSync("test.xml", "utf-8");

(async () => {
  try {
    const xdoc = await parseStringPromise(xml);

    // Exibir o conteúdo da tag article ($)
    console.log("Conteúdo da tag article:", xdoc.xml.article[0].$);

    const bodyText = xdoc.xml.article[0].body[0].Texto[0];
    console.log("Texto do body:", xdoc.xml.article[0].body[0]);
    const regex = /\b\d{3}\.\d{3}\/\d{4}(?![-\d])\b/g;

    const codigosEncontrados = bodyText.match(regex);

    console.log("Códigos encontrados no body:", codigosEncontrados);
  } catch (err) {
    console.error("Erro ao processar XML:", err);
  }
})();
