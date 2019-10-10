
module.exports = {
    dev: {
        proxyTable: {
            '/api/**': {
                target: 'http://192.168.0.17:8080/', 
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            },
        }
    }
}