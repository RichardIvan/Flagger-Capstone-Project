/* @flow */
'use strict'

import {
  TOGGLE_SETTINGS_OPEN_STATE
} from '../constants'

export function toggleSettingsOpenState(newState: bool) {
  return {
    type: TOGGLE_SETTINGS_OPEN_STATE,
    payload: newState
  }
}
