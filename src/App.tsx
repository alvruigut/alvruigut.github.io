import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type CommandKey =
  | 'whoami'
  | 'skills'
  | 'certs'
  | 'projects'
  | 'writeups'
  | 'notebook'
  | 'contact'
  | 'clear'
  | 'cd proyectos'
  | 'cd writeups'
  | 'cd notebook'
  | 'cd certs'
  | 'sudo hire me'

const commandOutput: Record<Exclude<CommandKey, 'clear'>, string[]> = {
  whoami: [
    'Ingeniero de Software con enfoque ofensivo. Me interesa la seguridad aplicada a sistemas reales, la automatización y la documentación técnica clara.',
    'He desarrollado una auditoría de ciberseguridad para pymes en entornos IT/OT como TFG, obteniendo una calificación de 10/10.',
    'Actualmente busco una primera oportunidad como Pentester Junior o perfil Red Team Junior.',
  ],
  skills: [
    '[+] Languages loaded: C# · Python · Java · JavaScript · Bash',
    '[+] Backend loaded: .NET · Spring Boot · REST APIs · JWT',
    '[+] Offensive tools loaded: Nmap · Burp Suite · Metasploit · Wireshark',
    '[+] Cloud stack loaded: Docker · Terraform · AWS · GitHub Actions',
  ],
  certs: ['OSCP', 'OSCP+', 'eCPPT', 'eJPT', 'CCST Cybersecurity', 'IT Specialist - Cybersecurity'],
  projects: [
    'AOVE360 -> Aplicación web para gestión integral del sector oleícola.',
    'PodRun -> Generador de podcast desde URLs de YouTube/Wikipedia.',
    'GitHub -> /proyectos.html',
  ],
  writeups: [
    '[INFO] Writeups de máquinas estilo CTF.',
    '[HIGH] Enumeración, explotación y escalada documentadas.',
    '[TODO] Añadir máquinas destacadas conforme se publiquen.',
  ],
  notebook: [
    '[+] Notebook loaded.',
    'Apuntes personales, comandos útiles, metodología de enumeración y referencias técnicas.',
    'Ruta: /notebook.html',
  ],
  contact: [
    'LinkedIn -> linkedin.com/in/álvaro-ruiz-gutiérrez-515684314',
    'GitHub   -> github.com/alvruigut',
  ],
  'cd proyectos': ['changing directory: /proyectos', 'open /proyectos.html in a new tab to inspect highlighted GitHub projects.'],
  'cd writeups': ['changing directory: /writeups', 'open /writeups.html in a new tab to inspect CTF-style machine notes.'],
  'cd notebook': ['changing directory: /notebook', 'open /notebook.html in a new tab to inspect notes, commands and methodology.'],
  'cd certs': ['changing directory: /certs', ...['OSCP', 'OSCP+', 'eCPPT', 'eJPT', 'CCST Cybersecurity', 'IT Specialist - Cybersecurity']],
  'sudo hire me': ['Permission granted.', 'Opening professional contact channels: LinkedIn | GitHub'],
}

const suggestedCommands: CommandKey[] = ['cd proyectos', 'cd writeups', 'cd notebook', 'cd certs']

const services = [
  { service: 'proyectos', status: '●', command: 'cd proyectos' },
  { service: 'writeups', status: '●', command: 'cd writeups' },
  { service: 'notebook', status: '●', command: 'cd notebook' },
]

const badges = ['OSCP', 'OSCP+', 'eCPPT', 'eJPT', 'Red Team Jr', 'C#/.NET', 'Linux']

function App() {
  const [booting, setBooting] = useState(true)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>(commandOutput.whoami)

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  const runCommand = (command: string) => {
    const normalized = command.trim().toLowerCase() as CommandKey

    if (normalized === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    if (normalized in commandOutput) {
      setHistory([`> ${normalized}`, ...commandOutput[normalized as Exclude<CommandKey, 'clear'>]])
    } else {
      setHistory([`> ${command}`, `command not found: ${command}`, 'try: whoami, skills, certs, projects, writeups, contact'])
    }

    setInput('')
  }

  const submitCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    runCommand(input)
  }

  return (
    <main className="portfolio-shell">
      {booting && (
        <div className="boot-screen" aria-live="polite">
          <p>Booting portfolio...</p>
          <p>[OK] whoami</p>
          <p>[OK] projects</p>
          <p>[OK] writeups</p>
          <p>[OK] contact</p>
          <strong>Access granted.</strong>
        </div>
      )}

      <section className="profile-hero" aria-label="Perfil">
        <img className="profile-orb" src="/nft.png" alt="Avatar de Álvaro" />
        <h1>Álvaro Ruiz Gutiérrez</h1>
        <p className="profile-role">Junior Pentester / Software Engineer</p>
        <p className="profile-claim">Construyo, rompo y documento sistemas con mentalidad ofensiva.</p>
        <div className="badge-row" aria-label="Certificaciones y stack">
          {badges.map((badge) => (
            <span key={badge}>[ {badge} ]</span>
          ))}
        </div>
        <div className="profile-links" aria-label="Links profesionales">
          <a href="https://www.linkedin.com/in/%C3%A1lvaro-ruiz-guti%C3%A9rrez-515684314/">LinkedIn</a>
          <a href="https://github.com/alvruigut">GitHub</a>
        </div>
      </section>

      <div className="console-layout">
        <aside className="section-sidebar" aria-label="Servicios del portfolio">
          <p className="sidebar-label">~/secciones</p>
          <nav>
            {services.map((item) => (
              <button className="service-row" key={item.service} type="button" onClick={() => runCommand(item.command)}>
                <strong>{item.status}</strong>
                <span>{item.service}</span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="terminal-stage" aria-label="Terminal interactiva">
          <div className="terminal-frame">
            <div className="terminal-titlebar">
              <span className="terminal-tab">zsh</span>
              <span className="terminal-path">home</span>
            </div>

            <div className="terminal-body">
              <form className="zsh-line" onSubmit={submitCommand}>
                <span className="prompt-block prompt-user">RuyzTz7</span>
                <span className="prompt-block prompt-dir">home</span>
                <span className="zsh-symbol">❯</span>
                <input
                  aria-label="Comando de terminal"
                  autoComplete="off"
                  spellCheck="false"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="whoami"
                />
              </form>

              <div className="terminal-output">
                {history.length === 0 ? (
                  <p className="muted-line">terminal cleared. try: whoami</p>
                ) : (
                  history.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)
                )}
              </div>

              <div className="command-dock" aria-label="Comandos sugeridos">
                {suggestedCommands.map((command) => (
                  <button key={command} type="button" onClick={() => runCommand(command)}>
                    {command}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
