/* @flow */
'use strict'

import {
  Map
} from 'immutable'

import {
  MOBILE_STATE_CHANGE
} from '../../actions/constants'

export const initialState = Map({
  isMobile: false
})

const reducer = (state: Map<string, boolean> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case MOBILE_STATE_CHANGE:
      return state.set('isMobile', action.payload.state.value)
    default:
      return state
  }
}

export default reducer
