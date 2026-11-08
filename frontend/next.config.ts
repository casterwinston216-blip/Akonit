import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Allow a production build to run while `next dev` keeps using `.next`.
  // This avoids corrupting the live dev server's manifests and webpack chunks.
  distDir: process.env.NEXT_BUILD_DIR ?? ".next",
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000",
  },
};

export default nextConfig;
