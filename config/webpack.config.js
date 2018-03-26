
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: {
    index: './src/pages/index/index.js',
    donate: './src/pages/donate/donate.js'
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin
          .extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', query: { url: true, modules: false, sourceMaps: true } },
              {
                loader: 'sass-loader',
              }
            ]
          })
      },
      {
        test: /\.(png|jpg|jpeg|ico)$/,
        loader: 'url-loader?limit=81920'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Steward - A command launcher for Chrome',
      template: './src/pages/index/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Steward - A command launcher for Chrome',
      template: './src/pages/donate/donate.html',
      filename: 'donate.html',
      chunks: ['donate']
    }),
    new ExtractTextPlugin("css/[name].css"),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
      { from: 'src/css', to: 'css' }
    ]),
    new ImageminPlugin({test: /\.(jpe?g|png|gif|svg)$/i})
  ]
};