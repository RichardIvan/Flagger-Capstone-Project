/* @flow */
'use strict'

import { combineReducers } from 'rereduce'

import settingsState from './settings-component'
import navigationState from './navigation-component'
import overlayState from './overlay-component'

const componentsState = combineReducers({
  settingsState,
  navigationState,
  overlayState
})

export default componentsState
