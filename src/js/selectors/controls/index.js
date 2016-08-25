/* @flow */
'use strict'

export function getCoinButtonsStyles(state: Object) {
  return state.currentGame.get('controls').toJS()
}

export function isControlsDisabled(state: Object) {
  return state.componentsState.controlsState.get('disabled')
}
