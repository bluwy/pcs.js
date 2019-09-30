const lightTheme = {
  '--primary-color': '#47a',
  '--light-color': '#efefef',
  '--dark-color': '#111'
}

const darkTheme = {
  '--primary-color': '#abcdef',
  '--light-color': '#111',
  '--dark-color': '#efefef'
}

window.addEventListener('load', () => {
  const { setState } = pcs(lightTheme, darkTheme)

  const states = ['auto', 'light', 'dark']
  let index = -1
  
  const stateText = document.querySelector('.state-text')
  const toggle = () => {
    index = (index + 1) % states.length
    setState(states[index])
    stateText.innerText = 'State: ' + states[index]
  }

  toggle()

  document.querySelector('.state-toggle').addEventListener('click', toggle)
})
