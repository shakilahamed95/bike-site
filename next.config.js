/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'i0.wp.com', 'i.gr-assets.com', 'encrypted-tbn0.gstatic.com', 'ds.rokomari.store', '4.bp.blogspot.com', 'upload.wikimedia.org']
  }
}
