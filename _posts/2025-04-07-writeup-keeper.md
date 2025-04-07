---
layout: single
title: WriteUp HTB - Máquina Keeper
excerpt: "En este artículo, resolveremos la máquina Keeper de la plataforma HTB."
date: 2025-04-07
classes: wide
header:
  teaser: /assets/images/htb/keeper/logo.png
  teaser_home_page: true
categories:
  - HTB
  - WriteUp
  - eJPT
tags:
  - CVE-2023-32784
  - Request Tracker
  - Information Leakage
  - KeePass .kdbx
  - Putty
  - Extensión .ppk
  - Clave Privada
  - RSA
  - Linux
  - Fácil
  - eJPT

---
<p align="center">
  <img src="/assets/images/htb/keeper/logo2.png" alt="Beep" width="2200">
</p>

> # IP Keeper: 10.129.229.41     
> # IP Local: 10.10.16.10


## 1. Enumeración de Puertos de la Máquina

Primeramente comprobamos que tenemos acceso a la máquina Keeper con una traza ICMP de un paquete. 
Además la conexión, nos permite identificar por el valor TTL (Time to alive), 
si nos enfrentamos a una máquina Linux(TTL -> 64) o Windows( -> 128)

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ping -c 1 10.129.229.41</code></pre>
  </div>

En HTB, se aprecia que el TTL es una unidad menor. Para visualizar la ruta completa de la conexión y comprobar que existe un nodo intermediario entre el atacante y la víctima, se utiliza la flag **-R**:

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ping -c 1 10.129.229.41 -R</code></pre>
  </div>

A continuación, se crea un directorio de trabajo en el escritorio, nombrándolo según la máquina:

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>mkdir Keeper</code></pre>
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
    <pre style="margin: 0;"><code>nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 10.129.229.41 -oG allPorts</code></pre>
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
  <img src="/assets/images/htb/keeper/nmap1.png" alt="Nmap" width="800">
</p>

Una vez concluido el escaneo de puertos, se utiliza una herramienta personalizada llamada **extractPorts** (definida en el .zshrc) para copiar los puertos relevantes al portapapeles y proceder a la enumeración de servicios.

<p align="center">
  <img src="/assets/images/htb/keeper/target.png" alt="ExtractPorts" width="900">
</p>

---

## 2. Enumeración de Servicios de los Puertos

Con la lista de puertos obtenida, se procede a identificar los servicios que corren en ellos. Esto permite conocer las versiones y configuraciones, facilitando la detección de posibles vulnerabilidades.

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>nmap -sCV -p22,80 -oN targeted</code></pre>
  </div>

  - **-sC:** Ejecuta scripts básicos de reconocimiento.
  - **-sV:** Detecta versiones y servicios.
  - **-oN:** Exporta los resultados en un formato normal.

---

## 3. Análisis de Servicios

Durante esta etapa se observa que el puerto 80 y 22 estan expuestos. Se procede a examinar la web mediante un navegador y, utilizando la extensión **Wappalyzer** de Firefox, se identifican las tecnologías empleadas.


<p align="center">
  <img src="/assets/images/htb/keeper/vhost.png" alt="Virtual Hosting" width="2500">
</p>

Al acceder a la web se produce un host discovery por lo que tendremos que añadir al /etc/hosts el dominio. Y vemos como al hacer ping al dominio, se nos resuelve el comando.

<p align="center">
  <img src="/assets/images/htb/keeper/hosts.png" alt="Hosts" width="2500">
</p>

Finalmente, se revela un panel de login de Request Tracker:

<p align="center">
  <img src="/assets/images/htb/keeper/login.png" alt="Login" width="2300">
</p>

---

## 4. Identificación de Vulnerabilidades

Se prueba inicialmente el acceso al panel utilizando las contraseñas por defecto, con éxito.

<p align="center">
  <img src="/assets/images/htb/keeper/pass.png" alt="Password 1" width="2500">
</p>


Se detecta que hay un leak de información en el apartado de usuario donde vemos un usuario potencial y un comentario de cambio de contraseña con esta expuesta. Por lo que tratamos de conectarnos por ssh y entramos en la máquina víctima con el usuario encontrado.

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ssh user@10.129.229.41</code></pre>
  </div>

Posteriormente, encontramos un zip que contiene un keepass y un volcado de un dumpeo de la base de datos del keepass.Por lo que para extraerlo y verlo en mi máquina, uso netcat para traerme el ficher.zip.

<p align="center">
  <img src="/assets/images/htb/keeper/ziplon.png" alt="zip" width="2500">
</p>

Nota: Usando md5sum podemos spamearlo sobre el fichero que estamos extrayendo para que cuando el contenido sea estático saber que ha concluido la extracción.

<p align="center">
  <img src="/assets/images/htb/keeper/md5.png" alt="md5" width="2500">
</p>


A priori, abrimos el keepas con keepassxc y vemos que nos pide la contraseña maestra. Para ello debemos de investigar sobre el dumpeo que se nos proporciona, y en ese binario con extensión .dmp existe una vulnerabilidad registrada como **CVE-2023-32784**

<p align="center">
  <img src="/assets/images/htb/keeper/keepass.png" alt="Keepass Login" width="2500">
</p>

---

## 5. Explotación de Vulnerabilidades

### Análisis y Explotación de CVE-2023-32784

Se identifica la vulnerabilidad, y tras horas investigando, encontré un script en python para extraer posibles contraseñas almcenadas en el binario.

<p align="center">
  <img src="/assets/images/htb/keeper/exploit.png" alt="Exploit" width="2500">
</p>



Tras tener una lista de posibles contraseñas, vemos que se encuentras algunos caracteres codificados, al copiar y pegar en google vemos que son letras noruegas. Probamos dicha contraseña en el gestor de contraseñas y accedemos.

<p align="center">
  <img src="/assets/images/htb/keeper/password.png" alt="Chrome Noruego" width="2500">
</p>

<p align="center">
  <img src="/assets/images/htb/keeper/kepasword.png" alt="KeePass PAssword" width="2500">
</p>


Dentro del keepass, vemos la contraseña del usuario root, la cual no funcionaba ni el la web ni por ssh. En las notas había una clave privada pero en formato PuTTY **.ppk**. 
<p align="center">
  <img src="/assets/images/htb/keeper/putty.png" alt="Credenciales root" width="2500">
</p>

Nos copiamos el contenido en neustro equipo para trabajar sobre este.
<p align="center">
  <img src="/assets/images/htb/keeper/fileppk.png" alt="File .ppk" width="2500">
</p>

Usamos la herramiento de puttygen para convertirlo a RSA **.pem** que estamos acostumbrado a usar.

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>sudo apt-get install putty-tools</code></pre>
  </div>

- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>puttygen key.ppk -O private-openssh -o key.pem
</code></pre>
  </div>


<p align="center">
  <img src="/assets/images/htb/keeper/id_rsa.png" alt="File .pem" width="2500">
</p>

Una vez Obtenido la clave privada, le damos el permiso 600
- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>chmod 600 key.pem</code></pre>
  </div>


Y con el parámetro  -i nos conectamos por ssh.
- **Comando:**
  <div style="background-color: rgba(156, 28, 66, 0.49); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px;">
    <pre style="margin: 0;"><code>ssh -i key.pem root@10.129.229.41</code></pre>
  </div>
 

<p align="center">
  <img src="/assets/images/htb/keeper/pwnd.png" alt="File .pem" width="2500">
</p>


Así conseguimos ganar acceso a la máquina y directamente como el usuario root.

