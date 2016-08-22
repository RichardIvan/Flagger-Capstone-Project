/* @flow */
'use strict'

export function getCurrentCoinPosition(state: Object) {
  // console.log(store.getState())
  return 'demo'
}

export function getCoinRotateY(state: Object) {
  return state.currentGame.getIn(['coin', 'rotateY'])
}

export function getCoinRotateZ(state: Object) {
  return state.currentGame.getIn(['coin', 'rotateZ'])
}

export function isCoinOverlayVisible(state: Object) {
  return state.componentsState.coinState.get('overlayVisible')
}
