importScripts("/precache-manifest.55d8b107f2958abf33831fee5f2d4752.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.precaching.precacheAndRoute(self.__precacheManifest);

}
else {
    console.log(`Workbox didn't load`);
}



