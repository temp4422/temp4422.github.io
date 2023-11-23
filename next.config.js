/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next',
  distDir: '/docs/next',
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
}

module.exports = nextConfig
