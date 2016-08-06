/* @flow */
'use strict'

// const store = configureStore()
// mountRoot(body, { store })

import { mountRoute } from './containers'

const rootElement = document.getElementById('app')

mountRoute(rootElement)
