importScripts("/precache-manifest.fe2b87288e1e4fd1e43d30bbadb24c30.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.precaching.precacheAndRoute(self.__precacheManifest);

}
else {
    console.log(`Workbox didn't load`);
}



