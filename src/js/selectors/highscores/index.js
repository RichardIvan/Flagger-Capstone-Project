/* @flow */
'use strict'

export function getHighscores(state: Object) {
  return state.highscores.toJS()
}

export function isHighscoresVisible(state: Object) {
  return state.componentsState.highscoresState.get('visible')
}
