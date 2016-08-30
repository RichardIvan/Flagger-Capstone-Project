/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION,
  SIGN_IN,
  SIGN_OUT,
  SHOW_ACHIEVEMNTS,
  SHOW_HIGHSCORES,
  CHANGE_ROUTE,
  MENU_ROUTE
} from '../../actions/constants'

export const initialState = Map({
  open: false
})

const navigationState = (state: Map<string, bool> = initialState, action: Object) => {
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
    case CHANGE_ROUTE:
      if (!action.payload || !action.payload.route) return state
      const route = action.payload.route
      if (route === MENU_ROUTE) return state.set('open', false)
      return state
    default:
      return state
  }
}

export default navigationState
