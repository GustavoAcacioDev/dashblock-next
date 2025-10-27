import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude node-ssh and ssh2 from webpack bundling on server
      config.externals = config.externals || [];
      config.externals.push('node-ssh', 'ssh2');
    }
    return config;
  },
};

export default nextConfig;
