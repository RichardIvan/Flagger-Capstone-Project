/* @flow */
'use strict'

import { configureStore } from '../store'
// import { connectToSocket } from '../helpers'

import { startResponsiveStateService } from '../services/mobile-state'

// import 'normalize-css'
import '../../css/global-styles.scss'
import '../../css/initial-load-styles.scss'
// import '../../fonts/Roboto-Regular.ttf'

import m from 'mithril'

/**
 * Calling this method initializes Redux Store
 * @param takes in initial state of the store
 * @return returns a store instance with mithril subscribed to store changes
 */
const store = configureStore()

/**
 * startResponsiveStateService starts a onwindow resize listener that is setting
 * the current responsive state of the application. Options are mobile/desktop
 */
startResponsiveStateService()

import RootComponent from '../components/Root'

// import styles from '../components/styles.scss'

const Root = {
  view () {
    return m(RootComponent, { store })
  }
}

export default Root
