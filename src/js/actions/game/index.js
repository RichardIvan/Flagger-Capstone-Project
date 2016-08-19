/* @flow */
'use strict'

import {
  START_GAME,
  NEW_ROUND,
  SET_GAME_LEVEL
} from '../constants'

export function startGame() {
  return {
    type: START_GAME
  }
}

export function newRound() {
  return {
    type: NEW_ROUND
  }
}

export function setGameLevel(lvl: number) {
  let level = lvl || 1
  return {
    type: SET_GAME_LEVEL,
    payload: {
      level
    }
  }
}
