
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
    }
}