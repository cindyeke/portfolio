const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pages = ["index", "login", "dashboard"];

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  entry: {
    index: "./src/index.js",
    // login: "./src/login.js",
    // dashboard: "./src/dashboard.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].[contenthash].bundle.js",
    assetModuleFilename: "img/[hash][ext][query]",
  },

  devServer: {
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ico|png)$/,
        type: "asset",
      },
      {
        test: /\.pdf$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `./public/${page}.html`,
          filename: `${page}.html`,
          chunks: page === "index" ? ["index"] : [`${page}`],
        })
    )
  ),
};
