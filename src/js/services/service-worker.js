/* @flow */
'use strict'

import CacheControl from './cache-control'
import NetworkControl from './network-control'

const staticCacheName = 'guess-what-v1'

self.addEventListener('install', (event) => {

  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log(cache)
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
        '/js/index.js',
        '/manifest.json'
      ])
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('guess-what-') &&
                 cacheName !== staticCacheName
        }).map((cacheName) => {
          return caches.delete(cacheName)
        })
      )
    })
  )
})
//
export function parseURL(requestURL: string) {

  const url = new URL(requestURL)
  const pathname = url.pathname
  const pathnameInfo = pathname.split('/')

  pathnameInfo.shift()

  return {
    endpoint: pathnameInfo[0],
    origin: pathnameInfo[1],
    destination: pathnameInfo[2],
    searchBy: pathnameInfo[3],
    day: pathnameInfo[4],
    time: pathnameInfo[5]
  }
}

self.addEventListener('fetch', (event) => {

  const url = event.request.url
  const dataFromURL = parseURL(url)

  const endpoint = dataFromURL.endpoint

  switch (endpoint) {
    case 'browser-sync':
    case 'sockjs-node':
      break
    default:
      event.respondWith(CacheControl.getFromCache(event, NetworkControl.fetchFromNetwork.bind(null, event)))
      break
  }
})
