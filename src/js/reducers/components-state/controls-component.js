/* @flow */
'use strict'

import {
  Map
} from 'immutable'

import {
  SWITCH_CONTROL_STATE
} from '../../actions/constants'

export const initialState = Map({
  disabled: false
})

const reducer = (state: Map<string, boolean> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
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
