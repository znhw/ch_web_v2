import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Forces static HTML export
  trailingSlash: true, // Ensures proper routing
  basePath: '', // Remove the basePath if using a custom domain
  assetPrefix: '', // Remove assetPrefix if using a custom domain

};

export default nextConfig;
