/* @flow */
'use strict'

import { createReducer } from 'rereduce'

import {
  Map
} from 'immutable'

// TODO initialState based oAuth call

export const initialState = new Map({
  isSignedIn: true
})

const reducer = createReducer((state = initialState, action) => {
  return state
})

export default reducer
