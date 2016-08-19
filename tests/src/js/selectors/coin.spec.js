/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  initialState
} from '../../../../src/js/reducers/current-game'

import {
  getCoinRotateY
} from '../../../../src/js/selectors/coin'

describe('Coin Position Selector', () => {
  let state

  beforeEach(function () {
    state = {
      currentGame: initialState
    }
  })
  describe('#getCoinRotateY', () => {
    it('should return correct rotateY value', () => {
      expect(getCoinRotateY(state)).toBe(0)
      const newState = {
          currentGame: state.currentGame.setIn(['coin', 'rotateY'], 90)
      }
      expect(getCoinRotateY(newState)).toBe(90)
    })
  })
})
