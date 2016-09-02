/* @flow */
'use strict'

const NetworkControl = (function() {
  const _object = {
    fetchFromNetwork(event: Object) {
      console.log('network fetch')
      const url = event.request.url
      return fetch(url).catch(err => err)
    }
  }
  return _object
}())

export default NetworkControl

export function isOnline() {
  return navigator.onLine
}
