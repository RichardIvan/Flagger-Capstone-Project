'use strict'

import { configureStore } from '../store'
// import { connectToSocket } from '../helpers'

import { startResponsiveStateService } from '../services/mobile-state'

// import 'normalize-css'
import '../../css/global-styles.scss'
// import '../../fonts/Roboto-Regular.ttf'

import m from 'mithril'

const store = configureStore()

startResponsiveStateService()


// import styles from '../components/styles.scss'

const Root = {
  view () {
    return m('#root')
  }
}

export default Root
