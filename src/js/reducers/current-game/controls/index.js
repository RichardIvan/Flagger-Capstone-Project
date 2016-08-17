/* @flow */
'use strict'

import { createReducer } from 'rereduce'

import {
  List,
  Map
} from 'immutable'

import {
  SET_CONTROLS
} from '../../../actions/constants'

export const initialState = List.of(
  Map({
    rotateY: 0,
    rotateZ: 0
  }),
  Map({
    rotateY: 0,
    rotateZ: 90
  }),
  Map({
    rotateY: 180,
    rotateZ: 180
  })
)

const reducer = createReducer((state = initialState, action) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case SET_CONTROLS:
      return action.payload
    default:
      return state
  }
})

export default reducer
