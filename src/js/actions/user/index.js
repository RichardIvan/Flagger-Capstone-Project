/* @flow */
'use strict'

import {
  SIGN_IN,
  SIGN_OUT
} from '../constants'

export function signIn() {
  return function(dispatch, state: Object) {
    const action = {
      type: SIGN_IN
    }
    dispatch(action)
  }
}

export function signOut() {
  return function(dispatch, state: Object) {
    const action = {
      type: SIGN_OUT
    }
    dispatch(action)
  }
}
