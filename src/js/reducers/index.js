/* @flow */
'use strict'

import { combineReducers } from 'rereduce'

import componentsState from './components-state'
import user from './user'
import settings from './settings'
import currentGame from './current-game'

const root = combineReducers({
  componentsState,
  user,
  settings,
  currentGame
})


export default root
