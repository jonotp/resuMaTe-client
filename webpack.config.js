const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
      index: "./src/index.tsx",
    },
    output: {
      path: path.resolve("dist"),
      filename: "main.[contenthash].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$|\.tsx?$/,
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
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss",".svg"],
    },
    plugins: [
      // Will clear the output path directory pre build
      new CleanWebpackPlugin(),
      new webpack.EnvironmentPlugin(envKeys),
      // Will handle creating a new html in the build directory
      new HTMLWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/Icon/favicon.png",
      }),
      new MiniCSSExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
  };
};
