import { resolve } from 'path'
import merge from 'webpack-merge'
import images from './webpack_modules/images'
import fonts from './webpack_modules/fonts'
import files from './webpack_modules/files'
import babel from './webpack_modules/babel'
import devServer from './webpack_modules/dev-server'
import sass from './webpack_modules/sass-dev'
import sprite from './webpack_modules/spritesmith'
import browserSync from './webpack_modules/browser-sync'
import html from './webpack_modules/html'

export default () => merge([
    {
        mode: 'development',
        context: resolve('./'),
        entry: {
            main: './src/main.js'
        },
        output: {
            path: resolve('build'),
            filename: 'js/[name].bundle.js',
            chunkFilename: 'js/[name].bundle.js',
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
        devtool: 'eval',
        resolve: {
            modules: ['./node_modules']
        }
    },
    images(),
    fonts(),
    files(),
    babel(),
    devServer(),
    sass(),
    sprite(),
    html(),
    browserSync()
])
