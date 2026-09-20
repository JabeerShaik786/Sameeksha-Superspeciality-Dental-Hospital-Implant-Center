import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Sameeksha-Superspeciality-Dental-Hospital-Implant-Center",
  assetPrefix: "/Sameeksha-Superspeciality-Dental-Hospital-Implant-Center",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
