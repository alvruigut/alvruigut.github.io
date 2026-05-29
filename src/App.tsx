import { useEffect, useState } from 'react'
import './App.css'

const whoamiCommand = 'whoami'

const whoamiOutput = [
  'Mi nombre es Álvaro Ruiz Gutiérrez. Soy Ingeniero del Software por la Universidad de Sevilla y estudié en la Escuela Técnica Superior de Ingeniería Informática.',
  'Desde mi tercer año del grado empecé a enfocarme en la ciberseguridad ofensiva, culminando esa etapa con un TFG en el que creé mi propia metodología de auditoría, basada en marcos reconocidos como NIST y aplicada en un entorno real.',
  'Tengo una buena base de programación y entiendo cómo se construyen proyectos, aplicaciones y código desde dentro. Mis principales áreas son Active Directory, hacking web, hacking WiFi y técnicas ofensivas aplicadas.',
  'No busco mirar el sector desde fuera, quiero entrar, romper, aprender y aportar. Mi objetivo es trabajar como Pentester Junior o Red Team Junior mientras sigo subiendo nivel en bug bounty.',
]

const sectionLinks = [
  { label: './proyectos', href: '/proyectos.html' },
  { label: './writeups', href: '/writeups.html' },
  { label: './notebook', href: '/notebook.html' },
  { label: './certificaciones', href: '/certificaciones.html' },
  { label: './contacto', href: '/contacto.html' },
]

function App() {
  const [booting, setBooting] = useState(true)
  const [typedCommand, setTypedCommand] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (booting) {
      return
    }

    setTypedCommand('')
    setShowOutput(false)

    const startDelay = window.setTimeout(() => {
      let cursor = 0
      const typing = window.setInterval(() => {
        cursor += 1
        setTypedCommand(whoamiCommand.slice(0, cursor))

        if (cursor === whoamiCommand.length) {
          window.clearInterval(typing)
          window.setTimeout(() => setShowOutput(true), 260)
        }
      }, 105)
    }, 260)

    return () => window.clearTimeout(startDelay)
  }, [booting])

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
        <p className="profile-role">Pentester Junior | Ingeniero del Software | OSCP | OSCP+ | eCPPT | eJPT</p>
        <div className="profile-links" aria-label="Links profesionales">
          <a href="https://www.linkedin.com/in/%C3%A1lvaro-ruiz-guti%C3%A9rrez-515684314/">LinkedIn</a>
          <a href="https://github.com/alvruigut">GitHub</a>
        </div>
      </section>

      <div className="console-layout">
        <section className="terminal-stage" aria-label="Terminal interactiva">
          <div className="terminal-frame">
            <div className="terminal-titlebar">
              <span className="terminal-tab">zsh</span>
              <span className="terminal-path">home</span>
            </div>

            <div className="terminal-body">
              <div className="zsh-line" aria-label="Comando whoami">
                <span className="prompt-block prompt-user">RuyzTz7@Kali</span>
                <span className="prompt-block prompt-dir">/home</span>
                <span className="zsh-symbol">❯</span>
                <span className="typed-command">
                  {typedCommand}
                  <span className="terminal-cursor" aria-hidden="true" />
                </span>
              </div>

              <div className={`terminal-output ${showOutput ? 'is-visible' : ''}`} aria-live="polite">
                {showOutput && whoamiOutput.map((line) => <p key={line}>{line}</p>)}
              </div>
            </div>
          </div>

          <nav className="section-links" aria-label="Secciones del portfolio">
            {sectionLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </section>
      </div>
    </main>
  )
}

export default App
