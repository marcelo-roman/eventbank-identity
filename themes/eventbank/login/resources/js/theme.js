;(function () {
  var root = document.documentElement
  var script = document.currentScript
  var media = window.matchMedia('(prefers-color-scheme: dark)')
  function preference() {
    try {
      var stored = window.localStorage.getItem('eventbank.theme')
      return stored === 'light' || stored === 'dark' ? stored : 'system'
    } catch (error) {
      return 'system'
    }
  }
  function apply() {
    var choice = preference()
    var theme = choice === 'system' ? (media.matches ? 'dark' : 'light') : choice
    root.dataset.theme = theme
    root.classList.toggle('pf-v5-theme-dark', theme === 'dark')
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1b1e24' : '#f6f7f9')
  }
  function favicon() {
    if (!script) return
    var icon = document.querySelector('link[rel="icon"]') || document.head.appendChild(document.createElement('link'))
    icon.rel = 'icon'
    icon.type = 'image/svg+xml'
    icon.href = script.src.replace(/js\/theme\.js.*$/, 'img/favicon.svg')
  }
  favicon()
  media.addEventListener('change', apply)
  apply()
})()
