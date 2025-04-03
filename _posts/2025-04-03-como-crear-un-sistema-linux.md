---
layout: single
title: Cómo personalizar tu propio sistema Linux
excerpt: "En este artículo, os enseño a crear vuestro propio sistema Linux desde cero, tomando completo control de las cosas que se instalan y arrancando el sistema con PArrotOS."
date: 2025-04-02
classes: wide
header:
  teaser: /assets/images/ruyztz/ruyzIOS.png
  teaser_home_page: true
categories:
  - Configuración
  - Personalización
tags:
  - Linux
  - Personalización
---
<p align="center">
  <img src="/assets/images/ruyztz/ruyzIOS.png" alt="RuyzTzOS" width="600">
</p>


## Índice y Estructura Principal

- [Instalación del Sistema Operativo](#instalación-del-sistema-operativo)
  - [Instalación de Software de Virtualización](#instalación-de-software-de-virtualización)
  - [Configuración de la Máquina Virtual en VMware](#configuración-de-la-máquina-virtual-en-vmware)
  - [Instalación del Sistema Operativo en la Máquina Virtual](#instalación-del-sistema-operativo-en-la-máquina-virtual)
  - [Configuración Inicial](#configuración-inicial)
- [Instalación y Configuración de BSPWM y SXHKD](#instalación-y-configuración-de-bspwm-y-sxhkd)
  - [Instalación de Dependencias](#instalación-de-dependencias)
  - [Instalación de BSPWM y SXHKD](#instalación-de-bspwm-y-sxhkd)
- [Instalación y Configuración de Kitty](#instalación-y-configuración-de-kitty)
  - [Modificaciones en el Archivo sxhkdrc](#modificaciones-en-el-archivo-sxhkdrc)
  - [Creación del Script de Redimensionado](#creación-del-script-de-redimensionado)
- [Instalación y Configuración de Polybar, Picom y Rofi](#instalación-y-configuración-de-polybar-picom-y-rofi)
  - [Instalación de Polybar](#instalación-de-polybar)
  - [Instalación de Picom](#instalación-de-picom)
  - [Instalación de Rofi](#instalación-de-rofi)
  - [Configuración en sxhkdrc](#configuración-en-sxhkdrc)
  - [Prueba del Entorno](#prueba-del-entorno)
- [Instalación y Configuración de Fuentes, Kitty y Feh](#instalación-y-configuración-de-fuentes-kitty-y-feh)
  - [Instalación de Fuentes Nerd](#instalación-de-fuentes-nerd)
  - [Instalación de Kitty](#instalación-de-kitty)
  - [Configuración de Kitty](#configuración-de-kitty)
  - [Instalación y Configuración de Feh](#instalación-y-configuración-de-feh)
  - [Configuración de Z Shell (Zsh)](#configuración-de-z-shell-zsh)
- [Despliegue de Polybar](#despliegue-de-polybar)
- [Configuración de Picom](#configuración-de-picom)
- [Instalación y Configuración de ZSH con Powerlevel10k](#instalación-y-configuración-de-zsh-con-powerlevel10k)
  - [Instalación de ZSH Plugins y Powerlevel10k](#instalación-de-zsh-plugins-y-powerlevel10k)
  - [Personalización del Prompt](#personalización-del-prompt)
  - [Configuración Adicional para Plugins de ZSH](#configuración-adicional-para-plugins-de-zsh)
  - [Configuración de Historial y Completado](#configuración-de-historial-y-completado)
- [Instalación y Configuración de Bat, Cat y LSD](#instalación-y-configuración-de-bat-cat-y-lsd)
  - [Instalación de Bat y LSD](#instalación-de-bat-y-lsd)
  - [Configuración de Alias para Bat y LSD](#configuración-de-alias-para-bat-y-lsd)
- [Arreglo para Burpsuite](#arreglo-para-burpsuite)
  - [Actualizar Java para Burpsuite](#actualizar-java-para-burpsuite)
  - [Solución al Problema de Java](#solución-al-problema-de-java)
  - [Lanzador para Burpsuite desde Rofi](#lanzador-para-burpsuite-desde-rofi)
- [Configuración de Polybar](#configuración-de-polybar)
  - [Configuración Inicial](#configuración-inicial-1)
  - [Configuración del Archivo current.ini](#configuración-del-archivo-currentini)
  - [Creación de Scripts Personalizados](#creación-de-scripts-personalizados)
  - [Configuración del Menú de Energía con Rofi](#configuración-del-menú-de-energía-con-rofi)
  - [Funciones Personalizadas](#funciones-personalizadas)
- [Configuración Extra](#configuración-extra)
  - [Configuraciones Iniciales del Sistema](#configuraciones-iniciales-del-sistema)
  - [Picom: Configuración de Opacidad](#picom-configuración-de-opacidad)
  - [Ajustes en bspwmrc](#ajustes-en-bspwmrc)
  - [SlimLock](#slimlock)
  - [Configuración de Nano](#configuración-de-nano)
  - [Arreglo para Conexión de Red en VMware](#arreglo-para-conexión-de-red-en-vmware)
  - [Instalación de whichSystem.py](#instalación-de-whichsystempy)
  - [Instalación de fastTCPScan](#instalación-de-fasttcpscan)
- [Configuración de NvChad y Neovim](#configuración-de-nvchad-y-neovim)
  - [Instalación de NvChad y Neovim](#instalación-de-nvchad-y-neovim-1)
  - [Configuración Inicial de NvChad](#configuración-inicial-de-nvchad)
  - [Atajos Útiles en NvChad](#atajos-útiles-en-nvchad)
  - [Configuración de Rofi y i3lock](#configuración-de-rofi-y-i3lock)
  - [Configuración Adicional](#configuración-adicional-1)
- [Configuración de Firefox](#configuración-de-firefox)
  - [Instalación de Firefox](#instalación-de-firefox-1)
  - [Configuración Inicial en Firefox](#configuración-inicial-en-firefox)
  - [Extensiones Recomendadas](#extensiones-recomendadas)
  - [Configuración del Certificado para BurpSuite](#configuración-del-certificado-para-burpsuite)
  - [Limpieza de Descargas](#limpieza-de-descargas)

---

## Instalación del Sistema Operativo

### Instalación de Software de Virtualización

1. Descargar e instalar uno de los siguientes programas:
   - **VirtualBox:** [https://www.virtualbox.org](https://www.virtualbox.org)
   - **VMware:** [https://www.vmware.com](https://www.vmware.com)

### Configuración de la Máquina Virtual en VMware

1. Crear una nueva máquina virtual:
   - Navegar a: **File → New Virtual Machine**.
   - Seleccionar **Typical**.
   - Elegir la opción: **Installer disk image file (ISO)** y cargar la imagen de Parrot Security OS descargada desde [https://parrotsec.org/download](https://parrotsec.org/download).  
     *Nota: Se debe escoger la Security Edition en formato .iso para 64 bits.*

2. Configuración de hardware:
   - **Nombre de la máquina virtual:** RuyzTzOS.
   - **Tamaño máximo del disco:** 80 GB.
   - **Configuración de disco:** Store virtual disk as a single file.
   - **Personalizar el hardware:**
     - Memoria: 16 GB (o 8 GB con 2 núcleos si se requiere menos).
     - Procesadores: 4 procesadores con 4 núcleos cada uno.
     - Adaptador de red: Configurar en modo **Bridged** y habilitar la opción “Replicate physical network connection state”.
     - Pantalla: Habilitar **Accelerated 3D Graphics** y asignar la memoria máxima de video disponible.

3. Guardar los cambios y finalizar la configuración.

### Instalación del Sistema Operativo en la Máquina Virtual

1. Iniciar la máquina virtual y seleccionar **Try/Install**.
2. Doble clic en **Install Parrot Security**.
3. Configuración inicial:
   - **Idioma:** Español de España.
   - **Ubicación:** Madrid.
   - **Teclado:** Español Default (comprobar funcionalidad).

4. Configuración del disco:
   - Seleccionar **Borrar disco**, sin swap y cifrar disco.
   - Usar una contraseña sin caracteres especiales para evitar problemas con el teclado en inglés.

5. Completar los datos del usuario y proceder con la instalación.
6. Al finalizar, reiniciar el sistema.

### Configuración Inicial

1. Eliminar el archivo **README** del escritorio.
2. Crear una carpeta con vuestro nombre en el escritorio.
3. **Nota importante:** Nunca ejecutar `sudo apt upgrade`. En su lugar, usar:

    sudo apt update  
    sudo parrot=upgrade

4. Solución de errores comunes:
   - Si aparece un error de configuración duplicada en `/etc/apt/sources.list`, abrir el archivo y comentar la línea problemática.
   - Ver posibles eliminaciones antes de ejecutar `autoremove`:

        sudo apt autoremove ==dry=run

   - Para eliminar un paquete específico:

        sudo apt remove packageName

---

## Instalación y Configuración de BSPWM y SXHKD

### Instalación de Dependencias

1. Como **root**, instalar las siguientes dependencias:

    sudo apt install build-essential git vim libxcb-util0-dev libxcb-ewmh-dev libxcb-randr0-dev libxcb-icccm4-dev libxcb-keysyms1-dev libxcb-xinerama0-dev libasound2-dev libxcb-xtest0-dev libxcb-shape0-dev  
    sudo apt install bspwm

### Instalación de BSPWM y SXHKD

1. Como usuario, descargar los repositorios y compilar:

    cd ~/Descargas  
    git clone https://github.com/baskerville/bspwm.git  
    git clone https://github.com/baskerville/sxhkd.git

2. Compilar e instalar **bspwm**:

    cd bspwm  
    make  
    sudo make install

3. Compilar e instalar **sxhkd**:

    cd ../sxhkd  
    make  
    sudo make install

4. Crear directorios de configuración:

    mkdir ~/.config/bspwm  
    mkdir ~/.config/sxhkd

5. Copiar los archivos de configuración de ejemplo:

    cp ~/Descargas/bspwm/examples/bspwmrc ~/.config/bspwm/  
    cp ~/Descargas/bspwm/examples/sxhkdrc ~/.config/sxhkd/  
    chmod +x ~/.config/bspwm/bspwmrc

---

## Instalación y Configuración de Kitty

### Modificaciones en el Archivo sxhkdrc

1. Instalar el terminal **Kitty**:

    sudo apt install kitty  
    which kitty

2. Copiar la ruta proporcionada por `which kitty` para usarla en la configuración posterior.
3. Editar el archivo `sxhkdrc`:

    nano ~/.config/sxhkd/sxhkdrc

4. Realizar las siguientes modificaciones:
   - Cambiar el terminal por la ruta obtenida de `which kitty`:

        super + Return  
            $pathKitty

   - Configurar atajos para reiniciar o cerrar BSPWM:

        super + shift + {q, r}

   - Cambiar la navegación direccional a:

        {Left, Down, Up, Right}

   - Añadir la funcionalidad de redimensionar ventanas:

        # Custom Resize  
        super + alt + {Left, Down, Up, Right}  
            ~/.config/bspwm/scripts/bspwm_resize {west, south, north, east}

   - Abrir Firefox:

        super + shift + f  
            /usr/bin/firefox

5. Guardar los cambios con **Ctrl+S** y salir con **Ctrl+X**.

### Creación del Script de Redimensionado

1. Crear el directorio y archivo para el script:

    mkdir ~/.config/bspwm/scripts  
    touch ~/.config/bspwm/scripts/bspwm_resize  
    chmod +x ~/.config/bspwm/scripts/bspwm_resize

2. Editar el archivo `bspwm_resize`:

    nano ~/.config/bspwm/scripts/bspwm_resize

3. Añadir el siguiente contenido al script:

    #!/usr/bin/env dash

    if bspc query -N -n focused.floating > /dev/null; then
        step=20
    else
        step=100
    fi

    case "$1" in
        west)  dir=right; fallback=left; x="$step"; y=0 ;;
        east)  dir=right; fallback=left; x="$step"; y=0 ;;
        north) dir=top;   fallback=bottom; x=0; y="$step" ;;
        south) dir=top;   fallback=bottom; x=0; y="$step" ;;
    esac

    bspc node -z "$dir" "$x" "$y" || bspc node -z "$fallback" "$x" "$y"

4. Guardar y salir.

---

## Instalación y Configuración de Polybar, Picom y Rofi

### Instalación de Polybar

1. Como **root**, instalar **Polybar**:

    sudo apt install polybar

### Instalación de Picom

1. Navegar al repositorio oficial de Picom para revisar las dependencias:  
   [https://github.com/yshui/picom](https://github.com/yshui/picom)

2. Instalar las dependencias requeridas:

    sudo apt install libconfig-dev libdbus-1-dev libegl1-mesa-dev libeglib-dev libepoxy-dev libpcre2-dev libx11-xcb-dev libxcb-composite0-dev libxcb-damage0-dev libxcb-glx0-dev libxcb-image0-dev libxcb-present-dev libxcb-randr0-dev libxcb-render0-dev libxcb-render-util0-dev libxcb-shape0-dev libxcb-util-dev libxcb-xfixes0-dev meson ninja-build uthash-dev -y  
    sudo apt update

3. Clonar y compilar **Picom**:

    su ruyztz  
    cd ~/Descargas  
    git clone https://github.com/yshui/picom  
    cd picom  

    # Comprobar si Meson está instalado:
    which meson  

    # Configurar y compilar:
    meson setup --buildtype=release build  
    # Si falla por cmake:
    sudo apt install cmake  
    ninja -C build  
    sudo ninja -C build install

### Instalación de Rofi

1. Instalar **Rofi**:

    sudo apt install rofi

2. Probar Rofi:

    rofi -show run

   Esto abrirá la interfaz de Rofi para lanzar programas.

### Configuración en sxhkdrc

1. Editar el archivo de configuración de **SXHKD**:

    nano ~/.config/sxhkd/sxhkdrc

2. Añadir la línea para lanzar Rofi:

    # Program launcher  
    super + d  
        /usr/bin/rofi -show run

3. Guardar y salir con **Ctrl+S** y **Ctrl+X**.

### Prueba del Entorno

1. En el panel de login, seleccionar **BSPWM** haciendo clic en el icono circular.
2. Iniciar sesión; el entorno se verá negro inicialmente.
3. Probar los siguientes atajos para verificar la configuración:
   - Abrir terminal (super + Return), ponerla en modo flotante, redimensionar con super + alt + flechas.
   - Abrir Rofi con super + d.

---

## Instalación y Configuración de Fuentes, Kitty y Feh

### Instalación de Fuentes Nerd

1. Descargar la fuente **Hack Nerd Font** desde:  
   [Nerd Fonts](https://www.nerdfonts.com/font-downloads)

2. Como **root**, mover el archivo descargado:

    cd /usr/local/share/fonts  
    mv /home/ruyztz/Descargas/Hack.zip .  
    7z x Hack.zip  
    rm Hack.zip LICENSE.md README.md

### Instalación de Kitty

1. Descargar la última versión de **Kitty** desde:  
   [Kitty Releases](https://github.com/kovidgoyal/kitty/releases)

2. Proceder con la instalación:

    sudo apt remove kitty  
    cd /opt  
    mv /home/ruyztz/Descargas/kitty...txz .  
    7z x kitty...  
    rm kitty...  # Elimina el archivo descargado  
    mkdir kitty  
    mv kitty...tar kitty/  
    cd kitty  
    tar -xf kitty...tar  
    rm kitty...tar

3. Configurar el atajo en **sxhkdrc**:

    nano ~/.config/sxhkd/sxhkdrc

    # Cambiar la línea para lanzar Kitty:
    super + Return  
        /opt/kitty/bin/kitty

4. Guardar los cambios (Ctrl+S, Ctrl+X), salir y reiniciar el entorno.
5. Comprobar la instalación:

    kitty --version

### Configuración de Kitty

1. Crear y editar el archivo de configuración:

    nano ~/.config/kitty/kitty.conf

2. Añadir la siguiente configuración:

    enable_audio_bell no  
    include color.ini  
    font_family HackNerdFont  
    font_size 13  
    disable_ligatures never  
    url_color #61afef  
    url_style curly  
    background_opacity 0.95  
    shell zsh  
    map ctrl+shift+t new tab with cwd  
    map ctrl+shift+enter new window with cwd

3. Crear el archivo de colores personalizado:

    nano ~/.config/kitty/color.ini

4. Añadir los colores:

    foreground #a9b1d6  
    background #1a1b26  
    color0 #414868  
    color1 #f7768e  
    # Añadir las definiciones para cada color según el ejemplo proporcionado.

### Instalación y Configuración de Feh

1. Instalar las herramientas necesarias:

    sudo apt install imagemagick ranger feh

2. Crear un directorio para los fondos:

    mkdir ~/Desktop/ruyztz/Fondos

3. Añadir el fondo de pantalla en el directorio y configurar Feh:

    echo '/usr/bin/feh --bg-fill /home/ruyztz/Desktop/ruyztz/Fondos/fondo.jpg &' >> ~/.config/bspwm/bspwmrc

4. Reiniciar el entorno para aplicar los cambios (super + shift + q).

### Configuración de Z Shell (Zsh)

1. Cambiar el shell predeterminado para el usuario y root:

    sudo usermod --shell /usr/bin/zsh root  
    sudo usermod --shell /usr/bin/zsh ruyztz

2. Copiar la configuración de Kitty a root:

    sudo cp /home/ruyztz/.config/kitty/* /root/.config/kitty/

---

## Despliegue de Polybar

1. Clonar el repositorio de configuración:

    cd /home/ruyztz/Descargas  
    git clone https://github.com/VaughnValle/blue-sky.git

2. Copiar la configuración de Polybar:

    cd blue-sky/polybar  
    cp -r * ~/.config/polybar

3. Añadir el comando para iniciar Polybar en el archivo `bspwmrc`:

    echo '~/.config/polybar/./launch.sh &' >> ~/.config/bspwm/bspwmrc

4. Instalar las fuentes necesarias:

    sudo su  
    cp fonts/* /usr/share/fonts/truetype/  
    fc-cache -v

5. Reiniciar el entorno para aplicar los cambios:

    window shift r

---

## Configuración de Picom

1. Añadir Picom al archivo `bspwmrc` para ejecutarlo al iniciar el sistema:

    echo 'picom &' >> ~/.config/bspwm/bspwmrc

2. Configurar los bordes de las ventanas:

    echo 'bspc config border_width 1' >> ~/.config/bspwm/bspwmrc

3. Para habilitar bordes redondeados y sombras experimentales:

    echo 'picom --experimental-backends &' >> ~/.config/bspwm/bspwmrc

4. Para abrir ventanas de Tk como flotantes automáticamente:

    echo 'bspc rule -a Tk state=floating' >> ~/.config/bspwm/bspwmrc

5. Crear el directorio de configuración y editar el archivo de configuración de Picom:

    mkdir ~/.config/picom  
    cd ~/.config/picom  
    nano picom.conf

6. Añadir la siguiente configuración (por ejemplo):

    ##############################################################################
    # CORNERS
    ##############################################################################
    corner_radius = 20;
    rounded_corners_exclude = [
        #"class_g = 'firefox'",
    ];
    round_borders = 20;
    round_borders_exclude = [
        #"class_g = 'TelegramDesktop'",
    ];

    ##############################################################################
    # SHADOWS
    ##############################################################################
    shadow = true;
    shadow_radius = 15;
    shadow_opacity = 0.5;
    shadow_offset_x = 15;
    shadow_offset_y = 15;
    shadow_exclude = [
        "class_g = 'firefox' && argb",
    ];

    ##############################################################################
    # FADING
    ##############################################################################
    fade_in_step = 0.01;
    fade_out_step = 0.01;

    ##############################################################################
    # OPACITY
    ##############################################################################
    inactive_opacity = 1.0;
    frame_opacity = 1.0;
    active_opacity = 1.0;
    inactive_opacity_override = false;

    ##############################################################################
    # BLUR
    ##############################################################################
    blur_method = "dual_kawase";
    blur_size = 2;
    blur_strength = 3;
    blur_background = true;

    ##############################################################################
    # GENERAL
    ##############################################################################
    backend = "glx";
    vsync = false;
    detect_rounded_corners = true;
    detect_client_opacity = true;
    refresh_rate = 0;

    wintypes:
    {
        tooltip = { fade = true; shadow = true; opacity = 0.8; };
        dropdown_menu = { shadow = false; };
        popup_menu = { shadow = false; };
    }

7. Guardar los cambios y reiniciar el entorno.

---

## Instalación y Configuración de ZSH con Powerlevel10k

### Instalación de ZSH Plugins y Powerlevel10k

1. Instalar plugins para ZSH:

    sudo apt install zsh-autosuggestions zsh-syntax-highlighting zsh-autocomplete -y

2. Descargar **Powerlevel10k** desde su repositorio oficial:

    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k  
    echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc

3. Iniciar ZSH y configurar Powerlevel10k:

    zsh  
    p10k configure

   Siga las opciones del asistente de configuración:
   - ¿Ves el diamante? → Sí
   - ¿Ves el candado? → Sí
   - ¿Ves la flecha? → Sí
   - ¿Ves los iconos? → Sí
   - Seleccionar **Clásico: 2**
   - **Unicode: 1**
   - **Tema claro: 2**
   - ¿Incluir hora? → No
   - **Estilo angled: 1**
   - **Estilo sharp: 3**
   - **Estilo slanted: 4**
   - **Una línea: 1**
   - **Sparse: 2**
   - **Muchos iconos: 2**
   - **Conciso: 2**
   - **Fluido: 2**
   - ¿Prompt transitorio? → No
   - **Verbose: 1**
   - Aplicar cambios: Sí

### Personalización del Prompt

1. Editar el archivo de configuración de Powerlevel10k:

    nano ~/.p10k.zsh

2. Realizar los siguientes cambios:
   - Vaciar los elementos del `POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS`:

        POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=()

   - Personalizar los elementos del `POWERLEVEL9K_LEFT_PROMPT_ELEMENTS`:

        POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
          context
          command_execution_time
          status
        )

   - Agregar configuraciones adicionales:

        typeset -g POWERLEVEL9K_DIR_ANCHOR_BOLD=false
        typeset -g POWERLEVEL9K_CONTEXT_PREFIX=' '
        typeset -g POWERLEVEL9K_CONTEXT_ROOT_TEMPLATE=' Alien Icon '

### Configuración Adicional para Plugins de ZSH

1. Crear y configurar el archivo `sudo.plugin.zsh`:

    cd /usr/local/share  
    mkdir zsh-sudo  
    cd zsh-sudo  
    nano sudo.plugin.zsh

   (Añadir el código del plugin sudo según se requiera.)

2. Actualizar el archivo `.zshrc` para incluir los plugins:

    nano ~/.zshrc

    if [ -f /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh ]; then
        source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
    fi

    if [ -f /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh ]; then
        source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
    fi

    if [ -f /usr/local/share/zsh-sudo/sudo.plugin.zsh ]; then
        source /usr/local/share/zsh-sudo/sudo.plugin.zsh
    fi

3. Aplicar cambios y probar:

    source ~/.zshrc

### Configuración de Historial y Completado

1. Configurar el historial:

    HISTFILE=~/.zsh_history
    HISTSIZE=10000
    SAVEHIST=10000
    setopt hist_ignore_all_dups share_history

2. Habilitar el sistema moderno de autocompletado:

    autoload -Uz compinit
    compinit

---

## Instalación y Configuración de Bat, Cat y LSD

### Instalación de Bat y LSD

1. Descargar las últimas versiones:
   - **Bat:** [https://github.com/sharkdp/bat/releases](https://github.com/sharkdp/bat/releases)
   - **LSD:** [https://github.com/lsd-rs/lsd/releases](https://github.com/lsd-rs/lsd/releases)

2. Instalar los paquetes descargados:

    sudo dpkg -i bat_0.18.0_amd64.deb  
    sudo dpkg -i lsd_0.20.1_amd64.deb

### Configuración de Alias para Bat y LSD

1. Editar el archivo `.zshrc`:

    nano ~/.zshrc

2. Añadir las siguientes líneas para configurar alias personalizados:

    # Custom Aliases
    # Bat
    alias cat='bat'
    alias catn='bat --style=plain'
    alias catnp='bat --style=plain --paging=never'

    # LSD
    alias ll='lsd -lh --group-dirs=first'
    alias la='lsd -a --group-dirs=first'
    alias l='lsd --group-dirs=first'
    alias lla='lsd -lha --group-dirs=first'
    alias ls='lsd --group-dirs=first'

    export LS_COLORS="rs=0:di=34:ln=01;36:mh=00:pi=40;33:..."

3. Guardar los cambios y aplicar:

    source ~/.zshrc

---

## Arreglo para Burpsuite

### Actualizar Java para Burpsuite

1. Descargar y configurar **OpenJDK 21**:

    cd /home/ruyztz/Descargas  
    wget https://download.java.net/java/GA/jdk21.0.2/f2283984656d49d69e91c558476027ac/13/GPL/openjdk-21.0.2_linux-x64_bin.tar.gz  
    tar xvf openjdk-21.0.2_linux-x64_bin.tar.gz  
    sudo mv jdk-21.0.2/ /usr/lib/jvm/jdk-21

2. Modificar el lanzador de Burpsuite:

    sudo nano /usr/bin/burpsuite

   Reemplazar:

    /usr/lib/jvm/java-17-openjdk-$(dpkg-architecture -q DEB_HOST_ARCH)/bin/java

   por:

    /usr/lib/jvm/jdk-21/bin/java

### Solución al Problema de Java

1. Añadir las siguientes líneas al archivo `.zshrc`:

    nano ~/.zshrc

    # Fix Java Problem
    export JAVA_AWT_WM_NONREPARENTING=1

2. Añadir al archivo `bspwmrc` para corregir el problema de WMName:

    echo 'wmname LG3D &' >> ~/.config/bspwm/bspwmrc

### Lanzador para Burpsuite desde Rofi

1. Crear un lanzador en `/usr/bin`:

    cd /usr/bin  
    sudo touch burpsuite-launcher  
    sudo chmod +x burpsuite-launcher  
    nano burpsuite-launcher

2. Añadir el siguiente contenido:

    #!/bin/bash
    export JAVA_AWT_WM_NONREPARENTING=1
    wmname LG3D &
    /usr/bin/burpsuite

3. Guardar y cerrar.

---

## Configuración de Polybar

### Configuración Inicial

1. Editar el archivo `launch.sh`:

    cd ~/.config/polybar/  
    nano launch.sh

2. Reemplazar el contenido por el siguiente script:

    ## Add this to your wm startup file.

    # Terminate already running bar instances
    killall -q polybar

    ## Wait until the processes have been shut down
    while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

    ## Launch

    ## Left bar
    polybar log -c ~/.config/polybar/current.ini &
    polybar secondary -c ~/.config/polybar/current.ini &
    polybar tertiary -c ~/.config/polybar/current.ini &
    polybar quaternary -c ~/.config/polybar/current.ini &

    ## Right bar
    polybar primary -c ~/.config/polybar/current.ini &
    polybar quinternary -c ~/.config/polybar/current.ini &

    ## Center bar
    polybar primary -c ~/.config/polybar/workspace.ini &

### Configuración del Archivo current.ini

1. Editar el archivo:

    nano ~/.config/polybar/current.ini

2. Añadir la fuente Hack Nerd Font:

    font-7 = "Hack Nerd Font Mono:size=20;6"

3. Añadir las configuraciones para las barras (Primary, Secondary, Tertiary, etc.). Ejemplo:

    [bar/primary]
    inherit = bar/main
    offset-x = 96.9%
    offset-y = 15
    width = 2%
    height = 40
    bottom = false
    foreground = ${color.red}
    background = ${color.white}
    modules-center = sysmenu
    wm = restack = bspwm

### Creación de Scripts Personalizados

1. Crear y configurar el script `ethernet_status.sh`:

    cd ~/.config/polybar/scripts/
    touch ethernet_status.sh
    chmod +x ethernet_status.sh
    nano ethernet_status.sh

2. Añadir el siguiente contenido:

    #!/bin/sh
    echo "%{F#FF0000}ICONO ETHERNET %{F#FF0000}$(/usr/sbin/ifconfig ens33 | grep "inet " | awk '{ print $2 }') %{u=}"

3. Repetir para los scripts `vpn_status.sh` y `target.sh`:
 
   **vpn_status.sh**:
    <p style="color: white; background-color: black; padding: 10px; font-family: monospace;">
    #!/bin/sh<br>
    IFACE=$(/usr/sbin/ifconfig | grep tun0 | awk '{ print $1 }' | tr -d ':')<br>
    if [ "$IFACE" = "tun0" ]; then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;echo "%{F#1bbf3e}BOX %{F#1bbf3e}$(<br>
    &nbsp;&nbsp;&nbsp;&nbsp;/usr/sbin/ifconfig tun0 | grep "inet " | awk '{ print $2 }'<br>
    &nbsp;&nbsp;&nbsp;&nbsp;) %{u=}"<br>
    else<br>
    &nbsp;&nbsp;&nbsp;&nbsp;echo "%{F#1bbf3e}BOX%{u=}  Disconnected"<br>
    fi
    </p>

    **target.sh**:
    <p style="color: white; background-color: black; padding: 10px; font-family: monospace;">
    #!/bin/bash<br>
    ipaddress=$(cat ~/.config/polybar/scripts/target | awk '{ print $1 }')<br>
    machine_name=$(cat ~/.config/polybar/scripts/target | awk '{ print $2 }')<br>
    if [ "$ipaddress" ] && [ "$machine_name" ]; then<br>
    &nbsp;&nbsp;&nbsp;&nbsp;echo "%{F#e51d0b}ICON TARGET %{F#FF0000} $ipaddress %{u=} = $machine_name"<br>
    else<br>
    &nbsp;&nbsp;&nbsp;&nbsp;echo "%{F#e51d0b} icon %{u=}%{F#FF0000} No target"<br>
    fi
    </p>


### Configuración del Menú de Energía con Rofi

1. Crear y configurar el script `powermenu_alt`:

    nano ~/.config/polybar/scripts/powermenu_alt

2. Añadir el siguiente contenido:

    #!/bin/bash
    rofi_command="rofi -theme $HOME/.config/polybar/scripts/themes/powermenu_alt.rasi"
    uptime=$(uptime -p | sed -e 's/up //g')

    # Options
    shutdown="icon Shutdown"
    reboot="icon Restart"
    lock="icon Lock"
    suspend="icon Sleep"
    logout="icon Logout"

    # Variable passed to rofi
    options="$lock\n$suspend\n$logout\n$reboot\n$shutdown"

    chosen="$(echo -e "$options" | $rofi_command -p "System" -dmenu -selected-row 0)"
    case $chosen in
        $shutdown )
            systemctl poweroff;;
        $reboot )
            systemctl reboot;;
        $lock )
            slimlock;;
        $suspend )
            mpc -q pause
            amixer set Master mute
            systemctl suspend;;
        $logout )
            openbox --exit;;
    esac

### Funciones Personalizadas

1. Editar el archivo `.zshrc` y añadir las siguientes funciones:

    # Custom Functions
    function settarget() {
        ipaddress=$1
        machine_name=$2
        echo "$ipaddress $machine_name" > ~/.config/polybar/scripts/target
    }

    function cleartarget() {
        echo '' > ~/.config/polybar/scripts/target
    }

    function mkt() {
        mkdir -p {nmap,content,scripts}
    }

    function script() {
        echo '#!/bin/bash' && echo '' && echo 'function ctrlc() {' &&
        echo '  echo -e "\n[ ! ] Saliendo . . ." ' &&
        echo '  exit 1' && echo '}' && echo '' && echo 'trap ctrlc INT'
    }

    function off() {
        sudo poweroff
    }

---

## Configuración Extra

### Configuraciones Iniciales del Sistema

1. Configurar las preferencias del terminal:
   - Abrir “Preferencias del Perfil”.
   - **Forma del cursor:** Doble T.
   - **Desplazamiento:** Barra de desplazamiento desconectada.
   - **General:**
     - Tipo de letra: Hack Nerd Font Regular 8.
     - Desactivar:
       - Mostrar la barra de menús.
       - Campana del terminal.

### Picom: Configuración de Opacidad

1. Editar el archivo `picom.conf`:

    nano ~/.config/picom/picom.conf

2. Añadir las siguientes reglas de opacidad:

    opacity-rule = [
        "100: class_g = 'Rofi'",
        "85: class_g = 'Polybar'",
        "100: class_g = 'Wireshark'"
    ];

### Ajustes en bspwmrc

1. Añadir al archivo `bspwmrc`:

    # Foco sigue al ratón:
    bspc config focus_follows_pointer true

    # Arreglar cursor en forma de 'X':
    xsetroot -cursor_name left_ptr &

### SlimLock

1. Instalar SlimLock:

    sudo apt update
    sudo apt install slim libpam0g-dev libxrandr-dev libfreetype6-dev libimlib2-dev libxft-dev

2. Descargar e instalar SlimLock desde GitHub:

    cd ~/Descargas
    git clone https://github.com/joelburgert/slimlock.git
    cd slimlock
    sudo make
    sudo make install

3. Configurar el menú de energía para usar SlimLock:
   - Editar el script `powermenu_alt` y cambiar la llamada de `i3lock` por `slimlock`.

### Configuración de Nano

1. Editar el archivo `.nanorc`:

    nano ~/.nanorc

2. Añadir las configuraciones:

    set tabsize 4
    set tabs_to_spaces
    set autoindent
    set linenumbers
    set historylog
    set smarthome
    set mouse
    set wordbounds
    set softwrap
    set atblanks
    set multibuffer
    set positionlog
    set constantshow
    set quickblank
    set nohelp

### Arreglo para Conexión de Red en VMware

1. Solución si la red no funciona en la máquina virtual:
   - En VMware, abrir **Virtual Network Editor**.
   - Seleccionar **Change Settings**, elegir las redes principales desde **Automatic Setting** y aplicar los cambios.

### Instalación de whichSystem.py

1. Crear y configurar el script:

    sudo touch /usr/bin/whichSystem.py
    sudo chmod +x /usr/bin/whichSystem.py
    nano /usr/bin/whichSystem.py

2. Añadir el contenido del script:

    #!/usr/bin/python3
    #coding: utf-8
    import re, sys, subprocess

    def getttl(ipaddress):
        proc = subprocess.Popen(["/usr/bin/ping -c 1 %s" % ipaddress, ""], stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        ttlvalue = re.findall(r"\d{1,3}", out.decode('utf-8').split()[12])[0]
        return ttlvalue

    def getos(ttl):
        ttl = int(ttl)
        if ttl >= 0 and ttl <= 64:
            return "Linux"
        elif ttl >= 65 and ttl <= 128:
            return "Windows"
        else:
            return "Not Found"

    if __name__ == '__main__':
        ipaddress = sys.argv[1]
        ttl = getttl(ipaddress)
        osname = getos(ttl)
        print("\n%s (ttl => %s) : %s\n" % (ipaddress, ttl, osname))

### Instalación de fastTCPScan

1. Crear y configurar el script en Go:

    sudo touch /usr/bin/fastTCPScan.go
    sudo nano /usr/bin/fastTCPScan.go

2. Añadir el contenido del script (consultar el código fuente original).
3. Compilarlo:

    go build -ldflags "=s =w" fastTCPScan.go
    upx --brute fastTCPScan
    du -hc fastTCPScan

---

## Configuración de NvChad y Neovim

### Instalación de NvChad y Neovim

1. Eliminar Neovim preinstalado:

    sudo apt remove neovim

2. Clonar NvChad:

    git clone https://github.com/NvChad/NvChad.git ~/.config/nvim --depth 1

3. Descargar la última versión de Neovim desde:  
   [https://github.com/neovim/neovim/releases](https://github.com/neovim/neovim/releases)

4. Instalar Neovim:

    mkdir /opt/nvim
    mv /home/ruyztz/Descargas/nvim-linux64.tar.gz /opt/nvim
    cd /opt/nvim
    tar -xf nvim-linux64.tar.gz
    rm nvim-linux64.tar.gz

5. Configurar el PATH en `.zshrc`:

    nano ~/.zshrc

    export PATH=$PATH:/opt/nvim/nvim-linux64/bin

### Configuración Inicial de NvChad

1. Iniciar Neovim:

    nvim

   (Salir con `:q!`).

2. Modificar el archivo `init.lua`:

    nano ~/.config/nvim/init.lua

   - En la línea 3, eliminar el carácter “$” si aparece.

3. Ejecutar Neovim y configurar:
   - Instalar plugins de Mason:

        :MasonInstallAll

   - Seleccionar temas con `:Telescope colorscheme` u otro comando según NvChad.

### Atajos Útiles en NvChad

- **Ctrl + n:** Vista de arquitectura de carpetas.
- **Ctrl + n + a:** Crear archivo.
- **Ctrl + n + d:** Borrar archivo.
- **Esc :sp:** Dividir pantalla horizontal.
- **Esc :vsp:** Dividir pantalla vertical.
- **Espacio + ff:** Buscar archivos.
- **Espacio + b:** Buscar buffers abiertos.

### Configuración de Rofi y i3lock

1. Instalar temas de Rofi:

    mkdir ~/.config/rofi/themes
    cd /opt
    sudo git clone https://github.com/newmanls/rofi-themes-collection
    cd rofi-themes-collection/themes
    cp * ~/.config/rofi/themes

2. Seleccionar un tema:

    rofi -theme-selector

   (Usar Alt + a para aplicar el tema).

3. Instalar y configurar **i3lock-fancy**:

    sudo apt install i3lock
    cd /opt
    git clone https://github.com/meskarune/i3lock-fancy.git
    cd i3lock-fancy
    make install

4. Añadir atajo en `sxhkdrc`:

    nano ~/.config/sxhkd/sxhkdrc

    super + shift + x
        /usr/bin/i3lock-fancy

### Configuración Adicional

1. Instalar **locate** y actualizar la base de datos:

    sudo apt install locate
    sudo su
    umount /run/user/1000/doc
    mount /run/user/1000/gvfs
    updatedb

2. Configurar plugins de NvChad (editar el archivo correspondiente en `~/.local/share/nvim/lazy/NvChad/lua/nvchad/plugins/init.lua` o similar, y borrar las líneas 76 a 123 según indicaciones).
3. Copiar la configuración a root:

    sudo mkdir /root/.config/nvim
    sudo cp -r ~/.config/nvim/* /root/.config/nvim/
    sudo nvim ~/.local/share/nvim/lazy/NvChad/lua/nvchad/plugins/init.lua
    # Borrar las líneas 76-123

---

## Configuración de Firefox

### Instalación de Firefox

1. Descargar Firefox desde su página oficial.
2. Instalar:

    sudo su
    cd /
    chown ruyztz:ruyztz /opt/
    cd /opt/
    su ruyztz
    mv /home/ruyztz/Descargas/firefox-*.tar.bz2 .
    tar -xf firefox-*.tar.bz2
    rm firefox-*.tar.bz2
    cd firefox
    sudo apt install firefox-jailed

### Configuración Inicial en Firefox

1. Abrir Firefox y configurar los ajustes iniciales:
   - **General:**
     - Desactivar: Comprobar siempre si Firefox es el navegador predeterminado.
     - Establecer la ubicación para guardar descargas en: `Descargas/firefox`.
     - Buscador predeterminado: **DuckDuckGo**.
   - **Privacidad y Seguridad:**
     - Contraseñas: Preguntar para guardar contraseñas.
     - Historial: Nunca recordar historial.

2. Configurar ajustes avanzados:
   - Abrir `about:config` y buscar:

        browser.fixup.domainsuffixwhitelist.htb

     Establecer el valor booleano a `true`.

### Extensiones Recomendadas

1. **DarkReader:**
   - Instalar desde [https://darkreader.org/](https://darkreader.org/).
   - Pinchar en el icono de la extensión y seleccionar **Pin to Toolbar**.

2. **Wappalyzer:**
   - Buscar la extensión en Firefox.
   - Instalar desde [https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/](https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/).
   - Permitir todos los permisos necesarios.

3. **FoxyProxy:**
   - Buscar e instalar desde [https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/).
   - Configurar FoxyProxy:
     - Abrir las opciones de la extensión.
     - Añadir un nuevo proxy:
       - Título: **BurpSuite**
       - Hostname: **127.0.0.1**
       - Puerto: **8080**
       - Guardar.

### Configuración del Certificado para BurpSuite

1. Con **BurpSuite** corriendo y configurado en FoxyProxy:
   - Acceder a [http://burp](http://burp) y descargar el certificado de CA.

2. Importar el certificado en Firefox:
   - Abrir **Ajustes** y buscar: **certificates**.
   - Ir a **Ver certificados → Authorities**.
   - Importar el certificado descargado.
   - Seleccionar: **Trust this CA to identify websites**.

### Limpieza de Descargas

1. Ejecutar:

    cd /home/ruyztz/Descargas
    sudo rm -rf *

---

