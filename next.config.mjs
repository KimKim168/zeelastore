/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "chhayhok.brolong.pro",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
