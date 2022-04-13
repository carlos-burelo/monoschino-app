const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss')],
  },
  images: {
    domains: ['monoschinos2.com'],
  },
}

module.exports = nextConfig
