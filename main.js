const lighTheme = {
  '--primary-color': '#e4543b',
  '--light-color': '#efefef',
  '--dark-color': '#2e2e2e',
  '--gray-color': '#5e5e5e'
}

const darkTheme = {
  '--primary-color': '#e4a4ab',
  '--light-color': '#2e2e2e',
  '--dark-color': '#efefef',
  '--gray-color': '#5e5e5e'
}

const { setState } = pcs(lighTheme, darkTheme)
setState('auto')

window.addEventListener('load', function () {
  document.getElementById('theme-state-auto').addEventListener('input', e => setState(e.target.value))
  document.getElementById('theme-state-light').addEventListener('input', e => setState(e.target.value))
  document.getElementById('theme-state-dark').addEventListener('input', e => setState(e.target.value))
})
