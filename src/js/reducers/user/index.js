/* @flow */
'use strict'

import { createReducer } from 'rereduce'

import {
  Map
} from 'immutable'

// TODO initialState based oAuth call
import {
  SIGN_IN,
  SIGN_OUT
} from '../../actions/constants'

export const initialState = new Map({
  isSignedIn: false
})

const reducer = createReducer((state = initialState, action) => {
  if (!action) return state
  switch (action.type) {
    case SIGN_IN:
      return state.set('isSignedIn', true)
    case SIGN_OUT:
      return state.set('isSignedIn', false)
    default:
      return state
  }
  return state
})

export default reducer
