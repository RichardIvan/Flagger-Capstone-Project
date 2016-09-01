/* @flow */
'use strict'

// const store = configureStore()
// mountRoot(body, { store })
// import '../manifest.json'
import '!file-loader?name=manifest.json!web-app-manifest-loader!../manifest.json'
// import '../manifest.json'
import '../css/normalize.css'

import { mountRoute } from './containers'

const rootElement = document.getElementById('app')

mountRoute(rootElement)
