/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['holland-veranda.netlify.app'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
