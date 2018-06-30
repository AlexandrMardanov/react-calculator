// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/mini-css-extract-plugin
// ------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default () => ({
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:6].bundle.css',
            chunkFilename: 'styles/[name].[contenthash:6].bundle.css'
        })
    ]
})
