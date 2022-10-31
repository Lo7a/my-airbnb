/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
export const reactStrictMode = true;
export async function headers() {
  return [
    {
      // Apply these headers to all routes in your application.
      source: "/(.*)",
      headers: securityHeaders,
    },
  ];
}

export const images = {
  domains: [
    "https://links.papareact.com/5j2",
    "https://links.papareact.com/isz/",
    "links.papareact.com",
  ],
};
export const env = {
  mapbox_key:
    "pk.eyJ1IjoibGFoYXYiLCJhIjoiY2w5dXR0bWNoMW84NDN3dGZoMGtnazZrOSJ9.r5Uq45QojDg-U6zTNhJiCw",
};
