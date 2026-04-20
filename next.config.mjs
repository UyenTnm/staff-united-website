/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io"],
  },

  async redirects() {
    return [
      {
        source: '/the-standard',
        destination: '/insights',
        permanent: true,
      }
    ]
  }
}

export default nextConfig
