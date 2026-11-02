import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo-name>. Set BASE_PATH=/AureliaSite
// at build time for that case; it must be known during the build, not at runtime.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
