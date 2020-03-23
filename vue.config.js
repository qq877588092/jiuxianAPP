module.exports = {
  //   lintOnSave: false
  devServer: {
    proxy: {
      '/api': {
        target: 'http://8.129.8.217:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
