const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODULE_PATHS = [
  './node_modules',
];

module.exports = {
  resolve: {
    modules: MODULE_PATHS,
    extensions: ['.js', '.jsx']
  },

  node: { __filename: true },
  entry: "./src/index.js",

  output: {
    //path: path.resolve(__dirname, "../dist"),
    filename: "react_app.js",
    publicPath: "/"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }

    ]
  }
  //externals: [{
    //xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  //}]
};
