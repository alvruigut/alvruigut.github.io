const notebookNotes = [
  {
    title: 'Ligolo',
    href: '/notebook/pivoting/ligolo.html',
    path: '~/notebook/Pivoting',
    tags: ['pivoting', 'portforwarding', 'ligolo', 'proxy', 'agent', 'listener', 'tunel', 'rutas', 'reverse shell', 'transferencias'],
  },
  {
    title: 'Metasploit',
    href: '/notebook/pivoting/metasploit.html',
    path: '~/notebook/Pivoting',
    tags: ['pivoting', 'portforwarding', 'metasploit', 'meterpreter', 'autoroute', 'proxychains', 'socks', 'nmap', 'portfwd'],
  },
  {
    title: 'Chisel y Socat',
    href: '/notebook/pivoting/chisel-socat.html',
    path: '~/notebook/Pivoting',
    tags: ['pivoting', 'portforwarding', 'chisel', 'socat', 'proxychains', 'socks', 'reverse shell', 'tuneles', 'multi-hop'],
  },
  {
    title: 'Captura WPA/WPA2',
    href: '/notebook/hacking-wifi/captura-wpa-wpa2.html',
    path: '~/notebook/Hacking Wifi',
    tags: ['wifi', 'wpa', 'wpa2', 'aircrack-ng', 'airodump-ng', 'aireplay-ng', 'handshake', 'modo monitor', 'desautenticacion', 'diccionario', 'rockyou', 'tp-link', 'archer t3u plus', 'wlan0', 'bssid', 'station'],
  },





















  {
    title: '21 - FTP',
    href: '/notebook/enumeracion-puertos/21-ftp.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'ftp', 'p21', 'ftp', '21'],
  },
  {
    title: '22 - SSH',
    href: '/notebook/enumeracion-puertos/22-ssh.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'ssh', 'id_rsa', 'p22', 'ssh', '22'],
  },
  {
    title: '23 - Telnet',
    href: '/notebook/enumeracion-puertos/23-telnet.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'telnet', 'p23', 'telnet', '23'],
  },
  {
    title: '25 - SMTP',
    href: '/notebook/enumeracion-puertos/25-smtp.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'smtp', 'p25', 'smtp', '25'],
  },
  {
    title: '53 - DNS',
    href: '/notebook/enumeracion-puertos/53-dns.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'dns', 'p53', 'dns', '53'],
  },
  {
    title: '79 - Finger',
    href: '/notebook/enumeracion-puertos/79-finger.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'finger', 'p79', 'finger', '79'],
  },
  {
    title: '80,443 - HTTP,HTTPS',
    href: '/notebook/enumeracion-puertos/80-443-http-https.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'http', 'p80', 'p443', 'http,https', '80,443'],
  },
  {
    title: '88 - Kerberos',
    href: '/notebook/enumeracion-puertos/88-kerberos.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['kerberoasting', 'kerberos', 'asrep-roasting', 'TGT', 'TGS', 'p88', 'ports', 'kerberos', '88'],
  },
  {
    title: '135 - RPC',
    href: '/notebook/enumeracion-puertos/135-rpc.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'rpc', 'p135', 'rpc', '135'],
  },
  {
    title: '139,445 - SMB',
    href: '/notebook/enumeracion-puertos/139-445-smb.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'smb', 'eternalblue', 'hash_ntlm', 'hash_lm', 'pass_the_hash', 'p139', 'p445', 'psexec', 'smb', '139,445'],
  },
  {
    title: '143 - IMAP',
    href: '/notebook/enumeracion-puertos/143-imap.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'imap', 'p143', 'imap', '143'],
  },
  {
    title: '161 - SNMP (UDP)',
    href: '/notebook/enumeracion-puertos/161-snmp-udp.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'p161_udp', 'p161', 'snmp', 'UDP', 'snmp (udp)', '161'],
  },
  {
    title: '389, 636, 3268, 3269 - LDAP',
    href: '/notebook/enumeracion-puertos/389-636-3268-3269-ldap.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'ldap', 'p389', 'ldap', '389, 636, 3268, 3269'],
  },
  {
    title: '1433 - MSSQL',
    href: '/notebook/enumeracion-puertos/1433-mssql.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'p1433', 'mssql', 'hta', 'xp_cmdshell', 'xp_dirtree', 'responder', 'mssql', '1433'],
  },
  {
    title: '1521 - Oracle Database',
    href: '/notebook/enumeracion-puertos/1521-oracle-database.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'oracle', 'p1521', 'oracle database', '1521'],
  },
  {
    title: '2049 - NFS',
    href: '/notebook/enumeracion-puertos/2049-nfs.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'p2049', 'nfs', 'nfs', '2049'],
  },
  {
    title: '3128 - Squid Proxy',
    href: '/notebook/enumeracion-puertos/3128-squid-proxy.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'squid', 'p3128', 'squid proxy', '3128'],
  },
  {
    title: '3306 - MySQL',
    href: '/notebook/enumeracion-puertos/3306-mysql.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'mysql', 'p3306', 'Extracci', 'mysql', '3306'],
  },
  {
    title: '3389 - RDP',
    href: '/notebook/enumeracion-puertos/3389-rdp.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['Simple', 'ports', 'rdp', 'bluekeep', 'p3389', 'rdp', '3389'],
  },
  {
    title: '5432,5437 - PostgreSQL',
    href: '/notebook/enumeracion-puertos/5432-5437-postgresql.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'postgresql', 'p5437', 'p5432', 'postgresql', '5432,5437'],
  },
  {
    title: '5985,5986 - WinRM',
    href: '/notebook/enumeracion-puertos/5985-5986-winrm.html',
    path: '~/notebook/Enumeración de Puertos',
    tags: ['ports', 'winrm', 'p5985', 'p5986', 'winrm', '5985,5986'],
  },
  {
    title: 'Sudoers',
    href: '/notebook/escalada-privilegios/linux/sudoers.html',
    path: '~/notebook/Escalada de Privilegios/Linux',
    tags: ['escalada_privilegios', 'sudoers', 'sudo', 'linux', 'gtfobins', 'privesc', 'misconfigurations', 'mcedit', 'bashed', 'nibbles', 'dog'],
  },
  {
    title: 'SUID',
    href: '/notebook/escalada-privilegios/linux/suid.html',
    path: '~/notebook/Escalada de Privilegios/Linux',
    tags: ['suid', 'sgid', 'linux', 'gtfobins', 'privesc', 'escalada_privilegios', 'find', 'permisos'],
  },
  {
    title: 'Grupos Vulnerables',
    href: '/notebook/escalada-privilegios/linux/grupos-vulnerables.html',
    path: '~/notebook/Escalada de Privilegios/Linux',
    tags: ['grupos_linux', 'sudo', 'admin', 'wheel', 'lxd', 'lxc', 'staff', 'disk', 'docker', 'adm', 'internal', 'linux', 'privesc'],
  },
]

function normalizeNotebookSearch(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function renderNotebookResults(container, query = '') {
  const normalizedQuery = normalizeNotebookSearch(query.trim())
  const matches = notebookNotes.filter((note) => {
    const haystack = normalizeNotebookSearch([note.title, note.path, note.tags.join(' ')].join(' '))
    return !normalizedQuery || haystack.includes(normalizedQuery)
  })

  container.innerHTML = matches.map((note) => `
    <a class="notebook-search-result" href="${note.href}">
      <strong>${note.title}</strong>
      <span>${note.path}</span>
      <small>${note.tags.slice(0, 4).join(' / ')}</small>
    </a>
  `).join('')

  if (matches.length === 0) {
    container.innerHTML = '<p class="notebook-search-empty">Sin resultados.</p>'
  }
}

document.querySelectorAll('.notebook-tag-search').forEach((searchBox) => {
  const input = searchBox.querySelector('.notebook-search-input')
  const results = searchBox.querySelector('.notebook-search-results')

  renderNotebookResults(results)
  input.addEventListener('input', () => renderNotebookResults(results, input.value))
})
