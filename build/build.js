var config = require('./webpack.conf.js')
var webpack = require('webpack')


webpack(config, function(error, status) {
  if (error && stats.hasErrors()) {
    console.error('webpack 编译错误')
  }
  console.log('编译成功')
})
