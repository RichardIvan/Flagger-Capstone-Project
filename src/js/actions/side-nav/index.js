/* @flow */
'use strict'

import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION,
  SHOW_ACHIEVEMENTS,
  SHOW_HIGHSCORES
} from '../constants'

export function openNavigation() {
  return {
    type: OPEN_NAVIGATION
  }
}

export function closeNavigation() {
  return {
    type: CLOSE_NAVIGATION
  }
}

export function showAchievements() {
  return {
    type: SHOW_ACHIEVEMENTS
  }
}

export function showHighscores() {
  return {
    type: SHOW_HIGHSCORES
  }
}
