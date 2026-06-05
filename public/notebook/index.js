const notebookIndex = [
  {
    title: 'Inicio',
    href: '/notebook.html',
  },
  {
    title: 'Enumeración Inicial',
    children: [
      {
        title: 'Descubrimiento',
        children: [
          { title: 'Hosts Discovery', href: '/notebook/enumeracion-inicial/nmap/hosts-discovery.html' },
        ],
      },
      {
        title: 'Escaneo de Puertos',
        children: [
          { title: 'Ports Scan', href: '/notebook/enumeracion-inicial/nmap/ports-scan.html' },
        ],
      },
      {
        title: 'Escaneo de Servicios',
        children: [
          { title: 'Services Scan', href: '/notebook/enumeracion-inicial/nmap/services-scan.html' },
        ],
      },
      {
        title: 'Nmap NSE',
        children: [
          { title: 'Scripts Nmap (NSE)', href: '/notebook/enumeracion-inicial/nmap/scripts-nmap-nse.html' },
        ],
      },
      {
        title: 'Evasión',
        children: [
          { title: 'Evadir Firewalls', href: '/notebook/enumeracion-inicial/nmap/evadir-firewalls.html' },
        ],
      },
      {
        title: 'RustScan',
        children: [
          { title: 'RustScan', href: '/notebook/enumeracion-inicial/rustscan/rustscan.html' },
        ],
      },
    ],
  },
  {
    title: 'Enumeración de Puertos',
    children: [
      { title: '21 - FTP', href: '/notebook/enumeracion-puertos/21-ftp.html' },
      { title: '22 - SSH', href: '/notebook/enumeracion-puertos/22-ssh.html' },
      { title: '23 - Telnet', href: '/notebook/enumeracion-puertos/23-telnet.html' },
      { title: '25 - SMTP', href: '/notebook/enumeracion-puertos/25-smtp.html' },
      { title: '53 - DNS', href: '/notebook/enumeracion-puertos/53-dns.html' },
      { title: '79 - Finger', href: '/notebook/enumeracion-puertos/79-finger.html' },
      { title: '80,443 - HTTP,HTTPS', href: '/notebook/enumeracion-puertos/80-443-http-https.html' },
      { title: '88 - Kerberos', href: '/notebook/enumeracion-puertos/88-kerberos.html' },
      { title: '135 - RPC', href: '/notebook/enumeracion-puertos/135-rpc.html' },
      { title: '139,445 - SMB', href: '/notebook/enumeracion-puertos/139-445-smb.html' },
      { title: '143 - IMAP', href: '/notebook/enumeracion-puertos/143-imap.html' },
      { title: '161 - SNMP (UDP)', href: '/notebook/enumeracion-puertos/161-snmp-udp.html' },
      { title: '389, 636, 3268, 3269 - LDAP', href: '/notebook/enumeracion-puertos/389-636-3268-3269-ldap.html' },
      { title: '1433 - MSSQL', href: '/notebook/enumeracion-puertos/1433-mssql.html' },
      { title: '1521 - Oracle Database', href: '/notebook/enumeracion-puertos/1521-oracle-database.html' },
      { title: '2049 - NFS', href: '/notebook/enumeracion-puertos/2049-nfs.html' },
      { title: '3128 - Squid Proxy', href: '/notebook/enumeracion-puertos/3128-squid-proxy.html' },
      { title: '3306 - MySQL', href: '/notebook/enumeracion-puertos/3306-mysql.html' },
      { title: '3389 - RDP', href: '/notebook/enumeracion-puertos/3389-rdp.html' },
      { title: '5432,5437 - PostgreSQL', href: '/notebook/enumeracion-puertos/5432-5437-postgresql.html' },
      { title: '5985,5986 - WinRM', href: '/notebook/enumeracion-puertos/5985-5986-winrm.html' },
    ],
  },
  {
    title: 'Fuzzing',
    children: [
      { title: 'Feroxbuster', href: '/notebook/fuzzing/feroxbuster.html' },
      { title: 'GOBUSTER', href: '/notebook/fuzzing/gobuster.html' },
      { title: 'WFUZZ', href: '/notebook/fuzzing/wfuzz.html' },
      { title: 'FFUF', href: '/notebook/fuzzing/ffuf.html' },
      { title: 'Tips', href: '/notebook/fuzzing/tips.html' },
    ],
  },
  {
    title: 'Fuerza Bruta',
    children: [
      { title: 'Hashcat', href: '/notebook/fuerza-bruta/hashcat.html' },
      { title: 'Hydra', href: '/notebook/fuerza-bruta/hydra.html' },
      { title: 'JohnTheRipper', href: '/notebook/fuerza-bruta/johntheripper.html' },
    ],
  },
  {
    title: 'Exploits',
    children: [
      {
        title: 'Búsqueda de Exploits',
        children: [
          { title: 'Searchsploit', href: '/notebook/exploits/searchsploit.html' },
          { title: 'Google Dork', href: '/notebook/exploits/google-dork.html' },
        ],
      },
      {
        title: 'Adaptación de Exploits',
        children: [
          { title: 'Python2 a Python3', href: '/notebook/exploits/python2-a-python3.html' },
          { title: 'Compilar Exploits C', href: '/notebook/exploits/compilar-exploits-c.html' },
          { title: 'Compilar Exploits Windows', href: '/notebook/exploits/compilar-exploits-windows.html' },
        ],
      },
    ],
  },
  {
    title: 'Shells',
    children: [
      { title: 'Netcat', href: '/notebook/shells/netcat.html' },
      { title: 'PeneLope', href: '/notebook/shells/penelope.html' },
      { title: 'PentestMonkey', href: '/notebook/shells/pentestmonkey.html' },
      { title: 'RCE a Shell', href: '/notebook/shells/rce-a-shell.html' },
      { title: 'Reverse vs Bind', href: '/notebook/shells/reverse-vs-bind.html' },
      { title: 'Shell a Meterpreter', href: '/notebook/shells/shell-a-meterpreter.html' },
      { title: 'TTY', href: '/notebook/shells/tty.html' },
    ],
  },
  {
    title: 'Transferencia de Archivos',
    children: [
      { title: 'Linux -> Windows', href: '/notebook/transferencia-archivos/linux-windows.html' },
      { title: 'Windows -> Linux', href: '/notebook/transferencia-archivos/windows-linux.html' },
      { title: 'Linux -> Linux', href: '/notebook/transferencia-archivos/linux-linux.html' },
      { title: 'Herramientas Automatizadas', href: '/notebook/transferencia-archivos/herramientas-automatizadas.html' },
    ],
  },
  {
    title: 'Metasploit',
    children: [
      { title: 'Metasploit', href: '/notebook/metasploit/metasploit.html' },
    ],
  },
  {
    title: 'MSFVenom',
    children: [
      { title: 'MSFVenom', href: '/notebook/msfvenom/msfvenom.html' },
    ],
  },
  {
    title: 'Pivoting',
    children: [
      { title: 'Ligolo', href: '/notebook/pivoting/ligolo.html' },
      { title: 'Metasploit', href: '/notebook/pivoting/metasploit.html' },
      { title: 'Chisel y Socat', href: '/notebook/pivoting/chisel-socat.html' },
      { title: 'SSH', href: '/notebook/pivoting/ssh.html' },
    ],
  },
  {
    title: 'Escalada de Privilegios',
    children: [
      {
        title: 'Linux',
        children: [
          {
            title: 'Grupos y Privilegios',
            children: [
              { title: 'Sudoers', href: '/notebook/escalada-privilegios/linux/sudoers.html' },
              { title: 'SUID', href: '/notebook/escalada-privilegios/linux/suid.html' },
              { title: 'Grupos Vulnerables', href: '/notebook/escalada-privilegios/linux/grupos-vulnerables.html' },
            ],
          },
          {
            title: 'Enumeración local',
            children: [
              { title: 'Autoenumeración', href: '/notebook/escalada-privilegios/linux/enumeracion-local/autoenumeracion.html' },
              { title: 'Procesos', href: '/notebook/escalada-privilegios/linux/enumeracion-local/procesos.html' },
              { title: 'Banner Grabbing', href: '/notebook/escalada-privilegios/linux/enumeracion-local/banner-grabbing.html' },
              { title: 'Puertos Internos', href: '/notebook/escalada-privilegios/linux/enumeracion-local/puertos-internos.html' },
              { title: 'Virtual Hosting', href: '/notebook/escalada-privilegios/linux/enumeracion-local/virtual-hosting.html' },
            ],
          },
          {
            title: 'Credenciales',
            children: [
              { title: 'Credenciales', href: '/notebook/escalada-privilegios/linux/credenciales/credenciales.html' },
              { title: 'Historial Bash', href: '/notebook/escalada-privilegios/linux/credenciales/historial-bash.html' },
              { title: 'Shadow', href: '/notebook/escalada-privilegios/linux/credenciales/shadow.html' },
              { title: 'Fuerza bruta con su', href: '/notebook/escalada-privilegios/linux/credenciales/fuerza-bruta-su.html' },
              { title: 'Variables de entorno en contenedores', href: '/notebook/escalada-privilegios/linux/credenciales/variables-entorno-contenedores.html' },
            ],
          },
          {
            title: 'Tareas y automatización',
            children: [
              { title: 'Cron', href: '/notebook/escalada-privilegios/linux/tareas-automatizacion/cron.html' },
            ],
          },
          {
            title: 'Permisos y rutas',
            children: [
              { title: 'Capabilities', href: '/notebook/escalada-privilegios/linux/permisos-rutas/capabilities.html' },
              { title: 'Permisos de archivos', href: '/notebook/escalada-privilegios/linux/permisos-rutas/permisos-archivos.html' },
              { title: 'Path Hijacking', href: '/notebook/escalada-privilegios/linux/permisos-rutas/path-hijacking.html' },
            ],
          },
          {
            title: 'Kernel y versiones',
            children: [
              { title: 'Kernel', href: '/notebook/escalada-privilegios/linux/kernel-versiones/kernel.html' },
              { title: 'Versión de sudo', href: '/notebook/escalada-privilegios/linux/kernel-versiones/version-sudo.html' },
            ],
          },
        ],
      },
      {
        title: 'Windows',
        children: [
          {
            title: 'Enumeración local',
            children: [
              { title: 'Aplicaciones Instaladas', href: '/notebook/escalada-privilegios/windows/enumeracion-local/aplicaciones-instaladas.html' },
              { title: 'Banner Grabbing', href: '/notebook/escalada-privilegios/windows/enumeracion-local/banner-grabbing.html' },
              { title: 'Procesos', href: '/notebook/escalada-privilegios/windows/enumeracion-local/procesos.html' },
              { title: 'Puertos Internos', href: '/notebook/escalada-privilegios/windows/enumeracion-local/puertos-internos.html' },
            ],
          },
          {
            title: 'Credenciales',
            children: [
              { title: 'Autologon', href: '/notebook/escalada-privilegios/windows/credenciales/autologon.html' },
              { title: 'Credential Manager', href: '/notebook/escalada-privilegios/windows/credenciales/credential-manager.html' },
              { title: 'Descripciones', href: '/notebook/escalada-privilegios/windows/credenciales/descripciones.html' },
              { title: 'Búsqueda en archivos', href: '/notebook/escalada-privilegios/windows/credenciales/busqueda-en-archivos.html' },
              { title: 'Historiales', href: '/notebook/escalada-privilegios/windows/credenciales/historiales.html' },
              { title: 'KeePass', href: '/notebook/escalada-privilegios/windows/credenciales/archivo-keepass.html' },
              { title: 'Navegador', href: '/notebook/escalada-privilegios/windows/credenciales/navegador.html' },
              { title: 'Registros', href: '/notebook/escalada-privilegios/windows/credenciales/registros.html' },
              { title: 'Variables de Entorno', href: '/notebook/escalada-privilegios/windows/credenciales/variables-de-entorno.html' },
              { title: 'Wi-Fi', href: '/notebook/escalada-privilegios/windows/credenciales/wifi.html' },
            ],
          },
          {
            title: 'Privilegios',
            children: [
              { title: 'AssignPrimaryToken', href: '/notebook/escalada-privilegios/windows/privilegios/assignprimarytoken.html' },
              { title: 'Backup', href: '/notebook/escalada-privilegios/windows/privilegios/backup.html' },
              { title: 'Debug', href: '/notebook/escalada-privilegios/windows/privilegios/debug.html' },
              { title: 'Habilitar Privilegios', href: '/notebook/escalada-privilegios/windows/privilegios/habilitar-privilegios-disabled.html' },
              { title: 'Impersonate', href: '/notebook/escalada-privilegios/windows/privilegios/impersonate.html' },
              { title: 'LoadDriver', href: '/notebook/escalada-privilegios/windows/privilegios/loaddriver.html' },
              { title: 'Manage Volume', href: '/notebook/escalada-privilegios/windows/privilegios/manage-volume.html' },
              { title: 'Meterpreter GetSystem', href: '/notebook/escalada-privilegios/windows/privilegios/meterpreter-getsystem.html' },
              { title: 'Restore', href: '/notebook/escalada-privilegios/windows/privilegios/restore.html' },
              { title: 'TakeOwnership', href: '/notebook/escalada-privilegios/windows/privilegios/takeownership.html' },
              { title: 'Tcb', href: '/notebook/escalada-privilegios/windows/privilegios/tcb.html' },
            ],
          },
          {
            title: 'Grupos',
            children: [
              { title: 'Account Operators', href: '/notebook/escalada-privilegios/windows/grupos/account-operators.html' },
              { title: 'AD Recycle Bin', href: '/notebook/escalada-privilegios/windows/grupos/ad-recycle-bin.html' },
              { title: 'Azure Admins', href: '/notebook/escalada-privilegios/windows/grupos/azure-admins.html' },
              { title: 'Backup Operators', href: '/notebook/escalada-privilegios/windows/grupos/backup-operators.html' },
              { title: 'DNS Admins', href: '/notebook/escalada-privilegios/windows/grupos/dns-admins.html' },
              { title: 'Exchange Windows Permissions', href: '/notebook/escalada-privilegios/windows/grupos/exchange-windows-permissions.html' },
              { title: 'LAPS Readers', href: '/notebook/escalada-privilegios/windows/grupos/laps-readers.html' },
              { title: 'Organization Management', href: '/notebook/escalada-privilegios/windows/grupos/organization-management.html' },
              { title: 'Policy Creator Owners', href: '/notebook/escalada-privilegios/windows/grupos/policy-creator-owners.html' },
              { title: 'Print Operators', href: '/notebook/escalada-privilegios/windows/grupos/print-operators.html' },
              { title: 'Server Operators', href: '/notebook/escalada-privilegios/windows/grupos/server-operators.html' },
              { title: 'WSUS Administrators', href: '/notebook/escalada-privilegios/windows/grupos/wsus-administrators.html' },
            ],
          },
          {
            title: 'Servicios y procesos',
            children: [
              { title: 'Función Auxiliar', href: '/notebook/escalada-privilegios/windows/servicios-procesos/funcion-auxiliar.html' },
              { title: 'Permisos en Registros', href: '/notebook/escalada-privilegios/windows/servicios-procesos/permisos-en-registros.html' },
              { title: 'Permisos en Servicios', href: '/notebook/escalada-privilegios/windows/servicios-procesos/permisos-en-servicios.html' },
              { title: 'Unquoted Service Paths', href: '/notebook/escalada-privilegios/windows/servicios-procesos/permisos-en-unquoted-paths.html' },
            ],
          },
          {
            title: 'Tareas y arranque',
            children: [
              { title: 'Aplicaciones de Arranque', href: '/notebook/escalada-privilegios/windows/tareas-arranque/aplicaciones-de-arranque.html' },
              { title: 'Tareas Programadas', href: '/notebook/escalada-privilegios/windows/tareas-arranque/tareas-cron.html' },
            ],
          },
          {
            title: 'Políticas y UAC',
            children: [
              { title: 'Always Install Elevated', href: '/notebook/escalada-privilegios/windows/politicas-uac/always-install-elevated.html' },
              { title: 'Bypass UAC', href: '/notebook/escalada-privilegios/windows/politicas-uac/bypassing-uac.html' },
            ],
          },
          {
            title: 'Kernel y drivers',
            children: [
              { title: 'Drivers vulnerables', href: '/notebook/escalada-privilegios/windows/kernel-drivers/drivers-vulnerables.html' },
              { title: 'Kernel HotFixes', href: '/notebook/escalada-privilegios/windows/kernel-drivers/kernel-hotfixes.html' },
            ],
          },
          {
            title: 'Utilidades',
            children: [
              { title: 'Arquitectura SO (Migrar Proceso)', href: '/notebook/escalada-privilegios/windows/utilidades/arquitectura-so-migrar-proceso.html' },
              { title: 'Cambiar de Usuario en Windows', href: '/notebook/escalada-privilegios/windows/utilidades/cambiar-de-usuario-en-windows.html' },
              { title: 'CMD a PowerShell', href: '/notebook/escalada-privilegios/windows/utilidades/cmd-a-powershell.html' },
              { title: 'Herramientas automatizadas', href: '/notebook/escalada-privilegios/windows/utilidades/herramientas-automatizadas.html' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Post-Explotación',
    children: [
      {
        title: 'Linux',
        children: [
          {
            title: 'Enumeración local',
            children: [
              { title: 'Usuarios y grupos', href: '/notebook/post-explotacion/linux/enumeracion-local/usuarios-grupos.html' },
              { title: 'Sistema', href: '/notebook/post-explotacion/linux/enumeracion-local/sistema.html' },
              { title: 'Procesos y servicios', href: '/notebook/post-explotacion/linux/enumeracion-local/procesos-servicios.html' },
              { title: 'Red', href: '/notebook/post-explotacion/linux/enumeracion-local/red.html' },
              { title: 'Seguridad', href: '/notebook/post-explotacion/linux/enumeracion-local/seguridad.html' },
              { title: 'Logs y auditoría', href: '/notebook/post-explotacion/linux/enumeracion-local/logs-auditoria.html' },
            ],
          },
          {
            title: 'Dumping hashes',
            children: [
              { title: 'Metasploit', href: '/notebook/post-explotacion/linux/dumping-hashes/metasploit.html' },
              { title: 'Shadow', href: '/notebook/post-explotacion/linux/dumping-hashes/shadow.html' },
            ],
          },
          {
            title: 'Persistencia',
            children: [
              { title: 'Clave PuTTY', href: '/notebook/post-explotacion/linux/persistencia/clave-putty.html' },
              { title: 'Clave RSA', href: '/notebook/post-explotacion/linux/persistencia/clave-rsa.html' },
              { title: 'Cron', href: '/notebook/post-explotacion/linux/persistencia/cron.html' },
            ],
          },
        ],
      },
      {
        title: 'Windows',
        children: [
          {
            title: 'Enumeración local',
            children: [
              { title: 'Usuarios y grupos', href: '/notebook/post-explotacion/windows/enumeracion-local/usuarios-grupos.html' },
              { title: 'Procesos y servicios', href: '/notebook/post-explotacion/windows/enumeracion-local/procesos-servicios.html' },
              { title: 'Sistema', href: '/notebook/post-explotacion/windows/enumeracion-local/sistema.html' },
              { title: 'Red', href: '/notebook/post-explotacion/windows/enumeracion-local/red.html' },
              { title: 'Enumeración con Metasploit', href: '/notebook/post-explotacion/windows/enumeracion-local/metasploit.html' },
            ],
          },
          {
            title: 'Dumping hashes',
            children: [
              { title: 'LSASS', href: '/notebook/post-explotacion/windows/dumping-hashes/lsass.html' },
              { title: 'Mimikatz', href: '/notebook/post-explotacion/windows/dumping-hashes/mimikatz.html' },
              { title: 'NTDS', href: '/notebook/post-explotacion/windows/dumping-hashes/ntds.html' },
              { title: 'SAM, SYSTEM y SECURITY', href: '/notebook/post-explotacion/windows/dumping-hashes/sam-system-security.html' },
            ],
          },
          {
            title: 'Persistencia',
            children: [
              { title: 'Cambiar contraseñas de usuarios', href: '/notebook/post-explotacion/windows/persistencia/cambiar-contrasenas-usuarios.html' },
              { title: 'Deshabilitar Firewall', href: '/notebook/post-explotacion/windows/persistencia/deshabilitar-firewall.html' },
              { title: 'Metasploit', href: '/notebook/post-explotacion/windows/persistencia/metasploit.html' },
              { title: 'Alternate Data Streams (ADS)', href: '/notebook/post-explotacion/windows/persistencia/alternate-data-streams.html' },
              { title: 'RDP', href: '/notebook/post-explotacion/windows/persistencia/rdp.html' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Active Directory',
    children: [
      {
        title: 'Enumeración',
        children: [
          { title: 'AD Enumeración', href: '/notebook/active-directory/enumeracion/ad-enumeracion.html' },
          { title: 'ACL Enumeración', href: '/notebook/active-directory/enumeracion/acl-enumeracion.html' },
          { title: 'BloodHound', href: '/notebook/active-directory/enumeracion/bloodhound.html' },
          { title: 'Fuerza bruta de usuarios', href: '/notebook/active-directory/enumeracion/fuerza-bruta-usuarios.html' },
          { title: 'MSSQL', href: '/notebook/active-directory/enumeracion/mssql.html' },
          { title: 'Objetos eliminados', href: '/notebook/active-directory/enumeracion/objetos-eliminados.html' },
        ],
      },
      {
        title: 'Escalada',
        children: [
          {
            title: 'Kerberos',
            children: [
              { title: 'AS-REP Roasting', href: '/notebook/active-directory/escalada/kerberos/as-rep-roasting.html' },
              { title: 'Kerberoasting', href: '/notebook/active-directory/escalada/kerberos/kerberoasting.html' },
              { title: 'Kubernetes y Kerberos', href: '/notebook/active-directory/escalada/kerberos/kubernetes-kerberos.html' },
            ],
          },
          {
            title: 'Dominio y servicios',
            children: [
              { title: 'DCSync Attack', href: '/notebook/active-directory/escalada/dominio/dcsync-attack.html' },
              { title: 'SYSVOL GPP Password', href: '/notebook/active-directory/escalada/dominio/sysvol-gpp-password.html' },
            ],
          },
          {
            title: 'ACL',
            children: [
              { title: 'ACL', href: '/notebook/active-directory/escalada/acl/acl.html' },
              { title: 'AllExtendedRights', href: '/notebook/active-directory/escalada/acl/allextendedrights.html' },
              { title: 'Generic Write', href: '/notebook/active-directory/escalada/acl/generic-write.html' },
              { title: 'Kerberos Constrained Delegation', href: '/notebook/active-directory/escalada/acl/kerberos-constrained-delegation.html' },
              { title: 'Write DACL', href: '/notebook/active-directory/escalada/acl/write-dacl.html' },
              { title: 'Write Owner', href: '/notebook/active-directory/escalada/acl/write-owner.html' },
            ],
          },
          {
            title: 'ADCS',
            children: [
              { title: 'ADCS - Certificados', href: '/notebook/active-directory/escalada/adcs/adcs-certificados.html' },
              { title: 'Enumerar ADCS', href: '/notebook/active-directory/escalada/adcs/enumerar-adcs.html' },
              { title: 'ESC1', href: '/notebook/active-directory/escalada/adcs/esc1.html' },
              { title: 'ESC7', href: '/notebook/active-directory/escalada/adcs/esc7.html' },
              { title: 'ESC9', href: '/notebook/active-directory/escalada/adcs/esc9.html' },
              { title: 'ESC15', href: '/notebook/active-directory/escalada/adcs/esc15.html' },
              { title: 'ESC16', href: '/notebook/active-directory/escalada/adcs/esc16.html' },
              { title: 'PFX', href: '/notebook/active-directory/escalada/adcs/pfx.html' },
            ],
          },
        ],
      },
      {
        title: 'Persistencia',
        children: [
          { title: 'Golden Ticket (TGT)', href: '/notebook/active-directory/persistencia/golden-ticket-tgt.html' },
          { title: 'Silver Ticket (TGS)', href: '/notebook/active-directory/persistencia/silver-ticket-tgs.html' },
        ],
      },
    ],
  },
  {
    title: 'Diccionarios',
    children: [
      { title: 'Diccionarios', href: '/notebook/diccionarios/diccionarios.html' },
    ],
  },
  {
    title: 'Hacking Wifi',
    children: [
      { title: 'Captura WPA/WPA2', href: '/notebook/hacking-wifi/captura-wpa-wpa2.html' },
    ],
  },
]

function normalizeNotebookPath(pathname) {
  return pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '/notebook.html')
}

function isCurrentNotebookPage(href) {
  return normalizeNotebookPath(window.location.pathname) === normalizeNotebookPath(new URL(href, window.location.origin).pathname)
}

function renderNotebookItem(item, depth = 0) {
  if (item.href) {
    const activeClass = isCurrentNotebookPage(item.href) ? ' is-active' : ''
    return `<a class="vault-file${activeClass}" href="${item.href}">${item.title}</a>`
  }

  const children = item.children.map((child) => renderNotebookItem(child, depth + 1)).join('')
  const subfolderClass = depth > 0 ? ' vault-subfolder' : ''

  return `
    <details class="vault-folder${subfolderClass}">
      <summary>${item.title}</summary>
      ${children}
    </details>
  `
}

function renderNotebookIndex(sidebar) {
  const [homeItem, ...folderItems] = notebookIndex

  sidebar.innerHTML = `
    <h1>Notebook</h1>
    <nav class="vault-tree" aria-label="Ficheros">
      <div class="vault-home-row">
        <button class="notebook-collapse-folders" type="button" title="Minimizar carpetas" aria-label="Minimizar todas las carpetas">▴</button>
        ${renderNotebookItem(homeItem)}
      </div>
      ${folderItems.map((item) => renderNotebookItem(item)).join('')}
    </nav>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-notebook-index]').forEach(renderNotebookIndex)
})
