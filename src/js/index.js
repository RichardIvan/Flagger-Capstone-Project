/* @flow */
'use strict'

// const store = configureStore()
// mountRoot(body, { store })

import '../css/normalize.css'

import { mountRoute } from './containers'

const rootElement = document.getElementById('app')

mountRoute(rootElement)
