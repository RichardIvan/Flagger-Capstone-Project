/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  createReducer
} from 'rereduce'

import {
  OPEN_NAVIGATION
} from '../../actions'

export const initialState = new Map({
  open: false
})

const navigationState = createReducer((state = initialState, action) => {
  switch (action.type) {
    case OPEN_NAVIGATION:
      return state.set('open', true)
    default:
      return state
  }
})

export default navigationState
