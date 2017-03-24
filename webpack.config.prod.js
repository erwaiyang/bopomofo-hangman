const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = {
  entry: {
    vendor: baseConfig.entry.vendor,
    app: './src/index.js',
  },
  output: baseConfig.output,
  devtool: 'cheap-module-source-map',
  module: baseConfig.module,
  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
        unused: true,
        dead_code: true,
      },
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
