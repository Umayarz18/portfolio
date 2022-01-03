const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/blog/[slug]",
        destination: "/404", // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: "/projects/[slug]",
        destination: "/404", // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/404", // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: "/resources",
        destination: "/helpful-links", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
});
/*
module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    scope: '/app',
    sw: '/sw.js',
    publicExcludes: ['!robots.txt'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/blog/[slug]",
        destination: "/404", // Matched parameters can be used in the destination
        permanent: false,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    });
    return config;
  },
});*/
