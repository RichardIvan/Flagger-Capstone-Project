/* @flow */
'use strict'

import { describe, it, beforeEach } from 'mocha'
import expect from 'expect'

import {
  Map
} from 'immutable'

import {
  overlayCoin,
  removeCoinOverlay
} from '../../../../../src/js/actions'

import reducer, { initialState } from '../../../../../src/js/reducers/components-state/coin-component'

describe('Coin Component State', () => {
  describe('Initial State', () => {
    it('should have correct initial state', () => {
      expect(reducer(initialState)).toEqual(Map({
        overlayVisible: false
      }))
      expect(reducer(initialState, { type: 'DUNNO'})).toEqual(initialState)
    })
  })
  describe('Reducer actions', () => {
    describe('#OVERLAY_COIN', () => {
      it('should set the overlay state to true', () => {
        expect(reducer(initialState, overlayCoin())).toEqual(Map({
          overlayVisible: true
        }))
      })
    })
    describe('#REMOVE_COIN_OVERLAY', () => {
      it('should set the overlay state to false', () => {
        const state = Map({
          overlayVisible: true
        })
        expect(reducer(state, removeCoinOverlay())).toEqual(Map({
          overlayVisible: false
        }))
      })
    })
  })
})
