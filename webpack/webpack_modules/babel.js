// ------------------------------------
// Подробнее: https://github.com/babel/babel-loader
// ------------------------------------

import { resolve } from 'path'

export default () => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include: resolve('src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
})
