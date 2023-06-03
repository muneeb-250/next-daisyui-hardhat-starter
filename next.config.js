/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PRIVATE_KEY: 'YOUR_PRIVATE_KEY',
    ALCHEMY_GOERLI_KEY: 'YOUR_ALCHEMY_GOERLI_KEY',
  }
}

module.exports = nextConfig
