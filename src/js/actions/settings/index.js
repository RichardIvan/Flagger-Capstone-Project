/* @flow */
'use strict'

import {
  TOGGLE_SOUND_SETTING
} from '../constants'

export function toggleSounds(currentSoundStatus) {
  return {
    type: TOGGLE_SOUND_SETTING,
    payload: !currentSoundStatus
  }
}
