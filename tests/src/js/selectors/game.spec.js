/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map,
  List
} from 'immutable'

import {
  isInfoboxVisible,
  getInfoboxText,
  getCurrentLevel,
  isGameInProgress,
  isExitPromptVisible,
  getPlayersScores
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
        level: 1,
        gameStatus: 'paused'
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
  describe('#isExitPromptVisible()', () => {
    it('should return correct State', () => {
      expect(isExitPromptVisible(state)).toBe(true)
      const newState = {
        currentGame: Map({
          gameStatus: 'ended'
        })
      }
      expect(isExitPromptVisible(newState)).toBe(false)
      const yetNewState = {
        currentGame: Map({
          gameStatus: 'playing'
        })
      }
      expect(isExitPromptVisible(yetNewState)).toBe(false)
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
  describe('#getPlayersScores()', () => {
    let state
    beforeEach(function () {
      state = {
        currentGame: Map({
          scores: List.of(0, 1000)
        })
      }
    })
    it('should return a List', () => {
      expect(getPlayersScores(state)).toBeA(Array)
    })
    it('should return correct scores', () => {
      expect(getPlayersScores(state)[0]).toBe(0)
      expect(getPlayersScores(state)[1]).toBe(1000)
    })
  })
})
