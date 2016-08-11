/* @flow */
'use strict'

import { createReducer } from 'rereduce'

import { Map } from 'immutable'

import {
  TOGGLE_SOUND_SETTING
} from '../../actions/constants'

export const initialState = new Map({
  sounds: true
})

const reducer = createReducer((state = initialState, action) => {
  console.log(state.get('sounds'))
  switch (action.type) {
    case TOGGLE_SOUND_SETTING:
      return state.set('sounds', action.payload)
    default:
      return state
  }
})

export default reducer
