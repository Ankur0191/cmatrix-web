/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint blocking production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during build (they still show in VSCode)
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    typedRoutes: false, // Fixes Next.js 15 dynamic route type bug
  },

  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
