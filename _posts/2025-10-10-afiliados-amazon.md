<div class="amazon-box">
  <h2>🔗 Generador de Enlace Amazon</h2>
  <p>Pega un texto o enlace de Amazon y genera tu enlace de afiliado automáticamente.</p>

  <textarea id="inputTexto" placeholder="Pon aqui tu enlace:"></textarea>
  <button onclick="generar()">Generar enlace afiliado</button>

  <div class="result" id="resultado"></div>
</div>

<style>
.amazon-box {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 20px auto;
  text-align: center;
}
.amazon-box h2 {
  color: #333;
  margin-bottom: 10px;
  font-size: clamp(1.5rem, 2vw + 1rem, 2.1rem);
}
.amazon-box p {
  color: #555;
  font-size: 1rem;
  margin-bottom: 20px;
}
.amazon-box textarea {
  width: 100%;
  min-height: 90px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1rem;
  background: #111;
  color: #fff;
}
.amazon-box button {
  background: #ff9900;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
  transition: background 0.2s;
}
.amazon-box button:hover {
  background: #e68a00;
}
.amazon-box .result {
  background: #fff8e6;
  border: 1px solid #ffe0a3;
  padding: 12px;
  border-radius: 8px;
  margin-top: 15px;
  word-wrap: break-word;
  text-align: left;
}
.amazon-box a {
  color: #0066c0;
  text-decoration: none;
}
.amazon-box a:hover {
  text-decoration: underline;
}
@media (min-width: 1024px) {
  .amazon-box {
    padding: 50px;
  }
}
</style>

<script>
const AFFILIATE_TAG = "alvarorugu70c-21";

function extraerUrlAmazon(texto) {
  const patron = /(https?:\/\/(?:www\.)?(?:amazon\.[a-z.]{2,6}|amzn\.eu)[^\s]+)/i;
  const match = texto.match(patron);
  return match ? match[1] : null;
}

function generarLinkAfiliadoDesdeUrl(urlFinal) {
  const asinMatch = urlFinal.match(/\/dp\/([A-Z0-9]{10})/i);
  if (!asinMatch) return "⚠️ No se pudo extraer el ASIN del producto.";
  const asin = asinMatch[1];
  return `https://www.amazon.es/dp/${asin}?tag=${AFFILIATE_TAG}&linkCode=ll1&language=es_ES&ref_=as_li_ss_tl`;
}

async function generarLinkAfiliado(texto) {
  const urlOriginal = extraerUrlAmazon(texto);
  if (!urlOriginal) return "❌ No se encontró un enlace de Amazon válido.";
  try {
    if (urlOriginal.includes("amzn.eu")) {
      const resp = await fetch(urlOriginal, { redirect: "follow" });
      return generarLinkAfiliadoDesdeUrl(resp.url);
    } else {
      return generarLinkAfiliadoDesdeUrl(urlOriginal);
    }
  } catch (err) {
    console.error(err);
    return "⚠️ Error procesando la URL.";
  }
}

async function generar() {
  const texto = document.getElementById("inputTexto").value.trim();
  const resultado = document.getElementById("resultado");
  if (!texto) {
    resultado.textContent = "⚠️ Escribe o pega algo.";
    return;
  }
  resultado.textContent = "⏳ Procesando...";
  const enlace = await generarLinkAfiliado(texto);
  if (enlace.startsWith("http")) {
    resultado.innerHTML = `✅ Enlace afiliado:<br><a href="${enlace}" target="_blank">${enlace}</a>`;
  } else {
    resultado.textContent = enlace;
  }
}
</script>
