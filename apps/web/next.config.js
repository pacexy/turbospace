const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@turbospace/internal'])

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
