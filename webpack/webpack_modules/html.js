// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/html-loader
// Подробнее: https://github.com/jantimon/html-webpack-plugin
// ------------------------------------

import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin'

import fs from 'fs'

const path = resolve('src/templates')
const templates = fs.readdirSync(path)

const templatesConfig = templates.map(item => {
    return new HtmlWebpackPlugin({
        template: resolve(`src/templates/${item}`),
        filename: resolve(`build/${item}`),
        chunks: ['main', 'vendor', 'runtime'],
        inject: true,
        inlineSource: 'runtime'
    })
})

export default () => ({
    plugins: [...templatesConfig, new HtmlWebpackInlineSourcePlugin()]
})
