/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  TOGGLE_SOUND_SETTING
} from '../../actions/constants'

export const initialState = new Map({
  sounds: true
})

const reducer = (state: Map<string, bool> = initialState, action: Object) => {
  switch (action.type) {
    case TOGGLE_SOUND_SETTING:
      return state.set('sounds', action.payload)
    default:
      return state
  }
}

export default reducer
