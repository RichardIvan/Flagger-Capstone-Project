/* @flow */
'use strict'

export function getCoinButtonsStyles(state: Object) {
  return state.currentGame.get('controls').toJS()
}