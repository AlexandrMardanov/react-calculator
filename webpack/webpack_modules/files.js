// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/copy-webpack-plugin
// ------------------------------------

import { resolve } from 'path'

const CopyWebpackPlugin = require('copy-webpack-plugin')

export default () => ({
    plugins: [
        new CopyWebpackPlugin([
            {
                from: resolve('src', 'uploads'),
                to: 'uploads',
                toType: 'dir'
            }
        ])
    ]
})
