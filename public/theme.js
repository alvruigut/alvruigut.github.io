(() => {
  const THEME_KEY = 'site-theme'
  const VALID_THEMES = new Set(['green', 'red', 'blue'])

  function getStoredTheme() {
    try {
      const theme = localStorage.getItem(THEME_KEY)
      return VALID_THEMES.has(theme) ? theme : 'green'
    } catch {
      return 'green'
    }
  }

  function applyTheme(theme) {
    const nextTheme = VALID_THEMES.has(theme) ? theme : 'green'
    document.documentElement.dataset.theme = nextTheme

    const favicon = document.querySelector('link[rel="icon"]')
    if (favicon) {
      favicon.href = nextTheme === 'green' ? '/favicon-monkey.png?v=20260601' : `/favicon-monkey-${nextTheme}.png?v=20260601`
    }

    try {
      localStorage.setItem(THEME_KEY, nextTheme)
    } catch {
      // El tema sigue funcionando aunque el navegador bloquee localStorage.
    }

    window.dispatchEvent(new CustomEvent('site-theme-change', { detail: { theme: nextTheme } }))
  }

  window.getSiteTheme = getStoredTheme
  window.setSiteTheme = applyTheme
  applyTheme(getStoredTheme())
})()
