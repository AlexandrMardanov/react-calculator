// ------------------------------------
// Подробнее: https://github.com/Va1/browser-sync-webpack-plugin
// ------------------------------------

import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

const siteName = `localhost:3000`

export default () => ({
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            proxy: siteName,
            port: 8000,
            files: [{
                match: [
                    '**/*.html'
                ],
                fn: function(event, file) {
                    if (event === 'change') {
                        const bs = require('browser-sync').get('bs-webpack-plugin')
                        bs.reload()
                    }
                }
            }]
        },
        {
            reload: false
        })
    ]
})
