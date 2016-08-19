/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  SHOW_GAME_INFO,
  HIDE_GAME_INFO
} from '../../../../src/js/actions/constants'

import {
  showGameInfo,
  hideGameInfo
} from '../../../../src/js/actions/game/game-infobox'

describe('Test Action Creators', () => {
  describe('#showGameInfo', () => {
    it('should return correct action type', () => {
      expect(showGameInfo('3')).toEqual({
        type: SHOW_GAME_INFO,
        payload: {
          text: '3'
        }
      })
    })
    it('should be FSA comliant', () => {
      expect(isFSA(showGameInfo('3'))).toBe(true)
    })
    it('should throw if no text provided', () => {
      expect(showGameInfo.bind(null)).toThrow('No text passed in!')
    })
    it('should not throw if it has text', () => {
      expect(showGameInfo.bind(null, '3')).toNotThrow()
    })
  })
  describe('#hideGameInfo', () => {
    it('should return correct action type', () => {
      expect(hideGameInfo()).toEqual({
        type: HIDE_GAME_INFO
      })
    })
    it('should be FSA comliant', () => {
      expect(isFSA(hideGameInfo())).toBe(true)
    })
  })
})
