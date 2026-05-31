import { useEffect, useState } from 'react'
import './App.css'

const whoamiCommand = 'whoami'

const whoamiOutput = [
  'Soy Álvaro Ruiz Gutiérrez, Ingeniero del Software por la Universidad de Sevilla y Pentester Junior.',
  'Aquí encontrarás mis proyectos de GitHub, writeups de Hack The Box que he ido resolviendo mientras me preparo y sigo subiendo nivel en certificaciones como OSCP, eJPT y eCPPT.',
  'También comparto mis apuntes, recursos que me han servido y la forma en la que voy organizando mi aprendizaje en ciberseguridad ofensiva.',
  'En la sección de certificaciones cuento mi experiencia con cada una: preparación, examen, recomendaciones y mi opinión personal.',
]

const sectionLinks = [
  { label: './proyectos', href: '/proyectos.html' },
  { label: './writeups', href: '/writeups.html' },
  { label: './notebook', href: '/notebook.html' },
  { label: './certificaciones', href: '/certificaciones.html' },
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
          <p>[OK] notebook</p>
          <p>[OK] certs</p>
          <strong>Access granted.</strong>
        </div>
      )}

      <section className="profile-hero" aria-label="Perfil">
        <span className="profile-orb-frame">
          <img className="profile-orb" src="/nft.png" alt="Avatar de Álvaro" />
        </span>
        <h1>Álvaro Ruiz Gutiérrez</h1>
        <p className="profile-role">Pentester Junior | Ingeniero del Software | OSCP | OSCP+ | eCPPTv3 | eJPTv2</p>
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

      <footer className="site-footer">
        <section className="footer-actions" aria-label="Links profesionales">
          <a href="https://www.linkedin.com/in/%C3%A1lvaro-ruiz-guti%C3%A9rrez-515684314/">LinkedIn</a>
          <a href="https://github.com/alvruigut">GitHub</a>
          <a href="mailto:alvarorugu7@gmail.com">Contacto</a>
        </section>

        <div className="footer-legal">
          <p>Copyright 2026 - Portafolio RuyzTz7</p>
        </div>
      </footer>
    </main>
  )
}

export default App
