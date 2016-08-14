/* @flow */
'use strict'

import {
  SIGN_IN,
  SIGN_OUT
} from '../constants'

import {
  isOnline
} from '../../services/network-control'

import firebase from '../../services/firebase'

export function signIn() {
  return function(dispatch, state: Object) {
    if (isOnline()) {
      firebase.signIn()
        .then(result => {
          console.log(result)
          console.log(result)
          const action = {
            type: SIGN_IN
          }
          dispatch(action)
        })
        .catch(e => {
          console.log(e)
          console.log('Signed In failed!')
        })
    }
  }
}

export function signOut() {
  return function(dispatch, state: Object) {
    if (firebase.getUser()) {
      firebase.signOut()
        .then(result => {
          console.log(result)
          console.log(result)
          const action = {
            type: SIGN_OUT
          }
          dispatch(action)
        })
        .catch(e => console.log('Signed In failed!'))
    }
  }
}
