/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://openweathermap.org/'],
    // loader: 'imgix',
    path: '',
    disableStaticImages: true,
  },
}

module.exports = withImages(nextConfig)
