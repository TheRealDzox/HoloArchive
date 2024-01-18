/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lumiere-a.akamaihd.net",
          port: "",
          pathname: "/v1/images/**",
        },
      ],
    },
  };