const CACHE_NAME = "evelon-cache-v1";
const OFFLINE_PAGE = "offline.html";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                OFFLINE_PAGE
            ]);
        })
    );
    console.log("Service Worker Installed & Offline Page Cached");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(OFFLINE_PAGE);
        })
    );
});
