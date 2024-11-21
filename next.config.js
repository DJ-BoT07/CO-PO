/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig 