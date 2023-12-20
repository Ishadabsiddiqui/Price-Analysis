/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['@acme/ui']
  },
  images: {
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig