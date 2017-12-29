const path = require('path');
const config = require("../config/webpack.config.js");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, "../dist"),
  hot: true
});

server.listen(3456, "localhost", function() {});