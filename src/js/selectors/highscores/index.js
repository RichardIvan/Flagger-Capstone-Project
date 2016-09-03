/* @flow */
'use strict'

export function getHighscores(state: Object) {
  return state.highscores.toJS()
}
