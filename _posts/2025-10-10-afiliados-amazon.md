<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Generador de Enlaces Afiliados Amazon</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
  :root {
    --color-principal: #ff9900;
    --color-hover: #e68a00;
    --color-fondo: #f8f9fa;
    --color-borde: #ccc;
    --ancho-maximo: 900px;
  }

  body {
    font-family: system-ui, sans-serif;
    background: var(--color-fondo);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
  }

  main {
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    margin: 40px 20px;
    padding: 30px;
    width: 100%;
    max-width: var(--ancho-maximo);
  }

  h1 {
    color: #333;
    text-align: center;
    font-size: clamp(1.6rem, 2vw + 1rem, 2.2rem);
  }

  p {
    text-align: center;
    color: #555;
    margin-top: 0;
  }

  textarea, button {
    width: 100%;
    padding: 14px;
    font-size: 1rem;
    margin-top: 15px;
    border-radius: 8px;
    border: 1px solid var(--color-borde);
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    background: var(--color-principal);
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
  }

  button:hover {
    background: var(--color-hover);
  }

  .result {
    margin-top: 25px;
    padding: 15px;
    background: #fff8e6;
    border-radius: 8px;
    border: 1px solid #ffe0a3;
    word-wrap: break-word;
    font-size: 0.95rem;
  }

  a {
    color: #0066c0;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 1024px) {
    body {
      align-items: center;
    }
    main {
      padding: 50px;
    }
  }
</style>
</head>

<body>
  <main>
    <h1>🔗 Generador de Enlace Amazon</h1>
    <p>Pega un texto o enlace de Amazon y genera tu enlace de afiliado automáticamente.</p>

    <textarea id="inputTexto" placeholder="Ejemplo: https://amzn.eu/d/a7913ZJ"></textarea>
    <button onclick="generar()">Generar enlace afiliado</button>

    <div class="result" id="resultado"></div>
  </main>

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
</body>
</html>
