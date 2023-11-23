// https://github.com/nodexpertsdev/service-worker-cache-example/tree/master

/**
 * @desc Service worker file - All events and code of service worker will go here
 * Basically this file will run as proxy to intercept requests.
 * @author Mukul
 */

const cacheName = 'cache v1'
const filesToCache = [
  './index.html',
  './assets/MarckScript-Regular.ttf',
  './assets/img/x-drive.webp',
  './assets/img/solomia.webp',
  './assets/img/freecodecamp.webp',
  './assets/img/playground.webp',
  './sw.js',
]
// filesToCache = ['./']

// event.waitUntil will stop the flow till the Promise is resolved

self.addEventListener('install', function (event) {
  console.log('installing')
  event.waitUntil(
    // opens cache
    // cache is an object which is available inside service-worker
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', function (event) {
  console.log('activating')
  event.waitUntil(
    caches.keys().then(function (cachedFiles) {
      return Promise.all(
        cachedFiles.map(function (cacheFile) {
          // everytime a cache version changes, old files are removed from cache
          if (cacheFile !== cacheName) {
            console.log('Removing Cached Files from Cache - ', cacheFile)
            return caches.delete(cacheFile)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', function (event) {
  console.log('fetching')
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request)
    })
  )
})
