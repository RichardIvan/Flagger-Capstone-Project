/* @flow */
'use strict'

import {
  START_GAME,
  NEW_ROUND,
  SET_GAME_LEVEL,
  SAVE_ROUND_RESULT,
  SAVE_ANIMATION_SEQUENCE
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

export function saveRoundResult(points: number) {
  return {
    type: SAVE_ROUND_RESULT,
    payload: {
      points: points || 0
    }
  }
}

export function saveAnimationSequence(payload: Array<Object>) {
  return {
    type: SAVE_ANIMATION_SEQUENCE,
    payload
  }
}
