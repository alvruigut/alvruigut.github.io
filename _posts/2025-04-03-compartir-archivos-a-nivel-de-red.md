---
layout: single
title: "Transferencia de Archivos entre Parrot y Windows"
excerpt: "Aprende a compartir archivos entre Parrot OS y Windows a través de red local usando SMB, o un servidor HTTP simple con Python."
date: 2025-04-03
classes: wide
header:
  teaser: /assets/images/ruyztz/compartir_archivos.png
  teaser_home_page: true
categories:
  - Redes
  - Linux
tags:
  - Parrot OS
  - Windows
  - SMB
  - Impacket
  - Python
  - Compartir Archivos
---

# Transferencia de Archivos entre Parrot y Windows

Este artículo describe cómo transferir archivos entre **Parrot OS** y **Windows** en una red local utilizando distintos métodos: SMB con `impacket`, montaje de carpetas compartidas con `CIFS`, y un servidor HTTP básico con `Python`.

---

## 1. Transferir un archivo de Windows a Parrot

### Configuración en Parrot

1. Accede a la carpeta que deseas compartir:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>cd ~/ruta/de/la/carpeta</code></pre>
</div>

2. Eleva permisos a root:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>sudo su</code></pre>
</div>

3. Inicia un servidor SMB con `impacket`:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>impacket-smbserver smbFolder $(pwd) -smb2support -username alvaro -password alvaro123</code></pre>
</div>

---

### Conexión desde Windows

1. Abre `cmd`.

2. Conecta la carpeta compartida:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>net use L: \\192.168.1.251\smbFolder /user:alvaro alvaro123</code></pre>
</div>

3. Copia un archivo desde Windows:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>copy "C:\Users\alvar\Pictures\Joker.jpg" L:\</code></pre>
</div>

4. Verifica en Parrot que se haya copiado correctamente.

5. Desconecta la unidad de red:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>net use L: /delete</code></pre>
</div>

---

## 2. Transferir un archivo de Parrot a Windows

### Configuración en Windows

1. Crea una carpeta compartida (ej: `C:\SharedFolder`).

2. Haz clic derecho → Propiedades → Compartir → Asigna un nombre (ej: `sharedFolder`) y otorga permisos de lectura/escritura.

3. Obtén la IP del equipo:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>ipconfig</code></pre>
</div>

---

### Conexión desde Parrot

1. (Opcional) Crea una carpeta de montaje:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>mkdir /mnt/windowsShare</code></pre>
</div>

2. Monta la carpeta de Windows:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>sudo mount -t cifs -o username=alvaro,password=alvaro123 //192.168.1.100/sharedFolder /mnt/windowsShare</code></pre>
</div>

3. Copia el archivo desde Parrot:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>cp /ruta/archivoParrot /mnt/windowsShare/</code></pre>
</div>

4. Verifica desde Windows que el archivo se ha copiado.

5. Desmonta la unidad:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>sudo umount /mnt/windowsShare</code></pre>
</div>

---

## 3. Transferencia rápida con servidor HTTP en Windows

Una forma simple y sin configuraciones complejas. Ideal para pasar archivos puntuales.

### Iniciar servidor HTTP en Windows

1. Abre una terminal en la carpeta con los archivos a compartir.

2. Lanza el servidor HTTP:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>python -m http.server 80</code></pre>
</div>


3. Obtén la IP de Windows con:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>ipconfig</code></pre>
</div>

---

### Descargar archivos desde Parrot

Usa `wget`:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>wget http://192.168.1.100:8000/archivo.txt</code></pre>
</div>

O `curl`:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>curl -O http://192.168.1.100:8000/archivo.txt</code></pre>
</div>

---

### 3. Transferencia rápida con servidor HTTP en Linux

1. En Parrot, entra en la carpeta a compartir.

2. Lanza el servidor:

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 6px 10px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 14px;">
<pre style="margin: 0;"><code>python3 -m http.server 8000</code></pre>
</div>

3. Desde Windows, abre el navegador y accede a:

http://IP-DE-PARROT:8000


Y descarga desde el navegador.



