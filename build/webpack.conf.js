var merge = require('webpack-merge')
var webpack = require('webpack')
var baseConfig = require('./webpack.base.js')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve('../'),
  entry: {
      main: './src/index.js'
  },
  output: {
    filename: 'main.js',
    library: 'countup',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
      minimize: true
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader'])
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      include: path.resolve(__dirname, '../src')
    }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new ExtractTextPlugin({
      filename:  'main.css',
      allChunks: true
    })
  ]
}
