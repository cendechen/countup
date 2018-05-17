var config = require('./webpack.dev.js')
var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')


const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
})
webpackDevServer.addDevServerEntrypoints(config, devServerOptions)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, devServerOptions)
server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080')
})
