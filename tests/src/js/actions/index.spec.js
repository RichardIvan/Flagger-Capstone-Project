/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import { isFSA } from 'flux-standard-action'

import {
  SHOW_ACHIEVEMENTS,
  SHOW_HIGHSCORES
} from '../../../../src/js/actions/constants'

import {
  showAchievements,
  showHighscores
} from '../../../../src/js/actions/side-nav'

describe('Show Achievements Action Creator', () => {
  it('should be FSA', () => {
    expect(isFSA(showAchievements())).toBe(true)
  })
  it('should return the correct action', () => {
    expect(showAchievements()).toEqual({
      type: SHOW_ACHIEVEMENTS
    })
  })
})

describe('Show Highscore', () => {
  it('should should be FSA', () => {
    expect(isFSA(showHighscores())).toBe(true)
  })
  it('should return the correct action', () => {
    expect(showHighscores()).toEqual({
      type: SHOW_HIGHSCORES
    })
  })
})
