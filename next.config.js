/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        // pathname: "/a/<APP_ID>/*",
      },
    ],
  },
};

module.exports = nextConfig;
