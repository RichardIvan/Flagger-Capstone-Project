/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  initialState
} from '../../../../src/js/reducers/current-game'

import {
  Map,
  fromJS
} from 'immutable'

import {
  getCoinRotateY,
  getCurrentCoinState
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
  describe('#getCurrentCoinState()', () => {
    it('should return the current coin rotate values', () => {
      const state = {
        currentGame: Map({
          coin: Map({
            rotateY: 180,
            rotateZ: 90
          })
        })
      }
      expect(getCurrentCoinState(state)).toEqual(fromJS({
        rotateY: 180,
        rotateZ: 90
      }))
    })
  })
})
