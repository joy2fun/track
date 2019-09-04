module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://track-api.dev',
        changeOrigin: true
      }
    }
  }
}