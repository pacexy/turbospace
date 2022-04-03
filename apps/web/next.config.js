const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')([
  '@turbospace/internal',
  '../packages/react-library',
  '../packages/ts-library',
])

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPWA(
  withTM({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
    },
  }),
)
