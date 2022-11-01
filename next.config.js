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
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibGFoYXYiLCJhIjoiY2w5dXR0bWNoMW84NDN3dGZoMGtnazZrOSJ9.r5Uq45QojDg-U6zTNhJiCw",
  },
};
