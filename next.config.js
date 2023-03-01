/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "replicate.com",
      "replicate.delivery",
      "replicate-delivery.moeyy.xyz",
      "user-images.githubusercontent.com",
      "paint-by-text.moeyy.cn",
      "paint-by-text-moeyy.vercel.app",
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
