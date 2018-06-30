// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/style-loader
// Подробнее: https://github.com/webpack-contrib/css-loader
// Подробнее: https://github.com/bholloway/resolve-url-loader
// Подробнее: https://github.com/webpack-contrib/sass-loader
// ------------------------------------

export default () => ({
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'resolve-url-loader' },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            }
        ]
    }
})
