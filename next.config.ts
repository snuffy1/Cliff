import type { NextConfig } from "next";

import withTM from "next-transpile-modules";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      }
      
    ],
  },
};

export default withTM(["gsap"])(nextConfig);