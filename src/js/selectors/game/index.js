/* @flow */
'use strict'

export function isInfoboxVisible(state: Object) {
  return state.currentGame.getIn(['gameInfobox', 'visible'])
}

export function getInfoboxText(state: Object) {
  return state.currentGame.getIn(['gameInfobox', 'text'])
}

export function getCurrentLevel(state: Object) {
  return state.currentGame.get('level')
}
