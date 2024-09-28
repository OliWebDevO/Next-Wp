/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // typescript : {
  //   ignoreBuildErrors: true,
  // },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
