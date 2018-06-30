// ------------------------------------
// Подробнее: https://github.com/johnagan/clean-webpack-plugin
// ------------------------------------

import { resolve } from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default () => ({
    plugins: [
        new CleanWebpackPlugin([
            'build'
        ], { root: resolve(process.cwd()) })
    ]
})
