/* @flow */
'use strict'

import {
  SIGN_IN,
  SIGN_OUT
} from '../constants'

export function signIn() {
  return function(dispatch, state) {
    const action = {
      type: SIGN_IN
    }
    return true
  }
}

export function signOut() {
  return function(dispatch, state) {
    const action = {
      type: SIGN_OUT
    }
    return false
  }
}
