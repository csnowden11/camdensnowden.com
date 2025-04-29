/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Enable static exports
  output: 'export',
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 