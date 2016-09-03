/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  OVERLAY_COIN,
  REMOVE_COIN_OVERLAY,
  RESUME_GAME,
  START_GAME
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
    case START_GAME:
      return state.set('overlayVisible', false)
    default:
      return state
  }
}

export default coinState
