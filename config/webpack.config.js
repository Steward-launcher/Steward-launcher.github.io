
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './src/pages/index/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, '../')
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
    new ExtractTextPlugin("css/index.css"),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
      { from: 'src/css', to: 'css' }
    ]),
    new ImageminPlugin({test: /\.(jpe?g|png|gif|svg)$/i})
  ]
};