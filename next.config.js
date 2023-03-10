/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
	// Target must be serverless
  target: "serverless",
}

module.exports = nextConfig
