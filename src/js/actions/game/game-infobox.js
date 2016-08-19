/* @flow */
'use strict'

import {
  SHOW_GAME_INFO,
  HIDE_GAME_INFO
} from '../constants'

export function showGameInfo(text: string) {
  if (!text) throw new Error('No text passed in!')
  return {
    type: SHOW_GAME_INFO,
    payload: {
      text
    }
  }
}

export function hideGameInfo() {
  return {
    type: HIDE_GAME_INFO
  }
}
