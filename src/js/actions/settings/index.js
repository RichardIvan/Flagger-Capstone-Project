/* @flow */
'use strict'

import {
  SIGN_IN,
  SIGN_OUT,
  TOGGLE_SOUND_SETTING
} from '../constants'

export function toggleSounds(store: Object) {
  const currentSoundsState = store.getState().settings.get('sounds')

  const action = {
    type: TOGGLE_SOUND_SETTING,
    payload: !currentSoundsState
  }

  store.dispatch(action)
}

export function signIn(store: Object) {
  store.dispatch({
    type: SIGN_IN
  })

}

export function signOut(store: Object) {
  store.dispatch({
    type: SIGN_OUT
  })
}
