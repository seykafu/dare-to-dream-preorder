/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // YouTube thumbnails for the podcast section.
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' }],
  },
  // Exclude old React Router pages from build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config) => {
    // Ignore src/pages directory
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/src/pages/**'],
    };
    return config;
  },
};

export default nextConfig;
