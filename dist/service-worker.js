importScripts("/precache-manifest.eb2563d6842ef44ac0160e8909a712a2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.precaching.precacheAndRoute(self.__precacheManifest);

}
else {
    console.log(`Workbox didn't load`);
}



