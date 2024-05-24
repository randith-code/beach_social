/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beachsocial.leadmedia.lk",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
