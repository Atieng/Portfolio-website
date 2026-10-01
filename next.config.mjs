/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH || "", // set automatically by the GitHub Action
};
export default nextConfig;
