// Retire the previous Flutter worker so repeat visitors receive the static portfolio.
self.addEventListener("install", (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration.unregister());
});
