/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/BetinaNail-LP',
  assetPrefix: '/BetinaNail-LP/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
