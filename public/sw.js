const VERSION = 'maison-blanche-static-v1';
const ASSET_CACHE = `${VERSION}-assets`;
const IMAGE_CACHE = `${VERSION}-images`;

const ASSET_EXTENSIONS = ['.css', '.js', '.mjs', '.svg', '.woff', '.woff2', '.ttf', '.otf'];

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((cacheName) => !cacheName.startsWith(VERSION))
        .map((cacheName) => caches.delete(cacheName)),
    );

    await self.clients.claim();
  })());
});

function isUnsplash(url) {
  return url.hostname.includes('images.unsplash.com');
}

function isImageRequest(request) {
  const url = new URL(request.url);
  return request.method === 'GET' && (request.destination === 'image' || isUnsplash(url));
}

function isStaticAssetRequest(request) {
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return false;
  }

  if (url.pathname.startsWith('/_astro/')) {
    return true;
  }

  return ASSET_EXTENSIONS.some((extension) => url.pathname.endsWith(extension));
}

async function saveToCache(cacheName, request, response) {
  if (!response || (!response.ok && response.type !== 'opaque')) {
    return response;
  }

  const cache = await caches.open(cacheName);
  cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (isImageRequest(request)) {
    event.respondWith((async () => {
      const cache = await caches.open(IMAGE_CACHE);
      const cached = await cache.match(request);
      const networkPromise = fetch(request)
        .then((response) => saveToCache(IMAGE_CACHE, request, response))
        .catch(() => {
          if (cached) return cached;
          throw new Error(`Image request failed for ${request.url}`);
        });

      if (cached) {
        event.waitUntil(networkPromise);
        return cached;
      }

      return networkPromise;
    })());

    return;
  }

  if (isStaticAssetRequest(request)) {
    event.respondWith((async () => {
      const cache = await caches.open(ASSET_CACHE);
      const cached = await cache.match(request);
      const networkPromise = fetch(request)
        .then((response) => saveToCache(ASSET_CACHE, request, response))
        .catch(() => {
          if (cached) return cached;
          throw new Error(`Asset request failed for ${request.url}`);
        });

      if (cached) {
        event.waitUntil(networkPromise);
        return cached;
      }

      return networkPromise;
    })());
  }
});
