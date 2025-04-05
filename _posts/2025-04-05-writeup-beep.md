---
layout: single
title: WriteUp HTB - Máquina Beep
excerpt: "En este artículo, resolveremos la máquina Beep de la plataforma HTB."
date: 2025-04-02
classes: wide
header:
  teaser: /assets/images/htb/beep/beeplogo.png
  teaser_home_page: true
categories:
  - HTB
  - WriteUp
  - eWPT
tags:
  - Elastix
  - LFI
  - Information Leakage
  - Vtiger
  - File Upload
  - RCE
  - Shellshock Attack
  - TLS
  - Linux
  - Fácil
  - eWPT

---
<p align="center">
  <img src="/assets/images/htb/beep/beep.png" alt="Beep" width="2200">
</p>

> # IP Beep: 10.129.28.115      
> # IP Local: 10.10.16.17 


## 1. Enumeración de Puertos de la Máquina

Primeramente comprobamos que tenemos acceso a la máquina Beep con una traza ICMP de un paquete. 
Además la conexión, nos permite identificar por el valor TTL (Time to alive), 
si nos enfrentamos a una máquina Linux(TTL -> 64) o Windows( -> 128)

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ping -c 1 10.129.28.115</code></pre>
  </div>

En HTB, se aprecia que el TTL es una unidad menor. Para visualizar la ruta completa de la conexión y comprobar que existe un nodo intermediario entre el atacante y la víctima, se utiliza la flag **-R**:

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ping -c 1 10.129.28.115 -R</code></pre>
  </div>

A continuación, se crea un directorio de trabajo en el escritorio, nombrándolo según la máquina:

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>mkdir Beep</code></pre>
  </div>

Para organizar el ataque, se utiliza una función personalizada llamada **mkt** (definida en el archivo .zshrc) que crea tres carpetas: `nmap`, `content` y `exploits`.

- **Función:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>mkt () {
  mkdir {nmap,content,exploits}
}</code></pre>
  </div>

Dentro de la carpeta **nmap**, se procede a enumerar los puertos abiertos entre los 65,535 disponibles:

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 10.129.28.115 -oG allPorts</code></pre>
  </div>

  - **-p-:** Escanea todo el rango de puertos.
  - **--open:** Muestra solo los puertos abiertos.
  - **-sS:** Realiza un TCP SYN Scan.
  - **--min-rate 5000:** Aumenta la velocidad del escaneo (más de 5000 paquetes por segundo).
  - **-vvv:** Modo triple verbose para mayor detalle.
  - **-n:** Omite la resolución DNS.
  - **-Pn:** Asume que el host está activo.
  - **-oG:** Exporta los resultados en formato grepeable, facilitando el filtrado posterior.

<p align="center">
  <img src="/assets/images/htb/beep/nmap1.png" alt="Nmap" width="800">
</p>

Una vez concluido el escaneo de puertos, se utiliza una herramienta personalizada llamada **extractPorts** (definida en el .zshrc) para copiar los puertos relevantes al portapapeles y proceder a la enumeración de servicios.

<p align="center">
  <img src="/assets/images/htb/beep/extra.png" alt="ExtractPorts" width="900">
</p>

---

## 2. Enumeración de Servicios de los Puertos

Con la lista de puertos obtenida, se procede a identificar los servicios que corren en ellos. Esto permite conocer las versiones y configuraciones, facilitando la detección de posibles vulnerabilidades.

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>nmap -sCV -p22,25,80,110,111,143,443,857,993,995,3306,4190,4445,4559,5038,10000 -oN targeted</code></pre>
  </div>

  - **-sC:** Ejecuta scripts básicos de reconocimiento.
  - **-sV:** Detecta versiones y servicios.
  - **-oN:** Exporta los resultados en un formato normal.

---

## 3. Análisis de Servicios

Durante esta etapa se observa que el puerto 80 aloja dos servicios HTTP y otro servicio se ejecuta en el puerto 10000. Se procede a examinar la web mediante un navegador y, utilizando la extensión **Wappalyzer** de Firefox, se identifican las tecnologías empleadas.

Al acceder a la web se produce una redirección al puerto 443 (HTTPS) y se presenta el error "SSL_ERROR_UNSUPPORTED_VERSION". Para solventarlo, se modifican las configuraciones TLS del navegador.

<p align="center">
  <img src="/assets/images/htb/beep/tls.png" alt="TLS Error" width="2500">
</p>

Finalmente, se revela un panel de login de Elastix:

<p align="center">
  <img src="/assets/images/htb/beep/loginela.png" alt="Login Elastix" width="700">
</p>

---

## 4. Identificación de Vulnerabilidades

Se prueba inicialmente el acceso al panel utilizando las contraseñas por defecto, sin éxito. A continuación, se emplea la herramienta **searchsploit** (de ExploitDB) para buscar vulnerabilidades relacionadas con Elastix.

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>searchsploit Elastix</code></pre>
  </div>

<p align="center">
  <img src="/assets/images/htb/beep/exdb.png" alt="ExploitDB Elastix" width="1500">
</p>

Se detecta que el sistema puede ser vulnerable tanto a RCE (Remote Code Execution) como a LFI (Local File Inclusion).

---

## 5. Explotación de Vulnerabilidades

### Análisis y Explotación de la Vulnerabilidad LFI

Se identifica una vulnerabilidad LFI en la URL que permite listar directorios del sistema, revelando archivos críticos (como `passwd`, `hosts`) y detalles sobre los puertos activos en `/proc/net/tcp`.

- **Comando para confirmar la vulnerabilidad:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>searchsploit Elastix -x &lt;ID_exploit&gt;</code></pre>
  </div>

Con esta vulnerabilidad, se prueban combinaciones de usuario y contraseña en el login de Elastix, obteniéndose acceso con las credenciales:
- **Usuario:** admin  
- **Contraseña:** jEhdIekWmdjE

### Explotación de la Vulnerabilidad RCE

También, se investiga una vulnerabilidad RCE, adaptando un exploit encontrado en Exploit-DB para evitar problemas de versión. Antes de lanzar el script, se prepara un listener en netcat:

- **Comando para iniciar netcat:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>nc -nlvp 443</code></pre>
  </div>

El exploit se adapta (actualizando librerías y ajustando parámetros) y, al ejecutarlo, se consigue una shell interactiva con el usuario **asterisk**.

<p align="center">
  <img src="/assets/images/htb/beep/rce.png" alt="Vulnerabilidad RCE" width="5600">
</p>

<p align="center">
  <img src="/assets/images/htb/beep/exploit.png" alt="Exploit Adaptado" width="5300">
</p>

Además, se intentó acceder por SSH en el puerto 22 usando fuerza bruta con las credenciales obtenidas en el LFI, pero se recibió el siguiente error:
> `ssh root@10.129.27.99: Unable to negotiate with 10.129.27.99 port 22: no matching key exchange method found. Their offer: diffie-hellman-group-exchange-sha1, diffie-hellman-group14-sha1, diffie-hellman-group1-sha1`

Para solucionarlo, se utiliza el siguiente comando ajustado:

- **Comando para SSH:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa,ssh-dss root@10.129.27.99</code></pre>
  </div>

Y sobre este se aplica la fuerza bruta con dos diccionarios personalizados, uno para users y otro para posibles passwords.
---

## 6. Post-Explotación

Tras obtener el acceso con el exploit en python del RCE, se realiza un tratamiento a la consola:

- Iniciar una sesión:
  - **Comando:**
    <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
      <pre style="margin: 0;"><code>script /dev/null -c bash</code></pre>
    </div>
- Suspender la shell con `ctrl+z`.
- Reanudar la shell en modo raw:
  - **Comando:**
    <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
      <pre style="margin: 0;"><code>stty raw -echo; fg</code></pre>
    </div>
- Restablecer el entorno:
  - **Comando:**
    <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
      <pre style="margin: 0;"><code>reset xterm</code></pre>
    </div>
- Configurar las variables de entorno:
  - **Comandos:**
    <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
      <pre style="margin: 0;"><code>export TERM=xterm
export SHELL=bash</code></pre>
    </div>

También ajustar la resolución de la terminal para mejorar la visibilidad por si necesitamos hacer algún comando de editor de texto, la resolución sea ajustada:

- **Ver dimensiones de nuestra terminal:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>stty -a</code></pre>
  </div>

- **Ajustar filas y columnas (ejemplo):**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>stty rows 24 columns 80</code></pre>
  </div>

---

## 7. Escalada de Privilegios

Una vez obtenida una shell interactiva, se procede a investigar posibles vectores de escalada de privilegios. Se comienza verificando qué comandos se pueden ejecutar con privilegios elevados:

- **Comando para listar permisos sudo:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>sudo -l</code></pre>
  </div>

En este caso, se detectaron posibilidades para escalar privilegios mediante:
- El uso de GTFOBins para explotar comandos como **yum**.
- Otra técnica sobre **nmap** en modo interactivo (en versiones 2.02 a 5.21) con:
  - **Comando interactivo:**
    <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
      <pre style="margin: 0;"><code>sudo nmap --interactive</code></pre>
    </div>
  - Dentro de la consola interactiva, se puede escribir `!sh` para obtener una shell con privilegios de root.

---

## 8. Otras Formas de Explotación

Esta fue la forma que encontré para resolver esta máquina, pero hay muchas más. Una de ellas es usadno un shellshock atack por el panel de login que se muestraba en el puerto 100000.

<p align="center">
  <img src="/assets/images/htb/beep/shock.png" alt="schok" width="1500">
</p>

Vemos que al hacer un login erróneo nos redirige a un get de un archivo con extension .cgi
Desde burpsuite podemos interceptar el método GET de esa página y editar la cabecera de nuestro User Agent (en Referer tambien y en otros campos más) para efectuar el ShellShock atack y mandarnos una consola interactiva por el puerto 444.

<p align="center">
  <img src="/assets/images/htb/beep/burp.png" alt="burp" width="5100">
</p>

Así conseguimos ganar acceso a la máquina y directamente como el usuario root.

