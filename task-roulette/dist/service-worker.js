importScripts("/precache-manifest.a61af3582d49b95dbdd7b579b7f382a1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.precaching.precacheAndRoute(self.__precacheManifest);

}
else {
    console.log(`Workbox didn't load`);
}



