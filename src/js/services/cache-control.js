'use strict'

const CacheControl = (function() {

  const staticCacheName = 'transport-static-v2'

  const _object = {

    getCacheName: function() {
      return staticCacheName
    },
    putIntoCache: function(event, response) {
      caches.open(staticCacheName).then((cache) => {
        // console.log('Putting response in in Cache')
        cache.put(event.request, response)
      }).catch(err => {
        // console.error('Putting into Cache failed:', err)
        throw err
      })
    },
    getFromCache: function(event, callback) {

      if (event.url) {
        if( event.url.indexOf('/data/') !== -1 ) {
          console.log('FOUND DATA IN REQUEST')
          event.request = new Request('data/')
        } else if (event.url.indexOf('/routes/') !== -1 ) {
          console.log('FOUND ROUTES IN REQUEST')
          event.request = new Request('routes/')
        }
      }

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
