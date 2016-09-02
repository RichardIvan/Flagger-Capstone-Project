'use strict'

const CacheControl = (function() {

  const staticCacheName = 'guess-what-v1'

  const _object = {

    getCacheName: function() {
      return staticCacheName
    },
    putIntoCache: function(event, response) {
      caches.open(staticCacheName).then((cache) => {
        cache.put(event.request, response)
      }).catch(err => {
        throw err
      })
    },
    getFromCache: function(event, callback) {

      return caches.match(event.request).then((response) => {
        if (response && response.clone().ok) {
          return response
        }

        return callback()
          .then(resp => {

            let init = { 'status': 200, 'statusText': "OK"}
            let response = new Response(resp, init)
            CacheControl.putIntoCache(event, response.clone())
            return response

          })
          .catch(err => console.log(err))
      })


    }
  }

  return _object

})()

export default CacheControl
