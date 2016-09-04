/* @flow */
'use strict'

import { combineReducers } from 'rereduce'

import settingsState from './settings-component'
import navigationState from './navigation-component'
import overlayState from './overlay-component'
import coinState from './coin-component'
import controlsState from './controls-component'
import highscoresState from './highscores-component'
import applicationState from './application-state'

const componentsState = combineReducers({
  settingsState,
  navigationState,
  overlayState,
  coinState,
  controlsState,
  highscoresState,
  applicationState
})

export default componentsState
