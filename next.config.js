module.exports = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl/i,
      use: "raw-loader",
    });
    return config;
  },
};
