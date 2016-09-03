/* @flow */
'use strict'

import { List, fromJS } from 'immutable'

import {
  INITIAL_HIGHSCORES_LOAD
} from '../../actions/constants'

export const initialState = List.of()

const reducer = (state: List<List<string, number>> = initialState, action: Object) => {
  if (!action || !action.type) return state
  switch (action.type) {
    case INITIAL_HIGHSCORES_LOAD:
      return fromJS(action.payload.highscores)
    default:
      return state
  }
}

export default reducer
