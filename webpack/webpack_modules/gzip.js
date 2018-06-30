// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/compression-webpack-plugin
// Подробнее: https://github.com/mynameiswhm/brotli-webpack-plugin
// ------------------------------------

const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

export default () => ({
    plugins: [
        new CompressionPlugin({
            algorithm: 'gzip'
        }),
        new BrotliPlugin()
    ]
})
