/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  createReducer
} from 'rereduce'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION,
  SIGN_IN,
  SIGN_OUT,
  SHOW_ACHIEVEMNTS,
  SHOW_HIGHSCORES
} from '../../actions/constants'

export const initialState = new Map({
  open: false
})

const navigationState = createReducer((state = initialState, action) => {
  if (!action) return state
  switch (action.type) {
    case OPEN_NAVIGATION:
      return state.set('open', true)
    case CLOSE_NAVIGATION:
    case SIGN_IN:
    case SIGN_OUT:
    case SHOW_ACHIEVEMNTS:
    case SHOW_HIGHSCORES:
      return state.set('open', false)
    default:
      return state
  }
})

export default navigationState
