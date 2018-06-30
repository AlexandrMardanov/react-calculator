// ------------------------------------
// Подробнее: https://github.com/mixtur/webpack-spritesmith
// ------------------------------------

import { resolve } from 'path'
import SpritesmithPlugin from 'webpack-spritesmith'

export default () => ({
    plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: resolve('src'),
                glob: '**/*_sprite.png'
            },
            target: {
                image: resolve('src', 'spritesmith', 'sprite.png'),
                css: resolve('src', 'spritesmith', 'sprite.scss')
            },
            spritesmithOptions: {
                padding: 10
            },
            apiOptions: {
                cssImageRef: 'sprite.png'
            }
        })
    ]
})
