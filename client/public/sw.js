// ULTRA-AGGRESSIVE Service Worker for mobile performance optimization
const CACHE_NAME = 'vip-photo-studio-v3';
const CRITICAL_RESOURCES = [
  '/',
  '/src/main.tsx',
  // CRITICAL: Mobile-optimized images for instant LCP
  'https://i.imgur.com/MRGNjyIs.webp', // Tiny placeholder (160px)
  'https://i.imgur.com/MRGNjyIm.webp', // Mobile WebP (320px)
  'https://i.imgur.com/MRGNjyIm.jpeg', // Mobile JPEG fallback
  // CRITICAL: Fonts for FCP
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXpsog.woff2',
  'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3WmX5slCNuHLi8bLeY9MKExwhUuJpI2dI.woff2'
];

// Mobile-specific cache strategy
const MOBILE_CACHE_STRATEGY = {
  images: 'cache-first',
  fonts: 'cache-first',
  api: 'network-first',
  pages: 'stale-while-revalidate'
};

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests except for images and fonts
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('i.imgur.com') &&
      !event.request.url.includes('fonts.googleapis.com') &&
      !event.request.url.includes('fonts.gstatic.com')) {
    return;
  }

  const url = new URL(event.request.url);
  const isImage = url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
  const isFont = url.pathname.match(/\.(woff|woff2|ttf|eot)$/i) || url.hostname.includes('fonts.');
  const isMobile = event.request.headers.get('user-agent')?.includes('Mobile') || 
                   event.request.headers.get('user-agent')?.includes('Android');

  // Mobile-optimized caching strategy
  if (isMobile) {
    if (isImage) {
      // Cache-first for images on mobile
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            return fetch(event.request).then((response) => {
              if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              }
              return response;
            });
          })
      );
    } else if (isFont) {
      // Cache-first for fonts
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            return fetch(event.request).then((response) => {
              if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              }
              return response;
            });
          })
      );
    } else {
      // Stale-while-revalidate for other resources
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            const fetchPromise = fetch(event.request).then((response) => {
              if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              }
              return response;
            });
            return response || fetchPromise;
          })
      );
    }
  } else {
    // Desktop fallback to original strategy
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          });
        })
    );
  }
});
