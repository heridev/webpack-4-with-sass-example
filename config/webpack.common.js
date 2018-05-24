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
          "sass-loader"
        ]
      },
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')]
        }
      },
      {
        test: /\.woff/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff",
          name: "font/[hash].[ext]"
        }
      },
      {
        test: /\.woff2/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff2",
          name: "font/[hash].[ext]"
        }
      },

      {
        test: /\.(ttf|eot|svg|otf)/,
        loader: "file-loader"
      },

    ]
  }
  //externals: [{
    //xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  //}]
};
