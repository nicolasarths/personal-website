/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/pt-br',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projetos',
        destination: '/dev/desenvolver#projetos',
        permanent: true
      }
    ]
  },
  experimental: {
    images: {
        allowFutureImage: true
    }
  }
}

module.exports = nextConfig