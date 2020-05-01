// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = {
  test: /\.pug$/,
  use: ['html-loader?attributes=false', 'pug-html-loader']
};
const config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [pug]
  },
  plugins: [
    '3dprinting',
    'about',
    'donate',
    'faq',
    'gallery',
    'index',
    'join',
    'news',
    'sponsors'
  ].map((n) => new HtmlWebpackPlugin({
      filename: `${n}.html`,
      template: `src/${n}.pug`,
      inject: false
    }))
};
module.exports = config;
