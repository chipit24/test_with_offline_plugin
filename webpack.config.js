const path = require('path');
const OfflinePlugin = require('offline-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  plugins: [
    new OfflinePlugin({ AppCache: false }),
    new DashboardPlugin()
  ]
};
