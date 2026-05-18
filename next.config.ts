import type { NextConfig } from "next";

const nextConfig: any = {
  output: 'export',
  // @ts-ignore
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
