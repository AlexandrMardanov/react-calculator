// ------------------------------------
// Подробнее: https://github.com/webpack/webpack-dev-server
// ------------------------------------

export default () => ({
    devServer: {
        compress: true,
        stats: 'errors-only',
        port: 3000,
        noInfo: true,
        contentBase: './',
        hot: true
    }
})
