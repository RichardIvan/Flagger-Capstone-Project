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

export function isGameInProgress(state: Object) {
    return state.currentGame.get('gameStatus') !== 'ended'
}

export function getPlayersScores(state: Object) {
  return state.currentGame.get('scores').toJS()
}

export function isNewHighScore(state: Object) {
  return state.currentGame.get('highscore')
}
