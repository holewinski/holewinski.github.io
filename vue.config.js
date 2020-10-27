// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Task Roulette',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            name: 'Task Roulette',
            short_name: 'TRoulette',
            orientation: 'portrait',
            display: 'standalone',
            icons: [{
                "src": "img/icons/icon-16-maskable.png",
                "sizes": "16x16",
                "type": "image/png",
                "purpose": "maskable"
            }, {
                "src": "img/icons/icon-32-maskable.png",
                "sizes": "32x32",
                "type": "image/png",
                "purpose": "maskable"
            }, {
                "src": "img/icons/icon-72-maskable.png",
                "sizes": "72x72",
                "type": "image/png",
                "purpose": "maskable"
            }, {
                "src": "img/icons/icon-144-maskable.png",
                "sizes": "144x144",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "img/icons/icon-16.png",
                "sizes": "16x16",
                "type": "image/png"
            }, {
                "src": "img/icons/icon-32.png",
                "sizes": "32x32",
                "type": "image/png"
            }, {
                "src": "img/icons/icon-144.png",
                "sizes": "144x144",
                "type": "image/png"
            }, {
                "src": "img/icons/icon-152.png",
                "sizes": "152x152",
                "type": "image/png"
            },
            {
                "src": "img/icons/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "img/icons/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            }]
        },
        // configure the workbox plugin

        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'public/service-worker.js',
            // ...other Workbox options...
        }

    }
}