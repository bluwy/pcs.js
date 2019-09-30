/**
 * pcs.js v1.0.0
 * A simple wrapper to set color themes based on prefers-color-scheme
 * 
 * Author: Bjorn Lu
 * License: MIT
 */
(() => {
  const pcs = (lightTheme, darkTheme, target = document.documentElement.style) => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const setTheme = (isDark) => {
      Object.entries(isDark ? darkTheme : lightTheme).forEach(([k, v]) => {
        target.setProperty(k, v)
      })
    }

    const setState = (state) => {
      if (state === 'auto') {
        setTheme(darkQuery.matches)
        darkQuery.onchange = () => { setTheme(darkQuery.matches) }
      } else {
        setTheme(state === 'dark')
        darkQuery.onchange = null
      }
    }

    return { setState }
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = pcs
  } else {
    window.pcs = pcs
  }
})()
