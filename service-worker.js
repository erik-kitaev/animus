const CACHE_NAME = 'animus-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './js/app.js',
  './js/auth.js',
  './js/supabase-client.js',
  './js/data/stage1-lessons.js',
  './js/data/stage2-lessons.js',
  './js/data/stage3-lessons.js',
  './js/data/stage4-lessons.js',
  './js/data/stage5-lessons.js',
  './js/data/stage6-lessons.js',
  './js/data/stage7-lessons.js',
  './js/data/stage8-lessons.js',
  './js/data/stage9-lessons.js',
  './js/data/stage10-lessons.js',
  './manifest.json',
  './icon.svg'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure that the service worker takes control of the page immediately.
  self.clients.claim();
});

// Fetch Event (Network first, fallback to cache for data/auth. Cache first for static assets)
self.addEventListener('fetch', (event) => {
  // Exclude Supabase API calls from being cached by the SW to avoid stale data
  if (event.request.url.includes('supabase.co')) {
    return; // Let the browser handle API calls normally
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
