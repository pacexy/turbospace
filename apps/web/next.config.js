const withTM = require('next-transpile-modules')(['@turbospace/core'])

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
})
