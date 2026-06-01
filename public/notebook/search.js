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
