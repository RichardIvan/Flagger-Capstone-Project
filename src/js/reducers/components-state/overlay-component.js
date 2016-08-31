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
  CHANGE_ROUTE,
  MENU_ROUTE,
  SHOW_EXIT_GAME_PROMPT,
  RESUME_GAME
} from '../../actions/constants'

export const initialState = Map({
  open: false
})

const navigationState = createReducer((state = initialState, action) => {
  if (!action) return state
  switch (action.type) {
    case SHOW_EXIT_GAME_PROMPT:
    case OPEN_NAVIGATION:
      return state.set('open', true)
    case RESUME_GAME:
    case CLOSE_NAVIGATION:
    case SIGN_IN:
    case SIGN_OUT:
      return state.set('open', false)
    case CHANGE_ROUTE:
      if (!action.payload || !action.payload.route) return state
      const route = action.payload.route
      if (route === MENU_ROUTE) return state.set('open', false)
      return state
    default:
      return state
  }
})

export default navigationState
