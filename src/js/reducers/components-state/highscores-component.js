/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  SHOW_HIGHSCORES,
  CLOSE_OVERLAY
} from '../../actions/constants'

export const initialState = new Map({
  visible: false
})

const highscoresState = (state: Map<string, bool> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case SHOW_HIGHSCORES:
      return state.set('visible', true)
    case CLOSE_OVERLAY:
      return state.set('visible', false)
    default:
      return state
  }
}

export default highscoresState
