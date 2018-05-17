const path = require('path')

module.exports = {
  context: path.resolve('./'),
  entry: {
    app: './demo/index.js'
  },
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
      include: path.resolve(__dirname, '../src')
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
    }]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
