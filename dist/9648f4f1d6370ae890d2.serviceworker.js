/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

//TODO chace common.js

console.log('hey from service worker');

// self.addEventListener('install', (event) => {
//   console.log('something happened')
// })

// import _ from 'lodash'
// // import now from 'performance-now'
//
// // import CacheControl from '../../helpers/CacheControl.js'
// // import DataControl from '../../helpers/DataControl.js'
// // import NetworkControl from '../../helpers/NetworkControl.js'
//
const staticCacheName = 'guess-what-v1';
// // const CacheControl = new CC(staticCacheName)
//
// self.addEventListener('install', (event) => {
//
//   // console.log(event)
//   // console.log(self)
//
//   event.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
//       return cache.addAll([
//         '/',
//         '/index.html',
//         '/css/main.css',
//         '/js/index.js'
//         // '/?/',
//         // '/?/index.html',
//         // '/?/css/main.css',
//         // '/?/js/index.js',
//         // '/stations/'
//       ])
//       .then(() => {
//         self.skipWaiting()
//       })
//     })
//   )
// })
//   .then((a) => {
//     // console.log(window)
//     const endpoints = ['data/', 'routes/']
//
//     const promises = _.map(endpoints, (endpoint) => {
//       const url = `${event.currentTarget.registration.scope}${endpoint}`
//
//       return fetch(url).then((response) => {
//         const dataRequest = new Request(endpoint)
//
//         return cache.put(dataRequest, response)
//       })
//     })
//
//     return Promise.all(promises)
//
//   }).catch((e) => console.log(e))
// })


//
// self.addEventListener('waiting', (event) => {
//   console.log('yeah waiting man')
// })
//
// self.addEventListener('redundant', (event) => {
//   console.log(event)
//   console.log('yeah waiting')
// })
//
// self.addEventListener('activate', (event) => {
//
//   console.log('have been activated')
//
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.filter((cacheName) => {
//           return cacheName.startsWith('transport-') &&
//                  cacheName !== staticCacheName
//         }).map((cacheName) => {
//           return caches.delete(cacheName)
//         })
//       )
//       // .then(_ => console.log('thats not true, its only triggered after install, actually next time the client has let go of the previeous controlling worker!'))
//     })
//   )
// })
//
self.addEventListener('fetch', event => {

  // console.log(event)
  //
  // const url = event.request.url
  // const dataFromURL = parseURL(url)
  //
  // const endpoint = dataFromURL.endpoint
  //
  // // console.log('ENDPOINT IN SW')
  // // console.log(endpoint)
  //
  // switch (endpoint) {
  //   case 'data':
  //   case 'routes':
  //     // getFromCache accepts event / event.request and callbackFunction in case there is no data in in the cache
  //     event.respondWith(
  //       CacheControl.getFromCache(event, NetworkControl.fetchFromNetwork.bind(null, event))
  //       )
  //     break
  //   case 'journey':
  //     // let thingy = CacheControl.getFromCache(event, DataControl.getRoute.bind(null, event, pathnameInfo))
  //     // console.log()
  //     console.log(dataFromURL)
  //
  //     event.respondWith(
  //       CacheControl.getFromCache(event, DataControl.getRoute.bind(null, event, dataFromURL))
  //         // .then(resp => {
  //         //   console.log(resp)
  //         //   return resp
  //         //   // let init = { 'status': 200, 'statusText': "OK"}
  //         //   // return new Response(resp, init)
  //         // })
  //     )
  //     // accepts callback that will construct the necessary response for the route
  //     // this function searches data by passed in route Info
  //     // return
  //     break
  //   case 'stations':
  //     event.respondWith(
  //       CacheControl.getFromCache(event, NetworkControl.fetchFromNetwork.bind(null, event))
  //     )
  //     break
  //   case 'realtime':
  //     event.respondWith(
  //       NetworkControl.fetchFromNetwork(event)
  //     )
  //     break
  //   case 'browser-sync':
  //   case 'sockjs-node':
  //     break
  //   default:
  //     event.respondWith(CacheControl.getFromCache(event, NetworkControl.fetchFromNetwork.bind(null, event)))
  //     // // event.respondWith(CacheControl.getFromCache(event, NetworkControl.fetchFromNetwork.bind(null, event)))
  //     // event.respondWith(CacheControl.getFromCache(event, NetworkControl.fetchFromNetwork.bind(null, event, false)))
  //     break
  // }
});

/***/ }
/******/ ]);
//# sourceMappingURL=9648f4f1d6370ae890d2.serviceworker.js.map