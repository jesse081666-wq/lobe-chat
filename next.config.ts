import { defineConfig } from './src/libs/next/config/define-config';

const nextConfig = defineConfig({
  experimental: {
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
  },
  webpack: (webpackConfig: any, context: any) => {
    const { dev } = context;
    if (!dev) {
      webpackConfig.cache = false;
    }

    return webpackConfig;
  },
} as any) as any;

// 添加 TypeScript 和 ESLint 配置
(nextConfig as any).typescript = {
  ignoreBuildErrors: true,
};

(nextConfig as any).eslint = {
  ignoreDuringBuilds: true,
};

export default nextConfig;
