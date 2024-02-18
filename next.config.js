/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // output: 'export',
  images: {
    domains: [
      "images.pexels.com",
      "127.0.0.1"
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './base.scss';`,
  },
}

module.exports = nextConfig
