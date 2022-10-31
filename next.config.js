/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "https://links.papareact.com/5j2",
      "https://links.papareact.com/isz/",
      "links.papareact.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibGFoYXYiLCJhIjoiY2w5dXR0bWNoMW84NDN3dGZoMGtnazZrOSJ9.r5Uq45QojDg-U6zTNhJiCw",
  },
};
