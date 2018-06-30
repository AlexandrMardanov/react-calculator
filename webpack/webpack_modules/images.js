// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/url-loader
// Подробнее: https://github.com/tcoopman/image-webpack-loader
// Подробнее: https://github.com/bhovhannes/svg-url-loader
// ------------------------------------

export default () => ({
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[hash:6].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10 * 1024,
                            noquotes: true,
                            iesafe: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    }
})
