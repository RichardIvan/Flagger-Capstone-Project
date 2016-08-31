/* @flow */
'use strict'

import {
  Map
} from 'immutable'

import {
  SWITCH_CONTROL_STATE,
  RESUME_GAME
} from '../../actions/constants'

export const initialState = Map({
  disabled: false
})

const reducer = (state: Map<string, boolean> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case RESUME_GAME:
      return state.set('disabled', false)
    case SWITCH_CONTROL_STATE:
      const newStatus = action.payload.disabled
      if (typeof newStatus === 'boolean')
        return state.set('disabled', newStatus)
      return state
    default:
      return state
  }
}

export default reducer
