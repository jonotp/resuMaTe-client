const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve:{
    extensions: ['.js', '.jsx','.scss']
  },
  plugins: [
    // Will handle creating a new html in the build directory
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
