'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/fonts/english/Hanuman-Light.ttf": "c40229474c002ec32540da57cbc8cd1b",
"assets/assets/fonts/english/Poly-Regular.ttf": "a28e954c07d9c7318f9554fa25a8c086",
"assets/assets/images/skanda.jfif": "e7b15e04653d381c4cac6be7d3bf626c",
"assets/assets/images/katha1.png": "12afd12ed1316465beed0b07ec7aaa7c",
"assets/assets/images/logo.png": "9b5e28fd28ac84b9b877dc6bd6a34430",
"assets/assets/images/bookTemplate.png": "79b4dbc9761b9d4b66a86d6090b1840b",
"assets/assets/images/kurma.jfif": "7550d1391201e8310afd9f372daccb6b",
"assets/assets/images/41846633-lord-vishnu-a-hindu-god.webp": "a144c25c33d1516da2e221d43c99c761",
"assets/assets/images/Gita1.jpg": "c6e9df54b7cfa78d0187b1223e47b6cc",
"assets/assets/images/download.jfif": "d185bca6fb55ddf209655edc222adc8d",
"assets/assets/images/Ramayaan1.jpg": "0dbf8caed30851b72b1246209affa5f7",
"assets/assets/images/Bhagavata.jpg": "be80cfa9d2ebecf90aca722c15680f21",
"assets/assets/images/vamana.jpg": "ae208eb48d2627dff63bdf2e79399da7",
"assets/assets/images/Mahabharat1.jpg": "cd0f97afdcffff6efc37ab0327f3296f",
"assets/assets/images/markandeya.jpg": "a1746bba82cb29eecf1eb5d1446b2b26",
"assets/assets/images/ram1.jpg": "14bcfdc1dccc714ec768ce0ea8a5b058",
"assets/assets/images/maha.jfif": "6ebf3cf7ce4d30ac65a1b5f714b084ab",
"assets/assets/images/lord-brahma-vector-character.jpg": "a7daf9a6bb1605fb2eb8789d23c62541",
"assets/assets/images/Mahadev.jpg": "779882d8a8b857ddd335c575945f35a9",
"assets/assets/images/padmapuran.jpeg": "df27b54d064e70be82a6c913f3a05708",
"assets/assets/images/lakmi.jfif": "776938b23bd9d245ff5056c1aaa21dec",
"assets/assets/images/purana.jpg": "d70b78b18eb53f21025378613173df01",
"assets/assets/images/agni.jfif": "009d61e00ea9bd05c22ded4cdecf9f89",
"assets/assets/images/garuda.jpg": "1f1429894d6da0b9a9daee17d98235b7",
"assets/assets/images/artis/img.png": "a48ea701c26cce85f6dfb044bfab17ae",
"assets/assets/images/artis/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/artis/shiv.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/artis/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/artis/ramayan__1_-removebg-preview.png": "ff2ccb2d9b1f587884f61d38a904386f",
"assets/assets/images/artis/ganpati1.png": "410b049c9b3112f1cd7a2aa9d9e9ec09",
"assets/assets/images/artis/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/artis/mahabharata.png": "7a3c73cb6f5a588ca60c6a117bdeb3c3",
"assets/assets/images/artis/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/assets/images/artis/Lucifer.jpeg": "2f6a3a8b1be2a479bfe6e5f22f471ef5",
"assets/assets/images/artis/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/bhrama.jpg": "abdaeef0d2b00e99f19e82cf0b19da35",
"assets/assets/images/place_holder/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/place_holder/ramayan__1_-removebg-preview.png~": "ff2ccb2d9b1f587884f61d38a904386f",
"assets/assets/images/place_holder/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/place_holder/ramayan__1_-removebg-preview.png": "e12083fbbbe9056185d6c1e576066e64",
"assets/assets/images/place_holder/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/place_holder/mahabharata.png": "896b7d9488d0ce35852f3bca1af849f5",
"assets/assets/images/place_holder/mahabharata.png~": "7a3c73cb6f5a588ca60c6a117bdeb3c3",
"assets/assets/images/place_holder/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/assets/images/place_holder/Lucifer.jpeg": "2f6a3a8b1be2a479bfe6e5f22f471ef5",
"assets/assets/images/place_holder/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/linga.jfif": "aedcdb0a88eb5676b400130cbdbc2652",
"assets/assets/images/bookTemplate350x500.png": "ef19d4cfdbf36cc8bc20cbc50f0efa69",
"assets/assets/images/Varaha.jpg": "4e60528060098f8272d462b044c313dc",
"assets/assets/images/kurma.png": "ead68e9d053203e81294060819db5525",
"assets/assets/images/shiv.jpg": "b517670deb5875fb82ef4e4bbc415388",
"assets/assets/images/matsiya.jpg": "3913ed9777167ab32a5dd00cd3f87938",
"assets/assets/images/brahmavaivarta.jfif": "be05e950eac1d47ec8cf28c9d2b18721",
"assets/assets/images/bhavishya.jfif": "d2d67aff78a328acd799771fa8428792",
"assets/assets/epub/hindi/Gita.epub": "e7e0a808b317c4dbb3472eda9949cfbb",
"assets/assets/epub/hindi/Ramayan.epub": "d9f66bc76eea852d8d86e5e10c2b6f11",
"assets/assets/epub/hindi/Vishnu-Purana.epub": "d6fa2465a477b427b371f7826c10afac",
"assets/assets/epub/hindi/Brahma-Purana.epub": "e353221adb036687ea5fdba63daa08bd",
"assets/assets/epub/hindi/Mahabharat.epub": "989679b30d92235865cd7f84dd027b27",
"assets/assets/epub/hindi/Shiva-Maha-Purana.epub": "04525ce0e43018589729fc5a8dd8cff9",
"assets/assets/epub/hindi/Garuda-Purana.epub": "715a1def1f282fcb9047a09adb1e52c4",
"assets/assets/epub/english/Gita.epub": "ee6756a30454f356109555bcc649b628",
"assets/assets/epub/english/Linga-Purana.epub": "c185cffb7eaf983ace5b566fd2cca2c4",
"assets/assets/epub/english/Bhavishya-Purana.epub": "45cc2f04ea2378405b27a67de4ecf4af",
"assets/assets/epub/english/Varaha-Purana.epub": "03838d8458e254bf6340d8972ec9d41f",
"assets/assets/epub/english/Vishnu-Purana.epub": "d872f92ea38eb8d25180fb6dae7faab0",
"assets/assets/epub/english/Agni-Purana.epub": "fea448b649d712bc939d025d4878ee0d",
"assets/assets/epub/english/Padma-Purana.epub": "0becaf1e1bb5624bfdcf72025c85f052",
"assets/assets/epub/english/Shrimad-Bhagavata-Purana.epub": "f4d5d5662cd626bffb8b94695adbda71",
"assets/assets/epub/english/Markandeya-Purana.epub": "662252544c9460377058c6764bcb7273",
"assets/assets/epub/english/Brahma-Vaivart-Purana.epub": "555743fd4925603e8792e35751c655e3",
"assets/assets/epub/english/Matsya-Purana.epub": "416a34f17a967f97c0b90d6fec91a3f6",
"assets/assets/epub/english/Brahmananda-Purana.epub": "1531789a058f00988e5ebdb54ffeb859",
"assets/assets/epub/english/Brahma-Purana.epub": "c408aead8f4ef29e1fdfd42207061f04",
"assets/assets/epub/english/Vamana-Purana.epub": "7ba8753e5cc79b6c33bac0d3b3caaaf8",
"assets/assets/epub/english/Mahabharat.epub": "65fcf01d5c3e4b0a657d61d69f595e90",
"assets/assets/epub/english/Shiva-Maha-Purana.epub": "e90d6f44b25a04961512b6a87b829015",
"assets/assets/epub/english/Skanda-Purana.epub": "afa5d4ca4f1f86b72f913a1eddb4cc94",
"assets/assets/epub/english/Kurma-Purana.epub": "cc49634bec9f29c6df75dec2d31e5b21",
"assets/assets/epub/english/Garuda-Purana.epub": "fd56f4f36ce76f208d737bfc6c46b839",
"assets/assets/epub/english/Narad-Purana.epub": "0e89a2eda6cb68e6fd1e2d09b77f03e3",
"assets/assets/assets_music_music1.mp3": "fca7ab15e388ddb2f4fb84faa8b0a774",
"assets/assets/audio/assets_music_music1.mp3": "fca7ab15e388ddb2f4fb84faa8b0a774",
"assets/assets/markdown/artis/english/ganesh_aarti.md": "5aa89cd02821643790a07d890ade9046",
"assets/assets/markdown/artis/english/ganga_aarti.md": "fb0a71412a269e10de3998086e9ef292",
"assets/assets/markdown/artis/english/vaishnu_aarti.md": "a8933d37fb37dc69007b9890015245a5",
"assets/assets/markdown/artis/english/saraswati_aarti.md": "4b5681053c29dee1dd68db73fb9508a7",
"assets/assets/markdown/artis/english/vishkarma_aarti.md": "35d4fe26a5be67badd58173f35e38688",
"assets/assets/markdown/artis/english/shitla_aarti.md": "88d184a51bb50fb6f24b8968ec4581d5",
"assets/assets/markdown/artis/english/prshuram_aarti.md": "b0f861e9b22063200abf471a29678012",
"assets/assets/markdown/artis/english/saibaba_aarti.md": "07a5577e7598a7c03d8f3c5410262d5a",
"assets/assets/markdown/artis/english/shani_dev_aarti.md": "93ec7b4c8a9779940685d48402d27d13",
"assets/assets/markdown/artis/english/jagdish_aarti.md": "a7cc9fb8aa8a3149fa7980cf407e7e01",
"assets/assets/markdown/artis/english/sharda_aarti.md": "6fac7a1b67d309e5e8364b5d29374962",
"assets/assets/markdown/artis/english/suraya_aarti.md": "bb395c537d494aaee4dd0ee126c9c1ad",
"assets/assets/markdown/artis/english/gayatri_aarti.md": "5202d5cb35447a6c0caa40cb14227ff5",
"assets/assets/markdown/artis/english/tulsi_aarti.md": "0b72bc4a054a40460aae709008bab1e7",
"assets/assets/markdown/artis/english/shiv_aarti.md": "61c550de5a20233011c54adf338b07ed",
"assets/assets/markdown/artis/english/paarwati_aarti.md": "0062662923a3201ea3f8c944ff32709e",
"assets/assets/markdown/artis/english/santoshi_aarti.md": "df9f7d31804933c8069694714fe59ad5",
"assets/assets/markdown/artis/english/lakshami_aarti.md": "bfd4190788d3cfc23ac9bea52e1fedf1",
"assets/assets/markdown/artis/english/kali_aarti.md": "243a22242acf2fef22f409721ec97c5d",
"assets/assets/markdown/artis/english/vishnu_aarti.md": "b254dd45570afca284b914ed65c91fcf",
"assets/assets/markdown/artis/english/krishna_aarti.md": "9c3fefddb3d5886b2a66717344d98619",
"assets/assets/markdown/artis/english/ram_aarti.md": "8c786f23c824a1da036fa49130f63347",
"assets/assets/markdown/artis/english/ganpati_aarti.md": "ec51e954ec29a834c44f8cba4f372e7d",
"assets/assets/markdown/artis/english/hanumaan_aarti.md": "b590b7d299330e46dbdd97258550b155",
"assets/assets/markdown/artis/english/durga_aarti.md": "8e59f747ec68955fd66cf66bf8ffb5e8",
"assets/assets/markdown/artis/english/ambe_aarti.md": "fc72edf1b72aeb479b1ba7e3be1c83f1",
"assets/assets/markdown/artis/english/satyaaraya_aarti.md": "91853b14f6c839a802fadcca10309a0f",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "3bc584e3cf5c6cb83618d8e943f5e7b1",
"assets/AssetManifest.json": "85d8b14a609834b7699f2bc66827b9d5",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "7288a77669e66ea5bba2e9b1ce4915f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "e65131d93f0aadd31b580071f7a3a26f",
"manifest.json": "efb7479bc4188eb94b28931e448e187d",
"main.dart.js": "ea4970e832afcd1768db8e0bf093d582",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"splash/style.css": "fb03880b3b36c32c4165cafeca5fca0e",
"splash/img/dark-3x.png": "fd1d168c86f58cb986bfc1ab1416e1da",
"splash/img/light-2x.png": "215999dfadf3abe34358c88925806227",
"splash/img/light-3x.png": "fd1d168c86f58cb986bfc1ab1416e1da",
"splash/img/dark-4x.png": "b77b7778bf1f67e42bd1c8da00c0877f",
"splash/img/light-1x.png": "1ad8f9ab4fd45a7bd733f778119e8fbc",
"splash/img/light-4x.png": "b77b7778bf1f67e42bd1c8da00c0877f",
"splash/img/dark-1x.png": "1ad8f9ab4fd45a7bd733f778119e8fbc",
"splash/img/dark-2x.png": "215999dfadf3abe34358c88925806227",
"index.html": "751589de5dd4dc1bb8b2d868d00ab5d8",
"/": "751589de5dd4dc1bb8b2d868d00ab5d8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
