'use strict'

import { configureStore } from '../store'
// import { connectToSocket } from '../helpers'

import { startResponsiveStateListener } from '../services/mobile-state'

// import 'normalize-css'
import './global-style.scss'
import '../../fonts/Roboto-Regular.ttf'

import m from 'mithril'

const store = configureStore()

startResponsiveStateListener()


import styles from '../components/styles.scss'

const Root = {
  view (vnode) {
    return m('#root')
  }
}

export default Root
