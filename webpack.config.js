// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader?attributes=false', 'pug-html-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
//    '3dprinting',
//    'about',
//    'donate',
//    'faq',
//    'gallery',
    'index',
//    'join',
//    'news',
//    'sponsors'
  ].map((n) => new HtmlWebpackPlugin({
    filename: `${n}.html`,
    template: `src/${n}.pug`,
    inject: false
  }))
};
module.exports = config;
