const CACHE_NAME = 'speedo-cache-v2';

// Install & langsung paksa aktif tanpa nunggu
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Bersihkan cache versi lama saat Service Worker baru aktif
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Strategi: Network First, fallback to Cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Jika ada internet, ambil file terbaru dari server dan simpan ke cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return response;
      })
      .catch(() => {
        // Jika gagal/offline, baru pakai tampilan yang ada di cache
        return caches.match(e.request);
      })
  );
});