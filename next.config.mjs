/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hollandveranda.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
