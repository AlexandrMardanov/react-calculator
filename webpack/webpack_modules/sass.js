// ------------------------------------
// Подробнее: https://github.com/shepherdwind/css-hot-loader
// Подробнее: https://github.com/webpack-contrib/style-loader
// Подробнее: https://github.com/webpack-contrib/css-loader
// Подробнее: https://github.com/retyui/clean-css-loader
// Подробнее: https://github.com/bholloway/resolve-url-loader
// Подробнее: https://github.com/webpack-contrib/sass-loader
// ------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import autoprefixer from 'autoprefixer'

export default () => ({
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'clean-css-loader',
                        options: {
                            level: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: [
                                        'last 2 version',
                                        'safari 5',
                                        'ios 6',
                                        'android 4'
                                    ]
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    { loader: 'resolve-url-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            }
        ]
    }
})
