/* @flow */
'use strict'

import { Map } from 'immutable'

import {
  createReducer
} from 'rereduce'

import {
  TOGGLE_SETTINGS_OPEN_STATE
} from '../../actions/constants'

export const initialState = new Map({
  open: true
})

const settingsState = createReducer((state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS_OPEN_STATE:
      return state.set('open', action.payload)
    default:
      return state
  }
})

export default settingsState
