// Service Worker — Einkaufsliste v4
const CACHE = 'einkaufsliste-v4';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.allSettled(ASSETS.map(u => c.add(u).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.destination === 'document') {
    // HTML: immer frisch vom Server
    e.respondWith(
      fetch(e.request)
        .then(r => { if (r && r.status === 200) caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    // Assets: Cache first
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(r2 => {
        if (r2 && r2.status === 200) caches.open(CACHE).then(c => c.put(e.request, r2.clone()));
        return r2;
      }))
    );
  }
});
