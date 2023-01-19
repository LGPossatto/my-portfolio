/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    siteUrl: "https://luizgustavo.netlify.app/",
  },
  images: {
    domains: ["localhost", "lgpossatto.netlify.app"],
  },
};

module.exports = nextConfig;
