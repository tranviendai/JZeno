'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2020947b87f43382a52cd5ae7bdc876f",
"assets/AssetManifest.bin.json": "ea45d6314426111639ba290c9bcad73f",
"assets/AssetManifest.json": "1415898d267eb23e1d815c16127e4b05",
"assets/FontManifest.json": "daa6cb4f3ef5c46795a886aa3d702712",
"assets/fonts/Lora-italic.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/fonts/Lora.ttf": "ea5cbfa365fc139fc6d7b4ad26287e2e",
"assets/fonts/MaterialIcons-Regular.otf": "c812b405ea8ad20b224d51636ccf3a7b",
"assets/images/avt.jpg": "5bc41c194f8733a548b5f9e4e31a9203",
"assets/images/avt1.jpg": "01ff01668030ecddf0ea4ee9479b9a76",
"assets/images/aws.png": "33ebfbcb9e545fc72bf311651ccfc2da",
"assets/images/boostrap.png": "5c58e1a23accebe5e9db738f81306211",
"assets/images/c%2523.png": "327298ec25a4ae2661f2f9e74d9e17c4",
"assets/images/cat.gif": "80db15b7fefc63b153d72d8dac735787",
"assets/images/css.png": "f24364a348a9f91675db9ffe3c248088",
"assets/images/dart.png": "55fcf3fc1bff0c00ab8463c33ebfbbc0",
"assets/images/dev.gif": "65256658671cd7078435bd1285ac16c7",
"assets/images/entityframe.png": "58fe7e59a768f4e4419c16a1c404d579",
"assets/images/firebase.png": "cf17e1ad447577d45b349f355d6179b5",
"assets/images/flutter.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/images/html.png": "b5508b02768fda19b844ae6da8586f58",
"assets/images/java.jpg": "46659831145900027eaae3c8ce7234d5",
"assets/images/javascript.png": "d5ee029a5980fc1e164d078b7801f2bb",
"assets/images/jquery.png": "6bc97da4142391e6a90b289601267c4a",
"assets/images/json.png": "0330b1f11baf3f6ba12ba4507aba8aba",
"assets/images/jzeno.webp": "dfc062d54cabb7c0ec2b8f32bb7ba5f1",
"assets/images/kotlin.png": "d3a19932ef94fc3c0c316260c028dc36",
"assets/images/mysql.png": "75188fc6059274e782d243e64e5688c8",
"assets/images/netcore.png": "5b5ac2b4ed923c08887abb68a0fe661b",
"assets/images/project01.png": "508e06880fbdf0e52ea465257983898d",
"assets/images/project02.png": "f178820aa65c71c49a9c25ee541db9ba",
"assets/images/project03.png": "f3ce3dbb2af57204ecabb0eb478b16ca",
"assets/images/project04.png": "4329eaecc40329cfc90da897b5466294",
"assets/images/project05.png": "3109d758e3aadc1cdaf14837e51f7b36",
"assets/images/project06.png": "0b607da4fcc705862ca723f09f9e1816",
"assets/images/project07.png": "de8830caa2072b150e628392b73e645d",
"assets/images/runner.gif": "eb14b33f66c81920bca72f2aedbc64cd",
"assets/images/sass.png": "3bd625947a6ac06505de5e3b60d20359",
"assets/images/sql.png": "7a76cff597d8b80b3f1dc36a28bdd39d",
"assets/images/stargif.gif": "ff4c13cc4f5906a8b9096489774f26fb",
"assets/images/stars-changing-colors.gif": "ba3fb665381d8df639a3660b8ab30519",
"assets/images/wordpress.png": "521c7831ab6ab8bb32ec4418dc008b0b",
"assets/NOTICES": "145ba8b57751f21b92b86355d896c14b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "63be71b3ac04c9f39367ec1f4b53965a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1ee8380343190d911ff8aa360e67ce3",
"/": "a1ee8380343190d911ff8aa360e67ce3",
"main.dart.js": "28b2cdfb347fe6dc9a79f654e966d35f",
"manifest.json": "b8d8e5f808af9c109f2611fef9e42d03",
"version.json": "3f61004888d224348a1e9f6a7a0a593e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
