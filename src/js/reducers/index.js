/* @flow */
'use strict'

import { combineReducers } from 'rereduce'

import componentsState from './components-state'
import user from './user'
import settings from './settings'

const root = combineReducers({
  componentsState,
  user,
  settings
})


export default root
