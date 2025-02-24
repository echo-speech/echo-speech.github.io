/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/echo-speech.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://echo-speech.github.io/"
      : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
