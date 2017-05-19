const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    resolve(__dirname, 'src', 'app.js'),
  ],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
        // use: [
        //   'style-loader',
        //   'css-loader?sourceMap&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        //   'sass-loader?sourceMap'
        // ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    }),
    new ExtractTextPlugin("styles.css"),
  ]
}