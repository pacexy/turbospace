module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{tsx,ts}',
    './components/**/*.{tsx,ts}',
    './node_modules/@literal-ui/core/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('m3-tokens/tailwind')({ source: '#00ff00' }),
    require('@literal-ui/plugins'),
  ],
}
