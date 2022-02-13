/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "http://127.0.0.1:4000/api/:path*",
    },
  ],
};
