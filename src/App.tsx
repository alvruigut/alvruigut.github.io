import { useEffect, useState, type MouseEvent } from 'react'
import './App.css'

declare global {
  interface Window {
    setSiteTheme?: (theme: string) => void
  }
}

const whoamiCommand = 'whoami'

const whoamiOutput = [
  'Soy Álvaro Ruiz Gutiérrez, Ingeniero del Software por la Universidad de Sevilla y Pentester Junior.',
  'Aquí encontrarás mis proyectos de GitHub, writeups de Hack The Box que he ido resolviendo mientras me preparaba para certificaciones como OSCP, eJPT y eCPPT.',
  'También comparto mis apuntes, recursos que me han servido y la forma en la que voy organizando mi aprendizaje en ciberseguridad ofensiva.',
  'En la sección de certificaciones cuento mi experiencia con cada una: preparación, examen, recomendaciones y mi opinión personal.',
]

const sectionLinks = [
  { label: './proyectos', href: '/proyectos.html' },
  { label: './writeups', href: '/writeups.html' },
  { label: './notebook', href: '/notebook.html' },
  { label: './certificaciones', href: '/certificaciones.html' },
]

function getContactState() {
  const params = new URLSearchParams(window.location.search)

  return {
    screen: params.has('contacto') ? 'contact' : 'home',
  }
}

function consumeMailSentBoot() {
  const hasMailSentBoot = sessionStorage.getItem('portfolio-mail-sent') === 'true'

  if (hasMailSentBoot) {
    sessionStorage.removeItem('portfolio-mail-sent')
  }

  return hasMailSentBoot
}

function App() {
  const [contactState, setContactState] = useState(getContactState)
  const [booting, setBooting] = useState(true)
  const [mailSentBoot] = useState(consumeMailSentBoot)
  const [typedCommand, setTypedCommand] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [emailSubject, setEmailSubject] = useState('Nuevo mensaje desde el portafolio de Álvaro')
  const { screen } = contactState
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'green')
  const themeLabels: Record<string, string> = {
    green: 'verde',
    red: 'rojo',
    blue: 'azul',
  }
  const profileImage = theme === 'green' ? '/nft.png' : `/nft-${theme}.png`

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const syncScreen = () => setContactState(getContactState())

    window.addEventListener('popstate', syncScreen)
    return () => window.removeEventListener('popstate', syncScreen)
  }, [])

  useEffect(() => {
    if (booting) {
      return
    }

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

  useEffect(() => {
    const syncTheme = (event: Event) => {
      const nextTheme = event instanceof CustomEvent ? event.detail?.theme : document.documentElement.dataset.theme
      setTheme(nextTheme || 'green')
    }

    window.addEventListener('site-theme-change', syncTheme)
    return () => window.removeEventListener('site-theme-change', syncTheme)
  }, [])

  function toggleTheme() {
    const themeOrder = ['green', 'red', 'blue']
    const nextTheme = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length]

    if (window.setSiteTheme) {
      window.setSiteTheme(nextTheme)
      return
    }

    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem('site-theme', nextTheme)
    setTheme(nextTheme)
  }

  function openContact(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.history.pushState({}, '', '/?contacto')
    setContactState({ screen: 'contact' })
    setBooting(false)
  }

  function openHome(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.history.pushState({}, '', '/')
    setContactState({ screen: 'home' })
    setBooting(false)
  }

  function markMailAsSent() {
    sessionStorage.setItem('portfolio-mail-sent', 'true')
  }

  if (screen === 'contact') {
    return (
      <main className="portfolio-shell contact-shell">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Tema ${themeLabels[theme] || 'verde'}. Cambiar color`}
          title={`Tema ${themeLabels[theme] || 'verde'}`}
        >
          <span aria-hidden="true" />
        </button>

        <section className="contact-terminal" aria-label="Formulario de contacto">
          <a className="back-link" href="/" onClick={openHome}>~/home</a>

          <div className="terminal-frame contact-frame">
            <div className="terminal-titlebar">
              <span className="terminal-tab">zsh</span>
              <span className="terminal-path">/home/contacto</span>
            </div>

            <div className="terminal-body contact-terminal-body">
              <div className="zsh-line contact-command" aria-label="Comando contact">
                <span className="prompt-block prompt-user">RuyzTz7@Kali</span>
                <span className="prompt-block prompt-dir">/contacto</span>
                <span className="zsh-symbol">❯</span>
                <span className="typed-command">sendmail --to alvarorugu7@gmail.com</span>
              </div>

              <form
                className="contact-form"
                action="https://formsubmit.co/alvarorugu7@gmail.com"
                method="POST"
                onSubmit={markMailAsSent}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value={emailSubject.trim() || 'Nuevo mensaje desde el portafolio de Álvaro'}
                  readOnly
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://alvruigut.github.io/" />
                <input
                  className="form-honey"
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  hidden
                />

                <label>
                  <span>Nombre</span>
                  <input type="text" name="nombre" placeholder="Nombre" required />
                </label>
                <label>
                  <span>Tu correo</span>
                  <input type="email" name="email" placeholder="usuario@email.com" required />
                </label>
                <label>
                  <span>Asunto</span>
                  <input
                    type="text"
                    name="asunto"
                    placeholder="Asunto del mensaje"
                    required
                    onChange={(event) => setEmailSubject(event.target.value)}
                  />
                </label>
                <label>
                  <span>Mensaje</span>
                  <textarea name="mensaje" rows={6} placeholder="Tu mensaje aquí" required />
                </label>

                <div className="contact-actions">
                  <button className="terminal-button" type="submit">Enviar mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="portfolio-shell">
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Tema ${themeLabels[theme] || 'verde'}. Cambiar color`}
        title={`Tema ${themeLabels[theme] || 'verde'}`}
      >
        <span aria-hidden="true" />
      </button>

      {booting && (
        <div className="boot-screen" aria-live="polite">
          {mailSentBoot ? (
            <>
              <p>Returning to /home...</p>
              <p>[OK] SMTP handshake</p>
              <p>[OK] payload delivered</p>
              <p>[OK] inbox signal received</p>
              <strong>Mail sent successfully.</strong>
            </>
          ) : (
            <>
              <p>Booting portfolio...</p>
              <p>[OK] whoami</p>
              <p>[OK] projects</p>
              <p>[OK] writeups</p>
              <p>[OK] notebook</p>
              <p>[OK] certs</p>
              <strong>Access granted.</strong>
            </>
          )}
        </div>
      )}

      <section className="profile-hero" aria-label="Perfil">
        <span className="profile-orb-frame">
          <img className="profile-orb" src={profileImage} alt="Avatar de Álvaro" />
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
          <a href="/?contacto" onClick={openContact}>Contacto</a>
        </section>

        <div className="footer-legal">
          <p>Copyright 2026 - Portafolio RuyzTz7</p>
        </div>
      </footer>
    </main>
  )
}

export default App
