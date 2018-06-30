// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/url-loader
// ------------------------------------

export default () => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:6].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    }
})
