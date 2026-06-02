const notebookIndex = [
  {
    title: 'Inicio',
    href: '/notebook.html',
  },
  {
    title: 'Pivoting',
    children: [
      { title: 'Ligolo', href: '/notebook/pivoting/ligolo.html' },
      { title: 'Metasploit', href: '/notebook/pivoting/metasploit.html' },
      { title: 'Chisel y Socat', href: '/notebook/pivoting/chisel-socat.html' },
    ],
  },
  {
    title: 'Hacking Wifi',
    children: [
      { title: 'Captura WPA/WPA2', href: '/notebook/hacking-wifi/captura-wpa-wpa2.html' },
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
    title: 'Escalada de Privilegios',
    children: [
      {
        title: 'Linux',
        children: [
          { title: 'Sudoers', href: '/notebook/escalada-privilegios/linux/sudoers.html' },
          { title: 'SUID', href: '/notebook/escalada-privilegios/linux/suid.html' },
          { title: 'Grupos Vulnerables', href: '/notebook/escalada-privilegios/linux/grupos-vulnerables.html' },
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
            ],
          },
        ],
      },
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
