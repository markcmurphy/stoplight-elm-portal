module.exports = {
  reactStrictMode: true,
  experimental: {
    staticPageGenerationTimeout: 300,
  },
  // generateEtags: false,

  webpackDevMiddleware: (config) => {
    // Don't ignore all node modules.
    config.watchOptions.ignored = config.watchOptions.ignored.filter(
      (ignore) => !ignore.toString().includes('node_modules')
    );

    return config;
  },
};
