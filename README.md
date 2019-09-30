# pcs.js

A simple wrapper to set color themes based on `prefers-color-scheme`

### Note

This library does not provide any plug-and-play components. It's merely a wrapper for components to build on top.

It also uses CSS variables to set theme colors, you would need to reference the variables in your CSS.

## Getting started

> I'm planning to add to npm or a CDN in the future

Copy one of the files from `lib/`,

* `pcs.js`: Babel-compiled ES5 source code
* `pcs.min.js`: Minified and uglified version
* `pcs.min.cs.gz`: Gzipped minified version

There's also the raw source code under `src/` using ES6 syntax.

Depending on your project, reference the script and you can now use it.

Usage:

```js
// CSS variables declaration
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

// Initialize pcs and destructure method
const { setState } = pcs(lightTheme, darkTheme)

// Set state to auto (Other options: light, dark)
setState('auto')
```

## Documentation

### pcs(lightTheme, darkTheme, [target])

`lightTheme` is the light theme `Object` to be applied.

`darkTheme` is the dark theme `Object` to be applied.

`target` is the `CSSStyleDeclaration` where theme variables are applied. (Default: `document.documentElement.style`)

Call this to initialize a new instance.

> Usually a single initialization would suffice, but if you have multiple targets, you can initialize a new instance for each of them.

### pcs.setState(state)

`state` can be of values of `auto`, `light` or `dark`. Invalid values are treated as `light`.

Call this method to set an instance's state.

`auto` will change the theme according to the `prefers-color-scheme` media query. Changes are watched.

`light` will directly set to light theme, ignoring `prefers-color-scheme`.

`dark` will directly set to dark theme, ignoring `prefers-color-scheme`.

## Contribution

Feel free to send an issue for any bugs or feature request. PRs are welcomed.

## License

MIT
