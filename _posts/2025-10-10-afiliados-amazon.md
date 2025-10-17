---
layout: single
title: Afiliado
excerpt: "Link Amazons"
date: 2025-10-07
classes: wide
header:
  teaser: /assets/images/amazon.png
  teaser_home_page: true
categories:
  - Links
tags:
  - amazon

---
<p align="center">
  <img src="/assets/images/amazon.png" alt="ama" width="2200">
</p>


# 🔗 Generador de Enlaces Afiliados Amazon

Este proyecto es un **frontend 100 % en JavaScript** que convierte automáticamente cualquier enlace de producto de Amazon en un enlace con tu **tag de afiliado** (`alvarorugu70c-21`).  

Puedes alojarlo en GitHub Pages, Render, Netlify o cualquier hosting estático gratuito.

---

## 🧠 Descripción

- Detecta automáticamente la URL de Amazon dentro de cualquier texto (ej. “Oferta… https://amzn.eu/d/a7913ZJ”).
- Elimina tags antiguos de otros afiliados.
- Inserta tu tag `alvarorugu70c-21` y los parámetros oficiales del programa Amazon Associates.
- Genera un enlace limpio y clicable.
- Funciona totalmente **en el navegador**, sin backend.

---

## 🧩 Código completo (`index.html`)

Guarda el siguiente contenido como `index.html`:

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Generador de Enlaces Afiliados Amazon</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: system-ui, sans-serif; background:#f8f9fa; padding:30px; max-width:700px; margin:auto; }
  h1 { color:#333; }
  input, textarea, button {
    width:100%; padding:10px; font-size:16px; margin-top:10px;
    border-radius:6px; border:1px solid #ccc; box-sizing:border-box;
  }
  button {
    background:#ff9900; border:none; color:white; cursor:pointer; margin-top:10px;
  }
  button:hover { background:#e68a00; }
  .result {
    margin-top:20px; padding:10px; background:white; border-radius:6px;
    border:1px solid #ddd; word-wrap:break-word;
  }
</style>
</head>
<body>
  <h1>🔗 Generador de Enlace Amazon</h1>
  <p>Pega un texto o enlace de Amazon.</p>

  <textarea id="inputTexto" rows="3" placeholder="https://amzn.eu/d/a7913ZJ"></textarea>
  <button onclick="generar()">Generar enlace afiliado</button>

  <div class="result" id="resultado"></div>

<script>
const AFFILIATE_TAG = "alvarorugu70c-21";

function extraerUrlAmazon(texto) {
  const patron = /(https?:\/\/(?:www\.)?(?:amazon\.[a-z.]{2,6}|amzn\.eu)[^\s]+)/i;
  const match = texto.match(patron);
  return match ? match[1] : null;
}

function generarLinkAfiliado(texto) {
  const urlOriginal = extraerUrlAmazon(texto);
  if (!urlOriginal) return "❌ No se encontró un enlace de Amazon válido.";

  try {
    const u = new URL(urlOriginal);
    const params = new URLSearchParams(u.search);

    // eliminar posibles tags previos
    ["tag", "linkCode", "linkId", "ref_"].forEach(k => params.delete(k));

    // agregar tus parámetros de afiliado
    params.set("linkCode", "ll1");
    params.set("tag", AFFILIATE_TAG);
    params.set("linkId", crypto.randomUUID());
    params.set("language", "es_ES");
    params.set("ref_", "as_li_ss_tl");

    // limpiar /ref=... del path
    u.pathname = u.pathname.replace(/\/ref=[^/?]+/, "");

    u.search = params.toString();
    return u.toString();
  } catch (err) {
    return "⚠️ Error procesando la URL.";
  }
}

function generar() {
  const texto = document.getElementById("inputTexto").value.trim();
  const resultado = document.getElementById("resultado");
  if (!texto) {
    resultado.textContent = "⚠️ Escribe o pega algo.";
    return;
  }
  const enlace = generarLinkAfiliado(texto);
  if (enlace.startsWith("http")) {
    resultado.innerHTML = `✅ Enlace:<br><a href="${enlace}" target="_blank">${enlace}</a>`;
  } else {
    resultado.textContent = enlace;
  }
}
</script>
</body>
</html>
