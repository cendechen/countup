var merge = require('webpack-merge')
var webpack = require('webpack')
var baseConfig = require('./webpack.base.js')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    compress: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: '数字滚动组件',
      filename: 'index.html',
      template: './index.html'
    })
  ]
})
