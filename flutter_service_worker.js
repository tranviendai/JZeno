'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9a7a4dd07e8741751c2eaa97ab7c5e5d",
"version.json": "e93336c97039e0df27d619e14e448b4a",
"index.html": "2f593b0dc28db0518e623d933c3cd362",
"/": "2f593b0dc28db0518e623d933c3cd362",
"main.dart.js": "9d5ce5df09648fb33aa3a645c5406aed",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "483b125a51081e2fe4e9f5473cb973bf",
"icons/Icon-519.png": "483b125a51081e2fe4e9f5473cb973bf",
"icons/Icon-192.png": "483b125a51081e2fe4e9f5473cb973bf",
"icons/Icon-maskable-192.png": "483b125a51081e2fe4e9f5473cb973bf",
"icons/Icon-maskable-512.png": "483b125a51081e2fe4e9f5473cb973bf",
"manifest.json": "c3a64f1ef3f3e3e27426e6a784326994",
"assets/images/typescript.webp": "64b3cb983c1254c2f3d309d2f11ac0fb",
"assets/images/cat.gif": "80db15b7fefc63b153d72d8dac735787",
"assets/images/docker.png": "84295f963c6adbd26426b822c11fefe6",
"assets/images/netcore.png": "5b5ac2b4ed923c08887abb68a0fe661b",
"assets/images/json.png": "0330b1f11baf3f6ba12ba4507aba8aba",
"assets/images/flutter.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/images/angular.png": "cc660915fadc11275e5b41a33ab24d9c",
"assets/images/avt.jpg": "483b125a51081e2fe4e9f5473cb973bf",
"assets/images/sql.png": "7a76cff597d8b80b3f1dc36a28bdd39d",
"assets/images/jquery.png": "6bc97da4142391e6a90b289601267c4a",
"assets/images/github.png": "6259a9e2bcd1999d56211f299e99dcad",
"assets/images/firebase.png": "cf17e1ad447577d45b349f355d6179b5",
"assets/images/firebase.webp": "1a56c50cc8a1e0b42d8f88128412a259",
"assets/images/java.jpg": "46659831145900027eaae3c8ce7234d5",
"assets/images/sass.png": "3bd625947a6ac06505de5e3b60d20359",
"assets/images/aws.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/images/javascript.png": "d5ee029a5980fc1e164d078b7801f2bb",
"assets/images/figma.png": "b70ae9e0141dda2101ada76035dab700",
"assets/images/project07.png": "de8830caa2072b150e628392b73e645d",
"assets/images/entityframe.png": "58fe7e59a768f4e4419c16a1c404d579",
"assets/images/project06.png": "0b607da4fcc705862ca723f09f9e1816",
"assets/images/project04.png": "4329eaecc40329cfc90da897b5466294",
"assets/images/mysql.png": "75188fc6059274e782d243e64e5688c8",
"assets/images/wordpress.png": "521c7831ab6ab8bb32ec4418dc008b0b",
"assets/images/project05.png": "3109d758e3aadc1cdaf14837e51f7b36",
"assets/images/html.png": "b5508b02768fda19b844ae6da8586f58",
"assets/images/project01.png": "508e06880fbdf0e52ea465257983898d",
"assets/images/vuejs.png": "c2a605fbc0e687b2e1b4b90a7c445cdd",
"assets/images/swift.png": "d3ac03cc9417b47d3be0a3970a73aeaf",
"assets/images/project02.png": "f178820aa65c71c49a9c25ee541db9ba",
"assets/images/boostrap.png": "5c58e1a23accebe5e9db738f81306211",
"assets/images/project03.png": "f3ce3dbb2af57204ecabb0eb478b16ca",
"assets/images/nestjs.png": "5d6797753b2bbce11817e31210881960",
"assets/images/photoshop.png": "4e15d0a729401b5afc8f6e77eeee2e88",
"assets/images/css.png": "f24364a348a9f91675db9ffe3c248088",
"assets/images/c%2523.png": "327298ec25a4ae2661f2f9e74d9e17c4",
"assets/images/web_base.png": "a62c45abb936f0b2ac001a433510a327",
"assets/images/dart.png": "55fcf3fc1bff0c00ab8463c33ebfbbc0",
"assets/images/kotlin.png": "d3a19932ef94fc3c0c316260c028dc36",
"assets/AssetManifest.json": "4079b2af0b9f671d67791ac6bdfcd63c",
"assets/NOTICES": "e3ccef50cf9cdcbcb43490cc0be68f6f",
"assets/FontManifest.json": "daa6cb4f3ef5c46795a886aa3d702712",
"assets/AssetManifest.bin.json": "3dd2bebc18e9244c0a17d16909af5a0b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e86dd21e2585eb631e361d4ded129d8b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "17a49f3106f95b697fb888fe4eb82969",
"assets/fonts/Lora-italic.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/fonts/Lora.ttf": "ea5cbfa365fc139fc6d7b4ad26287e2e",
"assets/fonts/MaterialIcons-Regular.otf": "47778516d310b3b8efa736ace11db6f8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
