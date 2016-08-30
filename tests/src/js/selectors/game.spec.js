/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map
} from 'immutable'

import {
  isInfoboxVisible,
  getInfoboxText,
  getCurrentLevel,
  isGameInProgress
} from '../../../../src/js/selectors'

describe('Game Selectors', () => {
  let state

  beforeEach(function () {
    state = {
      currentGame: Map({
        gameInfobox: Map({
          visible: false,
          text: ''
        }),
        level: 1
      })
    }
  })
  describe('#getCurrentLevel()', () => {
    it('should returns currentLevel', () => {
      expect(getCurrentLevel(state)).toBe(1)
      state = {
        currentGame: Map({
          level: 2
        })
      }
      expect(getCurrentLevel(state)).toBe(2)
    })
  })
  describe('#isInfoboxVisible()', () => {
    it('should return the correct status', () => {
      expect(isInfoboxVisible(state)).toBe(false)
    })
  })
  describe('#getInfoboxText', () => {
    it('should return the correct state', () => {
      expect(getInfoboxText(state)).toBe('')
    })
  })
})

describe('Toolbar Selectors', () => {
  describe('isGameInProgress()', () => {
    let state
    beforeEach(function () {
      state = {
        currentGame: Map({
          gameStatus: 'ended'
        })
      }
    })
    it('should should return boolean', () => {
      expect(isGameInProgress(state)).toBeA('boolean')
    })
    it('should return correct status', () => {
      expect(isGameInProgress(state)).toBe(false)
      const newState = {
        currentGame: Map({
          gameStatus: 'playing'
        })
      }
      expect(isGameInProgress(newState)).toBe(true)
      const nextState = {
        currentGame: Map({
          gameStatus: 'paused'
        })
      }
      expect(isGameInProgress(nextState)).toBe(true)
    })
  })
})
