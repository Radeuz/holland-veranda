/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hollandveranda.com'],
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
