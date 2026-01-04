/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  // Exclude old React Router pages from build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { isServer }) => {
    // Ignore src/pages directory
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/src/pages/**'],
    };
    return config;
  },
};

export default nextConfig;

