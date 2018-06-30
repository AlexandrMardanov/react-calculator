import { resolve } from 'path'
import merge from 'webpack-merge'
import clean from './webpack_modules/clean'
import fonts from './webpack_modules/fonts'
import files from './webpack_modules/files'
import babel from './webpack_modules/babel'
import sass from './webpack_modules/sass'
import sprite from './webpack_modules/spritesmith'
import images from './webpack_modules/images'
import extractCss from './webpack_modules/extract-css'
import templates from './webpack_modules/html'
import gzip from './webpack_modules/gzip'

export default () => merge([
    {
        mode: 'production',
        entry: {
            main: './src/main.js'
        },
        output: {
            path: resolve('build'),
            filename: 'js/[name].[contenthash:6].bundle.js',
            chunkFilename: 'js/[name].[contenthash:6].bundle.js',
            publicPath: '/'
        },
        stats: {
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            errors: true,
            errorDetails: true,
            entrypoints: false,
            children: false,
            builtAt: false
        },
        optimization: {
            nodeEnv: 'production',
            runtimeChunk: { name: 'runtime' },
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        enforce: true
                    }
                }
            }
        },
        devtool: 'source-map',
        plugins: [],
        resolve: {
            modules: ['./node_modules']
        }
    },
    clean(),
    fonts(),
    files(),
    babel(),
    sass(),
    sprite(),
    images(),
    extractCss(),
    templates(),
    gzip()
])
