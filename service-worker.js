// Minimal service worker for Fidelis Plumbing PWA.
// It immediately takes control upon installation and activation.
self.addEventListener('install', (event) => {
  // Activate the service worker immediately after installation.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim all clients so the service worker starts controlling pages ASAP.
  event.waitUntil(self.clients.claim());
});

// Pass‑through fetch handler.  We could add caching logic here if
// desired, but the approved project only requires installability.
self.addEventListener('fetch', (event) => {
  // Default behaviour: let the network handle the request.
});