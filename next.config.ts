import type { NextConfig } from "next";
import { siteUrl } from "./lib/site-config";

const { hostname } = new URL(siteUrl);
const isProduction = hostname !== "localhost";

const nextConfig: NextConfig = {
  async redirects() {
    if (!isProduction) return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${hostname}` }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
