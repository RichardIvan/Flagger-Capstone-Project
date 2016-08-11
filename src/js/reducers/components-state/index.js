/* @flow */
'use strict'

import { combineReducers } from 'rereduce'

import settingsState from './settings-component'
import navigationState from './navigation-component'

const componentsState = combineReducers({
  settingsState,
  navigationState
})

export default componentsState
