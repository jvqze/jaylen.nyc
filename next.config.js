/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
    reactStrictMode: true,
    images: {
        domains: ["cdn.jaylen.nyc", "cdn.discordapp.com"],
    },
};
