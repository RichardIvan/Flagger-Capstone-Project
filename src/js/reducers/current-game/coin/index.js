/* @flow */
'use strict'

import { createReducer } from 'rereduce'

import { Map } from 'immutable'

import {
  SET_COIN_POSITION,
  FLIP_COIN
} from '../../../actions/constants'

export const initialState = new Map({
  rotateY: 0,
  rotateZ: 0
})

const reducer = createReducer((state = initialState, action) => {
  if (!action) return state
  switch (action.type) {
    case SET_COIN_POSITION:
      return state.merge(action.payload)
    case FLIP_COIN:
      return state.set('rotateY', state.get('rotateY') + 180)
    default:
      return state
  }
})

export default reducer
