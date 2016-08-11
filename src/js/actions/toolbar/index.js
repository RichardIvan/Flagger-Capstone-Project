/* @flow */
'use strict'

import {
  TOGGLE_SETTINGS_OPEN_STATE,
  OPEN_NAVIGATION
} from '../constants'

import {
  isSettingsComponentOpen
} from '../../selectors'

export function toggleSettingsOpenState(store: Object) {
  const state = store.getState()
  store.dispatch({
    type: TOGGLE_SETTINGS_OPEN_STATE,
    payload: !isSettingsComponentOpen(state)
  })
}

export function openNavigation(store: Object) {
  store.dispatch({
    type: OPEN_NAVIGATION
  })
}
