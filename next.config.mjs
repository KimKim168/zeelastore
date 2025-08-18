/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "admin-chhayhok.corasolution.com",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
