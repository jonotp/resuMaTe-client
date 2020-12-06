const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");

const devConfigExt = {
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
};

const prodConfigExt = {};

module.exports = (_, { mode }) => {
  const envFile =
    mode === "development"
      ? path.join(__dirname, ".env")
      : path.join(__dirname, ".env.production");
  const env = dotenv.config({ path: envFile }).parsed;

  const ext = mode === "development" ? devConfigExt : prodConfigExt;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    ...ext,
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.resolve("dist"),
      filename: "main.[contenthash].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
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
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
    },
    plugins: [
      new webpack.EnvironmentPlugin(envKeys),
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
};
