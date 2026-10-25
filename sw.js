/* CHOPSTIX Service Worker – offline-first, versionierter Cache.
   Spielstände liegen im localStorage und werden hier NIE angefasst. */
const VERSION = '1.4.1';
const CACHE = 'chopstix-' + VERSION;
const FILES = ["./", "./apple-touch-icon.png", "./favicon.ico", "./favicon.png", "./fonts/barlow-condensed-latin-500-normal.woff2", "./fonts/barlow-condensed-latin-600-normal.woff2", "./fonts/barlow-condensed-latin-700-normal.woff2", "./fonts/barlow-condensed-latin-800-normal.woff2", "./fonts/barlow-latin-400-normal.woff2", "./fonts/barlow-latin-500-normal.woff2", "./fonts/barlow-latin-600-normal.woff2", "./fonts/barlow-latin-700-normal.woff2", "./game.js", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./index.html", "./manifest.webmanifest"];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(FILES.map((u) => new Request(u, { cache: 'reload' })));
    /* Erstinstallation: sofort aktiv. Updates warten auf «Neu laden». */
    if (!self.registration.active) await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('chopstix-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const c = await caches.open(CACHE);
    const key = req.mode === 'navigate' ? './index.html' : req;
    const hit = await c.match(key, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === 'basic') c.put(key, res.clone());
      return res;
    } catch (e) {
      const fb = req.mode === 'navigate' ? await c.match('./index.html') : null;
      return fb || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  })());
});

self.addEventListener('message', (e) => {
  const d = e.data;
  if (d === 'skipWaiting' || (d && d.type === 'SKIP_WAITING')) self.skipWaiting();
});
