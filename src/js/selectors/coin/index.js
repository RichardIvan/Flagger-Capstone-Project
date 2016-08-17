/* @flow */
'use strict'

export function getCurrentCoinPosition(state: Object) {
  // console.log(store.getState())
  return 'demo'
}

export function getCoinRotateY(state: Object) {
  return state.currentGame.coin.get('rotateY')
}
