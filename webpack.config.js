// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['html-loader?attributes=false', 'pug-html-loader']
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/vendor', to: 'vendor'},
      {from: 'src/img', to: 'img'},
      {from: 'src/css', to: 'css'},
      {from: 'src/js', to: 'js'},
      {from: 'src/CNAME', to: 'CNAME', toType: 'file', },
    ]),
    [
      '3d_printing',
      'about',
      'donate',
      'faq',
      'index',
      'join',
      'news',
      'sponsors'
    ].map((n) => new HtmlWebpackPlugin({
      filename: `${n}.html`,
      template: `src/${n}.pug`,
      inject: false
    }))
  ].flat()
};
module.exports = config;
