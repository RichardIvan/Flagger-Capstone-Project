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
  flipCoin,
  animateCoin,
  overlayCoin,
  removeCoinOverlay
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

describe('#animateCoin() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(animateCoin({roteateY: 180}))).toBe(true)
  })
  it('should return correct action', () => {
    expect(animateCoin({rotateY: 180})).toEqual({
      type: 'ANIMATE_COIN',
      payload: {
        values: {
          rotateY: 180
        }
      }
    })
  })
})

describe('#overlayCoin() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(overlayCoin())).toBe(true)
  })
  it('should return corrct action', () => {
    expect(overlayCoin()).toEqual({
      type: 'OVERLAY_COIN'
    })
  })
})

describe('#removeCoinOverlay() action creator', () => {
  it('should be FSA compliant', () => {
    expect(isFSA(removeCoinOverlay())).toBe(true)
  })
  it('should return corrct action', () => {
    expect(removeCoinOverlay()).toEqual({
      type: 'REMOVE_COIN_OVERLAY'
    })
  })
})
