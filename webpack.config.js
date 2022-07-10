const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//   mode: 'development',
  entry: {
      index: './src/index.js',
      home: './src/home.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Restaurant',
      }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
  }
};