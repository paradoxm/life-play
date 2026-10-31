// The service worker exists only so older Chromium versions treat the game as installable. It caches nothing:
// every request goes to the network as before, so updates (version.json) work the same.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') event.respondWith(fetch(event.request));
});
