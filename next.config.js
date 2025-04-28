/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["yourdomain.com"], // Buraya ileride özel görsellerin domaini eklenebilir
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
