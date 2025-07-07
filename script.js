const CACHE_NAME = "poonam-portfolio-cache-v1";
const urlsToCache = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "favicon-16x16.png"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
