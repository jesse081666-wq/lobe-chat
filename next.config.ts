import { defineConfig } from './src/libs/next/config/define-config';

const nextConfig = defineConfig({
  experimental: {
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
  },
  webpack: (webpackConfig, context) => {
    const { dev } = context;
    if (!dev) {
      webpackConfig.cache = false;
    }

    return webpackConfig;
  },
   typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

export default nextConfig;
