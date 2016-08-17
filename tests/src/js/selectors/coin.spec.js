/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  initialState
} from '../../../../src/js/reducers/current-game/coin'

import {
  getCoinRotateY
} from '../../../../src/js/selectors/coin'

describe.only('Coin Position Selector', () => {
  let state

  beforeEach(function () {
    state = {
      currentGame: {
        coin: initialState
      }
    }
  })
  describe('#getCoinRotateY', () => {
    it('should return correct rotateY value', () => {
      expect(getCoinRotateY(state)).toBe(0)
      const newState = {
          currentGame: {
            coin: state.currentGame.coin.set('rotateY', 90)
          }
      }
      expect(getCoinRotateY(newState)).toBe(90)
    })
  })
})
