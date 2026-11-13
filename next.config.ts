import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    FECHA_BUILD: new Date().toISOString(),
  },
};

export default nextConfig;