/* @flow */
'use strict'

export function isOverlayOpen(state: Object) {
  return state.componentsState.overlayState.get('open')
}
