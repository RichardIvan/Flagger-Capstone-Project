/* @flow */
'use strict'

export function isOverlayOpen(state: Object) {
  return state.componentsState.overlayState.get('open')
}

export function isExitPromptVisible(state: Object) {
  return state.currentGame.get('gameStatus') === 'paused'
}
