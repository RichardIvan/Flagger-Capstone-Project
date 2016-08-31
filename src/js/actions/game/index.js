/* @flow */
'use strict'

import {
  START_GAME,
  NEW_ROUND,
  SET_GAME_LEVEL,
  SAVE_ROUND_RESULT,
  SAVE_ANIMATION_SEQUENCE,
  CHANGE_ROUTE,
  RESULTS_ROUTE,
  SHOW_EXIT_GAME_PROMPT,
  RESUME_GAME,
  CANCEL_GAME,
  REPLAY_GAME,
  EXIT_GAME,
  PLAYING_SINGLEPLAYER_ROUTE,
  MENU_ROUTE
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

export function showResults() {
  return {
    type: CHANGE_ROUTE,
    payload: {
      route: RESULTS_ROUTE
    }
  }
}

export function showExitGamePrompt() {
  return {
    type: SHOW_EXIT_GAME_PROMPT
  }
}

export function resumeGame() {
  return {
    type: RESUME_GAME
  }
}

export function cancelGame() {
  return {
    type: CANCEL_GAME
  }
}

export function replayGame() {
  return {
    type: REPLAY_GAME,
    payload: {
      route: PLAYING_SINGLEPLAYER_ROUTE
    }
  }
}

export function exitGame() {
  return {
    type: EXIT_GAME,
    payload: {
      route: MENU_ROUTE
    }
  }
}
