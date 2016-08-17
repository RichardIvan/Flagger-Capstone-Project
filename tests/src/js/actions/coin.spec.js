/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  isFSA
} from 'flux-standard-action'

import {
  FLIP_COIN
} from '../../../../src/js/actions/constants'

import {
  flipCoin
} from '../../../../src/js/actions/coin'

describe('Flip Coin Action Creator', () => {
  it('should return FSA action', () => {
    expect(isFSA(flipCoin())).toBe(true)
  })
  it('should return correct action', () => {
    expect(flipCoin()).toEqual({
      type: FLIP_COIN
    })
  })
})
