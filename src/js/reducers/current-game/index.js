/* @flow */
'use strict'

import { combineReducers } from 'rereduce'

import controls from './controls'
import coin from './coin'

const currentGameReducer = combineReducers({
  controls,
  coin
})

export default currentGameReducer
