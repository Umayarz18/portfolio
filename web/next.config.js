/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    images: {
        domains: ['cdn.sanity.io'],
    },
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        runtimeCaching,
        buildExcludes: [/middleware-manifest.json$/],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    async redirects() {
        return [
            {
                source: '/resources',
                destination: '/helpful-links', // Matched parameters can be used in the destination
                permanent: true,
            },
        ];
    },
});
