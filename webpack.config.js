const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//src folder is the default folder webpack checks
module.exports = {
  mode: 'development',
  entry: {
    //for code splitting: splitting into chunks so that code gets loaded only when needed
    app: './src/index.js',
    new: './src/another.js',
  }, //   or './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  // plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    hot: true,

    static: [
      {
        directory: path.join(__dirname, 'public'),
      },
    ],
    port: 9000,
  },
};
