var path = require('path')
module.exports = {
    dev: {
        proxyTable: {
            '/api/**': {
                target: '"http://159.89.121.159:3008', 
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            },
        }
    },
    build: {
      index: path.resolve(__dirname, '../dist/index.html'),
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      assetsPublicPath: './',
      productionSourceMap: false
    }
}