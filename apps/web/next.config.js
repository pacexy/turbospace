const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@turbospace/core'])

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPWA(
  withTM({
    reactStrictMode: true,
    pageExtensions: ['page.tsx'],
    pwa: {
      dest: 'public',
    },
  }),
)
