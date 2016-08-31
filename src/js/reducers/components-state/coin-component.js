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
  OVERLAY_COIN,
  REMOVE_COIN_OVERLAY,
  RESUME_GAME
} from '../../actions/constants'

export const initialState = new Map({
  overlayVisible: false
})

const coinState = (state: Map<string, bool> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case OVERLAY_COIN:
      return state.set('overlayVisible', true)
    case RESUME_GAME:
    case REMOVE_COIN_OVERLAY:
      return state.set('overlayVisible', false)
    default:
      return state
  }
}

export default coinState
