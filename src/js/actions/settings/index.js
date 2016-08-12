/* @flow */
'use strict'

import {
  TOGGLE_SOUND_SETTING
} from '../constants'

export function toggleSounds(store: Object) {
  console.log(store.getState())
  const currentSoundsState = store.getState().settings.get('sounds')

  const action = {
    type: TOGGLE_SOUND_SETTING,
    payload: !currentSoundsState
  }

  store.dispatch(action)
}
