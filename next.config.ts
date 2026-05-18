import type { NextConfig } from "next";

const nextConfig: any = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
