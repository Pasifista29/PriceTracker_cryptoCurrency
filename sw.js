if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {});

  navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
    function (registration) {
      // Registration was successful
      console.log(
        "Serviceworker registration successful with scope: ",
        registration.scope
      );
    },
    function (err) {
      // registration failed :(
      console.log("Serviceworker registration failed: ", err);
    }
  );
} else {
  console.log("Service workers are not supported.");
}
////////////////////////////////////////////////////////////////////////////////////

if ("serviceWorker" in navigator) {
  navigator.serviceworker
    .register("/sw.js")
    .then((registration) => {})
    .addEventListener("updatefound", () => {
      // If updatefound is fired, it means that there's a new service worker being installed.
      const installingworker = registration.installing;
      console.log(
        "A new service worker is being installed:",
        installingworker // You can listen for changes to the installing service worker's state via installingworker.onstatechange
      );
    })
    .catch((error) => {
      console.error("Service worker registration failed: " + error);
    });
} else {
  console.error("Service workers are not supported.");
}

// /////////////////////////////////////////////////////////////////////////////////////////
var CACHE_NAME = "my-site-cache-v1";
var urlsToCache = ["/", "index.html", "styles/main.css", "/script/main.js"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

///////////////////////////////////////////////////////////////////////////////

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit
      if (response) {
        return response;
      }

      // No cache hit, fetch from network
      return fetch(event.request);
    })
  );
});
