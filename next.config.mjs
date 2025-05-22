/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "chhayhok.brolong.pro",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
