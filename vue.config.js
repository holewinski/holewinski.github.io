module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'TaskRoulette',
        themeColor: '#db8401',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/registerServiceWorker.js',
            // ...other Workbox options...
        },
        manifestPath: '@/public/',
        manifesOptions: {
            name: this.pwa.name,
            short_name: 'TRoulette',
            start_url: ".",
            display: 'standalone',
            theme_color: this.pwa.themeColor
        },
        iconPaths: {
            favicon32: '@/public/img/icons/icon-32.png',
            favicon16: '@/public/img/icons/icon-16.png',
            appleTouchIcon: '@/public/img/icons/icon.svg',
            maskIcon: '@/public/img/icons/icon-152.png',
            msTileImage: '@/public/img/icons/icon-144.png',
        }
    }
}