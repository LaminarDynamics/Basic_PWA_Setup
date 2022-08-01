// 7-31-22

let cache_name = "my_cache_v1.3";
let my_assets = [
    "/",
    "sw.js",
    "basic_pwa.html",
    "images/crappy.png",
    "images/scc.png",
    "images/32.png",
    "images/512.png",
    "images/apple_icon.png",
    "manifest.json"
];


self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cache_name);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(my_assets);
    })());
});


//  Fetch request
self.addEventListener('fetch', (e) => { // Fires when resourse is grabbed from local. If not in local adds needed file to local after download
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) { return r; }
        const response = await fetch(e.request);
        const cache = await caches.open(cache_name);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});

// Clear cache
// caches.delete(cache_name);
// self.addEventListener('activate', (e) => {
//     e.waitUntil(caches.keys().then((keyList) => {
//         return Promise.all(keyList.map((key) => {
//             if (key === cache_name) { return; }
//             return caches.delete(key);
//         }))
//     }));
// });